import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Star, Ticket, Phone, Mail, Share2, Heart, Music, Award, ChevronRight } from 'lucide-react'
import SEOData from '../components/SEOData'

const Events = () => {
  // Featured upcoming event data
  const featuredEvent = {
    id: 1,
    title: "Bollywood Extravaganza 2025",
    subtitle: "A Night of Music, Dance & Cultural Celebration",
    date: "2025-12-15",
    time: "7:00 PM CST",
    venue: "Austin Music Hall",
    address: "208 Nueces St, Austin, TX 78701",
    location: "Austin, TX",
    price: "$45 - $150",
    capacity: "1,200",
    status: "selling-fast",
    image: "/images/bollywood-extravaganza.jpg",
    description: "Join us for the most spectacular Bollywood entertainment experience of the year! ICON Entertainmentz presents an unforgettable evening featuring renowned artists, mesmerizing dance performances, and authentic Indian cultural celebrations that will transport you to the heart of India.",
    longDescription: "Experience the magic of Bollywood like never before at Austin's premier cultural event. This extraordinary evening will feature internationally acclaimed playback singers, professional dancers, live musicians, and stunning visual productions. From classical Indian melodies to contemporary Bollywood hits, witness performances that celebrate the rich heritage and vibrant spirit of Indian entertainment.",
    highlights: [
      "Live performances by renowned Bollywood playback singers",
      "Professional dance troupe with authentic choreography", 
      "Traditional Indian cultural segments",
      "Interactive audience participation",
      "Premium sound and lighting production",
      "Authentic Indian cuisine available"
    ],
    artists: [
      {
        name: "Shreya Ghoshal",
        role: "Playback Singer",
        image: "/images/artist1.jpg",
        description: "Multiple National Film Award winner"
      },
      {
        name: "Raghav Juyal",
        role: "Dance Choreographer", 
        image: "/images/artist2.jpg",
        description: "Bollywood dance icon and TV personality"
      },
      {
        name: "Shankar Mahadevan",
        role: "Music Director",
        image: "/images/artist3.jpg", 
        description: "Grammy winner and classical music maestro"
      }
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
    ],
    schedule: [
      { time: "6:30 PM", activity: "Doors Open & Registration" },
      { time: "7:00 PM", activity: "Welcome & Cultural Opening" },
      { time: "7:30 PM", activity: "Main Performance Begins" },
      { time: "9:00 PM", activity: "Intermission & Refreshments" },
      { time: "9:30 PM", activity: "Second Act & Grand Finale" },
      { time: "11:00 PM", activity: "Meet & Greet (VIP)" }
    ],
    tags: ["bollywood", "music", "dance", "cultural", "live-performance"],
    featured: true,
    soldOut: false
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e67e22" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

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
                className="w-full h-96 object-cover bg-gradient-to-r from-orange-400 to-orange-600"
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
                  <p>{featuredEvent.longDescription}</p>
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
                  {featuredEvent.artists.map((artist, index) => (
                    <div key={index} className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <Music className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{artist.name}</h4>
                      <p className="text-orange-600 text-sm font-medium mb-2">{artist.role}</p>
                      <p className="text-gray-600 text-sm">{artist.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Schedule */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h3>
                <div className="space-y-4">
                  {featuredEvent.schedule.map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                      <Clock className="w-5 h-5 text-orange-500 mr-4" />
                      <div>
                        <span className="font-semibold text-gray-900 mr-4">{item.time}</span>
                        <span className="text-gray-700">{item.activity}</span>
                      </div>
                    </div>
                  ))}
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
      category: "festival",
      price: "$35 - $100",
      capacity: "800",
      status: "available",
      image: "/images/classical-festival.jpg",
      description: "A soul-stirring evening of classical Indian ragas and instrumental performances.",
      tags: ["classical", "instrumental", "traditional"],
      featured: false
    },
    {
      id: 3,
      title: "Holi Celebration 2025",
      date: "2025-03-13",
      time: "2:00 PM CST",
      venue: "Zilker Park",
      location: "Austin, TX", 
      category: "festival",
      price: "$25 - $60",
      capacity: "2,000",
      status: "available",
      image: "/images/holi-festival.jpg",
      description: "Join us for the vibrant festival of colors with music, food, and celebration.",
      tags: ["holi", "festival", "family"],
      featured: true
    },
    {
      id: 4,
      title: "Fusion Concert Series",
      date: "2025-04-20",
      time: "8:00 PM CST",
      venue: "Paramount Theatre",
      location: "Austin, TX",
      category: "concert",
      price: "$50 - $120",
      capacity: "600",
      status: "available",
      image: "/images/fusion-concert.jpg",
      description: "East meets West in this incredible fusion of musical traditions.",
      tags: ["fusion", "world-music", "contemporary"],
      featured: false
    },
    {
      id: 5,
      title: "Diwali Gala 2025",
      date: "2025-10-25",
      time: "6:00 PM CST",
      venue: "Austin Convention Center",
      location: "Austin, TX",
      category: "gala",
      price: "$75 - $200",
      capacity: "1,500",
      status: "coming-soon",
      image: "/images/diwali-gala.jpg",
      description: "A spectacular celebration of lights with performances, dinner, and cultural showcase.",
      tags: ["diwali", "cultural", "gala"],
      featured: false
    },
    {
      id: 6,
      title: "Summer Sangam Festival",
      date: "2025-07-12",
      time: "5:00 PM CST",
      venue: "Long Center",
      location: "Austin, TX",
      category: "festival",
      price: "$40 - $90",
      capacity: "900",
      status: "sold-out",
      image: "/images/sangam-festival.jpg",
      description: "A celebration of unity through music, dance, and cultural exchange.",
      tags: ["sangam", "unity", "cultural"],
      featured: false
    }
  ]

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'concert', label: 'Concerts' },
    { value: 'festival', label: 'Festivals' },
    { value: 'gala', label: 'Galas' },
  ]

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === filter)

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
    "@type": "EventSeries",
    "name": "ICON Entertainmentz Events",
    "description": "Premier Indian cultural events including Bollywood concerts, classical music festivals, and cultural celebrations",
    "organizer": {
      "@type": "Organization", 
      "name": "ICON Entertainmentz",
      "url": "https://icon-entertainmentz.com"
    },
    "location": {
      "@type": "Place",
      "name": "Austin, Texas and across USA",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX", 
        "addressCountry": "US"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "category": "Event Tickets"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title="Indian Cultural Events & Bollywood Concerts | ICON Entertainmentz"
        description="Discover upcoming Indian cultural events, Bollywood concerts, and festivals by ICON Entertainmentz. Premium entertainment experiences across Austin, Texas and the USA. Book your tickets now!"
        keywords="Indian events, Bollywood concerts, cultural festivals, Austin events, Indian music, classical Indian music, cultural events tickets, entertainment events, Texas Indian events"
        url="/events"
        structuredData={eventsStructuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover amazing cultural events, concerts, and festivals happening in your area. 
            Book your tickets now and be part of unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter Events:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilter(type.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filter === type.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${
                  event.featured ? 'border-orange-500' : 'border-gray-200'
                } hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Event Image */}
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
                  {/* Status Overlay */}
                  {(event.status === 'sold-out' || event.status === 'coming-soon') && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg uppercase tracking-wider">
                        {event.status === 'sold-out' ? 'Sold Out' : 'Coming Soon'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-4">
                  {/* Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-500 font-medium uppercase tracking-wider">
                      {event.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      event.status === 'available' ? 'bg-green-100 text-green-800' :
                      event.status === 'selling-fast' ? 'bg-amber-100 text-amber-800' :
                      event.status === 'sold-out' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{event.venue}, {event.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Capacity: {event.capacity}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-lg font-bold text-orange-500">{event.price}</p>
                    </div>
                    
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                        event.status === 'coming-soon' || event.status === 'sold-out'
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                      disabled={event.status === 'coming-soon' || event.status === 'sold-out'}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>
                        {event.status === 'coming-soon' ? 'Coming Soon' : 
                         event.status === 'sold-out' ? 'Sold Out' : 'Get Tickets'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No events message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No events found</h3>
              <p className="text-gray-500">Try changing your filter or check back later for new events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Upcoming Events
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Subscribe to our newsletter and never miss out on exciting cultural events in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events