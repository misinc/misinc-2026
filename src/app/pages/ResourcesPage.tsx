import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Search } from "lucide-react";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { Section, Container } from "@/app/components/ui/layout";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import blogImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import blogImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import blogImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import blogImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import { fetchBlogPosts, type BlogPostRecord } from "@/app/lib/contentApi";

type Guide = {
  title: string;
  description: string;
  href: string;
};

type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
};

type FaqCollection = {
  title: string;
  href: string;
  preview: string[];
};

const guides: Guide[] = [
  {
    title: "Webflow vs WordPress Guide",
    description:
      "Compare platform tradeoffs, governance, publishing speed, and long-term maintenance costs before committing.",
    href: "/guides/webflow-vs-wordpress",
  },
  {
    title: "Website Redesign Checklist",
    description:
      "Use a practical step-by-step checklist to reduce redesign risk and align UX, SEO, and conversion goals.",
    href: "/guides/website-redesign-checklist",
  },
  {
    title: "Cost of Web Design in Albuquerque",
    description:
      "Understand pricing ranges, delivery scope, and budget planning for business websites in the New Mexico market.",
    href: "/guides/web-design-cost-albuquerque",
  },
  {
    title: "AI for Small Businesses Guide",
    description:
      "Identify realistic AI opportunities that improve team output, reduce manual work, and support measurable growth.",
    href: "/guides/ai-for-small-businesses",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "How To Improve Local Search Visibility for Service Businesses",
    excerpt:
      "A practical framework for increasing qualified local traffic with stronger intent alignment and trust cues.",
    href: "/blog/improve-local-search-visibility",
    image: blogImageOne,
  },
  {
    title: "AEO Basics: Structuring Pages for AI-Powered Answers",
    excerpt:
      "Learn the page architecture and schema fundamentals that help content surface in answer-first experiences.",
    href: "/blog/aeo-basics-structured-content",
    image: blogImageTwo,
  },
  {
    title: "When a Website Redesign Is Strategic, Not Cosmetic",
    excerpt:
      "Signals that your current site is holding back growth and how to scope redesign work around outcomes.",
    href: "/blog/strategic-website-redesign-signals",
    image: blogImageThree,
  },
  {
    title: "Using AI To Reduce Operational Bottlenecks",
    excerpt:
      "A measured approach to workflow automation that improves reliability without adding technical complexity.",
    href: "/blog/ai-for-operations-workflows",
    image: blogImageFour,
  },
];

const fallbackBlogImageBySlug: Record<string, string> = {
  "improve-local-search-visibility": blogImageOne,
  "aeo-basics-structured-content": blogImageTwo,
  "strategic-website-redesign-signals": blogImageThree,
  "ai-for-operations-workflows": blogImageFour,
};

