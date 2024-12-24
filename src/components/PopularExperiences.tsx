import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'wine-nashik',
    title: 'Nashik Wine Tasting Tour',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
    price: 2500,
    duration: '8 hours',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'kolhapur-food',
    title: 'Kolhapur Food Walk',
    imageUrl: 'https://images.unsplash.com/photo-1589308454676-22c0253cd8a1?auto=format&fit=crop&q=80',
    price: 1500,
    duration: '4 hours',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'pune-heritage',
    title: 'Pune Heritage Cycle Tour',
    imageUrl: 'https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?auto=format&fit=crop&q=80',
    price: 1200,
    duration: '3 hours',
    rating: 4.7,
    reviews: 156
  }
];

export function PopularExperiences() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              to={`/experience/${exp.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-orange-600">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  {exp.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">
                    {exp.rating} ({exp.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-orange-600 font-semibold">
                    From ₹{exp.price.toLocaleString('en-IN')}
                  </p>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}