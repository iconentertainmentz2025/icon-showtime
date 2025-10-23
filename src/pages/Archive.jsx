import { useState } from 'react'
import { Calendar, MapPin, Users, Search, Filter, Image, Play, Star, ExternalLink } from 'lucide-react'
import SEOData from '../components/SEOData'

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')

  // Sample past events data
  const pastEvents = [
    {
      id: 1,
      title: "Bollywood Bash 2024",
      date: "2024-12-15",
      venue: "Austin Music Hall",
      location: "Austin, TX",
      attendees: "1,150",
      type: "concert",
      year: "2024",
      rating: 4.9,
      images: ["/images/bollywood-bash-1.jpg", "/images/bollywood-bash-2.jpg"],
      videos: ["/videos/bollywood-bash-highlights.mp4"],
      description: "An incredible night featuring chart-topping Bollywood hits and spectacular dance performances.",
      tags: ["bollywood", "music", "dance", "sold-out"],
      highlights: ["5 International Artists", "3 Hours of Entertainment", "Traditional Food Stalls"],
      featured: true
    },
    {
      id: 2,
      title: "Diwali Celebration 2024",
      date: "2024-11-01",
      venue: "Zilker Park",
      location: "Austin, TX",
      attendees: "2,800",
      type: "festival",
      year: "2024",
      rating: 4.8,
      images: ["/images/diwali-2024-1.jpg", "/images/diwali-2024-2.jpg"],
      videos: ["/videos/diwali-2024-recap.mp4"],
      description: "The biggest Diwali celebration in Texas with lights, music, food, and community joy.",
      tags: ["diwali", "festival", "family", "traditional", "outdoor"],
      highlights: ["500+ Diyas Display", "20+ Food Vendors", "Cultural Performances"],
      featured: true
    },
    {
      id: 3,
      title: "Classical Music Evening",
      date: "2024-09-22",
      venue: "The Paramount Theatre",
      location: "Austin, TX",
      attendees: "450",
      type: "concert",
      year: "2024",
      rating: 4.7,
      images: ["/images/classical-evening.jpg"],
      videos: [],
      description: "An intimate evening with renowned classical musicians performing traditional ragas.",
      tags: ["classical", "instrumental", "intimate", "traditional"],
      highlights: ["Grammy-nominated Artist", "3-hour Performance", "VIP Meet & Greet"],
      featured: false
    },
    {
      id: 4,
      title: "Holi Festival 2024",
      date: "2024-03-25",
      venue: "Auditorium Shores",
      location: "Austin, TX",
      attendees: "3,500",
      type: "festival",
      year: "2024",
      rating: 4.9,
      images: ["/images/holi-2024-1.jpg", "/images/holi-2024-2.jpg", "/images/holi-2024-3.jpg"],
      videos: ["/videos/holi-2024-colors.mp4"],
      description: "The most colorful celebration in Austin with traditional Holi festivities.",
      tags: ["holi", "festival", "colors", "outdoor", "family"],
      highlights: ["Organic Colors", "DJ & Live Music", "Traditional Snacks"],
      featured: true
    },
    {
      id: 5,
      title: "Sufi Night 2023",
      date: "2023-11-18",
      venue: "Symphony Square",
      location: "Austin, TX",
      attendees: "600",
      type: "concert",
      year: "2023",
      rating: 4.6,
      images: ["/images/sufi-night-2023.jpg"],
      videos: ["/videos/sufi-night-performance.mp4"],
      description: "A mystical evening of Sufi music and poetry under the stars.",
      tags: ["sufi", "spiritual", "music", "poetry", "outdoor"],
      highlights: ["International Sufi Master", "Poetry Recitation", "Meditation Session"],
      featured: false
    },
    {
      id: 6,
      title: "Bollywood Dance Workshop",
      date: "2023-08-12",
      venue: "Long Center",
      location: "Austin, TX",
      attendees: "200",
      type: "workshop",
      year: "2023",
      rating: 4.8,
      images: ["/images/dance-workshop.jpg"],
      videos: [],
      description: "Interactive Bollywood dance workshop with professional choreographers.",
      tags: ["dance", "workshop", "interactive", "learning"],
      highlights: ["Professional Choreographers", "All Skill Levels", "Performance Opportunity"],
      featured: false
    }
  ]

  const years = ['all', '2024', '2023', '2022']
  const tags = ['all', 'bollywood', 'festival', 'classical', 'dance', 'outdoor', 'traditional']

  const filteredEvents = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesYear = selectedYear === 'all' || event.year === selectedYear
    const matchesTag = selectedTag === 'all' || event.tags.includes(selectedTag)
    
    return matchesSearch && matchesYear && matchesTag
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const archiveStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ICON Entertainmentz Event Archive",
    "description": "Browse our collection of past Indian cultural events, Bollywood concerts, and festivals",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Past Events Archive",
      "description": "Historical collection of ICON Entertainmentz events showcasing our rich entertainment legacy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ICON Entertainmentz",
      "url": "https://icon-entertainmentz.com"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title="Event Archive | Past Indian Cultural Events | ICON Entertainmentz"
        description="Explore ICON Entertainmentz's archive of successful Indian cultural events, Bollywood concerts, and festivals. See photos, reviews, and highlights from our past entertainment experiences across the USA."
        keywords="ICON Entertainmentz archive, past Indian events, Bollywood concerts history, cultural events gallery, event photos, entertainment archive, Austin events history"
        url="/archive"
        structuredData={archiveStructuredData}
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <img src="/Asset_ICON_White.png" alt="ICON Entertainmentz" className="w-16 h-16 mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Event Archive
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Relive the magic of our past events and see the incredible moments we've created together
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events, descriptions, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Year Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700 font-medium">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-700 font-medium">Category:</span>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Categories' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-center">
            <p className="text-gray-600">
              Showing {filteredEvents.length} of {pastEvents.length} events
            </p>
          </div>
        </div>
      </section>

      {/* Events Archive Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <span>Highlight</span>
                    </div>
                  </div>
                )}

                {/* Event Image Gallery */}
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center relative group">
                  <Image className="w-16 h-16 text-gray-400 opacity-50" />
                  
                  {/* Media indicators */}
                  <div className="absolute bottom-3 right-3 flex space-x-2">
                    {event.images.length > 0 && (
                      <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1">
                        <Image className="w-3 h-3" />
                        <span>{event.images.length}</span>
                      </div>
                    )}
                    {event.videos.length > 0 && (
                      <div className="bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>{event.videos.length}</span>
                      </div>
                    )}
                  </div>

                  {/* View Gallery Button */}
                  <button className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Gallery</span>
                    </div>
                  </button>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-orange-500 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{event.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">{event.venue}, {event.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-2 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-200 text-sm">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm">
                      Share Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No events message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Journey in Numbers
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-orange-100">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">25K+</div>
                <div className="text-orange-100">Total Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8</div>
                <div className="text-orange-100">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-orange-100">Cities Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Archive