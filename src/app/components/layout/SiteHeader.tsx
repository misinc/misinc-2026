import type { ReactNode } from "react";

type SiteHeaderProps = {
  children: ReactNode;
  announcement?: string;
};

export function SiteHeader({
  children,
  announcement = "30 Years of Web Design (Since 1995) • Now with AI & Custom App Development",
}: SiteHeaderProps) {
  return (
    <div className="content-stretch flex flex-col items-stretch relative shrink-0 w-full z-20">
      <div className="w-full px-5 md:px-6 py-[8px]" style={{ backgroundColor: "var(--mis-brand-red)" }}>
        <p className="font-['Manrope:Medium',sans-serif] font-medium text-white text-[12px] md:text-[13px] tracking-[1px] uppercase text-center">
          {announcement}
        </p>
      </div>
      {children}
      <div className="h-px shrink-0 w-full" style={{ backgroundColor: "var(--mis-border)" }} />
    </div>
  );
}
