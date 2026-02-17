import { neon } from '@netlify/neon';

const sql = neon(process.env.NETLIFY_DATABASE_URL);
const now = new Date().toISOString();

const solutionSeeds = [
  { slug: 'small-businesses', title: 'Small Businesses', summary: 'Web and digital growth systems for small teams with practical execution needs.', url: '/solutions/small-businesses' },
  { slug: 'real-estate', title: 'Real Estate', summary: 'Digital systems that convert listing attention into qualified consultations.', url: '/solutions/real-estate' },
  { slug: 'nonprofits', title: 'Nonprofits', summary: 'Mission-centered websites and workflows for donations and supporter growth.', url: '/solutions/nonprofits' },
  { slug: 'professional-services', title: 'Professional Services', summary: 'Websites and content systems for expertise-led firms.', url: '/solutions/professional-services' },
  { slug: 'startups-saas', title: 'Startups & SaaS', summary: 'Scalable messaging and conversion systems for growth teams.', url: '/solutions/startups-saas' },
];

const caseStudySeeds = [
  {
    slug: 'brand-x-growth-program',
    title: 'How We Helped Brand X Increase Qualified Leads by 47% in 6 Months',
    problem: 'Their site attracted traffic but failed to convert high-intent visitors into booked sales conversations.',
    strategy: 'We rebuilt information architecture, tightened conversion paths, and aligned search pages to decision-stage intent.',
    outcome: 'The client improved lead quality and increased monthly pipeline consistency across paid and organic channels.',
    metric: '+47% qualified leads',
    industry: 'Professional Services',
    categories: ['Web Design & Redesign', 'AEO / Search Visibility'],
    imageUrl: '/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png',
    imageAlt: 'Case study highlight card showing lead growth for a professional services client',
    featured: true,
  },
  {
    slug: 'client-y-enterprise-webflow-ai',
    title: 'Enterprise Webflow Build with AI Integration for Client Y',
    problem: 'A complex marketing stack and disconnected workflows slowed publishing and limited campaign responsiveness.',
    strategy: 'We launched a scalable Webflow system and integrated AI-assisted content operations for faster execution.',
    outcome: 'Marketing operations became faster and more reliable while preserving governance across teams.',
    metric: '+80% publishing velocity',
    industry: 'B2B Technology',
    categories: ['Webflow Development', 'AI & Automation'],
    imageUrl: '/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png',
    imageAlt: 'Enterprise website dashboard illustrating faster publishing cycles with AI integration',
    featured: true,
  },
  {
    slug: 'client-z-aeo-visibility',
    title: 'AEO-Driven Visibility Program for Client Z',
    problem: 'The brand was underrepresented in AI summaries and answer-first search despite strong subject-matter expertise.',
    strategy: 'We restructured core pages, deployed schema enhancements, and built answer-ready content clusters.',
    outcome: 'The client gained stronger visibility in AI answer experiences and improved top-of-funnel discovery.',
    metric: '+62% AI answer mentions',
    industry: 'Healthcare Services',
    categories: ['AEO / Search Visibility', 'Webflow Development'],
    imageUrl: '/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png',
    imageAlt: 'Search visibility analytics panel showing growth in answer engine mentions',
    featured: true,
  },
  {
    slug: 'operations-portal-modernization',
    title: 'Custom Operations Portal That Reduced Manual Work by 38%',
    problem: 'Teams relied on spreadsheets and fragmented tools, causing delays and avoidable data-entry errors.',
    strategy: 'We designed and shipped a secure internal portal with role-based workflows and system integrations.',
    outcome: 'Operational throughput improved while team members reclaimed time for higher-value work.',
    metric: '-38% manual effort',
    industry: 'Logistics',
    categories: ['Custom Application Solutions', 'AI & Automation'],
    imageUrl: '/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png',
    imageAlt: 'Internal operations dashboard used in a custom application case study',
    featured: true,
  },
  {
    slug: 'multi-location-seo-growth',
    title: 'Multi-Location Search Strategy That Lifted Non-Branded Traffic',
    problem: 'A regional brand had inconsistent location pages and weak rankings for high-intent service terms.',
    strategy: 'We rebuilt location page templates, improved on-page entities, and tightened internal linking architecture.',
    outcome: 'The site captured stronger non-branded visibility and a healthier stream of service-qualified traffic.',
    metric: '+54% non-branded sessions',
    industry: 'Home Services',
    categories: ['Web Design & Redesign', 'AEO / Search Visibility'],
    imageUrl: '/assets/93bdf867d705af4cd05e62b9305f28776e6b5532.png',
    imageAlt: 'Regional search performance graph from a multi-location SEO case study',
    featured: false,
  },
  {
    slug: 'fintech-onboarding-rebuild',
    title: 'Fintech Onboarding Rebuild That Increased Activation by 29%',
    problem: 'New users dropped during onboarding because key trust and clarity signals were missing from the product flow.',
    strategy: 'We redesigned core onboarding interfaces and connected product analytics to rapid CRO iterations.',
    outcome: 'Activation improved and support burden decreased with clearer customer guidance across the journey.',
    metric: '+29% activation rate',
    industry: 'Fintech',
    categories: ['Custom Application Solutions', 'Web Design & Redesign'],
    imageUrl: '/assets/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png',
    imageAlt: 'Product onboarding flow diagram showing improved user activation results',
    featured: false,
  },
];

