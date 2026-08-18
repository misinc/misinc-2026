# Adding content: services, platforms, work, migrations, FAQs, blog

This site's content lives as Markdown files in [`src/content`](../src/content), using [Astro content collections](https://docs.astro.build/en/guides/content-collections/). Each collection has a schema defined in [`src/content.config.ts`](../src/content.config.ts) — that file is the source of truth if this doc ever drifts from it.

**The general pattern for every collection is the same:**

1. Add a new `.md` file to the right folder in `src/content/<collection>/`.
2. Name the file exactly what you want the URL slug to be (for collections with their own pages). The filename *is* the slug — there is no separate routing step.
3. Fill in frontmatter matching the schema below.
4. Write the body in Markdown — it becomes the page content.
5. Save. Astro's dev server and build pick it up automatically; nothing else needs to be registered for the item to appear on its hub/index page.

There is no CMS or admin UI — everything is done by editing files in this repo and deploying.

## Where new items show up automatically

Every hub/index page calls `getCollection()` at build time and lists whatever's in the folder — there's no separate step to "register" a new item on its index page. Save the file with valid frontmatter and both the detail page *and* the hub listing appear on the next build/dev-reload, already sorted and filtered correctly.

| Collection | Hub page | How it's built |
|---|---|---|
| `services` | [`/services`](../src/pages/services/index.astro) | `getCollection('services')`, grouped by `pillar`, sorted by `order` |
| `platforms` | [`/platforms`](../src/pages/platforms/index.astro) | `getCollection('platforms')`, sorted by `order` within `stance` |
| `work` | [`/portfolio`](../src/pages/portfolio.astro) | `getCollection('work')`, sorted by `year` then `order`; filter chips are derived from whichever categories are actually in use |
| `blog` | [`/blog`](../src/pages/blog/index.astro) and [`/guides`](../src/pages/guides.astro) | `getCollection('blog')`; `/guides` further filters to `guide: true` |
| `migrations` | no page of its own — listed inside [`/platforms`](../src/pages/platforms/index.astro) | `getCollection('migrations')` |
| `faqs` | no page of its own — pulled into home/services/contact/faq pages | `getCollection('faqs')`, filtered by `showOn`/`topic` |

**The one exception is platforms, and it's bigger than it first looks.** Adding a new `src/content/platforms/<slug>.md` file gets you a working `/platforms/<slug>` detail page, full stop — it does **not** register the platform anywhere else. Every platform *chip* on the site (the "we build this on" chips on work and service pages, the "instead use" callout on other platform pages, the homepage marquee, and even the icon-sizing on the `/platforms` hub) is rendered by looking a slug up in `PLATFORMS_BY_SLUG`, a completely separate hand-maintained registry in [`src/lib/platforms.ts`](../src/lib/platforms.ts) built from its `PARTNERS` array plus a small hardcoded legacy list. If a slug isn't in that file, referencing it from `work.platforms`, `services.platforms`, etc. fails silently — no chip renders, no error.
>
> **So whenever you add a new platform, also add it to `PARTNERS` (or the legacy list) in `src/lib/platforms.ts`**, with a `slug`, `name`, and `icon` matching the content page — or the platform page will exist but be unreachable from anywhere that links to it by slug.

## The `order` field: leave gaps

Every collection with an `order` field uses multiples of 10 (10, 20, 30…) rather than tight sequential integers, so a new item can usually be slotted in — e.g. `order: 15` between two existing 10 and 20 — without renumbering everything else. Each collection resets the sequence within whatever group it sorts by:

- `work` — resets per `year` (order is only ever compared within the same year)
- `services` — resets per `pillar`
- `platforms` — resets per `stance`
- `migrations` — one flat sequence, no grouping
- `faqs` — one flat sequence across the whole collection (not per `topic`), because `order` is also used to sort `showOn`-filtered subsets on the home/services/contact pages that mix items from different topics — a per-topic reset would create ties there

