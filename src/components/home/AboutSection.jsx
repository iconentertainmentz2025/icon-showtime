import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Heart } from 'lucide-react'

const AboutSection = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-10%" })

    const words = [
        "We", "Bring", "Culture,", "Not", "Just", "Entertainment."
    ]

    return (
        <section ref={containerRef} className="py-16 md:py-32 bg-background-lighter relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Typography Block */}
                    <div className="lg:w-1/2">
                        <div className="flex flex-col space-y-2">
                            {words.map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
                                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[0.9]"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="mt-12 flex items-center space-x-3"
                        >
                            <div className="w-12 h-[2px] bg-brand-orange" />
                            <p className="text-xl text-text-muted italic font-light">
                                Connecting hearts through culture
                            </p>
                            <Heart className="w-5 h-5 text-brand-orange fill-current animate-pulse" />
                        </motion.div>
                    </div>

                    {/* Image/Content Block - Right Side */}
                    <div className="lg:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="relative z-10"
                        >
                            <div className="bg-background-card backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                                <h3 className="text-2xl font-bold text-brand-orange mb-6">Our Mission</h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    At <span className="font-brand">ICON</span> Entertainmentz, we don't just organize events; we curate experiences that resonate with the soul.
                                    Born from a passion for Indian heritage and a vision for world-class production, we bridge the gap between
                                    tradition and modernity.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    From high-energy concerts to elegantly crafted private galas, every detail is designed to celebrate
                                    our rich culture with the sophistication it deserves.
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
