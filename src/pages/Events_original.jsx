import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Star, ExternalLink, Filter, Ticket } from 'lucide-react'

const Events = () => {
  const [filter, setFilter] = useState('all')

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Bollywood Night Austin",
      date: "2025-01-15",
      time: "7:00 PM CST",
      venue: "Austin Music Hall",
      location: "Austin, TX",
      type: "concert",
      price: "$45 - $150",
      capacity: "1,200",
      status: "selling-fast",
      image: "/images/bollywood-night.jpg",
      description: "An electrifying evening featuring top Bollywood artists and dance performances.",
      tags: ["bollywood", "music", "dance"],
      featured: true
    },
    {
      id: 2,
      title: "Classical Indian Music Festival",
      date: "2025-02-08",
      time: "6:30 PM CST", 
      venue: "Symphony Square",
      location: "Austin, TX",
      type: "festival",
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
      type: "festival",
      price: "$25 - $60",
      capacity: "2,000",
      status: "early-bird",
      image: "/images/holi-celebration.jpg",
      description: "Celebrate the festival of colors with music, food, and traditional festivities.",
      tags: ["holi", "festival", "family", "outdoor"],
      featured: true
    },
    {
      id: 4,
      title: "Sufi Music Evening",
      date: "2025-04-22",
      time: "8:00 PM CST",
      venue: "The Paramount Theatre",
      location: "Austin, TX",
      type: "concert",
      price: "$55 - $180",
      capacity: "1,300",
      status: "presale",
      image: "/images/sufi-evening.jpg",
      description: "An enchanting evening of soulful Sufi music and mystical performances.",
      tags: ["sufi", "spiritual", "music"],
      featured: false
    },
    {
      id: 5,
      title: "Indian Cultural Showcase",
      date: "2025-05-17",
      time: "5:00 PM CST",
      venue: "Long Center",
      location: "Austin, TX",
      type: "showcase",
      price: "$40 - $120",
      capacity: "900",
      status: "coming-soon",
      image: "/images/cultural-showcase.jpg",
      description: "A diverse showcase celebrating various Indian art forms, dance, and music.",
      tags: ["cultural", "dance", "variety"],
      featured: true
    },
    {
      id: 6,
      title: "Diwali Gala 2025",
      date: "2025-10-20",
      time: "6:00 PM CST",
      venue: "Fairmont Austin",
      location: "Austin, TX",
      type: "gala",
      price: "$75 - $250",
      capacity: "600",
      status: "vip-only",
      image: "/images/diwali-gala.jpg",
      description: "An elegant Diwali celebration with dinner, performances, and networking.",
      tags: ["diwali", "gala", "formal", "networking"],
      featured: true
    }
  ]

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'concert', label: 'Concerts' },
    { value: 'festival', label: 'Festivals' },
    { value: 'showcase', label: 'Showcases' },
    { value: 'gala', label: 'Galas' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'selling-fast': return 'text-red-400 bg-red-500/20'
      case 'early-bird': return 'text-green-400 bg-green-500/20'
      case 'presale': return 'text-blue-400 bg-blue-500/20'
      case 'coming-soon': return 'text-yellow-400 bg-yellow-500/20'
      case 'vip-only': return 'text-purple-400 bg-purple-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'selling-fast': return 'Selling Fast'
      case 'early-bird': return 'Early Bird'
      case 'presale': return 'Pre-sale'
      case 'coming-soon': return 'Coming Soon'
      case 'vip-only': return 'VIP Only'
      default: return 'Available'
    }
  }

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-section section-padding text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Experience the magic of Indian culture through our carefully curated events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-orange-500" />
              <span className="text-gray-900 font-medium">Filter by type:</span>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card-3d relative overflow-hidden ${
                  event.featured ? 'ring-2 ring-primary-500/50' : ''
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(event.status)}`}>
                    {getStatusText(event.status)}
                  </div>
                </div>

                {/* Event Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-primary-400 opacity-50" />
                </div>

                {/* Event Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">{event.venue}, {event.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Users className="w-4 h-4 text-primary-400" />
                      <span className="text-sm">Capacity: {event.capacity}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-sm text-gray-400">Starting from</p>
                      <p className="text-lg font-bold text-primary-400">{event.price}</p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center space-x-2"
                      disabled={event.status === 'coming-soon'}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>{event.status === 'coming-soon' ? 'Coming Soon' : 'Get Tickets'}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No events message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No events found</h3>
              <p className="text-gray-500">Try changing your filter or check back later for new events.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Never Miss an Event
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter to get early access to tickets and exclusive event updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events