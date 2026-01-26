import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-200">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`, // Sir bisa ganti dengan foto pre-wedding nanti
        }}
      >
        {/* Overlay agar teks mudah dibaca */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-sm mb-4 font-light"
        >
          The Wedding of
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl font-serif mb-6"
        >
          {content.couple.groom.name} <span className="text-3xl md:text-5xl font-sans">&</span> {content.couple.bride.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-[1px] w-24 bg-white/60 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            {new Date(content.couple.date).toLocaleDateString('id-ID', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
          
          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20 text-xs uppercase tracking-widest opacity-70"
          >
            Scroll Down
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;