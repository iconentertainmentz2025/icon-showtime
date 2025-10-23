import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/icon_entertainmentz/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/iconentertainmentz', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/iconentertainmentz', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/iconentertainmentz', label: 'Twitter' },
  ]

  const quickLinks = [
    { label: 'About Us', href: '/' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Event Archive', href: '/archive' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/Asset_ICON_Black.png" 
                  alt="ICON Entertainmentz Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-icon font-bold text-gray-900 icon-text">ICON</h3>
                <p className="text-sm text-gray-600">Entertainmentz</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Premier entertainment events celebrating Indian culture across the USA, 
              bringing communities together through unforgettable experiences.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm">Austin, Texas • USA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:info@icon-entertainmentz.com" className="hover:text-orange-500 transition-colors duration-200">
                  info@icon-entertainmentz.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors duration-200">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <p className="text-sm text-gray-500">
              Stay updated with our latest events and announcements
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            © {currentYear} <span className="font-icon icon-text text-orange-500">ICON</span> Entertainmentz. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer