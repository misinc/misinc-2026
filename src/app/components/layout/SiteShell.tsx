import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen flex flex-col px-0 sm:px-6 md:px-8 lg:px-12" style={{ background: "linear-gradient(145deg, var(--mis-bg-soft) 0%, var(--mis-surface) 52%, #ffd99e 100%)" }}>
      <div className="w-full max-w-[1400px] mx-auto my-0 sm:my-8 md:my-12 rounded-[2px] flex flex-col relative overflow-visible" style={{ background: "var(--mis-panel)", border: "1px solid var(--mis-border)", boxShadow: "0 2px 0 rgba(255,255,255,0.75) inset, 0 1px 0 rgba(107,74,30,0.08), 0 24px 32px rgba(107,74,30,0.14), 0 48px 90px rgba(107,74,30,0.18)" }}>
        {children}
      </div>
    </div>
  );
}
