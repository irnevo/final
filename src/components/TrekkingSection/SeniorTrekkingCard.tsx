import React from 'react';
import { Heart, Shield, ThumbsUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface SeniorTrekkingProps {
  id: string;
  title: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate';
  duration: string;
  maxElevation: string;
  groupSize: string;
  medicalSupport: boolean;
  price: number;
  rating: number;
  reviews: number;
}

export function SeniorTrekkingCard({
  title,
  imageUrl,
  difficulty,
  duration,
  maxElevation,
  groupSize,
  medicalSupport,
  price,
  rating,
  reviews
}: SeniorTrekkingProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficulty === 'Easy' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {difficulty}
          </span>
          {medicalSupport && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Medical Support
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-indigo-500" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Heart className="h-5 w-5 mr-2 text-rose-500" />
            <span>{maxElevation}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <ThumbsUp className="h-4 w-4 text-yellow-500 mr-1" />
          <span className="text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Per person</p>
            <p className="text-2xl font-bold text-indigo-600">
              ₹{price.toLocaleString('en-IN')}
            </p>
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 transform">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}