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

      {/* 4. SEAMLESS CREAM BACKGROUND TRANSITION SPACER */}
      <div className="h-32 bg-[#FDFCF8] w-full" />
    </div>
  );
}

