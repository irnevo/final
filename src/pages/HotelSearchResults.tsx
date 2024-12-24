import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin } from 'lucide-react';
import { SearchFilters } from '../components/Hotels/SearchFilters';
import { HotelList } from '../components/Hotels/HotelList';
import { SearchSummary } from '../components/Hotels/SearchSummary';

export function HotelSearchResults() {
  const [searchParams] = useSearchParams();
  
  const searchCriteria = {
    location: searchParams.get('location') || '',
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: parseInt(searchParams.get('guests') || '1')
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        <SearchSummary criteria={searchCriteria} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <SearchFilters />
          <div className="lg:col-span-3">
            <HotelList searchCriteria={searchCriteria} />
          </div>
        </div>
      </div>
    </div>
  );
}