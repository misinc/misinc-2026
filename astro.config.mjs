// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import remarkSmartypants from 'remark-smartypants'

export default defineConfig({
  site: 'https://www.misinc.com',
  output: 'static',
  trailingSlash: 'never',

  integrations: [
    sitemap({
      // Utility/booking pages are client-facing links we send directly; they
      // should resolve but never compete in search.
      filter: (page) =>
        !/\/(font-lab|schedule|website-meeting|meeting-at-misinc|proposal-review|website-training|project-profiler|square-online-store-kickoff|square-online-store-free-consultation|real-estate-web-designer-consultation|contact-thanks)$/.test(
          page,
        ),
    }),
  ],

  markdown: {
    // Every migrated Webflow post gets typographic quotes and dashes for free.
    // Cast: remark-smartypants types its tree as `Node`, Astro expects `Root`.
    // They are structurally compatible at runtime.
    remarkPlugins: [/** @type {any} */ (remarkSmartypants)],
    shikiConfig: { theme: 'github-light', wrap: true },
  },

  vite: {
    // Cast: the Tailwind v4 plugin ships Vite 6 types, Astro bundles Vite 7.
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  build: {
    inlineStylesheets: 'auto',
  },
})
