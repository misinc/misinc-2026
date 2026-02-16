import { useEffect } from "react";
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
import { getServiceDetailBySlug } from "@/app/data/serviceDetails";
import {
  CASE_STUDY_DETAILS,
  getCaseStudyDetailBySlug,
} from "@/app/data/caseStudyDetails";

function CaseStudyMetadata({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
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
    upsertMetaByProperty("og:title", ogTitle);
    upsertMetaByProperty("og:description", ogDescription);
    upsertMetaByProperty("og:type", "article");
    upsertMetaByProperty("og:url", canonicalUrl);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, description, ogDescription, ogTitle, title]);

  return null;
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const caseStudy = getCaseStudyDetailBySlug(slug ?? "");

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
                  This case study is unavailable. Explore our full success stories or
                  review services and solutions.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                    <Link to="/case-studies">View Case Studies</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to="/services">Explore Services</Link>
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

  const canonicalUrl = `https://www.misinc.com${caseStudy.canonicalPath}`;

  const relatedServices = caseStudy.relatedServiceSlugs
    .map((serviceSlug) => getServiceDetailBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .slice(0, 4);

  const relatedCaseStudies = caseStudy.relatedCaseStudySlugs
    .map((relatedSlug) => getCaseStudyDetailBySlug(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 3);

  const fallbackCaseStudies =
    relatedCaseStudies.length > 0
      ? relatedCaseStudies
      : CASE_STUDY_DETAILS.filter((entry) => entry.slug !== caseStudy.slug).slice(0, 3);

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
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.clientName,
        item: canonicalUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.seoDescription,
    datePublished: caseStudy.publishedDate,
    author: {
      "@type": "Organization",
      name: caseStudy.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "MIS, Inc.",
    },
    mainEntityOfPage: canonicalUrl,
    image: `https://www.misinc.com${caseStudy.heroImage}`,
  };

  return (
    <SiteShell>
      <a
        href="#case-study-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-50 focus:bg-background focus:px-4 focus:py-3 focus:text-foreground"
      >
        Skip to main content
      </a>
      <CaseStudyMetadata
        title={caseStudy.seoTitle}
        description={caseStudy.seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={caseStudy.seoTitle}
        ogDescription={caseStudy.seoDescription}
      />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main id="case-study-main" className="flex-1">
        <Section variant="hero">
          <Container size="standard">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="space-y-5">
                <p className="text-xs font-normal uppercase tracking-wide text-primary">
                  Case Study
                </p>
                <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  {caseStudy.title}
                </h1>
                <p className="text-base leading-loose text-muted-foreground md:text-lg">
                  {caseStudy.industry} | {caseStudy.serviceLine} | {caseStudy.heroSummary}
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
                    <Link to="/case-studies">View Related Case Studies</Link>
                  </Button>
                </div>
              </div>
              <Card className="overflow-hidden border-border bg-card">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.heroImageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-8 flex max-w-3xl flex-col gap-3">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                At a Glance
              </h2>
              <p className="text-base leading-loose text-muted-foreground">
                Quick snapshot of the business challenge, timeline, and measurable
                outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug text-foreground">Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug text-foreground">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{caseStudy.timeline}</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg leading-snug text-foreground">
                    Starting Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{caseStudy.startingChallenge}</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {caseStudy.keyResults.map((result) => (
                <Card key={result} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl leading-snug text-foreground">{result}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-border bg-card">
                <CardHeader>
                  <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                    About the Client
                  </h2>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base leading-loose text-muted-foreground">
                    <span className="font-medium text-foreground">{caseStudy.clientName}</span> is
                    a {caseStudy.industry.toLowerCase()} organization. {caseStudy.clientBackground.overview}
                  </p>
                  <p className="text-base leading-loose text-muted-foreground">
                    {caseStudy.clientBackground.companySize}
                  </p>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    {caseStudy.clientBackground.businessContext.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                    The Challenge We Tackled
                  </h2>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base leading-loose text-muted-foreground">
                    {caseStudy.challenge.summary}
                  </p>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    {caseStudy.challenge.constraints.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                How We Solved It
              </h2>
              <p className="mt-3 text-base leading-loose text-muted-foreground">
                {caseStudy.solution.summary}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">
                    Strategy Decisions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    {caseStudy.solution.strategyDecisions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">
                    Technology Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    {caseStudy.solution.technologyUsed.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl leading-snug text-foreground">
                    Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    {caseStudy.solution.implementationSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                <Link to="/services">Schedule a Strategy Call</Link>
              </Button>
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Results &amp; Measurable Impact
              </h2>
              <p className="mt-3 text-base leading-loose text-muted-foreground">
                {caseStudy.results.summary}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {caseStudy.results.metrics.map((metric) => (
                <Card key={metric.label} className="border-border bg-card">
                  <CardHeader>
                    <p className="text-xs font-normal uppercase tracking-wide text-primary">
                      {metric.label}
                    </p>
                    <CardTitle className="text-3xl font-medium leading-snug text-foreground">
                      {metric.value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Card className="mt-6 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl leading-snug text-foreground">
                  Business Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-muted-foreground">
                  {caseStudy.results.businessOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Container>
        </Section>

        {caseStudy.testimonial && (
          <Section variant="standard" tone="muted">
            <Container size="medium">
              <Card className="border-border bg-card">
                <CardHeader>
                  <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                    What the Client Said
                  </h2>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-2 border-primary pl-4 text-base leading-loose text-muted-foreground">
                    “{caseStudy.testimonial.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm text-foreground">
                    {caseStudy.testimonial.name}, {caseStudy.testimonial.title},{" "}
                    {caseStudy.testimonial.company}
                  </p>
                </CardContent>
              </Card>
            </Container>
          </Section>
        )}

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Related Services
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {relatedServices.map((service) => (
                <Card key={service.slug} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground">
                      {service.serviceName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {service.heroDescription}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                    >
                      Explore this service <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Other Success Stories
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {fallbackCaseStudies.map((relatedCaseStudy) => (
                <Card key={relatedCaseStudy.slug} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground">
                      {relatedCaseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {relatedCaseStudy.heroSummary}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/case-studies/${relatedCaseStudy.slug}`}
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

        <Section variant="standard">
          <Container size="standard">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl leading-snug text-foreground md:text-3xl">
                  Strategic Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Link
                  to={`/solutions/${caseStudy.relatedSolutionSlug}`}
                  className="text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                >
                  View the related solution path
                </Link>
                <Link
                  to="/case-studies"
                  className="text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                >
                  Browse all case studies
                </Link>
                {caseStudy.relatedResourceLinks.map((resource) => (
                  <Link
                    key={resource.href}
                    to={resource.href}
                    className="text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
                  >
                    {resource.label}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </Container>
        </Section>

        <Section variant="cta" tone="warm">
          <Container size="medium">
            <Card className="border-border bg-card text-center">
              <CardHeader>
                <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Ready to Get Results Like This?
                </h2>
                <CardDescription className="text-base leading-loose text-muted-foreground">
                  No-pressure consult. Clear next steps.
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
                  <Link to="/services">Explore All Services</Link>
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

