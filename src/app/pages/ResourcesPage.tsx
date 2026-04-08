import { useEffect, useState } from "react";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import {
  BlogLatestGridSection,
  FinalCTASection,
  GuidesEditorialSection,
  HeroSection,
  type BlogLatestGridItem,
  type GuidesEditorialItem,
  ResourcesFaqCollectionsSection,
  type ResourcesFaqCollectionItem,
} from "@/app/components/sections";
import { Section, Container } from "@/app/components/ui/layout";
import blogImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import blogImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import blogImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import blogImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import { fetchBlogPosts, type BlogPostRecord } from "@/app/lib/contentApi";

const guides: GuidesEditorialItem[] = [
  {
    title: "Webflow vs WordPress Guide",
    description:
      "Compare platform tradeoffs, governance, publishing speed, and long-term maintenance costs before committing.",
    href: "/guides/webflow-vs-wordpress",
    eyebrow: "Platform Strategy",
    accent: "#a62025",
  },
  {
    title: "Website Redesign Checklist",
    description:
      "Use a practical step-by-step checklist to reduce redesign risk and align UX, SEO, and conversion goals.",
    href: "/guides/website-redesign-checklist",
    eyebrow: "Planning Framework",
    accent: "#c9923d",
  },
  {
    title: "Cost of Web Design in Albuquerque",
    description:
      "Understand pricing ranges, delivery scope, and budget planning for business websites in the New Mexico market.",
    href: "/guides/web-design-cost-albuquerque",
    eyebrow: "Budget Clarity",
    accent: "#c76438",
  },
  {
    title: "AI for Small Businesses Guide",
    description:
      "Identify realistic AI opportunities that improve team output, reduce manual work, and support measurable growth.",
    href: "/guides/ai-for-small-businesses",
    eyebrow: "AI Adoption",
    accent: "#6b4a1e",
  },
];

const blogPosts: BlogLatestGridItem[] = [
  {
    title: "How To Improve Local Search Visibility for Service Businesses",
    excerpt:
      "A practical framework for increasing qualified local traffic with stronger intent alignment and trust cues.",
    href: "/blog/improve-local-search-visibility",
    image: blogImageOne,
    category: "Local SEO",
    published: "March 18, 2026",
  },
  {
    title: "AEO Basics: Structuring Pages for AI-Powered Answers",
    excerpt:
      "Learn the page architecture and schema fundamentals that help content surface in answer-first experiences.",
    href: "/blog/aeo-basics-structured-content",
    image: blogImageTwo,
    category: "AEO",
    published: "March 10, 2026",
  },
  {
    title: "When a Website Redesign Is Strategic, Not Cosmetic",
    excerpt:
      "Signals that your current site is holding back growth and how to scope redesign work around outcomes.",
    href: "/blog/strategic-website-redesign-signals",
    image: blogImageThree,
    category: "Website Strategy",
    published: "February 25, 2026",
  },
  {
    title: "Using AI To Reduce Operational Bottlenecks",
    excerpt:
      "A measured approach to workflow automation that improves reliability without adding technical complexity.",
    href: "/blog/ai-for-operations-workflows",
    image: blogImageFour,
    category: "Operations AI",
    published: "February 11, 2026",
  },
];

const fallbackBlogImageBySlug: Record<string, string> = {
  "improve-local-search-visibility": blogImageOne,
  "aeo-basics-structured-content": blogImageTwo,
  "strategic-website-redesign-signals": blogImageThree,
  "ai-for-operations-workflows": blogImageFour,
};

const fallbackBlogMetaBySlug: Record<string, Pick<BlogLatestGridItem, "category" | "published">> = {
  "improve-local-search-visibility": {
    category: "Local SEO",
    published: "March 18, 2026",
  },
  "aeo-basics-structured-content": {
    category: "AEO",
    published: "March 10, 2026",
  },
  "strategic-website-redesign-signals": {
    category: "Website Strategy",
    published: "February 25, 2026",
  },
  "ai-for-operations-workflows": {
    category: "Operations AI",
    published: "February 11, 2026",
  },
};

const faqCollections: ResourcesFaqCollectionItem[] = [
  {
    title: "Web Design FAQ",
    href: "/faqs/web-design",
    preview: [
      "What should a modern business website include?",
      "How long does a redesign usually take?",
      "How do we measure conversion improvements?",
    ],
    eyebrow: "Planning",
    accent: "#a62025",
  },
  {
    title: "Webflow FAQ",
    href: "/faqs/webflow",
    preview: [
      "Is Webflow suitable for marketing teams?",
      "How does Webflow compare to WordPress maintenance?",
      "Can Webflow support multi-page service sites?",
    ],
    eyebrow: "Platform",
    accent: "#c9923d",
  },
  {
    title: "AI & AEO FAQ",
    href: "/faqs/ai-aeo",
    preview: [
      "What is the difference between SEO and AEO?",
      "How do answer engines evaluate content quality?",
      "Where should businesses start with AI implementation?",
    ],
    eyebrow: "AI Search",
    accent: "#6b4a1e",
  },
];

