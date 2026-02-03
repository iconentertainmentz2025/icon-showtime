import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Events = lazy(() => import('./pages/Events'))

const Contact = lazy(() => import('./pages/Contact'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const Socials = lazy(() => import('./pages/Socials'))

import RouteTracker from './components/RouteTracker'
import ScrollToTop from './components/ScrollToTop'
import LogoLoader from './components/LogoLoader'

import TicketsRedirect from './components/TicketsRedirect'

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
      <ScrollToTop />
      <RouteTracker />
      <div className="min-h-screen bg-background-main">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LogoLoader key="loader" />
          ) : (
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/tickets" element={<TicketsRedirect />} />

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