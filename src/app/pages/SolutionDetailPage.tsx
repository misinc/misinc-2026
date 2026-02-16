import { Link, useParams } from "react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";

type Capability = {
  title: string;
  description: string;
  href: string;
};

type SolutionContent = {
  audience: string;
  heroTitle: string;
  heroDescription: string;
  painTitle: string;
  pains: string[];
  outcomes: string[];
  capabilities: Capability[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
  metricLabel: string;
  metricValue: string;
};

const solutionContentMap: Record<string, SolutionContent> = {
  "small-businesses": {
    audience: "Small Businesses",
    heroTitle: "Web & Digital Growth Solutions for Small Businesses",
    heroDescription:
      "Turn your website into a dependable growth engine with better lead flow, clearer messaging, and systems that reduce day-to-day operational friction.",
    painTitle: "Common Growth Challenges Small Businesses Face",
    pains: [
      "Inconsistent lead quality from outdated websites",
      "Limited internal bandwidth to manage digital systems",
      "Disconnected tools causing manual, repetitive work",
      "Low visibility in search and AI-powered discovery",
    ],
    outcomes: [
      "Higher-quality inbound inquiries from ideal customers",
      "Faster response workflows with integrated automations",
      "Stronger local and regional digital visibility",
      "A scalable website foundation aligned to growth goals",
    ],
    capabilities: [
      {
        title: "Albuquerque Web Design",
        description:
          "Conversion-focused website design that reflects your brand and improves action rates.",
        href: "/services/albuquerque-web-design",
      },
      {
        title: "Webflow Development",
        description:
          "Fast, maintainable implementation with CMS control for your team.",
        href: "/services/webflow-development",
      },
      {
        title: "AI Consulting",
        description:
          "Practical AI opportunities that save time and improve customer experience.",
        href: "/services/ai-consulting",
      },
      {
        title: "AEO Services",
        description:
          "Optimization for both traditional search and AI answer engines.",
        href: "/services/aeo-services",
      },
    ],
    testimonialQuote:
      "MIS helped us simplify our digital stack and improve qualified leads without adding complexity.",
    testimonialName: "Operations Director",
    testimonialRole: "Local Services Company",
    metricLabel: "Qualified Lead Growth",
    metricValue: "+42%",
  },
  "real-estate": {
    audience: "Real Estate",
    heroTitle: "Web & Digital Growth Solutions for Real Estate Teams",
    heroDescription:
      "Build a high-trust digital presence that captures, nurtures, and converts property interest into measurable pipeline growth.",
    painTitle: "Common Real Estate Digital Challenges",
    pains: [
      "High traffic but low lead-to-appointment conversion",
      "Fragmented listing, CRM, and follow-up systems",
      "Difficulty standing out in competitive local markets",
      "Slow content updates across active property pages",
    ],
    outcomes: [
      "Improved conversion from listings to consultations",
      "Faster handoff between website and sales workflows",
      "More authority in local search and AI visibility",
      "Streamlined content operations for active inventory",
    ],
    capabilities: [
      {
        title: "Web Design & Redesign",
        description: "Trust-oriented layouts for high-consideration buying journeys.",
        href: "/services/albuquerque-web-design",
      },
      {
        title: "Custom Applications",
        description: "Custom listing and inquiry flows integrated with your systems.",
        href: "/services/custom-applications",
      },
      {
        title: "Square Website Design",
        description: "Commerce-capable experiences for brokerages and service upsells.",
        href: "/services/square-website-design",
      },
      {
        title: "AEO Services",
        description: "Content strategy optimized for modern AI-driven discovery.",
        href: "/services/aeo-services",
      },
    ],
    testimonialQuote:
      "The new experience made our team look more premium and improved inquiry quality almost immediately.",
    testimonialName: "Managing Broker",
    testimonialRole: "Regional Real Estate Group",
    metricLabel: "Inquiry-to-Meeting Rate",
    metricValue: "+33%",
  },
  nonprofits: {
    audience: "Nonprofits",
    heroTitle: "Web & Digital Growth Solutions for Nonprofits",
    heroDescription:
      "Strengthen donor trust, increase program visibility, and improve supporter engagement with a mission-centered digital foundation.",
    painTitle: "Common Nonprofit Challenges",
    pains: [
      "Mission impact is hard to communicate online",
      "Donation and volunteer paths are difficult to navigate",
      "Limited capacity for content and technical updates",
      "Disconnected tools for campaigns and reporting",
    ],
    outcomes: [
      "Improved donation and volunteer conversion paths",
      "Clearer storytelling tied to measurable impact",
      "Operational efficiency through integrated workflows",
      "A scalable platform for campaigns and long-term growth",
    ],
    capabilities: [
      {
        title: "Webflow Development",
        description: "Flexible CMS architecture for campaigns, programs, and stories.",
        href: "/services/webflow-development",
      },
      {
        title: "AI Consulting",
        description: "Automated supporter communications and internal workflow support.",
        href: "/services/ai-consulting",
      },
      {
        title: "AEO Services",
        description: "Increase discoverability for mission topics in search and AI.",
        href: "/services/aeo-services",
      },
      {
        title: "Custom Applications",
        description: "Program and donor workflow tools built around your operations.",
        href: "/services/custom-applications",
      },
    ],
    testimonialQuote:
      "MIS translated our mission into a clearer digital experience that improved supporter action.",
    testimonialName: "Executive Director",
    testimonialRole: "Community Nonprofit",
    metricLabel: "Donation Conversion Lift",
    metricValue: "+28%",
  },
  "professional-services": {
    audience: "Professional Services",
    heroTitle: "Web & Digital Growth Solutions for Professional Services",
    heroDescription:
      "Position your firm as the clear strategic choice with a website that supports credibility, trust, and complex buying decisions.",
    painTitle: "Common Professional Services Challenges",
    pains: [
      "Generic web presence that fails to communicate expertise",
      "Long sales cycles with weak digital nurture touchpoints",
      "Difficult content governance across practice areas",
      "Low differentiation in crowded competitive markets",
    ],
    outcomes: [
      "Stronger authority and buyer confidence online",
      "Better lead qualification through clear positioning",
      "Structured content systems for scalable thought leadership",
      "Improved digital performance across target service lines",
    ],
    capabilities: [
      {
        title: "Albuquerque Web Design",
        description: "Premium positioning and conversion strategy for high-trust buyers.",
        href: "/services/albuquerque-web-design",
      },
      {
        title: "Webflow Development",
        description: "Maintainable multi-practice content architecture and governance.",
        href: "/services/webflow-development",
      },
      {
        title: "AEO Services",
        description: "Authority-building content for search and AI response visibility.",
        href: "/services/aeo-services",
      },
      {
        title: "AI Consulting",
        description: "Internal process and client-experience workflow automation.",
        href: "/services/ai-consulting",
      },
    ],
    testimonialQuote:
      "Our new digital experience finally reflects the level of strategy and quality we deliver to clients.",
    testimonialName: "Partner",
    testimonialRole: "Advisory Firm",
    metricLabel: "Qualified Consultation Requests",
    metricValue: "+37%",
  },
  "startups-saas": {
    audience: "Startups & SaaS",
    heroTitle: "Web & Digital Growth Solutions for Startups & SaaS",
    heroDescription:
      "Accelerate traction with conversion-focused positioning, faster experimentation, and scalable growth systems aligned to your go-to-market strategy.",
    painTitle: "Common Startup & SaaS Growth Challenges",
    pains: [
      "Messaging that does not clearly communicate product value",
      "Low trial or demo conversion from website traffic",
      "Limited resources for rapid web and funnel iteration",
      "Weak visibility in high-intent category searches",
    ],
    outcomes: [
      "Clearer product positioning and conversion pathways",
      "Higher activation rates from demo and trial funnels",
      "Faster campaign and content iteration cycles",
      "Improved demand capture across search and AI channels",
    ],
    capabilities: [
      {
        title: "Webflow Development",
        description: "High-velocity landing and product marketing page operations.",
        href: "/services/webflow-development",
      },
      {
        title: "Custom Applications",
        description: "Workflow and product-adjacent tools tailored to your GTM motion.",
        href: "/services/custom-applications",
      },
      {
        title: "AI Consulting",
        description: "Automation for onboarding, support, and growth experiments.",
        href: "/services/ai-consulting",
      },
      {
        title: "AEO Services",
        description: "Visibility strategy for AI-assisted discovery and category queries.",
        href: "/services/aeo-services",
      },
    ],
    testimonialQuote:
      "MIS gave us a clearer growth system that helped us move from traffic to consistent activation.",
    testimonialName: "Head of Growth",
    testimonialRole: "B2B SaaS Startup",
    metricLabel: "Demo Conversion Increase",
    metricValue: "+46%",
  },
};

function NotFoundState() {
  return (
    <section className="flex w-full justify-center py-[120px]">
      <div className="w-full max-w-[900px] px-5 text-center md:px-8 lg:px-12">
        <h1 className="font-['Manrope:Light',sans-serif] text-[40px] leading-[1.1] text-[#151515] md:text-[56px]">
          Solution Not Found
        </h1>
        <p className="mx-auto mt-[16px] max-w-[680px] text-[16px] leading-[1.6] text-[#777] md:text-[20px]">
          The requested solution page is not available yet. Explore the solutions
          overview to choose an audience track.
        </p>
        <div className="mt-[28px]">
          <Button className="rounded-full px-8 py-6 text-[14px] tracking-[1px]" asChild>
            <Link to="/solutions">Back to Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = slug ? solutionContentMap[slug] : undefined;

  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        {!solution ? (
          <NotFoundState />
        ) : (
          <>
            <section className="flex w-full justify-center pb-[80px] pt-[64px] md:pb-[120px] md:pt-[100px]">
              <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
                <div className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-[24px] text-center">
                  <p className="text-[12px] font-normal uppercase tracking-[1px] text-[#9B3139]">
                    {solution.audience}
                  </p>
                  <h1 className="font-['Manrope:Light',sans-serif] text-[36px] leading-[1.1] text-[#151515] md:text-[56px] lg:text-[64px]">
                    {solution.heroTitle}
                  </h1>
                  <p className="max-w-[760px] text-[16px] leading-[1.6] text-[#4A3F37] md:text-[20px]">
                    {solution.heroDescription}
                  </p>
                  <div className="flex flex-col gap-[12px] pt-[8px] sm:flex-row">
                    <Button className="rounded-full px-6 py-6 text-[14px] tracking-[1px]" asChild>
                      <Link to="/#contact">Schedule a Strategy Call</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-[#9B3139]/60 px-6 py-6 text-[14px] tracking-[1px] text-[#9B3139] hover:bg-black/5"
                      asChild
                    >
                      <Link to="/#services">View Related Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center bg-[#fafafa] py-[80px] md:py-[120px]">
              <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
                <div className="mb-[36px] flex flex-col gap-[14px]">
                  <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
                    {solution.painTitle}
                  </h2>
                  <p className="max-w-[700px] text-[16px] leading-[1.6] text-[#777] md:text-[18px]">
                    We focus on removing friction and building measurable outcomes
                    for {solution.audience.toLowerCase()}.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
                  <Card className="border-[#f0e6db] bg-white p-6 md:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-[22px] leading-[1.3] text-[#151515]">
                        Typical Pain Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-[14px]">
                      <ul className="space-y-[10px] text-[15px] leading-[1.6] text-[#4A3F37]">
                        {solution.pains.map((pain) => (
                          <li key={pain} className="flex gap-[10px]">
                            <span aria-hidden="true" className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9B3139]" />
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-[#f0e6db] bg-white p-6 md:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-[22px] leading-[1.3] text-[#151515]">
                        Key Outcomes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-[14px]">
                      <ul className="space-y-[10px] text-[15px] leading-[1.6] text-[#4A3F37]">
                        {solution.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-[10px]">
                            <CheckCircle2 aria-hidden="true" className="mt-[2px] h-5 w-5 shrink-0 text-[#9B3139]" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center py-[80px] md:py-[120px]">
              <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
                <div className="mb-[36px] flex flex-col gap-[14px]">
                  <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
                    How We Help
                  </h2>
                  <p className="max-w-[740px] text-[16px] leading-[1.6] text-[#777] md:text-[18px]">
                    A focused stack of strategy, design, engineering, and optimization
                    capabilities designed for {solution.audience.toLowerCase()}.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
                  {solution.capabilities.map((capability) => (
                    <Card
                      key={capability.title}
                      className="group border-transparent bg-[#fafafa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#eadfda] hover:bg-white hover:shadow-lg"
                    >
                      <CardHeader className="p-0">
                        <CardTitle className="text-[22px] leading-[1.3] text-[#151515]">
                          {capability.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-[10px]">
                        <CardDescription className="text-[15px] leading-[1.6] text-[#777]">
                          {capability.description}
                        </CardDescription>
                        <Link
                          to={capability.href}
                          className="mt-[16px] inline-flex items-center gap-[8px] text-[14px] font-medium tracking-[1px] text-[#9B3139] transition-opacity hover:opacity-70"
                        >
                          View Service
                          <ArrowRight className="size-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center bg-[#fafafa] py-[80px] md:py-[120px]">
              <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
                <div className="mb-[36px] flex flex-col gap-[14px]">
                  <h2 className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[48px]">
                    Trusted by Clients Like You
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[1.2fr_1fr]">
                  <Card className="border-[#eadfda] bg-white p-6 md:p-8">
                    <CardContent className="p-0">
                      <blockquote className="text-[20px] leading-[1.5] text-[#2A2420] md:text-[24px]">
                        “{solution.testimonialQuote}”
                      </blockquote>
                      <p className="mt-[16px] text-[14px] text-[#777]">
                        {solution.testimonialName} • {solution.testimonialRole}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#eadfda] bg-[#fff8f0] p-6 md:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-[18px] leading-[1.3] text-[#151515]">
                        Mini Case Outcome
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-[10px]">
                      <p className="text-[42px] leading-[1.1] text-[#9B3139] md:text-[52px]">
                        {solution.metricValue}
                      </p>
                      <p className="mt-[8px] text-[15px] leading-[1.5] text-[#4A3F37]">
                        {solution.metricLabel}
                      </p>
                      <p className="mt-[14px] text-[14px] leading-[1.6] text-[#777]">
                        Add audience-relevant client logo here.
                      </p>
                      <img
                        src="https://via.placeholder.com/320x120"
                        alt={`${solution.audience} client logo placeholder`}
                        className="mt-[10px] h-[70px] w-auto rounded-sm border border-[#eadfda]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center py-[80px] md:py-[120px]">
              <div className="w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[1.2fr_1fr]">
                  <Card className="border-[#eadfda] bg-white p-6 md:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="font-['Manrope:Light',sans-serif] text-[32px] leading-[1.2] text-[#151515] md:text-[44px]">
                        Why MIS Is the Right Partner
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-[12px]">
                      <p className="text-[16px] leading-[1.7] text-[#4A3F37] md:text-[18px]">
                        With 30 years of experience and deep New Mexico market knowledge,
                        MIS, Inc. combines strategic planning with technical execution to
                        help organizations build digital systems that compound value over time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-[#eadfda] bg-[#fafafa] p-6 md:p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-[18px] leading-[1.3] text-[#151515]">
                        Key Differentiators
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-[12px]">
                      <ul className="space-y-[10px] text-[15px] leading-[1.6] text-[#4A3F37]">
                        <li className="flex gap-[10px]">
                          <span aria-hidden="true" className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9B3139]" />
                          <span>Webflow and Square implementation expertise</span>
                        </li>
                        <li className="flex gap-[10px]">
                          <span aria-hidden="true" className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9B3139]" />
                          <span>AI workflow design for real operational efficiency</span>
                        </li>
                        <li className="flex gap-[10px]">
                          <span aria-hidden="true" className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9B3139]" />
                          <span>AEO-first content strategy and technical SEO depth</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="flex w-full justify-center bg-[#fafafa] py-[100px] md:py-[140px]">
              <div className="w-full max-w-[900px] px-5 text-center md:px-8 lg:px-12">
                <h2 className="font-['Manrope:Light',sans-serif] text-[36px] leading-[1.1] text-[#151515] md:text-[52px]">
                  Ready to Transform Your Digital Strategy?
                </h2>
                <p className="mx-auto mt-[16px] max-w-[700px] text-[16px] leading-[1.6] text-[#777] md:text-[20px]">
                  Get a focused roadmap for your audience, goals, and growth stage
                  with clear next steps and execution priorities.
                </p>
                <div className="mt-[30px] flex flex-col justify-center gap-[12px] sm:flex-row">
                  <Button className="rounded-full px-8 py-6 text-[14px] tracking-[1px]" asChild>
                    <Link to="/#contact">Schedule a Call</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#9B3139]/60 px-8 py-6 text-[14px] tracking-[1px] text-[#9B3139] hover:bg-black/5"
                    asChild
                  >
                    <Link to="/#case-studies">View Related Case Studies</Link>
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <SiteFooter />
    </SiteShell>
  );
}

