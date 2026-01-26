import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
// import { FiMailOpen } from "react-icons/fi";

const WelcomeScreen = ({ onOpen }) => {
  return (
    <motion.div
      // Animasi saat layar ini menghilang (Slide ke atas)
      exit={{ y: '-100vh' }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 text-white"
    >
      {/* Background Image dengan Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 z-0" />

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm tracking-[0.4em] uppercase mb-4"
        >
          You are invited to
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-serif mb-2"
        >
          The Wedding of
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-6xl md:text-8xl font-serif mb-12 italic text-amber-200"
        >
          {content.couple.groom.name} & {content.couple.bride.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={onOpen}
            className="flex items-center gap-3 mx-auto bg-amber-200 text-slate-900 px-8 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
          >
            {/* <FiMailOpen className="text-xl" />
            BUKA UNDANGAN */}
            <button onClick={onOpen} className="...">
              <span>💌</span> BUKA UNDANGAN
            </button>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;