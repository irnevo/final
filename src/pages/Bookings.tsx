import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, MapPin } from 'lucide-react';

const mockBookings = [
  {
    id: 'b1',
    destination: 'Ajanta Caves',
    date: '2024-03-25',
    guests: 2,
    status: 'upcoming',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1590136831894-078e23a2df5a?auto=format&fit=crop&q=80'
  },
  {
    id: 'b2',
    destination: 'Gateway of India',
    date: '2024-03-15',
    guests: 4,
    status: 'completed',
    price: 400,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80'
  }
];

export function Bookings() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Please login to view your bookings.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      
      <div className="grid gap-6">
        {mockBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={booking.image}
                  alt={booking.destination}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {booking.destination}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(booking.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {booking.guests} guests
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {booking.status}
                    </span>
                    <p className="mt-2 text-lg font-semibold">
                      ₹{booking.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                    View Details
                  </button>
                  {booking.status === 'upcoming' && (
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      Modify Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}