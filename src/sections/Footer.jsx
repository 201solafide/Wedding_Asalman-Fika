import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
      {/* Ornamen Background Halus */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-8 text-amber-200/80">Terima Kasih</p>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">
            {content.couple.groom.name.split(' ')[0]} & {content.couple.bride.name.split(' ')[0]}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-12 font-light px-4">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir 
            dan memberikan doa restu bagi kami.
          </p>

          <div className="h-[1px] w-20 bg-amber-200/30 mx-auto mb-8"></div>

          <p className="text-xs tracking-widest text-slate-500 uppercase">
            Created with ❤️ for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;