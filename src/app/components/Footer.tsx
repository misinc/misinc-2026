import logo from 'figma:asset/7345e90366d343ada99455fe5e0c1de849dd5f34.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="MIS, Inc." className="h-12 w-12" />
              <span className="font-semibold text-lg">MIS, Inc.</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Building high-performing websites for small businesses, nonprofits, and
              professional organizations since 1995.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-mis')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Why MIS
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@misinc.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+15555551995" className="text-gray-400 hover:text-white transition-colors">
                  Phone
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MIS, Inc. All rights reserved. • Founded in 1995
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
