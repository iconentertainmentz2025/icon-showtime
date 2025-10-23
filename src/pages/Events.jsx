import { Calendar, MapPin, Clock, Users, Star, Ticket, Phone, Mail, Share2, Heart, Music, ChevronRight } from 'lucide-react'
import SEOData from '../components/SEOData'

const Events = () => {
  // Featured upcoming event data
  const featuredEvent = {
    title: "Bollywood Extravaganza 2025",
    subtitle: "A Night of Music, Dance & Cultural Celebration",
    date: "2025-12-15",
    time: "7:00 PM CST",
    venue: "Austin Music Hall",
    address: "208 Nueces St, Austin, TX 78701",
    price: "$45 - $150",
    capacity: "1,200",
    status: "selling-fast",
    description: "Join us for the most spectacular Bollywood entertainment experience of the year! ICON Entertainmentz presents an unforgettable evening featuring renowned artists, mesmerizing dance performances, and authentic Indian cultural celebrations.",
    highlights: [
      "Live performances by renowned Bollywood playback singers",
      "Professional dance troupe with authentic choreography", 
      "Traditional Indian cultural segments",
      "Interactive audience participation",
      "Premium sound and lighting production",
      "Authentic Indian cuisine available"
    ],
    ticketTiers: [
      {
        name: "General Admission",
        price: "$45",
        features: ["General seating", "Event program", "Cultural performances"]
      },
      {
        name: "Premium",
        price: "$85", 
        features: ["Reserved seating", "Meet & greet opportunity", "Complimentary refreshments", "Exclusive merchandise"]
      },
      {
        name: "VIP Experience",
        price: "$150",
        features: ["Front row seating", "Artist meet & greet", "Dinner included", "Exclusive merchandise", "Photo opportunities", "VIP parking"]
      }
    ]
  }

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const eventsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": featuredEvent.title,
    "description": featuredEvent.description,
    "startDate": `${featuredEvent.date}T19:00:00-06:00`,
    "endDate": `${featuredEvent.date}T23:00:00-06:00`,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": featuredEvent.venue,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": featuredEvent.address,
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization", 
      "name": "ICON Entertainmentz",
      "url": "https://icon-entertainmentz.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "45",
      "priceCurrency": "USD",
      "category": "Event Tickets"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title={`${featuredEvent.title} | ICON Entertainmentz | Austin, TX`}
        description={`${featuredEvent.description} Join us on ${formatDate(featuredEvent.date)} at ${featuredEvent.venue}. Tickets from ${featuredEvent.price}.`}
        keywords="Bollywood event Austin, Indian cultural event, live music Austin, dance performance, ICON Entertainmentz tickets, Austin entertainment"
        url="/events"
        structuredData={eventsStructuredData}
      />
      
      {/* Hero Section with Event Details */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Event Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Featured Event
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
              {featuredEvent.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              {featuredEvent.subtitle}
            </p>

            {/* Quick Info Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-700 mb-12">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                <span className="font-semibold">{formatDate(featuredEvent.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-500" />
                <span>{featuredEvent.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                <span>{featuredEvent.venue}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-500" />
                <span>{featuredEvent.capacity} seats</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
                <Ticket className="w-5 h-5 mr-2" />
                Get Tickets Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200">
                <Share2 className="w-5 h-5 mr-2" />
                Share Event
              </button>
            </div>
          </div>

          {/* Event Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Asset_ICON.png" 
                alt={featuredEvent.title}
                className="w-full h-96 object-contain bg-gradient-to-r from-orange-400 to-orange-600 p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-sm font-semibold mb-2">
                  <Heart className="w-4 h-4 mr-1" />
                  {featuredEvent.status === 'selling-fast' ? 'Selling Fast' : 'Available'}
                </div>
                <p className="text-lg font-semibold">Tickets from {featuredEvent.price}</p>
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
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {featuredEvent.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Artists */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Artists</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Renowned Artists</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">Playback Singers</p>
                    <p className="text-gray-600 text-sm">Award-winning performers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dance Troupe</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">Choreographers</p>
                    <p className="text-gray-600 text-sm">Professional dancers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Musicians</h4>
                    <p className="text-orange-600 text-sm font-medium mb-2">Music Directors</p>
                    <p className="text-gray-600 text-sm">Classical maestros</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Ticket Tiers */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ticket Options</h3>
                <div className="space-y-4">
                  {featuredEvent.ticketTiers.map((tier, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${index === 1 ? 'border-orange-500 bg-orange-50' : 'border-gray-200'} relative`}>
                      {index === 1 && (
                        <div className="absolute -top-3 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                          Most Popular
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                        <span className="text-2xl font-bold text-orange-600">{tier.price}</span>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-orange-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                        index === 1 
                          ? 'bg-orange-500 text-white hover:bg-orange-600' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}>
                        Select {tier.name}
                      </button>
                    </div>
                  ))}
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
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Venue</p>
                      <p className="text-gray-600">{featuredEvent.venue}</p>
                      <p className="text-gray-600">{featuredEvent.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Capacity</p>
                      <p className="text-gray-600">{featuredEvent.capacity} attendees</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Contact for Inquiries</h4>
                  <div className="space-y-2">
                    <a href="tel:+1-512-555-0123" className="flex items-center text-gray-600 hover:text-orange-600">
                      <Phone className="w-4 h-4 mr-2" />
                      (512) 555-0123
                    </a>
                    <a href="mailto:events@icon-entertainmentz.com" className="flex items-center text-gray-600 hover:text-orange-600">
                      <Mail className="w-4 h-4 mr-2" />
                      events@icon-entertainmentz.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Miss This Spectacular Event!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join us for an unforgettable evening of Indian culture and entertainment. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              <Ticket className="w-5 h-5 mr-2" />
              Buy Tickets Now
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200">
              <Phone className="w-5 h-5 mr-2" />
              Call for Group Bookings
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events