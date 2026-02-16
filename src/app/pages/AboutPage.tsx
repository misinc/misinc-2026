import { useEffect } from "react";
import { Link } from "react-router";
import {
  Bot,
  Database,
  LayoutTemplate,
  MonitorSmartphone,
  Rocket,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Container, Section } from "@/app/components/ui/layout";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import webflowLogo from "@/assets/partner-webflow.svg";
import squareLogo from "@/assets/partner-square.svg";
import mailchimpLogo from "@/assets/partner-mailchimp.svg";

type Principle = {
  title: string;
  description: string;
};

type Partnership = {
  name: string;
  logo: string;
  logoAlt: string;
  summary: string;
  benefit: string;
};

type TechnologyItem = {
  name: string;
  description: string;
  problemSolved: string;
  note: string;
  href?: string;
};

type StoryMilestone = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    title: "Strategy Before Execution",
    description:
      "Every engagement starts with business goals, decision criteria, and risk context so delivery aligns with long-term priorities.",
  },
  {
    title: "Systems, Not Just Websites",
    description:
      "We architect connected digital systems that support sales, operations, and customer experience instead of isolated page builds.",
  },
  {
    title: "Measurable Outcomes",
    description:
      "Plans are tied to clear performance signals such as qualified leads, conversion lift, and operational efficiency.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Clients stay with us because we adapt through growth phases with consistent support, governance, and optimization.",
  },
];

const partnerships: Partnership[] = [
  {
    name: "Webflow Certified Partner",
    logo: webflowLogo,
    logoAlt: "Webflow Certified Partner logo",
    summary:
      "Certified implementation standards for scalable Webflow architecture, CMS governance, and performance.",
    benefit:
      "Clients get cleaner builds, faster iteration, and a platform foundation that supports growth.",
  },
  {
    name: "Square Partner",
    logo: squareLogo,
    logoAlt: "Square Partner logo",
    summary:
      "Integrated website and commerce expertise for businesses operating on Square tools.",
    benefit:
      "Clients get aligned storefront, operations, and customer experience without fragmented systems.",
  },
  {
    name: "Mailchimp Partner",
    logo: mailchimpLogo,
    logoAlt: "Mailchimp Partner logo",
    summary:
      "Lifecycle messaging and marketing automation alignment for lead nurture and retention.",
    benefit:
      "Clients get stronger follow-up systems that support measurable engagement over time.",
  },
];

const technologies: TechnologyItem[] = [
  {
    name: "Add On IDX",
    description:
      "A property-search and listing integration framework built to help real estate teams deliver modern digital search experiences.",
    problemSolved:
      "Solves disconnected listing data, inconsistent user experience, and limited lead capture workflows.",
    note:
      "Demonstrates deep product and integration capability beyond conventional marketing websites.",
  },
  {
    name: "Add On AI Chat",
    description:
      "A conversational AI layer designed to provide instant guidance, qualification support, and service discovery for visitors.",
    problemSolved:
      "Solves delayed response times, repetitive inquiry handling, and missed opportunities from high-intent traffic.",
    note:
      "Shows practical AI implementation focused on business outcomes, not novelty.",
  },
];

const differentiators = [
  "30 years of digital strategy and execution experience",
  "Albuquerque-based team with New Mexico market insight",
  "Proven Webflow Certified Partner and Square expertise",
  "Practical AI consulting firm capabilities tied to outcomes",
  "Long-term support model built for operational continuity",
];

const storyMilestones: StoryMilestone[] = [
  {
    year: "1995",
    title: "Founded & Early Web Phase",
    description:
      "MIS, Inc. launched in Albuquerque with a focus on practical web delivery for growing organizations. Early work established a reputation for reliability and technical depth.",
    icon: Rocket,
  },
  {
    year: "2000",
    title: "Interactive & Database Era",
    description:
      "Projects moved beyond static pages into dynamic, data-driven websites. Database integration became a core capability for business workflows and digital operations.",
    icon: Database,
  },
  {
    year: "2005",
    title: "Enterprise CMS",
    description:
      "The firm expanded into larger content ecosystems and structured publishing models. This period strengthened governance, scalability, and long-term maintainability.",
    icon: LayoutTemplate,
  },
  {
    year: "2010",
    title: "Responsive Web",
    description:
      "As user behavior shifted, MIS adopted responsive standards across delivery. Mobile-first thinking became central to user experience and conversion performance.",
    icon: MonitorSmartphone,
  },
  {
    year: "2015",
    title: "Webflow Transition",
    description:
      "The team standardized around modern visual development and cleaner CMS architecture. Webflow became a strategic platform for faster, more governable execution.",
    icon: Workflow,
  },
  {
    year: "2022",
    title: "AI & AEO Focus",
    description:
      "MIS expanded into AI consulting and answer-engine optimization to match new discovery behavior. Services aligned strategy with both search and AI-driven visibility.",
    icon: Bot,
  },
  {
    year: "2026",
    title: "Product Innovation",
    description:
      "Internal platforms such as Add On IDX and Add On AI Chat demonstrate product-level capability. Innovation now combines consulting, engineering, and reusable systems.",
    icon: Wrench,
  },
];

function AboutPageMetadata() {
  useEffect(() => {
    document.title = "About MIS, Inc. | 30 Years of Web & AI Innovation in Albuquerque";

    const description =
      "MIS, Inc. is a 30-year web design company in Albuquerque delivering Webflow, AI consulting, and digital strategy for New Mexico and regional businesses.";

    const upsertMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name=\"${name}\"]`);
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
    canonical.setAttribute("href", "https://www.misinc.com/about");
  }, []);

  return null;
}

