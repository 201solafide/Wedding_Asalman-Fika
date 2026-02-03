import React, { useState } from 'react';
import { content } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const Gift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(null);

  // Ambil data dari content.gift (Sesuai data Sir)
  const giftData = content?.gift;
  const accounts = giftData?.accounts || [];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <section className="relative py-24 bg-[#fcf9f5] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto"
          // transition={{ duration: 1.5, delay: 1.2 }} 
        >
          {/* Mengambil Title dan Description dari data Sir */}
          <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-amber-700 mb-6">
            {giftData?.title || "Wedding Gift"}
          </h2>
          <p className="font-serif text-slate-600 mb-10 italic text-sm md:text-base px-4 leading-relaxed">
            {giftData?.description}
          </p>

          <button 
            onClick={() => setIsOpen(true)}
            className="group relative px-10 py-4 bg-amber-700 text-white rounded-full text-sm tracking-[0.2em] font-bold uppercase transition-all hover:bg-amber-800 hover:shadow-2xl shadow-lg active:scale-95 shadow-amber-900/20"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
              Kirim Hadiah
            </span>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
              className="relative bg-[#fdfbf7] w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-amber-100"
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-amber-700 z-20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="p-8 md:p-12">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-slate-800 text-center mb-8 italic">Rekening Tujuan</h3>
                
                <div className="space-y-6">
                  {accounts.map((acc) => (
                    <div key={acc.id} className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm relative overflow-hidden group">
                      <div className="flex flex-col gap-4 relative z-10">
                        {/* Header: Logo Bank & Tombol Salin */}
                        <div className="flex justify-between items-center">
                          {acc.logo ? (
                            <img src={acc.logo} alt={acc.bank} className="h-8 object-contain" />
                          ) : (
                            <span className="text-amber-700 font-bold tracking-widest">{acc.bank}</span>
                          )}
                          <button 
                            onClick={() => copyToClipboard(acc.accountNumber, acc.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${copied === acc.id ? 'bg-green-100 text-green-700' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
                          >
                            {copied === acc.id ? 'Tersalin!' : 'Salin'}
                          </button>
                        </div>
                        
                        {/* Info Rekening */}
                        <div>
                          <p className="text-xl md:text-2xl font-mono font-bold text-slate-800 tracking-wider mb-1">
                            {acc.accountNumber}
                          </p>
                          <p className="text-sm text-slate-500 font-serif">
                            a.n <span className="text-slate-700 font-bold uppercase">{acc.holderName}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-serif">
                  Terima kasih atas tanda kasih Anda
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gift;