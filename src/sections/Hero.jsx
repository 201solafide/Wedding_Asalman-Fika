import React from 'react';
import { motion } from 'framer-motion';
// Pastikan Sir menggunakan 2 file berbeda untuk kiri dan kanan
import floralLeft from '../assets/images/floral-left.png'; 
import floralRight from '../assets/images/floral-right.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfbf7]">
      
      {/* --- 1. BACKGROUND TEXTURE (Agar tidak polos) --- */}
      {/* Kita tambahkan layer dengan opacity sangat rendah untuk kesan kertas elegan/vintage */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')` }}>
      </div>

      {/* --- 2. ORNAMEN SISI KIRI (Dinamis & Tidak Kaku) --- */}
      <motion.div 
        // Awalnya di tengah (x: 100% dari posisinya ke arah kanan agar berhimpit di center)
        initial={{ x: '100%', opacity: 1 }}
        // Bergerak ke posisi asli di paling kiri
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 2, 
          ease: [0.45, 0, 0.55, 1], // Efek slow-motion yang elegan
          delay: 0.2 
        }}
        viewport={{ once: true }} // Agar efek tirai hanya jalan sekali saat dibuka
        className="absolute left-0 top-0 bottom-0 w-[40%] md:w-[25%] lg:w-[20%] z-30 pointer-events-none"
      >
        <img 
          src={floralLeft} 
          className="w-full h-full object-contain object-left" 
          alt="floral-left" 
        />
      </motion.div>

      {/* --- 3. ORNAMEN SISI KANAN --- */}
      {/* --- 3. EFEK TIRAI: ORNAMEN SISI KANAN --- */}
      <motion.div 
        // Awalnya di tengah (x: -100% dari posisinya ke arah kiri agar berhimpit di center)
        initial={{ x: '-100%', opacity: 1 }}
        // Bergerak ke posisi asli di paling kanan
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 2, 
          ease: [0.45, 0, 0.55, 1],
          delay: 0.2 
        }}
        viewport={{ once: true }}
        className="absolute right-0 top-0 bottom-0 w-[40%] md:w-[25%] lg:w-[20%] z-30 pointer-events-none"
      >
        <img 
          src={floralRight} 
          className="w-full h-full object-contain object-right" 
          alt="floral-right" 
        />
      </motion.div>

      {/* --- 4. KONTEN TENGAH (Tema Senada dengan Couple) --- */}
      <motion.div 
        className="relative z-20 text-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }} // Delay agar teks muncul setelah tirai terbuka sedikit
      >
        <p className="font-serif text-amber-700 tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 opacity-80">
          The Wedding of
        </p>
        
        <h1 className="font-['Great_Vibes'] text-6xl md:text-8xl lg:text-9xl text-slate-800 mb-6 drop-shadow-sm">
          Salman & Fika
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-amber-600/30"></div>
          <span className="text-amber-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z" />
            </svg>
          </span>
          <div className="h-[1px] w-12 bg-amber-600/30"></div>
        </div>

        <p className="font-serif text-slate-500 tracking-[0.2em] md:text-lg uppercase text-sm">
          19 . 03 . 2026
        </p>
      </motion.div>

      {/* Efek Vignette Lembut di pojok layar agar lebih dramatis */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(217,119,6,0.05)] pointer-events-none"></div>
    </section>
  );
};

export default Hero;