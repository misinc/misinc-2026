import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight } from "lucide-react";
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
import {
  fetchCaseStudyBySlug,
  fetchCaseStudies,
  type CaseStudyRecord,
} from "@/app/lib/contentApi";

function CaseStudyMetadata({
  title,
  description,
  canonicalUrl,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
}) {
  useEffect(() => {
    document.title = title;

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
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", "article");
    upsertMetaByProperty("og:url", canonicalUrl);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, description, title]);

  return null;
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudyRecord | null>(null);
  const [allCaseStudies, setAllCaseStudies] = useState<CaseStudyRecord[]>([]);

  useEffect(() => {
    const activeSlug = slug ?? "";
    if (!activeSlug) {
      return;
    }

    let isActive = true;

    const loadData = async () => {
      const [single, list] = await Promise.all([
        fetchCaseStudyBySlug(activeSlug),
        fetchCaseStudies(),
      ]);

      if (!isActive) {
        return;
      }

      setCaseStudy(single);
      setAllCaseStudies(list ?? []);
    };

    void loadData();
    return () => {
      isActive = false;
    };
  }, [slug]);

  const relatedCaseStudies = useMemo(() => {
    if (!caseStudy) {
      return [];
    }

    return allCaseStudies
      .filter((entry) => entry.slug !== caseStudy.slug)
      .slice(0, 3);
  }, [allCaseStudies, caseStudy]);

  if (!caseStudy) {
    return (
      <SiteShell>
        <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
          <SiteHeader>
            <MainNavbar />
          </SiteHeader>
        </div>
        <main className="flex-1">
          <Section variant="hero">
            <Container size="medium">
              <div className="text-center">
                <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  Case Study Not Found
                </h1>
                <p className="mt-4 text-base leading-loose text-muted-foreground">
                  This case study is unavailable. Explore our full success stories.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                    <Link to="/case-studies">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>
        </main>
        <SiteFooter />
      </SiteShell>
    );
  }

  const canonicalPath = caseStudy.detail && typeof caseStudy.detail === "object" && "canonicalPath" in caseStudy.detail
    ? String((caseStudy.detail as { canonicalPath?: string }).canonicalPath ?? `/case-studies/${caseStudy.slug}`)
    : `/case-studies/${caseStudy.slug}`;
  const canonicalUrl = `https://www.misinc.com${canonicalPath}`;
  const description = caseStudy.outcome ?? caseStudy.problem ?? "Case study results";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.misinc.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://www.misinc.com/case-studies",
      },
      { "@type": "ListItem", position: 3, name: caseStudy.title, item: canonicalUrl },
    ],
  };

  return (
    <SiteShell>
      <CaseStudyMetadata
        title={caseStudy.title}
        description={description}
        canonicalUrl={canonicalUrl}
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <Section variant="hero">
          <Container size="standard">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="space-y-5">
                <p className="text-xs font-normal uppercase tracking-wide text-primary">Case Study</p>
                <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  {caseStudy.title}
                </h1>
                <p className="text-base leading-loose text-muted-foreground md:text-lg">
                  {caseStudy.industry} | {caseStudy.metric}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                    <Link to="/services">Schedule a Strategy Call</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to="/case-studies">View All Case Studies</Link>
                  </Button>
                </div>
              </div>
              {caseStudy.imageUrl && (
                <Card className="overflow-hidden border-border bg-card">
                  <img
                    src={caseStudy.imageUrl}
                    alt={caseStudy.imageAlt ?? caseStudy.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </Card>
              )}
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    {caseStudy.problem}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    {caseStudy.strategy}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">Outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    {caseStudy.outcome}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Related Success Stories
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedCaseStudies.map((related) => (
                <Card key={related.slug} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground">{related.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {related.outcome}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/case-studies/${related.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                    >
                      View this case study <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
