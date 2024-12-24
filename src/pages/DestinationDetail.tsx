import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Check, Hotel, Calendar } from 'lucide-react';
import { destinations } from '../data/destinations';
import { maharashtraDestinations } from '../data/maharashtra';
import { hotels } from '../data/hotels';
import { BackButton } from '../components/BackButton';
import { HotelCard } from '../components/HotelCard';

export function DestinationDetail() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  
  const allDestinations = [...destinations, ...maharashtraDestinations];
  const destination = allDestinations.find(d => d.id === id);

  if (!destination) {
    return <div className="container mx-auto px-4 py-12">Destination not found</div>;
  }

  const nearbyHotels = hotels.filter(hotel => 
    hotel.location.includes(destination.state)
  );

  const handleBooking = () => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
    // Implement booking logic
    alert('Booking confirmed! Check your email for details.');
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>
      
      <div className="relative h-[400px]">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              {destination.state}
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
              {destination.rating} ({destination.reviewCount} reviews)
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About this destination</h2>
            <p className="text-gray-600 mb-8">{destination.description}</p>

            <h3 className="text-xl font-bold mb-4">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {nearbyHotels.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Hotel className="h-5 w-5 mr-2" />
                  Nearby Hotels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nearbyHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg sticky top-4">
              <h3 className="text-xl font-bold mb-4">Book this experience</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-lg font-semibold mb-2">
                    Total: ₹{(destination.price * guestCount).toLocaleString('en-IN')}
                  </p>
                  <button 
                    onClick={handleBooking}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}