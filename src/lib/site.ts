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

  nav: [
    { label: 'Work', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],

  footerNav: [
    { label: 'Work', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Platforms', href: '/platforms' },
    { label: 'FAQ', href: '/faq' },
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
