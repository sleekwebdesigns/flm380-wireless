import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/Sleek Web Designs logo.svg"
              alt="Sleek Web Designs"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/services/website-refresh" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              Website Refresh
            </Link>
            <Link to="/services/seo" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              SEO Services
            </Link>
            <Link to="/services/ai-solutions" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              AI Solutions
            </Link>
            <Link to="/services/google-business" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              Google Business
            </Link>
            <Link to="/pricing" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              Pricing
            </Link>
            <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-primary-600 hover:scale-105 transition-all duration-200 tracking-wide">
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:3474165655" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
              (347) 416-5655
            </a>
            <Link to="/contact" className="btn btn-primary text-lg px-6 py-3">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/services/website-refresh" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Website Refresh
              </Link>
              <Link to="/services/seo" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                SEO Services
              </Link>
              <Link to="/services/ai-solutions" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                AI Solutions
              </Link>
              <Link to="/services/google-business" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Google Business
              </Link>
              <Link to="/pricing" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
              <a href="tel:3474165655" className="text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                (347) 416-5655
              </a>
              <Link to="/contact" className="btn btn-primary text-lg">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
