/**
 * Contact form handler — Cloudflare Pages Function.
 *
 * Replaces Netlify Forms. The site stays fully static; this is the only
 * server-side code in the project. Shared by both /contact (ContactForm) and
 * /start-a-project (ProjectForm) — the two post the same core fields
 * (name/email/phone/subject/message) plus budget/timeline, which this handler
 * treats as optional so either form works against it unchanged.
 *
 * Required environment variables (Cloudflare Pages → Settings → Environment):
 *   RESEND_API_KEY   Resend API key
 *   CONTACT_TO       where enquiries land, e.g. hello@misinc.com
 *   CONTACT_FROM     a verified Resend sender, e.g. website@misinc.com
 */

const MAX_FIELD = 5000

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })

const redirect = (request, path) =>
  new Response(null, { status: 303, headers: { location: new URL(path, request.url).href } })

/**
 * A non-JS submission's error redirect should land back on whichever page
 * sent it, not always /contact. There is no hidden "source page" field, so
 * this reads it off the Referer instead — good enough for a fallback path
 * that real (JavaScript) submissions never take.
 */
const formPage = (request) => {
  try {
    const path = new URL(request.headers.get('referer') ?? '', request.url).pathname
    return path === '/start-a-project' ? path : '/contact'
  } catch {
    return '/contact'
  }
}

/**
 * A fetch() submission wants JSON back. A plain <form> POST from a browser
 * without JavaScript wants to be sent somewhere — otherwise the visitor is
 * left staring at raw JSON.
 */
const wantsJson = (request) => (request.headers.get('accept') ?? '').includes('application/json')

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error('contact: missing environment configuration')
    const failure = 'The contact form is not configured yet.'
    return wantsJson(request)
      ? json(500, { ok: false, error: failure })
      : redirect(request, `${formPage(request)}?error=config`)
  }

  let data
  try {
    const ct = request.headers.get('content-type') ?? ''
    if (ct.includes('application/json')) {
      data = await request.json()
    } else {
      data = Object.fromEntries(await request.formData())
    }
  } catch {
    return json(400, { ok: false, error: 'We could not read that submission.' })
  }

  // Honeypot: a hidden field real people never fill in. Accept silently so
  // bots get no signal that they were caught.
  if (data.company) {
    return wantsJson(request) ? json(200, { ok: true }) : redirect(request, '/contact-thanks')
  }

  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim()
  const message = String(data.message ?? '').trim()
  const phone = String(data.phone ?? '').trim()
  const subject = String(data.subject ?? 'Website enquiry').trim()
  // Project-intake extras. Optional: the plain /contact form never sends
  // them, so a missing value here is normal, not an error.
  const budget = String(data.budget ?? '').trim()
  const timeline = String(data.timeline ?? '').trim()

  const errors = {}
  if (!name) errors.name = 'Please tell us your name.'
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = 'Please enter an email address we can reply to.'
  if (!message) errors.message = 'Please tell us a little about your project.'
  if (
    [name, email, message, budget, timeline].some((v) => v.length > MAX_FIELD)
  )
    errors.message = 'That message is too long to send. Please shorten it.'

  if (Object.keys(errors).length) {
    return wantsJson(request)
      ? json(400, { ok: false, errors })
      : redirect(request, `${formPage(request)}?error=validation`)
  }

  const submittedAt = new Date().toISOString()
  const html = `
    <h2>New enquiry from misinc.com</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
    <p><strong>Subject:</strong> ${esc(subject)}</p>
    ${budget ? `<p><strong>Budget:</strong> ${esc(budget)}</p>` : ''}
    ${timeline ? `<p><strong>Timeline:</strong> ${esc(timeline)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(message)}</p>
    <hr>
    <p style="color:#8f6a35;font-size:12px">Submitted ${esc(submittedAt)}</p>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: `MIS, Inc. Website <${env.CONTACT_FROM}>`,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: `${subject} — ${name}`,
        html,
      }),
    })

    if (!res.ok) {
      console.error('contact: resend responded', res.status, await res.text())
      const failure = `We could not send that just now. Please email ${env.CONTACT_TO} directly.`
      return wantsJson(request)
        ? json(502, { ok: false, error: failure })
        : redirect(request, `${formPage(request)}?error=send`)
    }
  } catch (err) {
    console.error('contact: request failed', err)
    const failure = `We could not send that just now. Please email ${env.CONTACT_TO} directly.`
    return wantsJson(request)
      ? json(502, { ok: false, error: failure })
      : redirect(request, `${formPage(request)}?error=send`)
  }

  return wantsJson(request) ? json(200, { ok: true }) : redirect(request, '/contact-thanks')
}

/**
 * Without this, a GET to /api/contact falls through to the static assets and
 * serves the home page with a 200 — which is both confusing and indexable.
 */
export function onRequestGet() {
  return new Response('Method not allowed', {
    status: 405,
    headers: { allow: 'POST', 'x-robots-tag': 'noindex' },
  })
}

// No catch-all `onRequest` export: it would override the method handlers above.
