import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function AISolutions() {
  const solutions = [
    {
      title: 'AI Chatbots',
      description: 'Smart chatbots that provide 24/7 customer support and boost engagement.',
      icon: '💬'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation for blogs, product descriptions, and marketing materials.',
      icon: '✍️'
    },
    {
      title: 'Personalization Engine',
      description: 'Deliver personalized experiences to each visitor based on their behavior and preferences.',
      icon: '🎯'
    },
    {
      title: 'Predictive Analytics',
      description: 'Use AI to predict customer behavior and optimize your marketing strategies.',
      icon: '📊'
    }
  ]

  return (
    <>
      <SEO
        title="AI Solutions Brooklyn | AI Chatbots & Marketing Automation"
        description="Transform your Brooklyn business with AI solutions. AI chatbots, content generation, personalization, and analytics. Automate your marketing and save 60% on manual tasks. Free consultation."
        keywords="AI solutions Brooklyn, AI chatbots, AI marketing automation, artificial intelligence NYC, AI content generation, machine learning Brooklyn, business automation"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              AI Solutions
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Use AI to strengthen your digital presence and automate your marketing tasks.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              AI-Powered Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate your business operations and make smarter decisions with AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card card-hover">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Why Choose AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <p className="text-gray-700">Always-on customer support</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10x</div>
                <p className="text-gray-700">Faster content creation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">60%</div>
                <p className="text-gray-700">Reduction in manual tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Schedule your consultation to learn how AI can grow your Brooklyn business.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-primary-50">
            Get AI Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
