import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Calendar, Archive, Phone, Mail, Share2 } from 'lucide-react'
import Logo from './Logo'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'About Us', icon: Sparkles },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/archive', label: 'Archive', icon: Archive },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/newsletter', label: 'Newsletter', icon: Mail },
    { path: '/socials', label: 'Socials', icon: Share2 },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Logo
                variant="main"
                className="w-full h-full object-contain"
                width={40}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 icon-text">
                ICON
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Entertainmentz</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${isActive
                    ? 'text-white bg-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation