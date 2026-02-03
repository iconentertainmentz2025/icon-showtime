import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Logo from '../Logo'

const Hero = () => {
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const y = useTransform(scrollY, [0, 300], [0, 100])

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black z-10 opacity-70" /> {/* Dark overlay */}
                <iframe
                    className="absolute top-1/2 left-1/2 w-[177.77%] h-[177.77%] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
                    src="https://www.youtube.com/embed/s0CbR5rX8ig?autoplay=1&mute=1&controls=0&loop=1&playlist=s0CbR5rX8ig&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
                    title="Hero Background Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ pointerEvents: 'none' }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 h-full flex flex-col items-start justify-center px-6 md:px-20 text-left">
                {/* Massive Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-8 w-full max-w-[120px] md:max-w-[180px]"
                >
                    <Logo variant="main" className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,140,66,0.3)]" width={250} />
                </motion.div>

                {/* Text Reveal Animation */}
                <div className="space-y-6 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2 items-start"
                    >
                        <span className="block text-2xl md:text-5xl font-heading font-light text-white tracking-widest uppercase mb-2">
                            Turning Vision
                        </span>
                        <span className="block text-5xl md:text-8xl font-brand font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-white to-brand-orange bg-[length:200%_auto] animate-shine leading-none">
                            INTO CELEBRATION
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-lg md:text-2xl text-text-muted max-w-2xl font-light tracking-wide uppercase"
                    >
                        On screens and stages across the USA
                    </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link
                        to="/events"
                        className="px-10 py-4 bg-brand-orange/90 backdrop-blur-sm text-white text-lg font-bold tracking-widest rounded-full transition-all duration-300 transform hover:bg-brand-orange hover:scale-105 shadow-[0_0_20px_rgba(255,140,66,0.3)] hover:shadow-[0_0_40px_rgba(255,140,66,0.6)]"
                    >
                        EXPLORE EVENTS
                    </Link>
                    <Link
                        to="/contact"
                        className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-lg font-bold tracking-widest rounded-full transition-all duration-300 hover:bg-white/10 hover:border-brand-orange hover:text-brand-orange"
                    >
                        PLAN YOUR EVENT
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity, y }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-muted uppercase tracking-[0.2em] animate-pulse">Scroll</span>
                <ChevronDown className="w-6 h-6 text-brand-orange animate-bounce" />
            </motion.div>
        </div>
    )
}

export default Hero

