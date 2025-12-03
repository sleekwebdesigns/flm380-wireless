import { Link } from 'react-router-dom'
import { BUSINESS_INFO } from '../config/business'

export default function ServiceAreaSection() {
  const primaryAreas = [
    'Crown Heights',
    'Park Slope',
    'Prospect Heights',
    'Fort Greene',
    'Flatbush',
    'Williamsburg'
  ]

  const expandedAreas = BUSINESS_INFO.serviceArea.filter(
    area => !primaryAreas.includes(area)
  )

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Serving Brooklyn and Beyond
            </h2>
            <p className="text-xl text-gray-600">
              Professional web design and digital marketing services throughout New York City
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Primary Service Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {primaryAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-accent-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              We Also Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {expandedAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Based in {BUSINESS_INFO.address.neighborhood}, we're proud to serve businesses throughout Brooklyn, Manhattan, Queens, and all of New York City.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
