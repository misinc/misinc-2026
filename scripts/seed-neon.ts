import { neon } from '@netlify/neon';

import { caseStudies as caseStudySummaries } from '../src/app/data/caseStudies';
import { CASE_STUDY_DETAILS } from '../src/app/data/caseStudyDetails';
import { getAllServiceDetails } from '../src/app/data/serviceDetails';

const sql = neon(process.env.NETLIFY_DATABASE_URL!);
const now = new Date().toISOString();

const solutionSeeds = [
  {
    slug: 'small-businesses',
    title: 'Small Businesses',
    summary: 'Web and digital growth systems for small teams with practical execution needs.',
    url: '/solutions/small-businesses',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    summary: 'Digital systems that convert listing attention into qualified consultations.',
    url: '/solutions/real-estate',
  },
  {
    slug: 'nonprofits',
    title: 'Nonprofits',
    summary: 'Mission-centered websites and workflows for donations and supporter growth.',
    url: '/solutions/nonprofits',
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    summary: 'Websites and content systems for expertise-led firms.',
    url: '/solutions/professional-services',
  },
  {
    slug: 'startups-saas',
    title: 'Startups & SaaS',
    summary: 'Scalable messaging and conversion systems for growth teams.',
    url: '/solutions/startups-saas',
  },
];

const navRows = [
  ['header', 'Home', '/', null, 10],
  ['header', 'Solutions', '/solutions', null, 20],
  ['header', 'Services', '/services', null, 30],
  ['header', 'Case Studies', '/case-studies', null, 40],
  ['header', 'Resources', '/resources', null, 50],
  ['header', 'About', '/about', null, 60],
  ['header', 'Contact', '/contact', null, 70],
  ['footer', 'Privacy Policy', '/privacy', null, 10],
  ['footer', 'Terms', '/terms', null, 20],
] as const;

const seoRows = [
  [
    '/services',
    'Web Design & AI Services in Albuquerque | MIS, Inc.',
    'Explore web design, webflow development, SEO, AEO, and AI consulting services in Albuquerque for lead growth, visibility, and scalable execution.',
    'https://www.misinc.com/services',
  ],
  [
    '/case-studies',
    'Case Studies — Client Results & Success Stories | MIS, Inc.',
    'Explore MIS case studies featuring measurable client results, success stories, and strategy outcomes across web, AI, SEO, and custom systems.',
    'https://www.misinc.com/case-studies',
  ],
  [
    '/resources',
    'Resources — Guides, FAQs & Blog for Web Design, AI, SEO | MIS, Inc',
    'Explore guides, FAQs, and blog insights on web design, AI, SEO, and AEO to support smarter digital decisions and growth.',
    'https://www.misinc.com/resources',
  ],
] as const;

await sql`insert into authors (name, slug, email, bio, created_at, updated_at)
values ('MIS, Inc.', 'mis-inc', 'karim@misinc.com', 'MIS editorial team', ${now}, ${now})
on conflict (slug) do update set
name = excluded.name,
email = excluded.email,
bio = excluded.bio,
updated_at = excluded.updated_at`;

for (const solution of solutionSeeds) {
  await sql`insert into solutions (slug, title, summary, url, is_published, created_at, updated_at)
  values (${solution.slug}, ${solution.title}, ${solution.summary}, ${solution.url}, true, ${now}, ${now})
  on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  url = excluded.url,
  updated_at = excluded.updated_at`;
}

