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

export const collections = { services }
