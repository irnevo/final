import React from 'react';
import { motion } from 'framer-motion';
import { danceInfo } from '../../data/cultural-info';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function DanceList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Classical Dance Forms of India</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {danceInfo.map((dance, index) => (
          <motion.div
            key={dance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <img
                src={dance.imageUrl}
                alt={dance.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{dance.name}</h2>
                <p className="text-sm opacity-90">{dance.origin}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 line-clamp-3">{dance.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <div className="flex flex-wrap gap-2">
                  {dance.keyFeatures.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/cultural/dance/${dance.id}`}
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}