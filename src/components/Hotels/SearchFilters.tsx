import React, { useState } from 'react';
import { Star } from 'lucide-react';

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [ratings, setRatings] = useState<number[]>([]);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="50000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Star Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={ratings.includes(rating)}
                  onChange={() => {
                    if (ratings.includes(rating)) {
                      setRatings(ratings.filter(r => r !== rating));
                    } else {
                      setRatings([...ratings, rating]);
                    }
                  }}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <div className="flex">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}