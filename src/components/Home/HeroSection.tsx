import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80"
          alt="Taj Mahal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover India's Rich
              <span className="text-orange-500"> Heritage</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore ancient temples, vibrant festivals, and authentic cultural experiences
              across the incredible landscapes of India.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Where would you like to go?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Explore Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}