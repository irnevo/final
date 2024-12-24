import React from 'react';
import { motion } from 'framer-motion';
import { hotels } from '../../data/hotels';
import { HotelCard } from '../HotelCard';

interface SearchCriteria {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface Props {
  searchCriteria: SearchCriteria;
}

export function HotelList({ searchCriteria }: Props) {
  const filteredHotels = hotels.filter(hotel => {
    // Filter by location
    if (searchCriteria.location && !hotel.location.toLowerCase().includes(searchCriteria.location.toLowerCase())) {
      return false;
    }
    
    // Filter by dates if provided
    if (searchCriteria.checkIn && hotel.availableDates) {
      if (!hotel.availableDates.includes(searchCriteria.checkIn)) {
        return false;
      }
    }
    
    return true;
  });

  if (filteredHotels.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No hotels found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {filteredHotels.map((hotel, index) => (
        <motion.div
          key={hotel.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <HotelCard hotel={hotel} />
        </motion.div>
      ))}
    </div>
  );
}