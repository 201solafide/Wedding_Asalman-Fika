import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FiClock, FiMapPin, FiCalendar } from 'react-icons/fi';

const Event = () => {
  return (
    <section className="relative py-24 px-6 bg-[#fcf9f5] overflow-hidden">
      {/* Ornamen Bunga Pojok Kiri Atas */}
      <img 
        src="https://www.transparentpng.com/download/floral/flower-decoration-transparent-images-12.png" 
        className="absolute -top-10 -left-10 w-48 md:w-64 opacity-60 rotate-90 pointer-events-none"
        alt="floral-ornament"
      />

      {/* Ornamen Bunga Pojok Kanan Bawah */}
      <img 
        src="https://www.transparentpng.com/download/floral/flower-decoration-transparent-images-12.png" 
        className="absolute -bottom-10 -right-10 w-48 md:w-64 opacity-60 -rotate-90 pointer-events-none"
        alt="floral-ornament"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-slate-800 mb-2">Informasi Acara</h2>
          <p className="text-amber-600 font-serif italic">Save the Date</p>
          <div className="h-[1px] w-24 bg-amber-200 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white flex flex-col items-center text-center"
            >
              <h3 className="text-3xl font-serif text-amber-700 mb-6">{event.title}</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex flex-col items-center gap-2">
                  <FiCalendar className="text-amber-600 text-2xl" />
                  <p className="font-bold text-slate-700 text-lg">{event.date}</p>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <FiClock className="text-amber-600 text-xl" />
                  <p className="text-slate-600 font-medium">{event.time}</p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <FiMapPin className="text-amber-600 text-xl" />
                  <p className="font-bold text-slate-800 text-xl">{event.location}</p>
                  <p className="text-sm text-slate-500 max-w-xs leading-relaxed">{event.address}</p>
                </div>
              </div>

              <a 
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                LIHAT LOKASI
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;