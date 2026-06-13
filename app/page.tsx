'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Navbar1 } from '@/components/ui/navbar-1';

export default function Home() {
  return (
    <div className="relative h-screen md:h-[100dvh] bg-[#FDFCF8] text-neutral-900 font-sans flex flex-col justify-between overflow-hidden selection:bg-neutral-900 selection:text-white">
      {/* Elegant high-precision light alignment coordinates */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* HEADER Nav - Integrated interactive Navbar1 */}
      <header className="w-full">
        <Navbar1 />
      </header>

      {/* HERO SECTION - Pure White, Minimalist & Sophisticated */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto w-full pt-24 pb-12 sm:pb-16 my-auto">
        
        {/* Large Bold Display Heading */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-neutral-900 leading-none"
          >
            Sculpting Velocity for <br />
            <span className="bg-gradient-to-r from-neutral-900 via-[#8B5CF6] to-[#0D9488] bg-clip-text text-transparent">
              High-Growth Brands.
            </span>
          </motion.h1>

          {/* Clean Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Tactical digital activation. Inspired by the brand DNA parameters of{' '}
            <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-xs select-all font-mono">
              v-mediadigitalmarketingsolutions.com
            </code>
            , we deploy hyper-clean layouts custom-engineered to convert paid and search acquisitions.
          </motion.p>
        </div>

        {/* Direct Link Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center"
        >
          <a
            href="https://v-mediadigitalmarketingsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-950 text-white font-medium text-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg text-center flex items-center justify-center space-x-2 border border-neutral-950"
          >
            <span>Visit Live Domain</span>
            <ArrowRight className="w-4 h-4 text-neutral-400" />
          </a>
        </motion.div>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div>
          <span>© {new Date().getFullYear()} V-Media Digital Solutions.</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 grayscale opacity-60">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[10px]">VERIFIED DNA BLUEPRINT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
