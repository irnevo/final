import React from 'react';
import { Slideshow } from '../components/Home/Slideshow/Slideshow';
import { HotelSearchCard } from '../components/Home/HotelSearch/HotelSearchCard';
import { CulturalGrid } from '../components/Home/CulturalGrid';
import { NewsletterSection } from '../components/Home/NewsletterSection';
import { Footer } from '../components/Home/Footer';

export function Home() {
  return (
    <main className="min-h-screen">
      <Slideshow />
      <div className="container mx-auto px-4">
        <HotelSearchCard />
      </div>
      <CulturalGrid />
      <NewsletterSection />
      <Footer />
    </main>
  );
}