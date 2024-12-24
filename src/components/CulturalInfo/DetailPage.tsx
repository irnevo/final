import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { danceInfo, foodInfo, templeInfo, festivalInfo } from '../../data/cultural-info';

export function DetailPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const getInfo = () => {
    switch (category) {
      case 'dance':
        return danceInfo.find(item => item.id === id);
      case 'food':
        return foodInfo.find(item => item.id === id);
      case 'temple':
        return templeInfo.find(item => item.id === id);
      case 'festival':
        return festivalInfo.find(item => item.id === id);
      default:
        return null;
    }
  };

  const info = getInfo();

  if (!info) {
    return <div>Information not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-orange-600 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <img
          src={info.imageUrl}
          alt={info.name}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">{info.name}</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8 leading-relaxed">
            {info.description}
          </p>

          {info.keyFeatures && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-2 gap-4">
                {info.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {info.varieties && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Regional Varieties</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {info.varieties.map((variety, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 p-4 rounded-lg text-center"
                  >
                    {variety}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}