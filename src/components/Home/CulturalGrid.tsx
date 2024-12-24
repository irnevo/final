import React from 'react';
import { CulturalCard } from './CulturalCard';
import { useNavigate } from 'react-router-dom';

const culturalData = [
  {
    title: 'Classical Dance Forms',
    description: 'Discover the graceful movements and rich traditions of Indian classical dance forms.',
    imageUrl: 'https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?auto=format&fit=crop&q=80',
    category: 'Dance',
    link: '/cultural/dance'
  },
  {
    title: 'Temple Architecture',
    description: 'Explore the magnificent temples that showcase India\'s architectural heritage.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730478835-e7764928862c?auto=format&fit=crop&q=80',
    category: 'Heritage',
    link: '/cultural/temple'
  },
  {
    title: 'Regional Cuisines',
    description: 'Savor the diverse flavors and culinary traditions of Indian cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80',
    category: 'Food',
    link: '/cultural/food'
  },
  {
    title: 'Festival Celebrations',
    description: 'Experience the vibrant colors and joy of Indian festivals.',
    imageUrl: 'https://images.unsplash.com/photo-1680459520309-189cf5b22212?auto=format&fit=crop&q=80',
    category: 'Festivals',
    link: '/cultural/festival'
  }
];

export function CulturalGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Explore Indian Culture</h2>
        <p className="text-gray-600 mb-8">Discover the rich heritage and traditions of India</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturalData.map((item, index) => (
            <CulturalCard 
              key={index} 
              {...item} 
              onClick={() => navigate(item.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}