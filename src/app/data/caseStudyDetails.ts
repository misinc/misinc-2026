export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  serviceLine: string;
  timeline: string;
  heroSummary: string;
  heroImage: string;
  heroImageAlt: string;
  startingChallenge: string;
  keyResults: string[];
  clientBackground: {
    companySize: string;
    overview: string;
    businessContext: string[];
  };
  challenge: {
    summary: string;
    constraints: string[];
  };
  solution: {
    summary: string;
    strategyDecisions: string[];
    technologyUsed: string[];
    implementationSteps: string[];
  };
  results: {
    summary: string;
    metrics: CaseStudyMetric[];
    businessOutcomes: string[];
  };
  testimonial?: CaseStudyTestimonial;
  relatedServiceSlugs: string[];
  relatedSolutionSlug: string;
  relatedResourceLinks: { label: string; href: string }[];
  relatedCaseStudySlugs: string[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  publishedDate: string;
  authorName: string;
};

import caseStudyImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import caseStudyImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import caseStudyImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import caseStudyImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import caseStudyImageFive from "@/assets/93bdf867d705af4cd05e62b9305f28776e6b5532.png";
import caseStudyImageSix from "@/assets/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  {
    slug: "brand-x-growth-program",
    title: "How Brand X Increased Qualified Leads by 47% in 6 Months",
    clientName: "Brand X",
    industry: "Professional Services",
    serviceLine: "Web Design & AEO Strategy",
    timeline: "6 months",
    heroSummary:
      "A full website and search-intent program that improved lead quality and predictable pipeline growth.",
    heroImage: caseStudyImageOne,
    heroImageAlt: "Brand X lead performance chart from case study results dashboard",
    startingChallenge:
      "High traffic but low conversion from decision-stage visitors on key service pages.",
    keyResults: [
      "+47% qualified leads",
      "+31% consultation booking rate",
      "-22% bounce rate on priority pages",
    ],
    clientBackground: {
      companySize: "Mid-market team with 45+ employees",
      overview:
        "Brand X delivers high-value advisory services with long decision cycles and multiple stakeholders.",
      businessContext: [
        "Sales depended on higher-quality consultations, not top-of-funnel volume.",
        "The prior site positioned capabilities but did not support intent-based conversion paths.",
      ],
    },
    challenge: {
      summary:
        "The business had strong service delivery but lacked a digital journey aligned to buyer evaluation behavior.",
      constraints: [
        "Needed to preserve active campaigns during redesign.",
        "Required stronger authority signals without inflating page complexity.",
        "Sales team needed clearer qualification context from inbound forms.",
      ],
    },
    solution: {
      summary:
        "MIS rebuilt content structure and conversion pathways around high-intent service decisions.",
      strategyDecisions: [
        "Mapped service pages by buyer stage to reduce friction in evaluation.",
        "Added structured answer content to strengthen AI and search interpretation.",
        "Prioritized trust components around outcomes, proof points, and process clarity.",
      ],
      technologyUsed: [
        "Webflow component architecture",
        "Schema implementation for answer engines",
        "Analytics event mapping for conversion diagnostics",
      ],
      implementationSteps: [
        "Reframed service messaging around business outcomes.",
        "Redesigned key templates for clear CTA progression.",
        "Integrated reporting for lead quality and conversion trend tracking.",
      ],
    },
    results: {
      summary:
        "The engagement produced stronger buyer confidence and measurable lead-quality improvements within two quarters.",
      metrics: [
        { label: "Qualified Leads", value: "+47%" },
        { label: "Consultation Conversion", value: "+31%" },
        { label: "Priority Page Bounce Rate", value: "-22%" },
      ],
      businessOutcomes: [
        "More predictable monthly pipeline from organic and referral traffic.",
        "Higher fit rate in discovery calls.",
        "Clearer reporting visibility for leadership and sales.",
      ],
    },
    testimonial: {
      quote:
        "MIS translated our positioning into a high-performing site that finally brought in the right prospects.",
      name: "Jordan Pierce",
      title: "Marketing Director",
      company: "Brand X",
    },
    relatedServiceSlugs: ["web-design", "aeo-services", "seo-strategy"],
    relatedSolutionSlug: "professional-services",
    relatedResourceLinks: [
      { label: "Website Redesign Checklist", href: "/guides/website-redesign-checklist" },
      { label: "AEO Basics Guide", href: "/blog/aeo-basics-structured-content" },
    ],
    relatedCaseStudySlugs: ["client-y-enterprise-webflow-ai", "client-z-aeo-visibility"],
    seoTitle: "How Brand X Increased Qualified Leads by 47% | MIS Case Study",
    seoDescription:
      "Read how MIS helped Brand X increase qualified leads by 47% through web design, intent strategy, and AEO-focused page architecture.",
    canonicalPath: "/case-studies/brand-x-growth-program",
    publishedDate: "2025-10-11",
    authorName: "MIS, Inc.",
  },
  {
    slug: "client-y-enterprise-webflow-ai",
    title: "How Client Y Improved Publishing Velocity by 80% with Webflow + AI",
    clientName: "Client Y",
    industry: "B2B Technology",
    serviceLine: "Webflow Development & AI Automation",
    timeline: "5 months",
    heroSummary:
      "A scalable website and automation build that reduced delivery friction across marketing operations.",
    heroImage: caseStudyImageTwo,
    heroImageAlt: "Client Y publishing workflow dashboard after Webflow and AI implementation",
    startingChallenge:
      "Slow publishing cycles and fragmented systems created campaign delays and inconsistent quality.",
    keyResults: [
      "+80% publishing velocity",
      "-35% manual content QA time",
      "+24% landing page conversion rate",
    ],
    clientBackground: {
      companySize: "Regional B2B team with 60+ employees",
      overview:
        "Client Y operates in a fast-moving category where campaign speed and consistency directly affect pipeline.",
      businessContext: [
        "Marketing owned execution but lacked a maintainable publishing system.",
        "Content updates required repeated engineering support and rework.",
      ],
    },
    challenge: {
      summary:
        "The website stack did not support rapid launches, and manual review cycles introduced avoidable delays.",
      constraints: [
        "Could not disrupt active campaign timelines.",
        "Needed governance standards for multiple internal contributors.",
        "Required cleaner handoff between strategy and production teams.",
      ],
    },
    solution: {
      summary:
        "MIS built a structured Webflow system and layered AI-assisted workflows for faster content operations.",
      strategyDecisions: [
        "Standardized templates around campaign repeatability.",
        "Integrated AI-assisted drafting with human review controls.",
        "Implemented modular QA checkpoints for quality consistency.",
      ],
      technologyUsed: [
        "Webflow CMS and reusable component patterns",
        "Automation orchestration for content workflows",
        "Performance and conversion analytics stack",
      ],
      implementationSteps: [
        "Rebuilt collection models and publishing controls.",
        "Launched new landing templates with conversion instrumentation.",
        "Enabled operational playbooks for internal team adoption.",
      ],
    },
    results: {
      summary:
        "Client Y achieved faster launches, stronger consistency, and measurable conversion improvement from the new system.",
      metrics: [
        { label: "Publishing Velocity", value: "+80%" },
        { label: "Manual QA Time", value: "-35%" },
        { label: "Landing Page Conversion", value: "+24%" },
      ],
      businessOutcomes: [
        "Campaign teams shipped with fewer bottlenecks.",
        "Leadership gained clearer performance visibility.",
        "Operations scaled without proportional headcount growth.",
      ],
    },
    testimonial: {
      quote:
        "MIS gave us a system our team can actually run with. We ship faster and with more confidence.",
      name: "Alyssa Tran",
      title: "Head of Marketing Operations",
      company: "Client Y",
    },
    relatedServiceSlugs: ["webflow-development", "ai-consulting", "web-design"],
    relatedSolutionSlug: "startups-saas",
    relatedResourceLinks: [
      { label: "Webflow vs WordPress Guide", href: "/guides/webflow-vs-wordpress" },
      { label: "AI for Operations Workflows", href: "/blog/ai-for-operations-workflows" },
    ],
    relatedCaseStudySlugs: ["operations-portal-modernization", "brand-x-growth-program"],
    seoTitle: "Webflow + AI Case Study: 80% Faster Publishing | MIS",
    seoDescription:
      "See how MIS helped Client Y improve publishing velocity by 80% using scalable Webflow architecture and AI-assisted content operations.",
    canonicalPath: "/case-studies/client-y-enterprise-webflow-ai",
    publishedDate: "2025-09-21",
    authorName: "MIS, Inc.",
  },
  {
    slug: "client-z-aeo-visibility",
    title: "How Client Z Increased AI Answer Mentions by 62%",
    clientName: "Client Z",
    industry: "Healthcare Services",
    serviceLine: "AEO / Search Visibility",
    timeline: "4 months",
    heroSummary:
      "A structured content and schema program that improved answer-engine visibility and discovery quality.",
    heroImage: caseStudyImageThree,
    heroImageAlt: "Visibility trend report showing growth in AI answer engine mentions for Client Z",
    startingChallenge:
      "Strong expertise existed, but answer engines and search systems underrepresented the brand in discovery.",
    keyResults: [
      "+62% AI answer mentions",
      "+36% non-branded search traffic",
      "+18% consultation requests",
    ],
    clientBackground: {
      companySize: "Healthcare organization with 80+ staff",
      overview:
        "Client Z provides specialized services where trust, clarity, and accurate topic coverage are critical.",
      businessContext: [
        "Discovery increasingly happened through AI-mediated experiences.",
        "Organic performance was uneven across key service topics.",
      ],
    },
    challenge: {
      summary:
        "Pages were informative but not structured for extraction by answer engines or for intent-heavy service comparisons.",
      constraints: [
        "Messaging had to remain compliant and precise.",
        "Changes needed to fit existing editorial workflows.",
        "Site updates required minimal disruption to active campaigns.",
      ],
    },
    solution: {
      summary:
        "MIS executed an answer-first content framework supported by schema and internal linking improvements.",
      strategyDecisions: [
        "Built content clusters around specific user questions and decision intent.",
        "Mapped entities and page sections for clearer machine interpretation.",
        "Strengthened semantic relationships between services, solutions, and resources.",
      ],
      technologyUsed: [
        "Structured data schema framework",
        "Content architecture and internal-link strategy",
        "Search performance and answer visibility monitoring",
      ],
      implementationSteps: [
        "Reworked priority pages into question-led answer sections.",
        "Deployed breadcrumb and article-oriented schema.",
        "Published supporting guides to reinforce topical authority.",
      ],
    },
    results: {
      summary:
        "The program increased answer-engine inclusion and improved high-intent traffic quality.",
      metrics: [
        { label: "AI Answer Mentions", value: "+62%" },
        { label: "Non-Branded Organic Traffic", value: "+36%" },
        { label: "Consultation Requests", value: "+18%" },
      ],
      businessOutcomes: [
        "Stronger brand presence in answer-led discovery.",
        "Higher quality inbound visits from problem-aware users.",
        "Clearer content governance for ongoing AEO improvements.",
      ],
    },
    relatedServiceSlugs: ["aeo-services", "seo-strategy", "webflow-development"],
    relatedSolutionSlug: "professional-services",
    relatedResourceLinks: [
      { label: "AEO Basics: Structured Content", href: "/blog/aeo-basics-structured-content" },
      { label: "Improve Local Search Visibility", href: "/blog/improve-local-search-visibility" },
    ],
    relatedCaseStudySlugs: ["brand-x-growth-program", "multi-location-seo-growth"],
    seoTitle: "AEO Case Study: 62% More AI Answer Mentions | MIS",
    seoDescription:
      "Read how MIS increased AI answer mentions by 62% for Client Z through structured content, schema strategy, and semantic internal linking.",
    canonicalPath: "/case-studies/client-z-aeo-visibility",
    publishedDate: "2025-08-14",
    authorName: "MIS, Inc.",
  },
  {
    slug: "operations-portal-modernization",
    title: "How an Operations Portal Cut Manual Work by 38%",
    clientName: "Operations Client",
    industry: "Logistics",
    serviceLine: "Custom Application Solutions",
    timeline: "7 months",
    heroSummary:
      "A secure internal system that unified fragmented workflows and improved operational throughput.",
    heroImage: caseStudyImageFour,
    heroImageAlt: "Operations portal interface that replaced manual spreadsheet-driven workflows",
    startingChallenge:
      "Manual processes and disconnected tools caused delays, inconsistent reporting, and staff overload.",
    keyResults: [
      "-38% manual effort",
      "+44% workflow completion speed",
      "-27% processing errors",
    ],
    clientBackground: {
      companySize: "Operations team with 120+ distributed staff",
      overview:
        "The client managed high-volume operational handoffs that required speed and reliability.",
      businessContext: [
        "Critical tasks were handled across spreadsheets and email.",
        "Operational visibility was limited for management teams.",
      ],
    },
    challenge: {
      summary:
        "Legacy process design made scale difficult and introduced preventable quality and timing risks.",
      constraints: [
        "Needed phased rollout without business interruption.",
        "Role-based access controls were required.",
        "Integration with existing systems was mandatory.",
      ],
    },
    solution: {
      summary:
        "MIS designed and launched a custom portal with workflow automation, visibility controls, and system integrations.",
      strategyDecisions: [
        "Prioritized highest-friction workflows for first release.",
        "Used modular architecture for phased feature expansion.",
        "Implemented dashboard reporting tied to operational KPIs.",
      ],
      technologyUsed: [
        "Custom web application framework",
        "Role-based access and audit logging",
        "API integrations with existing business systems",
      ],
      implementationSteps: [
        "Mapped workflow dependencies with operations stakeholders.",
        "Delivered phased portal releases with training checkpoints.",
        "Added reporting views for manager and executive visibility.",
      ],
    },
    results: {
      summary:
        "The portal reduced repetitive work, improved throughput, and gave leadership clearer execution visibility.",
      metrics: [
        { label: "Manual Workload", value: "-38%" },
        { label: "Workflow Completion Speed", value: "+44%" },
        { label: "Processing Errors", value: "-27%" },
      ],
      businessOutcomes: [
        "Operations teams focused on higher-value coordination work.",
        "Managers gained reliable weekly performance reporting.",
        "The organization established a scalable systems foundation.",
      ],
    },
    relatedServiceSlugs: ["custom-applications", "ai-consulting", "webflow-development"],
    relatedSolutionSlug: "small-businesses",
    relatedResourceLinks: [
      { label: "AI for Small Businesses Guide", href: "/guides/ai-for-small-businesses" },
      { label: "Using AI To Reduce Bottlenecks", href: "/blog/ai-for-operations-workflows" },
    ],
    relatedCaseStudySlugs: ["client-y-enterprise-webflow-ai", "fintech-onboarding-rebuild"],
    seoTitle: "Custom App Case Study: 38% Less Manual Work | MIS",
    seoDescription:
      "See how MIS built a custom operations portal that reduced manual work by 38% and improved workflow speed across distributed teams.",
    canonicalPath: "/case-studies/operations-portal-modernization",
    publishedDate: "2025-07-05",
    authorName: "MIS, Inc.",
  },
  {
    slug: "multi-location-seo-growth",
    title: "How a Multi-Location Brand Grew Non-Branded Traffic by 54%",
    clientName: "Multi-Location Services Brand",
    industry: "Home Services",
    serviceLine: "SEO & Local Visibility",
    timeline: "6 months",
    heroSummary:
      "A location-page architecture and internal-link strategy that increased non-branded search discovery.",
    heroImage: caseStudyImageFive,
    heroImageAlt: "Location-based SEO performance dashboard showing non-branded traffic growth",
    startingChallenge:
      "The site lacked consistent location content structure and underperformed for high-intent local service terms.",
    keyResults: [
      "+54% non-branded sessions",
      "+22% qualified calls",
      "+17% local conversion rate",
    ],
    clientBackground: {
      companySize: "Regional provider with multiple service locations",
      overview:
        "The business depended on location-level discoverability and lead quality across multiple markets.",
      businessContext: [
        "Existing pages were inconsistent and difficult to scale.",
        "Internal links did not reinforce service and location intent.",
      ],
    },
    challenge: {
      summary:
        "Without consistent location architecture, the brand failed to capture qualified intent in target markets.",
      constraints: [
        "Needed rollout across multiple locations quickly.",
        "Content had to remain unique and high quality.",
        "The team required a repeatable template workflow.",
      ],
    },
    solution: {
      summary:
        "MIS launched a location-template system with structured entities and improved semantic linking.",
      strategyDecisions: [
        "Standardized page templates around conversion and local trust signals.",
        "Linked supporting resources to service and location clusters.",
        "Improved metadata and schema consistency across local pages.",
      ],
      technologyUsed: [
        "Template-driven page system",
        "Schema and metadata framework",
        "Search analytics and local performance tracking",
      ],
      implementationSteps: [
        "Audited top-performing and underperforming location pages.",
        "Rebuilt location structures with intent-oriented copy blocks.",
        "Launched internal-link updates to support crawl depth and relevance.",
      ],
    },
    results: {
      summary:
        "The program expanded local visibility and generated stronger lead quality across target markets.",
      metrics: [
        { label: "Non-Branded Sessions", value: "+54%" },
        { label: "Qualified Calls", value: "+22%" },
        { label: "Local Conversion Rate", value: "+17%" },
      ],
      businessOutcomes: [
        "Higher discovery for valuable local service terms.",
        "Improved conversion consistency across locations.",
        "A scalable framework for future regional expansion.",
      ],
    },
    relatedServiceSlugs: ["seo-strategy", "web-design", "aeo-services"],
    relatedSolutionSlug: "small-businesses",
    relatedResourceLinks: [
      { label: "Improve Local Search Visibility", href: "/blog/improve-local-search-visibility" },
      { label: "Cost of Web Design in Albuquerque", href: "/guides/web-design-cost-albuquerque" },
    ],
    relatedCaseStudySlugs: ["client-z-aeo-visibility", "brand-x-growth-program"],
    seoTitle: "Local SEO Case Study: 54% More Non-Branded Traffic | MIS",
    seoDescription:
      "Read how MIS helped a multi-location brand grow non-branded traffic by 54% using scalable location architecture and SEO strategy.",
    canonicalPath: "/case-studies/multi-location-seo-growth",
    publishedDate: "2025-06-22",
    authorName: "MIS, Inc.",
  },
  {
    slug: "fintech-onboarding-rebuild",
    title: "How a Fintech Product Increased Activation by 29%",
    clientName: "Fintech Platform Team",
    industry: "Fintech",
    serviceLine: "Product UX & Custom Application Strategy",
    timeline: "5 months",
    heroSummary:
      "A product onboarding rebuild that improved activation by reducing friction and increasing clarity.",
    heroImage: caseStudyImageSix,
    heroImageAlt: "Fintech onboarding flow screens demonstrating clearer activation journey",
    startingChallenge:
      "High drop-off during onboarding limited user activation and increased support requests.",
    keyResults: [
      "+29% activation rate",
      "-21% onboarding abandonment",
      "-18% support ticket volume",
    ],
    clientBackground: {
      companySize: "Product team in growth stage",
      overview:
        "The fintech team needed to improve new-user outcomes without increasing implementation complexity.",
      businessContext: [
        "Acquisition volume was healthy but activation lagged.",
        "Support and product teams needed better user journey visibility.",
      ],
    },
    challenge: {
      summary:
        "The onboarding journey created friction at key trust and comprehension points for new users.",
      constraints: [
        "Product changes had to align with compliance requirements.",
        "Development effort was constrained to two release cycles.",
        "Success metrics had to be tied to activation and retention trends.",
      ],
    },
    solution: {
      summary:
        "MIS redesigned onboarding pathways and introduced event-level optimization for rapid iteration.",
      strategyDecisions: [
        "Prioritized highest-dropoff stages with targeted redesign blocks.",
        "Strengthened explanatory microcopy and trust cues during setup.",
        "Introduced analytics checkpoints to validate each release cycle.",
      ],
      technologyUsed: [
        "Custom onboarding flow design system",
        "Event tracking and funnel analytics",
        "A/B testing for onboarding decision points",
      ],
      implementationSteps: [
        "Mapped baseline user journey and abandonment events.",
        "Released progressive onboarding flow improvements.",
        "Validated improvements with cohort and retention analysis.",
      ],
    },
    results: {
      summary:
        "The onboarding rebuild improved activation and reduced downstream support burden.",
      metrics: [
        { label: "Activation Rate", value: "+29%" },
        { label: "Onboarding Abandonment", value: "-21%" },
        { label: "Support Tickets", value: "-18%" },
      ],
      businessOutcomes: [
        "More users reached value milestones earlier.",
        "Support teams handled fewer preventable issues.",
        "Product team gained clearer optimization signals for future releases.",
      ],
    },
    relatedServiceSlugs: ["custom-applications", "web-design", "ai-consulting"],
    relatedSolutionSlug: "startups-saas",
    relatedResourceLinks: [
      { label: "When a Redesign Is Strategic", href: "/blog/strategic-website-redesign-signals" },
      { label: "AI for Small Businesses Guide", href: "/guides/ai-for-small-businesses" },
    ],
    relatedCaseStudySlugs: ["operations-portal-modernization", "client-y-enterprise-webflow-ai"],
    seoTitle: "Fintech Case Study: 29% Activation Growth | MIS",
    seoDescription:
      "Learn how MIS helped a fintech product team increase activation by 29% with a strategic onboarding redesign and optimization framework.",
    canonicalPath: "/case-studies/fintech-onboarding-rebuild",
    publishedDate: "2025-05-30",
    authorName: "MIS, Inc.",
  },
];

export function getCaseStudyDetailBySlug(slug: string): CaseStudyDetail | undefined {
  return CASE_STUDY_DETAILS.find((caseStudy) => caseStudy.slug === slug);
}

