import { eq, and } from 'drizzle-orm';
import { db } from '../../db/index';
import {
  authors,
  blogPosts,
  caseStudies,
  navigationItems,
  seoOverrides,
  services,
  solutions,
} from '../../db/schema';
import { getAllServiceDetails } from '../../src/app/data/serviceDetails';
import { jsonResponse, errorResponse } from './_lib/json';

const SOLUTIONS = [
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

const BLOG_POSTS = [
  {
    slug: 'aeo-basics-structured-content',
    title: 'AEO Basics for Structured Content',
    excerpt: 'A practical framework for making content answer-engine ready.',
    body: '<p>Use this rich text field for full blog content.</p>',
    publishedAt: new Date('2026-02-01T00:00:00.000Z'),
    seoTitle: 'AEO Basics for Structured Content | MIS, Inc.',
    seoDescription: 'A practical framework for making content answer-engine ready.',
  },
];

const CASE_STUDIES = [
  {
    slug: 'brand-x-growth-program',
    title: 'How We Helped Brand X Increase Qualified Leads by 47% in 6 Months',
    industry: 'Professional Services',
    problem: 'Traffic was strong, but qualified lead conversion was low.',
    strategy: 'Rebuilt information architecture and conversion paths.',
    outcome: 'Improved lead quality and pipeline consistency.',
    metric: '+47% qualified leads',
    featured: true,
    categories: ['Web Design & Redesign', 'AEO / Search Visibility'],
    seoTitle: 'How Brand X Increased Qualified Leads by 47% | MIS Case Study',
    seoDescription:
      'Read how MIS helped Brand X increase qualified leads by 47% through web design, intent strategy, and AEO-focused page architecture.',
    canonicalPath: '/case-studies/brand-x-growth-program',
  },
];

type NavSeedItem = {
  label: string;
  url: string;
  location: string;
  position: number;
  parentLabel?: string;
};

const NAV_ITEMS: NavSeedItem[] = [
  { label: 'Home', url: '/', location: 'header', position: 10 },
  { label: 'Solutions', url: '/solutions', location: 'header', position: 20 },
  { label: 'Services', url: '/services', location: 'header', position: 30 },
  { label: 'Case Studies', url: '/case-studies', location: 'header', position: 40 },
  { label: 'Resources', url: '/resources', location: 'header', position: 50 },
  { label: 'About', url: '/about', location: 'header', position: 60 },
  { label: 'Contact', url: '/contact', location: 'header', position: 70 },
  {
    label: 'Small Businesses',
    url: '/solutions/small-businesses',
    location: 'header',
    position: 10,
    parentLabel: 'Solutions',
  },
  {
    label: 'Real Estate',
    url: '/solutions/real-estate',
    location: 'header',
    position: 20,
    parentLabel: 'Solutions',
  },
  {
    label: 'Nonprofits',
    url: '/solutions/nonprofits',
    location: 'header',
    position: 30,
    parentLabel: 'Solutions',
  },
  {
    label: 'Professional Services',
    url: '/solutions/professional-services',
    location: 'header',
    position: 40,
    parentLabel: 'Solutions',
  },
  {
    label: 'Startups & SaaS',
    url: '/solutions/startups-saas',
    location: 'header',
    position: 50,
    parentLabel: 'Solutions',
  },
  {
    label: 'Website Design',
    url: '/services/web-design',
    location: 'header',
    position: 10,
    parentLabel: 'Services',
  },
  {
    label: 'Website Redesign',
    url: '/services/web-design',
    location: 'header',
    position: 20,
    parentLabel: 'Services',
  },
  {
    label: 'Ecommerce Websites',
    url: '/services/square-website-design',
    location: 'header',
    position: 30,
    parentLabel: 'Services',
  },
  {
    label: 'Conversion Optimization (CRO)',
    url: '/services/seo-strategy',
    location: 'header',
    position: 40,
    parentLabel: 'Services',
  },
  {
    label: 'Webflow Website Development',
    url: '/services/webflow-development',
    location: 'header',
    position: 50,
    parentLabel: 'Services',
  },
  {
    label: 'Webflow Migrations (WordPress -> Webflow)',
    url: '/services/webflow-development',
    location: 'header',
    position: 60,
    parentLabel: 'Services',
  },
  {
    label: 'Webflow Performance Optimization',
    url: '/services/webflow-development',
    location: 'header',
    position: 70,
    parentLabel: 'Services',
  },
  {
    label: 'Square Online Website Design',
    url: '/services/square-website-design',
    location: 'header',
    position: 80,
    parentLabel: 'Services',
  },
  {
    label: 'Square Ecommerce Setup',
    url: '/services/square-website-design',
    location: 'header',
    position: 90,
    parentLabel: 'Services',
  },
  {
    label: 'Shopify -> Square Migrations',
    url: '/services/square-website-design',
    location: 'header',
    position: 100,
    parentLabel: 'Services',
  },
  {
    label: 'Web Applications',
    url: '/services/custom-applications',
    location: 'header',
    position: 110,
    parentLabel: 'Services',
  },
  {
    label: 'SaaS MVP Development',
    url: '/services/custom-applications',
    location: 'header',
    position: 120,
    parentLabel: 'Services',
  },
  {
    label: 'Internal Tools & Dashboards',
    url: '/services/custom-applications',
    location: 'header',
    position: 130,
    parentLabel: 'Services',
  },
  {
    label: 'API & System Integrations',
    url: '/services/custom-applications',
    location: 'header',
    position: 140,
    parentLabel: 'Services',
  },
  {
    label: 'AI Strategy for Small Businesses',
    url: '/services/ai-consulting',
    location: 'header',
    position: 150,
    parentLabel: 'Services',
  },
  {
    label: 'AI Chat Implementation',
    url: '/services/ai-consulting',
    location: 'header',
    position: 160,
    parentLabel: 'Services',
  },
  {
    label: 'Workflow Automation',
    url: '/services/ai-consulting',
    location: 'header',
    position: 170,
    parentLabel: 'Services',
  },
  {
    label: 'Internal AI Systems',
    url: '/services/ai-consulting',
    location: 'header',
    position: 180,
    parentLabel: 'Services',
  },
  {
    label: 'AI Search Optimization',
    url: '/services/aeo-services',
    location: 'header',
    position: 190,
    parentLabel: 'Services',
  },
  {
    label: 'Structured Content Strategy',
    url: '/services/aeo-services',
    location: 'header',
    position: 200,
    parentLabel: 'Services',
  },
  {
    label: 'Schema & Structured Data Implementation',
    url: '/services/aeo-services',
    location: 'header',
    position: 210,
    parentLabel: 'Services',
  },
  {
    label: 'AI Visibility Audits',
    url: '/services/aeo-services',
    location: 'header',
    position: 220,
    parentLabel: 'Services',
  },
  {
    label: 'Blog Listing',
    url: '/resources#blog',
    location: 'header',
    position: 10,
    parentLabel: 'Resources',
  },
  {
    label: 'Blog Post (Dynamic Template)',
    url: '/resources#blog',
    location: 'header',
    position: 20,
    parentLabel: 'Resources',
  },
  {
    label: 'Webflow vs WordPress Guide',
    url: '/resources#guides',
    location: 'header',
    position: 30,
    parentLabel: 'Resources',
  },
  {
    label: 'Website Redesign Checklist',
    url: '/resources#guides',
    location: 'header',
    position: 40,
    parentLabel: 'Resources',
  },
  {
    label: 'Cost of Web Design in Albuquerque',
    url: '/resources#guides',
    location: 'header',
    position: 50,
    parentLabel: 'Resources',
  },
  {
    label: 'AI for Small Businesses Guide',
    url: '/resources#guides',
    location: 'header',
    position: 60,
    parentLabel: 'Resources',
  },
  {
    label: 'Web Design FAQ',
    url: '/resources#faqs',
    location: 'header',
    position: 70,
    parentLabel: 'Resources',
  },
  {
    label: 'Webflow FAQ',
    url: '/resources#faqs',
    location: 'header',
    position: 80,
    parentLabel: 'Resources',
  },
  {
    label: 'AI & AEO FAQ',
    url: '/resources#faqs',
    location: 'header',
    position: 90,
    parentLabel: 'Resources',
  },
  { label: 'Privacy Policy', url: '/privacy', location: 'footer', position: 10 },
  { label: 'Terms', url: '/terms', location: 'footer', position: 20 },
];

async function upsertAuthor() {
  const [existing] = await db
    .select()
    .from(authors)
    .where(eq(authors.slug, 'mis-inc'))
    .limit(1);

  if (existing) {
    return existing.id;
  }

  const [created] = await db
    .insert(authors)
    .values({
      name: 'MIS, Inc.',
      slug: 'mis-inc',
      email: 'karim@misinc.com',
      bio: 'MIS, Inc. editorial team.',
    })
    .returning({ id: authors.id });

  return created.id;
}

async function seedSolutions() {
  for (const solution of SOLUTIONS) {
    const [existing] = await db
      .select()
      .from(solutions)
      .where(eq(solutions.slug, solution.slug))
      .limit(1);

    if (existing) {
      await db
        .update(solutions)
        .set({
          title: solution.title,
          summary: solution.summary,
          url: solution.url,
          updatedAt: new Date(),
        })
        .where(eq(solutions.id, existing.id));
      continue;
    }

    await db.insert(solutions).values(solution);
  }
}

async function seedServices() {
  const allServices = getAllServiceDetails();
  for (const service of allServices) {
    const [existing] = await db
      .select()
      .from(services)
      .where(eq(services.slug, service.slug))
      .limit(1);

    const values = {
      slug: service.slug,
      serviceName: service.serviceName,
      heroTitle: service.heroTitle,
      heroDescription: service.heroDescription,
      quickAnswer: service.quickAnswer,
      challenges: service.challenges,
      outcomes: service.outcomes,
      deliverables: service.deliverables,
      idealFor: service.idealFor,
      proofQuote: service.proofQuote,
      proofAttribution: service.proofAttribution,
      proofMetrics: service.proofMetrics,
      caseStudyHref: service.caseStudyHref,
      solutionHref: service.solutionHref,
      relatedServiceSlugs: service.relatedServiceSlugs,
      faqs: service.faqs,
      seoTitle: service.seoTitle,
      seoDescription: service.seoDescription,
      canonicalPath: service.canonicalPath,
      updatedAt: new Date(),
    };

    if (existing) {
      await db.update(services).set(values).where(eq(services.id, existing.id));
    } else {
      await db.insert(services).values(values);
    }
  }
}

async function seedBlogPosts(authorId: number) {
  for (const post of BLOG_POSTS) {
    const [existing] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, post.slug))
      .limit(1);

    const values = {
      ...post,
      status: 'published',
      authorId,
      updatedAt: new Date(),
    };

    if (existing) {
      await db.update(blogPosts).set(values).where(eq(blogPosts.id, existing.id));
    } else {
      await db.insert(blogPosts).values(values);
    }
  }
}

