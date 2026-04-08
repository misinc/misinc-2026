import { SiteShell } from "@/app/components/layout/SiteShell";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { MainNavbar } from "@/app/components/layout/MainNavbar";
import { SiteFooter } from "@/app/components/layout/SiteFooter";
import {
  AuthoritySection,
  CaseStudiesSection,
  FinalCTASection,
  HeroSection,
  SolutionsSection,
  StrategicServicesSection,
} from "@/app/components/sections";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <SiteHeader>
          <MainNavbar />
        </SiteHeader>
      </div>

      <main className="flex-1">
        <HeroSection />
        <StrategicServicesSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <AuthoritySection />
        <FinalCTASection />
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
