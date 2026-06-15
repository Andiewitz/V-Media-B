'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { Navbar1 } from '@/components/ui/navbar-1';
import { SparksCarousel } from '@/components/ui/sparks-carousel';

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

  const brandLogos = [
    {
      name: "Facebook Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-2xl font-display font-bold tracking-tight">Facebook Ads</span>
        </div>
      )
    },
    {
      name: "Instagram Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="text-2xl font-display font-bold tracking-tight">Instagram Ads</span>
        </div>
      )
    },
    {
      name: "Google Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M16.5 3L6 21h5.5L22 3h-5.5z" />
            <path d="M6 21l10.5-18H11L.5 21H6z" opacity="0.6" />
          </svg>
          <span className="text-2xl font-display font-extrabold tracking-tight">Google Ads</span>
        </div>
      )
    },
    {
      name: "TikTok Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.31 16.29.93c-.09 1.91.55 3.79 1.83 5.25.12.13.26.25.4.37v4.29c-1.39-.12-2.74-.63-3.87-1.48-.48-.36-.92-.78-1.29-1.25v7.7c0 4.14-3.36 7.5-7.5 7.5S1.86 19.95 1.86 15.81s3.36-7.5 7.5-7.5c.3 0 .59.02.88.06V12.7c-.29-.07-.58-.1-.88-.1-1.77 0-3.21 1.44-3.21 3.21s1.44 3.21 3.21 3.21 3.21-1.44 3.21-3.21V0h3.27z" />
          </svg>
          <span className="text-2xl font-display font-black tracking-tight">TikTok Ads</span>
        </div>
      )
    },
    {
      name: "SEM",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <span className="text-2xl font-display font-bold tracking-widest uppercase">SEM</span>
        </div>
      )
    },
    {
      name: "YouTube Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <span className="text-2xl font-display font-extrabold tracking-tight">YouTube Ads</span>
        </div>
      )
    },
    {
      name: "LinkedIn Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
          <span className="text-2xl font-display font-bold tracking-tight">LinkedIn Ads</span>
        </div>
      )
    },
    {
      name: "Reddit Ads",
      element: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.23-1.72l1.32-4.14 4.3 1c.04.99.86 1.78 1.85 1.78 1.02 0 1.85-.83 1.85-1.85S19.02 3 18 3c-1.02 0-1.85.83-1.85 1.85L11.5 3.8C11.16 3.7 10.8 3.9 10.7 4.3L9.2 9c-2.42.04-4.67.68-6.33 1.7-.56-.74-1.44-1.2-2.37-1.2-1.65 0-3 1.35-3 3 0 1.12.6 2.1 1.5 2.62-.06.39-.1.78-.1 1.18 0 4.14 4.93 7.5 11 7.5s11-3.36 11-7.5c0-.4-.04-.79-.1-1.18.9-.52 1.5-1.5 1.5-2.62zm-16 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 4.3c-1.75 1.75-5.25 1.75-7 0-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 1.35 1.35 4.25 1.35 5.6 0 .2-.2.5-.2.7 0 .2.2.2.5 0 .7zm-.3-2.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
          <span className="text-2xl font-display font-bold tracking-tight">Reddit Ads</span>
        </div>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#121212] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* 1. HERO VIEWPORT - EXACTLY VIEWPORT SIZED */}
      <div className="relative h-screen md:h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#121212]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        {/* Custom SVG clay stacks for the left and right sides, floating on the right side of the viewport to balance the left-aligned content */}
        {/* Left stacked stones (positioned top-right) */}
        <div className="hidden lg:block absolute right-32 top-[24%] w-20 h-36 opacity-85 select-none pointer-events-none z-20">
          <svg viewBox="0 0 100 180" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] animate-bounce-slow">
            {/* Base shadow */}
            <ellipse cx="50" cy="155" rx="35" ry="9" fill="rgba(0,0,0,0.3)" />
            {/* Teal bottom stone */}
            <ellipse cx="50" cy="140" rx="30" ry="18" fill="#0D9488" />
            {/* Purple middle stone */}
            <ellipse cx="50" cy="106" rx="22" ry="16" fill="#8B5CF6" />
            {/* Orange/pink middle stone */}
            <ellipse cx="50" cy="76" rx="16" ry="14" fill="#FF5E62" />
            {/* Yellow top stone */}
            <circle cx="50" cy="50" r="11" fill="#FFD200" />
          </svg>
        </div>

        {/* Right stacked stones (positioned bottom-right) */}
        <div className="hidden md:block absolute right-8 bottom-32 w-20 h-36 opacity-85 select-none pointer-events-none z-20">
          <svg viewBox="0 0 100 180" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
            {/* Base shadow */}
            <ellipse cx="50" cy="155" rx="35" ry="9" fill="rgba(0,0,0,0.3)" />
            {/* Gray support block */}
            <rect x="22" y="145" width="56" height="10" rx="2" fill="#333333" />
            {/* Blue bottom stone */}
            <ellipse cx="50" cy="128" rx="26" ry="16" fill="#0f6bff" />
            {/* Yellow middle stone */}
            <ellipse cx="50" cy="98" rx="20" ry="13" fill="#FFD200" />
            {/* Purple top stone */}
            <circle cx="50" cy="74" r="11" fill="#8B5CF6" />
            {/* Teal pointer cap */}
            <path d="M 44,56 L 56,56 L 50,46 Z" fill="#0D9488" strokeLinejoin="round" />
          </svg>
        </div>

        <header className="w-full relative z-50">
          <Navbar1 />
        </header>

        {/* HERO MAIN CONTENT */}
        <main className="relative z-10 flex-1 flex flex-col items-start justify-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto w-full pt-28 pb-16 my-auto">
          <div className="w-full relative flex flex-col items-start justify-center text-left space-y-8 max-w-3xl mr-auto">
            
            <div className="space-y-6 max-w-2xl relative z-10 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-tight text-left"
              >
                Sculpting velocity for{" "}
                <span className="bg-gradient-to-r from-white via-[#A78BFA] to-[#0D9488] bg-clip-text text-transparent">
                  High-Growth Brands
                </span>{" "}
                — and the Strategy to Scale It
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed font-display max-w-xl text-left"
              >
                Tactical digital activation. Inspired by the brand DNA parameters of{" "}
                <code className="bg-neutral-800 text-[#A78BFA] px-1.5 py-0.5 rounded text-xs select-all font-mono border border-neutral-700">
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
              className="flex items-center justify-start relative z-10"
            >
              <a
                href="#our-services"
                className="px-8 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-sm transition-all duration-200 hover:bg-neutral-200 hover:shadow-lg text-center flex items-center justify-center space-x-2 cursor-pointer font-display"
              >
                <span>Start scaling for free</span>
                <ArrowRight className="w-4 h-4 text-neutral-950" />
              </a>
            </motion.div>

            {/* Trust and ratings indicator */}
            <div className="pt-8 border-t border-neutral-800 w-full max-w-xl mr-auto flex flex-col sm:flex-row items-start sm:items-center justify-start gap-x-6 gap-y-3 text-xs text-neutral-500 select-none font-display relative z-10">
              <span className="font-mono font-semibold tracking-wider uppercase text-[9px] sm:text-[10px] text-neutral-500">
                TRUSTED BY ELITE CAMPAIGN TEAMS
              </span>
              <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-neutral-200">4.9</span>
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 hidden sm:block" />
                <div className="flex items-center gap-1">
                  <span className="font-bold text-neutral-200">₱800M+</span>
                  <span className="text-[10px]">generated</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 hidden sm:block" />
                <div className="flex items-center gap-1">
                  <span className="font-bold text-neutral-200">180x</span>
                  <span className="text-[10px]">ROAS</span>
                </div>
              </div>
            </div>

            {/* Grayscale brand logo row */}
            <div className="pt-6 border-t border-neutral-800 w-full max-w-xl mr-auto flex flex-wrap items-center justify-start gap-x-6 gap-y-3 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 relative z-10 select-none font-display">
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">Canva</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">HubSpot</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">Google</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">OpenAI</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">Stripe</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">Notion</span>
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-tight">Figma</span>
            </div>

          </div>
        </main>

        {/* --- WISPR FLOW SYSTEM COMBINED CONTINUOUS RIBBON --- */}
        <div className="absolute bottom-[-10px] left-0 w-full overflow-visible pointer-events-none z-10 select-none">
          <svg viewBox="0 0 1440 380" className="w-full h-auto overflow-visible select-none" preserveAspectRatio="none">
            <defs>
              {/* 
                Organic loop path derived from Wispr Flow bezier mathematics.
                4 cubic bezier segments form a natural crossing loop (NOT geometric circles).
                Segment 1: Entry sweep from top-left down to center-left
                Segment 2: Curves up-right forming the upper arc of the loop
                Segment 3: Crosses back left-down through the loop body (the key crossing)
                Segments 4-5: Extended ribbon sweeping to the right edge
              */}
              <path
                id="continuous-flow-path"
                d="M -200,12 C -187,78 -129,186 5,230 C 117,262 220,187 160,108 C 101,29 -28,178 160,293 C 197,319 400,345 650,330 C 850,315 1100,290 1420,310"
              />
              
              {/* 
                Ribbon stroke path — starts well past the loop crossing exit.
                Computed by splitting the first ribbon bezier at t≈0.2 
                and using the right sub-curve.
              */}
              <path
                id="ribbon-solid-bg"
                d="M 201,308 C 280,328 450,342 650,330 C 850,315 1100,290 1420,310"
              />

              <mask id="ribbon-text-mask">
                <rect x="-400" y="-100" width="2000" height="600" fill="black" />
                <use href="#ribbon-solid-bg" fill="none" stroke="white" strokeWidth="80" strokeLinecap="round" />
              </mask>

              <text id="scrolling-text" className="font-sans font-extrabold tracking-tight" dy="5">
                <textPath href="#continuous-flow-path" startOffset="0%">
                  <tspan fontSize="11px" fontWeight="600" letterSpacing="1px">
                    {"V-MEDIA DIGITAL MARKETING SOLUTIONS • SCALE HIGHER • GROW STRONGER • "}
                  </tspan>
                  <tspan fontSize="11px" fontWeight="600" letterSpacing="1px">
                    {"tactical digital activation and hyper-clean layouts engineered to convert... "}
                  </tspan>
                  <tspan fontSize="14px" fontWeight="800">
                    {" // high-converting landing pages tailored with absolute Next.js precision // Meta, Google & YouTube campaign setup with target demographic mapping // automated direct-response email sequences that enrich loyalty // platforms custom-engineered to convert search acquisitions // sculpting velocity for high-growth brands // live visual asset delivery and UI/UX friction-free layout states //"}
                  </tspan>
                  <animate attributeName="startOffset" from="-40%" to="0%" dur="26s" repeatCount="indefinite" />
                </textPath>
              </text>
            </defs>

            {/* 1. Underneath: Grey text layer scrolling along the entire path */}
            <use href="#scrolling-text" fill="#737373" />

            {/* 2. Middle: Dark background curved ribbon stroke */}
            <use href="#ribbon-solid-bg" fill="none" stroke="#121212" strokeWidth="60" strokeLinecap="round" />

            {/* 3. Top: White text layer scrolling along the entire path, masked to the ribbon */}
            <g mask="url(#ribbon-text-mask)">
              <use href="#scrolling-text" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

      </div>

      {/* 2. OUR SERVICES - CHARCOAL BACKGROUND WITH CURVED ENTRANCE & EXIT */}
      <section 
        id="our-services"
        className="relative bg-[#1E1E1E] text-[#FDFCF8] rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] rounded-b-[50px] sm:rounded-b-[80px] md:rounded-b-[100px] pt-24 pb-32 px-6 md:px-12 w-full z-20 shadow-[0_-15px_30px_rgba(0,0,0,0.08)]"
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

            {/* Campaign Channels — Sparks Carousel */}
            <div className="pt-20 w-full">
              <SparksCarousel
                title="Campaign Channels"
                subtitle="Platforms & tools we deploy across every service."
                items={[
                  {
                    id: "social-media",
                    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80",
                    title: "Social Media Marketing — Facebook, Instagram & TikTok campaigns",
                    count: 4,
                    countLabel: "Active Channels",
                  },
                  {
                    id: "web-dev",
                    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
                    title: "Website Development — Next.js, React & WordPress engineering",
                    count: 3,
                    countLabel: "Frameworks",
                  },
                  {
                    id: "email",
                    imageSrc: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&auto=format&fit=crop&q=80",
                    title: "Email Marketing — Automated flows via Mailchimp & Klaviyo",
                    count: 2,
                    countLabel: "Platforms",
                  },
                  {
                    id: "content",
                    imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80",
                    title: "Content Creation — YouTube, Canva & Adobe CC production",
                    count: 5,
                    countLabel: "Asset Types",
                  },
                  {
                    id: "ui-ux",
                    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=80",
                    title: "UI/UX Design — Figma, Framer & Storybook prototyping",
                    count: 4,
                    countLabel: "Design Tools",
                  },
                  {
                    id: "google-ads",
                    imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
                    title: "Google Search SEM — Direct-intent paid acquisition campaigns",
                    count: 3,
                    countLabel: "Campaign Types",
                  },
                ]}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 3. BRAND LOGOS SECTION (YELLOW BANNER) */}
      <section 
        id="trusted-marquee"
        className="relative bg-[#FFD200] text-neutral-900 rounded-b-[50px] sm:rounded-b-[80px] md:rounded-b-[100px] mt-[-50px] sm:mt-[-80px] md:mt-[-100px] pt-[90px] sm:pt-[110px] md:pt-[130px] pb-16 px-6 md:px-12 w-full z-10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-2 border-black/15"
      >
        <div className="max-w-6xl mx-auto relative flex flex-col items-center justify-center">
          {/* Heading */}
          <div className="text-center max-w-3xl px-4 mb-8 relative z-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-neutral-900 leading-tight">
              Our Digital Marketing Services
            </h3>
          </div>
        </div>

        {/* Logos Marquee Container */}
        <div className="w-full overflow-hidden relative z-20 select-none py-4">
          <div className="flex gap-20 whitespace-nowrap animate-marquee">
            {brandLogos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="flex items-center justify-center text-neutral-900 opacity-85 hover:opacity-100 transition-opacity duration-200">
                {logo.element}
              </div>
            ))}
            {brandLogos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="flex items-center justify-center text-neutral-900 opacity-85 hover:opacity-100 transition-opacity duration-200">
                {logo.element}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS REVEAL SECTION (CREAM BACKGROUND) */}
      <section className="relative bg-[#FDFCF8] py-28 px-6 md:px-12 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-16 md:mb-24">
            <span className="font-mono text-[#8B5CF6] tracking-widest text-xs uppercase block font-semibold mb-3">
              TRACK RECORD & SCALE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-neutral-900 leading-tight max-w-2xl">
              Proven Results Across Elite High-Growth Campaigns.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-4">
            {/* Stat 1: 17 Million PHP Ad Spent */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start space-y-4 border-l-2 border-neutral-200 pl-0 md:pl-6"
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 leading-none">
                ₱17M
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-neutral-800 tracking-tight font-display">
                  ₱17 Million PHP Ad Spent
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-display">
                  Strategically deployed across meta channels and search networks to drive user acquisition.
                </p>
              </div>
            </motion.div>

            {/* Stat 2: 800 Million PHP Generated */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start space-y-4 border-l-2 border-neutral-200 pl-0 md:pl-6"
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 leading-none bg-gradient-to-r from-neutral-950 to-[#8B5CF6] bg-clip-text text-transparent">
                ₱800M
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-neutral-800 tracking-tight font-display">
                  ₱800 Million PHP Generated
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-display">
                  E-commerce scaling, lead generation, and custom conversion funnels designed for velocity.
                </p>
              </div>
            </motion.div>

            {/* Stat 3: 180x ROAS */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-start space-y-4 border-l-2 border-neutral-200 pl-0 md:pl-6"
            >
              <div className="text-6xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter text-[#0D9488] leading-none">
                180x
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-neutral-800 tracking-tight font-display">
                  180x Average ROAS
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-display">
                  Maximizing efficiency on spent capital through hyper-clean layout parameters.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Partnership Block - Large and Fancy */}
          <div className="mt-8 flex flex-col items-center justify-center border-t border-neutral-200/80 pt-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#FDFCF8] border-2 border-neutral-200/60 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Subtle backglow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#8B5CF6]/5 blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#0D9488]/5 blur-3xl pointer-events-none" />

              {/* Large Fancy Icon */}
              <motion.div 
                className="relative z-10 shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-neutral-900 flex items-center justify-center shadow-xl border border-neutral-800"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#FFD200] animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                  <path d="M12 2C7.5 5.5 6 9.5 6 14c0 2 1 3.5 3 4.5s4 .5 6-1 3-2.5 3-4.5c0-4.5-1.5-8.5-6-12z" />
                  <circle cx="12" cy="11" r="2" fill="currentColor" />
                </svg>
              </motion.div>

              {/* Text info */}
              <div className="flex-1 text-center md:text-left space-y-4 relative z-10">
                <div className="space-y-1">
                  <span className="font-mono text-[#8B5CF6] tracking-widest text-xs uppercase font-bold block">
                    STRATEGIC ECOSYSTEM PARTNER
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-neutral-950 leading-none">
                    Raket Launcher PH
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl font-display">
                  We partner directly with the premier launchpad for creators and freelance talent in the Philippines to streamline operational pipelines, deploy visual assets at scale, and deliver elite campaign conversion speeds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER CTA SECTION (VIBRANT BLUE) */}
      <section 
        id="newsletter-cta"
        className="relative bg-[#0f6bff] text-white py-24 px-6 md:px-12 w-full z-20 shadow-[0_15px_35px_rgba(0,0,0,0.15)] mt-12 overflow-hidden rounded-none"
      >
        {/* Decorative blur elements for premium background aesthetic */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="font-mono text-neutral-300 tracking-widest text-xs uppercase font-bold block">
              STAY UPDATED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mx-auto font-display">
              Get high-converting landing page guides, campaign optimization audits, and search acquisition insights delivered straight to your inbox.
            </p>
          </div>

          {/* Email Form */}
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your business email" 
              required
              className="w-full px-5 py-4 rounded-xl border border-neutral-300/40 bg-white/10 font-display text-sm text-white placeholder-neutral-300/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white focus:text-neutral-900 focus:placeholder-neutral-400 transition-all"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-xl bg-white text-[#0f6bff] font-display font-bold text-sm hover:bg-neutral-100 active:scale-[0.98] transition-all hover:shadow-lg hover:shadow-black/10 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 6. FOOTER TRANSITION SPACER */}
      <div className="h-24 bg-[#FDFCF8] w-full" />
    </div>
  );
}
