import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

import storydummy1 from '../assets/images/storydummy1.jpg';
import storydummy2 from '../assets/images/storydummy2.jpg';
import storydummy3 from '../assets/images/storydummy3.jpg';


const Story = () => {

  // mapping sederhana
  const LocalImages = [storydummy1, storydummy2, storydummy3];

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-2">Cerita Cinta Kami</h2>
          <div className="h-[1px] w-24 bg-amber-200 mx-auto mt-4"></div>
        </motion.div>

        {/* Grid Kolase Foto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.stories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image Background */}
              <img 
                src={item.image} // digunakan apabila datanya dari content.js
                // src={LocalImages[index]} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 p-8 text-white w-full">
                <span className="text-amber-300 text-xs font-bold tracking-[0.2em] uppercase">{item.date}</span>
                <h3 className="text-2xl font-serif mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-200 line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;