import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function UIKitPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] p-8 md:p-12 font-['Manrope',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[#9B3139] hover:text-[#7A2730] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-6xl font-light text-[#2A2420] mb-4">MIS, Inc. UI Kit</h1>
          <p className="text-xl text-[#4A3F37] font-light">Santa Fe-inspired design system featuring warm earth tones and clean typography</p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Color Palette</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#4A3F37] mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-24 bg-[#9B3139] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Brick Red</p>
                <p className="text-xs text-[#6B564A]">#9B3139</p>
                <p className="text-xs text-[#A89080]">Primary brand color</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-[#7A2730] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Brick Red Dark</p>
                <p className="text-xs text-[#6B564A]">#7A2730</p>
                <p className="text-xs text-[#A89080]">Hover states</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-[#D64F2A] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Terracotta</p>
                <p className="text-xs text-[#6B564A]">#D64F2A</p>
                <p className="text-xs text-[#A89080]">Secondary accents</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#4A3F37] mb-4">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-[#FFAA1D] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Gold</p>
                <p className="text-xs text-[#6B564A]">#FFAA1D</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#4FA5AE] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Turquoise</p>
                <p className="text-xs text-[#6B564A]">#4FA5AE</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#E8B89A] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Adobe</p>
                <p className="text-xs text-[#6B564A]">#E8B89A</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#F4E8D8] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Sand</p>
                <p className="text-xs text-[#6B564A]">#F4E8D8</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#D4A574] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Clay</p>
                <p className="text-xs text-[#6B564A]">#D4A574</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#9CAF88] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Sage</p>
                <p className="text-xs text-[#6B564A]">#9CAF88</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#4A3F37] mb-4">Warm Neutrals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-[#FFF8F0] rounded-lg shadow-md border border-[#E8D9C8]"></div>
                <p className="font-medium text-sm">Warm Cream</p>
                <p className="text-xs text-[#6B564A]">#FFF8F0</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#F5EFE7] rounded-lg shadow-md border border-[#E8D9C8]"></div>
                <p className="font-medium text-sm">Warm Beige</p>
                <p className="text-xs text-[#6B564A]">#F5EFE7</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#E8DCC8] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Warm Tan</p>
                <p className="text-xs text-[#6B564A]">#E8DCC8</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#A89080] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm">Neutral 300</p>
                <p className="text-xs text-[#FDFAF7]">#A89080</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#4A3F37] mb-4">Dark Neutrals</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-[#6B564A] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm text-white">Neutral 400</p>
                <p className="text-xs text-[#A89080]">#6B564A</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#4A3F37] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm text-white">Neutral 500</p>
                <p className="text-xs text-[#A89080]">#4A3F37</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-[#2A2420] rounded-lg shadow-md"></div>
                <p className="font-medium text-sm text-white">Neutral 900</p>
                <p className="text-xs text-[#A89080]">#2A2420</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Typography</h2>
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <p className="text-xs text-[#A89080] mb-2">Display / 96px Light</p>
              <h1 className="text-8xl font-light text-[#2A2420]">Websites built to last</h1>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">H1 / 64px Light</p>
              <h1 className="text-6xl font-light text-[#2A2420]">Modern, strategic websites</h1>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">H2 / 48px Light</p>
              <h2 className="text-5xl font-light text-[#2A2420]">Featured Projects</h2>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">H3 / 32px Light</p>
              <h3 className="text-3xl font-light text-[#2A2420]">30 Years of Expertise</h3>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">H4 / 24px Light</p>
              <h4 className="text-2xl font-light text-[#2A2420]">Web Design & Webflow</h4>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">Body / 16px Light</p>
              <p className="text-base font-light text-[#4A3F37] leading-relaxed">
                At MIS, we believe great websites aren't just beautiful — they're strategic tools that help your organization grow. Since 1995, we've helped small businesses, nonprofits, and professional organizations build websites that reflect their mission.
              </p>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">Label / 14px Medium</p>
              <p className="text-sm font-medium text-[#9B3139] tracking-wide">OUR SERVICES</p>
            </div>
            <div>
              <p className="text-xs text-[#A89080] mb-2">Caption / 12px Medium</p>
              <p className="text-xs font-medium text-[#A89080] tracking-wider uppercase">Founded 1995</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Buttons</h2>
          <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#9B3139] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#7A2730] transition-all hover:scale-105">
                  Our Services
                </button>
                <button className="bg-[#9B3139] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#7A2730] transition-all">
                  Schedule Consultation
                </button>
                <button className="bg-[#9B3139] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide opacity-50 cursor-not-allowed">
                  Disabled State
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Turquoise CTA Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4FA5AE] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#3D8A92] transition-all hover:scale-105">
                  Schedule a Free Consultation
                </button>
                <button className="bg-[#4FA5AE] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#3D8A92] transition-all">
                  Get Started
                </button>
                <button className="bg-[#4FA5AE] text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide opacity-50 cursor-not-allowed">
                  Disabled State
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white border border-[#9B3139] text-[#9B3139] px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#9B3139] hover:text-white transition-all">
                  Learn More
                </button>
                <button className="bg-white border border-[#4FA5AE] text-[#4FA5AE] px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#4FA5AE] hover:text-white transition-all">
                  View Process
                </button>
                <button className="bg-white border border-[#6B564A] text-[#2A2420] px-6 py-3 rounded-full font-medium text-sm tracking-wide hover:bg-[#F5EFE7] transition-all">
                  View Portfolio
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Text Buttons</h3>
              <div className="flex flex-wrap gap-6">
                <button className="text-[#9B3139] font-medium text-sm tracking-wide hover:opacity-60 transition-opacity underline underline-offset-4">
                  Learn More →
                </button>
                <button className="text-[#4FA5AE] font-medium text-sm tracking-wide hover:opacity-60 transition-opacity underline underline-offset-4">
                  View Process →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Labels */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Badges & Labels</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#FFAA1D] px-4 py-2 rounded-full">
                <span className="text-[#9B3139] font-medium text-xs tracking-wide">30 years of experience</span>
              </div>
              <div className="bg-[#F4E8D8] px-4 py-2 rounded-full">
                <span className="text-[#4A3F37] font-medium text-xs tracking-wide">Webflow Partner</span>
              </div>
              <div className="bg-[#9CAF88] px-4 py-2 rounded-full">
                <span className="text-white font-medium text-xs tracking-wide">AI-Powered</span>
              </div>
              <div className="border border-[#9B3139] px-4 py-2 rounded-full">
                <span className="text-[#9B3139] font-medium text-xs tracking-wide">Webflow</span>
              </div>
              <div className="border border-[#6B564A] px-4 py-2 rounded-full">
                <span className="text-[#4A3F37] font-medium text-xs tracking-wide">E-commerce</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Cards</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Service Cards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f9f9f9] p-12 transition-all hover:bg-[#f0f0f0] hover:shadow-lg cursor-pointer group">
                <h4 className="text-2xl font-light text-[#2A2420] mb-3">Web Design & Webflow</h4>
                <p className="text-base font-light text-[#6B564A] leading-relaxed mb-6">
                  Modern, user-focused designs built on Webflow for fast, scalable, and easy-to-update websites.
                </p>
                <div className="inline-flex flex-col">
                  <span className="font-medium text-sm text-[#2A2420] group-hover:translate-x-1 transition-transform">Learn More</span>
                  <div className="h-px bg-[#2A2420] w-full"></div>
                </div>
              </div>

              <div className="bg-[#f8ede3] p-12 transition-all hover:shadow-lg cursor-pointer group">
                <h4 className="text-2xl font-light text-[#2A2420] mb-3">AI Integration</h4>
                <p className="text-base font-light text-[#6B564A] leading-relaxed mb-6">
                  Practical AI that improves search visibility, engagement, and long-term site performance.
                </p>
                <div className="inline-flex flex-col">
                  <span className="font-medium text-sm text-[#2A2420] group-hover:translate-x-1 transition-transform">Discover AI</span>
                  <div className="h-px bg-[#2A2420] w-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#4A3F37] mb-4">Value Cards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#f1f6f5] p-12 flex flex-col justify-between min-h-[280px]">
                <p className="text-xs font-normal text-[#2A2420] tracking-wider uppercase mb-auto">Deep Technical Background</p>
                <p className="text-2xl font-light text-[#2A2420] leading-relaxed">We speak both business and tech.</p>
              </div>

              <div className="bg-[#f8ede3] p-12 flex flex-col justify-between min-h-[280px]">
                <p className="text-xs font-normal text-[#2A2420] tracking-wider uppercase mb-auto">Clear Communication</p>
                <p className="text-2xl font-light text-[#2A2420] leading-relaxed">No jargon. Just clarity.</p>
              </div>

              <div className="bg-[#fffae7] p-12 flex flex-col justify-between min-h-[280px]">
                <p className="text-xs font-normal text-[#2A2420] tracking-wider uppercase mb-auto">Calm, Confident Approach</p>
                <p className="text-2xl font-light text-[#2A2420] leading-relaxed">Built to last. Not built to churn.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Spacing System</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">8px</div>
              <div className="h-8 w-2 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">Micro spacing (gaps, padding)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">16px</div>
              <div className="h-8 w-4 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">Small spacing (card padding)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">32px</div>
              <div className="h-8 w-8 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">Medium spacing (section gaps)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">48px</div>
              <div className="h-8 w-12 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">Large spacing (component padding)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">96px</div>
              <div className="h-8 w-24 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">XL spacing (hero top padding)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-[#6B564A]">160px</div>
              <div className="h-8 w-40 bg-[#9B3139]"></div>
              <span className="text-sm text-[#A89080]">Section spacing (vertical gaps)</span>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Shadows</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-[#4A3F37] mb-2">Subtle Shadow</p>
              <p className="text-xs text-[#A89080]">shadow-sm</p>
              <p className="text-xs text-[#A89080] mt-2">Cards, buttons</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-sm font-medium text-[#4A3F37] mb-2">Medium Shadow</p>
              <p className="text-xs text-[#A89080]">shadow-md</p>
              <p className="text-xs text-[#A89080] mt-2">Hover states</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-[#4A3F37] mb-2">Large Shadow</p>
              <p className="text-xs text-[#A89080]">shadow-lg</p>
              <p className="text-xs text-[#A89080] mt-2">Modal, dropdowns</p>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-[#2A2420] mb-6">Design Principles</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-medium text-[#9B3139] mb-2">Santa Fe Warmth</h3>
              <p className="text-base font-light text-[#4A3F37] leading-relaxed">
                Inspired by Southwestern adobe and desert landscapes, our color palette features warm brick reds, terracotta, golden yellows, and soft earth tones.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#9B3139] mb-2">Generous White Space</h3>
              <p className="text-base font-light text-[#4A3F37] leading-relaxed">
                Premium feel through breathable layouts. Major sections use 160px+ spacing, cards use 48px padding for a luxurious, uncluttered aesthetic.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#9B3139] mb-2">Clean Typography</h3>
              <p className="text-base font-light text-[#4A3F37] leading-relaxed">
                Manrope Light for body and headings creates a modern, approachable feel. Medium weight for emphasis and interactive elements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#9B3139] mb-2">Subtle Motion</h3>
              <p className="text-base font-light text-[#4A3F37] leading-relaxed">
                Smooth transitions (300ms), gentle scale transforms (hover:scale-105), and opacity changes create refined interactivity without distraction.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-[#E8D9C8]">
          <p className="text-sm text-[#A89080]">MIS, Inc. Design System • Santa Fe Theme • v1.0.0</p>
          <Link to="/" className="text-sm text-[#9B3139] hover:text-[#7A2730] mt-2 inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}