async function seedCaseStudies() {
  for (const caseStudy of CASE_STUDIES) {
    const [existing] = await db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.slug, caseStudy.slug))
      .limit(1);

    const values = {
      ...caseStudy,
      status: 'published',
      publishedAt: new Date('2026-02-01T00:00:00.000Z'),
      updatedAt: new Date(),
    };

    if (existing) {
      await db.update(caseStudies).set(values).where(eq(caseStudies.id, existing.id));
    } else {
      await db.insert(caseStudies).values(values);
    }
  }
}

async function seedNavigation() {
  const rootIdByLabel = new Map<string, number>();

  for (const item of NAV_ITEMS.filter((entry) => !entry.parentLabel)) {
    const [existing] = await db
      .select()
      .from(navigationItems)
      .where(
        and(
          eq(navigationItems.location, item.location),
          eq(navigationItems.label, item.label),
          eq(navigationItems.url, item.url),
        ),
      )
      .limit(1);

    if (existing) {
      rootIdByLabel.set(item.label, existing.id);
      await db
        .update(navigationItems)
        .set({ position: item.position, isVisible: true, updatedAt: new Date() })
        .where(eq(navigationItems.id, existing.id));
      continue;
    }

    const [created] = await db
      .insert(navigationItems)
      .values({
        location: item.location,
        label: item.label,
        url: item.url,
        position: item.position,
      })
      .returning({ id: navigationItems.id });

    rootIdByLabel.set(item.label, created.id);
  }

  for (const item of NAV_ITEMS.filter((entry) => entry.parentLabel)) {
    const parentId = rootIdByLabel.get(item.parentLabel!);
    if (!parentId) {
      continue;
    }

    const [existing] = await db
      .select()
      .from(navigationItems)
      .where(
        and(
          eq(navigationItems.location, item.location),
          eq(navigationItems.label, item.label),
          eq(navigationItems.parentId, parentId),
        ),
      )
      .limit(1);

    if (existing) {
      await db
        .update(navigationItems)
        .set({ url: item.url, position: item.position, isVisible: true, updatedAt: new Date() })
        .where(eq(navigationItems.id, existing.id));
      continue;
    }

    await db.insert(navigationItems).values({
      location: item.location,
      label: item.label,
      url: item.url,
      position: item.position,
      parentId,
    });
  }
}

