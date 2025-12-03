export const BUSINESS_INFO = {
  name: 'Sleek Web Designs',
  legalName: 'Sleek Web Designs LLC',
  description: 'Brooklyn\'s trusted web design and digital marketing agency since 2018. Specializing in website design, SEO, AI solutions, and Google Business Profile optimization.',

  address: {
    street: '405 Rogers Ave Suite 101',
    city: 'Brooklyn',
    state: 'NY',
    stateCode: 'NY',
    zipCode: '11225',
    country: 'United States',
    countryCode: 'US',
    neighborhood: 'Crown Heights'
  },

  contact: {
    phone: '(347) 416-5655',
    phoneRaw: '+13474165655',
    email: 'info@sleekwebdesigns.com',
    website: 'https://www.sleekwebdesigns.com'
  },

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: ''
  },

  location: {
    latitude: 40.66286147128177,
    longitude: -73.95618218784436,
    googleMapsUrl: 'https://maps.app.goo.gl/UDwkRb9CDRPJEtFG7',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sleek+Web+Designs,405+Rogers+Ave+Suite+101,Brooklyn,NY+11225'
  },

  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed'
  },

  hoursStructured: [
    { day: 'Monday', open: '09:00', close: '18:00' },
    { day: 'Tuesday', open: '09:00', close: '18:00' },
    { day: 'Wednesday', open: '09:00', close: '18:00' },
    { day: 'Thursday', open: '09:00', close: '18:00' },
    { day: 'Friday', open: '09:00', close: '18:00' }
  ],

  serviceArea: [
    'Brooklyn',
    'Crown Heights',
    'Park Slope',
    'Prospect Heights',
    'Fort Greene',
    'Flatbush',
    'Williamsburg',
    'DUMBO',
    'Brooklyn Heights',
    'Manhattan',
    'Queens',
    'New York City'
  ],

  services: [
    'Website Design',
    'Website Development',
    'WordPress Development',
    'E-commerce Development',
    'SEO Services',
    'Local SEO',
    'Google Business Profile Optimization',
    'AI Solutions',
    'Digital Marketing',
    'Website Refresh',
    'Responsive Web Design'
  ],

  founded: '2018',
  yearEstablished: 2018,

  rating: {
    value: 4.9,
    count: 1770
  },

  priceRange: '$$',

  logo: {
    url: 'https://www.sleekwebdesigns.com/Sleek Web Designs logo.svg',
    width: 500,
    height: 500
  },

  image: {
    url: 'https://www.sleekwebdesigns.com/og-image.jpg',
    width: 1200,
    height: 630
  }
} as const

export function getFullAddress(): string {
  const { address } = BUSINESS_INFO
  return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`
}

export function getFormattedPhone(): string {
  return BUSINESS_INFO.contact.phone
}

export function getPhoneLink(): string {
  return `tel:${BUSINESS_INFO.contact.phoneRaw.replace(/\D/g, '')}`
}
