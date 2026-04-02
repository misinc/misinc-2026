import { eq, and, isNull } from 'drizzle-orm';
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
  key: string;
  label: string;
  url: string;
  location: string;
  position: number;
  parentKey?: string;
};

const NAV_ITEMS: NavSeedItem[] = [
  { key: 'home', label: 'Home', url: '/', location: 'header', position: 10 },
  { key: 'solutions', label: 'Solutions', url: '/solutions', location: 'header', position: 20 },
  { key: 'services', label: 'Services', url: '/services', location: 'header', position: 30 },
  { key: 'case-studies', label: 'Case Studies', url: '/case-studies', location: 'header', position: 40 },
  { key: 'resources', label: 'Resources', url: '/resources', location: 'header', position: 50 },
  { key: 'about', label: 'About', url: '/about', location: 'header', position: 60 },
  { key: 'contact', label: 'Contact', url: '/contact', location: 'header', position: 70 },
  {
    key: 'solutions-small-businesses',
    label: 'Small Businesses',
    url: '/solutions/small-businesses',
    location: 'header',
    position: 10,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-real-estate',
    label: 'Real Estate (Add On IDX)',
    url: '/solutions/real-estate',
    location: 'header',
    position: 20,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-healthcare-research',
    label: 'Healthcare / Research',
    url: '#',
    location: 'header',
    position: 30,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-nonprofits',
    label: 'Nonprofits',
    url: '/solutions/nonprofits',
    location: 'header',
    position: 40,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-professional-services',
    label: 'Professional Services',
    url: '/solutions/professional-services',
    location: 'header',
    position: 50,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-startups',
    label: 'Startups',
    url: '/solutions/startups-saas',
    location: 'header',
    position: 60,
    parentKey: 'solutions',
  },
  {
    key: 'solutions-retail-ecommerce',
    label: 'Retail / Ecommerce',
    url: '#',
    location: 'header',
    position: 70,
    parentKey: 'solutions',
  },
  {
    key: 'services-web-design-development',
    label: 'Web Design & Development',
    url: '/services',
    location: 'header',
    position: 10,
    parentKey: 'services',
  },
  {
    key: 'services-new-website-design',
    label: 'New Website Design',
    url: '/services/web-design',
    location: 'header',
    position: 10,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-website-redesign',
    label: 'Website Redesign',
    url: '/services/web-design',
    location: 'header',
    position: 20,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-webflow-development',
    label: 'Webflow Development',
    url: '/services/webflow-development',
    location: 'header',
    position: 30,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-square-development',
    label: 'Square Development',
    url: '/services/square-website-design',
    location: 'header',
    position: 40,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-ecommerce-development',
    label: 'Ecommerce Development',
    url: '#',
    location: 'header',
    position: 50,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-platform-migrations',
    label: 'Platform Migrations',
    url: '#',
    location: 'header',
    position: 60,
    parentKey: 'services-web-design-development',
  },
  {
    key: 'services-custom-applications',
    label: 'Custom Applications',
    url: '/services/custom-applications',
    location: 'header',
    position: 20,
    parentKey: 'services',
  },
  {
    key: 'services-web-apps',
    label: 'Web Apps',
    url: '/services/custom-applications',
    location: 'header',
    position: 10,
    parentKey: 'services-custom-applications',
  },
  {
    key: 'services-saas-mvp-development',
    label: 'SaaS MVP Development',
    url: '/services/custom-applications',
    location: 'header',
    position: 20,
    parentKey: 'services-custom-applications',
  },
  {
    key: 'services-internal-tools',
    label: 'Internal Tools',
    url: '/services/custom-applications',
    location: 'header',
    position: 30,
    parentKey: 'services-custom-applications',
  },
  {
    key: 'services-integrations',
    label: 'Integrations',
    url: '/services/custom-applications',
    location: 'header',
    position: 40,
    parentKey: 'services-custom-applications',
  },
  {
    key: 'services-ai-automation',
    label: 'AI & Automation',
    url: '/services',
    location: 'header',
    position: 30,
    parentKey: 'services',
  },
  {
    key: 'services-ai-consulting',
    label: 'AI Consulting',
    url: '/services/ai-consulting',
    location: 'header',
    position: 10,
    parentKey: 'services-ai-automation',
  },
  {
    key: 'services-ai-chat-implementation',
    label: 'AI Chat Implementation',
    url: '/services/ai-consulting',
    location: 'header',
    position: 20,
    parentKey: 'services-ai-automation',
  },
  {
    key: 'services-internal-ai-systems',
    label: 'Internal AI Systems',
    url: '/services/ai-consulting',
    location: 'header',
    position: 30,
    parentKey: 'services-ai-automation',
  },
  {
    key: 'services-aeo-strategy',
    label: 'AEO Strategy',
    url: '/services/aeo-services',
    location: 'header',
    position: 40,
    parentKey: 'services-ai-automation',
  },
  {
    key: 'resources-blog',
    label: 'Blog',
    url: '/resources#blog',
    location: 'header',
    position: 10,
    parentKey: 'resources',
  },
  {
    key: 'resources-guides',
    label: 'Guides',
    url: '/resources#guides',
    location: 'header',
    position: 20,
    parentKey: 'resources',
  },
  {
    key: 'resources-faqs',
    label: 'FAQs',
    url: '/resources#faqs',
    location: 'header',
    position: 30,
    parentKey: 'resources',
  },
  {
    key: 'about-innovation',
    label: '30 Years of Innovation',
    url: '#',
    location: 'header',
    position: 10,
    parentKey: 'about',
  },
  {
    key: 'about-partnerships',
    label: 'Partnerships & Certifications',
    url: '#',
    location: 'header',
    position: 20,
    parentKey: 'about',
  },
  {
    key: 'about-technology',
    label: "Technology We've Built",
    url: '#',
    location: 'header',
    position: 30,
    parentKey: 'about',
  },
  {
    key: 'contact-strategy',
    label: 'Free Strategy Call',
    url: '/contact#strategy',
    location: 'header',
    position: 10,
    parentKey: 'contact',
  },
  {
    key: 'contact-proposal',
    label: 'Request a Proposal',
    url: '/contact#proposal',
    location: 'header',
    position: 20,
    parentKey: 'contact',
  },
  { key: 'footer-privacy', label: 'Privacy Policy', url: '/privacy', location: 'footer', position: 10 },
  { key: 'footer-terms', label: 'Terms', url: '/terms', location: 'footer', position: 20 },
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
  const idByKey = new Map<string, number>();
  const pendingItems = [...NAV_ITEMS];

  while (pendingItems.length > 0) {
    let processedCount = 0;

    for (let index = 0; index < pendingItems.length; ) {
      const item = pendingItems[index];
      const parentId = item.parentKey ? idByKey.get(item.parentKey) ?? null : null;

      if (item.parentKey && !parentId) {
        index += 1;
        continue;
      }

      const [existing] = await db
        .select()
        .from(navigationItems)
        .where(
          and(
            eq(navigationItems.location, item.location),
            eq(navigationItems.label, item.label),
            parentId === null
              ? isNull(navigationItems.parentId)
              : eq(navigationItems.parentId, parentId),
          ),
        )
        .limit(1);

      if (existing) {
        idByKey.set(item.key, existing.id);
        await db
          .update(navigationItems)
          .set({
            url: item.url,
            position: item.position,
            isVisible: true,
            updatedAt: new Date(),
          })
          .where(eq(navigationItems.id, existing.id));
      } else {
        const [created] = await db
          .insert(navigationItems)
          .values({
            location: item.location,
            label: item.label,
            url: item.url,
            position: item.position,
            parentId,
          })
          .returning({ id: navigationItems.id });

        idByKey.set(item.key, created.id);
      }

      pendingItems.splice(index, 1);
      processedCount += 1;
    }

    if (processedCount === 0) {
      break;
    }
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
