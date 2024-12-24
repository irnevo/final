import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { formatDate } from '../../utils/formatters';

interface SearchCriteria {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface Props {
  criteria: SearchCriteria;
}

export function SearchSummary({ criteria }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Hotels in {criteria.location}</h1>
      
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2 text-orange-500" />
          <span>
            {criteria.checkIn ? formatDate(criteria.checkIn) : 'Any dates'}
            {criteria.checkOut && ` - ${formatDate(criteria.checkOut)}`}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2 text-orange-500" />
          <span>{criteria.guests} {criteria.guests === 1 ? 'Guest' : 'Guests'}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2 text-orange-500" />
          <span>{criteria.location}</span>
        </div>
      </div>
    </div>
  );
}