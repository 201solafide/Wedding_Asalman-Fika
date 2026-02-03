import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FiClock, FiMapPin, FiCalendar } from 'react-icons/fi';
import floralTopleft from '../assets/images/floral-top-left.png';
import floralBottomRight from '../assets/images/floral-bottom-right.png';

const Event = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#fcf9f5] overflow-hidden">
      {/* --- 1. ORNAMEN BUNGA POJOK --- */}
      <motion.img 
        initial={{ opacity: 0, rotate: -90 }}
        whileInView={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1.5 }}
        src={floralTopleft  } 
        className="absolute top-0 left-0 w-40 md:w-64 lg:w-80 pointer-events-none z-10" 
      />
      <motion.img 
        initial={{ opacity: 0, rotate: 90 }}
        whileInView={{ opacity: 0.6, rotate: 0 }}
        transition={{ duration: 1.5 }}
        src={floralBottomRight} 
        className="absolute bottom-0 right-0 w-40 md:w-64 lg:w-80 pointer-events-none z-10" 
      />

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-amber-700 mb-4">Informasi Acara</h2>
          <div className="h-[1px] w-24 bg-amber-600/30 mx-auto"></div>
        </motion.div>

        {/* --- 2. DETAIL ACARA (AKAD & RESEPSI) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Akad Nikah */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
          </div> */}

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-100 shadow-xl text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">Falowa (Acara Adat)</h3>
            <div className="text-amber-700 mb-4">
              <p className="font-bold">Kamis, 19 Maret 2026</p>
              <p>10.00 WIB s/d Selesai</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-serif">
              Kediaman Mempelai Wanita <br />
              Desa Bawozau'ua Telukdalam, Nias Selatan
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-white p-4 rounded-[40px] shadow-2xl border border-amber-100 overflow-hidden"
            >
              <div className="text-center py-4">
                <p className="font-serif text-amber-800 font-bold tracking-widest uppercase text-xs mb-2">Lokasi Acara</p>
                <div className="h-[2px] w-10 bg-amber-600 mx-auto mb-4"></div>
              </div>
              
              <div className="w-full h-[350px] md:h-[450px] rounded-[30px] overflow-hidden relative">
                {/* TIPS: Ganti isi 'src' di bawah ini dengan link 'Embed Map' dari Google Maps lokasi Sir.
                  Caranya: Buka Google Maps > Klik Share > Pilih 'Embed a map' > Copy 'src' nya saja.
                */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.7239276823211!2d97.85203781144975!3d0.5927826663255664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30287fbe54829627%3A0x36da28fd6c274d51!2sDesa%20Bawoza&#39;ua!5e1!3m2!1sen!2sid!4v1770105816608!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Denah Lokasi"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-100 shadow-xl text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">Acara Pemberkatan Nikah</h3>
            <div className="text-amber-700 mb-4">
              <p className="font-bold">Kamis, 19 Maret 2026</p>
              <p>14.00 WIB s/d Selesai</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-serif">
              Gedung Gereja BNKP <br />
              Gedung Gereja BNKP Bawoza'ua Telukdalam, Nias Selatan
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-white p-4 rounded-[40px] shadow-2xl border border-amber-100 overflow-hidden"
            >
              <div className="text-center py-4">
                <p className="font-serif text-amber-800 font-bold tracking-widest uppercase text-xs mb-2">Lokasi Acara</p>
                <div className="h-[2px] w-10 bg-amber-600 mx-auto mb-4"></div>
              </div>
              
              <div className="w-full h-[350px] md:h-[450px] rounded-[30px] overflow-hidden relative">
                {/* TIPS: Ganti isi 'src' di bawah ini dengan link 'Embed Map' dari Google Maps lokasi Sir.
                  Caranya: Buka Google Maps > Klik Share > Pilih 'Embed a map' > Copy 'src' nya saja.
                */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9572708908418!2d97.85334267349147!3d0.5918721635463599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30287f29b34cdd7b%3A0xcb5d74bae9aa7852!2sGereja%20BNKP%20Baw%C3%B6za&#39;ua!5e1!3m2!1sen!2sid!4v1770106474732!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Denah Lokasi"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-100 shadow-xl text-center"
          >
            <h3 className="font-serif text-2xl font-bold text-slate-800 mb-4">Resepsi</h3>
            <div className="text-amber-700 mb-4">
              <p className="font-bold">Minggu, 22 Maret 2026</p>
              <p>14.00 s/d Selesai</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-serif">
              Kediaman Mempelai Pria <br />
              Desa Hilizalo'otano Mazino, Nias Selatan
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-white p-4 rounded-[40px] shadow-2xl border border-amber-100 overflow-hidden"
            >
              <div className="text-center py-4">
                <p className="font-serif text-amber-800 font-bold tracking-widest uppercase text-xs mb-2">Lokasi Acara</p>
                <div className="h-[2px] w-10 bg-amber-600 mx-auto mb-4"></div>
              </div>
              
              <div className="w-full h-[350px] md:h-[450px] rounded-[30px] overflow-hidden relative">
                {/* TIPS: Ganti isi 'src' di bawah ini dengan link 'Embed Map' dari Google Maps lokasi Sir.
                  Caranya: Buka Google Maps > Klik Share > Pilih 'Embed a map' > Copy 'src' nya saja.
                */}
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d451.7341927592799!2d97.86084253019384!3d0.698928960630429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snuyam%20pom!5e1!3m2!1sen!2sid!4v1770106632215!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Denah Lokasi"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Event;