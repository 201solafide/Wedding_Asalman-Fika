import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RSVP = () => {
  const [formData, setFormData] = useState({ nama: '', hadir: 'Hadir', pesan: '' });
  const [status, setStatus] = useState('idle');
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDBOc44Fj69OCNhGKilzaozx1hlkmSXIJKcmdaJ_CSHrdrLkz7tMWLyJM35C1BxfYM1A/exec";

  // Fungsi untuk mengambil data dari Google Sheets
  const fetchComments = async () => {
    try {
      const response = await fetch(scriptURL);
      const data = await response.json();
      // Asumsikan data yang kembali adalah array of objects
      setComments(data.reverse()); // Supaya yang terbaru di atas
    } catch (error) {
      console.error('Gagal mengambil pesan:', error);
    }
  };

  // Ambil pesan saat pertama kali load
  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Buat URL dengan query string (cara paling ampuh untuk Apps Script)
    const finalURL = `${scriptURL}?nama=${encodeURIComponent(formData.nama)}&hadir=${encodeURIComponent(formData.hadir)}&pesan=${encodeURIComponent(formData.pesan)}`;

    try {
      // Kita gunakan method GET untuk memicu doPost lewat parameter jika POST bermasalah, 
      // atau gunakan POST dengan cara di bawah ini:
      await fetch(finalURL, {
        method: 'POST',
      });

      // Beri jeda 1 detik agar Google selesai menulis ke sheet sebelum kita ambil data lagi
      setTimeout(async () => {
        setStatus('success');
        await fetchComments(); // Ambil data terbaru
      }, 1000);

      setTimeout(() => {
        setStatus('idle');
        setFormData({ nama: '', hadir: 'Hadir', pesan: '' });
      }, 4000);

    } catch (error) {
      console.error('Error!', error);
      setStatus('idle');
      alert("Gagal mengirim pesan. Coba cek URL Script Sir.");
    }
  };

  return (
    <section className="py-24 px-6 bg-[#fdfbf7]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-['Great_Vibes'] text-5xl text-amber-700 mb-10">Konfirmasi Kehadiran</h2>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-200 mb-10"
          >
            <p className="text-lg font-serif italic">Terima kasih! Pesan & doa Anda telah kami terima. ✨</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-amber-100 text-left space-y-6 mb-10">
            <div>
              <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 ml-1">Nama Lengkap</label>
              <input 
                type="text" required value={formData.nama}
                className="w-full px-5 py-4 rounded-2xl border border-amber-50 outline-none focus:ring-2 focus:ring-amber-200 bg-[#fcf9f5] transition-all"
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 ml-1">Kehadiran</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl border border-amber-50 outline-none focus:ring-2 focus:ring-amber-200 bg-[#fcf9f5] transition-all"
                  onChange={(e) => setFormData({...formData, hadir: e.target.value})}
                >
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 ml-1">Pesan & Doa</label>
              <textarea 
                rows="4" required value={formData.pesan}
                className="w-full px-5 py-4 rounded-2xl border border-amber-50 outline-none focus:ring-2 focus:ring-amber-200 bg-[#fcf9f5] transition-all"
                placeholder="Tuliskan harapan Anda..."
                onChange={(e) => setFormData({...formData, pesan: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-amber-700 text-white py-5 rounded-2xl font-bold tracking-[0.2em] hover:bg-amber-800 transition-all disabled:bg-slate-300 shadow-lg shadow-amber-900/10"
            >
              {status === 'loading' ? 'MENGIRIM...' : 'KIRIM KONFIRMASI'}
            </button>
          </form>
        )}

        {/* --- TOMBOL SHOW/HIDE COMMENTS --- */}
        <button 
          onClick={() => setShowComments(!showComments)}
          className="text-amber-800 font-serif italic text-sm underline underline-offset-4 hover:text-amber-600 transition-colors"
        >
          {showComments ? 'Sembunyikan Pesan' : `Lihat Ucapan (${comments.length})`}
        </button>

        {/* --- DAFTAR PESAN --- */}
        <AnimatePresence>
          {showComments && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-10 space-y-4 overflow-hidden"
            >
              {comments.length > 0 ? (
                comments.map((c, i) => (
                  <div key={i} className="bg-white/50 p-6 rounded-2xl border border-amber-50 text-left">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-800 text-sm">{c.nama}</h4>
                      <span className={`text-[10px] px-2 py-1 rounded-md ${c.hadir === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {c.hadir}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs italic leading-relaxed">"{c.pesan}"</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-sm italic">Belum ada pesan.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RSVP;