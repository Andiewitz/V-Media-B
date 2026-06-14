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
        <main className="relative z-10 flex-1 flex flex-col items-start justify-center text-left px-6 md:px-12 max-w-6xl mx-auto w-full pt-16 pb-12 my-auto">
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
              className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-sans"
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
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-start"
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

      {/* 2. OUR SERVICES - CHARCOAL BACKGROUND WITH CURVED ENTRANCE */}
      <section 
        id="our-services"
        className="relative bg-[#1E1E1E] text-[#FDFCF8] rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] pt-24 pb-32 px-6 md:px-12 w-full z-20 shadow-[0_-15px_30px_rgba(0,0,0,0.08)]"
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

    </div>
  );
}

