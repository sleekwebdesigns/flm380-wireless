import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import { BUSINESS_INFO } from '../config/business'

export default function About() {
  return (
    <>
      <LocalBusinessSchema />
      <SEO
        title="About Us - Brooklyn Web Design Agency Since 2018"
        description="Meet Sleek Web Designs, Brooklyn's trusted web design agency since 2018. We've helped 1,770+ businesses succeed online with our 15-day delivery guarantee."
        keywords="about Sleek Web Designs, Brooklyn web design company, digital marketing agency Brooklyn, web design Crown Heights, Park Slope web designer"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            About Sleek Web Designs
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Brooklyn's trusted partner for web design and digital marketing since 2018.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2018, we've helped 1,770+ Brooklyn businesses succeed online. Every business deserves a website that looks beautiful and drives results. We design websites that attract visitors and convert them into loyal customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">5+</div>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">1,770+</div>
                <p className="text-gray-700">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">15</div>
                <p className="text-gray-700">Day Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">🎯 Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. We build every website to the highest standards.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3">⏱️ Fast Delivery</h3>
                <p className="text-gray-600">
                  Our 15-day delivery guarantee gets your website live quickly without sacrificing quality.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3">🤝 Client Partnership</h3>
                <p className="text-gray-600">
                  We work closely with you throughout the process to ensure your vision becomes reality.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3">📈 Results Driven</h3>
                <p className="text-gray-600">
                  We focus on creating websites that drive measurable results for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Located in Brooklyn, NY</h2>
            <p className="text-lg text-gray-700 mb-6">
              405 Rogers Ave Suite 101<br />
              Brooklyn, NY 11225
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.contact.phoneRaw.replace(/\D/g, '')}`} className="btn btn-primary">
                Call {BUSINESS_INFO.contact.phone}
              </a>
              <a
                href="https://maps.app.goo.gl/UDwkRb9CDRPJEtFG7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Let's create an amazing website for your Brooklyn business.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
