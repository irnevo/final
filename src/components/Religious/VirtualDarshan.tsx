import React from 'react';
import { Calendar, Video, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface VirtualDarshanProps {
  templeName: string;
  imageUrl: string;
  nextAarti: string;
  price: number;
  duration: string;
  language: string[];
}

export function VirtualDarshan({
  templeName,
  imageUrl,
  nextAarti,
  price,
  duration,
  language
}: VirtualDarshanProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img
            src={imageUrl}
            alt={templeName}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{templeName}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2 text-orange-500" />
              <span>Next Aarti: {nextAarti}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2 text-orange-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Globe className="h-5 w-5 mr-2 text-orange-500" />
              <span>{language.join(', ')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Video className="h-5 w-5 mr-2 text-orange-500" />
              <span>HD Live Stream</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Virtual Darshan Fee</p>
              <p className="text-2xl font-bold text-orange-600">
                ₹{price.toLocaleString('en-IN')}
              </p>
            </div>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:scale-105 transform">
              Book Virtual Darshan
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}