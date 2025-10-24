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
      title: "Saradhaga Sunatha - Mama-Bro's",
      date: "2025-07-11",
      venue: "The Crossover",
      location: "Leander, TX",
      attendees: "800+",
      type: "concert",
      year: "2025",
      rating: 4.9,
      images: ["/saradhaga.jpg"],
      videos: [],
      description: "An unforgettable evening featuring live music, DJ night, photo booth, and talent showcase. Organized by Preksha Eventz & ICON Entertainmentz with free parking and unlimited fun.",
      tags: ["concert", "dj", "family", "talent-show", "sold-out"],
      highlights: ["Free Entry Ages 5 or Less", "Free Parking", "Live Music by Priyani", "DJ Night", "Photo Booth", "Talent Showcase", "Game Shows"],
      featured: true,
      sponsors: ["Preksha Eventz", "Mama-Bro's", "Dumont Creamery", "Desi Hangout"],
      emcee: "Aparna Datla"
    },
    {
      id: 2,
      title: "Band Infusion Austin",
      date: "2025-08-02",
      venue: "Coco Bar & Lounge",
      location: "Pflugerville, TX",
      attendees: "300+",
      type: "concert",
      year: "2025",
      rating: 4.8,
      images: ["/band-infusion.jpg"],
      videos: [],
      description: "Limited time $20 tickets for a spectacular live music performance by Band Infusion. An electrifying night of music and entertainment.",
      tags: ["concert", "live-music", "band", "limited-time"],
      highlights: ["Live Music Performance", "Band Infusion", "$20 Limited Time Tickets", "Full Bar & Lounge", "Intimate Venue"],
      featured: true,
      sponsors: ["Universal Red Carpet", "Deccan Spice", "Mirch Masala", "Curry Pizza House", "Dumont Creamery"],
      grandSponsors: ["Deccan Spice", "Mirch Masala"],
      emcee: "Ramya Nada",
      photographers: ["LP Prexels", "Precious Moments"]
    }
  ]

  const years = ['all', '2025', '2024', '2023']
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
    </div>
  )
}

export default Archive