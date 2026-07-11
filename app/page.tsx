'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/impala-psa-logo.png" alt="Impala PSA" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-8 tracking-wide">
            <a href="#listen" className="hover:text-[#FF1A1A] transition-colors">Listen</a>
            <a href="#merch" className="hover:text-[#FF1A1A] transition-colors">Merch</a>
            <a href="#fan-zone" className="hover:text-[#FF1A1A] transition-colors">Fan Zone</a>
            <a href="#about" className="hover:text-[#FF1A1A] transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF1A1A]/20 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <img src="/impala-psa-logo.png" alt="Impala PSA" className="w-full max-w-2xl mx-auto" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl tracking-widest text-gray-400 mb-12"
          >
            Independent · Unfiltered · Unstoppable
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF1A1A] text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#FF3333] transition-colors"
            >
              Stream Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-white/10 transition-colors"
            >
              Pre-Save
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-white/10 transition-colors"
            >
              Get Merch
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Listen Section */}
      <section id="listen" className="relative py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="absolute inset-0 bg-no-repeat bg-center opacity-10" style={{ backgroundImage: "url('/psa-logo.png')", backgroundSize: 'contain' }}></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wider">LISTEN</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Spotify', logo: '/spotify-logo.svg', url: 'https://open.spotify.com/artist/1Bph7foBtTQRt0qyDM256v?si=X-JJ2PcKQheH4NuMyNuooQ' },
              { name: 'Apple Music', logo: '/apple-music-logo.svg', url: 'https://music.apple.com/us/artist/impalapsa/1833136321' },
              { name: 'Tidal', logo: '/tidal-icon.svg', url: 'https://tidal.com/artist/65332028/u' }
            ].map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-12 text-center hover:bg-white/10 transition-colors cursor-pointer block w-56"
              >
                <img src={platform.logo} alt={platform.name} className="w-24 h-24 mb-5 mx-auto object-contain" />
                <div className="text-xl font-semibold tracking-wide">{platform.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF1A1A] text-sm tracking-[0.3em] uppercase font-semibold mb-4"
          >
            Coming Soon
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-wider mb-12"
          >
            New Singles
          </motion.h2>
          <div className="flex flex-col justify-center gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-xl bg-[#FF1A1A]/20 blur-2xl scale-105"></div>
              <img
                src="/baylor.png"
                alt="Baylor — Pure South Affiliated"
                className="relative rounded-xl w-full max-w-sm mx-auto shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-xl bg-[#FF1A1A]/20 blur-2xl scale-105"></div>
              <div className="relative">
                <video
                  ref={videoRef}
                  src="/its-whateva.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl w-full max-w-sm mx-auto shadow-2xl block"
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg transition-colors"
                  aria-label={muted ? 'Unmute' : 'Mute'}
                >
                  {muted ? '🔇' : '🔊'}
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-xl bg-[#FF1A1A]/20 blur-2xl scale-105"></div>
              <img
                src="/whole-lotta-hundreds.png"
                alt="Whole Lotta Hundreds — Impala x Fatboi Blac"
                className="relative rounded-xl w-full max-w-sm mx-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF1A1A] text-sm tracking-[0.3em] uppercase font-semibold mb-4"
          >
            Coming Soon
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-wider mb-12"
          >
            MERCH
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-start">
            {[
              { src: '/merch-impala-psa-tee.png', alt: 'Impala PSA Tee' },
              { src: '/merch-psa-tee.png', alt: 'Pure South Affiliated Tee' },
            ].map((item, index) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="w-full max-w-sm mx-auto"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-xl w-full shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider">Get Exclusives First</h2>
          <p className="text-gray-400 mb-8 text-lg tracking-wide">Join the inner circle. Never miss a drop.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF1A1A] transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF1A1A] text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#FF3333] transition-colors"
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wider">ABOUT</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center tracking-wide">
            IMPALA emerges from the shadows with a sound that defies convention. 
            Raw, unfiltered, and relentlessly independent, we carve our own path in a world 
            of manufactured noise. This isn't just music—it's a movement. Every beat, every lyric, 
            every performance is a declaration of artistic freedom. We are the voice of the unheard, 
            the pulse of the underground, the storm that's coming to change everything.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm tracking-wide">
            2026 IMPALA. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Instagram', 'TikTok', 'YouTube', 'X'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-[#FF1A1A] transition-colors tracking-wide"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