const faqCollections: FaqCollection[] = [
  {
    title: "Web Design FAQ",
    href: "/faqs/web-design",
    preview: [
      "What should a modern business website include?",
      "How long does a redesign usually take?",
      "How do we measure conversion improvements?",
    ],
  },
  {
    title: "Webflow FAQ",
    href: "/faqs/webflow",
    preview: [
      "Is Webflow suitable for marketing teams?",
      "How does Webflow compare to WordPress maintenance?",
      "Can Webflow support multi-page service sites?",
    ],
  },
  {
    title: "AI & AEO FAQ",
    href: "/faqs/ai-aeo",
    preview: [
      "What is the difference between SEO and AEO?",
      "How do answer engines evaluate content quality?",
      "Where should businesses start with AI implementation?",
    ],
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
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "guides" | "blog" | "faqs">(
    "all",
  );
  const [dbBlogPosts, setDbBlogPosts] = useState<BlogPost[]>(blogPosts);

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
      }));

      setDbBlogPosts(mapped);
    };

    void loadBlogPosts();
    return () => {
      isActive = false;
    };
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredGuides = useMemo(() => {
    if (!normalizedQuery) return guides;
    return guides.filter((guide) =>
      `${guide.title} ${guide.description}`.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const filteredBlogPosts = useMemo(() => {
    if (!normalizedQuery) return dbBlogPosts;
    return dbBlogPosts.filter((post) =>
      `${post.title} ${post.excerpt}`.toLowerCase().includes(normalizedQuery),
    );
  }, [dbBlogPosts, normalizedQuery]);

  const filteredFaqCollections = useMemo(() => {
    if (!normalizedQuery) return faqCollections;
    return faqCollections.filter((item) =>
      `${item.title} ${item.preview.join(" ")}`.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

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

  const websiteSearchSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MIS, Inc.",
    url: "https://www.misinc.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.misinc.com/resources?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <SiteShell>
      <ResourcesPageMetadata />
      <script type="application/ld+json">{JSON.stringify(guidesItemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(blogItemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSearchSchema)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <Section variant="hero">
          <Container size="standard">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-xs font-normal uppercase tracking-wide text-primary">
                Resources Hub
              </p>
              <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Resources to Learn, Decide, and Grow Your Business
              </h1>
              <p className="text-base leading-loose text-muted-foreground md:text-lg">
                This resource hub helps business teams find clear answers, practical
                frameworks, and strategic guidance for digital growth. Use it to compare
                options, understand best practices, and make confident decisions about
                web design, SEO, and AI-enabled operations.
              </p>
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                  <a href="#guides">Explore Guides</a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                  asChild
                >
                  <a href="#blog">Browse Blog Posts</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted insights from 30+ years of building digital systems.
              </p>
            </div>
          </Container>
        </Section>

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
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#faqs">
                FAQs
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#find">
                Find What You Need
              </a>
            </nav>
          </Container>
        </Section>

        <Section id="guides" variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Guides &amp; Evergreen Resources
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Guides are built for deeper, evergreen learning. They address
                high-intent questions with structured answers that stay useful over
                time, unlike timely blog updates.
              </p>
            </div>
            {activeFilter !== "blog" && activeFilter !== "faqs" && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredGuides.map((guide) => (
                  <Card key={guide.title} className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl leading-snug text-foreground">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-loose text-muted-foreground">
                        {guide.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Link
                        to={guide.href}
                        className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                      >
                        Open guide <ArrowRight className="size-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </Container>
        </Section>

        <Section id="blog" variant="standard">
          <Container size="standard">
            <div className="mb-10 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                From the Blog
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Explore timely insights, implementation notes, and strategic updates
                from our team.
              </p>
            </div>
            {activeFilter !== "guides" && activeFilter !== "faqs" && (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {filteredBlogPosts.map((post) => (
                    <Card key={post.title} className="overflow-hidden border-border bg-card">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-56 w-full object-cover"
                        loading="lazy"
                      />
                      <CardHeader>
                        <h3 className="text-2xl font-medium leading-snug text-foreground">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-loose text-muted-foreground">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Link
                          to={post.href}
                          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                        >
                          Read more <ArrowRight className="size-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                  >
                    View All Blog Posts <ArrowRight className="size-4" />
                  </Link>
                </div>
              </>
            )}
          </Container>
        </Section>

        <Section id="faqs" variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Review dedicated FAQ collections that answer common business questions
                across digital strategy, web platforms, and AI-led visibility.
              </p>
            </div>
            {activeFilter !== "guides" && activeFilter !== "blog" && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {filteredFaqCollections.map((collection) => (
                  <Card key={collection.title} className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl leading-snug text-foreground md:text-2xl">
                        {collection.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {collection.preview.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 size-1.5 rounded-full bg-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link
                        to={collection.href}
                        className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                      >
                        View full FAQ <ArrowRight className="size-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </Container>
        </Section>

        <Section id="find" variant="standard">
          <Container size="medium">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Find What You Need
                </CardTitle>
                <CardDescription className="text-base leading-loose text-muted-foreground">
                  Search and filter the resources on this page by content type and
                  topic intent.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search guides, blog posts, and FAQs..."
                    className="pl-10"
                    aria-label="Search resources"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "All", value: "all" },
                    { label: "Guides", value: "guides" },
                    { label: "Blog", value: "blog" },
                    { label: "FAQs", value: "faqs" },
                  ].map((filter) => (
                    <Button
                      key={filter.value}
                      type="button"
                      variant={activeFilter === filter.value ? "default" : "outline"}
                      className="rounded-full px-4 py-2 text-sm tracking-wide"
                      onClick={() => setActiveFilter(filter.value as typeof activeFilter)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-3">
                  {(activeFilter === "all" || activeFilter === "guides") && (
                    <p>Guides matched: {filteredGuides.length}</p>
                  )}
                  {(activeFilter === "all" || activeFilter === "blog") && (
                    <p>Blog posts matched: {filteredBlogPosts.length}</p>
                  )}
                  {(activeFilter === "all" || activeFilter === "faqs") && (
                    <p>FAQ collections matched: {filteredFaqCollections.length}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        <Section variant="cta" tone="warm">
          <Container size="standard">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Explore Next Steps
                </CardTitle>
                <CardDescription className="text-base leading-loose text-muted-foreground">
                  Continue exploring services and solution paths built for high-trust,
                  growth-oriented businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  to="/solutions"
                  className="rounded-full border border-primary/40 px-4 py-3 text-center text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/5"
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-primary/40 px-4 py-3 text-center text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/5"
                >
                  View Services
                </Link>
                <Link
                  to="/#case-studies"
                  className="rounded-full border border-primary/40 px-4 py-3 text-center text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/5"
                >
                  Case Studies
                </Link>
                <Link
                  to="/#contact"
                  className="rounded-full border border-primary/40 px-4 py-3 text-center text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary/5"
                >
                  Free Strategy Call
                </Link>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
