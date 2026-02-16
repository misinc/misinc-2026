import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { Section, Container } from "@/app/components/ui/layout";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  getServiceDetailBySlug,
  SERVICE_PROCESS,
} from "@/app/data/serviceDetails";

function ServiceDetailMetadata({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogType = "website",
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogType?: string;
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
    upsertMetaByProperty("og:type", ogType);
    upsertMetaByProperty("og:url", canonicalUrl);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, description, ogDescription, ogTitle, ogType, title]);

  return null;
}

export default function ServiceDetailTemplatePage() {
  const { slug } = useParams();
  const service = getServiceDetailBySlug(slug ?? "");

  if (!service) {
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
                  Service Not Found
                </h1>
                <p className="mt-4 text-base leading-loose text-muted-foreground">
                  The requested service page is not available. Explore all available
                  services or review solution pages.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                    <Link to="/services">Explore All Services</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to="/solutions">View Solutions</Link>
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

  const canonicalUrl = `https://www.misinc.com${service.canonicalPath}`;
  const trustSignals = [
    "30 Years of Experience",
    "Albuquerque, New Mexico",
    "Strategic + Technical Execution",
  ];

  const relatedServices = service.relatedServiceSlugs
    .map((relatedSlug) => getServiceDetailBySlug(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 4);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MIS, Inc.",
    serviceType: service.serviceName,
    areaServed: ["New Mexico", "United States"],
    provider: {
      "@type": "Organization",
      name: "MIS, Inc.",
    },
    url: canonicalUrl,
  };

  return (
    <SiteShell>
      <ServiceDetailMetadata
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalUrl={canonicalUrl}
        ogTitle={service.seoTitle}
        ogDescription={service.seoDescription}
      />
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceStructuredData)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <Section variant="hero">
          <Container size="standard">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-4">
                {service.serviceName}
              </Badge>
              <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                {service.heroTitle}
              </h1>
              <p className="mt-5 text-base leading-loose text-muted-foreground md:text-lg">
                {service.heroDescription}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                  <Link to="/#contact">Schedule a Strategy Call</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                  asChild
                >
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
              <ul className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="medium">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                What Is {service.serviceName}?
              </h2>
              <p className="mt-4 text-base leading-loose text-muted-foreground">
                {service.quickAnswer}
              </p>
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-10">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Challenges This Service Solves
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Common pain points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {service.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Outcome-focused results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{outcome}</span>
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
            <div className="mb-10">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                What&apos;s Included
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <Card key={deliverable.title} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground md:text-2xl">
                      {deliverable.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {deliverable.description}
                    </CardDescription>
                  </CardContent>
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
                  <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                    Who This Service Is Best For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {service.idealFor.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Need a broader strategy context?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-loose text-muted-foreground">
                    This service is part of a complete growth system. Explore the
                    matching solution path and related case studies to evaluate fit.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3 sm:flex-row">
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to={service.solutionHref}>View Related Solution</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to="/services">Explore All Services</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Our Approach
              </h2>
            </div>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {SERVICE_PROCESS.map((step, index) => (
                <li key={step.title}>
                  <Card className="h-full border-border bg-card">
                    <CardHeader>
                      <p className="text-sm font-medium uppercase tracking-wide text-primary">
                        Step {index + 1}
                      </p>
                      <CardTitle className="text-xl leading-snug text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-loose text-muted-foreground">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-10">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Proven Results
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="border-border bg-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Client perspective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-2 border-primary pl-4 text-base leading-loose text-muted-foreground">
                    “{service.proofQuote}”
                  </blockquote>
                  <p className="mt-4 text-sm text-foreground/80">{service.proofAttribution}</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Measurable outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {service.proofMetrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 rounded-full bg-primary" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link
                    to={service.caseStudyHref}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-opacity hover:opacity-70"
                  >
                    View related case study
                    <ArrowRight className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Related Services
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.slug} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground">
                      {relatedService.serviceName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {relatedService.heroDescription}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/services/${relatedService.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-opacity hover:opacity-70"
                    >
                      View service
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-8">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-lg border border-border bg-card px-6 md:px-8"
            >
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index + 1}`}>
                  <AccordionTrigger className="text-base leading-relaxed text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-loose text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>

        <Section variant="cta" tone="warm">
          <Container size="medium">
            <Card className="border-border bg-card text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Let&apos;s Plan Your {service.serviceName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
                  Clear scope. Transparent process. No pressure.
                </CardDescription>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                    <Link to="/#contact">Schedule a Strategy Call</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                    asChild
                  >
                    <Link to="/services">Explore All Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <nav aria-label="Service navigation links" className="flex flex-wrap gap-3 text-sm">
              <Link to="/services" className="text-primary hover:underline">
                All services
              </Link>
              <Link to={service.solutionHref} className="text-primary hover:underline">
                Related solution
              </Link>
              <Link to="/case-studies" className="text-primary hover:underline">
                Case studies
              </Link>
            </nav>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
