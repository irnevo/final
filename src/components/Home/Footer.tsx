import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">CultureIndia</span>
            </Link>
            <p className="text-gray-400">
              Discover the rich cultural heritage and diverse traditions of India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Culture
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@cultureindia.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Mumbai, Maharashtra, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook />} />
              <SocialLink href="https://instagram.com" icon={<Instagram />} />
              <SocialLink href="https://youtube.com" icon={<Youtube />} />
              <SocialLink href="https://twitter.com" icon={<Twitter />} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CultureIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
    >
      {icon}
    </a>
  );
}