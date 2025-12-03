import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'
import Breadcrumb from '../../components/Breadcrumb'
import RelatedServices from '../../components/RelatedServices'
import { BUSINESS_INFO } from '../../config/business'

export default function SEOServices() {
  const services = [
    {
      title: 'Local SEO',
      description: 'Dominate local Brooklyn search results and attract nearby customers. Includes Google Business Profile optimization.',
      icon: '📍',
      features: ['Google Business optimization', 'Local citations', 'Location-based keywords', 'Local link building']
    },
    {
      title: 'Technical SEO',
      description: 'Optimize your website structure and speed for higher search engine rankings.',
      icon: '⚙️',
      features: ['Site speed optimization', 'Mobile optimization', 'Schema markup', 'XML sitemaps']
    },
    {
      title: 'Content Strategy',
      description: 'Create and optimize content that ranks well and engages your target audience.',
      icon: '📝',
      features: ['Keyword research', 'Content creation', 'On-page optimization', 'Blog strategy']
    },
    {
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve your domain authority and rankings.',
      icon: '🔗',
      features: ['Quality backlinks', 'Guest posting', 'Directory submissions', 'Competitor analysis']
    }
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'Sleek Web Designs'
    },
    description: 'Comprehensive SEO services including local SEO, technical SEO, content strategy, and link building to improve search engine rankings.'
  }

  const relatedServices = [
    {
      title: 'Website Refresh',
      description: 'SEO works best with a modern, fast-loading website design.',
      icon: '🎨',
      link: '/services/website-refresh',
      anchorText: 'View our website design services'
    },
    {
      title: 'Google Business Profile',
      description: 'Local SEO includes optimizing your Google Business Profile for maximum visibility.',
      icon: '📍',
      link: '/services/google-business',
      anchorText: 'Learn about Google Business optimization'
    }
  ]

  return (
    <>
      <LocalBusinessSchema serviceType="SEO Services" />
      <Breadcrumb items={[
        { label: 'Services', path: '/pricing' },
        { label: 'SEO Services', path: '/services/seo' }
      ]} />
      <SEO
        title="SEO Services Brooklyn | Rank Higher on Google | Local SEO NYC"
        description="Improve your Google rankings with proven SEO strategies. Local Brooklyn SEO, technical optimization, and content strategy. Serving Crown Heights, Park Slope & NYC. Free SEO audit."
        keywords="SEO services Brooklyn, local SEO Brooklyn, search engine optimization NYC, Brooklyn SEO company, SEO services Crown Heights, Park Slope SEO, technical SEO Brooklyn"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              SEO Services
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Increase your online visibility and attract more Brooklyn customers with strategic SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
                Get Free SEO Audit
              </Link>
              <a href={`tel:${BUSINESS_INFO.contact.phoneRaw.replace(/\D/g, '')}`} className="btn btn-outline-white">
                Call {BUSINESS_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SEO strategies rank your business higher on Google and drive 3x more organic traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-accent-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Why SEO Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">75%</div>
              <p className="text-gray-700">of users never scroll past the first page of search results</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">53%</div>
              <p className="text-gray-700">of all website traffic comes from organic search</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">3x</div>
              <p className="text-gray-700">more effective than paid ads for long-term ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              SEO Service Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-2xl font-bold mb-4">Local SEO</h3>
                <p className="text-gray-600 mb-6">Perfect for local businesses</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Google Business optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Local keyword targeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Citation building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Monthly reporting</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-secondary w-full text-center mt-6">
                  Get Started
                </Link>
              </div>

              <div className="card border-2 border-primary-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">National SEO</h3>
                <p className="text-gray-600 mb-6">For broader reach</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Comprehensive keyword strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Link building campaign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Technical SEO audit</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary w-full text-center mt-6">
                  Get Started
                </Link>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold mb-4">Enterprise SEO</h3>
                <p className="text-gray-600 mb-6">For large-scale campaigns</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Multi-location optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Dedicated SEO manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span>Custom strategy</span>
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-secondary w-full text-center mt-6">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} title="Complete SEO Solution" />

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Improve Your Rankings?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Get your free SEO audit and discover how we can rank you higher on Google.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Get Your Free SEO Audit
          </Link>
        </div>
      </section>
    </>
  )
}
