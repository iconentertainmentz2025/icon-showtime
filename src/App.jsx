import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load pages for better performance
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import Archive from './pages/Archive'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Socials from './pages/Socials'

import RouteTracker from './components/RouteTracker'

import { useState, useEffect } from 'react'
import LogoLoader from './components/LogoLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <RouteTracker />
      <div className="min-h-screen bg-mesh-gradient">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LogoLoader key="loader" />
          ) : (
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<AboutUs />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/socials" element={<Socials />} />
                </Routes>
              </Suspense>
            </Layout>
          )}
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App