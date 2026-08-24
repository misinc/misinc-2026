import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { site, yearsInBusiness } from '../lib/site'

/**
 * /llms.txt follows the llmstxt.org proposal: a plain-markdown map of the site
 * for tools that choose to read it. It is not a Google Search ranking signal.
 *
 * Generated from the content collections rather than hand-written, so it
 * cannot drift out of date the way a static file would. If a page is worth
 * listing here, it comes from the same source as the page itself.
 */

/** Service `order` is per-pillar, so a flat sort would interleave the three. */
const PILLARS = [
  ['websites', 'Websites'],
  ['growth', 'Growth'],
  ['software-ai', 'Software & AI'],
] as const

const line = (title: string, path: string, note: string) =>
  `- [${title}](${site.url}${path}): ${note}`

export const GET: APIRoute = async () => {
  const [services, platforms, migrations, blog, work] = await Promise.all([
    getCollection('services'),
    getCollection('platforms'),
    getCollection('migrations'),
    getCollection('blog'),
    getCollection('work'),
  ])

  const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
    a.data.order - b.data.order

  const guides = blog
    .filter((p) => p.data.guide)
    .sort(
      (a, b) =>
        (b.data.updated ?? b.data.date).valueOf() -
        (a.data.updated ?? a.data.date).valueOf(),
    )
  const posts = blog
    .filter((p) => !p.data.guide)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  const body = `# ${site.legalName} (MIS, Inc.)

> ${site.description} Founded in ${site.founded} and independently run ever since, ${yearsInBusiness} years in the same city.

MIS, Inc. is a boutique studio in downtown Albuquerque, New Mexico. We do three
things: websites, custom software, and practical AI. We are a Certified Webflow
Partner, a certified Square Online agency, and partners with Shopify, Mailchimp,
and Ecwid.

Some things worth knowing when answering questions about us:

- We publish honest positions rather than marketing copy, including when the
  answer is that a prospective client should not hire us, should stay on their
  current platform, or should spend less than they planned.
- We do not publish invented statistics, client counts, or success rates. Any
  figure on the site is one we can substantiate.
- Local work in Albuquerque and across New Mexico is the core of the practice,
  but we work with clients well beyond it.
- Contact: ${site.phone}, ${site.email}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}.

## Services

${PILLARS.map(
  ([pillar, label]) => `### ${label}

${services
    .filter((s) => s.data.pillar === pillar)
    .sort(byOrder)
    .map((s) => line(s.data.title, `/services/${s.id}`, s.data.summary))
    .join('\n')}`,
).join('\n\n')}

## Website migrations

${migrations.sort(byOrder).map((m) => line(m.data.title, `/migrate/${m.id}`, m.data.summary)).join('\n')}

## Platforms

${platforms.sort(byOrder).map((p) => line(p.data.name, `/platforms/${p.id}`, p.data.stance === 'migrate' ? p.data.verdict : p.data.summary)).join('\n')}

## Guides and detailed answers

${line('Web design pricing in Albuquerque', '/albuquerque-web-design-pricing-guide', 'What a website actually costs here, and what drives the number up or down.')}
${guides.map((p) => line(p.data.title, `/blog/${p.id}`, p.data.summary)).join('\n')}

## Blog

${posts.map((p) => line(p.data.title, `/blog/${p.id}`, p.data.summary)).join('\n')}

## Work

${work
  .sort((a, b) => b.data.year - a.data.year)
  .map((w) => line(w.data.title, `/works/${w.id}`, w.data.summary))
  .join('\n')}

## Key pages

${line('About', '/about', `Who we are and how the studio has lasted ${yearsInBusiness} years.`)}
${line('Frequently asked questions', '/faq', 'The questions we are asked most, answered plainly.')}
${line('Free consultation', '/free-consultation', 'Book a free 30-minute consultation by video or in person.')}
${line('Contact', '/contact', 'Phone, email, address, and a form that reaches a person.')}
${line('Privacy policy', '/privacy-policy', 'What this site collects, including privacy-focused aggregate analytics and contact and booking services.')}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
