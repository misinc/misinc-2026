# SEO Migration Map — misinc.com → Astro rebuild

Source: Google Search Console, Performance → Pages, 12 months ending 2026-08-17.

## The headline

The whole site earned roughly **270 clicks from Google in 12 months** — 164 of them on the
home page. There is very little *traffic* to lose. What the site has is **~100k impressions
ranking on pages 2–7**: Google already considers misinc.com relevant for Albuquerque web
design/SEO queries, but the pages are too weak to earn page-1 spots or clicks.

Strategy: this is not a "preserve rankings" migration, it's a **consolidate-and-strengthen**
migration. Keep every URL that has impressions or backlinks, collapse thin pages into fewer
strong ones with 301s, and let the faster/denser Astro pages climb.

## Tier 1 — Keep exact URL, refresh content

| URL | 12-mo impressions | Avg position | Notes |
|---|---|---|---|
| `/` | 30,881 | 25.8 | New home page (prototype design) |
| `/about` | 1,440 | 8.5 | Already near page 1 — keep strong |
| `/blog/albuquerque-seo-company` | 22,983 | 40.8 | **Single biggest opportunity.** Rewrite as a real pillar page |
| `/blog/albuquerque-seo-services` | 5,556 | 52.1 | Support piece; interlink with the above |
| `/services/wordpress-procare-plan` | 5,154 | 45.6 | Real demand for WP maintenance — keep + refresh |
| `/services/web-design` | 4,339 | 35.3 | Pillar |
| `/services/healthcare-website-design` | 4,297 | 72.5 | Impressions with terrible position = thin content, real demand |
| `/services/restaurant-website-design` | 3,949 | 37.6 | Same |
| `/services/seo` | 2,832 | 17.7 | Closest service page to page 1. Fold AEO story in |
| `/services/digital-marketing` | 2,694 | 47.7 | Becomes the single marketing pillar (see Tier 2) |
| `/albuquerque-web-design-pricing-guide` | 1,247 | 46.1 | Pricing content earns links/AI citations — refresh |
| `/albuquerque-web-design` | 973 | 38.4 | The local money page — needs a serious rewrite |
| `/services/ecommerce-website-design` | 831 | 7.8 | Page 1! Do not touch the URL, refresh carefully |
| `/services/real-estate-website-design` | 607 | 20.7 | Keep |
| `/website-migrations` | 373 | 16.2 | Keep; hub for `/migrate/*` |
| `/migrate/from-weebly-to-webflow` | 119 | 14.4 | High-intent niche; keep all three `/migrate/*` pages |
| `/free-consultation` | 303 | 8.8 | Conversion page, near page 1 |
| `/contact` | 1,601 | 19.4 | Keep |
| `/portfolio` | 1,152 | 18.2 | Becomes Work index (keep URL, or 301 to `/work` — prefer keeping `/portfolio`) |
| `/services` | 75 | 6.6 | Services hub |
| `/privacy-policy` | 176 | 5.8 | Keep |

Works/case-study pages to carry over (each had clicks or impressions):
`/works/kat-jacob-realtor` (4.1% CTR), `/works/reule`, `/works/honor-flight-of-northern-new-mexico`,
`/works/colemanvision` (531 impr), `/works/nob-hill-neighborhoods`, `/works/pars-cuisine`,
`/works/eric-spurlock`, `/works/skin-cancer-center-of-new-mexico`. Keep the `/works/` prefix
and slugs; port as Astro content collection. Remaining `/works/*` items: port too (cheap once
the collection exists).

## Tier 2 — Consolidate into stronger pages (301)

| Old URL | 301 to | Rationale |
|---|---|---|
| `/services/email-marketing` (862 impr) | `/services/digital-marketing` | Three thin marketing pages split one topic |
| `/services/social-media-marketing` (317) | `/services/digital-marketing` | |
| `/services/digital-marketing-for-online-stores` (891) | `/services/digital-marketing` | Merge its ecommerce angle into the pillar copy |
| `/platforms/ecwid`, `/addon-commerce`, `/addonidx`, `/elementor-builder-for-wordpress`, `/activecampaign`, `/facebook`, `/twitter`, `/webflow-e-commerce` | nearest service page (ecommerce / web-design / digital-marketing) | Thin platform pages for tools we no longer lead with |

**Revised 2026-08-17 — partner platform pages are KEPT, not redirected.** The home page now carries a
platform marquee linking to them, and the query data justifies it independently:

| Keep | 12-mo impressions | Supporting queries |
|---|---|---|
| `/platforms/wordpress` | 1,047 | plus the WP-care cluster (~3,500) |
| `/platforms/mailchimp` | 3,804 @ pos 32 | "mailchimp partner/expert/specialist" ~2,600/yr |
| `/platforms/square-online-store` | 582 | Square/online-ordering cluster |
| `/platforms/webflow` | 449 | "webflow commerce/ecommerce" ~500/yr |
| `/platforms/shopify` | 528 | keep as a partner page |
| `/platforms/supabase` | new | supports the custom software + AI practice |

