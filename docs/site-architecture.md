# MIS, Inc. 2026 — Site Architecture (Astro)

Built from the live Webflow site via MCP (site `5a0374c4ec0fdd0001a96438`) on 2026-08-17,
cross-referenced with 12 months of Search Console data. Companion doc: [seo-migration-map.md](./seo-migration-map.md).

---

## 1. What's actually in Webflow today

**58 pages** (including templates, drafts, and utility pages) and **14 CMS collections**:

| Collection | Items | Renders at | Migration target |
|---|---:|---|---|
| Blog Posts | **117** | `/blog/[slug]` | `src/content/blog/` |
| Portfolio | **28** | `/works/[slug]` | `src/content/work/` |
| Platforms | **20** | `/platforms/[slug]` | `src/content/platforms/` |
| Services | **12** | `/services/[slug]` | `src/content/services/` |
| FAQs | **5** | `/faq` | `src/content/faqs/` |
| Migrations | **4** | `/migrate/[slug]` | `src/content/migrations/` |
| Packages | — | `/packages/[slug]` | fold into services (see §5) |
| Blog Categories / Tags / Authors | — | taxonomy pages | categories kept, tags/authors dropped |
| Work Categories | — | `/work-category/[slug]` | becomes filter UI on `/portfolio` |
| Products / SKUs / Categories | — | Webflow Ecommerce | **decision needed — see §7** |

### Field shapes worth knowing

- **Portfolio** is the richest collection and better than expected: `short-description`,
  `preview-image`, `work-presentation` (rich text), `client`, **`testimonial`** (rich text),
  `project-link`, `work-category`, `release-date`. Several items carry real, quotable client
  testimonials — e.g. Peasant Pies: *"An outstanding Web Design company… I would give them 6 stars,
  if I could!"* This changes earlier advice: **we can ship a testimonials section at launch**,
  sourced from work you already have, without waiting to collect new ones.
- **Services**: `page-heading`, `short-description`, `description`, `conclusion`, `sort-order`,
  and a **reference to Platforms** — the service↔platform relationship already exists and maps
  directly onto Astro content-collection references.
- **Platforms**: `logo`, `short-description`, `description`, plus refs to `service` and `packages`.
- **Blog Posts**: `short-description`, `post-content`, `post-thumbnail`, `category`, `tags`, `author`.

### Problems found in the current metadata (fix during migration)

1. `/contact` meta description still says **"Our office is at 6565 Americas Parkway NE, Suite 200"** —
   the old address. Live and wrong today.
2. `/privacy-policy` and `/contact-thanks` still carry the **Webflow template's boilerplate**
   description: *"Marco is a beautifully designed UI kit template for digital agencies…"*
3. Home page title says **"30 Years of Expertise"** — will be stale again next year. Make it evergreen:
   *"Since 1995"* rather than a countable number.
4. Several pages have empty `seo` objects entirely (checkout flow, ecommerce templates).
5. 9 pages are **drafts** and never publish (`demo`, `typed-home`, `blog-2`, `thanksgiving-2019`,
   `wordpress-procare-signup`, three `/jobs/*` pages). Do not migrate.

---

## 2. Navigation

**Header:** Work · Services · About · FAQ · Contact + *Book a free call* (primary CTA)

**Footer:** Explore column (Work, Services, About, FAQ, Guides, Contact, Privacy policy),
address + map, MIS, Inc. AI badge, platform links.

Rationale: five items is the ceiling before a nav stops being scannable. FAQ earns its slot on AEO
grounds — it is the page most likely to be cited by AI assistants, and the collection already exists.
Services is a hub, not a dropdown, at launch; if analytics later show people hunting for specific
services, promote it to a mega-menu rather than adding nav items.

---

## 3. Page tree

