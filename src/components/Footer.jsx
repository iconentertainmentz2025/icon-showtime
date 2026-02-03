import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import Newsletter from './Newsletter'
import Logo from './Logo'
import { trackCustomEvents } from '../utils/analytics'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/icon_entertainmentz/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/iconentertainmentz', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@ICONEntertainmentz', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/iconentertainmentz', label: 'Twitter' },
  ]

  const quickLinks = [
    { label: 'About Us', href: '/' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Event Archive', href: '/archive' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Social Hub', href: '/socials' },
  ]

  return (
    <footer className="bg-background-lighter border-t border-white/5 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <Logo
                  variant="main"
                  className="w-full h-full object-contain"
                  width={48}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-brand font-bold text-white tracking-wide">ICON</h3>
                <p className="text-xs text-brand-orange uppercase tracking-[0.2em]">Entertainmentz</p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed text-sm">
              We Move Culture, Not Just Audiences. Bringing authentic Indian entertainment experiences that leave a mark on screens and stages.
            </p>
            <div className="flex items-center space-x-2 text-text-muted hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-sm">Austin, Texas • USA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold text-white">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-text-muted hover:text-brand-orange transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold text-white">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-muted group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-orange" />
                </div>
                <a href="mailto:info@icon-entertainmentz.com" className="hover:text-white transition-colors duration-300 text-sm">
                  info@icon-entertainmentz.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-text-muted group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <a href="tel:+15128840540" className="hover:text-white transition-colors duration-300 text-sm">
                  +1 (512) 884-0540
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="text-sm font-bold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.label}
                      onClick={() => trackCustomEvents.socialMedia(social.label)}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Newsletter (Simplified) */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold text-white">Subscribe</h4>
            <p className="text-text-muted text-sm">Join our list for exclusive event updates.</p>
            <Newsletter />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-text-muted text-sm">
            © {currentYear} <span className="font-brand">ICON</span> Entertainmentz. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm text-text-muted">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer