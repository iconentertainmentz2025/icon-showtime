import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  ChefHat,
  MapPin,
  Music,
  Phone,
  Sparkles,
  Ticket,
  Users,
  UtensilsCrossed
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOData from '../components/SEOData'
import PosterTilt from '../components/PosterTilt'
import { trackCustomEvents } from '../utils/analytics'

// three.js is heavy; keep it out of the initial /events chunk.
const EventBackdrop3D = lazy(() => import('../components/3d/EventBackdrop3D'))

const MAPS_QUERY = 'Northpoint Center, 10860 E Crystal Falls Pkwy, Leander, TX 78641'

const upcomingEvents = [
  {
    id: 5,
    title: "Orange Street",
    subtitle: "Zindagi Tour",
    tagline: "Live in Austin",
    blurb: "One night. One stage. Pure live energy. Huge sound, full-stage lights, and a crowd that never sits down.",
    date: "Friday, August 14, 2026",
    doors: "Doors 7:00 PM",
    showTime: "show starts 8:00 PM",
    // Central Daylight Time in August.
    doorTime: "2026-08-14T19:00:00-05:00",
    startDate: "2026-08-14T20:00:00-05:00",
    venue: {
      name: "Northpoint Center",
      street: "10860 E Crystal Falls Pkwy, Bldg 10",
      locality: "Leander",
      region: "TX",
      postalCode: "78641",
      note: "Greater Austin area",
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
    },
    highlights: [
      { icon: Music, label: "Full-band live performance" },
      { icon: Sparkles, label: "Premium sound & full-stage lighting" },
      { icon: UtensilsCrossed, label: "On-site bar & food all night" },
      { icon: Users, label: "All ages — family friendly" }
    ],
    image: "/images/Event_5_Orange_Street/AUSTIN_POSTER_1.jpg",
    ticketUrl: "https://orangestreetaustin.eventbrite.com",
    partner: "Sapphire Events & Production",
    bookings: [
      { display: "+1 (512) 884-0540", href: "tel:+15128840540" },
      { display: "+1 (903) 864-2503", href: "tel:+19038642503" }
    ]
  }
]

const ComingSoon = () => (
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
)

const UpcomingEvent = ({ event }) => (
  <div className="container-custom relative z-10 px-4 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center gap-3 mb-12"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange" />
      </span>
      <p className="text-white/60 text-xs md:text-sm tracking-[0.3em] font-bold uppercase">
        Upcoming Event
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Poster */}
      <PosterTilt
        src={event.image}
        alt={`${event.title} ${event.subtitle} — ${event.tagline} on ${event.date}`}
      />

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-brand text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 uppercase tracking-wide mb-3">
          {event.title}
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
          {event.subtitle}
        </p>
        <p className="text-lg text-gray-400 font-light mb-8">
          {event.tagline}
        </p>

        <p className="text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
          {event.blurb}
        </p>

        <dl className="space-y-5 mb-10">
          <div className="flex items-start justify-center lg:justify-start gap-4">
            <Calendar className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
            <div className="text-left">
              <dt className="text-white/40 text-xs tracking-widest uppercase mb-1">Date</dt>
              <dd className="text-white text-lg font-medium">
                <time dateTime={event.startDate}>{event.date}</time>
              </dd>
              <dd className="text-gray-500 text-sm">{event.doors} — {event.showTime}</dd>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-start gap-4">
            <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
            <div className="text-left">
              <dt className="text-white/40 text-xs tracking-widest uppercase mb-1">Venue</dt>
              <dd className="text-white text-lg font-medium">{event.venue.name}</dd>
              <dd className="text-gray-500 text-sm">
                {event.venue.street}
                <br />
                {event.venue.locality}, {event.venue.region} {event.venue.postalCode} · {event.venue.note}
              </dd>
              <dd>
                <a
                  href={event.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-brand-orange text-sm mt-1 hover:text-orange-400 transition-colors duration-300"
                >
                  Get directions
                </a>
              </dd>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-start gap-4">
            <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
            <div className="text-left">
              <dt className="text-white/40 text-xs tracking-widest uppercase mb-1">Bookings &amp; Sponsorship</dt>
              {event.bookings.map((phone) => (
                <dd key={phone.href}>
                  <a
                    href={phone.href}
                    onClick={() => trackCustomEvents.phoneCall()}
                    className="text-white text-lg font-medium hover:text-brand-orange transition-colors duration-300"
                  >
                    {phone.display}
                  </a>
                </dd>
              ))}
              <dd className="text-gray-500 text-sm mt-1">Platinum, Gold &amp; Silver packages available</dd>
            </div>
          </div>
        </dl>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCustomEvents.initiateCheckout(event.title)}
            className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold tracking-wide hover:bg-orange-600 shadow-[0_0_20px_rgba(255,140,66,0.3)] hover:shadow-[0_0_30px_rgba(255,140,66,0.5)] transition-all duration-300 flex items-center"
          >
            <Ticket className="w-5 h-5 mr-3" />
            Buy Tickets
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <Link
            to="/newsletter"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center"
          >
            <Calendar className="w-5 h-5 mr-3 text-brand-orange" />
            Get Notified First
          </Link>
        </div>

        <a
          href="/#recent-events"
          className="inline-block text-gray-400 text-sm mt-8 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20"
        >
          View past events
        </a>
      </motion.div>
    </div>

    {/* What to expect */}
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
    >
      {event.highlights.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
        >
          <Icon className="w-5 h-5 text-brand-orange shrink-0" />
          <span className="text-gray-300 text-sm leading-snug">{label}</span>
        </li>
      ))}
    </motion.ul>

    <div className="mt-12 text-center space-y-2">
      <p className="text-gray-500 text-sm">
        Presented by ICON Entertainmentz in association with {event.partner}
      </p>
      <p className="text-gray-600 text-xs">Tickets are non-refundable.</p>
    </div>
  </div>
)

