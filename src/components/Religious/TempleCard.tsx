import React from 'react';
import { Clock, Calendar, Users, Info } from 'lucide-react';
import { motion } from 'framer-motion';

interface TempleProps {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  timings: string;
  significance: string;
  specialDays: string[];
  facilities: string[];
  darshanPrice?: number;
}

export function TempleCard({
  name,
  imageUrl,
  location,
  timings,
  significance,
  specialDays,
  facilities,
  darshanPrice
}: TempleProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm opacity-90">{location}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-5 w-5 mr-2 text-orange-500" />
          <span>{timings}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{significance}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
            Special Days
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialDays.map((day, index) => (
              <span
                key={index}
                className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm"
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 flex items-center">
            <Info className="h-4 w-4 mr-2 text-orange-500" />
            Facilities
          </h4>
          <div className="flex flex-wrap gap-2">
            {facilities.map((facility, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>

        {darshanPrice && (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Special Darshan</p>
              <p className="text-xl font-bold text-orange-600">
                ₹{darshanPrice.toLocaleString('en-IN')}
              </p>
            </div>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:scale-105 transform">
              Book Darshan
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}