These become real partner pages (why we use it, what we build on it, proof, CTA) rather than the
current thin stubs — they earn their keep as both ranking assets and marquee destinations.
| `/packages/*` (6 pages) | nearest service page | Package/pricing content merges into services + pricing guide |
| `/website-audit`, `/free-website-audit` | `/free-consultation` | One offer, one page |
| `/blog-tags/*` (all) | matching `/blog-categories/*` if kept, else `/blog` | Tag pages are pure thin-content liability |
| `/blog-categories/*` | keep the 4–5 Albuquerque-keyword categories as blog category pages in Astro; 301 the rest to `/blog` | `albuquerque-seo-company` category had 530 impr |
| `/blog-authors/*` | `/about` | |
| `/domains`, `/domains-ns` | keep as small utility pages if the domain business is active; else 301 to `/contact` | Owner's call |
| `/work-category/*` | `/portfolio` | Astro Work index gets filter UI instead |

## Tier 3 — Blog

- **Keep + refresh (the local-keyword set):** `albuquerque-seo-company`, `albuquerque-seo-services`,
  `albuquerque-seo`, `albuquerque-web-design`, `albuquerque-web-development`, `website-designers-albuquerque`,
  `website-design-albuquerque`, `web-developer-albuquerque`, `real-estate-web-designers`,
  `square-online-store`, `5-tips-to-dominate-local-seo`, `new-year-new-website`.
- **Keep as-is (evergreen, relevant, some impressions):** SEO/meta-tags guide, Search Console guide,
  keyword-research post, small-business marketing posts with impressions.
- **Retire (301 to `/blog`):** the aggregated/off-topic reposts (Star Wars, Christmas foods,
  Apple Maps, malls in Massachusetts, tax tips, etc.). They have ≤5 impressions each and dilute
  the site's topical focus. Roughly half the ~120 posts.

## Netlify `_redirects` (draft — final version generated after Astro routes exist)

```
# Consolidations
/services/email-marketing                    /services/digital-marketing        301
/services/social-media-marketing             /services/digital-marketing        301
/services/digital-marketing-for-online-stores /services/digital-marketing       301
/platforms/wordpress                         /services/wordpress-procare-plan   301
/platforms/mailchimp                         /services/digital-marketing        301
/platforms/activecampaign                    /services/digital-marketing        301
/platforms/facebook                          /services/digital-marketing        301
/platforms/twitter                           /services/digital-marketing        301
/platforms/square-online-store               /services/ecommerce-website-design 301
/platforms/shopify                           /services/ecommerce-website-design 301
/platforms/woocommerce                       /services/ecommerce-website-design 301
/platforms/ecwid                             /services/ecommerce-website-design 301
/platforms/addon-commerce                    /services/ecommerce-website-design 301
/platforms/webflow-e-commerce                /services/ecommerce-website-design 301
/platforms/webflow                           /services/web-design               301
/platforms/elementor-builder-for-wordpress   /services/web-design               301
/platforms/addonidx                          /services/real-estate-website-design 301
/packages/*                                  /services                          301
/website-audit                               /free-consultation                 301
/free-website-audit                          /free-consultation                 301
/work-category/*                             /portfolio                         301
/blog-tags/*                                 /blog                              301
/blog-authors/*                              /about                             301
# Utility/legacy
/contact-thanks                              /contact                           301
/sitemap                                     /                                  301
```

## Query analysis (12 months, GSC Queries.csv)

Keyword clusters by aggregate impressions, all currently ranking pages 2–4:

| Cluster | ~Impressions/yr | Avg position | Target page |
|---|---|---|---|
| Albuquerque SEO ("albuquerque seo", "seo company albuquerque", + ~15 variants) | ~20,000 | 29–45 | `/blog/albuquerque-seo-company` rewrite + `/services/seo` |
| Albuquerque web design ("albuquerque web design" 3,626 @ 27.7, + company/agency/designer variants) | ~13,000 | 26–36 | Home page (consolidated) |
| WordPress care (national: "wp site care", "wordpress care plans"…) | ~3,500 | 45–90 | `/services/wordpress-procare-plan` |
| Mailchimp partner/expert (national) | ~2,600 | 25–85 | fold into `/services/digital-marketing` |
| Restaurant + healthcare website design (mostly national/other-city queries) | ~4,000 | 30–95 | industry pages; treat as secondary |
| Ecommerce NM ("ecommerce web design nm" family) | ~1,500 | **7–13 (page 1!)** | `/services/ecommerce-website-design` — protect |
| Albuquerque email marketing | ~1,300 | 15–55 | `/services/digital-marketing` |

