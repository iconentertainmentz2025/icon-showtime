import Hero from '../components/home/Hero'
import RecentEvents from '../components/home/RecentEvents'
import AboutSection from '../components/home/AboutSection'
import Services from '../components/home/Services'

import Pillars from '../components/home/Pillars'
import Marquee from '../components/home/Marquee'
import SEOData from '../components/SEOData'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <SEOData
                title="ICON Entertainmentz | Authentic Indian Entertainment"
                description="Premier entertainment events celebrating Indian culture across the USA. Concerts, festivals, and community experiences."
                keywords="Indian concerts, Bollywood events, USA indian events, ICON entertainmentz"
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
