/**
 * FAQ topic labels and order. The FAQ page groups by these; the anchor links
 * at the top of the page are generated from the same list.
 */
export const FAQ_TOPICS = {
  'getting-started': 'Getting started',
  pricing: 'Pricing',
  process: 'How we work',
  platforms: 'Platforms & ownership',
  'search-ai': 'Search & AI',
  'after-launch': 'After launch',
} as const

export type FaqTopic = keyof typeof FAQ_TOPICS
