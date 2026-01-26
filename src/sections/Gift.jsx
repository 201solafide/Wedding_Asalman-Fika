import React, { useState } from 'react';
import { content } from '../data/content';
import { FiCopy, FiCheck } from 'react-icons/fi'; // Pastikan react-icons sudah terinstall

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
                <div className="bg-slate-100 px-3 py-1 rounded text-xs font-semibold text-slate-400">
                  CARD
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

        {/* QRIS Section (Jika ada) */}
        {content.gift.qris && (
          <div className="mt-12 p-4 bg-white rounded-2xl shadow-inner border border-slate-100">
            <p className="text-sm font-medium mb-4 text-slate-500 underline underline-offset-4">Scan QRIS</p>
            <img 
              src={content.gift.qris} 
              alt="QRIS Code" 
              className="mx-auto w-48 h-48 object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gift;