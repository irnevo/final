import type { Hotel } from '../types';

export const hotels: Hotel[] = [
  {
    id: 'taj-mumbai',
    name: 'Taj Mahal Palace',
    location: 'Mumbai, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 3421,
    pricePerNight: 25000,
    amenities: ['Spa', 'Pool', 'Fine Dining', 'Sea View'],
    description: 'Luxury 5-star hotel overlooking the Gateway of India.',
    availableDates: ['2024-03-20', '2024-03-21', '2024-03-22', '2024-03-23']
  },
  {
    id: 'oberoi-udaivilas',
    name: 'The Oberoi Udaivilas',
    location: 'Udaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 2876,
    pricePerNight: 35000,
    amenities: ['Lake View', 'Spa', 'Private Pool', 'Butler Service'],
    description: 'Luxury palace hotel on Lake Pichola with stunning views.',
    availableDates: ['2024-03-20', '2024-03-21', '2024-03-22']
  },
  {
    id: 'itc-grand-bharat',
    name: 'ITC Grand Bharat',
    location: 'Gurugram, Haryana',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 1543,
    pricePerNight: 28000,
    amenities: ['Golf Course', 'Spa', 'Multiple Restaurants', 'Pool'],
    description: 'Luxury retreat with world-class golf course.',
    availableDates: ['2024-03-21', '2024-03-22', '2024-03-23']
  },
  {
    id: 'leela-palace-bangalore',
    name: 'The Leela Palace',
    location: 'Bangalore, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 2198,
    pricePerNight: 22000,
    amenities: ['Business Center', 'Spa', 'Rooftop Pool', 'Fine Dining'],
    description: 'Modern luxury hotel in the heart of Silicon Valley of India.',
    availableDates: ['2024-03-20', '2024-03-21', '2024-03-22']
  },
  {
    id: 'taj-falaknuma',
    name: 'Taj Falaknuma Palace',
    location: 'Hyderabad, Telangana',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 1876,
    pricePerNight: 32000,
    amenities: ['Heritage Property', 'Royal Butler', 'Spa', 'Fine Dining'],
    description: 'Former palace of the Nizam, now a luxury hotel.',
    availableDates: ['2024-03-21', '2024-03-22', '2024-03-23']
  }
];