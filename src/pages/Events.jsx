import { Calendar, MapPin, Clock, Users, Star, Ticket, Phone, Mail, Share2, Heart, Music, ChevronRight, Instagram, Facebook, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const Events = () => {
  // Featured upcoming event data
  const featuredEvent = {
    title: "ICONIC Countdown 2026",
    subtitle: "Austin's Biggest Desi New Year Celebration",
    date: "2025-12-31",
    time: "7:00 PM CST",
    venue: "The Crossover",
    address: "1717 Scottsdale Drive, Leander, TX 78641",
    price: "Starting from $47.03",
    status: "on-sale",
    titleSponsor: "Spicy Matka, Leander",
    specialGuest: "Faria Abdullah",
    specialHost: "RJ Hemant",
    eventbriteLink: "https://iconiccountdown2026.eventbrite.com",
    eventId: "1829421622319",
    ticketTiers: [
      {
        name: "General Admission - EARLY BIRD",
        price: "$70.15",
        details: "incl. $5.80 Fee / incl. $5.35 Sales Tax",
        description: "Limited time deal."
      },
      {
        name: "Kid General Admission - EARLY BIRD",
        price: "$47.03",
        details: "incl. $4.45 Fee / incl. $3.58 Sales Tax",
        description: "Tickets for age 5+ seating provided"
      },
      {
        name: "Family Admission - EARLY BIRD",
        price: "$197.20",
        details: "incl. $13.17 Fee / incl. $15.03 Sales Tax",
        description: "2 ADULTS + 2 KIDS"
      },
      {
        name: "KIDS below 5",
        price: "Free",
        description: "Entry without seat"
      },
      {
        name: "VIP SINGLE - EARLY BIRD",
        price: "$139.45",
        details: "incl. $9.82 Fee / incl. $10.63 Sales Tax",
        description: "Premium seating and services"
      },
      {
        name: "VIP Table of 10 - EARLY BIRD",
        price: "$1,271.45",
        details: "incl. $75.55 Fee / incl. $96.90 Sales Tax",
        description: "Premium table with VIP services"
      }
    ],
    description: "Ring in the New Year with lights, laughter, and unforgettable memories at ICONIC Countdown 2026, Austin's most electrifying Desi celebration! Join us for a glamorous, family-friendly night hosted by the one and only RJ Hemant, featuring Tollywood star Faria Abdullah — visiting Austin for the very first time!",
    highlights: [
      "Fashion Walk – Step into the spotlight with style and glam",
      "Kids Zone with games and activities",
      "Food Vendor with Desi and fusion flavors",
      "Balloon Drop at Midnight",
      "Face Painting & Balloon Twisting",
      "Free Parking",
      "LED Dance Floor",
      "Live DJ All Night",
      "Dance Performances",
      "12AM Cake Cutting Ceremony with Faria Abdullah"
    ],
    features: [
      {
        name: "Family-Friendly",
        description: "Special activities and entertainment for all ages"
      },
      {
        name: "Celebrity Performance",
        description: "Live performance by Tollywood star Faria Abdullah"
      },
      {
        name: "Venue",
        description: "Spacious indoor venue with ample free parking and seating"
      },
      {
        name: "Entertainment",
        description: "Fashion walk, cocktail hour, and midnight countdown"
      }
    ],
    contact: {
      sponsorship: "info@icon-entertainmentz.com",
      instagram: "https://www.instagram.com/icon_entertainmentz/",
      facebook: "https://www.facebook.com/people/ICON-Entertainmentz/61581383123308/#",
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

  const eventsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": featuredEvent.title,
    "description": featuredEvent.description,
    "startDate": `${featuredEvent.date}T19:00:00-06:00`,
    "endDate": `${featuredEvent.date}T23:59:00-06:00`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": featuredEvent.venue,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": featuredEvent.address,
        "addressLocality": "Leander",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "ICON Entertainmentz",
      "url": "https://icon-entertainmentz.com",
      "telephone": "+1-512-884-0540",
      "email": "info@icon-entertainmentz.com",
      "sameAs": [
        "https://www.facebook.com/people/ICON-Entertainmentz/61581383123308/",
        "https://www.instagram.com/icon_entertainmentz/",
        "https://www.youtube.com/@ICONEntertainmentz",
        "https://twitter.com/iconentertainmentz"
      ]
    },
    "performer": [
      {
        "@type": "Person",
        "name": featuredEvent.specialGuest,
        "description": "Tollywood Star"
      },
      {
        "@type": "Person",
        "name": featuredEvent.specialHost,
        "description": "Special Host"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "lowPrice": "47.03",
      "highPrice": "1271.45",
      "url": featuredEvent.eventbriteLink,
      "validFrom": "2024-10-24T00:00:00-06:00",
      "category": "Event Tickets"
    }
  }

  const handleTicketClick = (location) => {
    trackCustomEvents.ticketClick(`${featuredEvent.title} - ${location}`)
    window.open(featuredEvent.eventbriteLink, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title={`${featuredEvent.title} | Upcoming Indian Events & Concerts | ICON Entertainmentz`}
        description={`Join us for ${featuredEvent.title} - ${featuredEvent.subtitle}. Featuring ${featuredEvent.specialGuest} and hosted by ${featuredEvent.specialHost}. Date: ${formatDate(featuredEvent.date)} at ${featuredEvent.venue}. Book tickets now!`}
        keywords="upcoming Indian events, Bollywood concerts Austin, Desi New Year 2026, Faria Abdullah event, RJ Hemant host, ICON Entertainmentz tickets, Leander cultural events"
        url="/events"
        structuredData={eventsStructuredData}
      />

      {/* Hero Section with Event Details */}
      <section className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title Sponsor */}
          <div className="text-center mb-8">
            <p className="text-orange-600 font-medium">Title Sponsor: {featuredEvent.titleSponsor}</p>
          </div>
          {/* Event Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Featured Event
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4"
            >
              {featuredEvent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8"
            >
              {featuredEvent.subtitle}
            </motion.p>

            {/* Quick Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-6 text-gray-700 mb-12"
            >
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-medium">{formatDate(featuredEvent.date)}</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-medium">{featuredEvent.time}</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-medium">{featuredEvent.venue}</span>
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
                onClick={() => handleTicketClick('hero_primary')}
                className="px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Ticket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Tickets Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                View Details
              </motion.button>
            </motion.div>
          </div>

          {/* Event Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/New year flyer version_1.jpg"
                alt={featuredEvent.title}
                className="w-full h-auto object-contain bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500 text-sm font-semibold mb-2">
                  <Star className="w-4 h-4 mr-1" />
                  Early Bird Tickets
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* About the Event */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Event</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>{featuredEvent.description}</p>
                  <p>Experience the magic of Bollywood like never before at Austin's premier cultural event. This extraordinary evening will feature internationally acclaimed playback singers, professional dancers, live musicians, and stunning visual productions.</p>
                </div>
              </div>

              {/* Event Highlights */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-orange-50 rounded-lg border border-orange-100"
                    >
                      <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Group Discounts & Sponsorship Banner */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 p-8 shadow-2xl">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">Planning a Group Visit?</h3>
                  </div>
                  <p className="text-orange-50 text-lg mb-6">
                    Get exclusive group discounts or explore sponsorship opportunities! Perfect for corporate events, family celebrations, or community gatherings.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+15128840540"
                      onClick={() => trackCustomEvents.phoneCall()}
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1 (512) 884-0540
                    </a>
                    <a
                      href={`mailto:${featuredEvent.contact.sponsorship}`}
                      onClick={() => trackCustomEvents.emailClick()}
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition-all duration-200"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Featured Artists */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Guests</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <img
                        src="/faria2.png"
                        alt="Faria Abdullah"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{featuredEvent.specialGuest}</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">Tollywood Star</p>
                    <p className="text-gray-600 text-sm">Live Performance & 12AM Cake Cutting</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <img
                        src="/hemanth.png"
                        alt="RJ Hemant"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{featuredEvent.specialHost}</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">Special Host</p>
                    <p className="text-gray-600 text-sm">Event Host & Entertainment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Ticket Information */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ticket Information</h3>
                <div className="space-y-6">
                  {/* Early Bird Notice */}
                  <div className="p-4 rounded-lg border-2 border-orange-500 bg-orange-50 relative">
                    <div className="absolute -top-3 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      Early Bird
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tickets On Sale Now!</h4>
                    <p className="text-gray-600 text-sm mb-4">Secure your spot at Austin's biggest Desi New Year celebration!</p>

                    <button
                      onClick={() => handleTicketClick('Sidebar')}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                    >
                      <Ticket className="w-5 h-5 mr-2" />
                      Buy Tickets
                    </button>

                  </div>

                  {/* Ticket Categories */}
                  <div className="space-y-4">
                    {featuredEvent.ticketTiers.map((tier, index) => (
                      <div key={index} className="p-4 rounded-lg border border-gray-200 hover:border-orange-200 transition-colors duration-200">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                            {tier.description && (
                              <p className="text-sm text-gray-600">{tier.description}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-orange-600">{tier.price}</div>
                            {tier.details && (
                              <p className="text-xs text-gray-500">{tier.details}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Event Features</h4>
                    <ul className="space-y-2">
                      {featuredEvent.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-4 h-4 text-orange-500 mt-1 mr-2" />
                          <div>
                            <span className="font-medium text-gray-900">{feature.name}</span>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Event Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Event Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Date & Time</p>
                      <p className="text-gray-600">{formatDate(featuredEvent.date)}</p>
                      <p className="text-gray-600">{featuredEvent.time}</p>
                      <p className="text-sm text-orange-600 mt-1">Family-Friendly Event</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Venue</p>
                      <p className="text-gray-600">{featuredEvent.venue}</p>
                      <p className="text-gray-600">{featuredEvent.address}</p>
                      <p className="text-sm text-gray-500 mt-1">Spacious indoor venue with ample free parking</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Star className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Entertainment</p>
                      <p className="text-gray-600">Live DJ All Night</p>
                      <p className="text-gray-600">Dance Performances</p>
                      <p className="text-gray-600">Fashion Walk</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact & Follow Us</h4>
                  <div className="space-y-2">
                    <a href={`mailto:${featuredEvent.contact.sponsorship}`} onClick={() => trackCustomEvents.emailClick()} className="flex items-center text-gray-600 hover:text-orange-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {featuredEvent.contact.sponsorship}
                    </a>
                    <div className="flex gap-4">
                      <a href={featuredEvent.contact.instagram} target="_blank" rel="noopener noreferrer" onClick={() => trackCustomEvents.socialMedia('Instagram')} className="flex items-center text-gray-600 hover:text-orange-600">
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </a>
                      <a href={featuredEvent.contact.facebook} target="_blank" rel="noopener noreferrer" onClick={() => trackCustomEvents.socialMedia('Facebook')} className="flex items-center text-gray-600 hover:text-orange-600">
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </a>
                      <a href={featuredEvent.contact.youtube} target="_blank" rel="noopener noreferrer" onClick={() => trackCustomEvents.socialMedia('YouTube')} className="flex items-center text-gray-600 hover:text-orange-600">
                        <Youtube className="w-4 h-4 mr-2" />
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Miss This Spectacular Event!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for an unforgettable evening of Indian culture and entertainment. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleTicketClick('CTA')}
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Buy Tickets Now
            </button>
            <a
              href="tel:+15128840540"
              onClick={() => trackCustomEvents.phoneCall()}
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Group Bookings
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events