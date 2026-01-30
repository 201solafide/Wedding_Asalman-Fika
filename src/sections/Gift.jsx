import React, { useState } from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck } from 'react-icons/fi'; // Pastikan react-icons sudah terinstall
import qrisImg from '../assets/images/qris.png';  

const Gift = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (accNumber, id) => {
    navigator.clipboard.writeText(accNumber);
    setCopiedId(id);
    
    // Reset icon centang setelah 2 detik
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleDownQris = () => {
    const isReady = window.confirm("Apakah Anda ingin mendownload gambar QRIS ini untuk melakukan pembayaran?");
    
    if (isReady) {
      // Proses download jika klik 'Ya'
      const link = document.createElement('a');
      link.href = qrisImg;
      link.download = 'QRIS-Wedding-Payment.png'; // Nama file saat didownload
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Jika klik 'Tidak', maka otomatis pop-up tertutup dan kembali ke scroll
  }
  return (
    <section className="py-16 px-6 bg-slate-50 text-center">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <h2 className="text-3xl font-serif mb-4 text-slate-800">{content.gift.title}</h2>
        <p className="text-sm text-slate-600 mb-10 italic">
          {content.gift.description}
        </p>

        {/* Bank Accounts List */}
        <div className="space-y-6">
          {content.gift.accounts.map((acc) => (
            <div 
              key={acc.id} 
              className="bg-transparent p-6 rounded-2xl shadow-md border border-slate-100 transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-left">
                  <p className="font-bold text-lg text-slate-800 tracking-wider">{acc.bank}</p>
                  <p className="text-sm text-slate-500 uppercase">{acc.holderName}</p>
                </div>
                {/* Placeholder Logo (Bisa diganti image nantinya) */}
                <div className="w-32 sm:w-36 md:w-40 aspect-[3/2]
                                bg-white rounded-md
                                flex items-center justify-center">

                  <img
                    src={acc.logo}
                    alt="Logo Bank"
                    className="w-full h-full object-contain p-3"
                  />
                </div>

              </div>

              <div className="flex items-center justify-between bg-transparent p-3 rounded-xl border border-dashed border-slate-300">
                <span className="font-mono text-xl font-bold text-slate-700">
                  {acc.accountNumber}
                </span>
                <button
                  onClick={() => handleCopy(acc.accountNumber, acc.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    copiedId === acc.id 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {copiedId === acc.id ? <FiCheck /> : <FiCopy />}
                  <span className="text-xs font-medium">
                    {copiedId === acc.id ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bagian QRIS */}
        <div className="mt-12 p-6 bg-white rounded-3xl shadow-md inline-block">
          <p className="mb-4 font-semibold text-slate-700">Scan QRIS</p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownQris}
            className="cursor-pointer relative group"
          >
            <img 
              src={qrisImg} 
              alt="QRIS" 
              className="w-48 h-48 mx-auto rounded-lg border-2 border-dashed border-amber-200 p-2"
            />
            
            {/* Overlay petunjuk saat di-hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
              <span className="text-white text-xs font-bold">Klik untuk Download</span>
            </div>
          </motion.div>
          
          <p className="mt-4 text-xs text-slate-400 italic">Klik gambar untuk simpan ke galeri</p>
        </div>
      </div>
    </section>
  );
};

export default Gift;