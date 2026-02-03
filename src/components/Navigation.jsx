import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
    { path: '/', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/newsletter', label: 'Newsletter' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-background-lighter/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              layoutId="shared-logo"
              className="w-10 h-10 overflow-hidden relative"
            >
              <Logo
                variant="main"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,140,66,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,140,66,0.8)]"
                width={40}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-brand font-bold text-xl tracking-wider text-white">
                ICON
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted group-hover:text-brand-orange transition-colors duration-300">
                Entertainmentz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-brand-orange' : 'text-gray-300 group-hover:text-white'
                    }`}>
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange transform transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </Link>
              )
            })}

            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-brand-orange text-white text-sm font-bold tracking-wide rounded hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-[0_0_15px_rgba(255,140,66,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-brand-orange transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background-main border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center p-8 space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="text-2xl font-heading font-bold text-white hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="px-8 py-3 bg-brand-orange text-white font-bold tracking-widest rounded hover:bg-white hover:text-brand-orange transition-all"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation