import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Enhanced data with poster-style images
const eventsData = [
    {
        id: 4,
        title: "Sankranthi Mahotsav",
        subtitle: "Festival of Harvest",
        date: "Jan 2026",
        image: "/images/Event_4_Sankranthi_Mahotsav_2026/Sankranthi Event.jpg",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 3,
        title: "ICONIC COUNTDOWN",
        subtitle: "New Year's Eve Gala",
        date: "Dec 31, 2025",
        image: "/images/Event_3_ICONIC_CountDown_2026/New_year_flyer_version_2.JPG",
        color: "from-brand-orange to-red-600"
    },
    {
        id: 2,
        title: "Band Infusion",
        subtitle: "Live in Concert",
        date: "Past Event",
        image: "/images/Event_2_Band_Infusion/bandinfusion.jpg",
        color: "from-blue-600 to-cyan-500"
    },
    {
        id: 1,
        title: "Saradhaga Suma Tho",
        subtitle: "Live Entertainment",
        date: "Past Event",
        image: "/images/Event_1_Saradhaga_Suma_Tho/saradhaga-suma-tho.jpg",
        color: "from-pink-600 to-purple-600"
    }
]

const RecentEvents = () => {
    const [activeIndex, setActiveIndex] = useState(1) // Start in middle of 4 items (1 or 2)

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % eventsData.length)
    }

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length)
    }

    const getCardStyle = (index) => {
        // Calculate distance from active index, handling wrapping for visual continuity if needed, 
        // but for simple coverflow, strict index distance is often cleaner visually.
        // Let's stick to a sliding window approach for simplicity of the 3D effect.

        let offset = index - activeIndex

        // Improve wrap-around logic for visual positioning
        // If we want a true infinite loop visually, we need a virtual index or a more complex stack.
        // For this specific 'coverflow' request with limited items, let's keep it somewhat linear 
        // but robust enough.

        // Simple linear distance for now:
        const isActive = index === activeIndex

        // Visual configurations
        const xOffset = offset * 180 // Reduced spacing for overlap
        const scale = isActive ? 1 : 0.8
        const rotateY = isActive ? 0 : offset > 0 ? -45 : 45
        const zIndex = isActive ? 10 : 10 - Math.abs(offset)
        const opacity = isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.4)

        // Mobile adjustments would happen via media queries or window width check
        // For now, these are desktop defaults as per request image.

        return {
            x: xOffset,
            scale,
            rotateY,
            zIndex,
            opacity
        }
    }

    return (
        <section id="recent-events" className="py-24 bg-black overflow-hidden min-h-screen relative block">

            {/* Background Ambience */}
            <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-700 opacity-20 ${eventsData[activeIndex].color}`} />

            <div className="container-custom relative z-10 w-full text-left">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Recent <span className="text-brand-orange">Events</span>
                    </h2>
                    <div className="h-1 w-24 bg-brand-orange" />
                </motion.div>

                {/* Dynamic Massive Title */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={activeIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight"
                        >
                            {eventsData[activeIndex].title}
                        </motion.h2>
                    </AnimatePresence>
                </div>
            </div>

            {/* 3D Carousel Stage */}
            <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1200px] mt-10">

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-10 z-50 w-16 h-16 rounded-full bg-brand-orange hover:bg-orange-400 flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_20px_rgba(255,140,66,0.6)]"
                >
                    <ChevronLeft className="w-8 h-8 text-white" strokeWidth={3} />
                </button>

                {/* Cards */}
                <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                    {eventsData.map((event, index) => {
                        // Calculate visible range to render only close neighbors if large list
                        // But for 5 items, render all.
                        const style = getCardStyle(index)

                        // Only render if relevant (optimization)
                        if (style.opacity === 0) return null

                        return (
                            <motion.div
                                key={event.id}
                                className="absolute w-[280px] md:w-[350px] aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl origin-center bg-gray-900 border border-white/10"
                                initial={false}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    zIndex: style.zIndex,
                                    opacity: style.opacity,
                                    rotateY: style.rotateY
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Card Content */}
                                <div className="relative w-full h-full group">

                                    {/* Image */}
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                    {/* Text Layout - Poster Style */}
                                    <div className="absolute top-8 left-0 w-full text-center px-4">
                                        <p className="text-white/60 text-xs tracking-[0.2em] font-bold uppercase mb-2">Presents</p>
                                    </div>

                                    <div className="absolute bottom-10 left-0 w-full px-6 text-center">
                                        <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-none uppercase">{event.title}</h3>
                                        <p className="text-brand-orange font-medium tracking-wide text-sm">{event.subtitle}</p>
                                    </div>

                                    {/* Watermark/Details */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                                            <span className="text-[10px] text-white font-bold">C9</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-10 z-50 w-16 h-16 rounded-full bg-brand-orange hover:bg-orange-400 flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_20px_rgba(255,140,66,0.6)]"
                >
                    <ChevronRight className="w-8 h-8 text-white" strokeWidth={3} />
                </button>

            </div>
        </section>
    )
}

export default RecentEvents
