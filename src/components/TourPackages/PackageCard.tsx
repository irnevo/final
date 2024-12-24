import React from 'react';
import { Clock, Users, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatPrice } from '../../utils/formatters';

interface PackageProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviewCount: number;
  price: number;
  discount?: number;
  instant: boolean;
}

export function PackageCard({
  title,
  imageUrl,
  duration,
  groupSize,
  rating,
  reviewCount,
  price,
  discount,
  instant
}: PackageProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {instant && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Instant Confirmation
          </div>
        )}
        {discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            {discount}% OFF
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {groupSize}
          </div>
        </div>

        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <>
                <p className="text-gray-400 line-through text-sm">
                  ₹{formatPrice(price)}
                </p>
                <p className="text-orange-600 font-semibold">
                  ₹{formatPrice(discountedPrice)}
                </p>
              </>
            ) : (
              <p className="text-orange-600 font-semibold">
                ₹{formatPrice(price)}
              </p>
            )}
          </div>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}