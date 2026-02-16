import type { ReactNode } from "react";

type SiteHeaderProps = {
  children: ReactNode;
  announcement?: string;
};

export function SiteHeader({
  children,
  announcement = "Celebrating 30 Years",
}: SiteHeaderProps) {
  return (
    <div className="content-stretch flex flex-col items-stretch relative shrink-0 w-full z-20">
      <div className="w-full bg-[#9B3139] px-5 md:px-6 py-[8px]">
        <p className="font-['Manrope:Medium',sans-serif] font-medium text-white text-[12px] md:text-[13px] tracking-[1px] uppercase text-center">
          {announcement}
        </p>
      </div>
      {children}
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
    </div>
  );
}

