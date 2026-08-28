/**
 * Contact form handler — Cloudflare Pages Function.
 *
 * Replaces Netlify Forms. The site stays fully static; this is the only
 * server-side code in the project. Shared by both /contact (ContactForm) and
 * /start-a-project (ProjectForm) — the two post the same core fields
 * (name/email/phone/subject/message) plus organization, website, budget, and timeline, which this handler
 * treats as optional so either form works against it unchanged.
 *
 * Required environment variables (Cloudflare Pages → Settings → Environment):
 *   RESEND_API_KEY   Resend API key
 *   CONTACT_TO       where inquiries land, e.g. hello@misinc.com
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

const successPage = (request) =>
  formPage(request) === '/start-a-project'
    ? '/contact-thanks?source=project'
    : '/contact-thanks?source=contact'

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
  const subject = String(data.subject ?? 'Website inquiry').trim()
  // Project-intake extras. Optional: the plain /contact form never sends
  // them, so a missing value here is normal, not an error.
  const budget = String(data.budget ?? '').trim()
  const timeline = String(data.timeline ?? '').trim()
  const organization = String(data.organization ?? '').trim()
  const website = String(data.website ?? '').trim()

  const errors = {}
  if (!name) errors.name = 'Please tell us your name.'
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = 'Please enter an email address we can reply to.'
  if (!message) errors.message = 'Please tell us a little about your project.'
  if (
    [name, email, message, phone, subject, budget, timeline, organization, website].some(
      (v) => v.length > MAX_FIELD,
    )
  )
    errors.message = 'That message is too long to send. Please shorten it.'

  if (Object.keys(errors).length) {
    return wantsJson(request)
      ? json(400, { ok: false, errors })
      : redirect(request, `${formPage(request)}?error=validation`)
  }

  const submittedAt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Denver',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(new Date())
  const phoneHref = phone.replace(/[^+\d]/g, '')
  const websiteHref = website
    ? /^(?:https?:)?\/\//i.test(website)
      ? website.startsWith('//')
        ? `https:${website}`
        : website
      : `https://${website}`
    : ''
  const detailRow = (label, value, linkedValue = '') =>
    value
      ? `<tr>
          <td style="width:145px;padding:10px 16px 10px 0;color:#89622e;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;vertical-align:top">${label}</td>
          <td style="padding:10px 0;color:#4a3115;font-size:16px;line-height:1.5;vertical-align:top">${linkedValue || esc(value)}</td>
        </tr>`
      : ''
  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="color-scheme" content="light">
        <title>${esc(subject)}: ${esc(name)}</title>
      </head>
      <body style="margin:0;background:#f0e2c9;color:#4a3115;font-family:Arial,Helvetica,sans-serif">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0">New website inquiry from ${esc(name)}.</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0e2c9;border-collapse:collapse">
          <tr>
            <td align="center" style="padding:32px 16px">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fffdf9;border:1px solid #e8d6b7;border-radius:12px;border-collapse:separate;overflow:hidden">
                <tr>
                  <td style="background:#a62025;padding:30px 34px;color:#fff7ea">
                    <div style="margin-bottom:10px;color:#ffcf88;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">MIS, Inc. · Website inquiry</div>
                    <h1 style="margin:0 0 8px;font-size:26px;line-height:1.25">${esc(subject)}</h1>
                    <p style="margin:0;color:#f6d9cc;font-size:16px;line-height:1.5">Submitted by ${esc(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px 34px 10px">
                    <a href="mailto:${esc(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display:inline-block;background:#ff9902;border-radius:6px;color:#4a3115;font-size:15px;font-weight:700;padding:12px 18px;text-decoration:none">Reply to ${esc(name)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 34px 20px">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                      ${detailRow('Name', name)}
                      ${detailRow('Email', email, `<a href="mailto:${esc(email)}" style="color:#a62025;text-decoration:underline">${esc(email)}</a>`)}
                      ${detailRow('Phone', phone, phoneHref ? `<a href="tel:${esc(phoneHref)}" style="color:#a62025;text-decoration:underline">${esc(phone)}</a>` : '')}
                      ${detailRow('Organization', organization)}
                      ${detailRow('Current website', website, websiteHref ? `<a href="${esc(websiteHref)}" style="color:#a62025;text-decoration:underline">${esc(website)}</a>` : '')}
                      ${detailRow('Budget', budget)}
                      ${detailRow('Timeline', timeline)}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 34px 30px">
                    <div style="background:#fff3de;border-left:4px solid #ff9902;border-radius:6px;padding:20px 22px">
                      <div style="margin-bottom:9px;color:#89622e;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Message</div>
                      <div style="color:#4a3115;font-size:17px;line-height:1.65;white-space:pre-wrap">${esc(message)}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="border-top:1px solid #eadbc2;padding:18px 34px 22px;color:#89622e;font-size:12px;line-height:1.5">
                    Submitted ${esc(submittedAt)} via <a href="https://misinc.com" style="color:#89622e">misinc.com</a>. Replying to this email will respond directly to ${esc(name)}.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
  const text = [
    `New inquiry from misinc.com`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    organization ? `Organization: ${organization}` : null,
    website ? `Current website: ${website}` : null,
    `Subject: ${subject}`,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    '',
    'Message:',
    message,
    '',
    `Submitted ${submittedAt}`,
  ]
    .filter((line) => line !== null)
    .join('\n')

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
        subject: `${subject}: ${name}`,
        html,
        text,
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

  return wantsJson(request) ? json(200, { ok: true }) : redirect(request, successPage(request))
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
