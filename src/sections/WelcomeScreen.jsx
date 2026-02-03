import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
// import { FiMailOpen } from "react-icons/fi";
import floralTopRight from "../assets/images/floral-top-right.png";
import floralBottomLeft from "../assets/images/floral-bottom-left.png";
import bgPhoto from "../assets/images/ImageScreen.webp";

import weddingMusic from '../assets/audio/BudiDoremi.mp3';

const WelcomeScreen = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('');

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(weddingMusic);
    audioRef.current.loop = true;

    // LOGIKA: Mengambil nama dari URL (contoh: ?to=Budi)
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to'); // Mengambil teks setelah 'to='
    setGuestName(name ? name : 'Tamu Undangan');

  }, []);

  const handleBukaUndangan = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Musik tertunda:", err));
    }
    onOpen(); // Ini fungsi bawaan Sir untuk pindah ke page Hero
  };

  return (
    // Container Utama: Fixed menutup seluruh layar
    <div className="fixed inset-0 z-50 bg-[#fdfbf7] flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- 1. BACKGROUND FULL PAGE --- */}
      {/* Kita gunakan 'absolute inset-0' agar nempel ke semua sisi */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgPhoto} 
          alt="Background" 
          // object-cover: Memaksa gambar memenuhi area tanpa gepeng (terpotong sedikit jika rasio beda)
          // w-full h-full: Lebar dan tinggi 100%
          className="w-full h-full object-cover opacity-77 grayscale" 
        />
        {/* Layer tambahan agar teks tetap terbaca jelas (overlay putih tipis) */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      {/* --- 2. ORNAMEN BUNGA (RESPONSIF DINAMIS) --- */}
      {/* Penjelasan Ukuran Responsif (Tailwind):
         - w-32       : Ukuran dasar untuk HP (kecil)
         - md:w-56    : Ukuran untuk Tablet/iPad (sedang)
         - lg:w-80    : Ukuran untuk Laptop/PC (besar)
      */}
      
      {/* Bunga Kiri Atas */}
      <motion.img 
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 0.8, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        src={floralTopRight} 
        className="absolute top-0 right-0 w-45 md:w-116 lg:w-90 pointer-events-none z-10" 
        alt="floral-top" 
      />
      
      {/* Bunga Kanan Bawah */}
      <motion.img 
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 0.8, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        src={floralBottomLeft} 
        className="absolute bottom-0 left-0 w-72 md:w-126 lg:w-100 pointer-events-none z-10" 
        alt="floral-bottom" 
      />

      {/* --- 3. KONTEN UTAMA --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 w-full px-4 flex flex-col items-center"
      >
        <p className="font-serif text-slate-600 tracking-[0.2em] text-[10px] md:text-sm uppercase mb-2 md:mb-4">
          The Wedding of
        </p>
        
        {/* Font Judul Responsif */}
        <h1 className="font-['Great_Vibes'] text-5xl md:text-7xl lg:text-9xl text-amber-700 mb-6 md:mb-10 drop-shadow-sm">
          Asalman & Fikarni
        </h1>

        {/* Kotak Nama Tamu */}
        <div className="bg-white/70 backdrop-blur-md border border-amber-200/60 p-6 md:p-10 rounded-3xl shadow-xl mb-8 w-11/12 max-w-md">
          <p className="text-slate-500 text-xs md:text-sm mb-3 font-serif italic">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <div className="text-lg md:text-2xl font-bold text-slate-800 capitalize font-serif leading-snug break-words">
            {guestName}
          </div>
        </div>

        <button 
          onClick={handleBukaUndangan}
          className="group relative px-8 py-3 md:px-10 md:py-4 bg-amber-700 text-white rounded-full text-xs md:text-sm tracking-[0.2em] font-bold uppercase transition-all hover:bg-amber-800 hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-amber-900/20 shadow-lg"
        >
          Buka Undangan
        </button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;