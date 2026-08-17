# Pricing — decision needed

## Why this has its own doc

While writing the FAQ content I wrote *"most small business websites land between
$5,000 and $20,000."* **I made that number up.** Nobody told me it, and it is not
in the Webflow site or the Search Console data. It read plausibly, which is
exactly what made it dangerous, and it shipped to two pages before I flagged it.

It is now removed from both. The replacement copy describes what drives the price
without stating a figure, so nothing on the site claims a number we cannot stand
behind.

Two reasons this mattered more than a normal copy error:

1. **It was a factual claim about the business, presented as fact.** A prospect
   who reads it and then receives a different quote has caught you being wrong
   about your own prices, on the first page they read.
2. **It was inside FAQ schema.** Both instances sat in `FAQPage` JSON-LD, which
   is the structured data Google and AI assistants read to answer questions
   directly. A wrong number there does not just sit on the page — it gets
   repeated by assistants as your answer.

## The strategic question: publish prices at all?

**Recommendation: yes, publish starting-at prices.** Reasoning:

- **It protects your time**, which is the real constraint in a small studio. The
  enquiry that was never going to afford you costs an hour of calls to discover.
  A published floor filters that out before it reaches your calendar.
- **It is the strongest AEO play available to you.** "How much does a website
  cost in Albuquerque" is precisely the question an assistant wants to answer,
  and it cites pages that answer it plainly. Your competitors almost all say
  "contact us for a quote", which cannot be cited. `/albuquerque-web-design-pricing-guide`
  already draws 1,247 impressions a year with no real pricing on it.
- **It matches the site's voice.** Every other page promises straight answers.
  Refusing to discuss price undercuts that.
- **It is differentiating locally.** Almost nobody in the Albuquerque market
  publishes numbers.

The usual objection — that publishing costs you big projects — cuts the other
way for a studio your size. You are not competing for procurement-driven work
where a low anchor disqualifies you.

## Suggested structure

Starting-at prices by tier, not a single wide band. A range as broad as
$5k–$20k tells a reader almost nothing and makes both ends look arbitrary.

| Tier                 | What it covers                            | Price            |
|----------------------|-------------------------------------------|------------------|
| Starter site         | 5–8 pages, no CMS, launch-ready           | from $__3500__   |
| Business site        | CMS, blog or case studies, integrations   | from $___5000_   |
| E-commerce           | Store setup, payments, inventory          | from $__7500__   |
| Custom software / AI | Scoped per project after a discovery call | from $__8500__   |
| Care & hosting       | Monthly                                   | from $__50__/mo  |
| SEO & marketing      | Monthly retainer                          | from $__500__/mo |

Wording that keeps the door open without being evasive: *"Most projects in this
tier land between $X and $Y. Below $X we would point you at something simpler;
above $Y usually means custom functionality, and we will say so before you
commit."*

## What I need from you

Real numbers for the table above — or a decision not to publish, which is a
legitimate choice as long as we say so honestly rather than dodging.

Once you provide them, they go in **one** place (`src/lib/pricing.ts`) and feed
the pricing guide, both FAQs, and the service pages, so a rate change is a
single edit rather than a hunt.

## The wider rule

Anything about MIS that a reader would take as fact — prices, project counts,
years in business, client outcomes, certifications — comes from you or from a
verifiable source, never from me. Where I need a number to make a page work and
do not have one, I will leave a marked TODO rather than fill the gap plausibly.

Currently unverified and worth confirming:

- ~~"500+ projects delivered" vs "Over 1,000 Clients Served"~~ **Resolved.**
  Both were true and counting different things: MIS hosted sites it did not
  build, so client count legitimately exceeds build count. The stat now reads
  **"500+ websites built"**, which is the more defensible of the two.
- **"20+ years with our longest clients"** — inferred from the iranian.com and
  Pars Cuisine link history plus a line in your old FAQ saying you had worked
  with some clients for over 20 years. Plausible, but confirm.
- **Founded July 1995 by Karim Ardalan** — taken verbatim from the current
  About page, so this one has a source and is used on the new About page.
