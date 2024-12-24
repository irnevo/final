import React from 'react';
import { hotels } from '../data/hotels';
import { HotelCard } from '../components/HotelCard';
import { BackButton } from '../components/BackButton';

export function Hotels() {
  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}