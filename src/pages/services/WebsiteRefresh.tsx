import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function WebsiteRefresh() {
  const features = [
    {
      title: 'Modern, Responsive Design',
      description: 'Beautiful websites that work flawlessly on all devices, from smartphones to desktops.',
      icon: '📱'
    },
    {
      title: 'Custom WordPress Development',
      description: 'Powerful, easy-to-manage WordPress websites tailored to your specific business needs.',
      icon: '⚙️'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with Shopify or WooCommerce integration for seamless selling.',
      icon: '🛒'
    },
    {
      title: 'Performance Optimization',
      description: 'Lightning-fast loading speeds that improve user experience and search engine rankings.',
      icon: '⚡'
    },
    {
      title: 'SEO-Friendly Structure',
      description: 'Built with search engine optimization best practices from the ground up.',
      icon: '📈'
    },
    {
      title: '15-Day Delivery',
      description: 'Get your new website live in just 15 days with our streamlined development process.',
      icon: '🚀'
    }
  ]

  const industries = [
    'Dental Clinics',
    'Law Firms',
    'Real Estate',
    'Cleaning Services',
    'Restaurants',
    'Medical Practices',
    'Retail Shops',
    'Professional Services'
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Sleek Web Designs'
    },
    description: 'Professional website refresh and development services including custom WordPress, e-commerce, and responsive design with 15-day delivery guarantee.',
    areaServed: {
      '@type': 'City',
      name: 'Brooklyn'
    }
  }

  return (
    <>
      <SEO
        title="Website Refresh & Design Services Brooklyn | 15-Day Delivery"
        description="Refresh your website in 15 days. Custom WordPress development, e-commerce solutions, and responsive design. Serving Brooklyn, Crown Heights, Park Slope & NYC. Free consultation."
        keywords="website refresh Brooklyn, website redesign NYC, WordPress development Brooklyn, e-commerce website Brooklyn, responsive web design, Brooklyn web design, website redesign Crown Heights"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Website Refresh & Design
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Modern, responsive websites that drive results. Custom WordPress and e-commerce solutions delivered in just 15 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
                Start Your Project
              </Link>
              <a href="tel:3474165655" className="btn btn-outline-white">
                Call (347) 416-5655
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Why Refresh Your Website?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your website is your customers' first impression. A modern, professional design builds trust and increases sales by up to 400%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Our Website Design Process
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      We analyze your business goals and target audience to build a data-driven website strategy.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Design & Development</h3>
                    <p className="text-gray-600">
                      We create a beautiful, functional website tailored to your brand and business needs.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Review & Refinement</h3>
                    <p className="text-gray-600">
                      You review the website and we make adjustments to ensure everything is perfect.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Launch & Support</h3>
                    <p className="text-gray-600">
                      We launch your website and provide ongoing support to ensure continued success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-accent-600">✓</span>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                We have experience across many industries. We'll create a website perfectly suited to your Brooklyn business.
              </p>
              <Link to="/portfolio" className="btn btn-primary w-full text-center">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Website Refresh Packages
              </h2>
              <p className="text-xl text-gray-600">
                Choose the package that fits your needs and budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-gray-600"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Contact form</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-secondary w-full text-center">
                  Get Quote
                </Link>
              </div>

              <div className="card border-2 border-primary-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-gray-600"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Up to 10 pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Custom WordPress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Advanced SEO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Blog integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Analytics setup</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary w-full text-center">
                  Get Quote
                </Link>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For established businesses</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-gray-600"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>E-commerce ready</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Custom features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Ongoing maintenance</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-secondary w-full text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Refresh Your Website?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Get your beautiful, modern website delivered in 15 days. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Request Free Consultation
            </Link>
            <Link to="/pricing" className="btn btn-outline-white">
              View All Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
