/**
 * Contact form handler — Cloudflare Pages Function.
 *
 * Replaces Netlify Forms. The site stays fully static; this is the only
 * server-side code in the project.
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

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error('contact: missing environment configuration')
    return json(500, { ok: false, error: 'The contact form is not configured yet.' })
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
  if (data.company) return json(200, { ok: true })

  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim()
  const message = String(data.message ?? '').trim()
  const phone = String(data.phone ?? '').trim()
  const subject = String(data.subject ?? 'Website enquiry').trim()

  const errors = {}
  if (!name) errors.name = 'Please tell us your name.'
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = 'Please enter an email address we can reply to.'
  if (!message) errors.message = 'Please tell us a little about your project.'
  if (name.length > MAX_FIELD || email.length > MAX_FIELD || message.length > MAX_FIELD)
    errors.message = 'That message is too long to send. Please shorten it.'

  if (Object.keys(errors).length) return json(400, { ok: false, errors })

  const submittedAt = new Date().toISOString()
  const html = `
    <h2>New enquiry from misinc.com</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
    <p><strong>Subject:</strong> ${esc(subject)}</p>
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
      return json(502, {
        ok: false,
        error: `We could not send that just now. Please email ${env.CONTACT_TO} directly.`,
      })
    }
  } catch (err) {
    console.error('contact: request failed', err)
    return json(502, {
      ok: false,
      error: `We could not send that just now. Please email ${env.CONTACT_TO} directly.`,
    })
  }

  return json(200, { ok: true })
}

// Only POST is exported: Pages answers other methods with 405 on its own.
// Exporting a catch-all `onRequest` alongside this would override it.
