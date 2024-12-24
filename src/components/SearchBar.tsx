import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const popularDestinations = [
    { name: 'Mumbai', state: 'Maharashtra', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f' },
    { name: 'Pune', state: 'Maharashtra', image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d' },
    { name: 'Aurangabad', state: 'Maharashtra', image: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}&dates=${dates}&guests=${guests}`);
    setIsExpanded(false);
  };

  return (
    <div className="relative z-50 w-full max-w-4xl mx-auto px-4">
      <motion.form 
        onSubmit={handleSearch}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`bg-white p-6 rounded-xl shadow-xl transition-all duration-300 ${
          isExpanded ? 'transform -translate-y-2 shadow-2xl' : ''
        }`}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsExpanded(true)}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            
            <div className="md:w-48 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            
            <div className="md:w-40 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="number"
                min="1"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </motion.button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">Popular Destinations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {popularDestinations.map((dest, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          setSearchQuery(dest.name);
                          setIsExpanded(false);
                        }}
                        className="flex items-center space-x-3 p-2 hover:bg-orange-50 rounded-lg transition-colors"
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="text-left">
                          <p className="font-medium text-gray-800">{dest.name}</p>
                          <p className="text-sm text-gray-500">{dest.state}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </div>
  );
}