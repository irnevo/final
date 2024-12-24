import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const dates = searchParams.get('dates') || '';
  const guests = searchParams.get('guests') || '';

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(query) ||
    destination.state.toLowerCase().includes(query) ||
    destination.description.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        <p className="text-gray-600">
          {filteredDestinations.length} destinations found
          {query && ` for "${query}"`}
          {dates && ` on ${dates}`}
          {guests && ` for ${guests} guests`}
        </p>
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No destinations found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}