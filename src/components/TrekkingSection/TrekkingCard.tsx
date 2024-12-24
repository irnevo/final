import React from 'react';
import { Mountain, Users, Clock, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrekkingProps {
  id: string;
  title: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  duration: string;
  elevation: string;
  groupSize: string;
  temperature: string;
  price: number;
  seniorFriendly: boolean;
}

export function TrekkingCard({
  title,
  imageUrl,
  difficulty,
  duration,
  elevation,
  groupSize,
  temperature,
  price,
  seniorFriendly
}: TrekkingProps) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            {difficulty}
          </span>
          {seniorFriendly && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Senior Friendly
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-orange-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mountain className="h-5 w-5 mr-2 text-orange-500" />
            <span>{elevation}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-orange-500" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Thermometer className="h-5 w-5 mr-2 text-orange-500" />
            <span>{temperature}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-orange-600">
              ₹{price.toLocaleString('en-IN')}
            </p>
          </div>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all hover:scale-105 transform">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}