import type { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'taj-sunrise',
    title: 'Taj Mahal Sunrise Tour',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
    location: 'Agra, Uttar Pradesh',
    rating: 4.8,
    reviewCount: 856,
    price: 2500,
    duration: '4 hours',
    includes: ['Expert Guide', 'Hotel Pickup', 'Breakfast', 'Skip-the-line Entry'],
    availability: ['Daily']
  },
  {
    id: 'kerala-houseboat',
    title: 'Kerala Backwaters Houseboat Cruise',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80',
    location: 'Alleppey, Kerala',
    rating: 4.9,
    reviewCount: 1243,
    price: 8000,
    duration: '8 hours',
    includes: ['Lunch', 'Tea/Coffee', 'AC Accommodation', 'Sunset Views'],
    availability: ['Daily']
  },
  {
    id: 'jaipur-food',
    title: 'Jaipur Food Walking Tour',
    imageUrl: 'https://images.unsplash.com/photo-1589308454676-22c0253cd8a1?auto=format&fit=crop&q=80',
    location: 'Jaipur, Rajasthan',
    rating: 4.7,
    reviewCount: 567,
    price: 1800,
    duration: '3 hours',
    includes: ['Food Tastings', 'Local Guide', 'Cultural Insights'],
    availability: ['Evening']
  }
];