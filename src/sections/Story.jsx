import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

import storydummy1 from '../assets/images/storydummy1.jpg';
import storydummy2 from '../assets/images/storydummy2.jpg';
import storydummy3 from '../assets/images/storydummy3.jpg';

import floralLeft from '../assets/images/floral-left.png'; 
import floralBottomRight from '../assets/images/floral-bottom-right.png';

const Story = () => {
  const storyData = content?.stories || [];

  return (
    <section className="relative min-h-screen py-24 px-4 bg-[#fdfbf7] overflow-hidden">
      
      {/* Background Ornaments */}
      <img src={floralLeft} className="absolute top-20 left-[-5%] w-64 md:w-96 opacity-[0.20] pointer-events-none" alt="deco" />
      <img src={floralBottomRight} className="absolute bottom-20 right-[-5%] w-64 md:w-96 opacity-[0.35] pointer-events-none" alt="deco" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-amber-700 mb-4">Cerita Kita</h2>
          <div className="h-[1px] w-24 bg-amber-600/30 mx-auto"></div>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Garis Tengah - Hanya muncul di Desktop (md ke atas) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-amber-200/50"></div>

          {storyData.map((item, index) => (
            <div key={item.id} className="relative mb-12 md:mb-20">
              
              {/* Desktop View: Grid 2 Kolom */}
              <div className="flex flex-col md:grid md:grid-cols-2 items-center w-full">
                
                {/* SISI KIRI */}
                <div className={`w-full md:px-12 ${index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'md:opacity-0 order-2'}`}>
                  {index % 2 === 0 && (
                    <CardStory item={item} index={index} />
                  )}
                </div>

                {/* DOT TENGAH */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-[#fdfbf7] z-20 shadow-md"></div>

                {/* SISI KANAN */}
                <div className={`w-full md:px-12 ${index % 2 !== 0 ? 'md:text-left order-2' : 'md:opacity-0 order-2 md:order-1'}`}>
                  {index % 2 !== 0 && (
                    <CardStory item={item} index={index} />
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-Komponen Card agar kode lebih rapi
const CardStory = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100/50 group ml-8 md:ml-0"
  >
    <div className="h-44 md:h-56 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
    </div>
    <div className="p-6">
      <span className="text-amber-700 font-serif text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{item.date}</span>
      <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
      <p className="text-slate-600 text-sm font-serif italic leading-relaxed">"{item.description}"</p>
    </div>
  </motion.div>
);

export default Story;