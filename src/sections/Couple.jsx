import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/content";
// import { FaInstagram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import floralSide from "../assets/images/floral-top-right.png";
import Image1 from "../assets/images/ImageScreen.webp";
import Image2 from "../assets/images/ImageSlide.webp";
import Image3 from "../assets/images/5613711.jpg"

const slideImages = [
  Image1,
  Image2,
  Image3,
  Image1,
  Image2,
  Image3
];

const Couple = () => {
  const [index, setIndex] = useState(0);

  // logika slideshow otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideImages.length);
    }, 5000); // ganti foto setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center bg-[#fdfbf7]">
      
      {/* --- 1. BACKGROUND SLIDESHOW --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            src={slideImages[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }} // Opacity rendah agar teks & foto profil jelas
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Overlay agar warna tetap hangat sesuai tema */}
        <div className="absolute inset-0 bg-[#fdfbf7]/70"></div>
      </div>

      {/* --- 2. ORNAMEN SISI (Sama dengan Hero) --- */}
      <div className="absolute left-0 top-0 bottom-0 w-[12%] md:w-[10%] opacity-40 z-10 pointer-events-none">
        <img src={floralSide} className="w-full h-full object-cover object-left" alt="floral-side" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-[12%] md:w-[10%] opacity-40 z-10 pointer-events-none">
        <img src={floralSide} className="w-full h-full object-cover object-right scale-x-[-1]" alt="floral-side" />
      </div>

      {/* --- 3. KONTEN UTAMA --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-amber-700 mb-6">Mempelai</h2>
          
          <p className="font-serif text-slate-600 mb-16 italic max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            "Dan mereka keduanya akan menjadi satu daging, jadi mereka tidak lagi menjadi dua orang, melainkan satu.Oleh karena itu apa yang telah dipersatukan Tuhan, janganlah manusia memisahkan."
            <span className="block mt-2 font-bold">(Injil Markus 10:8-9)</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            
            {/* Mempelai Pria */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
                {/* Bingkai Lingkaran Gold */}
                <div className="absolute inset-0 border-[3px] border-amber-500/30 rounded-full scale-110 group-hover:scale-115 transition-transform duration-700"></div>
                <div className="absolute inset-0 border border-amber-600 rounded-full scale-105"></div>
                
                {/* Foto Profil */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                  <img 
                    src={content.couple.groom.image} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                    alt="Groom" 
                  />
                </div>
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-slate-800">{content.couple.groom.name}</h3>
              <p className="text-slate-500 text-sm mt-3 font-serif">
                Putra dari <br /> 
                <span className="font-bold text-slate-700 uppercase tracking-tighter text-xs">Bpk Analis Zamili {content.couple.groom.father} & Ibu Otilia Halawa {content.couple.groom.mother}</span>
              </p>
              <a href={`https://instagram.com/${content.couple.groom.instagram}`} className="mt-4 flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors text-sm font-serif">
                <span className="p-1 rounded-md bg-amber-50 border border-amber-200 text-[10px]">IG</span> @{content.couple.groom.instagram}
              </a>
            </div>

            {/* Mempelai Wanita */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
                <div className="absolute inset-0 border-[3px] border-amber-500/30 rounded-full scale-110 group-hover:scale-115 transition-transform duration-700"></div>
                <div className="absolute inset-0 border border-amber-600 rounded-full scale-105"></div>
                
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                  <img 
                    src={content.couple.bride.image} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                    alt="Bride" 
                  />
                </div>
              </div>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-slate-800">{content.couple.bride.name}</h3>
              <p className="text-slate-500 text-sm mt-3 font-serif text-center leading-relaxed">
                Putri dari <br /> 
                <span className="font-bold text-slate-700 uppercase tracking-tighter text-xs">Bpk Tahela Duha {content.couple.bride.father} & Ibu Erina Bago {content.couple.bride.mother}</span>
              </p>
              <a href={`https://instagram.com/${content.couple.bride.instagram}`} className="mt-4 flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors text-sm font-serif">
                <span className="p-1 rounded-md bg-amber-50 border border-amber-200 text-[10px]">IG</span> @{content.couple.bride.instagram}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;