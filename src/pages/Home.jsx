import Hero from '../components/home/Hero'
import RecentEvents from '../components/home/RecentEvents'
import AboutSection from '../components/home/AboutSection'
import Services from '../components/home/Services'

import Pillars from '../components/home/Pillars'
import Marquee from '../components/home/Marquee'
import SEOData from '../components/SEOData'
import { motion } from 'framer-motion'

const Home = () => {
    const homeStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://icon-entertainmentz.com/#organization",
                "name": "ICON Entertainmentz",
                "url": "https://icon-entertainmentz.com",
                "logo": "https://icon-entertainmentz.com/images/ICON_Logos/Asset_ICON.png",
                "description": "Premier Indian entertainment events company specializing in Bollywood concerts, cultural festivals, and exclusive events across the USA",
                "sameAs": [
                    "https://www.facebook.com/iconentertainmentz",
                    "https://www.instagram.com/icon_entertainmentz/",
                    "https://www.youtube.com/iconentertainmentz"
                ]
            },
            {
                "@type": "Event",
                "name": "Band Infusion Live",
                "startDate": "2024-11-15",
                "eventStatus": "https://schema.org/EventPast",
                "location": {
                    "@type": "Place",
                    "name": "Austin, TX",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Austin",
                        "addressRegion": "TX",
                        "addressCountry": "US"
                    }
                },
                "description": "A fusion music concert bringing together the best of Indian and Western melodies.",
                "organizer": { "@id": "https://icon-entertainmentz.com/#organization" }
            },
            {
                "@type": "Event",
                "name": "Saradhaga Suma Tho",
                "startDate": "2024-09-20",
                "eventStatus": "https://schema.org/EventPast",
                "location": {
                    "@type": "Place",
                    "name": "Austin, TX",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Austin",
                        "addressRegion": "TX",
                        "addressCountry": "US"
                    }
                },
                "description": "An interactive evening of entertainment with the legendary host Suma Kanakala.",
                "organizer": { "@id": "https://icon-entertainmentz.com/#organization" }
            }
        ]
    }

    return (
        <>
            <SEOData
                title="ICON Entertainmentz | Authentic Indian Entertainment"
                description="Premier entertainment events celebrating Indian culture across the USA. Concerts, festivals, and community experiences."
                keywords="Indian concerts, Bollywood events, USA indian events, ICON entertainmentz"
                structuredData={homeStructuredData}
            />
            <main className="bg-background-main min-h-screen">
                <Hero />
                <RecentEvents />
                <AboutSection />
                <Services />

                <Pillars />
                <Marquee />
            </main>
        </>
    )
}

export default Home
