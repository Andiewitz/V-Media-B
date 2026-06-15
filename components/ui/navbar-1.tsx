"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ChevronDown, Search } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-10px)] max-w-7xl bg-[#181818] border-x border-b border-neutral-800 rounded-b-[24px] sm:rounded-b-[32px] md:rounded-b-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.15)] select-none font-display">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo and Name */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/v-media-logo.png"
              alt="V-Media logo"
              className="w-full h-full object-contain mix-blend-screen"
            />
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold tracking-tight text-white text-base sm:text-lg">
              V-Media
            </span>
            <span className="text-xs text-neutral-400 font-medium tracking-normal pl-2 border-l border-neutral-800 hidden sm:inline-block">
              Digital Marketing Solutions
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 ml-auto mr-8">
          {["Services", "Solutions", "Case Studies", "Resources", "Company", "Pricing"].map((item) => (
            <a 
              key={item}
              href={item === "Services" ? "#our-services" : "#"} 
              className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors tracking-tight font-display"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions Block */}
        <div className="hidden lg:flex items-center">
          {/* Start Free Trial Button */}
          <a
            href="#newsletter-cta"
            className="inline-flex items-center justify-center px-4.5 py-2 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-colors shadow-xs font-display"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile Menu Action Trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#our-services"
            className="inline-flex lg:hidden items-center justify-center px-4 py-1.5 text-xs font-bold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-colors font-display"
          >
            Get Started
          </a>
          <motion.button 
            className="flex items-center p-1.5 border border-neutral-800 rounded-lg bg-neutral-900/60" 
            onClick={toggleMenu} 
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-4 w-4 text-neutral-400" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#121212] z-50 pt-24 px-6 lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 border border-neutral-800 rounded-full bg-neutral-900"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <X className="h-5 w-5 text-neutral-400" />
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
                    className="text-lg text-neutral-200 font-bold tracking-tight font-display" 
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
                className="pt-8 border-t border-neutral-800 flex flex-col gap-4"
              >
                <a
                  href="#newsletter-cta"
                  className="inline-flex items-center justify-center w-full py-3 text-sm text-neutral-950 bg-white font-bold rounded-full font-display"
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