```
/                                   Home (approved prototype)
/work                       → 301 → /portfolio        (keep the ranking URL)
/portfolio                          Work index, filterable by industry — BUILT
  /works/[slug]                     15 case studies live; 13 Webflow drafts pending
                                    (see docs/portfolio-notes.md)
/services                           Services hub — three pillars
  ── Websites ──────────────────────────────────────────────
  /services/web-design                          KEEP  4,339 impr
  /services/ecommerce-website-design            KEEP  831 impr · pos 7.8 ← page 1, protect
  /services/real-estate-website-design          KEEP  607 impr
  /services/restaurant-website-design           KEEP  3,949 impr
  /services/healthcare-website-design           KEEP  4,297 impr
  /services/wordpress-procare-plan              KEEP  5,154 impr
  /website-migrations                           KEEP  hub for /migrate/*
    /migrate/from-wordpress-to-webflow
    /migrate/from-wix-to-webflow
    /migrate/from-weebly-to-webflow
    /migrate/shopify-to-square
  ── Growth ────────────────────────────────────────────────
  /services/seo                                 KEEP  2,832 impr · pos 17.7 (+ AEO content)
  /services/digital-marketing                   KEEP  2,694 impr (absorbs 3 thin pages)
  ── Software & AI ─────────────────────────────────────────
  /services/custom-software                     NEW
  /services/ai-consulting                       NEW
  /services/ai-agents                           NEW
/platforms                          Platform index — recommended + "we migrate off these"
  /platforms/webflow                            KEEP  449 impr    · stance: build
  /platforms/astro                              NEW              · stance: build
  /platforms/mailchimp                          KEEP  3,804 impr · stance: partner
  /platforms/square-online-store                KEEP  582 impr   · stance: build
  /platforms/shopify                            KEEP  528 impr   · stance: build
  /platforms/supabase                           NEW              · stance: build
  /platforms/wordpress                          KEEP  1,047 impr · stance: migrate
  /platforms/wix                                NEW              · stance: migrate

  Platform pages carry an explicit stance rather than being neutral brochures.
  `migrate` pages state plainly why we no longer build on the platform, where it
  IS still the right answer, and what we recommend instead — which keeps the
  ranking, answers the query honestly, and converts better than a 301 could.
  Candidates to add later: Squarespace, Weebly, GoDaddy, Duda.
/albuquerque-web-design      → 301 → /           (stop splitting the head term)
/albuquerque-web-design-pricing-guide  KEEP  1,247 impr · linkable asset
/about                                 KEEP  1,440 impr · pos 8.5
/faq                                   KEEP  from FAQs collection + FAQPage schema
/blog                                  Guides index
  /blog/[slug]                         ~50 kept of 117 (see §5)
  /blog-categories/[slug]              ~5 Albuquerque-keyword categories only
/contact                               KEEP  1,601 impr  ← fix the stale address
/free-consultation                     KEEP  303 impr · pos 8.8
/privacy-policy                        KEEP  ← rewrite the boilerplate description
/404, /401
```

**Booking/utility pages** (`/schedule`, `/website-meeting`, `/meeting-at-misinc`,
`/proposal-review`, `/website-training`, `/project-profiler`, `/square-online-store-kickoff`,
`/real-estate-web-designer-consultation`, `/square-online-store-free-consultation`,
`/domains`, `/domains-ns`, `/contact-thanks`): keep as thin, no-index-able Astro pages. They're
client-facing scheduling links you send directly — low traffic, but breaking them breaks your
day-to-day workflow.

---

## 4. Astro content collections

```ts
// src/content.config.ts
const work = defineCollection({                 // 28 items
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    summary: z.string(),                        // ← short-description
    body: z.string(),                           // ← work-presentation (rich text → MD)
    testimonial: z.string().optional(),         // ← real quotes, used on home + case study
    projectUrl: z.string().url().optional(),
    category: reference('workCategories'),
    releaseDate: z.coerce.date(),
    image: image(),
    featured: z.boolean().default(false),
  }),
})

const services = defineCollection({             // 12 → 11 after consolidation
  schema: z.object({
    title: z.string(),
    pillar: z.enum(['websites', 'growth', 'software-ai']),
    heading: z.string(),
    summary: z.string(),
    body: z.string(),
    conclusion: z.string().optional(),
    platforms: z.array(reference('platforms')).default([]),   // relationship already in Webflow
    order: z.number().default(100),
    seo: seoSchema,
  }),
})

const platforms = defineCollection({ /* 20 → 6 kept + Supabase */ })
const blog      = defineCollection({ /* 117 → ~50 kept */ })
const faqs      = defineCollection({                          // 5 existing + ~10 new
  schema: z.object({ question: z.string(), answer: z.string(), topic: z.string().optional() }),
})
const migrations = defineCollection({ /* 4 */ })
```

