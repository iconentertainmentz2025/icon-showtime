import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, PenTool, Users, Star } from 'lucide-react'

const steps = [
    {
        id: 1,
        title: "Talent Curation",
        description: "We scout and secure the perfect artists that resonate with your audience.",
        icon: Search
    },
    {
        id: 2,
        title: "Production Excellence",
        description: "World-class sound, lighting, and stage design for immersive experiences.",
        icon: PenTool
    },
    {
        id: 3,
        title: "Community Building",
        description: "Marketing strategies that turn attendees into a loyal community.",
        icon: Users
    },
    {
        id: 4,
        title: "Memorable Experiences",
        description: "Executing flawless events that leave a lasting emotional impact.",
        icon: Star
    }
]

const Approach = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section ref={ref} className="py-24 bg-background-lighter relative overflow-hidden">
            {/* Background Gradient Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent transform -translate-y-1/2 hidden md:block" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Turning Vision Into <span className="text-brand-orange">Celebration</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 w-24 bg-brand-orange mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative group text-center"
                            >
                                {/* Step Number Background */}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-heading font-bold text-white/5 z-0 group-hover:text-brand-orange/10 transition-colors duration-500 select-none">
                                    {step.id}
                                </span>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-2xl bg-background-main border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-brand-orange group-hover:shadow-[0_0_20px_rgba(255,140,66,0.3)] transition-all duration-300 transform group-hover:-translate-y-2">
                                        <Icon className="w-8 h-8 text-white group-hover:text-brand-orange transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Approach
