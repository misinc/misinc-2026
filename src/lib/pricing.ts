/**
 * Pricing — the single source of truth.
 *
 * These figures appear on the pricing guide, in FAQ answers, and on service
 * pages. Changing a number here changes it everywhere; nothing else should
 * hard-code a price.
 *
 * Figures supplied by Karim, 2026-08-17. See docs/pricing-notes.md.
 */

export interface PriceTier {
  id: string
  name: string
  /** Starting figure in whole dollars. */
  from: number
  /** 'project' bills once; 'month' is ongoing. */
  unit: 'project' | 'month'
  /** One line on what the tier is for. */
  summary: string
  includes: string[]
  /** Who this tier actually suits, so people can self-select. */
  goodFor: string
  /** Related service page. */
  href: string
}

export const PRICE_TIERS: PriceTier[] = [
  {
    id: 'starter',
    name: 'Starter site',
    from: 5000,
    unit: 'project',
    summary: 'A clean, fast site of five to eight pages, ready to launch.',
    includes: [
      'Five to eight pages, designed not templated',
      'Mobile-first build and testing',
      'Contact form and Google Business Profile setup',
      'Basic SEO: titles, descriptions, structured data',
    ],
    goodFor:
      'A new business, or an established one whose current site is dated and does not need to be complicated.',
    href: '/services/web-design',
  },
  {
    id: 'business',
    name: 'Business site',
    from: 7500,
    unit: 'project',
    summary: 'A site with up to ten pages and a CMS so you can easily publish and update your website.',
    includes: [
      'Everything in the starter site up to ten pages',
      'A proper CMS for pages you update often',
      'Blog, guides, or case studies',
      'Integrations for booking, CRM, and email marketing',
      'Deeper SEO and AI-search readiness',
      'Training so you can handle text and image changes',
    ],
    goodFor:
      'Businesses that publish regularly, have several services to explain, or need the site connected to other software.',
    href: '/services/website-development',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    from: 8500,
    unit: 'project',
    summary: 'An online store connected to how you actually take payments.',
    includes: [
      'Store setup on the platform that fits your business',
      'Payments, shipping rules, and tax configuration',
      'Product and inventory setup',
      'Point-of-sale integration where you already use one',
      'Training for whoever runs it day to day',
    ],
    goodFor:
      'Restaurants adding online ordering, retailers moving online, and anyone selling more than a handful of products.',
    href: '/services/ecommerce-website-design',
  },
  {
    id: 'software',
    name: 'Custom software & AI',
    from: 9500,
    unit: 'project',
    summary: 'Portals, integrations, internal tools, and AI agents, scoped per project.',
    includes: [
      'Discovery to define exactly what gets built',
      'Custom application or agent development',
      'Integration with systems you already run',
      'Documentation and handover',
    ],
    goodFor:
      'Businesses where a manual process has outgrown a spreadsheet, or where the same questions are eating hours every week.',
    href: '/services/custom-software',
  },
  {
    id: 'care',
    name: 'Care & hosting',
    from: 50,
    unit: 'month',
    summary: 'Hosting, monitoring, backups, and someone to call.',
    includes: [
      'Fast, monitored hosting',
      'Backups and uptime checks',
      'Small content changes',
      'A person who answers when something breaks',
    ],
    goodFor: 'Anyone who would rather not think about their website until they want something changed.',
    href: '/services/website-development',
  },
  {
    id: 'marketing',
    name: 'SEO & marketing',
    from: 500,
    unit: 'month',
    summary: 'Ongoing search, content, and email work.',
    includes: [
      'Google Business Profile and local search work',
      'Technical SEO and content',
      'AI-search readiness',
      'Email marketing and reporting on enquiries, not just traffic',
    ],
    goodFor:
      'Businesses whose website is built and now needs to be found. Usually worth starting after launch, not before.',
    href: '/services/seo',
  },
]

/** $5,000 — no trailing cents, since every figure here is a whole dollar. */
export const money = (n: number) => `$${n.toLocaleString('en-US')}`

export const tier = (id: string) => PRICE_TIERS.find((t) => t.id === id)!

/** The lowest project figure — used in FAQ answers and summary copy. */
export const PROJECT_FLOOR = Math.min(
  ...PRICE_TIERS.filter((t) => t.unit === 'project').map((t) => t.from),
)
