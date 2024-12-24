import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CulturalCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  onClick: () => void;
}

export function CulturalCard({
  title,
  description,
  imageUrl,
  category,
  onClick
}: CulturalCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-orange-400 text-sm font-medium mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <motion.div
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-white hover:text-orange-400 transition-colors"
        >
          Explore More
          <ArrowRight className="h-4 w-4 ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
}