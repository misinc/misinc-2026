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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import {
  caseStudies,
  caseStudyCategories,
  type CaseStudyCategory,
} from "@/app/data/caseStudies";
import { fetchCaseStudies, type CaseStudyRecord } from "@/app/lib/contentApi";
import caseStudyImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import caseStudyImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import caseStudyImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import caseStudyImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import caseStudyImageFive from "@/assets/93bdf867d705af4cd05e62b9305f28776e6b5532.png";
import caseStudyImageSix from "@/assets/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";

const caseStudyImagesBySlug: Record<string, string> = {
  "brand-x-growth-program": caseStudyImageOne,
  "client-y-enterprise-webflow-ai": caseStudyImageTwo,
  "client-z-aeo-visibility": caseStudyImageThree,
  "operations-portal-modernization": caseStudyImageFour,
  "multi-location-seo-growth": caseStudyImageFive,
  "fintech-onboarding-rebuild": caseStudyImageSix,
};

function CaseStudiesMetadata() {
  useEffect(() => {
    document.title = "Case Studies — Client Results & Success Stories | MIS, Inc.";

    const description =
      "Explore MIS case studies featuring measurable client results, success stories, and strategy outcomes across web, AI, SEO, and custom systems.";

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
    upsertMetaByProperty("og:url", "https://www.misinc.com/case-studies");

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.misinc.com/case-studies");
  }, []);

  return null;
}

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory | "all">("all");
  const [dbCaseStudies, setDbCaseStudies] = useState(caseStudies);

  useEffect(() => {
    let isActive = true;
    const loadCaseStudies = async () => {
      const rows = await fetchCaseStudies();
      if (!rows || !isActive || rows.length === 0) {
        return;
      }

      const mapped = rows.map((row: CaseStudyRecord) => ({
        slug: row.slug,
        title: row.title,
        problem: row.problem ?? "",
        strategy: row.strategy ?? "",
        outcome: row.outcome ?? "",
        metric: row.metric ?? "",
        industry: row.industry ?? "",
        categories:
          Array.isArray(row.categories) && row.categories.length > 0
            ? (row.categories as CaseStudyCategory[])
            : (["Web Design & Redesign"] as CaseStudyCategory[]),
        image: row.imageUrl || caseStudyImagesBySlug[row.slug] || caseStudyImageOne,
        imageAlt: row.imageAlt || row.title,
        featured: Boolean(row.featured),
      }));

      setDbCaseStudies(mapped);
    };

    void loadCaseStudies();
    return () => {
      isActive = false;
    };
  }, []);

  const featuredCaseStudies = useMemo(
    () => dbCaseStudies.filter((caseStudy) => caseStudy.featured),
    [dbCaseStudies],
  );

  const normalizedQuery = query.trim().toLowerCase();

  const visibleCaseStudies = useMemo(() => {
    return dbCaseStudies.filter((caseStudy) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${caseStudy.title} ${caseStudy.problem} ${caseStudy.strategy} ${caseStudy.outcome} ${caseStudy.metric} ${caseStudy.industry} ${caseStudy.categories.join(" ")}`.toLowerCase().includes(
          normalizedQuery,
        );
      const matchesCategory =
        activeCategory === "all" || caseStudy.categories.includes(activeCategory);
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, dbCaseStudies, normalizedQuery]);

  const groupedByCategory = useMemo(() => {
    return caseStudyCategories.map((category) => ({
      category,
      items: dbCaseStudies.filter((caseStudy) => caseStudy.categories.includes(category)),
    }));
  }, [dbCaseStudies]);

  const caseStudiesItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MIS Case Studies and Client Results",
    itemListElement: dbCaseStudies.map((caseStudy, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: caseStudy.title,
      description: `${caseStudy.problem} ${caseStudy.outcome}`,
      url: `https://www.misinc.com/case-studies/${caseStudy.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.misinc.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://www.misinc.com/case-studies",
      },
    ],
  };

  return (
    <SiteShell>
      <CaseStudiesMetadata />
      <script type="application/ld+json">{JSON.stringify(caseStudiesItemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

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
                Client Case Studies
              </p>
              <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Real Results from Our Client Partnerships
              </h1>
              <p className="text-base leading-loose text-muted-foreground md:text-lg">
                We help teams solve complex digital challenges with measurable strategy.
                These success stories show how focused execution can improve visibility,
                increase conversions, and create durable growth.
              </p>
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                  <Link to="/services">Schedule a Strategy Call</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                  asChild
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Proven success across industries - Web, AI, SEO, AEO, and custom systems.
              </p>
            </div>
          </Container>
        </Section>

        <Section variant="flush">
          <Container size="standard">
            <nav
              aria-label="Case studies section navigation"
              className="flex flex-wrap items-center justify-center gap-3 border-y border-border py-6 text-sm"
            >
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#featured">
                Featured
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#categories">
                Categories
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#find-case-studies">
                Find Case Studies
              </a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#framework">
                What You&apos;ll Learn
              </a>
            </nav>
          </Container>
        </Section>

        <Section id="featured" variant="standard">
          <Container size="standard">
            <div className="mb-10 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Featured Success Stories
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                High-impact engagements selected for measurable business outcomes and
                repeatable strategic lessons.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCaseStudies.map((caseStudy) => (
                <Card key={caseStudy.slug} className="overflow-hidden border-border bg-card">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.imageAlt}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <CardHeader>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {caseStudy.metric}
                    </p>
                    <h3 className="text-2xl font-medium leading-snug text-foreground">
                      {caseStudy.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {caseStudy.problem}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Outcome: </span>
                      {caseStudy.outcome}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Read full case study <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="categories" variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10 flex max-w-3xl flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Explore by Category
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Browse grouped success stories to compare approaches by service type and
                business objective.
              </p>
            </div>

            <div className="space-y-8">
              {groupedByCategory.map((group) => (
                <div key={group.category} className="space-y-4">
                  <h3 className="text-2xl font-medium leading-snug text-foreground">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {group.items.map((caseStudy) => (
                      <Card key={`${group.category}-${caseStudy.slug}`} className="border-border bg-card">
                        <CardHeader>
                          <p className="text-xs font-medium uppercase tracking-wide text-primary">
                            {caseStudy.metric}
                          </p>
                          <CardTitle className="text-xl leading-snug text-foreground">
                            {caseStudy.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-loose text-muted-foreground">
                            {caseStudy.outcome}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Link
                            to={`/case-studies/${caseStudy.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          >
                            View case study details <ArrowRight className="size-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="find-case-studies" variant="standard">
          <Container size="medium">
            <Card className="border-border bg-card">
              <CardHeader>
                <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Find Case Studies
                </h2>
                <CardDescription className="text-base leading-loose text-muted-foreground">
                  Search by challenge, industry, or outcome and filter by category to find
                  relevant success stories quickly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search case studies by challenge, strategy, or results..."
                    className="pl-10"
                    aria-label="Search case studies"
                  />
                </div>
                <fieldset>
                  <legend className="mb-2 text-sm font-medium text-foreground">
                    Filter by category
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant={activeCategory === "all" ? "default" : "outline"}
                      className="rounded-full px-4 py-2 text-sm tracking-wide"
                      onClick={() => setActiveCategory("all")}
                    >
                      All
                    </Button>
                    {caseStudyCategories.map((category) => (
                      <Button
                        key={category}
                        type="button"
                        variant={activeCategory === category ? "default" : "outline"}
                        className="rounded-full px-4 py-2 text-sm tracking-wide"
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </fieldset>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {visibleCaseStudies.map((caseStudy) => (
                    <Card key={`filtered-${caseStudy.slug}`} className="border-border bg-card">
                      <CardHeader>
                        <p className="text-xs font-medium uppercase tracking-wide text-primary">
                          {caseStudy.metric}
                        </p>
                        <CardTitle className="text-xl leading-snug text-foreground">
                          {caseStudy.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-loose text-muted-foreground">
                          {caseStudy.problem}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Link
                          to={`/case-studies/${caseStudy.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Explore this success story <ArrowRight className="size-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                {visibleCaseStudies.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No matching case studies found. Try a broader query or clear filters.
                  </p>
                )}
              </CardContent>
            </Card>
          </Container>
        </Section>

        <Section id="framework" variant="standard" tone="muted">
          <Container size="standard">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
              <Card className="border-border bg-card">
                <CardHeader>
                  <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                    What You&apos;ll Learn From These Stories
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-loose text-muted-foreground">
                    Every case study follows a clear narrative: client background,
                    challenge, strategy, implementation, and measurable results. This
                    structure helps teams evaluate fit quickly and helps answer engines
                    understand business context and outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <h3 className="text-2xl font-medium leading-snug text-foreground">
                    Related Paths
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    to="/services"
                    className="block text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Explore services
                  </Link>
                  <Link
                    to="/solutions"
                    className="block text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Review industry solutions
                  </Link>
                  <Link
                    to="/resources"
                    className="block text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Read related guides and insights
                  </Link>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="cta">
          <Container size="medium">
            <Card className="border-border bg-card text-center">
              <CardHeader>
                <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Want Results Like These?
                </h2>
                <CardDescription className="mx-auto max-w-2xl text-base leading-loose text-muted-foreground">
                  No-pressure guidance. Real next steps.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                  <Link to="/services">Schedule a Strategy Call</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                  asChild
                >
                  <Link to="/services">Tell Us Your Project</Link>
                </Button>
              </CardFooter>
            </Card>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
