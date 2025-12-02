import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing - Affordable Web Design & Digital Marketing"
        description="Transparent pricing for web design, SEO, AI solutions, and Google Business optimization. Custom packages to fit your budget. Contact us for a free quote."
        keywords="web design pricing, SEO pricing, digital marketing costs, affordable web design"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Pricing
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Transparent, affordable pricing for all your digital marketing needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Website Design</h2>
              <p className="text-gray-600 mb-6">Custom pricing based on your needs</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Starter: 5 pages, responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Professional: 10 pages, WordPress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Enterprise: Unlimited pages, e-commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>15-day delivery guarantee</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center">
                Get Custom Quote
              </Link>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">SEO Services</h2>
              <p className="text-gray-600 mb-6">Monthly packages available</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Local SEO: Google Business, citations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>National SEO: Comprehensive strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Enterprise: Multi-location campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Monthly reporting included</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center">
                Get Custom Quote
              </Link>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">AI Solutions</h2>
              <p className="text-gray-600 mb-6">Custom implementation pricing</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>AI chatbot integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Content generation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Personalization engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Ongoing support available</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center">
                Get Custom Quote
              </Link>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Google Business Profile</h2>
              <p className="text-gray-600 mb-6">Monthly management packages</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Profile setup & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Review management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Regular posts & updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Monthly performance reports</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full text-center">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Why Our Pricing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Affordable</h3>
              <p className="text-gray-600">Competitive rates without compromising quality</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-xl mb-2">Customized</h3>
              <p className="text-gray-600">Packages tailored to your specific needs</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-xl mb-2">Transparent</h3>
              <p className="text-gray-600">No hidden fees or surprise charges</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Request Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