for (const solution of solutionSeeds) {
  await sql`insert into solutions (slug, title, summary, url, is_published, created_at, updated_at)
  values (${solution.slug}, ${solution.title}, ${solution.summary}, ${solution.url}, true, ${now}, ${now})
  on conflict (slug) do update set title = excluded.title, summary = excluded.summary, url = excluded.url, updated_at = excluded.updated_at`;
}

for (const item of caseStudySeeds) {
  const canonicalPath = `/case-studies/${item.slug}`;
  await sql`insert into case_studies (
    slug, title, industry, problem, strategy, outcome, metric, categories,
    image_url, image_alt, featured, status, published_at, seo_title, seo_description,
    canonical_path, detail, created_at, updated_at
  ) values (
    ${item.slug}, ${item.title}, ${item.industry}, ${item.problem}, ${item.strategy}, ${item.outcome}, ${item.metric}, ${JSON.stringify(item.categories)}::jsonb,
    ${item.imageUrl}, ${item.imageAlt}, ${item.featured}, 'published', ${now}, ${item.title + ' | MIS Case Study'}, ${item.outcome},
    ${canonicalPath}, ${JSON.stringify(item)}::jsonb, ${now}, ${now}
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

const blogSeeds = [
  {
    slug: 'improve-local-search-visibility',
    title: 'How To Improve Local Search Visibility for Service Businesses',
    excerpt:
      'A practical framework for increasing qualified local traffic with stronger intent alignment and trust cues.',
    body: '<p>Use this rich text field for full blog content.</p>',
    publishedAt: '2026-01-20T00:00:00.000Z',
  },
  {
    slug: 'aeo-basics-structured-content',
    title: 'AEO Basics: Structuring Pages for AI-Powered Answers',
    excerpt:
      'Learn the page architecture and schema fundamentals that help content surface in answer-first experiences.',
    body: '<p>Use this rich text field for full blog content.</p>',
    publishedAt: '2026-02-01T00:00:00.000Z',
  },
  {
    slug: 'strategic-website-redesign-signals',
    title: 'When a Website Redesign Is Strategic, Not Cosmetic',
    excerpt:
      'Signals that your current site is holding back growth and how to scope redesign work around outcomes.',
    body: '<p>Use this rich text field for full blog content.</p>',
    publishedAt: '2026-01-10T00:00:00.000Z',
  },
  {
    slug: 'ai-for-operations-workflows',
    title: 'Using AI To Reduce Operational Bottlenecks',
    excerpt:
      'A measured approach to workflow automation that improves reliability without adding technical complexity.',
    body: '<p>Use this rich text field for full blog content.</p>',
    publishedAt: '2026-01-05T00:00:00.000Z',
  },
];

for (const post of blogSeeds) {
  await sql`insert into blog_posts (
    slug, title, excerpt, body, status, published_at, seo_title, seo_description, created_at, updated_at
  ) values (
    ${post.slug}, ${post.title}, ${post.excerpt}, ${post.body}, 'published', ${post.publishedAt},
    ${post.title + ' | MIS, Inc.'}, ${post.excerpt}, ${now}, ${now}
  ) on conflict (slug) do update set
    title = excluded.title,
    excerpt = excluded.excerpt,
    body = excluded.body,
    status = excluded.status,
    published_at = excluded.published_at,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description,
    updated_at = excluded.updated_at`;
}

console.log('Neon seed complete (solutions + case studies + blog posts).');
