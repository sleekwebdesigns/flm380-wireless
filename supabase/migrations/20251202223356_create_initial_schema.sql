/*
  # Sleek Web Designs - Initial Database Schema

  ## Overview
  This migration creates the complete database schema for Sleek Web Designs website,
  including tables for services, portfolios, inquiries, testimonials, blog, and more.

  ## New Tables

  ### 1. services
  - `id` (uuid, primary key)
  - `category` (text) - Service category (web-design, seo, ai-solutions, gbp-optimization)
  - `service_name` (text) - Name of the service
  - `description` (text) - Detailed service description
  - `features` (jsonb) - Array of service features
  - `icon` (text) - Icon identifier
  - `pricing_info` (text) - Pricing information
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. service_packages
  - `id` (uuid, primary key)
  - `service_id` (uuid, foreign key to services)
  - `package_type` (text) - Package name (starter, professional, enterprise)
  - `services_included` (jsonb) - Array of included services
  - `price_range` (text) - Price range
  - `delivery_time` (text) - Delivery timeline
  - `is_popular` (boolean) - Featured package flag
  - `created_at` (timestamptz)

  ### 3. portfolio_projects
  - `id` (uuid, primary key)
  - `client_name` (text) - Client/company name
  - `industry` (text) - Industry type
  - `project_type` (text) - Type of project
  - `url` (text) - Project URL
  - `images` (jsonb) - Array of image URLs
  - `results` (text) - Project outcomes and results
  - `testimonial` (text) - Client testimonial
  - `is_featured` (boolean)
  - `created_at` (timestamptz)

  ### 4. client_inquiries
  - `id` (uuid, primary key)
  - `name` (text) - Client name
  - `email` (text) - Client email
  - `phone` (text) - Phone number
  - `company` (text) - Company name
  - `services_interested` (jsonb) - Array of service interests
  - `budget_range` (text) - Budget range
  - `message` (text) - Inquiry message
  - `status` (text) - Status (new, contacted, converted, closed)
  - `created_at` (timestamptz)

  ### 5. testimonials
  - `id` (uuid, primary key)
  - `client_name` (text) - Client name
  - `company` (text) - Company name
  - `rating` (integer) - Rating 1-5
  - `review` (text) - Review text
  - `service_used` (text) - Service they used
  - `is_approved` (boolean) - Approval status
  - `is_featured` (boolean) - Featured on homepage
  - `created_at` (timestamptz)

  ### 6. blog_posts
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL slug
  - `title` (text) - Post title
  - `content` (text) - Post content
  - `excerpt` (text) - Short excerpt
  - `category` (text) - Post category
  - `tags` (jsonb) - Array of tags
  - `author` (text) - Author name
  - `meta_description` (text) - SEO meta description
  - `featured_image` (text) - Featured image URL
  - `is_published` (boolean)
  - `published_at` (timestamptz)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 7. team_members
  - `id` (uuid, primary key)
  - `name` (text) - Team member name
  - `role` (text) - Job role
  - `bio` (text) - Biography
  - `photo` (text) - Photo URL
  - `expertise` (jsonb) - Array of expertise areas
  - `linkedin_url` (text)
  - `order` (integer) - Display order
  - `created_at` (timestamptz)

  ### 8. consultation_bookings
  - `id` (uuid, primary key)
  - `client_name` (text)
  - `client_email` (text)
  - `client_phone` (text)
  - `company` (text)
  - `service_interest` (text)
  - `preferred_date` (timestamptz)
  - `status` (text) - Status (pending, confirmed, completed, cancelled)
  - `notes` (text)
  - `created_at` (timestamptz)

  ## Security
  - Enable Row Level Security on all tables
  - Add policies for public read access to approved/published content
  - Add policies for authenticated users to manage content

  ## Notes
  - All timestamps use timestamptz for timezone awareness
  - JSONB used for flexible array/object storage
  - Default values provided for boolean and timestamp fields
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  service_name text NOT NULL,
  description text NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  icon text DEFAULT '',
  pricing_info text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create service_packages table
CREATE TABLE IF NOT EXISTS service_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  package_type text NOT NULL,
  services_included jsonb DEFAULT '[]'::jsonb,
  price_range text DEFAULT '',
  delivery_time text DEFAULT '',
  is_popular boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  industry text DEFAULT '',
  project_type text DEFAULT '',
  url text DEFAULT '',
  images jsonb DEFAULT '[]'::jsonb,
  results text DEFAULT '',
  testimonial text DEFAULT '',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create client_inquiries table
CREATE TABLE IF NOT EXISTS client_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  services_interested jsonb DEFAULT '[]'::jsonb,
  budget_range text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text DEFAULT '',
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  service_used text DEFAULT '',
  is_approved boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  excerpt text DEFAULT '',
  category text DEFAULT '',
  tags jsonb DEFAULT '[]'::jsonb,
  author text DEFAULT '',
  meta_description text DEFAULT '',
  featured_image text DEFAULT '',
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text DEFAULT '',
  photo text DEFAULT '',
  expertise jsonb DEFAULT '[]'::jsonb,
  linkedin_url text DEFAULT '',
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text DEFAULT '',
  company text DEFAULT '',
  service_interest text DEFAULT '',
  preferred_date timestamptz,
  status text DEFAULT 'pending',
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Public read policies for published/approved content
CREATE POLICY "Public can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view service packages"
  ON service_packages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view featured portfolio projects"
  ON portfolio_projects FOR SELECT
  TO anon, authenticated
  USING (is_featured = true);

CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Public can view team members"
  ON team_members FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert policies for public forms
CREATE POLICY "Public can submit inquiries"
  ON client_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can submit consultation bookings"
  ON consultation_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Authenticated users can manage all content
CREATE POLICY "Authenticated users can manage services"
  ON services FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage service packages"
  ON service_packages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage portfolio"
  ON portfolio_projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage inquiries"
  ON client_inquiries FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage team members"
  ON team_members FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage bookings"
  ON consultation_bookings FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_industry ON portfolio_projects(industry);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_client_inquiries_status ON client_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
