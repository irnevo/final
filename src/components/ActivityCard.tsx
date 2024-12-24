import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';
import type { Activity } from '../types';
import { Link } from 'react-router-dom';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      to={`/activity/${activity.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-orange-600">
          {activity.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {activity.location}
        </div>
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {activity.rating} ({activity.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-orange-600 font-semibold">
            From ₹{activity.price.toLocaleString('en-IN')}
          </p>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
}