When adding a new item, don't just reuse "next contiguous integer" — pick a value that fits your intended position, defaulting to +10 past the group's current last item unless you're deliberately inserting between two existing ones. If a group gets tight enough that there's no room left between two neighbors, that's the signal to renumber that one group back out to a clean 10/20/30 spacing — not a reason to fall back to consecutive integers.

---

## Services (`src/content/services/*.md` → `/services/<slug>`)

Filename = slug, e.g. `ai-agents.md` → `/services/ai-agents`.

```yaml
---
title: AI Agents                 # Nav/card label
heading: Custom agents that do the routine work   # The <h1>
summary: "Card blurb and meta description fallback."
pillar: software-ai              # websites | growth | software-ai
order: 3                         # lower sorts first within its pillar
platforms: [addonaichat]         # slugs from the platforms collection
highlights:
  - Customer question handling
  - Enquiry triage & routing
nextStep: >-
  Closing CTA copy, rendered by <NextStep> with a real button.
seo:
  title: "..."
  description: "..."
ranking: false                   # true only for pages carried over from Webflow with existing search rankings
hero:                            # optional — omit for a branded fallback panel
  type: image                    # image | video
  src: /img/...
  alt: "..."
  caption: "..."
---

Markdown body — the page content.
```

Appears automatically on [`/services`](../src/pages/services/index.astro), grouped by `pillar` and sorted by `order`.

## Platforms (`src/content/platforms/*.md` → `/platforms/<slug>`)

```yaml
---
name: Add On AI Chat
summary: "One-line description used on cards and chips."
icon: /img/platforms/addonaichat.png
stance: own          # partner | own | migrate — see comments in content.config.ts
credential: "Certified Webflow Partner"     # optional
verdict: "The headline verdict, shown in the stance callout."
insteadUse: []        # slugs from this same collection, when stance is "migrate"
category: ai           # websites | commerce | marketing | ai
order: 4
nextStep: >-
  CTA copy.
seo:
  title: "..."
  description: "..."
---
```