const Events = () => {
  const nextEvent = upcomingEvents[0]
  const prefersReducedMotion = useReducedMotion()

  const seo = nextEvent
    ? {
      title: `${nextEvent.title} ${nextEvent.subtitle} — ${nextEvent.tagline} | ICON Entertainmentz`,
      description: `${nextEvent.title} brings the ${nextEvent.subtitle} to ${nextEvent.venue.name} in ${nextEvent.venue.locality}, ${nextEvent.venue.region} on ${nextEvent.date}. ${nextEvent.doors}, ${nextEvent.showTime}. All ages, on-site bar & food. Tickets on sale now.`,
      ogImage: nextEvent.image,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        "name": `${nextEvent.title} — ${nextEvent.subtitle}`,
        "description": `${nextEvent.title} live in the Greater Austin area as part of the ${nextEvent.subtitle}, presented by ICON Entertainmentz. Full-band live performance with premium sound and full-stage lighting.`,
        "startDate": nextEvent.startDate,
        "doorTime": nextEvent.doorTime,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "image": `https://icon-entertainmentz.com${nextEvent.image}`,
        "isAccessibleForFree": false,
        "typicalAgeRange": "0-",
        "offers": {
          "@type": "Offer",
          "url": nextEvent.ticketUrl,
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD"
        },
        "performer": {
          "@type": "MusicGroup",
          "name": nextEvent.title
        },
        "organizer": {
          "@type": "Organization",
          "name": "ICON Entertainmentz",
          "url": "https://icon-entertainmentz.com"
        },
        "location": {
          "@type": "Place",
          "name": nextEvent.venue.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": nextEvent.venue.street,
            "addressLocality": nextEvent.venue.locality,
            "addressRegion": nextEvent.venue.region,
            "postalCode": nextEvent.venue.postalCode,
            "addressCountry": "US"
          }
        }
      }
    }
    : {
      title: "Events Coming Soon | ICON Entertainmentz",
      description: "We are currently planning our next big authentic Indian entertainment experience. Stay tuned for upcoming concerts and festivals.",
      ogImage: undefined,
      structuredData: {
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
      }
    }

  return (
    <div className="min-h-screen bg-black pt-20 flex flex-col items-center justify-center relative overflow-hidden">
      <SEOData
        title={seo.title}
        description={seo.description}
        url="/events"
        ogImage={seo.ogImage}
        structuredData={seo.structuredData}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      {/* WebGL particle backdrop — decorative, never blocks interaction. */}
      {!prefersReducedMotion && (
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <EventBackdrop3D />
          </Suspense>
        </div>
      )}

      {nextEvent ? <UpcomingEvent event={nextEvent} /> : <ComingSoon />}
    </div>
  )
}

export default Events
