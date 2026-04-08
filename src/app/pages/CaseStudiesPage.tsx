import { useEffect } from "react";
import {
  AuthorityOrbitSection,
  CaseStudiesSection,
  FinalCTASection,
  HeroSection,
} from "@/app/components/sections";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { SiteShell } from "@/app/components/layout/SiteShell";

function CaseStudiesMetadata() {
  useEffect(() => {
    document.title = "Case Studies — Client Results & Success Stories | MIS, Inc.";

    const description =
      "Explore MIS case studies featuring measurable client results, success stories, and strategy outcomes across web, AI, SEO, and custom systems.";

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
    upsertMetaByProperty("og:title", document.title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:url", "https://www.misinc.com/case-studies");

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.misinc.com/case-studies");
  }, []);

  return null;
}

export default function CaseStudiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.misinc.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://www.misinc.com/case-studies",
      },
    ],
  };

  return (
    <SiteShell>
      <CaseStudiesMetadata />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="content-stretch relative flex w-full shrink-0 flex-col items-center">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <HeroSection
          sectionId="case-studies-hero"
          eyebrow="Client Case Studies"
          title={
            <>
              Real Results from
              <br />
              Strategic Client Partnerships
            </>
          }
          description="See how focused strategy, better systems, and disciplined execution have helped clients improve visibility, increase conversion, and build more durable growth."
          primaryAction={{
            label: "Schedule a Strategy Call",
            to: "/contact",
            variant: "primary",
          }}
          secondaryAction={{
            label: "View Featured Case Studies",
            scrollToId: "case-studies-showcase",
            variant: "secondary",
          }}
        />

        <CaseStudiesSection
          sectionId="case-studies-showcase"
          backgroundColor="#f6efe3"
        />

        <AuthorityOrbitSection sectionId="case-studies-authority" />

        <FinalCTASection
          sectionId="case-studies-cta"
          eyebrow="Next Step"
          title="Ready to Create the Next Success Story?"
          description="If you're planning a redesign, new system, or AI-enabled growth initiative, we can help map the right path and execution plan."
          actionLabel="Schedule a Strategy Call"
          actionTo="/contact"
          footnote="No-pressure consult. Clear next steps."
          backgroundColor="#eadcc6"
        />
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
