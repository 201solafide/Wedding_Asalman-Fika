import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";


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
          <p className="text-xs tracking-widest text-slate-500 uppercase">
            Created with ❤️ for our special day
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">
            {content.couple.groom.name.split(' ')[0]} & {content.couple.bride.name.split(' ')[0]}
          </h2>

          <p className="text-slate-400 leading-relaxed mb-12 font-light px-4">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir 
            dan memberikan doa restu bagi kami.
          </p>

          <div className="h-[1px] w-20 bg-amber-200/30 mx-auto mb-8"></div>

          <p className="text-xs tracking-widest text-slate-500 uppercase">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-100 shadow-xl mb-6">
                <img src={content.couple.groom.image} alt="Groom" className="w-full h-full object-cover" />
              </div> */}
              <h3 className="text-3xl font-serif text-slate-800">Contact Us</h3>

              {/* Container for the row */}
              <div className="flex flex-row items-center gap-4 mt-4">
                
                <a href="https://github.com/201solafide" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity">
                  <DiGithubBadge size={40} color="black" />
                </a>

                <a href="https://www.instagram.com/solafide.2/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity">
                  <FaInstagram size={30} color="#405de6" />
                </a>

                <a href="https://www.linkedin.com/in/solafide-zamili/" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity">
                  <CiLinkedin size={35} color="#0A66C2" /> 
                </a>
                
              </div>
            </motion.div>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;