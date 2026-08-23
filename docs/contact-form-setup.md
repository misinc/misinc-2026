# Contact form — setup and testing

The form posts to `/api/contact`, a Cloudflare Pages Function that sends via
Resend. It is the only server-side code in the project.

## Environment variables

Set these in Cloudflare Pages → Settings → Environment variables, for both
Production and Preview:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_TO` | Where enquiries land, e.g. `hello@misinc.com` |
| `CONTACT_FROM` | A **verified Resend sender**, e.g. `website@misinc.com` |

`CONTACT_FROM` must be on a domain verified in Resend, or every send fails with
a 403. Verify `misinc.com` in Resend before launch.

## Testing locally

`/api/contact` does **not** run under `astro dev` — Pages Functions need the
Cloudflare runtime. Submitting on the Astro dev server returns a 404 and the
form shows its generic failure message, which is correct but not a real test.

To test properly:

```bash
npm run build
npx wrangler pages dev dist --port 8788
```

Put the same three variables in a local `.dev.vars` file (gitignored).

## What was verified

Tested against the real function under Wrangler:

| Case | Result |
|---|---|
| Empty submission (JSON) | 400 with per-field messages |
| Empty submission (no JS) | 303 → `/contact?error=validation` |
| Honeypot filled | 200, silently discarded, no email sent |
| Valid submission, bad API key | 502 with "email us directly" message |
| Valid submission, no JS, failure | 303 → `/contact?error=send` |
| Valid submission with live Resend configuration | Delivery confirmed by the site owner |
| `GET /api/contact` | 405 |

Successful delivery through the current Resend configuration has been confirmed.

## Behaviour without JavaScript

The form is a real `<form>` with a real action. Without JavaScript the function
redirects to `/contact-thanks` on success, or back to `/contact?error=…` on
failure, where the page renders the matching message. With JavaScript it posts
via fetch and shows an inline success panel instead.

## Two bugs worth remembering

1. **Tailwind's `hidden` class beats the `hidden` attribute.** The field error
   paragraphs had both, and the script toggled the attribute — so errors were
   populated but invisible. They now use the attribute only. Anywhere else that
   toggles visibility from script must either use `classList.toggle('hidden')`
   or avoid the class entirely.
2. **A `GET` to `/api/contact` fell through to static assets** and served the
   home page with a 200, which is indexable. An explicit `onRequestGet`
   returning 405 now prevents that.