Every collection carries an explicit `seo: { title, description, ogImage }` block seeded from the
Webflow values pulled via MCP, so no page launches with weaker metadata than it has today.

---

## 5. Consolidations (301s)

| From | To | Why |
|---|---|---|
| `/albuquerque-web-design` | `/` | Two pages splitting the head term; home already ranks better |
| `/services/email-marketing` | `/services/digital-marketing` | 3 thin pages, 1 topic |
| `/services/social-media-marketing` | `/services/digital-marketing` | |
| `/services/digital-marketing-for-online-stores` | `/services/digital-marketing` | |
| `/platforms/*` (14 thin ones) | nearest service page | Keep only the 6 partner pages |
| `/packages/*` | `/services/*` + pricing guide | Package content becomes service-page pricing blocks |
| `/website-audit`, `/free-website-audit` | `/free-consultation` | One offer, one page |
| `/work-category/*` | `/portfolio` | Replaced by filter UI |
| `/blog-tags/*`, `/blog-authors/*` | `/blog`, `/about` | Thin-content liability |
| ~65 off-topic blog posts | `/blog` | Star Wars, Christmas foods, etc. — ≤5 impressions each |

Blog keeps: the ~12 Albuquerque-keyword posts (rewritten), the evergreen SEO/marketing guides with
real impressions, and anything with a backlink. Everything else redirects.

---

## 6. Build phases

1. **Scaffold** — Astro + Tailwind (or plain CSS with your `theme.css` tokens), base layout from the
   approved prototype, self-hosted Fraunces + Manrope, `_redirects`, sitemap, schema components.
2. **Export** — pull all 6 content collections via MCP → markdown + frontmatter, download assets.
   Automated; the slugs carry over verbatim.
3. **Templates** — home, services hub + detail, work index + case study, platforms, blog index +
   post, FAQ, about, contact. Roughly 10 templates cover ~250 URLs.
4. **Content pass** — rewrite the 6 priority pages by hand: home, `/services/seo`,
   `/blog/albuquerque-seo-company` (the 23k-impression pillar), `/services/web-design`,
   `/about`, `/contact`. Everything else ports as-is and gets improved later.
5. **Verify** — crawl every old URL, assert 200 or intended 301, compare titles/descriptions
   against the MCP snapshot, Lighthouse, then cut DNS.

---

## 7. Decisions — RESOLVED 2026-08-17

| # | Question | Decision |
|---|---|---|
| 1 | Webflow Ecommerce (Products/SKUs/checkout) | **Retire.** 301 `/checkout`, `/paypal-checkout`, `/order-confirmation`, `/product/*`, `/sku/*`, `/category/*` → `/services`. Package purchases move to Square/Stripe links on the relevant service pages. |
| 2 | `/domains`, `/domains-ns` | **Retire the pages, keep the business.** Karim still manages client domains, but nobody uses these links. 301 both → `/contact`. |
| 3 | `seo.misinc.com` | **Leave running.** Out of scope for this migration. |
| 4 | Testimonials from Portfolio CMS | **Approved.** Real client quotes, named, on the home page and case studies. |
| 5 | "MIS 2026" Webflow site | **Skip.** Not a source for this build. |

### Resulting additional redirects

```
/checkout            /services   301
/paypal-checkout     /services   301
/order-confirmation  /services   301
/product/*           /services   301
/sku/*               /services   301
/category/*          /services   301
/domains             /contact    301
/domains-ns          /contact    301
```

Note: `/domains` and `/domains-ns` have small but real impressions (10 and 45) and rank at
positions 5.5 and 11.5 — a plain 301 to `/contact` is right, and `/contact` should gain a short
"Domain management for existing clients" line so the intent still lands somewhere true.