async function seedSeoOverrides() {
  const seoSeeds = [
    {
      routePath: '/services',
      title: 'Web Design & AI Services in Albuquerque | MIS, Inc.',
      description:
        'Explore web design, webflow development, SEO, AEO, and AI consulting services in Albuquerque for lead growth, visibility, and scalable execution.',
      canonicalUrl: 'https://www.misinc.com/services',
    },
    {
      routePath: '/case-studies',
      title: 'Case Studies — Client Results & Success Stories | MIS, Inc.',
      description:
        'Explore MIS case studies featuring measurable client results, success stories, and strategy outcomes across web, AI, SEO, and custom systems.',
      canonicalUrl: 'https://www.misinc.com/case-studies',
    },
    {
      routePath: '/resources',
      title: 'Resources — Guides, FAQs & Blog for Web Design, AI, SEO | MIS, Inc',
      description:
        'Explore guides, FAQs, and blog insights on web design, AI, SEO, and AEO to support smarter digital decisions and growth.',
      canonicalUrl: 'https://www.misinc.com/resources',
    },
  ];

  const dynamicServices = getAllServiceDetails().map((service) => ({
    routePath: service.canonicalPath,
    title: service.seoTitle,
    description: service.seoDescription,
    canonicalUrl: `https://www.misinc.com${service.canonicalPath}`,
  }));

  const allSeeds = [...seoSeeds, ...dynamicServices];

  for (const seed of allSeeds) {
    const [existing] = await db
      .select()
      .from(seoOverrides)
      .where(eq(seoOverrides.routePath, seed.routePath))
      .limit(1);

    if (existing) {
      await db.update(seoOverrides).set({ ...seed, updatedAt: new Date() }).where(eq(seoOverrides.id, existing.id));
      continue;
    }

    await db.insert(seoOverrides).values(seed);
  }
}

export default async function handler() {
  try {
    const authorId = await upsertAuthor();

    await seedSolutions();
    await seedServices();
    await seedBlogPosts(authorId);
    await seedCaseStudies();
    await seedNavigation();
    await seedSeoOverrides();

    return jsonResponse({ ok: true, message: 'Neon content bootstrap complete.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown bootstrap error';
    return errorResponse(message);
  }
}
