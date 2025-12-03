import { Link } from 'react-router-dom'

interface RelatedService {
  title: string
  description: string
  icon: string
  link: string
  anchorText: string
}

interface RelatedServicesProps {
  services: RelatedService[]
  title?: string
}

export default function RelatedServices({ services, title = "Related Services" }: RelatedServicesProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card card-hover group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {service.description}
                    </p>
                    <span className="text-primary-600 font-semibold inline-flex items-center">
                      {service.anchorText}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
