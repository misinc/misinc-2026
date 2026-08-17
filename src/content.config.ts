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
     * Our relationship with the platform.
     *   partner — we are an official/certified partner, not merely a user
     *   own     — we built and maintain the product ourselves
     *   migrate — we no longer build on it and move clients off
     */
    stance: z.enum(['partner', 'own', 'migrate']),
    /** e.g. "Certified Webflow Partner". Shown in the stance callout. */
    credential: z.string().optional(),
    /** The headline verdict, shown in the stance callout. */
    verdict: z.string(),
    /** Where we send people instead — slugs from this same collection. */
    insteadUse: z.array(z.string()).default([]),
    category: z.enum(['websites', 'commerce', 'marketing', 'ai']),
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

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    topic: z.enum([
      'getting-started',
      'pricing',
      'process',
      'platforms',
      'search-ai',
      'after-launch',
    ]),
    order: z.number().default(100),
    /**
     * Which pages surface this question, so each page pulls its own subset
     * from the single source rather than duplicating the copy.
     */
    showOn: z.array(z.enum(['home', 'services', 'contact'])).default([]),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    /** Original Webflow thumbnail, still on their CDN until images are moved. */
    image: z.string().optional(),
    /**
     * Substantial evergreen pieces, surfaced on /guides. Deliberately a flag
     * rather than a separate URL space — see docs/blog-migration.md.
     */
    guide: z.boolean().default(false),
    /** Set when a post has been reviewed and refreshed for the new site. */
    updated: z.coerce.date().optional(),
    /**
     * Questions answered by this post. Rendered at the foot of the article and
     * emitted as FAQPage schema — the part that gets a pillar page quoted by
     * AI assistants rather than merely indexed.
     */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    seo: z
      .object({ title: z.string().optional(), description: z.string().optional() })
      .optional(),
  }),
})

export const collections = { services, platforms, work, faqs, blog }
