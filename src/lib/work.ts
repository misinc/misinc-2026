/**
 * Portfolio category labels — the single definition used by the index filter,
 * the cards, and the case study pages.
 *
 * These replace the old Webflow work categories, which had grown to include
 * platform names and migration types ("Business Catalyst to WordPress
 * Migration") that describe how we built something rather than who it was for.
 * A visitor filters by industry, not by our tooling.
 */
export const WORK_CATEGORIES = {
  restaurant: 'Restaurant',
  'real-estate': 'Real Estate',
  healthcare: 'Healthcare',
  ecommerce: 'E-Commerce',
  nonprofit: 'Nonprofit',
  business: 'Business',
} as const

export type WorkCategory = keyof typeof WORK_CATEGORIES