function ResourcesPageMetadata() {
  useEffect(() => {
    document.title =
      "Resources — Guides, FAQs & Blog for Web Design, AI, SEO | MIS, Inc";

    const description =
      "Explore guides, FAQs, and blog insights on web design, AI, SEO, and AEO to support smarter digital decisions and growth.";

    const upsertMetaByName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const upsertMetaByProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    upsertMetaByName("description", description);
    upsertMetaByProperty("og:title", document.title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:url", "https://www.misinc.com/resources");

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.misinc.com/resources");

    let preload = document.querySelector("link[data-resources-preload='hero-blog']");
    if (!preload) {
      preload = document.createElement("link");
      preload.setAttribute("data-resources-preload", "hero-blog");
      preload.setAttribute("rel", "preload");
      preload.setAttribute("as", "image");
      preload.setAttribute("href", blogImageOne);
      document.head.appendChild(preload);
    }
  }, []);

  return null;
}

export default function ResourcesPage() {
  const [dbBlogPosts, setDbBlogPosts] = useState<BlogLatestGridItem[]>(blogPosts);

  useEffect(() => {
    let isActive = true;
    const loadBlogPosts = async () => {
      const rows = await fetchBlogPosts();
      if (!rows || !isActive || rows.length === 0) {
        return;
      }

      const mapped = rows.map((post: BlogPostRecord) => ({
        title: post.title,
        excerpt: post.excerpt,
        href: `/blog/${post.slug}`,
        image: post.imageUrl || fallbackBlogImageBySlug[post.slug] || blogImageOne,
        category: fallbackBlogMetaBySlug[post.slug]?.category || "Insights",
        published: fallbackBlogMetaBySlug[post.slug]?.published || "Recent article",
      }));

      setDbBlogPosts(mapped);
    };

    void loadBlogPosts();
    return () => {
      isActive = false;
    };
  }, []);

  const guidesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MIS Guides and Evergreen Resources",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `https://www.misinc.com${guide.href}`,
    })),
  };

  const blogItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MIS Recent Blog Posts",
    itemListElement: dbBlogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `https://www.misinc.com${post.href}`,
    })),
  };

  return (
    <SiteShell>
      <ResourcesPageMetadata />
      <script type="application/ld+json">{JSON.stringify(guidesItemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogItemListSchema)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <HeroSection
          sectionId="resources-hero"
          eyebrow="Resources Hub"
          title="Resources to Learn, Decide, and Grow Your Business"
          description="This resource hub helps business teams find clear answers, practical frameworks, and strategic guidance for digital growth. Use it to compare options, understand best practices, and make confident decisions about web design, SEO, and AI-enabled operations."
          primaryAction={{
            label: "Explore Guides",
            scrollToId: "guides",
            variant: "primary",
          }}
          secondaryAction={{
            label: "Browse Blog Posts",
            scrollToId: "blog",
            variant: "secondary",
          }}
          supplemental={
            <p className="text-sm text-[#4A3F37] md:text-base">
              Trusted insights from 30+ years of building digital systems.
            </p>
          }
        />

        <Section variant="flush">
          <Container size="standard">
            <nav
              aria-label="Resources section navigation"
              className="flex flex-wrap items-center justify-center gap-3 border-y border-border py-6 text-sm"
            >
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#guides">
                Guides
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#blog">
                Blog
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#resources-cta">
                Next Step
              </a>
            </nav>
          </Container>
        </Section>

        <GuidesEditorialSection
          sectionId="guides"
          title="Practical Guides for Growing Businesses"
          description="Explore clear, practical guides that help you compare options, plan smarter, and make more confident decisions about your website, marketing, and growth strategy."
          guides={guides}
          backgroundColor="#f6efe3"
        />

        <BlogLatestGridSection
          sectionId="blog"
          title="From the Blog"
          description="Explore timely insights, implementation notes, and strategic updates from our team."
          posts={dbBlogPosts}
          viewAllHref="/blog"
          viewAllLabel="View All Blog Posts"
          backgroundColor="#fffaf2"
        />

        <ResourcesFaqCollectionsSection
          sectionId="faqs"
          title="Frequently Asked Questions"
          description="Review dedicated FAQ collections that answer common business questions across digital strategy, web platforms, and AI-led visibility."
          collections={faqCollections}
          backgroundColor="#f0e2cf"
        />

        <FinalCTASection
          sectionId="resources-cta"
          eyebrow="Next Step"
          title="Need a Clear Next Move?"
          description="If you're sorting through options for your website, growth strategy, or AI implementation, we can help you turn that research into a practical plan."
          actionLabel="Schedule a Strategy Call"
          actionTo="/contact"
          footnote="No-pressure consult. Clear recommendations and a practical next step."
          backgroundColor="#eadcc6"
        />
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