---

## 8. Repository, branching, and hosting

### Repository — keep `misinc/misinc-2026`, start the Astro app on a branch

The repo name already describes the project, so a new repo would only fragment history. Plan:

1. Tag the current state so the React prototype stays recoverable: `git tag react-prototype-v1 && git push --tags`
2. Branch: `git checkout -b astro`
3. On `astro`, remove what the new stack doesn't use — `src/app/**` (React SPA), `vite.config.ts`,
   `drizzle.config.ts`, `db/`, `migrations/`, `netlify/`, `netlify.toml`, `index.html`, `postcss.config.mjs`.
   **Deleting is safe**: the tag and git history retain every file forever; nothing is lost.
4. Carry forward: `design-system.json`, `docs/`, `guidelines/`, `ATTRIBUTIONS.md`, and
   `src/assets/` (logo, 30th-anniversary video, partner marks).
5. When parity is verified, merge `astro` → `main`. `main` stays the production branch.

Do **not** rewrite history to shrink the 62 MB `.git` (it's mostly the hero videos). Rewriting
breaks every existing clone and saves nothing that matters at this scale.

### Long-term branch model

| Branch | Purpose | Deploys to |
|---|---|---|
| `main` | production | misinc.com |
| `dev` | staging / integration | dev.misinc.com (or the Pages preview URL) |
| `feat/*` | one change at a time | automatic per-branch preview URL |

Cloudflare Pages (like Netlify) builds a preview for every branch and every PR, so `dev` is a
convenience for a stable staging URL rather than a requirement.

### Hosting — move to Cloudflare Pages

**Recommendation: Cloudflare Pages**, for four concrete reasons:

1. **DNS is already there.** misinc.com is on Cloudflare DNS today. Pages means one vendor, no
   cross-provider CNAME/SSL handshake, and cutover is a single DNS record you already control.
2. **Bandwidth is unlimited and free.** This matters specifically because of the hero video —
   Netlify's free tier caps at 100 GB/month, and a 4.8 MB autoplaying video burns that fast if the
   site does well. This is the strongest single argument.
3. **Larger edge network** (~330 cities). For a static Astro site both are fast and the practical
   difference is small — expect tens of milliseconds on TTFB, not a transformation. Speed alone
   would not justify the move; combined with the above it does.
4. `_redirects` and `_headers` work the same way, so the migration map ports unchanged.
   (Pages limits: 2,100 static rules and 100 dynamic/splat rules. This build uses ~80 static and
   ~6 splats — comfortably inside.)

**Honest caveat:** you lose Netlify Forms, which the current site may rely on for the contact form.
Replacement on Cloudflare: a Pages Function posting to Resend/Postmark, or an embedded form service.
Worth deciding before the contact page is built — it's the one real migration cost.

Video note regardless of host: compress the 4.8 MB hero video (target ~1.5 MB VP9/H.264, ~8s loop),
add a poster frame, and don't autoplay it on mobile.

---

## 9. Original open questions (for the record)

1. **Webflow Ecommerce** — the site has Products/SKUs/Categories collections and `/checkout`,
   `/paypal-checkout`, `/order-confirmation` pages. Astro has no built-in cart. Are you still
   selling through it? If it's dormant (GSC suggests it is), retire it and point package purchases
   at Square/Stripe links instead. **Recommendation: retire.**
2. **`/domains` and `/domains-ns`** — is the domain-renewal business still active? Keep as utility
   pages if yes, redirect to `/contact` if no.
3. **`seo.misinc.com`** — legacy subdomain, indexed with 38 impressions and a login page. Shut down
   or leave running?
4. **Testimonials on the home page** — the Portfolio collection has real quotes. Recommend adding a
   testimonials section between Work and the Albuquerque section. Confirm the clients are comfortable
   being quoted by name.
5. **The "MIS 2026" Webflow site** (`6a0fb2ee3fd646cd2a754be0`, last published 2026-07-12) — is that
   an in-progress redesign I should look at before building, or abandoned?
