"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown, Search } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-10px)] max-w-7xl bg-[#F5F4EF] border-x border-b border-[#C5C5C5] rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] select-none font-display">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo and Name */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Clay-style gradient arch logo */}
            <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M4 28C4 14.7452 14.7452 4 28 4" 
                stroke="url(#clay-gradient-navbar)" 
                strokeWidth="7" 
                strokeLinecap="round" 
              />
              <defs>
                <linearGradient id="clay-gradient-navbar" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0D9488" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#FF9966" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <span className="font-display font-extrabold tracking-tight text-neutral-900 text-base sm:text-lg">
            V-Media
          </span>
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {["Services", "Solutions", "Case Studies", "Resources", "Company", "Pricing"].map((item) => (
            <a 
              key={item}
              href={item === "Services" ? "#our-services" : "#"} 
              className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors tracking-tight font-display"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions Block */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Shortcut */}
          <div className="flex items-center gap-2 px-3 py-1.5 border border-neutral-300/60 rounded-lg text-neutral-400 text-xs bg-neutral-100/50 hover:bg-neutral-100 cursor-pointer select-none transition-colors">
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <kbd className="font-sans text-[10px] text-neutral-400 tracking-tight">⌘K</kbd>
          </div>

          {/* Login Link */}
          <a href="#" className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors font-display">
            Log in
          </a>

          {/* Get a Demo Button */}
          <a
            href="#our-services"
            className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/60 rounded-full border border-neutral-200/65 transition-colors font-display"
          >
            Get a demo
          </a>

          {/* Start Free Trial Button */}
          <a
            href="#newsletter-cta"
            className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-colors shadow-xs font-display"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile Menu Action Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#our-services"
            className="inline-flex lg:hidden items-center justify-center px-4 py-1.5 text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-colors font-display"
          >
            Get Started
          </a>
          <motion.button 
            className="flex items-center p-1.5 border border-neutral-300 rounded-lg bg-neutral-100/60" 
            onClick={toggleMenu} 
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-4 w-4 text-neutral-700" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 border border-neutral-200/80 rounded-full bg-neutral-50"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <X className="h-5 w-5 text-neutral-700" />
            </motion.button>
            
            <div className="flex flex-col space-y-6">
              {["Services", "Solutions", "Case Studies", "Resources", "Company", "Pricing"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                  exit={{ opacity: 0, x: 15 }}
                >
                  <a 
                    href={item === "Services" ? "#our-services" : "#"} 
                    className="text-lg text-neutral-800 font-bold tracking-tight font-display" 
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                exit={{ opacity: 0, y: 15 }}
                className="pt-8 border-t border-neutral-100 flex flex-col gap-4"
              >
                <a
                  href="#"
                  className="text-center py-3 text-sm text-neutral-600 font-semibold font-display"
                  onClick={toggleMenu}
                >
                  Log in
                </a>
                <a
                  href="#our-services"
                  className="inline-flex items-center justify-center w-full py-3 text-sm text-neutral-855 bg-neutral-100 border border-neutral-200 font-bold rounded-full font-display"
                  onClick={toggleMenu}
                >
                  Get a demo
                </a>
                <a
                  href="#newsletter-cta"
                  className="inline-flex items-center justify-center w-full py-3 text-sm text-white bg-neutral-950 font-bold rounded-full font-display"
                  onClick={toggleMenu}
                >
                  Start free trial
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Navbar1 }
