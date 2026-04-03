import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import { Link } from "react-router";

const footerSolutionsLinks = [
  { label: "Small Businesses", href: "/solutions/small-businesses" },
  { label: "Ecommerce", href: "/services/square-website-design" },
  { label: "Nonprofits", href: "/solutions/nonprofits" },
  { label: "Professional Services", href: "/solutions/professional-services" },
  { label: "Startups", href: "/solutions/startups-saas" },
  { label: "View all Solutions", href: "/solutions", highlight: true },
];

const footerServiceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Webflow Development", href: "/services/webflow-development" },
  { label: "Square Development", href: "/services/square-website-design" },
  { label: "Custom Applications", href: "/services/custom-applications" },
  { label: "AI Consulting", href: "/services/ai-consulting" },
  { label: "View all Services", href: "/services", highlight: true },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#fffdf9]" style={{ borderTopColor: "var(--mis-border)", backgroundColor: "var(--mis-panel)" }}>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-[56px] md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2 lg:grid-cols-4">
          <div className="grid grid-cols-[40px_1fr] gap-x-[16px] gap-y-[14px] md:grid-cols-[48px_1fr]">
            <img src={logo} alt="MIS, Inc." className="mt-[4px] h-10 w-10 md:h-12 md:w-12" />
            <p className="max-w-[280px] text-[14px] leading-[1.6]" style={{ color: "var(--mis-text)" }}>
              MIS, Inc. is an Albuquerque-based web design and AI consulting firm
              helping businesses build scalable digital systems since 1995.
            </p>
            <div className="col-start-2 flex flex-col gap-[6px] text-[14px]" style={{ color: "var(--mis-muted)" }}>
              <p>Albuquerque, New Mexico</p>
              <a href="mailto:hello@misinc.com" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>
                hello@misinc.com
              </a>
              <a href="tel:+15053413060" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>
                (505) 341-3060
              </a>
            </div>
            <p className="col-start-2 pt-[4px] text-[12px] uppercase tracking-[1px]" style={{ color: "var(--mis-brand-red)" }}>
              Celebrating 30 Years
            </p>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px]" style={{ color: "var(--mis-text)" }}>
              Solutions
            </h3>
            <ul className="space-y-[10px] text-[14px]" style={{ color: "var(--mis-muted)" }}>
              {footerSolutionsLinks.map((item) => (
                <li key={`footer-solutions-${item.label}`}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:opacity-70"
                    style={{ color: item.highlight ? "var(--mis-brand-red)" : "inherit", fontWeight: item.highlight ? 500 : 400 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px]" style={{ color: "var(--mis-text)" }}>
              Services
            </h3>
            <ul className="space-y-[10px] text-[14px]" style={{ color: "var(--mis-muted)" }}>
              {footerServiceLinks.map((item) => (
                <li key={`footer-services-${item.label}`}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:opacity-70"
                    style={{ color: item.highlight ? "var(--mis-brand-red)" : "inherit", fontWeight: item.highlight ? 500 : 400 }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px]" style={{ color: "var(--mis-text)" }}>
              Company
            </h3>
            <ul className="space-y-[10px] text-[14px]" style={{ color: "var(--mis-muted)" }}>
              <li><Link to="/" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>About MIS, Inc.</Link></li>
              <li><Link to="/solutions" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Case Studies</Link></li>
              <li><Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Resources</Link></li>
              <li><Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Blog</Link></li>
              <li><Link to="/contact" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Contact</Link></li>
              <li><Link to="/contact#strategy" className="font-medium transition-opacity hover:opacity-70" style={{ color: "var(--mis-brand-red)" }}>Book a Free Strategy Call</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-[40px] border-t pt-[20px]" style={{ borderTopColor: "var(--mis-border)" }}>
          <div className="flex flex-col gap-[12px] text-[12px] leading-[1.6]" style={{ color: "var(--mis-muted)" }}>
            <div className="flex flex-wrap items-center gap-x-[18px] gap-y-[6px]">
              <Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Privacy Policy</Link>
              <Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Terms of Service</Link>
              <Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Accessibility Statement</Link>
              <Link to="/resources" className="transition-colors hover:opacity-70" style={{ color: "inherit" }}>Sitemap</Link>
            </div>
            <p>
              Serving Albuquerque, Santa Fe, Rio Rancho, and businesses throughout
              New Mexico.
            </p>
            <p>© 1995–2026 MIS, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
