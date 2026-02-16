import caseStudyImageOne from "@/assets/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import caseStudyImageTwo from "@/assets/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";
import caseStudyImageThree from "@/assets/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import caseStudyImageFour from "@/assets/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import caseStudyImageFive from "@/assets/93bdf867d705af4cd05e62b9305f28776e6b5532.png";
import caseStudyImageSix from "@/assets/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";

export const caseStudyCategories = [
  "Web Design & Redesign",
  "Webflow Development",
  "AI & Automation",
  "AEO / Search Visibility",
  "Custom Application Solutions",
] as const;

export type CaseStudyCategory = (typeof caseStudyCategories)[number];

export type CaseStudy = {
  slug: string;
  title: string;
  problem: string;
  strategy: string;
  outcome: string;
  metric: string;
  industry: string;
  categories: CaseStudyCategory[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brand-x-growth-program",
    title: "How We Helped Brand X Increase Qualified Leads by 47% in 6 Months",
    problem:
      "Their site attracted traffic but failed to convert high-intent visitors into booked sales conversations.",
    strategy:
      "We rebuilt the information architecture, tightened conversion paths, and aligned search pages to decision-stage intent.",
    outcome:
      "The client improved lead quality and increased monthly pipeline consistency across paid and organic channels.",
    metric: "+47% qualified leads",
    industry: "Professional Services",
    categories: ["Web Design & Redesign", "AEO / Search Visibility"],
    image: caseStudyImageOne,
    imageAlt: "Case study highlight card showing lead growth for a professional services client",
    featured: true,
  },
  {
    slug: "client-y-enterprise-webflow-ai",
    title: "Enterprise Webflow Build with AI Integration for Client Y",
    problem:
      "A complex marketing stack and disconnected workflows slowed publishing and limited campaign responsiveness.",
    strategy:
      "We launched a scalable Webflow system and integrated AI-assisted content operations for faster execution.",
    outcome:
      "Marketing operations became faster and more reliable while preserving governance across teams.",
    metric: "+80% publishing velocity",
    industry: "B2B Technology",
    categories: ["Webflow Development", "AI & Automation"],
    image: caseStudyImageTwo,
    imageAlt: "Enterprise website dashboard illustrating faster publishing cycles with AI integration",
    featured: true,
  },
  {
    slug: "client-z-aeo-visibility",
    title: "AEO-Driven Visibility Program for Client Z",
    problem:
      "The brand was underrepresented in AI summaries and answer-first search despite strong subject-matter expertise.",
    strategy:
      "We restructured core pages, deployed schema enhancements, and built answer-ready content clusters.",
    outcome:
      "The client gained stronger visibility in AI answer experiences and improved top-of-funnel discovery.",
    metric: "+62% AI answer mentions",
    industry: "Healthcare Services",
    categories: ["AEO / Search Visibility", "Webflow Development"],
    image: caseStudyImageThree,
    imageAlt: "Search visibility analytics panel showing growth in answer engine mentions",
    featured: true,
  },
  {
    slug: "operations-portal-modernization",
    title: "Custom Operations Portal That Reduced Manual Work by 38%",
    problem:
      "Teams relied on spreadsheets and fragmented tools, causing delays and avoidable data-entry errors.",
    strategy:
      "We designed and shipped a secure internal portal with role-based workflows and system integrations.",
    outcome:
      "Operational throughput improved while team members reclaimed time for higher-value work.",
    metric: "-38% manual effort",
    industry: "Logistics",
    categories: ["Custom Application Solutions", "AI & Automation"],
    image: caseStudyImageFour,
    imageAlt: "Internal operations dashboard used in a custom application case study",
    featured: true,
  },
  {
    slug: "multi-location-seo-growth",
    title: "Multi-Location Search Strategy That Lifted Non-Branded Traffic",
    problem:
      "A regional brand had inconsistent location pages and weak rankings for high-intent service terms.",
    strategy:
      "We rebuilt location page templates, improved on-page entities, and tightened internal linking architecture.",
    outcome:
      "The site captured stronger non-branded visibility and a healthier stream of service-qualified traffic.",
    metric: "+54% non-branded sessions",
    industry: "Home Services",
    categories: ["Web Design & Redesign", "AEO / Search Visibility"],
    image: caseStudyImageFive,
    imageAlt: "Regional search performance graph from a multi-location SEO case study",
    featured: false,
  },
  {
    slug: "fintech-onboarding-rebuild",
    title: "Fintech Onboarding Rebuild That Increased Activation by 29%",
    problem:
      "New users dropped during onboarding because key trust and clarity signals were missing from the product flow.",
    strategy:
      "We redesigned core onboarding interfaces and connected product analytics to rapid CRO iterations.",
    outcome:
      "Activation improved and support burden decreased with clearer customer guidance across the journey.",
    metric: "+29% activation rate",
    industry: "Fintech",
    categories: ["Custom Application Solutions", "Web Design & Redesign"],
    image: caseStudyImageSix,
    imageAlt: "Product onboarding flow diagram showing improved user activation results",
    featured: false,
  },
];
