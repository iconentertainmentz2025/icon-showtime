import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Heart, Music } from 'lucide-react'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const AboutUs = () => {
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
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About ICON Entertainmentz",
        "description": "Discover ICON Entertainmentz, the leading organizer of Indian cultural events, Bollywood concerts, and festivals in Austin, Texas and across the USA.",
        "url": "https://icon-entertainmentz.com/about",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://icon-entertainmentz.com/images/ICON_Logos/Asset_ICON_White.png"
        },
        "mainEntity": { "@id": "https://icon-entertainmentz.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://icon-entertainmentz.com/#organization",
        "name": "ICON Entertainmentz",
        "url": "https://icon-entertainmentz.com",
        "logo": "https://icon-entertainmentz.com/images/ICON_Logos/Asset_ICON.png",
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
          "telephone": "+1-512-884-0540",
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
    ]
  }

  return (
    <div className="bg-black min-h-screen">
      <SEOData
        title="About ICON Entertainmentz | Premier Indian Cultural Events in USA"
        description="Discover ICON Entertainmentz, the leading organizer of Indian cultural events, Bollywood concerts, and festivals in Austin, Texas and across the USA. We bridge cultures through world-class entertainment."
        keywords="ICON Entertainmentz, about us, Indian events organizer, Bollywood concerts USA, cultural festivals Austin, Indian entertainment company, event management Texas"
        url="/about"
        structuredData={homePageStructuredData}
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 center w-full h-[500px] bg-brand-orange/5 blur-[120px] rounded-full" />
        </div>

        <div className="container-custom relative z-10 text-center">
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
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full" />
                <img
                  src="/images/ICON_Logos/Asset_ICON_White.png"
                  alt="ICON Entertainmentz Logo"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,140,66,0.3)]"
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 font-brand tracking-wide">ICON</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-400 font-light tracking-[0.2em] uppercase mb-4">
              Entertainmentz
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Bringing authentic Indian entertainment experiences to communities across America
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link
                to="/events"
                onClick={() => trackCustomEvents.eventInquiry('About Us - Hero CTA')}
                className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,140,66,0.4)] hover:shadow-[0_0_30px_rgba(255,140,66,0.6)] flex items-center justify-center"
              >
                EXPLORE EVENTS <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackCustomEvents.contactForm('about_us_hero')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold tracking-widest hover:bg-white/10 hover:border-brand-orange/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                PLAN YOUR EVENT
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Who We <span className="text-brand-orange">Are</span>
            </h2>
            <div className="h-1 w-24 bg-brand-orange mx-auto mb-8" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Born in the heart of Austin, Texas, <span className="font-brand text-brand-orange">ICON</span> Entertainmentz has become the premier destination
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
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Founded with a vision to bridge cultures and celebrate the rich heritage of India,
                <span className="font-brand text-brand-orange mx-2">ICON</span> Entertainmentz started as a small initiative in Austin and has grown into a
                nationally recognized entertainment company.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                We specialize in bringing world-class Indian artists, musicians, and performers to
                American stages, creating magical experiences that resonate with the Indian diaspora
                while introducing American audiences to the beauty of Indian culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl overflow-hidden group"
            >
              {/* Glassmorphism Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-brand-orange/30 transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  To create unforgettable entertainment experiences that celebrate Indian culture,
                  foster community connections, and build bridges between diverse communities across America.
                </p>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                  <Heart className="w-6 h-6 text-brand-orange" />
                  <span className="text-brand-orange font-medium tracking-wide">Connecting hearts through culture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-lighter relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              What We <span className="text-brand-orange">Offer</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                  className="relative p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group-hover:bg-white/10 group-hover:border-brand-orange/30 transition-all duration-300" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300 border border-brand-orange/20">
                      <Icon className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 to-black opacity-30" />

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Ready to Experience the Magic?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Join thousands of others who have experienced the magic of <span className="font-brand text-brand-orange">ICON</span> Entertainmentz
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Link
                to="/events"
                onClick={() => trackCustomEvents.eventInquiry('About Us - Bottom CTA')}
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-orange text-white rounded-full font-bold tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-[0_0_25px_rgba(255,140,66,0.4)] hover:shadow-[0_0_40px_rgba(255,140,66,0.6)] transform hover:scale-105"
              >
                VIEW UPCOMING EVENTS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackCustomEvents.contactForm('about_us_bottom')}
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white border border-white/30 rounded-full font-bold tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                PLAN YOUR EVENT
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

