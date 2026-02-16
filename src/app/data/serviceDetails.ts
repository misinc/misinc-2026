export type ServiceDeliverable = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  serviceName: string;
  heroTitle: string;
  heroDescription: string;
  quickAnswer: string;
  challenges: string[];
  outcomes: string[];
  deliverables: ServiceDeliverable[];
  idealFor: string[];
  proofQuote: string;
  proofAttribution: string;
  proofMetrics: string[];
  caseStudyHref: string;
  solutionHref: string;
  relatedServiceSlugs: string[];
  faqs: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
};

export const SERVICE_PROCESS = [
  {
    title: "Discovery",
    description:
      "We align goals, audience intent, and operational constraints so scope and priorities are clear from the start.",
  },
  {
    title: "Strategy",
    description:
      "We define the plan, messaging, and technical approach needed to improve conversion, visibility, and execution speed.",
  },
  {
    title: "Build",
    description:
      "We execute with clean architecture and quality controls so your service investment performs now and scales later.",
  },
  {
    title: "Optimize",
    description:
      "We refine using data, testing, and ongoing iteration to improve lead quality and long-term business results.",
  },
] as const;

const SERVICE_DETAILS_LIST: ServiceDetail[] = [
  {
    slug: "web-design",
    serviceName: "Web Design",
    heroTitle: "Web Design Services in Albuquerque, New Mexico",
    heroDescription:
      "Build a high-trust website that turns qualified traffic into real conversations. Our team combines brand clarity, conversion strategy, and technical execution so your site supports lead growth, visibility, and long-term performance.",
    quickAnswer:
      "Web design is the strategic planning and creation of a website that communicates your value, guides user decisions, and supports measurable business outcomes. At MIS, Inc., web design services in Albuquerque focus on conversion clarity, technical reliability, and scalable content architecture for New Mexico businesses.",
    challenges: [
      "Outdated site design that lowers trust with decision-makers",
      "Confusing pages that reduce qualified lead conversion",
      "Slow, inconsistent user experience across mobile and desktop",
      "Difficult content structure that blocks ongoing growth",
    ],
    outcomes: [
      "Clearer messaging that improves buyer confidence",
      "Stronger conversion paths for calls and form submissions",
      "Better mobile usability and performance consistency",
      "A scalable website foundation aligned to your growth goals",
    ],
    deliverables: [
      {
        title: "Website Strategy Blueprint",
        description:
          "Define goals, audience priorities, and conversion paths before design work begins.",
      },
      {
        title: "UX and Content Architecture",
        description:
          "Structure pages and messaging so users find value quickly and take the right next step.",
      },
      {
        title: "Interface Design System",
        description:
          "Create consistent visual components that support trust, clarity, and maintainable delivery.",
      },
      {
        title: "Conversion-Focused Page Templates",
        description:
          "Build reusable layouts for service, solution, and resource content that support SEO and CRO.",
      },
    ],
    idealFor: [
      "Professional service firms and B2B companies",
      "Organizations planning a full website redesign",
      "Businesses with growth goals tied to lead quality",
      "Teams that need a web design company with strategy depth",
    ],
    proofQuote:
      "MIS helped us reposition our website around outcomes instead of features, and lead quality improved within the first quarter.",
    proofAttribution: "Marketing Director, Professional Services Firm",
    proofMetrics: [
      "+41% increase in qualified lead submissions",
      "-27% reduction in bounce rate on core service pages",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/professional-services",
    relatedServiceSlugs: ["webflow-development", "seo-strategy", "aeo-services"],
    faqs: [
      {
        question: "How much does web design typically cost?",
        answer:
          "Investment depends on scope, number of templates, content complexity, and integration requirements. Most projects are scoped after discovery to match business priorities and avoid unnecessary build work. You receive transparent deliverables, timeline, and pricing before execution starts.",
      },
      {
        question: "How long does a web design project take?",
        answer:
          "Most projects run between six and twelve weeks depending on scope and feedback cadence. More complex engagements that include migration or custom features may require additional time. We set clear milestones so teams know exactly what happens at each stage.",
      },
      {
        question: "Can you redesign our existing site without losing SEO value?",
        answer:
          "Yes. We map current URL structure, preserve high-value content signals, and plan redirects when needed. This protects existing authority while improving user experience and conversion paths. SEO continuity is part of the strategy process, not an afterthought.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes. We offer post-launch optimization support for content updates, UX improvements, and performance monitoring. Many clients retain MIS for iterative growth after the initial launch phase. This helps keep the site aligned with changing business priorities.",
      },
      {
        question: "Do you work with clients outside Albuquerque?",
        answer:
          "Yes. We are based in Albuquerque, New Mexico, and serve businesses across the United States. Remote collaboration, regular reviews, and clear documentation are built into our delivery approach.",
      },
    ],
    seoTitle: "Web Design Services in Albuquerque, NM | MIS, Inc.",
    seoDescription:
      "Conversion-focused web design services in Albuquerque, New Mexico. Build a high-trust site that drives qualified leads and long-term growth.",
    canonicalPath: "/services/web-design",
  },
  {
    slug: "webflow-development",
    serviceName: "Webflow Development",
    heroTitle: "Webflow Development Services in Albuquerque",
    heroDescription:
      "Launch scalable Webflow websites with clean CMS architecture, strong performance, and easier team ownership. We build production-ready systems that support faster iteration and measurable conversion growth.",
    quickAnswer:
      "Webflow development is the implementation of strategic website design in Webflow with structured CMS, performance standards, and maintainable page architecture. MIS provides Webflow development services in Albuquerque to help teams publish faster, reduce technical friction, and improve conversion outcomes with a reliable content system.",
    challenges: [
      "Slow publishing cycles caused by rigid website workflows",
      "Inconsistent CMS structure that creates editing errors",
      "Design-to-build gaps that reduce quality and trust",
      "Performance issues that hurt rankings and engagement",
    ],
    outcomes: [
      "Faster content updates with cleaner editorial workflows",
      "Reliable design implementation across page templates",
      "Improved website speed and mobile responsiveness",
      "A scalable CMS foundation for SEO and growth campaigns",
    ],
    deliverables: [
      {
        title: "Webflow Architecture Planning",
        description:
          "Define collections, templates, and content governance for scalable publishing.",
      },
      {
        title: "Component-Based Development",
        description:
          "Build reusable sections and page systems for consistency and speed.",
      },
      {
        title: "Performance and QA Optimization",
        description:
          "Improve load performance, accessibility, and cross-device reliability before launch.",
      },
      {
        title: "Editor Handoff and Training",
        description:
          "Equip your team to manage updates confidently without developer bottlenecks.",
      },
    ],
    idealFor: [
      "Marketing teams that need faster publishing cycles",
      "Businesses migrating from hard-to-maintain platforms",
      "Organizations scaling SEO and resource content",
      "Teams seeking an experienced Webflow developer partner",
    ],
    proofQuote:
      "Our Webflow rebuild gave us a cleaner CMS and cut content launch time from days to hours.",
    proofAttribution: "Operations Lead, Regional Services Company",
    proofMetrics: [
      "-54% time-to-publish for new landing pages",
      "+33% increase in form conversion on key pages",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/small-businesses",
    relatedServiceSlugs: ["web-design", "seo-strategy", "aeo-services"],
    faqs: [
      {
        question: "Is Webflow better than WordPress for business websites?",
        answer:
          "Webflow is often a better fit for teams that prioritize speed, visual control, and lower plugin maintenance risk. WordPress may still fit certain legacy stacks. We evaluate both against your operational needs before recommending a platform.",
      },
      {
        question: "Can you migrate an existing website to Webflow?",
        answer:
          "Yes. We handle migration planning, template setup, content modeling, and URL transition strategy. The process is designed to protect user experience and search visibility while improving maintainability. Migrations are scoped carefully to reduce launch risk.",
      },
      {
        question: "Will we be able to edit the site ourselves?",
        answer:
          "Yes. We structure CMS collections and editor workflows so internal teams can publish confidently. Training and documentation are included in the handoff phase. This reduces dependence on developers for routine updates.",
      },
      {
        question: "How long does Webflow development usually take?",
        answer:
          "Most Webflow projects range from four to ten weeks depending on template count, CMS scope, and integrations. We set milestone-based delivery timelines up front so your team has predictable launch planning.",
      },
      {
        question: "Do you support Webflow sites after launch?",
        answer:
          "Yes. Ongoing support can include optimization, new page development, and CMS enhancements. We help teams sustain momentum after launch, not just deliver a one-time build.",
      },
    ],
    seoTitle: "Webflow Development Services in Albuquerque | MIS, Inc.",
    seoDescription:
      "Webflow development services in Albuquerque for scalable CMS architecture, faster publishing, and conversion-focused website performance.",
    canonicalPath: "/services/webflow-development",
  },
  {
    slug: "square-website-design",
    serviceName: "Square Website Design",
    heroTitle: "Square Website Design Services in New Mexico",
    heroDescription:
      "Create a professional Square website that improves trust, supports local visibility, and helps customers take action faster. We align design, content, and commerce setup for measurable business growth.",
    quickAnswer:
      "Square website design is the strategic setup and design of a Square-powered website to support trust, online conversion, and operational simplicity. MIS helps New Mexico businesses implement Square websites that combine strong messaging, clean user flow, and scalable ecommerce or service booking foundations.",
    challenges: [
      "Generic templates that do not reflect brand credibility",
      "Weak page structure that limits conversion performance",
      "Disconnected online and in-store customer experience",
      "Limited visibility for local Albuquerque search terms",
    ],
    outcomes: [
      "Higher trust through a stronger branded customer experience",
      "Clear service or product paths that improve conversion rate",
      "Better alignment between site and Square operations",
      "Improved local discoverability for targeted service terms",
    ],
    deliverables: [
      {
        title: "Brand-Aligned Site Design",
        description:
          "Customize your Square experience to reflect authority and build buyer confidence.",
      },
      {
        title: "Conversion Path Optimization",
        description:
          "Design key pages to increase booking, inquiry, or purchase actions.",
      },
      {
        title: "Square Commerce Configuration",
        description:
          "Implement practical setup for products, services, and payment workflows.",
      },
      {
        title: "Local SEO Foundation",
        description:
          "Strengthen local signals for Albuquerque and New Mexico search visibility.",
      },
    ],
    idealFor: [
      "Local businesses using Square tools and payments",
      "Retail and service brands launching first serious website",
      "Teams needing simpler website management workflows",
      "Businesses focused on local visibility and conversion growth",
    ],
    proofQuote:
      "MIS turned our basic Square site into a real sales asset with clearer messaging and stronger conversion flow.",
    proofAttribution: "Owner, Local Retail Business",
    proofMetrics: [
      "+29% increase in online order conversion",
      "+22% growth in qualified inquiry submissions",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/small-businesses",
    relatedServiceSlugs: ["web-design", "seo-strategy", "ai-consulting"],
    faqs: [
      {
        question: "Is Square good for a professional business website?",
        answer:
          "Square can be a strong option when setup is structured around your business goals and customer journey. It works especially well for service and local retail workflows. Strategy and design quality are the key factors in performance, not the template alone.",
      },
      {
        question: "Can you improve an existing Square website?",
        answer:
          "Yes. We audit your current setup, improve messaging and page structure, and optimize conversion paths. This can often improve results without a full rebuild. Recommendations are prioritized by impact and ease of implementation.",
      },
      {
        question: "Do Square websites support SEO?",
        answer:
          "Yes, with proper page structure, content strategy, and local optimization practices. We focus on practical SEO foundations that help service pages rank for relevant intent. Local relevance is emphasized for Albuquerque and New Mexico targeting.",
      },
      {
        question: "How long does Square website design take?",
        answer:
          "Most Square website projects run between three and eight weeks based on scope and content readiness. We set phased milestones so launch timing stays predictable.",
      },
      {
        question: "Can you support us after launch?",
        answer:
          "Yes. We provide ongoing support for updates, optimization, and growth initiatives. This ensures your site continues to evolve as your business changes.",
      },
    ],
    seoTitle: "Square Website Design in New Mexico | MIS, Inc.",
    seoDescription:
      "Professional Square website design for New Mexico businesses. Improve trust, local visibility, and conversion with a strategy-led build.",
    canonicalPath: "/services/square-website-design",
  },
  {
    slug: "custom-applications",
    serviceName: "Custom Applications",
    heroTitle: "Custom Application Development in Albuquerque",
    heroDescription:
      "Build custom applications that reduce manual work, connect systems, and improve execution speed across your organization. We design and develop practical solutions tied to measurable operational outcomes.",
    quickAnswer:
      "Custom applications are purpose-built web systems that solve specific workflow, reporting, or process challenges. MIS delivers custom application development in Albuquerque to help teams automate repetitive tasks, connect disconnected tools, and improve operational performance with scalable internal software.",
    challenges: [
      "Manual workflows that create delays and avoidable errors",
      "Disconnected systems that block visibility and accountability",
      "Internal tools that do not match real operating needs",
      "Operational bottlenecks that slow growth and service delivery",
    ],
    outcomes: [
      "Reduced process friction across teams and departments",
      "Better data flow through connected tools and integrations",
      "Improved execution speed for high-value internal tasks",
      "Scalable systems that support long-term business growth",
    ],
    deliverables: [
      {
        title: "Workflow and Requirements Mapping",
        description:
          "Define high-impact opportunities and technical constraints before development.",
      },
      {
        title: "Application UX and Feature Planning",
        description:
          "Design practical interfaces that support real user behavior and business goals.",
      },
      {
        title: "Custom Build and Integration",
        description:
          "Develop secure web applications with API and system integration support.",
      },
      {
        title: "Rollout and Optimization Support",
        description:
          "Deploy in phases and improve adoption through feedback and performance tracking.",
      },
    ],
    idealFor: [
      "Teams with manual operations and recurring process delays",
      "Organizations needing internal dashboards or client portals",
      "Businesses integrating multiple software systems",
      "Growth-stage companies requiring scalable internal tools",
    ],
    proofQuote:
      "The custom system MIS built eliminated repetitive handoffs and gave us real-time visibility into operations.",
    proofAttribution: "COO, Multi-Location Services Organization",
    proofMetrics: [
      "-37% reduction in manual processing time",
      "+48% faster internal task completion",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/startups-saas",
    relatedServiceSlugs: ["ai-consulting", "webflow-development", "seo-strategy"],
    faqs: [
      {
        question: "How is a custom application different from off-the-shelf software?",
        answer:
          "Off-the-shelf tools are built for broad use cases, while custom applications are designed around your exact workflows and constraints. Custom systems can reduce process compromise and improve team efficiency over time. We evaluate where customization provides real operational leverage.",
      },
      {
        question: "What does custom application development cost?",
        answer:
          "Cost depends on workflow complexity, integration requirements, and rollout scope. We typically start with discovery to define the highest-value first phase and control risk. That approach keeps investment aligned to measurable outcomes.",
      },
      {
        question: "How long does a custom app project take?",
        answer:
          "Initial phases often launch in six to twelve weeks, with additional capabilities delivered iteratively. Timeline depends on features, integrations, and review cadence. We use phased delivery so value is realized sooner.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. We regularly integrate with common business systems and APIs where secure access is available. Integration planning is included early to avoid technical surprises later in the build.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes. We support ongoing optimization, feature enhancements, and performance tuning after launch. This helps your application evolve with your business and process maturity.",
      },
    ],
    seoTitle: "Custom Application Development Albuquerque | MIS, Inc.",
    seoDescription:
      "Custom application development in Albuquerque to automate workflows, integrate systems, and improve operational efficiency at scale.",
    canonicalPath: "/services/custom-applications",
  },
  {
    slug: "ai-consulting",
    serviceName: "AI Consulting",
    heroTitle: "AI Consulting Services in Albuquerque, New Mexico",
    heroDescription:
      "Apply AI consulting with practical business outcomes in mind. We help teams identify high-impact use cases, implement responsible automation, and improve operational efficiency without unnecessary complexity.",
    quickAnswer:
      "AI consulting helps businesses identify, prioritize, and implement artificial intelligence opportunities that improve workflow efficiency and decision quality. MIS provides AI consulting in Albuquerque and New Mexico with a practical approach focused on measurable outcomes, responsible implementation, and integration with existing business operations.",
    challenges: [
      "Unclear AI use cases and lack of implementation priorities",
      "Overhyped tools that do not match business realities",
      "Manual, repetitive workflows that consume team capacity",
      "Low confidence in data quality and process reliability",
    ],
    outcomes: [
      "Clear AI roadmap tied to operational and revenue goals",
      "Automation opportunities prioritized by measurable impact",
      "Improved team productivity through workflow redesign",
      "Practical governance for safe and effective AI adoption",
    ],
    deliverables: [
      {
        title: "AI Opportunity Assessment",
        description:
          "Identify where AI can create practical value across your workflows.",
      },
      {
        title: "Use-Case Prioritization and Roadmap",
        description:
          "Sequence initiatives by business impact, complexity, and implementation risk.",
      },
      {
        title: "Workflow Automation Design",
        description:
          "Plan and implement automation systems that reduce repetitive execution work.",
      },
      {
        title: "Enablement and Governance",
        description:
          "Support adoption with process documentation, team training, and guardrails.",
      },
    ],
    idealFor: [
      "Leadership teams evaluating AI strategy and execution",
      "Operations teams with repetitive manual workload",
      "Businesses needing practical AI consulting over experimentation",
      "Organizations integrating AI into existing service delivery",
    ],
    proofQuote:
      "MIS helped us move from AI uncertainty to an implementation plan that delivered real workflow improvements.",
    proofAttribution: "Director of Operations, Regional Services Firm",
    proofMetrics: [
      "-34% reduction in repetitive internal task load",
      "+26% increase in team throughput within two months",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/startups-saas",
    relatedServiceSlugs: ["custom-applications", "aeo-services", "web-design"],
    faqs: [
      {
        question: "What does AI consulting include?",
        answer:
          "AI consulting includes use-case discovery, prioritization, implementation planning, and workflow integration support. The focus is on practical initiatives with measurable business value. We avoid broad experimentation without clear outcomes.",
      },
      {
        question: "How quickly can we see results from AI consulting?",
        answer:
          "Many teams see early wins within the first one to three months when projects are scoped to high-impact workflows. Longer-term initiatives can run in phased cycles. We structure delivery so measurable progress appears early.",
      },
      {
        question: "Do we need a large dataset to benefit from AI?",
        answer:
          "Not always. Many practical improvements come from process design, prompt architecture, and workflow automation rather than large custom model training. We assess your current data context and recommend realistic next steps.",
      },
      {
        question: "Can AI consulting work for small businesses?",
        answer:
          "Yes. Small and mid-sized teams often benefit significantly from targeted AI process improvements. The key is selecting use cases with clear ROI and low adoption friction.",
      },
      {
        question: "Do you provide ongoing AI support?",
        answer:
          "Yes. We provide iterative support for optimization, governance, and new implementation opportunities as your team matures. This keeps AI efforts aligned with real business priorities.",
      },
    ],
    seoTitle: "AI Consulting Services in Albuquerque, NM | MIS, Inc.",
    seoDescription:
      "AI consulting services in Albuquerque, New Mexico focused on practical automation, workflow efficiency, and measurable business outcomes.",
    canonicalPath: "/services/ai-consulting",
  },
  {
    slug: "seo-strategy",
    serviceName: "SEO Strategy",
    heroTitle: "SEO Strategy Services in Albuquerque",
    heroDescription:
      "Strengthen search visibility with SEO strategy built for qualified traffic and conversion outcomes. We combine technical direction, content planning, and page architecture improvements to support long-term organic growth.",
    quickAnswer:
      "SEO strategy is the planning and execution framework used to improve search rankings, qualified traffic, and conversion performance. MIS delivers SEO strategy services in Albuquerque by aligning technical SEO, search intent content, and conversion-focused page structure for sustained organic growth in New Mexico and beyond.",
    challenges: [
      "Low ranking visibility for high-intent service terms",
      "Organic traffic that does not convert into qualified leads",
      "Weak page architecture and unclear keyword targeting",
      "Inconsistent SEO execution across content and technical layers",
    ],
    outcomes: [
      "Improved rankings for core service and solution keywords",
      "Higher quality organic traffic from relevant search intent",
      "Stronger page performance through SEO and CRO alignment",
      "Sustainable content and technical SEO execution model",
    ],
    deliverables: [
      {
        title: "SEO Opportunity and Gap Analysis",
        description:
          "Audit current visibility and prioritize opportunities with the strongest business impact.",
      },
      {
        title: "Intent-Driven Content Strategy",
        description:
          "Build content plans around buyer questions, search behavior, and conversion goals.",
      },
      {
        title: "On-Page and Technical Optimization Plan",
        description:
          "Improve architecture, metadata, internal links, and core technical foundations.",
      },
      {
        title: "Performance Reporting and Iteration",
        description:
          "Track rankings, traffic quality, and conversion signals to guide ongoing improvements.",
      },
    ],
    idealFor: [
      "Businesses investing in long-term inbound lead growth",
      "Teams with underperforming service page visibility",
      "Organizations that need strategy beyond basic keyword lists",
      "Companies competing in local and regional search markets",
    ],
    proofQuote:
      "The SEO strategy from MIS gave us a clear roadmap and improved visibility for the services that matter most.",
    proofAttribution: "Founder, B2B Services Company",
    proofMetrics: [
      "+61% increase in non-branded organic impressions",
      "+38% growth in qualified organic lead volume",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/small-businesses",
    relatedServiceSlugs: ["aeo-services", "web-design", "webflow-development"],
    faqs: [
      {
        question: "How long does SEO strategy take to show results?",
        answer:
          "Early movement can appear in the first one to three months, while stronger compounding results typically build over three to nine months. Timelines vary by competition and site maturity. We focus on measurable progress, not vanity metrics.",
      },
      {
        question: "Do you only focus on local SEO in Albuquerque?",
        answer:
          "No. We support local, regional, and national visibility goals depending on your service footprint. Albuquerque and New Mexico targeting can be combined with broader campaigns when business goals require it.",
      },
      {
        question: "What is included in an SEO strategy engagement?",
        answer:
          "Engagements typically include technical evaluation, content direction, on-page optimization priorities, and internal linking strategy. We also align SEO execution with conversion goals to improve business outcomes, not just traffic.",
      },
      {
        question: "Can SEO work with a new website launch?",
        answer:
          "Yes. Integrating SEO during build planning is often more effective than retrofitting later. We coordinate architecture, content priorities, and metadata before launch to accelerate post-launch momentum.",
      },
      {
        question: "Do you provide ongoing SEO support?",
        answer:
          "Yes. We provide strategy and implementation guidance over time so gains continue to compound. Ongoing support includes optimization sprints and performance reviews.",
      },
    ],
    seoTitle: "SEO Strategy Services in Albuquerque | MIS, Inc.",
    seoDescription:
      "SEO strategy services in Albuquerque focused on qualified traffic, stronger rankings, and conversion-ready website performance.",
    canonicalPath: "/services/seo-strategy",
  },
  {
    slug: "aeo-services",
    serviceName: "AEO Services",
    heroTitle: "AEO Services for Albuquerque and New Mexico Businesses",
    heroDescription:
      "Increase visibility in answer engines and AI-powered search experiences. Our AEO services help your content appear in direct-answer contexts where buyers now discover, compare, and decide.",
    quickAnswer:
      "AEO services optimize website content for answer engines and AI-driven search interfaces, not only traditional ranking pages. MIS provides AEO services for Albuquerque and New Mexico businesses by structuring content, schema, and internal linking so your expertise is more likely to be cited in direct-answer results.",
    challenges: [
      "Strong expertise but low visibility in AI-generated answers",
      "Content not structured for direct-answer extraction",
      "Missing schema and entity signals for answer engines",
      "Limited internal link architecture across service topics",
    ],
    outcomes: [
      "Improved visibility in answer-first search experiences",
      "More structured, citation-friendly service content",
      "Clearer topical authority across SEO and AEO clusters",
      "Better discovery for high-intent buyer questions",
    ],
    deliverables: [
      {
        title: "AEO Visibility Audit",
        description:
          "Assess current answer-engine exposure and identify structural gaps.",
      },
      {
        title: "Answer-Oriented Content Framework",
        description:
          "Create concise, extractable responses aligned to buyer intent.",
      },
      {
        title: "Schema and Structured Data Plan",
        description:
          "Implement markup that supports entity clarity and answer indexing.",
      },
      {
        title: "Topical Cluster and Internal Linking",
        description:
          "Strengthen relationships between service, solution, and resource pages.",
      },
    ],
    idealFor: [
      "Businesses competing in AI-assisted buyer journeys",
      "Content teams focused on answer visibility and authority",
      "Organizations with strong expertise but weak AI citation share",
      "Brands investing in future-ready search strategy",
    ],
    proofQuote:
      "AEO strategy from MIS gave us clearer content structure and better visibility in answer-based search experiences.",
    proofAttribution: "Head of Marketing, B2B Technology Firm",
    proofMetrics: [
      "+46% growth in answer-oriented query visibility",
      "+31% increase in engagement on structured service content",
    ],
    caseStudyHref: "/case-studies",
    solutionHref: "/solutions/startups-saas",
    relatedServiceSlugs: ["seo-strategy", "web-design", "ai-consulting"],
    faqs: [
      {
        question: "What is the difference between SEO and AEO services?",
        answer:
          "SEO targets visibility in traditional search engine results pages, while AEO services optimize content for direct-answer surfaces used by AI and conversational search systems. They work best together as part of one visibility strategy.",
      },
      {
        question: "Do AEO services replace SEO?",
        answer:
          "No. AEO complements SEO rather than replacing it. Search behavior is expanding across both ranking-based and answer-based experiences, so integrated strategy is typically the strongest approach.",
      },
      {
        question: "What types of pages are best for AEO optimization?",
        answer:
          "Service pages, FAQ sections, resource hubs, and comparison content often perform well when structured clearly. Pages should answer specific buyer questions and use clean heading hierarchy and schema signals.",
      },
      {
        question: "How long does it take to see AEO impact?",
        answer:
          "Early visibility changes can happen in one to three months depending on site authority, content quality, and implementation depth. Compounding gains usually improve with consistent publishing and internal linking over time.",
      },
      {
        question: "Can AEO help local Albuquerque businesses?",
        answer:
          "Yes. Local relevance and service-specific authority can improve answer visibility for regional intent queries. We incorporate Albuquerque and New Mexico context where it supports user intent naturally.",
      },
    ],
    seoTitle: "AEO Services in Albuquerque, New Mexico | MIS, Inc.",
    seoDescription:
      "AEO services in Albuquerque and New Mexico to improve AI search visibility, answer extraction, and topical authority across your site.",
    canonicalPath: "/services/aeo-services",
  },
];

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  "albuquerque-web-design": "web-design",
};

const SERVICE_DETAILS_MAP = new Map(
  SERVICE_DETAILS_LIST.map((service) => [service.slug, service]),
);

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  const normalizedSlug = SERVICE_SLUG_ALIASES[slug] ?? slug;
  return SERVICE_DETAILS_MAP.get(normalizedSlug);
}

export function getAllServiceDetails(): ServiceDetail[] {
  return SERVICE_DETAILS_LIST;
}
