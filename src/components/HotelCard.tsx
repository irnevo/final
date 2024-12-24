import React from 'react';
import { Star, MapPin } from 'lucide-react';
import type { Hotel } from '../types';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link
      to={`/hotel/${hotel.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={hotel.imageUrl}
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {hotel.location}
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {hotel.rating} ({hotel.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-orange-600 font-semibold">
            ₹{hotel.pricePerNight.toLocaleString('en-IN')}/night
          </p>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
}