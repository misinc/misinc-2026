import { neon } from '@netlify/neon';

const sql = neon(process.env.NETLIFY_DATABASE_URL);

const services = [
  {
    slug: 'web-design',
    name: 'Web Design & Redesign',
    description:
      'Create a modern, conversion-focused website that clarifies your value and helps qualified prospects take action.',
    solutionHref: '/solutions/professional-services',
  },
  {
    slug: 'webflow-development',
    name: 'Webflow Development',
    description:
      'Build scalable, easy-to-manage Webflow sites with strong performance, clean CMS structure, and faster launch cycles.',
    solutionHref: '/solutions/startups-saas',
  },
  {
    slug: 'square-website-design',
    name: 'Square Website Design',
    description:
      'Launch trustworthy Square websites that connect brand, content, and commerce in a streamlined customer experience.',
    solutionHref: '/solutions/professional-services',
  },
  {
    slug: 'custom-applications',
    name: 'Custom Applications',
    description:
      'Develop custom web applications, client portals, and internal tools that remove process friction and support growth.',
    solutionHref: '/solutions/startups-saas',
  },
  {
    slug: 'ai-consulting',
    name: 'AI Consulting & Automation',
    description:
      'Deploy practical AI consulting and automation initiatives that improve team output and reduce repetitive operational work.',
    solutionHref: '/solutions/startups-saas',
  },
  {
    slug: 'seo-strategy',
    name: 'SEO Strategy',
    description:
      'Increase qualified organic traffic with SEO strategy built on search intent, technical foundations, and conversion-focused content.',
    solutionHref: '/solutions/professional-services',
  },
  {
    slug: 'aeo-services',
    name: 'AEO Services',
    description:
      'Improve answer engine visibility by structuring content for AI results, featured snippets, and direct-answer queries.',
    solutionHref: '/solutions/professional-services',
  },
];

const now = new Date().toISOString();

await sql`insert into authors (name, slug, email, bio, created_at, updated_at)
values ('MIS, Inc.', 'mis-inc', 'karim@misinc.com', 'MIS editorial team', ${now}, ${now})
on conflict (slug) do update set name = excluded.name, email = excluded.email, bio = excluded.bio, updated_at = excluded.updated_at`;

await sql`insert into solutions (slug, title, summary, url, is_published, created_at, updated_at)
values
('professional-services', 'Professional Services', 'Websites and content systems for expertise-led firms.', '/solutions/professional-services', true, ${now}, ${now}),
('startups-saas', 'Startups & SaaS', 'Scalable messaging and conversion systems for growth teams.', '/solutions/startups-saas', true, ${now}, ${now})
on conflict (slug) do update set title = excluded.title, summary = excluded.summary, url = excluded.url, updated_at = excluded.updated_at`;

for (const service of services) {
  const canonicalPath = `/services/${service.slug}`;
  await sql`insert into services (
    slug, service_name, hero_title, hero_description, quick_answer, challenges, outcomes,
    deliverables, ideal_for, proof_quote, proof_attribution, proof_metrics,
    case_study_href, solution_href, related_service_slugs, faqs,
    seo_title, seo_description, canonical_path, is_published, created_at, updated_at
  ) values (
    ${service.slug},
    ${service.name},
    ${service.name},
    ${service.description},
    ${service.description},
    ${JSON.stringify([])}::jsonb,
    ${JSON.stringify([])}::jsonb,
    ${JSON.stringify([])}::jsonb,
    ${JSON.stringify([])}::jsonb,
    'MIS delivers this service with strategic and technical execution.',
    'MIS, Inc.',
    ${JSON.stringify([])}::jsonb,
    '/case-studies',
    ${service.solutionHref},
    ${JSON.stringify([])}::jsonb,
    ${JSON.stringify([])}::jsonb,
    ${service.name + ' | MIS, Inc.'},
    ${service.description},
    ${canonicalPath},
    true,
    ${now},
    ${now}
  ) on conflict (slug) do update set
    service_name = excluded.service_name,
    hero_title = excluded.hero_title,
    hero_description = excluded.hero_description,
    quick_answer = excluded.quick_answer,
    solution_href = excluded.solution_href,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description,
    canonical_path = excluded.canonical_path,
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

await sql`insert into case_studies (
  slug, title, industry, problem, strategy, outcome, metric, categories, featured,
  status, published_at, seo_title, seo_description, canonical_path, created_at, updated_at
) values (
  'brand-x-growth-program',
  'How We Helped Brand X Increase Qualified Leads by 47% in 6 Months',
  'Professional Services',
  'Traffic was strong, but qualified lead conversion was low.',
  'Rebuilt information architecture and conversion paths.',
  'Improved lead quality and pipeline consistency.',
  '+47% qualified leads',
  ${JSON.stringify(['Web Design & Redesign', 'AEO / Search Visibility'])}::jsonb,
  true,
  'published',
  '2026-02-01T00:00:00.000Z',
  'How Brand X Increased Qualified Leads by 47% | MIS Case Study',
  'Read how MIS helped Brand X increase qualified leads by 47% through web design, intent strategy, and AEO-focused page architecture.',
  '/case-studies/brand-x-growth-program',
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
  featured = excluded.featured,
  status = excluded.status,
  published_at = excluded.published_at,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  canonical_path = excluded.canonical_path,
  updated_at = excluded.updated_at`;

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
];

for (const [location, label, url, parentId, position] of navRows) {
  await sql`insert into navigation_items (
    location, label, url, parent_id, position, open_in_new_tab, is_visible, metadata, created_at, updated_at
  ) values (
    ${location}, ${label}, ${url}, ${parentId}, ${position}, false, true, ${JSON.stringify({})}::jsonb, ${now}, ${now}
  ) on conflict do nothing`;
}

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
];

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
