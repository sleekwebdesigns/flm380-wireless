import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = 2026

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
              <li className="pt-2">
                <a
                  href="https://maps.app.goo.gl/UDwkRb9CDRPJEtFG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  405 Rogers Ave Suite 101<br />
                  Brooklyn, NY 11225
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.sleekwebdesigns.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Visit Sleekwebdesigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4 text-center">Visit Our Office</h4>
            <div className="rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5040582875777!2d-73.95618218784436!3d40.66286147128177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d4f5676a9ff%3A0x158ed79c99eb8e4e!2sSleek%20Web%20Designs!5e0!3m2!1sen!2sus!4v1764740535122!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sleek Web Designs Location"
                className="w-full"
              />
            </div>
          </div>
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
