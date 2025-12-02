import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { BlogPost } from '../types'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })

      if (data) setPosts(data)
    }

    fetchPosts()
  }, [])

  const categories = ['all', ...new Set(posts.map(p => p.category).filter(Boolean))]
  const filteredPosts = category === 'all' ? posts : posts.filter(p => p.category === category)

  return (
    <>
      <SEO
        title="Blog - Web Design & Digital Marketing Insights"
        description="Stay updated with the latest web design trends, SEO tips, AI innovations, and digital marketing strategies from Sleek Web Designs."
        keywords="web design blog, SEO tips, digital marketing blog, AI technology, Brooklyn web design"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Expert tips and insights on web design, SEO, AI, and digital marketing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    category === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'All Posts' : cat}
                </button>
              ))}
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="card card-hover"
                >
                  {post.featured_image && (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="text-sm text-primary-600 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Blog posts coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