export default function AboutPage() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MIS, Inc.",
    foundingDate: "1995",
    areaServed: "New Mexico",
    url: "https://www.misinc.com/about",
  };

  const professionalServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MIS, Inc.",
    areaServed: "New Mexico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      addressCountry: "US",
    },
    description:
      "New Mexico digital agency and AI consulting firm delivering web strategy, Webflow implementation, and systems-focused execution.",
    url: "https://www.misinc.com/about",
  };

  return (
    <SiteShell>
      <AboutPageMetadata />
      <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceStructuredData)}
      </script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <Section variant="hero">
          <Container size="standard">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs tracking-wide">
                Founded in 1995
              </Badge>
              <h1 className="text-4xl font-medium leading-tight text-foreground md:text-5xl">
                30 Years of Innovation in Web, AI, and Digital Strategy
              </h1>
              <p className="text-base leading-loose text-muted-foreground md:text-lg">
                MIS, Inc. is a web design company in Albuquerque, New Mexico founded in
                1995. We evolved from early web and database development into a modern
                AI consulting firm with strategic depth and technical execution.
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
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by businesses across New Mexico and beyond.
              </p>
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <article className="space-y-4 lg:col-span-5 lg:sticky lg:top-24 lg:z-30 lg:self-start lg:bg-muted/30 lg:pb-6">
                <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Our Story
                </h2>
                <p className="text-base leading-loose text-muted-foreground">
                  MIS, Inc. was founded in 1995 in Albuquerque with a focus on early web
                  development and database-backed business systems. As technology changed,
                  we continuously adapted architecture, tooling, and delivery models.
                </p>
                <p className="text-base leading-loose text-muted-foreground">
                  Over three decades, we guided clients through major shifts in digital
                  platforms, conversion strategy, and operations. Today, our work combines
                  Webflow implementation, modern development practices, and AI consulting
                  with outcome-focused strategy.
                </p>
                <p className="text-base leading-loose text-muted-foreground">
                  This combination is why organizations choose us as a New Mexico digital
                  agency partner for long-term growth, not one-off execution.
                </p>
              </article>

              <div className="relative lg:col-span-7 lg:pt-2">
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 top-0 w-px bg-border"
                />
                <ol className="space-y-6 pb-24">
                  {storyMilestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const zIndexClass = [
                      "z-10",
                      "z-20",
                      "z-30",
                      "z-40",
                      "z-50",
                      "z-50",
                      "z-50",
                    ][index];
                    return (
                      <li
                        key={milestone.year}
                        className={`sticky top-24 ${zIndexClass} ${index === storyMilestones.length - 1 ? "" : "pb-8 md:pb-10"}`}
                      >
                        <div className="relative">
                          <div className="relative pl-16">
                            <span className="absolute left-6 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />
                            <Card className="border-border bg-card shadow-md">
                              <CardHeader>
                                <div className="flex items-center gap-3">
                                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted text-primary">
                                    <Icon className="size-4" aria-hidden="true" />
                                  </span>
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium uppercase tracking-wide text-primary">
                                      {milestone.year}
                                    </p>
                                    <CardTitle className="text-xl leading-snug text-foreground">
                                      {milestone.title}
                                    </CardTitle>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <CardDescription className="text-base leading-loose text-muted-foreground">
                                  {milestone.description}
                                </CardDescription>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-10 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                How We Think
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                Our operating model keeps strategy, execution, and accountability tightly
                connected from planning through optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {principles.map((principle) => (
                <Card key={principle.title} className="h-full border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug text-foreground md:text-2xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mb-10 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Trusted Technology Partnerships
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                Partner relationships strengthen delivery quality, platform expertise, and
                long-term reliability for client programs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {partnerships.map((partnership) => (
                <Card key={partnership.name} className="h-full border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <img
                        src={partnership.logo}
                        alt={partnership.logoAlt}
                        className="h-10 w-10 rounded-md border border-border"
                        loading="lazy"
                      />
                      <CardTitle className="text-xl leading-snug text-foreground">
                        {partnership.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {partnership.summary}
                    </CardDescription>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {partnership.benefit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard">
          <Container size="standard">
            <div className="mb-10 flex flex-col gap-4">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                Technology We&apos;ve Developed
              </h2>
              <p className="max-w-3xl text-base leading-loose text-muted-foreground">
                We build proprietary systems when client outcomes require capabilities
                beyond off-the-shelf solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {technologies.map((technology) => (
                <Card key={technology.name} className="h-full border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl leading-snug text-foreground">
                      {technology.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-loose text-muted-foreground">
                      {technology.description}
                    </CardDescription>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      <span className="font-medium text-foreground">Problem solved:</span>{" "}
                      {technology.problemSolved}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">{technology.note}</p>
                    {technology.href ? (
                      <Link
                        to={technology.href}
                        className="inline-flex text-sm font-medium text-primary hover:underline"
                      >
                        Learn more
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="standard" tone="muted">
          <Container size="standard">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                What Sets Us Apart
              </h2>
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section variant="cta">
          <Container size="medium">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-medium leading-snug text-foreground md:text-4xl">
                  Let&apos;s Build What&apos;s Next
                </CardTitle>
                <CardDescription className="text-base leading-loose text-muted-foreground">
                  No-pressure consultation. Clear next steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
