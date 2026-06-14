'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, ChevronDown, Megaphone } from 'lucide-react';
import { Navbar1 } from '@/components/ui/navbar-1';

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Amplify your brand footprint strategically across paid and organic channels. We identify target demographics and scale custom campaigns designed around verified audience growth.",
      deliverables: ["Meta & Google campaign setup", "Target audience mapping", "Unified channel coordination"],
      kpi: "Enhanced brand reach & scale"
    },
    {
      id: "web-dev",
      title: "Website Development",
      description: "Engineering responsive web applications tailored with absolute precision. We build modern, fast, and lightweight layouts designed to deliver flawless experiences.",
      deliverables: ["Next.js & React frameworks", "Mobile-optimized responsive layouts", "API micro-integrations"],
      kpi: "Reliable production-grade quality"
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      description: "Develop automated and manual direct-response sequences. We map tailored content calendars designed to enrich loyalty, drive retention, and build long-term subscriber trust.",
      deliverables: ["Automated user flows", "Tailored seasonal campaigns", "Content design & execution"],
      kpi: "Consistent open & retention rates"
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Producing stunning, platform-native design elements and media assets. We build eye-catching visual guides designed to fit perfectly across your distribution endpoints.",
      deliverables: ["Graphic assets & guidelines", "Ad placement optimizations", "Dynamic asset libraries"],
      kpi: "Higher quality brand engagement"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Determining friction-free user flows and beautiful interactive prototypes. We center every interface asset around clean hierarchy, beautiful typography, and consistent layouts.",
      deliverables: ["High-fidelity digital layout states", "Component framework maps", "User testing & design audits"],
      kpi: "Polished design consistency"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFCF8] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* 1. HERO VIEWPORT - EXACTLY VIEWPORT SIZED */}
      <div className="relative h-screen md:h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FDFCF8]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e1e0da_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <header className="w-full relative z-50">
          <Navbar1 />
        </header>

        {/* HERO MAIN CONTENT */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto w-full pt-16 pb-12 my-auto">
          {/* Large Bold Display Heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-neutral-900 leading-none"
            >
              Sculpting Velocity for <br />
              <span className="bg-gradient-to-r from-neutral-950 via-[#8B5CF6] to-[#0D9488] bg-clip-text text-transparent">
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
              Tactical digital activation. Inspired by the brand DNA parameters of{" "}
              <code className="bg-neutral-100 text-[#8B5CF6] px-1.5 py-0.5 rounded text-xs select-all font-mono border border-neutral-200">
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
              href="#our-services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-950 text-white font-medium text-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg text-center flex items-center justify-center space-x-2 border border-neutral-950 cursor-pointer"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 animate-pulse" />
            </a>
          </motion.div>
        </main>

        {/* --- WISPR FLOW SYSTEM DECORATIVE INTERACTIVE GRAPHICS --- */}
        
        {/* Left Circular Scrolling/Rotating Text Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
          className="absolute left-[-110px] sm:left-[-90px] md:left-[-70px] bottom-[16%] md:bottom-[20%] z-20 pointer-events-none select-none opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          <svg width="280" height="280" viewBox="0 0 280 280" className="overflow-visible">
            <defs>
              <path
                id="circle-text-path"
                d="M 140, 140 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
              />
            </defs>
            <text className="font-sans font-medium tracking-widest text-[10px] md:text-[11px] uppercase fill-neutral-800">
              <textPath href="#circle-text-path" startOffset="0%">
                {"There's been a lot of back and honestly the whole thing's been kind of chaotic, like nobody going to slip. •"}
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Bottom Left Pastel Fingerprint Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="absolute left-6 bottom-6 md:left-8 md:bottom-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E8DDF3] border-2 border-neutral-900 text-neutral-900 flex items-center justify-center shadow-lg transition-transform hover:bg-[#DED0EC]"
        >
          <svg className="w-6 h-6 stroke-current text-neutral-900" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 0-10 10" />
            <path d="M12 2a10 10 0 0 1 10 10" />
            <path d="M12 6a6 6 0 0 0-6 6" />
            <path d="M12 6a6 6 0 0 1 6 6" />
            <path d="M12 10a2 2 0 0 0-2 2" />
            <path d="M12 10a2 2 0 0 1 2 2" />
            <path d="M12 14v4" />
            <path d="M8 14v4" />
            <path d="M16 14v4" />
          </svg>
        </motion.button>

        {/* Bottom Center Waveform Pill & Labeled Trigger ("waiting") */}
        <div className="absolute bottom-[30px] sm:bottom-[40px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-mono font-medium tracking-wider text-neutral-400 select-none uppercase">
            waiting
          </span>
          <div className="flex items-center justify-center gap-1 px-7 py-3 bg-[#FCFAF6] border-2 border-neutral-900 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-12 sm:h-14 w-36 sm:w-44">
            {[...Array(14)].map((_, i) => {
              const baseHeights = [10, 22, 16, 26, 12, 18, 28, 24, 14, 20, 10, 16, 12, 8];
              const height = baseHeights[i] || 14;
              return (
                <motion.span
                  key={i}
                  className="w-[3px] bg-neutral-900 rounded-full"
                  animate={{
                    height: [height - 4, height + 8, height - 4]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.75 + (i % 3) * 0.15,
                    ease: "easeInOut"
                  }}
                  style={{ height: `${height}px` }}
                />
              );
            })}
          </div>
        </div>

        {/* BOTTOM RIGHT: Fully Curved/Bent scrolling transcript ribbon banner that curves dynamically to the right edge */}
        <div className="absolute bottom-[-10px] left-0 w-full overflow-visible pointer-events-none z-10">
          <svg viewBox="0 0 1440 200" className="w-full h-auto overflow-visible select-none" preserveAspectRatio="none">
            <defs>
              {/* Perfectly curved path flowing from left/center under the capsule and surging high up on the right */}
              <path
                id="ribbon-curve-path"
                d="M 300,165 C 500,210 750,210 1000,140 C 1200,85 1350,75 1600,110"
              />
            </defs>
            {/* Dark background curved stroke layer */}
            <path
              d="M 300,165 C 500,210 750,210 1000,140 C 1200,85 1350,75 1600,110"
              fill="none"
              stroke="#121212"
              strokeWidth="64"
              strokeLinecap="round"
            />
            {/* White transcription text actual textPath bending! */}
            <text className="font-sans font-bold tracking-tight text-[15px] sm:text-[16px]" fill="#FFFFFF" dy="5">
              <textPath href="#ribbon-curve-path" startOffset="0%">
                {"meeting notes from yesterday's live session were compiled... summarizing all deliverables, tracking action items, and ensuring nothing is forgotten... or if they're still waiting? // can you draft follow-up templates? // yes, the voice notes have been processed successfully! // notes from yesterday's meeting were sent out, or if they're still waiting?"}
                <animate attributeName="startOffset" from="0%" to="-40%" dur="22s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>
        </div>

      </div>

      {/* 2. OUR SERVICES - CHARCOAL BACKGROUND WITH CURVED ENTRANCE */}
      <section 
        id="our-services"
        className="relative bg-[#2D2D2D] text-[#FDFCF8] rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] pt-24 pb-32 px-6 md:px-12 w-full z-20 shadow-[0_-15px_30px_rgba(0,0,0,0.08)]"
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Stacked Layout for Services Accordion */}
          <div className="space-y-12">
            
            {/* Header and Subtext */}
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-[#8B5CF6] tracking-widest text-xs uppercase block font-semibold">
                CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Our Services
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                We craft clean, customer-centered digital solutions designed to help your brand engage, convert, and scale beautifully.
              </p>
            </div>

            {/* Accordion list placed directly under the subtext */}
            <div className="space-y-2 max-w-4xl">
              {services.map((service, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={service.id}
                    className="border-b border-neutral-800 pb-2 transition-all"
                  >
                    {/* Header line trigger */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full py-3 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B5CF6] rounded-lg"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Dot Indicator */}
                        <span className="text-[#8B5CF6] text-xl leading-none font-bold select-none group-hover:scale-125 transition-transform">
                          •
                        </span>
                        {/* Title text */}
                        <span className={`text-base sm:text-lg md:text-xl font-bold tracking-tight transition-all ${
                          isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                        }`}>
                          {service.title}
                        </span>
                      </div>

                      {/* Framer style simple dynamic expand icon */}
                      <div className="ml-4 shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-500 transition-colors">
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Accordion expandable details */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-8 sm:pl-10 pr-4 pt-1 pb-4 space-y-6">
                            
                            {/* Detailed paragraph */}
                            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                              {service.description}
                            </p>

                            {/* Bullet points and KPI pill */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                              {/* Left side items */}
                              <div className="space-y-2">
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                                  KEY FOCUS DELIVERABLES:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {service.deliverables.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                                      <div className="w-1 h-1 rounded-full bg-[#8B5CF6]" />
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Target KPI badge */}
                              <div className="p-3 bg-[#232323] border border-neutral-800 rounded-xl max-w-xs shrink-0 self-start sm:self-center">
                                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                                  EXPECTED IMPACT
                                </span>
                                <span className="text-xs font-bold font-mono text-[#0D9488]">
                                  {service.kpi}
                                </span>
                              </div>

                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Campaign Channels & Live Endpoints */}
            <div className="pt-20 w-full select-none text-left">
              <div className="mb-6 flex items-center gap-3 pl-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                  Campaign Channels & Live Endpoints
                </span>
              </div>
              
              {/* Clean minimal lists aligned on the left, with no backgrounds or cards, as requested */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-2 mt-4 max-w-4xl">
                {[
                  {
                    name: "Facebook Ads",
                    desc: "Audience targeting & reach integration",
                    logo: (
                      <svg className="w-5 h-5 text-[#1877F2] shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Instagram Campaigns",
                    desc: "Organic & paid visual media loops",
                    logo: (
                      <svg className="w-5 h-5 text-pink-500 shrink-0 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )
                  },
                  {
                    name: "Google Search SEM",
                    desc: "Direct-intent search campaigns",
                    logo: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    )
                  },
                  {
                    name: "YouTube Ads",
                    desc: "High-yield video distributions",
                    logo: (
                      <svg className="w-5 h-5 text-[#FF0000] shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 00.5 6.163C0 8.038 0 12 0 12s0 3.962.5 5.837a3.003 3.003 0 002.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.003 3.003 0 002.11-2.108C24 15.962 24 12 24 12s0-3.962-.5-5.837z" />
                        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-1 group">
                    <div className="flex items-center gap-2">
                      <div className="p-0.5 group-hover:scale-110 transition-transform duration-200">
                        {item.logo}
                      </div>
                      <span className="text-white font-sans font-bold text-sm sm:text-base tracking-tight select-none">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 leading-relaxed font-sans">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

