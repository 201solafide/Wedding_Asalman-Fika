// src/data/content.js
import { image } from 'framer-motion/client';
import danaImage from '../assets/images/qris.png'; // Pastikan ada dummy image dulu
import bcaImage from '../assets/images/BCA.png';
import gopayImage from '../assets/images/GOPAY.jpg'
import storyDummy1 from '../assets/images/storydummy1.jpg';
import storyDummy2 from '../assets/images/storydummy2.jpg';
import storyDummy3 from '../assets/images/storydummy3.jpg';

export const content = {
  couple: {
    groom: {
      name: "Asalman Zamili",
      parent: "Putra dari Bpk. Analis & Ibu Otilia",
      social: "@asalmanzamili",
      // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500" // Foto Dummy
      image: storyDummy1
    },
    bride: {
      name: "Fikarni Duha",
      parent: "Putri dari Bpk. & Ibu ",
      social: "@fikarniduha",
      // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500" // Foto Dummy
      image: storyDummy2
    },
    date: "2026-03-19",
  },
  events: [
    {
      id: 1,
      title: "Falowa (Pesta Pernikahan)",
      date: "Kamis, 19 Maret 2026",
      time: "10:00 WIB - Selesai",
      location: "Rumah Mempelain Perempuan",
      address: "Jl. Hiliduha, Kecamatan telukdalam, Telukdalam",
      mapsUrl: "https://maps.app.goo.gl/CUpYfT8exusJSxTaA" // Ganti dengan link asli
    },
    {
      id: 2,
      title: "Pemberkatan & Resepsi Pernikahan",
      date: "Minggu, 22 Maret 2026",
      time: "13:00 WIB - Selesai",
      location: "Rumah Mempelai Laki-laki",
      address: "Jl. hilizalootano, Kecamatan mazino, Nias Selatan",
      mapsUrl: "https://maps.app.goo.gl/NMsGieMtBznQ1zq56" // Ganti dengan link asli
    }
  ],
  stories: [
    {
      id: 1,
      title: "First Meet",
      date: "Juni 2025",
      description: "Cerita dimulai",
      image: storyDummy1
      // image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500"
    },
    {
      id: 2,
      title: "Relationship",
      date: "Juli 2025",
      description: "Melangkah ke jenjang yang lebih serius.",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500"
    },
    {
      id: 3,
      title: "Engagement",
      date: "Maret 2026",
      description: "Mengikat janji untuk selamanya.",
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
        accountNumber: "5455097492",
        holderName: "Asalman Zamili",
        // logo: "bca-logo" // Nanti kita mapping ke Icon
        logo: bcaImage // Nanti kita mapping ke Icon
      },
      {
        id: 2,
        bank: "GOPAY",
        accountNumber: "085370974515",
        holderName: "Asalman Zamili",
        logo: gopayImage
      }
    ],
    qris: danaImage // Opsional
  }
};