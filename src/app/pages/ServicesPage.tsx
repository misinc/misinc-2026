import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Bot, Globe, Layers3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  CapabilitiesBridgeSection,
  FinalCTASection,
  HeroSection,
  OurApproachSection,
} from "@/app/components/sections";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import servicesHeroVideo from "@/assets/bg-hero-video.mp4";
import "@/styles/services-page.css";

type FaqItem = {
  question: string;
  answer: string;
};

const coreCapabilities = [
  {
    title: "Web Design & Development",
    description:
      "Websites built to clarify your offer, earn trust quickly, and support long-term growth.",
    href: "/services/web-design",
    icon: Globe,
    accent: "#A62025",
    eyebrow: "Digital Foundation",
    ctaLabel: "View service",
  },
  {
    title: "Custom Applications",
    description:
      "Purpose-built tools and integrations that reduce manual work and fit the way your team actually operates.",
    href: "/services/custom-applications",
    icon: Layers3,
    accent: "#FF9902",
    eyebrow: "Operational Systems",
    ctaLabel: "View service",
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI strategy and automation that create leverage, improve execution speed, and support smarter workflows.",
    href: "/services/ai-consulting",
    icon: Bot,
    accent: "#6B4A1E",
    eyebrow: "Efficiency Multiplier",
    ctaLabel: "View service",
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
        <HeroSection
          sectionId="services-hero"
          className="services-page-hero"
          eyebrow="Services Overview"
          title={
            <>
              Web Design, Development, and AI Services for Growth-Focused Businesses
            </>
          }
          description="We help businesses generate better leads, improve visibility, automate high-friction workflows, and build scalable digital systems that support long-term growth."
          backgroundVideoSrc={servicesHeroVideo}
          primaryAction={{
            label: "Schedule a Strategy Call",
            to: "/contact",
            variant: "primary",
          }}
          secondaryAction={{
            label: "Explore Services",
            scrollToId: "services-core-capabilities",
            variant: "secondary",
          }}
          supplemental={
            <ul className="services-hero-trust">
              {trustSignals.map((signal) => (
                <li key={signal}>
                  <span aria-hidden="true" className="services-hero-trust-dot" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          }
        />

        <CapabilitiesBridgeSection
          sectionId="services-core-capabilities"
          eyebrow="Core Capabilities"
          title="Three service areas that power every solution we deliver."
          description="From high-performing websites to custom operational tools to practical AI systems, these are the core capabilities behind our solution work."
          capabilities={coreCapabilities}
          backgroundColor="#fafafa"
        />

        <OurApproachSection
          sectionId="our-approach"
          eyebrow="Our Approach"
          title="A process designed to create momentum, not just deliverables."
          description="Good outcomes come from disciplined sequencing. Each phase sharpens the next, so strategy, execution, and optimization work as one continuous system."
          featureEyebrow="Flagship message"
          featureTitle="Good outcomes come from disciplined sequencing."
          featureDescription="Instead of treating every phase as equal visual weight, this version emphasizes the overall promise and lets the steps cascade beside it."
          backgroundColor="var(--mis-bg-soft)"
        />

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

            <div className="services-page-faq-shell">
              <Accordion type="single" collapsible className="services-page-faq">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index + 1}`}>
                    <AccordionTrigger className="services-page-faq-trigger">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="services-page-faq-content">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        <FinalCTASection
          sectionId="services-cta"
          eyebrow="Next Step"
          title="Ready to Plan the Right Service Mix?"
          description="Tell us what you need to improve next and we’ll help map the service path that makes the most sense for your goals, constraints, and timeline."
          actionLabel="Schedule a Strategy Call"
          actionTo="/contact"
          footnote="No-pressure consult. Clear next steps."
        />

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
