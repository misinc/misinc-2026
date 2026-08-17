# Portfolio — what shipped, what is pending

## What is live

15 case studies at `/works/<slug>`, every slug matching the existing Webflow
URL so the Search Console rankings carry over. All 15 appear in the GSC data,
so none of them were guesses.

Categories were rebuilt around **industry** — Restaurant, Real Estate,
Healthcare, E-Commerce, Nonprofit, Business — replacing the old Webflow
categories, which had drifted into describing our tooling ("Business Catalyst
to WordPress Migration", "Webflow"). Visitors filter by who a project was for,
not by how we built it. The old `/work-category/*` URLs 301 to `/portfolio`.

## The 13 unpublished projects

The Webflow Portfolio collection holds 28 items; 13 are drafts and were never
published, so they are not migrated. Two of them matter:

| Project | Why it is worth publishing |
|---|---|
| **You Can Lead Coaching** (Lenann McGookey Gardner) | Carries a strong testimonial: *"Karim is completely trustworthy, a joy to work with, and a great person to know."* |
| **Cheezie Chews** (Brett Weinberg, GlobalOne Pet) | Carries the longest and most persuasive testimonial on file — describes agencies that overran budget and went silent before finding MIS, and notes three websites built together. |

**Both testimonials are currently invisible on the site** because they are
attached to unpublished projects. That is the single easiest win available in
the portfolio: publishing those two case studies would take the site from two
client quotes to four, and the Cheezie Chews one is the best of the set.

The other 11 drafts (SMI Facility Services, Fifty 'n Fit, NM Council of
Outfitters, Emily Garcia, Safety Flare, LifeCrafters, ITG New Mexico, Silent
Falcon UAS, Horizon Auto Glass, Rodd Farhadi, Emergent Business) are older and
several of the live sites have since changed hands or gone offline. Worth a
pass to decide which are still representative.

## Testimonials

Client quotes are stored on the work item and rendered by `<Testimonial>`,
**verbatim**. They are real people on the record, so the text is never edited
for flow or length — only the surrounding presentation changes.

They appear in three places, all from the one source:
- the home page (two most recent)
- the portfolio index (all of them)
- the relevant case study

Each also emits `Review` schema inside the case study's `CreativeWork` JSON-LD,
which is what lets Google and AI assistants attribute a quote to MIS.

## Still to do

- **Confirm client permission** for named quotes, if that was never explicit.
- **Add outcomes.** The case studies describe what was built but rarely what
  changed. One true sentence each — "online orders went from zero to X a week",
  "the phone stopped ringing about broken forms" — would do more than any
  amount of description. Modest and true beats impressive and invented.
- **Compress the images.** Several screenshots are over 1 MB
  (`eric-spurlock.png` is 2.6 MB, `honor-flight.jpg` 2.4 MB). They come
  straight from Webflow's CDN. Convert to WebP and resize to about 1600px wide.
- **Publish the two draft projects above**, or decide not to.
