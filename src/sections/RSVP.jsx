import React, { useState } from 'react';
import { motion } from 'framer-motion';

// const RSVP = () => {
//   const [formData, setFormData] = useState({
//     nama: '',
//     hadir: 'Hadir',
//     pesan: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Nomor WhatsApp Sir (Ganti dengan nomor Sir, awali dengan 62)
//     const whatsappNo = "6282260025752"; 
    
//     // Format pesan
//     const teks = `Halo, saya *${formData.nama}*.\n\nKonfirmasi Kehadiran: *${formData.hadir}*\n\nUcapan/Pesan: ${formData.pesan}`;
    
//     // Encode pesan untuk URL
//     const encodedTeks = encodeURIComponent(teks);
    
//     // Buka WhatsApp
//     window.open(`https://wa.me/${whatsappNo}?text=${encodedTeks}`, '_blank');

//     // Mengirimkan ke spreadsheet

//     const scriptURL = "https://script.google.com/a/macros/abdijayaintegra.com/s/AKfycbw0v73oG2V2e2UuDpTSbANGl9H3Y8q5mTepCbUR12bYQMv77D_IX6vFWV51p-pKkYh93g/exec";
//   };
const RSVP = () => {
  const [formData, setFormData] = useState({ nama: '', hadir: 'Hadir', pesan: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // GANTI DENGAN URL WEB APP SIR TADI
    const scriptURL = "https://script.google.com/macros/s/AKfycbw0v73oG2V2e2UuDpTSbANGl9H3Y8q5mTepCbUR12bYQMv77D_IX6vFWV51p-pKkYh93g/exec";
    
    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      
      setStatus('success');
      // Reset form setelah 3 detik
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('idle');
      alert("Waduh, ada kendala saat mengirim data. Coba lagi ya, Sir.");
    }
  };
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-10">Konfirmasi Kehadiran</h2>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="bg-green-100 text-green-700 p-8 rounded-3xl border border-green-200"
          >
            <p className="text-xl font-bold italic">Terima kasih, Sir! Data sudah tersimpan di database kami. ✨</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#fcf9f5] p-8 rounded-3xl shadow-lg border border-amber-100 text-left space-y-6">
            {/* Input Nama */}
            <div>
              <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
              <input 
                type="text" required
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-amber-400"
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
              />
            </div>

            {/* Select Hadir */}
            <div>
              <label className="block text-sm font-semibold mb-2">Konfirmasi Kehadiran</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-amber-400"
                onChange={(e) => setFormData({...formData, hadir: e.target.value})}
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>

            {/* Textarea Pesan */}
            <div>
              <label className="block text-sm font-semibold mb-2">Pesan & Doa</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-amber-400"
                onChange={(e) => setFormData({...formData, pesan: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold tracking-widest hover:bg-amber-700 transition-all disabled:bg-slate-400"
            >
              {status === 'loading' ? 'MENGIRIM...' : 'KIRIM KONFIRMASI'}
            </button>
          </form>
        )}
      </div>
    </section>
  );

//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-serif text-slate-800 mb-2">Konfirmasi Kehadiran</h2>
//           <p className="text-slate-500 italic">Mohon konfirmasi kehadiran Anda melalui form di bawah ini</p>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           className="bg-[#fcf9f5] p-8 rounded-3xl shadow-lg border border-amber-100"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
//               <input 
//                 type="text" 
//                 required
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
//                 placeholder="Masukkan nama Anda"
//                 onChange={(e) => setFormData({...formData, nama: e.target.value})}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">Konfirmasi Kehadiran</label>
//               <select 
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
//                 onChange={(e) => setFormData({...formData, hadir: e.target.value})}
//               >
//                 <option value="Hadir">Hadir</option>
//                 <option value="Tidak Hadir">Tidak Hadir</option>
//                 <option value="Masih Ragu">Masih Ragu</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan & Doa</label>
//               <textarea 
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
//                 placeholder="Tuliskan ucapan atau doa untuk mempelai"
//                 onChange={(e) => setFormData({...formData, pesan: e.target.value})}
//               ></textarea>
//             </div>

//             <button 
//               type="submit"
//               className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold tracking-widest hover:bg-amber-700 transition-all shadow-md active:scale-95"
//             >
//               KIRIM KONFIRMASI
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
};

export default RSVP;