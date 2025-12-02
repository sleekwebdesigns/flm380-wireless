import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { PortfolioProject } from '../types'

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })

      if (data) setProjects(data)
    }

    fetchProjects()
  }, [])

  const industries = ['all', ...new Set(projects.map(p => p.industry).filter(Boolean))]
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.industry === filter)

  return (
    <>
      <SEO
        title="Portfolio - Our Work"
        description="Explore our portfolio of successful web design and digital marketing projects. See how we've helped businesses across Brooklyn and beyond succeed online."
        keywords="web design portfolio, case studies, client work, website examples"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover how we've helped businesses succeed online with beautiful, effective websites.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {industries.length > 1 && (
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    filter === industry
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all' ? 'All Projects' : industry}
                </button>
              ))}
            </div>
          )}

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="card card-hover">
                  <h3 className="text-xl font-bold mb-2">{project.client_name}</h3>
                  <p className="text-primary-600 text-sm font-semibold mb-3">{project.industry}</p>
                  <p className="text-gray-600 mb-4">{project.results}</p>
                  {project.testimonial && (
                    <p className="text-gray-700 italic mb-4">"{project.testimonial}"</p>
                  )}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">More portfolio projects coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
