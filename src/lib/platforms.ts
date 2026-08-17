/**
 * Platform registry — the marketing-surface list.
 *
 * This is the set of platforms we actively promote: the home page marquee and
 * the "we build this on" chips on service pages read from here.
 *
 * It is deliberately NOT the same as the /platforms content collection, which
 * also contains platforms we recommend migrating away from (WordPress, Wix).
 * Those deserve honest pages, but they do not belong in a marquee of partners.
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

/**
 * Every platform that has a page, including the ones we migrate away from.
 * Used by StanceCallout to render "what we recommend instead" chips.
 */
export const ALL_PLATFORMS = [
  ...PLATFORMS,
  { slug: 'wordpress', name: 'WordPress', icon: '/img/platforms/wordpress.svg' },
  { slug: 'wix', name: 'Wix', icon: '/img/platforms/wix.svg' },
] as const

export const PLATFORMS_BY_SLUG: Record<
  string,
  { slug: string; name: string; icon: string }
> = Object.fromEntries(ALL_PLATFORMS.map((p) => [p.slug, p]))
