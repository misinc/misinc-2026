import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0F4C81]/65 via-[#1F7FB0]/65 to-[#53D2C6]/65 px-0 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[1400px] mx-auto my-0 sm:my-8 md:my-12 bg-[#fffdf9] border border-[#efe8df] rounded-[2px] shadow-[0_2px_0_rgba(255,255,255,0.75)_inset,0_1px_0_rgba(0,0,0,0.08),0_24px_32px_rgba(0,0,0,0.28),0_48px_90px_rgba(0,0,0,0.36)] flex flex-col relative overflow-visible">
        {children}
      </div>
    </div>
  );
}
