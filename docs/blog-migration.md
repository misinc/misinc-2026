# Blog migration — decisions and status

## Should the popular posts move to /guides/?

**No. The post URLs stay at `/blog/<slug>`.**

The question was whether high-traffic posts shown as "Guides" on the home page
should live at `/guides/<slug>` instead, with 301s from their blog URLs. The
answer is no, and the reasoning is worth recording because the instinct behind
it is sound.

**The risk is badly asymmetric.** `/blog/albuquerque-seo-company` draws 22,983
impressions a year — the single most-seen page on the site after the home page.
The upside of a tidier URL is marginal: Google has been explicit that keywords
in a URL path are a very minor ranking factor. The downside is a temporary
ranking dip on your most valuable asset, and the risk of a permanent one.

**A 301 passes most link equity, not all.** For a page that already ranks, the
sensible default is to leave the URL alone.

**We are about to rewrite that post anyway.** Changing the URL and the content
in the same move means that if rankings drop, there is no way to tell which
change caused it. Change one thing at a time when the stakes are this high.

### What we do instead

`/guides` is an **index**, not a URL space. It curates the substantial evergreen
posts and links to them at their existing `/blog/` URLs. Posts carry a
`guide: true` flag in frontmatter rather than living somewhere different.

This gets the full navigational benefit — a page that says "here is our best
writing", separate from a reverse-chronological blog — with none of the SEO
risk. If we ever want `/guides/<slug>` URLs, that decision stays open, and is
better made after the rewrites have settled.

One thing already sits outside `/blog/`: `/albuquerque-web-design-pricing-guide`
is a top-level page with 1,247 annual impressions. It stays where it is, for the
same reason.

## What is being migrated — and a finding that changed the plan

38 posts were exported from the 117 in Webflow. Inspecting them revealed a
split that was not visible from the sitemap or the Search Console data:

**11 are real posts** (212–682 words). Every one is part of the Albuquerque
keyword cluster — `albuquerque-seo-company` (22,983 impressions/yr),
`albuquerque-seo-services` (5,556), the web-design variants, plus
`real-estate-web-designers`, `square-online-store`, and `new-year-new-website`.
These are genuine written content and are the reason the blog matters.

**27 are link shares, not posts** (39–94 words). Each is a single sentence
followed by a "Read More" link to somebody else's article via a `buff.ly`
short link — social posts that Webflow stored as blog entries. Some carry
titles that badly oversell them: `google-search-console-the-definitive-guide`
is 94 words and links away.

Publishing those 27 would mean 27 thin pages sending visitors off-site through
2018-era short links. Google's helpful-content system treats that exactly as
badly as it sounds, and they would dilute the topical authority of the 11 real
posts. **All 27 are retired with explicit 301s to `/blog`** — every one had
under 110 impressions a year, most under 30.

Explicit rules rather than a `/blog/*` splat: a splat would also swallow the 11
posts we are keeping, and correctness beats brevity in a redirect file.

The remaining 79 Webflow posts were never exported — the same aggregated
reposts (Star Wars, Christmas foods, malls in Massachusetts), all with five or
fewer impressions.

### Consequence for /guides

Four posts are flagged `guide: true`: `albuquerque-seo-company`,
`albuquerque-seo-services`, `real-estate-web-designers`, and
`square-online-store`. They are the ones with both real depth and search
traction — but they were written in 2021 and read like it. The guides page is
honest today and would be genuinely good after a refresh pass.

## The pillar page rewrite — done

`/blog/albuquerque-seo-company` has been rewritten. The URL is unchanged, which
is the entire point: it carries 22,983 annual impressions at position 41.

**What was wrong with it.** The 2021 version was 600 words of agency filler —
"Today, consumers turn to the internet to search for the goods and services they
need" — stuffed with *leading Albuquerque SEO company*, *best SEO companies in
Albuquerque, NM*, and claiming "25 years" (now wrong). It answered no question
anybody actually has. Google clearly saw the topical relevance; the page simply
did not deserve to rank.

**What it is now.** Roughly 2,000 words structured around the real intent behind
the query, which is *hiring* rather than *learning*:

- What SEO actually is, in three parts
- **The map pack** — that for local searches, Google's three-business block sits
  above organic results and is driven by the Google Business Profile and
  reviews, not the website. This is the strongest differentiator on the page:
  most agencies never mention it because it points away from billable work.
- What good SEO work looks like, and six red flags
- Six questions to ask any company, explicitly including us
- What it costs — framed as what *drives* cost, with no invented figures
- **AEO**, at length: how being *cited* differs from being *ranked*, what
  actually works, and how to test it yourself
- An honest "should you just do it yourself?" section
- Six FAQs emitting FAQPage schema

**Why this shape should work.** The page gives away genuinely useful advice,
including advice that reduces the need to hire anyone. That is what makes the
closing pitch credible, and it is also what AI assistants cite — a page that
answers the question directly rather than deflecting to a contact form.

## Still to do
- **Refresh the dated posts.** Several reference 2018/2019 in the title or lean
  on tools that no longer exist. Titles with a year should either be updated or
  have the year removed.
- **Move the images.** Post thumbnails still point at Webflow's CDN
  (`uploads-ssl.webflow.com`). They must be downloaded into `public/img/blog/`
  before the Webflow site is switched off, or every post image breaks.
- **Blog categories.** Keep the handful of Albuquerque-keyword category pages
  that draw impressions; 301 the rest to `/blog`.
