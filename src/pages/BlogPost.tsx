import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'
import { BlogPost as BlogPostType } from '../types'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostType | null>(null)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return

      const { data } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle()

      if (data) setPost(data)
    }

    fetchPost()
  }, [slug])

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.meta_description || post.excerpt}
        keywords={post.tags?.join(', ')}
        type="article"
      />

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
              ← Back to Blog
            </Link>

            <header className="mb-8">
              <div className="text-sm text-primary-600 font-semibold mb-2">
                {post.category}
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
            </header>

            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-xl mb-8"
              />
            )}

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
