import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
              CultureIndia
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/hotels">Hotels</NavLink>
            <NavLink to="/culture">Culture</NavLink>
            <NavLink to="/heritage">Heritage</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link 
              to="/dashboard" 
              className="flex items-center px-4 py-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors"
            >
              <User className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavLink to="/hotels" onClick={() => setIsMenuOpen(false)}>
              Hotels
            </MobileNavLink>
            <MobileNavLink to="/culture" onClick={() => setIsMenuOpen(false)}>
              Culture
            </MobileNavLink>
            <MobileNavLink to="/heritage" onClick={() => setIsMenuOpen(false)}>
              Heritage
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-center rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-orange-600 transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}