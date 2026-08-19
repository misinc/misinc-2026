/**
 * Platform registry.
 *
 * PARTNERS is the marketing surface — platforms we are an official or certified
 * partner with, plus our own products. These are what the home page marquee and
 * the "we build this on" chips advertise.
 *
 * The distinction matters commercially: plenty of agencies use Webflow or
 * Mailchimp. Being a certified partner is a different claim, and it is the one
 * worth making.
 *
 * ALL_PLATFORMS adds the legacy platforms that older portfolio work still runs
 * on. Those have honest pages, but they do not belong in a strip of partners.
 */

export const PARTNERS = [
  { slug: 'webflow', name: 'Webflow', icon: '/img/platforms/webflow.svg', url:'https://www.webflow.com' },
  { slug: 'square-online-store', name: 'Square Online', icon: '/img/platforms/square.svg', url:'https://www.squareup.com' },
  { slug: 'shopify', name: 'Shopify', icon: '/img/platforms/shopify.svg', url:'https://www.shopify.com' },
  { slug: 'mailchimp', name: 'Mailchimp', icon: '/img/platforms/mailchimp.svg', url:'https://www.mailchimp.com' },
  { slug: 'ecwid', name: 'Ecwid', icon: '/img/platforms/ecwid.svg', url:'https://www.ecwid.com' },
  { slug: 'addonidx', name: 'Add On IDX', icon: '/img/platforms/addonidx.svg', wide: true, url:'https://www.addonidx.com' },
  { slug: 'addonaichat', name: 'Add On AI Chat', icon: '/img/platforms/addonaichat.svg', wide: true, url:'https://www.addonaichat.com' },
] as const

/** Kept for backwards compatibility with existing imports. */
export const PLATFORMS = PARTNERS

export type PlatformSlug = (typeof PARTNERS)[number]['slug']

export const ALL_PLATFORMS = [
  ...PARTNERS,
  { slug: 'wordpress', name: 'WordPress', icon: '/img/platforms/wordpress.svg' },
  { slug: 'wix', name: 'Wix', icon: '/img/platforms/wix.svg' },
  { slug: 'weebly-cloud', name: 'Weebly Cloud', icon: '/img/platforms/weebly-cloud.svg' },
  {
    slug: 'expressionengine',
    name: 'ExpressionEngine',
    icon: '/img/platforms/expressionengine.svg',
  },
] as const

export const PLATFORMS_BY_SLUG: Record<
  string,
  { slug: string; name: string; icon: string; wide?: boolean }
> = Object.fromEntries(ALL_PLATFORMS.map((p) => [p.slug, p]))
