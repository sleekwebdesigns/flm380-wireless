import { BUSINESS_INFO, getPhoneLink } from '../config/business'

interface NAPProps {
  variant?: 'default' | 'compact' | 'vertical'
  showMap?: boolean
  className?: string
}

export default function NAP({
  variant = 'default',
  showMap = false,
  className = ''
}: NAPProps) {
  const renderCompact = () => (
    <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
      <a
        href={getPhoneLink()}
        className="flex items-center space-x-2 hover:text-primary-600 transition-colors"
        itemProp="telephone"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span>{BUSINESS_INFO.contact.phone}</span>
      </a>
      <span className="text-gray-400">|</span>
      <a
        href={BUSINESS_INFO.location.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-primary-600 transition-colors"
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>
          <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>,{' '}
          <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{' '}
          <span itemProp="addressRegion">{BUSINESS_INFO.address.stateCode}</span>{' '}
          <span itemProp="postalCode">{BUSINESS_INFO.address.zipCode}</span>
        </span>
      </a>
    </div>
  )

  const renderVertical = () => (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h4 className="font-semibold text-sm text-gray-500 uppercase mb-2">Phone</h4>
        <a
          href={getPhoneLink()}
          className="text-lg font-semibold hover:text-primary-600 transition-colors"
          itemProp="telephone"
        >
          {BUSINESS_INFO.contact.phone}
        </a>
      </div>
      <div>
        <h4 className="font-semibold text-sm text-gray-500 uppercase mb-2">Address</h4>
        <a
          href={BUSINESS_INFO.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-600 transition-colors block"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
          <br />
          <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{' '}
          <span itemProp="addressRegion">{BUSINESS_INFO.address.stateCode}</span>{' '}
          <span itemProp="postalCode">{BUSINESS_INFO.address.zipCode}</span>
        </a>
      </div>
      {BUSINESS_INFO.contact.email && (
        <div>
          <h4 className="font-semibold text-sm text-gray-500 uppercase mb-2">Email</h4>
          <a
            href={`mailto:${BUSINESS_INFO.contact.email}`}
            className="hover:text-primary-600 transition-colors"
            itemProp="email"
          >
            {BUSINESS_INFO.contact.email}
          </a>
        </div>
      )}
    </div>
  )

  const renderDefault = () => (
    <div className={className} itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content={BUSINESS_INFO.name} />
      <meta itemProp="url" content={BUSINESS_INFO.contact.website} />

      <div className="space-y-3">
        <div>
          <a
            href={getPhoneLink()}
            className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            itemProp="telephone"
          >
            {BUSINESS_INFO.contact.phone}
          </a>
        </div>
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <a
            href={BUSINESS_INFO.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
            <br />
            <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{' '}
            <span itemProp="addressRegion">{BUSINESS_INFO.address.stateCode}</span>{' '}
            <span itemProp="postalCode">{BUSINESS_INFO.address.zipCode}</span>
          </a>
        </div>
      </div>

      {showMap && (
        <div className="mt-6 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5040582875777!2d-73.95618218784436!3d40.66286147128177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d4f5676a9ff%3A0x158ed79c99eb8e4e!2sSleek%20Web%20Designs!5e0!3m2!1sen!2sus!4v1764740535122!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sleek Web Designs Location"
          />
        </div>
      )}
    </div>
  )

  if (variant === 'compact') return renderCompact()
  if (variant === 'vertical') return renderVertical()
  return renderDefault()
}
