# MIS, Inc. Site Launch Checklist

## Readiness Summary

The site is nearly ready. The production build succeeds with 82 pages and no errors. All 247 URLs from the current Webflow sitemap are covered by either a new page or a redirect.

Three items must be completed before launch:

- Fix three redirect chains so `/blog-categories/marketing`, `/blog-categories/social-media`, and `/services/promotion.php` point directly to `/services/email-marketing`.
- Commit and push the current uncommitted launch changes on `astro`.
- Verify the Cloudflare preview has `RESEND_API_KEY` and successfully delivers both contact forms.

The Eric Spurlock screenshot is fine. It was replaced in commit `a190afc` with the current 133 KB AVIF; the warning in `docs/portfolio-notes.md` refers to the removed 2.6 MB PNG and is stale. Karim’s portrait can follow after launch.

## Before Launch

- [x] Correct the three redirect chains and update the stale Eric screenshot note.
- [x] Run `npm run build`; require zero errors.
- [x] Commit and push every intended change, including `GuidesPreview.astro`.
- [x] Confirm the Cloudflare preview builds from the pushed `astro` branch.
- [x] Confirm `CONTACT_TO`, `CONTACT_FROM`, and secret `RESEND_API_KEY` exist in the preview and production Worker environments.
- [x] Submit test messages through `/contact` and `/start-a-project`; verify delivery, reply-to address, success states, and failure messaging.
- [x] Test the Cal.com calendar on `/free-consultation`, including mobile layout and direct-contact fallback.
- [x] Review the preview on current Safari, Chrome, and Firefox at phone, tablet, and desktop widths.
- [x] Keyboard-test navigation, mobile menu, forms, portfolio filters, archive gallery, and the 1995-mode control.
- [x] Run an accessibility and Lighthouse pass on Home, Services, Portfolio, About, Contact, and Free Consultation.
- [x] Verify 404 handling, security headers, caching headers, `robots.txt`, `sitemap-index.xml`, `llms.txt`, canonical URLs, Open Graph images, and structured data.
- [x] Confirm business facts, published prices, partner claims, and permission to use named testimonials.
- [x] Check every live portfolio-site link and mark newly unavailable projects as archived.
- [x] Verify Stripe Customer Portal return URLs no longer depend on the retired subscription pages.
- [x] Record rollback instructions: restore the previous production route/domain assignment or roll back the Worker deployment.

## Cutover

- [ ] Approve the Cloudflare preview as the release candidate.
- [ ] Merge `astro` into `main` and push `main`.
- [ ] Confirm Cloudflare deploys the exact approved commit.
- [ ] Attach `misinc.com` and `www.misinc.com`, with HTTPS working and a single canonical `www` destination.
- [ ] Smoke-test Home, Services, Portfolio, Contact, booking, one blog post, one case study, one redirect, and a nonexistent URL.
- [ ] Send one real form submission and confirm inbox delivery after the production cutover.
- [ ] Confirm the old Webflow deployment remains available as the short-term rollback source.

## After Launch

- [ ] Crawl all 247 old sitemap URLs; require no unexpected 404s and no redirect chains.
- [ ] Submit `https://www.misinc.com/sitemap-index.xml` in Google Search Console.
- [ ] Inspect representative URLs in Search Console and request indexing for the home page and primary service pages.
- [ ] Monitor Worker errors, form delivery, crawl errors, indexing, and search performance daily for the first week and weekly for eight weeks.
- [ ] Leave `seo.misinc.com` unchanged during this launch and audit it separately.
- [ ] Add Karim’s portrait as post-launch polish.
- [ ] Consider CI for automatic build, link, accessibility, and redirect checks; it is useful but not a launch blocker.

## Assumptions

- Production continues to deploy from `main`; `astro` is the preview/release-candidate branch.
- The current uncommitted working tree is intended for launch.
- No audience analytics will be added; the existing privacy policy remains accurate.
- A strict CSP remains deferred until the Cal.com embed can be tested against it.
