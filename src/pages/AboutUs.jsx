import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Calendar, MapPin, Heart, Award, Music } from 'lucide-react'
import SEOData from '../components/SEOData'

const AboutUs = () => {
  const stats = [
    { icon: Calendar, label: 'Events Hosted', value: '50+' },
    { icon: Users, label: 'Happy Attendees', value: '10K+' },
    { icon: MapPin, label: 'Cities Covered', value: '15+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
  ]

  const features = [
    {
      icon: Music,
      title: 'World-Class Entertainment',
      description: 'From Bollywood concerts to cultural festivals, we bring the best of Indian entertainment to America.',
    },
    {
      icon: Heart,
      title: 'Cultural Connection',
      description: 'Bridging communities and celebrating Indian heritage through immersive cultural experiences.',
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Every event is crafted with attention to detail, ensuring unforgettable moments for our audience.',
    }
  ]

  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ICON Entertainmentz",
    "url": "https://icon-entertainmentz.com",
    "logo": "https://icon-entertainmentz.com/Asset_ICON.png",
    "description": "Premier Indian entertainment events company specializing in Bollywood concerts, cultural festivals, and exclusive events across the USA",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-512-555-0123",
      "contactType": "customer service",
      "email": "info@icon-entertainmentz.com"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "knowsAbout": [
      "Indian Entertainment",
      "Bollywood Concerts", 
      "Cultural Festivals",
      "Event Management",
      "Indian Music Events",
      "Cultural Events"
    ],
    "sameAs": [
      "https://www.facebook.com/iconentertainmentz",
      "https://www.instagram.com/icon_entertainmentz/",
      "https://www.youtube.com/iconentertainmentz",
      "https://twitter.com/iconentertainmentz"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Indian cultural events and entertainment services",
      "category": "Entertainment Services"
    }
  }

  return (
    <div className="pt-16">
      <SEOData
        title="ICON Entertainmentz - Premier Indian Cultural Events | Austin, Texas"
        description="Experience authentic Indian entertainment with ICON Entertainmentz. Bollywood concerts, cultural festivals, and exclusive events across the USA. Book your tickets for unforgettable experiences in Austin, Texas and beyond."
        keywords="ICON Entertainmentz, Indian events Austin, Bollywood concerts, cultural festivals, Indian entertainment USA, Austin events, Texas cultural events, Indian music concerts, festival tickets, entertainment booking"
        url="/"
        structuredData={homePageStructuredData}
      />
      
      {/* Hero Section */}
      <section className="hero-section section-padding text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                <img 
                  src="/Asset_ICON_White.png" 
                  alt="ICON Entertainmentz Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-orange-400 icon-text">ICON</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-semibold mb-4">
              Entertainmentz
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Bringing authentic Indian entertainment experiences to communities across America
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/events" className="btn-primary inline-flex items-center">
                Explore Events <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Plan Your Event
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born in the heart of Austin, Texas, <span className="icon-text text-orange-500">ICON</span> Entertainmentz has become the premier destination 
              for authentic Indian entertainment experiences across the United States.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to bridge cultures and celebrate the rich heritage of India, 
                <span className="icon-text text-orange-500">ICON</span> Entertainmentz started as a small initiative in Austin and has grown into a 
                nationally recognized entertainment company.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in bringing world-class Indian artists, musicians, and performers to 
                American stages, creating magical experiences that resonate with the Indian diaspora 
                while introducing American audiences to the beauty of Indian culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-orange-100 leading-relaxed mb-6">
                To create unforgettable entertainment experiences that celebrate Indian culture, 
                foster community connections, and build bridges between diverse communities across America.
              </p>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-orange-200" />
                <span className="text-orange-100">Connecting hearts through culture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best of Indian entertainment with our carefully curated events and productions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-orange-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Experience the Magic?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Join thousands of others who have experienced the magic of <span className="icon-text text-white">ICON</span> Entertainmentz events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events" className="btn-secondary bg-white text-orange-500 hover:bg-gray-50">
                View Upcoming Events
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-orange-500">
                Plan Your Event
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
