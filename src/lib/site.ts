/**
 * Single source of truth for business facts that appear in many places
 * (header, footer, schema.org, contact page, email templates).
 *
 * The old Webflow site had the previous address hard-coded into a meta
 * description that then went stale for years. Everything lives here now.
 */

export const site = {
  name: 'MIS, Inc.',
  legalName: 'Multimedia Internet Services, Inc.',
  aiBrand: 'MIS, Inc. AI',
  aiUrl: 'https://misinc.ai',
  url: 'https://www.misinc.com',
  founded: 1995,
  tagline: 'Albuquerque web design, custom software, and practical AI since 1995.',
  description:
    'MIS, Inc. is a boutique web design and development agency in Albuquerque, New Mexico. Websites, custom software, and practical AI for small businesses and nonprofits since 1995.',

  address: {
    street: '500 Marquette Ave NW, Suite 1200',
    city: 'Albuquerque',
    region: 'NM',
    postalCode: '87102',
    country: 'US',
    lat: 35.0880538,
    lon: -106.6528526,
  },

  phone: '(505) 341-3060',
  phoneHref: 'tel:+15053413060',
  email: 'hello@misinc.com',

  /**
   * Profiles we actually maintain, emitted as schema.org `sameAs` so search
   * engines can tie them to the same business. Facebook and X are deliberately
   * absent — they exist but are not active, and pointing search engines at a
   * dormant profile is worse than pointing them nowhere.
   *
   * The Google entry is the Knowledge Graph id behind the Business Profile
   * (kgmid /g/1tp2_vc3), which is stable; the share.google short link it came
   * from is not.
   */
  profiles: [
    'https://www.linkedin.com/company/multimedia-internet-services-inc./',
    'https://www.instagram.com/misinc_com/',
    'https://www.youtube.com/channel/UC2y263fRn6-vSq4m94JGlJQ',
    'https://www.google.com/search?kgmid=/g/1tp2_vc3',
  ],

  nav: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],

  footerNav: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Platforms', href: '/platforms' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Guides', href: '/guides' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy policy', href: '/privacy-policy' },
  ],

  cta: { label: 'Book a free call', href: '/free-consultation' },
} as const

/** Years in business, computed so it never goes stale the way "30 Years" did. */
export const yearsInBusiness = new Date().getFullYear() - site.founded

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    `${site.address.street} ${site.address.city} ${site.address.region} ${site.address.postalCode}`,
  )
