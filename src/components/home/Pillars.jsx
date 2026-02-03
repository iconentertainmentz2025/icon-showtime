import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Award, Globe } from 'lucide-react'

const pillars = [
    {
        id: 1,
        title: "Authentic Connection",
        description: "Deep roots in Indian culture, ensuring every event feels genuine and respectful.",
        icon: Heart
    },
    {
        id: 2,
        title: "Premium Production",
        description: "State-of-the-art visuals, sound, and logistics that rival major festivals.",
        icon: Award
    },
    {
        id: 3,
        title: "Nationwide Reach",
        description: "Connecting communities from Texas to across the USA with impactful experiences.",
        icon: Globe
    }
]

const Pillars = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section ref={ref} className="py-24 bg-background-main relative">
            <div className="container-custom">
                <div className="text-left mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
                    >
                        What Sets Us <span className="text-brand-orange">Apart</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-brand-orange" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon
                        return (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex flex-col items-start text-left p-8 rounded-2xl bg-gradient-to-b from-background-lighter to-transparent border border-white/5 hover:border-brand-orange/30 transition-colors duration-500"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pillars
