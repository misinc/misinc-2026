import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

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
    /** Optional examples of completed work shown on the service detail page. */
    examples: z
      .array(
        z.object({
          name: z.string(),
          summary: z.string(),
          capabilities: z.array(z.string()).default([]),
          href: z.string().optional(),
        }),
      )
      .default([]),
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
    /** Optional text shown with the branded fallback when no hero media exists. */
    heroLabel: z.string().optional(),
  }),
})

const platforms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/platforms' }),
  schema: z.object({
    name: z.string(),
    /** One-line description used on cards and chips. */
    summary: z.string(),
    /** Square-ish mark, used in the compact home-hero marquee. */
    icon: z.string(),
    /**
     * Full wide wordmark, used on the platforms hub and detail pages where
     * there is room to show the name, not just the mark. Falls back to
     * `icon` when a platform has no wordmark asset yet.
     */
    wordmark: z.string().optional(),
    /** Omit for platforms we no longer recommend — no outbound link is shown. */
    url: z.string().optional(),
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

const migrations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/migrations' }),
  schema: z.object({
    /** Card and hero title, e.g. "WordPress to Webflow". */
    title: z.string(),
    /** The platform being left, and the one being moved to. */
    from: z.string(),
    to: z.string(),
    /** One-line description used on cards and the hub page. */
    summary: z.string(),
    /** Slug in the platforms collection, so the two pages cross-link. */
    fromPlatform: z.string().optional(),
    toPlatform: z.string().optional(),
    /** Honest answer to "should I actually do this?", shown in the callout. */
    verdict: z.string(),
    /** Typical elapsed time, e.g. "three to five weeks". */
    timeline: z.string(),
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
    /**
     * Almost always a single-element array. Most projects fit one industry,
     * but a few genuinely span two (e.g. an e-commerce restaurant) and should
     * appear under both portfolio filters.
     */
    category: z
      .array(
        z.enum([
          'restaurant',
          'real-estate',
          'healthcare',
          'ecommerce',
          'nonprofit',
          'business',
          'startup',
        ]),
      )
      .min(1),
    image: z.string(),
    /** Smaller card-ready asset; detail pages continue to use the full image. */
    cardImage: z.string().optional(),
    imageAlt: z.string(),
    /** The live site, when it is still up. */
    projectUrl: z.url().optional(),
    /** True when the site is no longer online — shown instead of a dead link. */
    archived: z.boolean().default(false),
    year: z.number(),
    /**
     * Tie-breaker within a year, lower first. Several projects launched in the
     * same year, and `year` alone would let them sort arbitrarily; this pins
     * the running order Karim gave.
     */
    order: z.number().optional(),
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
  // .mdx alongside .md: most posts stay plain markdown, but a post that needs
  // to quote a live figure (e.g. from lib/pricing.ts) can import and compute
  // it instead of hand-typing a number that goes stale the next time pricing
  // changes. See rebuilding-our-own-website-2026.mdx for the pattern.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
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

export const collections = { services, platforms, migrations, work, faqs, blog }
