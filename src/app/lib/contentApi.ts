export type NavLink = { label: string; href: string; items?: NavLink[] };
export type NavDropdown = { label: string; href: string; items: NavLink[] };
export type NavMenuItem =
  | { type: "link"; label: string; href: string; position: number }
  | { type: "dropdown"; label: string; href: string; position: number; items: NavLink[] };

export type ServiceSummary = {
  slug: string;
  serviceName: string;
  heroDescription: string;
  canonicalPath: string;
};

export type ServiceDetailRecord = {
  slug: string;
  serviceName: string;
  heroTitle: string;
  heroDescription: string;
  quickAnswer: string;
  challenges: string[];
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  idealFor: string[];
  proofQuote: string;
  proofAttribution: string;
  proofMetrics: string[];
  caseStudyHref: string;
  solutionHref: string;
  relatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
};

export type CaseStudyRecord = {
  slug: string;
  title: string;
  industry: string | null;
  problem: string | null;
  strategy: string | null;
  outcome: string | null;
  metric: string | null;
  categories: string[];
  imageUrl: string | null;
  imageAlt: string | null;
  featured: boolean;
  detail?: Record<string, unknown> | null;
};

export type BlogPostRecord = {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string | null;
  publishedAt: string | null;
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const payload = (await response.json()) as { ok: boolean; data?: T };
    if (!payload.ok || !payload.data) {
      return null;
    }
    return payload.data;
  } catch {
    return null;
  }
}

export async function fetchNavigation() {
  return fetchJson<{ menu?: NavMenuItem[]; dropdowns: NavDropdown[]; links: NavLink[] }>(
    '/.netlify/functions/content-navigation',
  );
}

export async function fetchServices() {
  return fetchJson<ServiceSummary[]>('/.netlify/functions/content-services');
}

export async function fetchServiceBySlug(slug: string) {
  return fetchJson<ServiceDetailRecord>(
    `/.netlify/functions/content-services?slug=${encodeURIComponent(slug)}`,
  );
}

export async function fetchCaseStudies() {
  return fetchJson<CaseStudyRecord[]>('/.netlify/functions/content-case-studies');
}

export async function fetchCaseStudyBySlug(slug: string) {
  return fetchJson<CaseStudyRecord>(
    `/.netlify/functions/content-case-studies?slug=${encodeURIComponent(slug)}`,
  );
}

export async function fetchBlogPosts() {
  return fetchJson<BlogPostRecord[]>('/.netlify/functions/content-blog-posts');
}

export async function fetchSeoOverride(path: string) {
  return fetchJson<{ title: string; description: string; canonicalUrl: string | null; ogType: string }>(
    `/.netlify/functions/content-seo?path=${encodeURIComponent(path)}`,
  );
}
