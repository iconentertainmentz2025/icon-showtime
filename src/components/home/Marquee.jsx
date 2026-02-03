import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <section className="py-12 bg-background-main border-y border-white/5 relative overflow-hidden">
            <div className="flex overflow-hidden whitespace-nowrap mask-linear-gradient">
                <motion.div
                    className="flex space-x-12 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {/* Repeated twice to create seamless loop */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex space-x-12 items-center">
                            <span className="text-6xl md:text-8xl font-heading font-bold text-white/80 uppercase tracking-tight hover:text-white transition-colors duration-300">
                                Culture
                            </span>
                            <span className="w-4 h-4 rounded-full bg-brand-orange" />
                            <span className="text-6xl md:text-8xl font-heading font-bold text-brand-orange uppercase tracking-tight token-text-shadow">
                                Concerts
                            </span>
                            <span className="w-4 h-4 rounded-full bg-brand-orange" />
                            <span className="text-6xl md:text-8xl font-heading font-bold text-white/80 uppercase tracking-tight hover:text-white transition-colors duration-300">
                                Community
                            </span>
                            <span className="w-4 h-4 rounded-full bg-brand-orange" />
                            <span className="text-6xl md:text-8xl font-heading font-bold text-brand-orange uppercase tracking-tight token-text-shadow">
                                Celebration
                            </span>
                            <span className="w-4 h-4 rounded-full bg-brand-orange" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Marquee
