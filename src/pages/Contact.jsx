import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Instagram, Facebook, Youtube, Twitter, Calendar, Users, Star } from 'lucide-react'
import SEOData from '../components/SEOData'
import { trackCustomEvents } from '../utils/analytics'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    eventType: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/.netlify/functions/contact-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        trackCustomEvents.contact('Contact Form Submit')
        trackCustomEvents.lead(formData.eventType || 'general')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          eventType: '',
          message: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@icon-entertainmentz.com",
      subDetails: "We'll respond within 24 hours",
      action: "mailto:info@icon-entertainmentz.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (512) 884-0540",
      action: "tel:+15128840540"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Austin, Texas",
      subDetails: "By appointment only",
      action: "#"
    }
  ]

  const eventTypes = [
    { value: '', label: 'Select Event Type' },
    { value: 'concert', label: 'Concert/Show' },
    { value: 'festival', label: 'Festival' },
    { value: 'private', label: 'Private Event' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'wedding', label: 'Wedding Entertainment' },
    { value: 'cultural', label: 'Cultural Celebration' },
    { value: 'other', label: 'Other' }
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/icon_entertainmentz/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: 'https://www.facebook.com/iconentertainmentz', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Youtube, href: 'https://www.youtube.com/@ICONEntertainmentz', label: 'YouTube', color: 'hover:text-red-400' }
  ]

  const reasons = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Let us help you plan your next memorable event with our expertise and network."
    },
    {
      icon: Users,
      title: "Partnership Opportunities",
      description: "Interested in collaborating? We're always looking for new partnerships."
    },
    {
      icon: Star,
      title: "Media & Press",
      description: "Media inquiries, interviews, and press kit requests are welcome."
    }
  ]

  if (submitStatus?.type === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Message Sent Successfully!
          </h2>
          <p className="text-xl text-gray-600">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitStatus(null);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                eventType: '',
                message: ''
              });
            }}
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  const faqData = [
    {
      q: "How far in advance should I book an event?",
      a: "We recommend booking at least 2-3 months in advance for optimal availability and planning time, though we can accommodate shorter timelines when possible."
    },
    {
      q: "Do you handle events outside of Austin?",
      a: "Yes! While we're based in Austin, Texas, we organize events across the United States. Additional travel costs may apply for out-of-state events."
    },
    {
      q: "What types of events do you specialize in?",
      a: "We specialize in Indian cultural events, Bollywood concerts, classical music performances, festivals, private celebrations, and corporate entertainment."
    },
    {
      q: "Can you help with venue selection?",
      a: "Absolutely! We have partnerships with numerous venues and can help you select the perfect location based on your event size, budget, and requirements."
    }
  ]

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contact ICON Entertainmentz",
        "description": "Get in touch with ICON Entertainmentz for event bookings, partnerships, and cultural event planning in Austin, Texas and across the USA",
        "url": "https://icon-entertainmentz.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "ICON Entertainmentz",
          "url": "https://icon-entertainmentz.com",
          "logo": "https://icon-entertainmentz.com/Asset_ICON.png",
          "description": "Premier Indian entertainment events company specializing in Bollywood concerts and cultural festivals",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-512-884-0540",
              "contactType": "customer service",
              "email": "info@icon-entertainmentz.com",
              "areaServed": "US",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "email": "info@icon-entertainmentz.com",
              "contactType": "event booking",
              "areaServed": "US"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "addressCountry": "US"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOData
        title="Contact ICON Entertainmentz | Book Indian Cultural Events | Austin, TX"
        description="Get in touch with ICON Entertainmentz for event bookings, partnerships, and inquiries. Premium Indian entertainment services in Austin, Texas and across the USA. Contact us today!"
        keywords="contact ICON Entertainmentz, event booking, Indian entertainment booking, Austin event services, cultural event planning, entertainment inquiry, book events Austin, sponsorship opportunities"
        url="/contact"
        structuredData={contactStructuredData}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-3">
                <img
                  src="/Asset_ICON_White.png"
                  alt="ICON Entertainmentz Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get In <span className="text-orange-400 icon-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to create something amazing together? Let's make your next event unforgettable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      < section className="py-16 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.action}
                    onClick={() => {
                      if (info.title === 'Email Us') trackCustomEvents.contact('Email')
                      if (info.title === 'Call Us') trackCustomEvents.contact('Phone')
                    }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-orange-500 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.subDetails}
                    </p>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        {eventTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your event ideas, questions, or how we can help..."
                    />
                  </div>

                  {submitStatus && (
                    <div className={`flex items-center space-x-2 ${submitStatus.type === 'success'
                      ? 'text-green-600 bg-green-50 border-green-200'
                      : 'text-red-600 bg-red-50 border-red-200'
                      } border rounded-lg p-3`}>
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon
                    return (
                      <div key={index} className="flex space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {reason.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Stay connected and get the latest updates on our events and announcements.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCustomEvents.contact(`Social: ${social.label}`)}
                        className="border border-gray-200 rounded-lg p-3 flex items-center space-x-2 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers to help you plan your perfect event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  )
}

export default Contact