import logo from "figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png";
import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#f3f3f3] bg-[#fffdf9]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-[56px] md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-[14px]">
            <img src={logo} alt="MIS, Inc." className="h-10 w-10 md:h-12 md:w-12" />
            <p className="max-w-[280px] text-[14px] leading-[1.6] text-[#4A3F37]">
              MIS, Inc. is an Albuquerque-based web design and AI consulting firm
              helping businesses build scalable digital systems since 1995.
            </p>
            <div className="flex flex-col gap-[6px] text-[14px] text-[#777]">
              <p>Albuquerque, New Mexico</p>
              <a href="mailto:karim@misinc.com" className="hover:text-[#9B3139] transition-colors">
                karim@misinc.com
              </a>
              <a href="tel:+15055551234" className="hover:text-[#9B3139] transition-colors">
                (505) 555-1234
              </a>
            </div>
            <p className="pt-[4px] text-[12px] uppercase tracking-[1px] text-[#9B3139]">
              Celebrating 30 Years
            </p>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px] text-[#151515]">
              Solutions
            </h3>
            <ul className="space-y-[10px] text-[14px] text-[#777]">
              <li><Link to="/solutions/small-businesses" className="hover:text-[#9B3139] transition-colors">Small Businesses</Link></li>
              <li><Link to="/solutions/real-estate" className="hover:text-[#9B3139] transition-colors">Real Estate</Link></li>
              <li><Link to="/solutions/nonprofits" className="hover:text-[#9B3139] transition-colors">Nonprofits</Link></li>
              <li><Link to="/solutions/professional-services" className="hover:text-[#9B3139] transition-colors">Professional Services</Link></li>
              <li><Link to="/solutions/startups-saas" className="hover:text-[#9B3139] transition-colors">Startups &amp; SaaS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px] text-[#151515]">
              Services
            </h3>
            <ul className="space-y-[10px] text-[14px] text-[#777]">
              <li><Link to="/services/web-design" className="hover:text-[#9B3139] transition-colors">Albuquerque Web Design</Link></li>
              <li><Link to="/services/webflow-development" className="hover:text-[#9B3139] transition-colors">Webflow Development</Link></li>
              <li><Link to="/services/square-website-design" className="hover:text-[#9B3139] transition-colors">Square Website Design</Link></li>
              <li><Link to="/services/custom-applications" className="hover:text-[#9B3139] transition-colors">Custom Applications</Link></li>
              <li><Link to="/services/ai-consulting" className="hover:text-[#9B3139] transition-colors">AI Consulting</Link></li>
              <li><Link to="/services/aeo-services" className="hover:text-[#9B3139] transition-colors">AEO Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-[14px] text-[14px] font-medium tracking-[1px] text-[#151515]">
              Company
            </h3>
            <ul className="space-y-[10px] text-[14px] text-[#777]">
              <li><Link to="/" className="hover:text-[#9B3139] transition-colors">About MIS, Inc.</Link></li>
              <li><Link to="/solutions" className="hover:text-[#9B3139] transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-[#9B3139] transition-colors">Resources</Link></li>
              <li><Link to="/resources" className="hover:text-[#9B3139] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#9B3139] transition-colors">Contact</Link></li>
              <li><Link to="/contact#strategy" className="font-medium text-[#9B3139] hover:opacity-70 transition-opacity">Book a Free Strategy Call</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-[40px] border-t border-[#f3f3f3] pt-[20px]">
          <div className="flex flex-col gap-[12px] text-[12px] leading-[1.6] text-[#777]">
            <div className="flex flex-wrap items-center gap-x-[18px] gap-y-[6px]">
              <Link to="/resources" className="hover:text-[#9B3139] transition-colors">Privacy Policy</Link>
              <Link to="/resources" className="hover:text-[#9B3139] transition-colors">Terms of Service</Link>
              <Link to="/resources" className="hover:text-[#9B3139] transition-colors">Accessibility Statement</Link>
              <Link to="/resources" className="hover:text-[#9B3139] transition-colors">Sitemap</Link>
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
