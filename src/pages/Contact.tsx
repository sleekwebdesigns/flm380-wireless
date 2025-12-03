import { useState } from 'react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { ClientInquiry } from '../types'

export default function Contact() {
  const [formData, setFormData] = useState<Partial<ClientInquiry>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    services_interested: [],
    budget_range: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Website Refresh',
    'SEO Services',
    'AI Solutions',
    'Google Business Profile Optimization'
  ]

  const handleServiceToggle = (service: string) => {
    const current = formData.services_interested || []
    const updated = current.includes(service)
      ? current.filter(s => s !== service)
      : [...current, service]
    setFormData({ ...formData, services_interested: updated })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase
        .from('client_inquiries')
        .insert([formData as ClientInquiry])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        services_interested: [],
        budget_range: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us - Get Your Free Consultation"
        description="Contact Sleek Web Designs for a free consultation. Call (347) 416-5655. Located at 405 Rogers Ave Suite 101, Brooklyn, NY 11225."
        keywords="contact Sleek Web Designs, Brooklyn web design contact, free consultation, web design quote"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services_interested?.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget_range}
                    onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full text-lg py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href="tel:3474165655" className="text-lg font-semibold text-primary-600 hover:text-primary-700">
                      (347) 416-5655
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <a
                      href="https://maps.app.goo.gl/UDwkRb9CDRPJEtFG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      405 Rogers Ave Suite 101<br />
                      Brooklyn, NY 11225
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-primary-50">
                <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="card bg-accent-50">
                <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
                <p className="text-gray-700">
                  Every project starts with a free consultation to discuss your needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Visit Our Office
            </h2>
            <a
              href="https://maps.app.goo.gl/UDwkRb9CDRPJEtFG7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-primary-600 transition-colors duration-200 inline-block"
            >
              405 Rogers Ave Suite 101<br />
              Brooklyn, NY 11225
            </a>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5040582875777!2d-73.95618218784436!3d40.66286147128177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d4f5676a9ff%3A0x158ed79c99eb8e4e!2sSleek%20Web%20Designs!5e0!3m2!1sen!2sus!4v1764740535122!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sleek Web Designs Location"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Sleek+Web+Designs,405+Rogers+Ave+Suite+101,Brooklyn,NY+11225"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
