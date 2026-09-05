import { useEffect, useMemo, useState } from 'react'


import Header from './components/Header'
import Footer from './components/Footer'

//page
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ServicesPage from './pages/ServicePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


//hi sayangg
function currentPath() {
  const hash = window.location.hash.replace(/^#/, '')
  return hash && hash.startsWith('/') ? hash : '/'
}


export default function App() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const handleChange = () => setPath(currentPath())
    window.addEventListener('hashchange', handleChange)
    return () => window.removeEventListener('hashchange', handleChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [path])

  const page = useMemo(() => {
    switch (path) {
      case '/': return <HomePage />
      case '/about': return <AboutPage />
      case '/portfolio': return <PortfolioPage />
      case '/services': return <ServicesPage />
      case '/contact': return <ContactPage />
      default: return <NotFoundPage />
    }
  }, [path])

  return (
    <div className="app-shell">
      <Header path={path} />
      {page}  
      <Footer />
    </div>
  )
}
