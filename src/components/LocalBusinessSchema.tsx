import { Helmet } from 'react-helmet-async'
import { BUSINESS_INFO } from '../config/business'

interface LocalBusinessSchemaProps {
  additionalType?: string
  serviceType?: string
}

export default function LocalBusinessSchema({
  additionalType,
  serviceType
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
    '@id': BUSINESS_INFO.contact.website,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.contact.website,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.logo.url,
      width: BUSINESS_INFO.logo.width,
      height: BUSINESS_INFO.logo.height
    },
    image: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.image.url,
      width: BUSINESS_INFO.image.width,
      height: BUSINESS_INFO.image.height
    },
    telephone: BUSINESS_INFO.contact.phoneRaw,
    priceRange: BUSINESS_INFO.priceRange,
    foundingDate: BUSINESS_INFO.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.stateCode,
      postalCode: BUSINESS_INFO.address.zipCode,
      addressCountry: BUSINESS_INFO.address.countryCode
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.location.latitude,
      longitude: BUSINESS_INFO.location.longitude
    },
    openingHoursSpecification: BUSINESS_INFO.hoursStructured.map(day => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.day,
      opens: day.open,
      closes: day.close
    })),
    areaServed: BUSINESS_INFO.serviceArea.map(area => ({
      '@type': 'City',
      name: area
    })),
    hasMap: BUSINESS_INFO.location.googleMapsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.value,
      reviewCount: BUSINESS_INFO.rating.count,
      bestRating: 5,
      worstRating: 1
    },
    sameAs: Object.values(BUSINESS_INFO.social).filter(url => url),
    ...(additionalType && { additionalType }),
    ...(serviceType && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: BUSINESS_INFO.services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS_INFO.name
            }
          }
        }))
      }
    })
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
