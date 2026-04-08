import { Bot, Globe, Layers3 } from "lucide-react";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import {
  AuthorityOrbitSection,
  CapabilitiesBridgeSection,
  FinalCTASection,
  HeroSection,
  OurApproachSection,
  SolutionsSection,
} from "@/app/components/sections";
import solutionsHeroVideo from "@/assets/bg-hero-video.mp4";

export default function SolutionsPage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <HeroSection
          eyebrow="Solutions"
          title={
            <>
              Solutions Built Around <br />
              Your Business
            </>
          }
          description="We design and build digital systems tailored to your operating model, audience, and growth stage so your website works as a real business asset."
          backgroundVideoSrc={solutionsHeroVideo}
          primaryAction={{
            label: "Book a Strategy Call",
            href: "/contact",
            variant: "primary",
          }}
          secondaryAction={{
            label: "Explore Audiences",
            scrollToId: "solutions-audience",
            variant: "secondary",
          }}
        />

        <SolutionsSection
          sectionId="solutions-audience"
          title="Solutions by Audience"
          leadTitle="Choose the audience track that matches how your organization operates."
          leadDescription="Each solution page is organized around the needs, buying patterns, and delivery realities of a specific type of business or team."
          backgroundColor="var(--mis-surface)"
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

        <CapabilitiesBridgeSection
          sectionId="capabilities-bridge"
          eyebrow="Core Capabilities"
          title="Three service areas that power every solution we deliver."
          description="From high-performing websites to custom operational tools to practical AI systems, these are the core capabilities behind our solution work."
          capabilities={[
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
          ]}
          backgroundColor="#fafafa"
        />

        <AuthorityOrbitSection
          sectionId="trusted-innovation"
          eyebrow="Founded in 1995"
          title={
            <>
              30 Years of Innovation.
              <br />
              Built for What&apos;s Next.
            </>
          }
          description="Since 1995, we’ve helped businesses navigate every major shift in web technology — from the early web to mobile-first design to AI-powered optimization."
          orbitValue="30"
          orbitLabel="Years of innovation"
        />

        <FinalCTASection
          sectionId="solutions-cta"
          eyebrow="Next Step"
          title="Build the Right Solution Next"
          description="Tell us your goals, constraints, and timeline. We’ll map the right solution path and delivery plan for your team."
          actionLabel="Start Your Project"
          actionTo="/contact"
          footnote="No pressure. Clear recommendations and a practical delivery path."
        />
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
