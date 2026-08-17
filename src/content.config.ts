import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * Content migrated from the Webflow CMS.
 *
 * Slugs must match the live Webflow URLs exactly — they carry the search
 * rankings. See docs/seo-migration-map.md before renaming anything.
 */

const seo = z.object({
  title: z.string(),
  description: z.string(),
})

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    /** Nav/card label. */
    title: z.string(),
    /** The <h1> — usually the customer-facing promise, not the service name. */
    heading: z.string(),
    /** Card blurb and meta fallback. */
    summary: z.string(),
    pillar: z.enum(['websites', 'growth', 'software-ai']),
    /** Lower sorts first within a pillar. */
    order: z.number().default(100),
    /** Platform slugs shown as "we build this on" chips. */
    platforms: z.array(z.string()).default([]),
    /** Short bullets for the hub card. */
    highlights: z.array(z.string()).default([]),
    /** Closing call-to-action copy, rendered by <NextStep> with a real button. */
    nextStep: z.string(),
    seo,
    /** True for pages carried over from Webflow with existing rankings. */
    ranking: z.boolean().default(false),
    /**
     * Optional hero media. Omit and the hero shows a branded fallback panel,
     * so a page is never blocked on photography that does not exist yet.
     */
    hero: z
      .object({
        type: z.enum(['video', 'image']),
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional(),
      })
      .optional(),
  }),
})

const platforms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/platforms' }),
  schema: z.object({
    name: z.string(),
    /** One-line description used on cards and chips. */
    summary: z.string(),
    icon: z.string(),
    /**
     * Our actual position on the platform. `build` means we build on it;
     * `partner` means we integrate with it; `migrate` means we generally
     * move people off it and say so plainly.
     */
    stance: z.enum(['build', 'partner', 'migrate']),
    /** The headline verdict, shown in the stance callout. */
    verdict: z.string(),
    /** Where we send people instead — slugs from this same collection. */
    insteadUse: z.array(z.string()).default([]),
    category: z.enum(['websites', 'commerce', 'marketing', 'data']),
    order: z.number().default(100),
    nextStep: z.string(),
    seo,
  }),
})

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    /** Project title. Slug must match the live /works/<slug> URL. */
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    category: z.enum([
      'restaurant',
      'real-estate',
      'healthcare',
      'ecommerce',
      'nonprofit',
      'business',
    ]),
    image: z.string(),
    imageAlt: z.string(),
    /** The live site, when it is still up. */
    projectUrl: z.string().url().optional(),
    /** True when the site is no longer online — shown instead of a dead link. */
    archived: z.boolean().default(false),
    year: z.number(),
    /** Verbatim client quote from the Webflow CMS. Never paraphrase these. */
    testimonial: z.object({ quote: z.string(), attribution: z.string() }).optional(),
    /** Services used, as slugs from the services collection. */
    services: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    seo,
  }),
})

export const collections = { services, platforms, work }
