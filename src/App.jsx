import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './sections/WelcomeScreen';
import Hero from './sections/Hero';
import Gift from './sections/Gift';
import Couple from './sections/Couple';
import Event from './sections/Event';
import Story from './sections/Story';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';


function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="min-h-screen bg-transparent selection:bg-amber-100 relative overflow-x-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      {isOpened && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Blob Kuning/Amber - Lebih Pekat */}
          <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-[100px] animate-pulse" />
          
          {/* Blob Biru - Di sisi lain */}
          <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
          
          {/* Tambahan Grain Texture (Opsional untuk kesan elegan) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
        </div>
      )}
      {/* ------------------------------------------ */}

      <AnimatePresence>
        {!isOpened && <WelcomeScreen onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      {isOpened && (
        <div className="relative z-10 fade-in">
          <Hero />
          <Couple />
          <Event />
          <Story />
          <Gift />
          <RSVP />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;