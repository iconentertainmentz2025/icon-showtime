import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './components/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load pages for better performance
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import Archive from './pages/Archive'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mesh-gradient">
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<AboutUs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </Router>
  )
}

export default App