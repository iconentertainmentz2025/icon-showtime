import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music, Tent, GlassWater } from 'lucide-react'

const services = [
    {
        id: "01",
        title: "World-Class Concerts",
        description: "Producing high-energy musical experiences with top-tier talent from across the globe.",
        icon: Music,
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Cultural Festivals",
        description: "Large-scale community gatherings celebrating art, tradition, and togetherness.",
        icon: Tent,
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2669&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Private Events",
        description: "Curated galas, weddings, and corporate events with immaculate attention to detail.",
        icon: GlassWater,
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop"
    }
]

const Services = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <section ref={ref} className="py-16 md:py-24 bg-background-main relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        What We <span className="text-brand-orange">Create</span>
                    </h2>
                    <div className="h-1 w-24 bg-brand-orange" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group relative h-[400px] overflow-hidden rounded-xl bg-background-lighter border border-white/5 cursor-pointer"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-background-main/80 group-hover:bg-background-main/40 transition-colors duration-500 z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="text-4xl font-heading font-bold text-white/10 group-hover:text-brand-orange transition-colors duration-300">
                                            {service.id}
                                        </span>
                                        <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-brand-orange group-hover:text-white" />
                                        </div>
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-white transition-colors duration-300 line-clamp-3 group-hover:line-clamp-none">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
