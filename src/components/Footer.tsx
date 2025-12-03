import { Link } from 'react-router-dom'
import NAP from './NAP'
import { BUSINESS_INFO } from '../config/business'

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
              Brooklyn's trusted web design and digital marketing partner since 2018. Serving {BUSINESS_INFO.address.neighborhood}, Park Slope, and all of NYC.
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
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing
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
            <NAP variant="vertical" />
            <div className="mt-4">
              <a
                href={BUSINESS_INFO.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Get Directions
              </a>
            </div>
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
