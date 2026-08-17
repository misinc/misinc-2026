/**
 * Platform registry — the single definition of every platform we partner on.
 *
 * Consumed by the home page marquee, the "we build this on" chips on service
 * pages, and the /platforms index. Adding a platform here surfaces it
 * everywhere; nothing else needs editing.
 */

export const PLATFORMS = [
  { slug: 'webflow', name: 'Webflow', icon: '/img/platforms/webflow.svg' },
  { slug: 'astro', name: 'Astro', icon: '/img/platforms/astro.svg' },
  { slug: 'mailchimp', name: 'Mailchimp', icon: '/img/platforms/mailchimp.svg' },
  { slug: 'square-online-store', name: 'Square', icon: '/img/platforms/square.svg' },
  { slug: 'supabase', name: 'Supabase', icon: '/img/platforms/supabase.svg' },
  { slug: 'shopify', name: 'Shopify', icon: '/img/platforms/shopify.svg' },
] as const

export type PlatformSlug = (typeof PLATFORMS)[number]['slug']
