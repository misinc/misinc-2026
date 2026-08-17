# MIS 2026 Webflow Build Plan

## Summary

- Webflow site: `MIS 2026` (`siteId: 6a0fb2ee3fd646cd2a754be0`)
- Current Webflow state: Relume/Client-First starter scaffold with placeholder variables and a blank `main-wrapper` on Home
- Source repo: local `misinc-2026` app
- Build strategy: establish Webflow tokens first, then build the Home page body section by section
- Workflow: structure first, styling second, one section at a time

## Locked Decisions

- Repurpose the existing Webflow variable collections instead of creating parallel MIS collections.
- Match the current browser output as-is.
- Use a merged token strategy:
  - `theme.css` semantic MIS variables drive shared shell/UI behavior.
  - Existing maroon/dark-neutral section colors visible in Home sections are preserved as part of the current visual target.
- `Manrope` is the intended brand font and must exist in Webflow before styling begins.
- Home body only is in scope for this phase. Shared header, navbar, and footer work are separate follow-up tasks.

## Client-First Naming Rules

- Name sections and custom classes by function or purpose, not by the page they appear on.
- Do not use page-specific naming such as `home_hero`, `homepage_services`, or `section_home-hero`.
- Use `section_[section-identifier]` for section wrappers.
- Prefer names that still make sense if reused on another page.
- Use underscore-based custom class naming for section internals, such as:
  - `hero_content`
  - `hero_actions`
  - `services_list`
  - `services_item`
  - `cta_actions`
- Use `is-` only for combo or variant classes, not for base class names.

## Token Foundation Plan

### Existing collections to reuse

- `Primitives`
- `Color Schemes`
- `Typography`
- `UI Styles`

### Primitives

Populate with supported raw tokens from `design-system.json`:

- Colors
  - primary, secondary
  - accent set
  - white
  - neutral scale
  - warm scale
- Opacity colors
  - transparent
  - white opacity steps
  - dark opacity steps needed for overlays and borders
- Sizes
  - spacing scale
  - container and max-width values where useful in Webflow variables

### Typography

- Font family variables
  - heading: `Manrope`
  - body: `Manrope`
- Number/size variables
  - font weights
  - font sizes
  - line heights
  - letter spacing

### UI Styles

- Radius tokens
- Border width tokens

### Color Schemes

Repurpose into semantic MIS aliases that match the current rendered app:

- text
- muted text
- primary
- primary hover
- brand red
- soft background
- surface
- surface strong
- panel
- border
- red tint
- orange tint

### Not variableized

Keep these as style properties rather than forcing them into Webflow variables:

- shadows
- transition durations
- transition timing
- breakpoints

## Home Page Build Order

Build in repo order:

1. Hero
2. Strategic Services
3. Solutions
4. Case Studies
5. Authority
6. Final CTA

## Section Workflow

For each section:

1. Inspect current Webflow wrappers, nearby patterns, and reusable classes.
2. Provide a skeleton tree only.
3. Use real existing Client-First wrappers where possible.
4. Name all new classes by function, never by page.
5. User builds the structure manually in Webflow.
6. After user confirmation, style only that section.
7. Verify only that section.
8. Stop and wait before moving to the next section.

## Hero Start Point

The first section after token setup is `Hero`.

Expected naming pattern:

- `section_hero`
- `hero_component`
- `hero_content`
- `hero_actions`
- `hero_media`
- `hero_background-video`
- `hero_overlay`

Hero should match the current browser rendering, including:

- maroon accent treatment
- dark neutral heading and body text
- separate media layer and scrim treatment

## Verification Checklist

- Only the intended section changes at each step.
- Existing global wrappers are reused wherever practical.
- No page-specific class naming is introduced when a functional name would be clearer.
- No hardcoded color values are introduced in Webflow where variables can be used.
- Responsive behavior is checked for the current section only.
- Shared shell components remain out of scope during the Home body pass.

## Repo References

- Design tokens: [design-system.json](/Users/karim/Dropbox%20%28MIS,%20Inc.%29/misinc.com/site/2026/misinc-2026/design-system.json)
- Semantic theme variables: [src/styles/theme.css](/Users/karim/Dropbox%20%28MIS,%20Inc.%29/misinc.com/site/2026/misinc-2026/src/styles/theme.css)
- Home page structure: [src/app/pages/HomePage.tsx](/Users/karim/Dropbox%20%28MIS,%20Inc.%29/misinc.com/site/2026/misinc-2026/src/app/pages/HomePage.tsx)
