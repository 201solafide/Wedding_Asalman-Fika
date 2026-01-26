// src/data/content.js
import qrisImage from '../assets/images/qris.png'; // Pastikan ada dummy image dulu

export const content = {
  couple: {
    groom: {
      name: "Romeo Setiawan",
      parent: "Putra dari Bpk. Suhendra & Ibu Ratna",
      social: "@romeosetiawan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" // Foto Dummy
    },
    bride: {
      name: "Juliet Amalia",
      parent: "Putri dari Bpk. Wijaya & Ibu Lestari",
      social: "@julietamalia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500" // Foto Dummy
    },
    date: "2026-08-17",
  },
  events: [
    {
      id: 1,
      title: "Akad Nikah",
      date: "Senin, 17 Agustus 2026",
      time: "08:00 - 10:00 WIB",
      location: "Masjid Agung Al-Barkah",
      address: "Jl. Veteran No.1, RT.005/RW.002, Marga Jaya, Bekasi Selatan",
      mapsUrl: "https://maps.app.goo.gl/..." // Ganti dengan link asli
    },
    {
      id: 2,
      title: "Resepsi",
      date: "Senin, 17 Agustus 2026",
      time: "11:00 - 14:00 WIB",
      location: "Ballroom Hotel Grandhika",
      address: "Jl. Iskandarsyah Raya No.65, Jakarta Selatan",
      mapsUrl: "https://maps.app.goo.gl/..." // Ganti dengan link asli
    }
  ],
  stories: [
    {
      id: 1,
      title: "First Meet",
      date: "Desember 2022",
      description: "Pertama kali saling kenal di bangku perkuliahan, berawal dari tugas kelompok yang sama.",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500"
    },
    {
      id: 2,
      title: "Relationship",
      date: "Januari 2024",
      description: "Setelah sekian lama berteman, kami memutuskan untuk melangkah ke jenjang yang lebih serius.",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500"
    },
    {
      id: 3,
      title: "Engagement",
      date: "Maret 2026",
      description: "Momen dimana kedua keluarga besar bertemu dan kami mengikat janji untuk selamanya.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=500"
    }
  ],
  gift: {
    title: "Wedding Gift",
    description: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami...",
    accounts: [
      {
        id: 1,
        bank: "BCA",
        accountNumber: "1234567890",
        holderName: "Romeo Setiawan",
        logo: "bca-logo" // Nanti kita mapping ke Icon
      },
      {
        id: 2,
        bank: "DANA",
        accountNumber: "08123456789",
        holderName: "Juliet Amalia",
        logo: "dana-logo"
      }
    ],
    qris: qrisImage // Opsional
  }
};