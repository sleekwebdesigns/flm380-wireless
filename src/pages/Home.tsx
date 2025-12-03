import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { Testimonial, PortfolioProject } from '../types'

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [projects, setProjects] = useState<PortfolioProject[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .eq('is_approved', true)
        .limit(3)

      const { data: projectsData } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('is_featured', true)
        .limit(3)

      if (testimonialsData) setTestimonials(testimonialsData)
      if (projectsData) setProjects(projectsData)
    }

    fetchData()
  }, [])

  const services = [
    {
      title: 'Website Refresh',
      description: 'Modern, responsive websites built with the latest technologies. Custom WordPress development and e-commerce solutions.',
      icon: '🎨',
      link: '/services/website-refresh',
      features: ['15-day delivery', 'Mobile-first design', 'Custom WordPress', 'E-commerce ready']
    },
    {
      title: 'SEO Services',
      description: 'Boost your online visibility with comprehensive SEO strategies. Local and national SEO optimization.',
      icon: '📈',
      link: '/services/seo',
      features: ['Local SEO', 'Technical SEO', 'Content strategy', 'Link building']
    },
    {
      title: 'AI Solutions',
      description: 'Leverage cutting-edge AI technology to enhance your digital presence and automate marketing tasks.',
      icon: '🤖',
      link: '/services/ai-solutions',
      features: ['AI chatbots', 'Content generation', 'Personalization', 'Automation']
    },
    {
      title: 'Google Business Profile',
      description: 'Optimize your local presence with professional Google Business Profile management and optimization.',
      icon: '📍',
      link: '/services/google-business',
      features: ['Profile optimization', 'Review management', 'Local search', 'Monthly updates']
    }
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sleek Web Designs',
    url: 'https://www.sleekwebdesigns.com',
    logo: 'https://www.sleekwebdesigns.com/Sleek Web Designs logo.svg',
    description: 'Brooklyn\'s premier web design and digital marketing agency',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '405 Rogers Ave Suite 101',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11225',
      addressCountry: 'US'
    },
    telephone: '+13474165655',
    sameAs: []
  }

  return (
    <>
      <SEO
        title="Brooklyn's Premier Web Design & Digital Marketing Agency"
        description="Sleek Web Designs creates beautiful, effective websites with 15-day delivery. Expert SEO, AI solutions, and Google Business optimization. Over 5 years serving Brooklyn and beyond."
        keywords="web design Brooklyn, digital marketing, SEO services, AI solutions, Google Business Profile, WordPress development, website design NYC"
        schema={schema}
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Web Design That People Love
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-primary-100">
              15-Day Website Delivery Guarantee
            </p>
            <p className="text-lg sm:text-xl mb-8 text-primary-50">
              Brooklyn's premier web design and digital marketing agency. Creating beautiful, effective websites for over 5 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
                Get Your Free Consultation
              </Link>
              <a href="tel:3474165655" className="btn btn-outline-white text-lg px-8 py-4">
                Call (347) 416-5655
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span>1,770+ Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span>15-Day Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card card-hover"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="text-accent-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="text-primary-600 font-semibold inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Why Choose Sleek Web Designs?
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Fast 15-Day Delivery</h3>
                    <p className="text-gray-600">
                      Get your professional website live in just 15 days. We work efficiently without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Results-Driven Approach</h3>
                    <p className="text-gray-600">
                      We focus on delivering websites that convert visitors into customers and drive real business growth.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Brooklyn-Based Expertise</h3>
                    <p className="text-gray-600">
                      Over 5 years serving Brooklyn businesses and beyond with personalized, affordable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-display font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Let's discuss your project and create a custom solution that fits your needs and budget.
              </p>
              <Link to="/contact" className="btn btn-primary w-full text-center mb-4">
                Request Free Consultation
              </Link>
              <a href="tel:3474165655" className="btn btn-secondary w-full text-center">
                Call (347) 416-5655
              </a>
            </div>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-gray-600">
                See how we've helped businesses succeed online
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="card card-hover">
                  <h3 className="text-xl font-bold mb-2">{project.client_name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.industry}</p>
                  <p className="text-gray-700 mb-4">{project.results}</p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 font-semibold inline-flex items-center"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/portfolio" className="btn btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by businesses across Brooklyn and beyond
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-bold">{testimonial.client_name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4">
              Get Started Now
            </Link>
            <Link to="/pricing" className="btn btn-outline-white text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