for (const service of getAllServiceDetails()) {
  await sql`insert into services (
    slug, service_name, hero_title, hero_description, quick_answer, challenges, outcomes,
    deliverables, ideal_for, proof_quote, proof_attribution, proof_metrics,
    case_study_href, solution_href, related_service_slugs, faqs,
    seo_title, seo_description, canonical_path, is_published, created_at, updated_at
  ) values (
    ${service.slug},
    ${service.serviceName},
    ${service.heroTitle},
    ${service.heroDescription},
    ${service.quickAnswer},
    ${JSON.stringify(service.challenges)}::jsonb,
    ${JSON.stringify(service.outcomes)}::jsonb,
    ${JSON.stringify(service.deliverables)}::jsonb,
    ${JSON.stringify(service.idealFor)}::jsonb,
    ${service.proofQuote},
    ${service.proofAttribution},
    ${JSON.stringify(service.proofMetrics)}::jsonb,
    ${service.caseStudyHref},
    ${service.solutionHref},
    ${JSON.stringify(service.relatedServiceSlugs)}::jsonb,
    ${JSON.stringify(service.faqs)}::jsonb,
    ${service.seoTitle},
    ${service.seoDescription},
    ${service.canonicalPath},
    true,
    ${now},
    ${now}
  ) on conflict (slug) do update set
    service_name = excluded.service_name,
    hero_title = excluded.hero_title,
    hero_description = excluded.hero_description,
    quick_answer = excluded.quick_answer,
    challenges = excluded.challenges,
    outcomes = excluded.outcomes,
    deliverables = excluded.deliverables,
    ideal_for = excluded.ideal_for,
    proof_quote = excluded.proof_quote,
    proof_attribution = excluded.proof_attribution,
    proof_metrics = excluded.proof_metrics,
    case_study_href = excluded.case_study_href,
    solution_href = excluded.solution_href,
    related_service_slugs = excluded.related_service_slugs,
    faqs = excluded.faqs,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description,
    canonical_path = excluded.canonical_path,
    is_published = excluded.is_published,
    updated_at = excluded.updated_at`;
}

await sql`insert into blog_posts (
  slug, title, excerpt, body, status, published_at, seo_title, seo_description, created_at, updated_at
) values (
  'aeo-basics-structured-content',
  'AEO Basics for Structured Content',
  'A practical framework for making content answer-engine ready.',
  '<p>Use this rich text field for full blog content.</p>',
  'published',
  '2026-02-01T00:00:00.000Z',
  'AEO Basics for Structured Content | MIS, Inc.',
  'A practical framework for making content answer-engine ready.',
  ${now},
  ${now}
) on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  body = excluded.body,
  status = excluded.status,
  published_at = excluded.published_at,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  updated_at = excluded.updated_at`;

for (const summary of caseStudySummaries) {
  const detail = CASE_STUDY_DETAILS.find((entry) => entry.slug === summary.slug);

  await sql`insert into case_studies (
    slug, title, industry, problem, strategy, outcome, metric,
    categories, image_url, image_alt, featured, status, published_at,
    seo_title, seo_description, canonical_path, detail, created_at, updated_at
  ) values (
    ${summary.slug},
    ${summary.title},
    ${summary.industry},
    ${summary.problem},
    ${summary.strategy},
    ${summary.outcome},
    ${summary.metric},
    ${JSON.stringify(summary.categories)}::jsonb,
    ${summary.image},
    ${summary.imageAlt},
    ${summary.featured},
    'published',
    ${detail?.publishedDate ?? '2026-02-01T00:00:00.000Z'},
    ${detail?.seoTitle ?? summary.title},
    ${detail?.seoDescription ?? summary.outcome},
    ${detail?.canonicalPath ?? `/case-studies/${summary.slug}`},
    ${JSON.stringify(detail ?? {})}::jsonb,
    ${now},
    ${now}
  ) on conflict (slug) do update set
    title = excluded.title,
    industry = excluded.industry,
    problem = excluded.problem,
    strategy = excluded.strategy,
    outcome = excluded.outcome,
    metric = excluded.metric,
    categories = excluded.categories,
    image_url = excluded.image_url,
    image_alt = excluded.image_alt,
    featured = excluded.featured,
    status = excluded.status,
    published_at = excluded.published_at,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description,
    canonical_path = excluded.canonical_path,
    detail = excluded.detail,
    updated_at = excluded.updated_at`;
}

for (const [location, label, url, parentId, position] of navRows) {
  await sql`insert into navigation_items (
    location, label, url, parent_id, position, open_in_new_tab, is_visible, metadata, created_at, updated_at
  ) values (
    ${location}, ${label}, ${url}, ${parentId}, ${position}, false, true, ${JSON.stringify({})}::jsonb, ${now}, ${now}
  ) on conflict do nothing`;
}

for (const [routePath, title, description, canonicalUrl] of seoRows) {
  await sql`insert into seo_overrides (
    route_path, title, description, canonical_url, og_type, robots, is_active, updated_at
  ) values (
    ${routePath}, ${title}, ${description}, ${canonicalUrl}, 'website', 'index,follow', true, ${now}
  ) on conflict (route_path) do update set
    title = excluded.title,
    description = excluded.description,
    canonical_url = excluded.canonical_url,
    og_type = excluded.og_type,
    robots = excluded.robots,
    is_active = excluded.is_active,
    updated_at = excluded.updated_at`;
}

console.log('Neon seed complete.');
