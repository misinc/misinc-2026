# Hero media — what exists, what's needed

Every page opens with the same `PageHero`: eyebrow, heading, description,
buttons, and one piece of media. Media is **optional** — a page with no asset
shows a branded fallback panel that reads as deliberate, so no page is ever
blocked waiting on photography.

## Adding media to a page

Service pages: add a `hero` block to the markdown frontmatter. Nothing else changes.

```yaml
hero:
  type: image            # or: video
  src: /img/work/my-client.jpg
  alt: What the image shows          # images only, required for accessibility
  caption: Client name — Albuquerque # optional label over the media
```

Other pages: pass the same object as the `media` prop to `<PageHero>`.

## Current state

| Page | Media | Source |
|---|---|---|
| Home | ✅ video | 30th anniversary balloon (4.8 MB — **needs compressing**) |
| Services hub | ⚠️ video | Shorter balloon cut (2.1 MB) — placeholder, see below |
| Website Design | ✅ image | Windsor Door Sales |
| Website Development | ✅ image | Dermatology & Skin Cancer Center of NM |
| E-Commerce Stores | ✅ image | Peasant Pies |
| Real Estate | ✅ image | Kat Jacob, Realtor® |
| Restaurant | ✅ image | Pars Cuisine |
| Healthcare | ✅ image | Coleman Vision |
| SEO | ❌ fallback | needed |
| Digital Marketing | ✅ image | New Mexico Chile Association |
| Custom Software | ❌ fallback | needed |
| AI Consulting | ❌ fallback | needed |
| AI Agents | ❌ fallback | needed |

Client screenshots were pulled from the Webflow Portfolio CMS, so they are real
MIS work rather than stock imagery.

## What to produce

**1. Services hub — a client work montage (planned).** Karim is generating a
video that pans across client screenshots. That is a better fit than the
balloon here, since the hub's job is to show range. Target ~8–12 s, silent,
seamless loop, 1280×800 or wider, under 2 MB.

Drop it at `public/video/services-work-montage.mp4` and point the hub's
`media.src` at it. Source screenshots are already in `public/img/work/`, and
the full set of 28 is in the Webflow Portfolio collection.

**2. Compress the home page video.** 4.8 MB is by far the heaviest asset on the
site. Target ~1.5 MB and export a poster frame in the same pass:

```bash
ffmpeg -i input.mp4 -t 8 -an -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/video/anniversary-balloon.mp4
ffmpeg -i public/video/anniversary-balloon.mp4 -vframes 1 -q:v 3 public/img/anniversary-balloon-poster.jpg
```

Then add `poster: /img/anniversary-balloon-poster.jpg` to the home hero — it
removes the blank frame before playback starts.

**3. The four pages still on the fallback.** SEO, Custom Software, AI
Consulting, and AI Agents have no natural client screenshot. Options, best first:

- A short screen recording of real work — a Search Console graph trending up, an
  agent handling a message, a dashboard being used. Honest and specific.
- A photograph of the team or the Marquette office at work.
- Leave the fallback. It looks intentional, and an empty-but-clean panel beats a
  generic stock photo of someone smiling at a laptop.

## Rules for hero media

- **Real work only.** No stock photography of models. The old repo carried stock
  images from a template; none of it is used.
- **Silent, looping, short** for video (8–12 s), `muted playsinline` so iOS plays
  it inline, and never autoplay anything with sound.
- **Under 2 MB** per video. Anything larger and the hero costs more than it earns.
- **Alt text on every image** describing what it shows, not "hero image".
- Video is decorative here — the page must still make sense with it blocked.
