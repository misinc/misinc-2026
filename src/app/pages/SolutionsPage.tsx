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
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";

const solutions = [
  {
    name: "Small Businesses",
    description:
      "Practical website and growth systems for owner-led teams that need results without operational overhead.",
    slug: "small-businesses",
  },
  {
    name: "Real Estate",
    description:
      "Listing-ready digital experiences, lead funnels, and CRM-connected workflows for brokers and teams.",
    slug: "real-estate",
  },
  {
    name: "Nonprofits",
    description:
      "Mission-first websites focused on fundraising, volunteer recruitment, and measurable community impact.",
    slug: "nonprofits",
  },
  {
    name: "Professional Services",
    description:
      "Credibility-driven websites that support complex buying cycles for legal, financial, and consulting firms.",
    slug: "professional-services",
  },
  {
    name: "Startups & SaaS",
    description:
      "Conversion-focused experiences that support product positioning, activation, and scalable go-to-market growth.",
    slug: "startups-saas",
  },
];

const approachPillars = [
  {
    title: "Discover",
    description:
      "We align business goals, audience needs, and constraints before design or development begins.",
  },
  {
    title: "Design",
    description:
      "We shape clear user journeys and content hierarchies built for trust, clarity, and conversion.",
  },
  {
    title: "Build",
    description:
      "We implement with performance, maintainability, and CMS governance in mind from day one.",
  },
  {
    title: "Optimize",
    description:
      "We improve continuously through analytics, testing, and iterative content and UX enhancements.",
  },
];

const capabilities = [
  { label: "Web Design & Redesign", href: "/services/web-design" },
  { label: "Webflow Development", href: "/services/webflow-development" },
  { label: "Ecommerce Solutions", href: "/services/ecommerce-websites" },
  { label: "AI Strategy & Automation", href: "/services/ai-strategy" },
];

export default function SolutionsPage() {
  return (
    <SiteShell>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <SiteHeader>
        <MainNavbar />
      </SiteHeader>
      </div>

      <main className="flex-1">
      <section className="flex w-full justify-center pb-[80px] pt-[64px] md:pb-[120px] md:pt-[100px]">
        <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-[24px] text-center">
            <p className="text-[12px] font-normal uppercase tracking-[1px] text-[#9B3139]">
              Solutions
            </p>
            <h1 className="font-['Manrope:Light',sans-serif] text-[36px] leading-[1.1] text-[#151515] md:text-[56px] lg:text-[64px]">
              Solutions Built Around Your Business
            </h1>
            <p className="max-w-[760px] text-[16px] leading-[1.6] text-[#4A3F37] md:text-[20px]">
              We design and build digital systems tailored to your operating
              model, audience, and growth stage so your website works as a real
              business asset.
            </p>
            <div className="flex flex-col gap-[12px] pt-[8px] sm:flex-row">
              <Button className="rounded-full px-6 py-6 text-[14px] tracking-[1px]">
                Book a Strategy Call
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#9B3139]/60 px-6 py-6 text-[14px] tracking-[1px] text-[#9B3139] hover:bg-black/5"
                asChild
              >
                <Link to="/#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center bg-[#fafafa] py-[80px] md:py-[120px]">
        <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <div className="mb-[48px] flex flex-col gap-[16px]">
            <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
              Solutions by Audience
            </h2>
            <p className="max-w-[700px] text-[16px] leading-[1.6] text-[#777] md:text-[18px]">
              Choose the track that reflects your organization. Each solution
              has a dedicated page with deliverables, timelines, and engagement
              options.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <Card
                key={solution.slug}
                className="group flex h-full flex-col border-transparent bg-white p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#eadfda] hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <CardTitle className="font-['Manrope:Medium',sans-serif] text-[24px] leading-[1.3] text-[#151515]">
                    {solution.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                  <CardDescription className="mt-[12px] text-[16px] leading-[1.6] text-[#777]">
                    {solution.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-0 pt-[20px]">
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-[8px] text-[14px] font-medium tracking-[1px] text-[#9B3139] transition-opacity hover:opacity-70"
                  >
                    View Solution
                    <ArrowRight className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center py-[80px] md:py-[120px]">
        <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <div className="mb-[48px] flex max-w-[760px] flex-col gap-[16px]">
            <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
              Our Approach
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#777] md:text-[18px]">
              A structured process that keeps strategy, design, and delivery
              aligned from kickoff through launch.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-4">
            {approachPillars.map((pillar) => (
              <Card key={pillar.title} className="border-[#f0e6db] bg-white p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-[20px] leading-[1.3] text-[#151515]">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="mt-[10px] text-[15px] leading-[1.6] text-[#777]">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center bg-[#fafafa] py-[80px] md:py-[120px]">
        <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-[40px] lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
                Capabilities Bridge
              </h2>
              <p className="max-w-[720px] text-[16px] leading-[1.6] text-[#777] md:text-[18px]">
                Every solution is powered by core service capabilities. Explore
                the service areas that support strategy, design, engineering,
                and optimization.
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              {capabilities.map((capability) => (
                <Link
                  key={capability.label}
                  to={capability.href}
                  className="group flex items-center justify-between rounded-[16px] border border-[#eadfda] bg-white px-5 py-4 text-[15px] text-[#4A3F37] transition-colors hover:bg-[#fff8f0]"
                >
                  {capability.label}
                  <ArrowRight className="size-4 text-[#9B3139]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center py-[80px] md:py-[120px]">
        <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
          <Card className="border-[#eadfda] bg-[#fff8f0] p-8 md:p-12">
            <CardHeader className="p-0">
              <CardTitle className="font-['Manrope:Light',sans-serif] text-[30px] leading-[1.2] text-[#151515] md:text-[42px]">
                Trusted for More Than 30 Years
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="mt-[16px] max-w-[820px] text-[16px] leading-[1.7] text-[#4A3F37] md:text-[18px]">
                Since 1995, MIS, Inc. has partnered with organizations that need
                serious digital execution, not templates. We combine strategy,
                technical depth, and long-term support to build systems that
                continue to perform as your business evolves.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex w-full justify-center bg-[#fafafa] py-[100px] md:py-[140px]">
        <div className="w-full max-w-[900px] px-5 text-center md:px-8 lg:px-12">
          <h2 className="font-['Manrope:Light',sans-serif] text-[36px] leading-[1.1] text-[#151515] md:text-[52px]">
            Build the Right Solution Next
          </h2>
          <p className="mx-auto mt-[16px] max-w-[700px] text-[16px] leading-[1.6] text-[#777] md:text-[20px]">
            Tell us your goals, constraints, and timeline. We’ll map the right
            solution path and delivery plan for your team.
          </p>
          <div className="mt-[32px] flex justify-center">
            <Button className="rounded-full px-8 py-6 text-[14px] tracking-[1px]">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
