import React from 'react';
import { Bus, Hotel, Utensils, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface PilgrimageProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  temples: string[];
  inclusions: string[];
  price: number;
  nextAvailable: string;
  maxPeople: number;
}

export function PilgrimagePackage({
  title,
  imageUrl,
  duration,
  temples,
  inclusions,
  price,
  nextAvailable,
  maxPeople
}: PilgrimageProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm font-medium text-gray-800">{duration}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Temples Covered</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {temples.map((temple, index) => (
              <li key={index}>{temple}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {inclusions.includes('transport') && (
            <div className="flex items-center text-gray-600">
              <Bus className="h-5 w-5 mr-2 text-orange-500" />
              <span>AC Transport</span>
            </div>
          )}
          {inclusions.includes('accommodation') && (
            <div className="flex items-center text-gray-600">
              <Hotel className="h-5 w-5 mr-2 text-orange-500" />
              <span>Hotel Stay</span>
            </div>
          )}
          {inclusions.includes('meals') && (
            <div className="flex items-center text-gray-600">
              <Utensils className="h-5 w-5 mr-2 text-orange-500" />
              <span>All Meals</span>
            </div>
          )}
          {inclusions.includes('insurance') && (
            <div className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2 text-orange-500" />
              <span>Travel Insurance</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Per person</p>
            <p className="text-2xl font-bold text-orange-600">
              ₹{price.toLocaleString('en-IN')}
            </p>
            <p className="text-sm text-gray-500">
              Next available: {nextAvailable}
            </p>
          </div>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:scale-105 transform">
            Book Package
          </button>
        </div>
      </div>
    </motion.div>
  );
}