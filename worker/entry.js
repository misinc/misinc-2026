/**
 * Worker entry point for a Cloudflare "Worker with static assets" deploy.
 *
 * This is routing glue, not a second implementation: every route except
 * /api/contact falls straight through to the static Astro build via the
 * ASSETS binding, and /api/contact delegates to the existing Pages-Functions
 * -shaped handlers in functions/api/contact.js unchanged (that file's own
 * { request, env } signature is a subset of what this Worker already has,
 * so it works as-is). functions/api/contact.js stays the one place with the
 * actual contact-form logic — see the comment at its top.
 */
import { onRequestGet, onRequestPost } from '../functions/api/contact.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') return onRequestPost({ request, env })
      if (request.method === 'GET') return onRequestGet()
      return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, POST' } })
    }

    return env.ASSETS.fetch(request)
  },
}