Appears automatically on [`/platforms`](../src/pages/platforms/index.astro), sorted by `order` within `stance` (partner / own / migrate — `category` is only used as a display label on the detail page, it doesn't drive grouping anywhere).

**Required extra step, every time:** also add the platform to `PARTNERS` (or `ALL_PLATFORMS`'s legacy list, for a `migrate`-stance platform) in [`src/lib/platforms.ts`](../src/lib/platforms.ts) — `{ slug, name, icon }`, matching the content page. Without it, the `/platforms/<slug>` page works fine on its own, but referencing that slug from `work.platforms`, `services.platforms`, or `insteadUse` anywhere else on the site renders nothing — see [Where new items show up automatically](#where-new-items-show-up-automatically) above for why.

## Migrations (`src/content/migrations/*.md` → `/migrate/<slug>`)

```yaml
---
title: Weebly to Webflow
from: Weebly
to: Webflow
summary: "One-line description for the hub page."
fromPlatform: weebly-cloud    # optional — slug in the platforms collection, cross-links the two pages
toPlatform: webflow           # optional
verdict: "Honest answer to 'should I actually do this?'"
timeline: "three to five weeks"
order: 3
nextStep: >-
  CTA copy.
seo:
  title: "..."
  description: "..."
---
```

## Work / portfolio (`src/content/work/*.md` → `/works/<slug>`)

```yaml
---
title: "3D Security Training Solutions"
client: "3D Security Training Solutions"
summary: "One or two sentences for the card."
category: business    # restaurant | real-estate | healthcare | ecommerce | nonprofit | business | startup — enum lives in content.config.ts, labels in src/lib/work.ts
image: /img/work/3d-sts.avif
imageAlt: "..."
projectUrl: https://www.3dsts.com   # optional — omit or drop if the site is offline
archived: false                     # true shows "no longer online" instead of a dead link
year: 2025
order: 7                            # optional tie-breaker within the same year, lower first
testimonial:                        # optional — verbatim client quote, never paraphrase
  quote: "..."
  attribution: "..."
services: [web-design, website-development]   # slugs from the services collection
platforms: [webflow]                          # slugs from the platforms collection
featured: false                     # true surfaces it in featured spots (e.g. homepage)
seo:
  title: "..."
  description: "..."
---
```

- Project images go in `public/img/work/` (referenced by path, not imported as an Astro asset) — add the image file there first, then point `image` at `/img/work/<filename>`.
- There is no separate "testimonials" collection — client quotes live inline on the relevant work item via the `testimonial` field, and get pulled onto other pages from there.
- Appears automatically on [`/works`](../src/pages/works) (filterable by `category`) and its own `/works/<slug>` page.

**Adding a new `category` value is a two-file change, and missing either half breaks something differently:**

1. The enum in [`src/content.config.ts`](../src/content.config.ts) validates it — skip this and the **build fails outright** (`Invalid enum value`, `astro check`/`astro build` both catch it, so does the deploy). This is the one that bit us: a new category was added to the label map but not here.
2. The label in `WORK_CATEGORIES` in [`src/lib/work.ts`](../src/lib/work.ts) is what the filter chips and category badges actually display — skip this instead and the build *succeeds*, but the item's category prints as its raw slug and there's no filter chip for it, because the portfolio page derives its chip list from `WORK_CATEGORIES`, not from the schema.

Add the new value to both in the same change.

## FAQs (`src/content/faqs/*.md`)

FAQs have no page of their own — they're pulled into other pages by `topic`/`showOn`.

```yaml
---
question: "Can you help my site get found by AI assistants like ChatGPT?"
topic: search-ai   # getting-started | pricing | process | platforms | search-ai | after-launch
order: 3
showOn: [home]     # home | services | contact — which pages pull this question in
---

Markdown answer body.
```

Filename doesn't need to match anything meaningful (no slug/URL), but keep it descriptive, e.g. `can-ai-assistants-find-my-business.md`.

## Blog / guides (`src/content/blog/*.md` → `/blog/<slug>`)

```yaml
---
title: "How to Choose an SEO Company in Albuquerque"
summary: "..."
date: 2021-02-17
updated: 2026-08-17   # optional — set when a post has been reviewed/refreshed
image: /img/blog/...  # optional
guide: true            # true surfaces it on /guides as a substantial evergreen piece
faqs:                  # optional — rendered at the foot of the post and emitted as FAQPage schema
  - q: "..."
    a: "..."
seo:                    # optional — falls back to title/summary if omitted
  title: "..."
  description: "..."
---

Markdown body.
```

Setting `guide: true` is what puts a post on [`/guides`](../src/pages/guides.astro) — there's no separate folder for guides vs. regular posts, it's the same collection with a flag.

---

## Quick checklist for any new item

- [ ] File added under the correct `src/content/<collection>/` folder
- [ ] Filename is a clean, URL-safe slug (lowercase, hyphenated) if the collection has its own pages
- [ ] Frontmatter matches the schema in `src/content.config.ts` — Astro's dev server will error loudly on a missing required field or wrong type
- [ ] Cross-referenced slugs (`platforms:`, `services:`, `fromPlatform:`, `insteadUse:`, etc.) match real slugs in the target collection — these aren't validated, a typo just silently fails to link
- [ ] Any referenced images exist under `public/img/<collection>/`
- [ ] For a new **partner** platform: also add it to `PARTNERS` in `src/lib/platforms.ts` if it should appear in the homepage marquee / "we build this on" chips
- [ ] For a new **work `category`**: add it to the enum in `content.config.ts` *and* the label in `WORK_CATEGORIES` in `src/lib/work.ts` — either alone breaks something (build failure vs. missing label/filter)
