import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Star, Ticket, Phone, Mail, Share2, Heart, Music, ChevronRight, Instagram, Facebook, Youtube, ExternalLink, Info, AlertTriangle, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const Events = () => {
  const [showTicketModal, setShowTicketModal] = useState(false)

  // Featured upcoming event data
  const featuredEvent = {
    title: "Sankranti Mahostav 2026",
    subtitle: "BIGGEST SANKRANTI MAHOTSAV 2026",
    date: "2026-01-17",
    time: "10:00 AM – 6:00 PM CST",
    venue: "Rio Ranch Fields",
    address: "Rio Ranch Fields, Liberty Hill, TX 78642",
    price: "Free Entry",
    status: "registration-open",
    organizer: "Sapphire_5xii events and productions",
    partner: "ICON Entertainmentz",
    megaSponsor: "@theprimedeveloper_official",
    promotionalPartner: "Austin Dreamz Events",
    registrationLink: "https://eventprix.com/event/Sankranti-Mahostav-20262",
    eventbriteLink: "https://austin-sankranthi-2026.eventbrite.com",
    eventId: "sankranti-2026",
    ticketTiers: [
      {
        name: "General Entry",
        price: "Free",
        description: "Open to all"
      },
      {
        name: "Dance (Solo)",
        price: "$25",
        description: "Time limit 4 min"
      },
      {
        name: "Dance (Group)",
        price: "$100",
        description: "4+ performers. Time limit 5 min"
      },
      {
        name: "Fashion Show (Adults)",
        price: "$30",
        description: "Must form own team. Time limit 5-7 min"
      },
      {
        name: "Kids Fancy Dress",
        price: "$15",
        description: "No practice needed"
      },
      {
        name: "Talent Show (Kids)",
        price: "$20",
        description: "Dance, music, drama, fashion, etc."
      },
      {
        name: "Kite Flying",
        price: "$10",
        description: "Participate in the Kite Festival"
      },
      {
        name: "Rangoli (Group)",
        price: "$25",
        description: "Max 3 participants. Reg closes Jan 9"
      },
      {
        name: "Rangoli (Solo)",
        price: "$10",
        description: "Registration closes Jan 9"
      }
    ],
    description: "Get ready, Austin! Celebrate the joy, colors, and traditions of Sankranti with family & friends at the grandest Sankranti festival of the year. Experience a vibrant day filled with tradition, culture, and togetherness!",
    highlights: [
      "🎨 Rangoli Competition",
      "🌾 Traditional Sankranti Vibes",
      "🪁 Kite Festival",
      "🛍️ Shopping & Community Fun",
      "🎶 Entertainment for All Ages",
      "📸 Haridasu Photo-booth",
      "🎟️ Free Entry",
      "🅿️ Free Parking"
    ],
    features: [
      {
        name: "Competitions",
        description: "Dance, Rangoli, Fashion Show, and Talent Show"
      },
      {
        name: "Festival Vibes",
        description: "Kite flying and traditional celebrations"
      },
      {
        name: "Family Fun",
        description: "Shopping, entertainment, and photo booth"
      },
      {
        name: "Convenience",
        description: "Free Entry & Free Parking"
      }
    ],
    contact: {
      email: "info@icon-entertainmentz.com",
      instagram: "https://www.instagram.com/icon_entertainmentz/",
      facebook: "https://www.facebook.com/iconentertainmentz",
      youtube: "https://www.youtube.com/@ICONEntertainmentz"
    }
  }

  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Chicago'
    }
    return new Date(dateString + 'T12:00:00').toLocaleDateString('en-US', options)
  }

  const faqData = [
    {
      question: "Is there an entry fee?",
      answer: "No, General Entry is completely FREE for everyone!"
    },
    {
      question: "Is parking available?",
      answer: "Yes, there is ample FREE PARKING available at the venue."
    },
    {
      question: "How do I register for competitions?",
      answer: `You can register for Dance, Fashion Show, Rangoli, and other competitions via our official registration link: ${featuredEvent.registrationLink}`
    },
    {
      question: "When do Rangoli registrations close?",
      answer: "Registration for the Rangoli Competition (Solo & Group) closes on January 9th. Please register early!"
    }
  ]

  const eventsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "name": featuredEvent.title,
        "description": featuredEvent.description,
        "startDate": `${featuredEvent.date}T10:00:00-06:00`,
        "endDate": `${featuredEvent.date}T18:00:00-06:00`,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": featuredEvent.venue,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rio Ranch Fields",
            "addressLocality": "Liberty Hill",
            "addressRegion": "TX",
            "postalCode": "78642",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": featuredEvent.organizer,
          "url": "https://icon-entertainmentz.com"
        },
        "image": [
          "https://icon-entertainmentz.com/Sankranthi%20Event.jpg"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "EventPrix - Low Fees",
            "price": "0",
            "priceCurrency": "USD",
            "url": featuredEvent.registrationLink,
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Eventbrite",
            "price": "0",
            "priceCurrency": "USD",
            "url": featuredEvent.eventbriteLink,
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    ]
  }

  const handleRegisterClick = (location) => {
    trackCustomEvents.ticketClick(`${featuredEvent.title} - ${location} - Open Modal`)
    setShowTicketModal(true)
  }

  const handleSourceSelect = (source) => {
    trackCustomEvents.ticketPlatformSelect(featuredEvent.title, source)
    let url = featuredEvent.registrationLink
    if (source === 'Eventbrite') url = featuredEvent.eventbriteLink
    window.open(url, '_blank')
    setShowTicketModal(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title={`${featuredEvent.title} | ${featuredEvent.subtitle} | ICON Entertainmentz`}
        description={`Join us for ${featuredEvent.title} on ${formatDate(featuredEvent.date)}. ${featuredEvent.description} Free Entry & Parking!`}
        keywords="Sankranti Mahostav 2026, Austin Sankranti event, Indian festival Austin, Rangoli competition, Kite festival Texas, Liberty Hill events"
        url="/events"
        structuredData={eventsStructuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-300 via-sky-100 to-white overflow-hidden">
        {/* Floating Kites Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [10, 15, 10]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-16 h-16 bg-red-500/20 rotate-45 backdrop-blur-sm rounded-lg"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, -15, 0],
              rotate: [-10, -5, -10]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-20 right-20 w-12 h-12 bg-yellow-500/20 rotate-12 backdrop-blur-sm rounded-lg"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [45, 50, 45]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-1/4 w-8 h-8 bg-green-500/20 rotate-45 backdrop-blur-sm rounded-sm"
          ></motion.div>
          {/* New Kites */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [30, 40, 30]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/3 left-10 w-10 h-10 bg-purple-500/20 rotate-45 backdrop-blur-sm rounded-lg"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -10, 0],
              rotate: [15, 5, 15]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-20 right-10 w-14 h-14 bg-orange-500/20 rotate-12 backdrop-blur-sm rounded-lg"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              rotate: [60, 65, 60]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-1/4 right-1/3 w-6 h-6 bg-pink-500/20 rotate-45 backdrop-blur-sm rounded-sm"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
              rotate: [-20, -10, -20]
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute top-20 left-1/2 w-9 h-9 bg-blue-500/20 rotate-12 backdrop-blur-sm rounded-lg"
          ></motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-sky-900 text-sm font-semibold mb-6 border border-sky-100 shadow-sm"
            >
              <Star className="w-4 h-4 mr-2" />
              Upcoming Event
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold text-sky-950 mb-4 tracking-tight drop-shadow-sm"
            >
              {featuredEvent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-sky-800 font-medium mb-8 uppercase tracking-widest"
            >
              {featuredEvent.subtitle}
            </motion.p>

            {/* Quick Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-6 text-gray-800 mb-12"
            >
              <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-sm border border-sky-100 px-5 py-2.5 rounded-full">
                <Calendar className="w-5 h-5 mr-2.5 text-orange-500" />
                <span className="font-semibold">{formatDate(featuredEvent.date)}</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-sm border border-sky-100 px-5 py-2.5 rounded-full">
                <Clock className="w-5 h-5 mr-2.5 text-orange-500" />
                <span className="font-semibold">{featuredEvent.time}</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-sm border border-sky-100 px-5 py-2.5 rounded-full">
                <MapPin className="w-5 h-5 mr-2.5 text-orange-500" />
                <span className="font-semibold">{featuredEvent.venue}</span>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRegisterClick('hero_primary')}
                className="px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group border-2 border-orange-500"
              >
                <Ticket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Register Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-sky-900 text-lg font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-white"
              >
                View Details
              </motion.button>
            </motion.div>
          </div>

          {/* Event Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white">
              <img
                src="/Sankranthi Event.jpg"
                alt="Sankranti Mahostav 2026 Flyer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* About the Event */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Festival</h2>
                <div className="prose prose-lg text-gray-700 space-y-4 leading-relaxed">
                  <p>{featuredEvent.description}</p>
                  <p>
                    Don’t miss this unforgettable celebration of tradition, culture, and togetherness!
                  </p>
                </div>
              </div>

              {/* Event Highlights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Festival Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow"
                    >
                      <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organizers & Sponsors */}
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">Organized By</h4>
                    <p className="font-medium text-gray-900">{featuredEvent.organizer}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">Associated Partner</h4>
                    <p className="font-medium text-gray-900">{featuredEvent.partner}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">Mega Sponsor</h4>
                    <p className="font-medium text-gray-900">{featuredEvent.megaSponsor}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 text-sm uppercase tracking-wide">Promotional Partner</h4>
                    <p className="font-medium text-gray-900">{featuredEvent.promotionalPartner}</p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-100 rounded-xl p-6 flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-800 mb-1">Event Disclaimer</p>
                  <p>By registering for or attending Sankranti Mahotsav, participants ACCEPT that participation is at their own risk. The organizers, sponsors, volunteers, and affiliates disclaim all liability for any injury, loss, or damage arising before, during, or after the event. Attendees are solely responsible for their safety, conduct, and personal property. Participation constitutes acceptance of these terms.</p>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Registration Information */}
              <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Registration</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full uppercase">Open</span>
                </div>

                <div className="space-y-6">
                  {/* Register CTA */}
                  <div className="mb-6">
                    <button
                      onClick={() => handleRegisterClick('Sidebar')}
                      className="w-full flex items-center justify-center px-4 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors duration-200 shadow-md"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-2">Multiple payment options available</p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Entry & Competitions</h4>
                    {featuredEvent.ticketTiers.map((tier, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 -mx-2 rounded transition-colors">
                        <div className="flex-1 pr-2">
                          <span className="font-medium text-gray-800 block text-sm">{tier.name}</span>
                          {tier.description && <span className="text-xs text-gray-500 block">{tier.description}</span>}
                        </div>
                        <span className="font-bold text-orange-600 text-sm whitespace-nowrap">{tier.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-800">
                      <strong>Note:</strong> Rangoli Competition registration closes on <strong>January 9th</strong>. Register early!
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Summary */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Why Attend?</h4>
                <ul className="space-y-4">
                  {featuredEvent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-orange-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <Star className="w-3 h-3 text-orange-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm block">{feature.name}</span>
                        <span className="text-xs text-gray-600">{feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-orange-200 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm mr-3 font-bold">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-11">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Grand Celebration!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the biggest Sankranti Mahotsav in Texas. Free entry, free parking, and endless fun awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleRegisterClick('CTA')}
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Ticket Selection Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowTicketModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative"
          >
            {/* Modal Header */}
            <div className="bg-sky-500 p-6 text-white relative">
              <button
                onClick={() => setShowTicketModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-6 h-6">✕</div>
              </button>
              <h3 className="text-2xl font-bold mb-2">Select Registration Platform</h3>
              <p className="text-sky-100">Choose your preferred platform to register</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-4">
              {/* EventPrix Option */}
              <button
                onClick={() => handleSourceSelect('EventPrix')}
                className="w-full group flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">EventPrix</span>
                  <span className="text-sm text-gray-500">Low service fees</span>
                </div>
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-orange-200 transition-colors">
                  <Ticket className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                </div>
              </button>

              {/* Eventbrite Option */}
              <button
                onClick={() => handleSourceSelect('Eventbrite')}
                className="w-full group flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">Eventbrite</span>
                  <span className="text-sm text-gray-500">Standard platform</span>
                </div>
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-orange-200 transition-colors">
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                </div>
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Both platforms offer secure registration.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Events