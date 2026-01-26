import React from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
// import { FaInstagram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Couple = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pembuka Sholawat/Salam (Opsional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 italic text-slate-500"
        >
          <p className="text-lg">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."</p>
          <p className="mt-2 font-semibold text-sm">(QS. Ar-Rum: 21)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mempelai Pria */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-100 shadow-xl mb-6">
              <img src={content.couple.groom.image} alt="Groom" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-slate-800">{content.couple.groom.name}</h3>
            <p className="text-slate-600 text-sm mt-2 mb-4 leading-relaxed">{content.couple.groom.parent}</p>
            <a href="#" className="flex items-center gap-2 text-amber-600 font-medium">
              <FaInstagram /> <span>{content.couple.groom.social}</span>
            </a>
          </motion.div>

          {/* Divider "&" untuk Mobile */}
          <div className="text-5xl font-serif text-amber-200 md:hidden">&</div>

          {/* Mempelai Wanita */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-100 shadow-xl mb-6">
              <img src={content.couple.bride.image} alt="Bride" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-slate-800">{content.couple.bride.name}</h3>
            <p className="text-slate-600 text-sm mt-2 mb-4 leading-relaxed">{content.couple.bride.parent}</p>
            <a href="#" className="flex items-center gap-2 text-amber-600 font-medium">
              <FaInstagram /> <span>{content.couple.bride.social}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;