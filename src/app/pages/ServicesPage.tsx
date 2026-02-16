import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Container, Section } from "@/app/components/ui/layout";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";

type Service = {
  name: string;
  description: string;
  bestFor: string;
  href: string;
};

type Goal = {
  title: string;
  problem: string;
  serviceLinks: { label: string; href: string }[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const services: Service[] = [
  {
    name: "Web Design & Redesign",
    description:
      "Create a modern, conversion-focused website that clarifies your value and helps qualified prospects take action.",
    bestFor: "Best for: Businesses with outdated sites or unclear positioning.",
    href: "/services/web-design",
  },
  {
    name: "Webflow Development",
    description:
      "Build scalable, easy-to-manage Webflow sites with strong performance, clean CMS structure, and faster launch cycles.",
    bestFor: "Best for: Teams that need flexibility without engineering bottlenecks.",
    href: "/services/webflow-development",
  },
  {
    name: "Square Website Design",
    description:
      "Launch trustworthy Square websites that connect brand, content, and commerce in a streamlined customer experience.",
    bestFor: "Best for: Local and service businesses running on Square tools.",
    href: "/services/square-website-design",
  },
  {
    name: "Custom Applications",
    description:
      "Develop custom web applications, client portals, and internal tools that remove process friction and support growth.",
    bestFor: "Best for: Organizations with manual workflows and disconnected systems.",
    href: "/services/custom-applications",
  },
  {
    name: "AI Consulting & Automation",
    description:
      "Deploy practical AI consulting and automation initiatives that improve team output and reduce repetitive operational work.",
    bestFor: "Best for: Teams ready to improve efficiency with measurable AI outcomes.",
    href: "/services/ai-consulting",
  },
  {
    name: "SEO Strategy",
    description:
      "Increase qualified organic traffic with SEO strategy built on search intent, technical foundations, and conversion-focused content.",
    bestFor: "Best for: Businesses that need stronger Google visibility and lead flow.",
    href: "/services/seo-strategy",
  },
  {
    name: "AEO Services",
    description:
      "Improve answer engine visibility by structuring content for AI results, featured snippets, and direct-answer queries.",
    bestFor: "Best for: Companies competing in AI search and answer-first discovery.",
    href: "/services/aeo-services",
  },
];

const goals: Goal[] = [
  {
    title: "Generate More Qualified Leads",
    problem:
      "Traffic is reaching your site, but the right prospects are not converting into booked conversations.",
    serviceLinks: [
      { label: "Web Design & Redesign", href: "/services/web-design" },
      { label: "SEO Strategy", href: "/services/seo-strategy" },
      { label: "AEO Services", href: "/services/aeo-services" },
    ],
  },
  {
    title: "Increase Conversion Rates",
    problem:
      "Your site looks credible but fails to turn interest into inquiries, consultations, or revenue opportunities.",
    serviceLinks: [
      { label: "Webflow Development", href: "/services/webflow-development" },
      { label: "Web Design & Redesign", href: "/services/web-design" },
    ],
  },
  {
    title: "Streamline Internal Workflows",
    problem:
      "Teams spend too much time on repetitive tasks, manual updates, and disconnected operational systems.",
    serviceLinks: [
      { label: "Custom Applications", href: "/services/custom-applications" },
      { label: "AI Consulting & Automation", href: "/services/ai-consulting" },
    ],
  },
  {
    title: "Improve Google Rankings",
    problem:
      "Important service pages are difficult to find in search and underperform against local or regional competitors.",
    serviceLinks: [
      { label: "SEO Strategy", href: "/services/seo-strategy" },
      { label: "Webflow Development", href: "/services/webflow-development" },
      { label: "Web Design & Redesign", href: "/services/web-design" },
    ],
  },
  {
    title: "Improve AI Search Visibility",
    problem:
      "Prospects are using AI tools for discovery, but your brand rarely appears in direct-answer responses.",
    serviceLinks: [
      { label: "AEO Services", href: "/services/aeo-services" },
      { label: "AI Consulting & Automation", href: "/services/ai-consulting" },
    ],
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We define business goals, audience priorities, and operational constraints to establish clear project direction from day one.",
  },
  {
    title: "Strategy",
    description:
      "We map conversion paths, content priorities, and technical requirements into a focused plan tied to measurable outcomes.",
  },
  {
    title: "Build",
    description:
      "We execute design and development with clean architecture, performance standards, and quality controls that support scale.",
  },
  {
    title: "Optimize",
    description:
      "We refine performance after launch using analytics, testing, and iteration to improve lead quality and business efficiency.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How much does a professional website cost?",
    answer:
      "Project cost depends on scope, content complexity, integrations, and timeline. Most engagements are scoped after strategy discovery so the investment aligns with your business goals. We provide clear deliverables and pricing before work begins.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most website projects run between six and twelve weeks depending on complexity and feedback cadence. Larger builds involving custom applications or automation can extend beyond that range. We provide a phased timeline with milestones at kickoff.",
  },
  {
    question: "What is the difference between SEO and AEO?",
    answer:
      "SEO focuses on improving rankings in search engine result pages and driving qualified organic traffic. AEO services focus on helping your content appear in direct answers, AI summaries, and conversational search results. Together they improve visibility across both traditional and AI search behavior.",
  },
  {
    question: "Is Webflow better than WordPress?",
    answer:
      "Webflow is often better for teams that need visual control, speed, and easier ongoing content management with fewer plugin dependencies. WordPress can still be a fit for certain legacy ecosystems. We recommend based on your operational needs, not a one-size-fits-all preference.",
  },
  {
    question: "How can AI consulting help my business?",
    answer:
      "AI consulting helps identify high-impact workflows where automation can save time, reduce errors, and improve responsiveness. We prioritize practical use cases tied to measurable outcomes instead of novelty. Typical wins include streamlined operations and faster internal execution.",
  },
  {
    question: "Do you work with companies outside New Mexico?",
    answer:
      "Yes. MIS, Inc. is based in Albuquerque, New Mexico, and we work with organizations across the United States. Remote collaboration is built into our process with structured communication and milestone reviews.",
  },
  {
    question: "Do I need all services at once?",
    answer:
      "No. Most clients start with one priority outcome and phase additional services over time. We help define the right sequence so you can move forward without unnecessary complexity or spend.",
  },
];

const trustSignals = [
  "30 Years of Experience",
  "Albuquerque, New Mexico",
  "Strategic + Technical Execution",
];

function ServicesPageMetadata() {
  useEffect(() => {
    document.title = "Web Design & AI Services in Albuquerque | MIS, Inc.";

    const description =
      "Explore web design, webflow development, SEO, AEO, and AI consulting services in Albuquerque for lead growth, visibility, and scalable execution.";

    const upsertMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    upsertMeta("description", description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.misinc.com/services");
  }, []);

  return null;
}

export default function ServicesPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
    areaServed: "New Mexico",
    serviceType: [
      "Web Design",
      "Webflow Development",
      "AI Consulting",
      "AEO Services",
    ],
    url: "https://www.misinc.com/services",
  };

  return (
    <SiteShell>
      <ServicesPageMetadata />
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
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                Services Overview
              </p>
              <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Web Design, Development, and AI Services for Growth-Focused Businesses
              </h1>
              <p className="text-base leading-loose text-muted-foreground md:text-lg">
                We help businesses generate better leads, improve visibility, automate
                high-friction workflows, and build scalable digital systems that
                support long-term growth.
              </p>
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Button className="rounded-full px-6 py-6 text-sm tracking-wide" asChild>
                  <Link to="/#contact">Schedule a Strategy Call</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/60 px-6 py-6 text-sm tracking-wide text-primary"
                  asChild
                >
                  <a href="#services-by-goal">Explore Services by Goal</a>
                </Button>
              </div>
              <ul className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
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
          <Container size="standard">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Our Core Services
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                Explore service tracks designed for organizations that need strategic
                clarity and execution depth from a trusted web design company.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className="group h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl leading-snug text-foreground">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <p className="mt-4 text-sm text-foreground/80">{service.bestFor}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-opacity hover:opacity-70"
                    >
                      View service details
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="services-by-goal" variant="standard">
          <Container size="standard">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Choose Services by Outcome
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                Reduce decision fatigue by choosing the result you need first, then
                selecting the services that support that outcome.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {goals.map((goal) => (
                <Card key={goal.title} className="h-full border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground md:text-2xl">
                      {goal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {goal.problem}
                    </CardDescription>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {goal.serviceLinks.map((link) => (
                        <Link
                          key={`${goal.title}-${link.label}`}
                          to={link.href}
                          className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                How We Deliver
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                A four-step model that ties strategy to execution and measurable
                performance outcomes.
              </p>
            </div>

            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
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
            <div className="mb-10 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Results Across Industries
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                We support organizations across New Mexico and beyond with work
                focused on performance, trust, and scalable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="border-border bg-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Client feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <blockquote className="border-l-2 border-primary pl-4 text-base leading-loose text-muted-foreground">
                    “MIS helped us reposition our website around business outcomes.
                    Lead quality improved quickly after launch.”
                  </blockquote>
                  <blockquote className="border-l-2 border-primary pl-4 text-base leading-loose text-muted-foreground">
                    “Their team connected strategy and execution. We got clearer
                    messaging, better performance, and a site we can scale.”
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl leading-snug text-foreground">
                    Example outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>+40% qualified lead growth after redesign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>-32% manual admin time via workflow automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>+58% increase in non-branded organic visibility</span>
                    </li>
                  </ul>
                  <Link
                    to="/case-studies"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-opacity hover:opacity-70"
                  >
                    View case studies
                    <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-8 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                Direct answers to high-intent buyer questions about webflow
                development, AI consulting, SEO, and AEO services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full rounded-lg border border-border bg-card px-6 md:px-8">
              {faqs.map((faq, index) => (
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

        <Section variant="cta">
          <Container size="medium">
            <Card className="border-border bg-secondary/10 text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Ready to Plan the Right Service Mix?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mx-auto max-w-3xl text-base leading-loose text-muted-foreground">
                  No-pressure consult. Clear next steps.
                </CardDescription>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
              </CardContent>
            </Card>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <nav aria-label="Related pages" className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-medium text-foreground">Explore more:</span>
              <Link to="/solutions" className="text-primary hover:underline">
                Solutions overview
              </Link>
              <Link to="/solutions/small-businesses" className="text-primary hover:underline">
                Small business solution
              </Link>
              <Link to="/resources" className="text-primary hover:underline">
                Resources
              </Link>
            </nav>
          </Container>
        </Section>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
