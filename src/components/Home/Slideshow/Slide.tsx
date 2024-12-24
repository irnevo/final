import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export function Slide({ image, title, subtitle, link }: SlideProps) {
  return (
    <div className="relative h-screen">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <div className="max-w-3xl px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
          <motion.a
            href={link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Explore Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}