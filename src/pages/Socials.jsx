import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail, ExternalLink, Share2 } from 'lucide-react'
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
            url: 'https://www.facebook.com/people/ICON-Entertainmentz/61581383123308/#',
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const socialsStructuredData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Organization",
            "name": "ICON Entertainmentz",
            "url": "https://icon-entertainmentz.com",
            "sameAs": socialLinks.map(link => link.url),
            "description": "Connect with ICON Entertainmentz on social media. Follow us for event updates, photos, and community discussions."
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <SEOData
                title="Connect with ICON Entertainmentz | Social Media & Community"
                description="Follow ICON Entertainmentz on Instagram, Facebook, and YouTube. Join our growing community of Bollywood and Indian culture enthusiasts in the USA. Get exclusive updates and behind-the-scenes content."
                keywords="ICON Entertainmentz social media, follow ICON, Instagram, Facebook, YouTube, Indian entertainment community, event photos, Bollywood updates Austin"
                url="/socials"
                structuredData={socialsStructuredData}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg transform rotate-3">
                            <Share2 className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Community</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Stay connected with the pulse of Indian entertainment. Follow us for exclusive updates, event highlights, and more.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Social Cards Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <motion.a
                                key={index}
                                variants={itemVariants}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackCustomEvents.socialMedia(social.name)}
                                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${social.color}`}></div>
                                <div className="p-8 flex items-start space-x-6">
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-colors duration-300">
                                                {social.name}
                                            </h3>
                                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
                                        </div>

                                        <p className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                                            {social.handle}
                                            <span className="mx-2">•</span>
                                            <span className="text-orange-500">{social.stats}</span>
                                        </p>

                                        <p className="text-gray-600 leading-relaxed">
                                            {social.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        )
                    })}
                </motion.div>
            </section>

            {/* Newsletter Teaser */}
            <section className="max-w-4xl mx-auto px-4 py-20 text-center">
                <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Don't Miss a Beat
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Prefer email updates? Subscribe to our newsletter to get early access to tickets and exclusive event announcements.
                    </p>
                    <a
                        href="/newsletter"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg"
                    >
                        Subscribe to Newsletter
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Socials
