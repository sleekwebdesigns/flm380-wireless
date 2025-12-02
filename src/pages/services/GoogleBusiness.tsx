import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function GoogleBusiness() {
  return (
    <>
      <SEO
        title="Google Business Profile Optimization"
        description="Professional Google Business Profile optimization to dominate local search results. Profile setup, review management, and ongoing optimization to attract more local customers."
        keywords="Google Business Profile, Google My Business, local SEO, Google Maps optimization, review management, local search"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Google Business Profile Optimization
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Dominate local search results and attract more customers with a fully optimized Google Business Profile.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Optimize My Profile
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                What We Do
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold">Profile Setup & Verification</h3>
                    <p className="text-gray-600">Complete profile setup with all business information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold">Review Management</h3>
                    <p className="text-gray-600">Strategy to generate and respond to reviews</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold">Photo Optimization</h3>
                    <p className="text-gray-600">Professional photos that showcase your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold">Regular Posts & Updates</h3>
                    <p className="text-gray-600">Keep your profile active with regular content</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">76%</div>
                  <p className="text-gray-700">of people who search for something nearby visit a business within a day</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">28%</div>
                  <p className="text-gray-700">of local searches result in a purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let us optimize your Google Business Profile and help you attract more local customers.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
