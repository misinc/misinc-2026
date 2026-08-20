// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import remarkSmartypants from 'remark-smartypants'
import { unified } from '@astrojs/markdown-remark'

export default defineConfig({
  site: 'https://www.misinc.com',
  output: 'static',
  trailingSlash: 'never',

  // Astro 7 defaults compressHTML to 'jsx': whitespace between a text node
  // and an element on separate lines (e.g. "call\n<a>...</a>") collapses
  // with no space, which breaks copy like "call<a>...</a>instead" all over
  // this codebase — none of it was written expecting JSX whitespace rules.
  // `true` restores the old (Astro 5/6) lossless behaviour every template
  // here was actually written against.
  compressHTML: true,

  integrations: [
    sitemap({
      // Utility/booking pages are client-facing links we send directly; they
      // should resolve but never compete in search.
      filter: (page) =>
        !/\/(font-lab|hero-lab|schedule|website-meeting|meeting-at-misinc|proposal-review|website-training|project-profiler|square-online-store-kickoff|square-online-store-free-consultation|real-estate-web-designer-consultation|contact-thanks)$/.test(
          page,
        ),
    }),
    // Lets a content-collection entry import real code (e.g. lib/pricing.ts)
    // instead of hand-typing a figure that then has to be kept in sync
    // manually. Used sparingly — most posts stay plain .md; only the ones
    // that quote a live figure need to be .mdx. extendMarkdownConfig
    // (the default) carries the remarkSmartypants/shiki config below over to
    // .mdx files too, so smart quotes and code highlighting stay identical.
    mdx(),
  ],

  markdown: {
    // Astro 7 defaults to its own markdown processor (Sätteri) and no longer
    // installs @astrojs/markdown-remark, which means remarkPlugins is
    // silently ignored unless the old remark/rehype pipeline is opted back
    // into explicitly. Without this, smart quotes and em-dash conversion
    // (the "no em dashes, curly quotes only" content rule) would stop firing
    // sitewide with no build error to catch it.
    processor: unified(),
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
