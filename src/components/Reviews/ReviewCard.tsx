import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils/formatters';

interface ReviewProps {
  userImage: string;
  userName: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  images?: string[];
}

export function ReviewCard({
  userImage,
  userName,
  rating,
  date,
  content,
  helpful,
  images
}: ReviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <img
          src={userImage}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{userName}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {formatDate(date)}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{content}</p>

      {images && images.length > 0 && (
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <div className="flex items-center text-sm text-gray-600">
        <button className="flex items-center hover:text-orange-600 transition-colors">
          <ThumbsUp className="h-4 w-4 mr-1" />
          Helpful ({helpful})
        </button>
      </div>
    </motion.div>
  );
}