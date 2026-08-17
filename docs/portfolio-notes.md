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

## Sites that are no longer online

Checked every `projectUrl` in the collection. Two are dead — `nobhillneighborhoods.com`
and `nmchileassociation.com` — and are now marked `archived: true`, which shows
"No longer online" in the case study sidebar rather than linking somewhere broken.
Re-run this check before launch:

```bash
for u in $(grep -h "^projectUrl:" src/content/work/*.md | sed 's/projectUrl: //'); do
  printf "%-42s %s\n" "$u" "$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 12 "$u")"
done
```

`thebean.nyc` returns 403 to command-line requests. That is bot filtering, not a
dead site, so it keeps its link.

A project being offline is not a reason to drop it. Several of the strongest
case studies are for sites that have since changed hands or wound down, and the
work still happened.

## The 11 remaining unpublished projects

The Webflow Portfolio collection holds 28 items; 13 are drafts and were never
published, so they are not migrated. Two of them matter:

**You Can Lead Coaching** and **Cheezie Chews** have since been added back —
both sites are offline, but both carry strong testimonials, and the site now
has four client quotes instead of two. Cheezie Chews is the most persuasive of
the set: it describes agencies that overran budget and went silent before the
client found MIS, and notes three websites built together.

The remaining 11 drafts (SMI Facility Services, Fifty 'n Fit, NM Council of
Outfitters, Emily Garcia, Safety Flare, LifeCrafters, ITG New Mexico, Silent
Falcon UAS, Horizon Auto Glass, Rodd Farhadi, Emergent Business) are older.
Worth a pass to decide which are still representative — the offline test above
should not be the deciding factor.

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