Notable: several LLM-agent-style queries ("mis, inc. in nm 87110 partnership collaboration…") rank #1 —
AI assistants are already querying Google about MIS. AEO/structured data investment is warranted.

## Backlink profile (GSC link exports, 2026-08-17)

94 unique linking domains. Top ~18 are all sites MIS built or hosts (client footer credits:
iranian.com 864, parscuisine.us 402, housemd-guide.com 400, addonidx.com 400, westwing.bewarne.com 400,
colemanvision.com, windsordoorsales.com, varelarealestate.com, icsnm.org, nmdermcenter.com…),
then directories (yellowpages, goodfirms, designrush, localspark), and only a handful of independent
editorial links (bizjournals 2014, albuquerqueinsider, uforocks "best of ABQ" listicles).

Implications:
1. **Nearly all link equity points at the home page** — deep-page redirect risk is ~zero, which
   further de-risks the Tier 2 consolidations.
2. Footer credits are real but Google discounts sitewide footer links. Reaching page 1 for the
   money terms needs Google Business Profile + reviews + a few genuine local editorial links more
   than it needs anything on-site.

## Page-1 plan for "albuquerque web design"

Current state: home page ranks ~26–28 (top of page 3) for the head term; `/albuquerque-web-design`
landing page trails at ~38 — two pages splitting one query.

1. **One canonical page: the home page.** New home already leads with "Albuquerque web studio since
   1995". Title: `Albuquerque Web Design, Custom Software & AI | MIS, Inc. — Since 1995`.
   301 `/albuquerque-web-design` → `/`, merging its content; keep `/albuquerque-web-design-pricing-guide`
   as the supporting/linkable asset.
2. **LocalBusiness/ProfessionalService schema** on home: NAP, geo, foundingDate 1995, sameAs to GBP
   and directory profiles.
3. **Real ABQ client proof on the home page** — the works collection already has them: Pars Cuisine,
   Coleman Vision, NM Dermatology Center, Windsor Door Sales, Honor Flight of Northern NM,
   NM Chile Association. These replace the placeholder success stories.
4. **Google Business Profile + reviews** — the single biggest local-ranking lever, and it feeds the
   map pack that sits above organic for these queries. Ongoing review asks to happy clients.
5. **Local links**: ask 3–4 client sites already footer-linking for one in-content mention;
   ABQ chamber / NM Tech Council type memberships; pitch the pricing guide locally; stay on the
   "best of Albuquerque" lists (already on uforocks, albuquerqueinsider) — these also feed AI answers.
6. **Core Web Vitals**: Astro static pages should go green across the board vs the current Webflow
   build — a real, free ranking tailwind.
7. **Don't neglect the bigger prize**: the Albuquerque *SEO* cluster (~20k impressions) is larger than
   the web design cluster. The `/blog/albuquerque-seo-company` pillar rewrite + `/services/seo` interlink
   is the highest-upside single content task on the whole migration.

## Home page sections driven by the GSC data

Added to the prototype on 2026-08-17 because the query data argued for them:

1. **FAQ section (6 questions) with FAQPage JSON-LD.** The strongest AEO move available. The query
   export is full of question-shaped and agent-style searches, and several "mis, inc. in nm 87110 …"
   agent queries already rank #1 — AI assistants are actively querying Google about MIS. The FAQ
   answers "how much does a website cost in Albuquerque", which is a real query cluster
   (`/albuquerque-web-design-pricing-guide`, 1,247 impressions) and the kind of question AI answers cite.
2. **Notes/guides strip (3 cards).** Not a blog feed — three hand-picked links to the pricing guide,
   the Albuquerque SEO pillar, and an AI-search guide. It funnels home-page authority into the two
   highest-impression assets on the site (23k + 5.5k impressions) without committing to a publishing
   cadence.
3. **Platform marquee.** Surfaces the partner pages above, and reinforces topical relevance for the
   WordPress-care and Mailchimp-partner clusters.

Deliberately NOT added: a testimonials wall (no real reviews collected yet — build GBP reviews first,
then add), an industries grid (that's what the industry service pages are for), and a full blog feed.

## Launch checklist

1. Astro `sitemap` integration on; submit new sitemap in GSC (domain property).
2. Verify every Tier 1 URL returns 200 with equivalent title tag + meta description
   (pull current values from Webflow via MCP before cutover).
3. Crawl old sitemap URLs post-launch (Screaming Frog or a script) — zero 404s allowed.
4. Watch GSC Coverage + Performance weekly for 8 weeks.
5. `seo.misinc.com` subdomain (legacy dashboard) — decide: shut down or leave; it's
   indexed with 38 impressions.
