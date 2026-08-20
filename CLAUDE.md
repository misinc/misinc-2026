# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev           # astro dev — localhost:4321
npm run build          # astro check && astro build — this is also the project's typecheck/lint step; there is no separate lint or test command
npm run preview        # serve the built dist/ locally
npx astro check        # typecheck only, without a full build
```

The contact form (`functions/api/contact.js`) is a Cloudflare Pages Function and does not run under plain `astro dev` — it needs Cloudflare's Functions runtime (`npx wrangler pages dev`). `.dev.vars` holds its local env vars (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`).

## Architecture

Static Astro 5 site (`output: 'static'`), Tailwind v4 via `@tailwindcss/vite`, deployed to Cloudflare Pages. No client framework — a handful of inline `<script>` tags handle the mobile nav and the retro-mode toggle.

**Content model.** Nearly everything editorial lives in `src/content/<collection>/*.md`, schemas defined in `src/content.config.ts`. The filename is the URL slug. Detail pages (`src/pages/services/[slug].astro`, etc.) call `getStaticPaths` + `getCollection` and render whatever is in the folder — there's no separate registration step. Full guide, including the one real exception (platforms — see below): [docs/adding-content.md](docs/adding-content.md).

Collections: `services` (grouped by `pillar`: websites / growth / software-ai), `platforms` (grouped by `stance`: partner / own / migrate), `migrations`, `work` (portfolio case studies), `faqs` (filtered by `topic` and `showOn`), `blog` (the `guide: true` flag surfaces a post on `/guides` — same collection, no separate folder).

Every collection with an `order` field uses gaps of 10 (10, 20, 30…), reset per group (per `pillar` for services, per `stance` for platforms, per `year` for work), so a new item can be slotted in without renumbering its neighbors.

**Gotcha: the platforms registry.** `src/lib/platforms.ts` (`PLATFORMS_BY_SLUG`) is a hand-maintained registry, separate from the `platforms` content collection. Every "we build this on" chip anywhere on the site (work pages, service pages, the homepage marquee) resolves a platform slug through this file, not through the collection directly. A new `platforms/<slug>.md` page works fine on its own, but referencing its slug from `work.platforms` or `services.platforms` renders nothing, silently, until the slug is also added here.

**Single sources of truth.**
- `src/lib/site.ts` — business facts (address, phone, email, socials), reused by the header, footer, JSON-LD, and contact page.
- `src/lib/pricing.ts` — every price shown on the site; nothing should hard-code a figure elsewhere.
- `src/lib/schema.ts` — shared JSON-LD builders (breadcrumbs, list relationships). Detail pages still build their own type-specific schema (`Service`, `CreativeWork`, etc.) inline.
- `src/pages/llms.txt.ts` generates `/llms.txt` at build time from the content collections — never hand-edit an llms.txt file, edit the content instead.

**Redirects.** `public/_redirects` is a Netlify-syntax file served by Cloudflare Pages. First match wins, and Cloudflare does not follow redirect chains, so every rule must point straight at its final destination — if a retired page's target is itself later retired, every rule that used to point at it needs updating too, not just the newest one. Static rules must precede any dynamic/splat rule (Cloudflare caps: 2,100 static / 100 dynamic). [docs/seo-migration-map.md](docs/seo-migration-map.md) is the Search-Console-sourced rationale behind the existing rules — check it before renaming or retiring a URL that might carry rankings.

`functions/api/contact.js` is the only server-side code in the project, a single Pages Function that emails form submissions via Resend. Everything else is prerendered static HTML.

`docs/` has several point-in-time planning docs (`site-architecture.md`, `webflow-build-plan.md`, `blog-migration.md`, etc.) written during the Webflow → Astro migration — useful for the "why," but `src/content.config.ts` and the live content are the source of truth if one of them disagrees with what's actually in the repo.

## Content and writing style

- **No em dashes, anywhere** — not in prose, not in frontmatter. This needs active attention, not just avoiding the `—` character: `astro.config.mjs` runs markdown through `remark-smartypants` with its default settings, which auto-converts two consecutive hyphens (`--`) into a real em dash at build time. So `--` in any `.md` body copy becomes one even if you never type `—` directly. Use a comma, period, colon, or parenthetical instead.
- **Smart (curly) quotes only, never straight quotes** — in headings and in body text. `remark-smartypants` already converts straight `'`/`"` to `’`/`“ ”` automatically in rendered markdown body content, but it only runs on the markdown body — it does not touch frontmatter strings (`title`, `heading`, `summary`, `highlights`, etc.). Any apostrophe or quotation mark typed into frontmatter needs to be a real curly character (`’`, `“`, `”`) by hand, since nothing converts it at build time.
- No invented statistics, client counts, or success rates — every figure on the site has to be one that can be substantiated (this is stated as a real content rule, not just a style note, in `src/pages/llms.txt.ts`).
- Albuquerque, New Mexico is the primary identity; national/remote client work is a secondary proof point, not the lead.
- The header nav is deliberately capped at a handful of top-level items (see the rationale in `docs/site-architecture.md` §2) — services live under one `/services` hub rather than a dropdown per service.
