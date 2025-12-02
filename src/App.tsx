import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WebsiteRefresh from './pages/services/WebsiteRefresh'
import SEOServices from './pages/services/SEOServices'
import AISolutions from './pages/services/AISolutions'
import GoogleBusiness from './pages/services/GoogleBusiness'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/website-refresh" element={<WebsiteRefresh />} />
              <Route path="/services/seo" element={<SEOServices />} />
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              <Route path="/services/google-business" element={<GoogleBusiness />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
