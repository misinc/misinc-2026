/**
 * The eras MIS has built through. Used by the home page and the About page, so
 * the story stays identical in both places.
 *
 * Keep these honest: each one is a shift the studio actually worked through,
 * not a generic technology timeline.
 */
export const ERAS = [
  {
    year: '1995',
    title: 'The dial-up web',
    note: 'First business websites, hand-built.',
  },
  {
    year: '2004',
    title: 'CMS & ecommerce',
    note: 'Sites owners could update themselves.',
  },
  {
    year: '2012',
    title: 'Mobile-first',
    note: 'Responsive design becomes table stakes.',
  },
  {
    year: '2020',
    title: 'Modern platforms',
    note: 'Webflow, headless builds, integrations.',
  },
  {
    year: '2026',
    title: 'The AI web',
    note: 'Agents, automation, and being found by answer engines.',
  },
] as const
