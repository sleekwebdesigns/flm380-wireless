export interface Service {
  id: string
  category: string
  service_name: string
  description: string
  features: string[]
  icon: string
  pricing_info: string
  created_at: string
  updated_at: string
}

export interface ServicePackage {
  id: string
  service_id: string
  package_type: string
  services_included: string[]
  price_range: string
  delivery_time: string
  is_popular: boolean
  created_at: string
}

export interface PortfolioProject {
  id: string
  client_name: string
  industry: string
  project_type: string
  url: string
  images: string[]
  results: string
  testimonial: string
  is_featured: boolean
  created_at: string
}

export interface ClientInquiry {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  services_interested: string[]
  budget_range?: string
  message: string
  status?: string
  created_at?: string
}

export interface Testimonial {
  id: string
  client_name: string
  company: string
  rating: number
  review: string
  service_used: string
  is_approved: boolean
  is_featured: boolean
  created_at: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  content: string
  excerpt: string
  category: string
  tags: string[]
  author: string
  meta_description: string
  featured_image: string
  is_published: boolean
  published_at: string
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  expertise: string[]
  linkedin_url: string
  order: number
  created_at: string
}

export interface ConsultationBooking {
  id?: string
  client_name: string
  client_email: string
  client_phone?: string
  company?: string
  service_interest: string
  preferred_date?: string
  status?: string
  notes?: string
  created_at?: string
}
