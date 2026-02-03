import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail, ExternalLink } from 'lucide-react'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const Socials = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            handle: '@icon_entertainmentz',
            url: 'https://www.instagram.com/icon_entertainmentz/',
            icon: Instagram,
            color: 'from-pink-500 to-purple-600',
            description: 'Follow us for event photos, reels, and behind-the-scenes content.',
            stats: '📸 Exclusive Photos'
        },
        {
            name: 'Facebook',
            handle: 'ICON Entertainmentz',
            url: 'https://www.facebook.com/iconentertainmentz',
            icon: Facebook,
            color: 'from-blue-600 to-blue-700',
            description: 'Join our community for event announcements and discussions.',
            stats: '🌟 VIP Community'
        },
        {
            name: 'YouTube',
            handle: 'ICON Entertainmentz',
            url: 'https://www.youtube.com/@ICONEntertainmentz',
            icon: Youtube,
            color: 'from-red-600 to-red-700',
            description: 'Watch high-quality highlights from our past concerts and shows.',
            stats: '🎬 4K Highlights'
        },
        {
            name: 'Email',
            handle: 'info@icon-entertainmentz.com',
            url: 'mailto:info@icon-entertainmentz.com',
            icon: Mail,
            color: 'from-orange-500 to-orange-600',
            description: 'Get in touch for bookings, sponsorships, and inquiries.',
            stats: '⚡️ Fast Response'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    }

    const socialsStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfilePage",
                "name": "Connect with ICON Entertainmentz",
                "description": "Follow ICON Entertainmentz on Instagram, Facebook, and YouTube. Join our growing community of Bollywood and Indian culture enthusiasts.",
                "url": "https://icon-entertainmentz.com/socials",
                "mainEntity": { "@id": "https://icon-entertainmentz.com/#organization" }
            },
            {
                "@type": "Organization",
                "@id": "https://icon-entertainmentz.com/#organization",
                "name": "ICON Entertainmentz",
                "url": "https://icon-entertainmentz.com",
                "sameAs": socialLinks.map(link => link.url),
                "description": "Connect with ICON Entertainmentz on social media. Follow us for event updates, photos, and community discussions."
            }
        ]
    }

    return (
        <div className="min-h-screen bg-black pb-20 pt-28 relative overflow-hidden">
            <SEOData
                title="Connect with ICON Entertainmentz | Social Media & Community"
                description="Follow ICON Entertainmentz on Instagram, Facebook, and YouTube. Join our growing community of Bollywood and Indian culture enthusiasts in the USA."
                keywords="ICON Entertainmentz social media, follow ICON, Instagram, Facebook, YouTube, Indian entertainment community"
                url="/socials"
                structuredData={socialsStructuredData}
            />

            {/* Cinematic Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px]" />
            </div>

            {/* Hero Section */}
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        Connect With Us
                    </span>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
                        Join the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-orange to-red-600 filter drop-shadow-[0_0_20px_rgba(255,140,66,0.5)] font-brand tracking-wider">Revolution</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                        Be part of the movement. Experience the culture. <br className="hidden md:block" />
                        Follow us for exclusive access to the ICON lifestyle.
                    </p>
                </motion.div>

                {/* Social Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                            <motion.a
                                key={social.name}
                                variants={itemVariants}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackCustomEvents.socialMedia(social.name)}
                                className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-orange/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative p-10 flex items-start justify-between h-full">
                                    <div className="flex-1 flex flex-col h-full justify-between">
                                        <div>
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                                <Icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
                                            </div>

                                            <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-wide group-hover:text-white transition-colors duration-300 relative z-10 flex items-center gap-2">
                                                {social.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-6 font-mono tracking-wider">{social.handle}</p>
                                        </div>

                                        <div>
                                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                                {social.description}
                                            </p>

                                            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                                                <span>{social.stats}</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 group-hover:bg-white/10" />
                                </div>
                            </motion.a>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Socials
