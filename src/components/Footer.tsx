import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="/Sleek Web Designs logo.svg"
              alt="Sleek Web Designs"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">
              Brooklyn's premier web design and digital marketing agency. Creating beautiful, effective websites for over 5 years.
            </p>
            <p className="text-sm">
              <strong>Web design that people love</strong>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/website-refresh" className="hover:text-white transition-colors">
                  Website Refresh
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/google-business" className="hover:text-white transition-colors">
                  Google Business Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:3474165655" className="hover:text-white transition-colors">
                  (347) 416-5655
                </a>
              </li>
              <li>
                <a href="mailto:hello@sleekwebdesigns.com" className="hover:text-white transition-colors">
                  hello@sleekwebdesigns.com
                </a>
              </li>
              <li className="pt-2">
                405 Rogers Ave Suite 101<br />
                Brooklyn, NY 11225
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Sleek Web Designs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
