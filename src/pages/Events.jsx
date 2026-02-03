import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChefHat, Calendar, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const Events = () => {

  return (
    <div className="min-h-screen bg-black pt-20 flex flex-col items-center justify-center relative overflow-hidden">
      <SEOData
        title="Events Coming Soon | ICON Entertainmentz"
        description="We are currently planning our next big authentic Indian entertainment experience. Stay tuned for upcoming concerts and festivals."
        url="/events"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EventSeries",
          "name": "ICON Entertainmentz Events Season 2026",
          "description": "A series of authentic Indian cultural events, Bollywood concerts, and festivals across the USA.",
          "organizer": {
            "@type": "Organization",
            "name": "ICON Entertainmentz",
            "url": "https://icon-entertainmentz.com"
          },
          "location": {
            "@type": "Place",
            "name": "Various Venues",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          },
          "image": "https://icon-entertainmentz.com/Asset_ICON.png",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled"
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container-custom relative z-10 text-center px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-orange to-red-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,140,66,0.5)]">
            <ChefHat className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-tight"
        >
          Something is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 font-brand tracking-wide">Cooking</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We are currently crafting our next spectacular Indian entertainment experience.
          <br className="hidden md:block" />
          Stay tuned for an announcement that will dazzle you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="/#recent-events"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center"
          >
            <Calendar className="w-5 h-5 mr-3 text-brand-orange" />
            View Past Events
          </a>
          <Link
            to="/newsletter"
            className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold tracking-wide hover:bg-orange-600 shadow-[0_0_20px_rgba(255,140,66,0.3)] hover:shadow-[0_0_30px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center"
          >
            Get Notified First
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}

export default Events