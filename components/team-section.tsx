'use client';

import React from 'react';
import { motion } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  bgColor: string;
  clipPathId: string;
}

export function TeamSection() {
  const team: TeamMember[] = [
    {
      id: "logan",
      name: "Logan Dang",
      role: "WordPress Developer",
      imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
      bgColor: "#8B5CF6",
      clipPathId: "clip-hourglass",
    },
    {
      id: "ana",
      name: "Ana Belić",
      role: "Social Media Specialist",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
      bgColor: "#FB923C",
      clipPathId: "clip-arch",
    },
    {
      id: "brian",
      name: "Brian Hanley",
      role: "Product Designer",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      bgColor: "#FBBF24",
      clipPathId: "clip-circle",
    },
    {
      id: "darko",
      name: "Darko Stanković",
      role: "UI Designer",
      imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      bgColor: "#38BDF8",
      clipPathId: "clip-capsules",
    },
    {
      id: "sophia",
      name: "Sophia Chen",
      role: "Campaign Strategist",
      imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
      bgColor: "#0D9488",
      clipPathId: "clip-triangle",
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      role: "SEO Director",
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      bgColor: "#EC4899",
      clipPathId: "clip-hexagon",
    },
  ];

  return (
    <section
      id="team-section"
      className="relative bg-[#FDFCF8] h-screen flex flex-col px-10 md:px-16 py-10 w-full overflow-hidden"
    >
      {/* SVG Clip Path Definitions */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="clip-hourglass" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 C 0.85,0 0.9,0.22 0.8,0.38 C 0.72,0.47 0.72,0.53 0.8,0.62 C 0.9,0.78 0.85,1 0.5,1 C 0.15,1 0.1,0.78 0.2,0.62 C 0.28,0.53 0.28,0.47 0.2,0.38 C 0.1,0.22 0.15,0 0.5,0 Z" />
          </clipPath>
          <clipPath id="clip-arch" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 C 0.78,0 1,0.22 1,0.5 L 1,0.92 C 1,0.96 0.96,1 0.92,1 L 0.08,1 C 0.04,1 0,0.96 0,0.92 L 0,0.5 C 0,0.22 0.22,0 0.5,0 Z" />
          </clipPath>
          <clipPath id="clip-circle" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
          <clipPath id="clip-capsules" clipPathUnits="objectBoundingBox">
            <path d="M 0.15,0 L 0.85,0 A 0.15,0.15 0 0,1 1,0.15 L 1,0.17 A 0.15,0.15 0 0,1 0.85,0.32 L 0.15,0.32 A 0.15,0.15 0 0,1 0,0.17 L 0,0.15 A 0.15,0.15 0 0,1 0.15,0
                     M 0.05,0.34 L 0.95,0.34 A 0.15,0.15 0 0,1 1,0.49 L 1,0.51 A 0.15,0.15 0 0,1 0.95,0.66 L 0.05,0.66 A 0.15,0.15 0 0,1 0,0.51 L 0,0.49 A 0.15,0.15 0 0,1 0.05,0.34
                     M 0.15,0.68 L 0.85,0.68 A 0.15,0.15 0 0,1 1,0.83 L 1,0.85 A 0.15,0.15 0 0,1 0.85,1 L 0.15,1 A 0.15,0.15 0 0,1 0,0.85 L 0,0.83 A 0.15,0.15 0 0,1 0.15,0.68 Z" />
          </clipPath>
          <clipPath id="clip-triangle" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.02 C 0.58,0.02 0.92,0.75 0.88,0.85 C 0.82,0.98 0.18,0.98 0.12,0.85 C 0.08,0.75 0.42,0.02 0.5,0.02 Z" />
          </clipPath>
          <clipPath id="clip-hexagon" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0 C 0.75,0 1,0.25 1,0.5 C 1,0.75 0.75,1 0.5,1 C 0.25,1 0,0.75 0,0.5 C 0,0.25 0.25,0 0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ── Outer flex column fills exactly h-screen ── */}
      <div className="flex-1 min-h-0 flex flex-col max-w-5xl mx-auto w-full gap-6">

        {/* Header — never grows, just its natural size */}
        <div className="flex-shrink-0 text-center space-y-2">
          <span className="font-mono text-[#8B5CF6] tracking-widest text-xs uppercase block font-semibold">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-neutral-900 leading-tight">
            Meet the creative minds<br />
            behind <span className="font-serif italic font-normal text-neutral-800">our success</span>
          </h2>
        </div>

        {/*
          Grid — takes ALL remaining height (flex-1).
          grid-rows-2 splits that height into 2 equal rows.
          Each cell fills its row via the default align-self:stretch.
        */}
        <div className="flex-1 min-h-0 grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-x-8 gap-y-3">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              /*
                min-h-0 is critical — without it the grid cell won't
                respect the grid row constraint and the flex children
                can't resolve their heights.
              */
              className="flex flex-col items-center text-center min-h-0 gap-2 group"
            >
              {/*
                Shape wrapper — flex-1 consumes the remaining cell height
                after the text/socials below. Centered horizontally.
              */}
              <div className="flex-1 min-h-0 flex items-center justify-center w-full">
                {/*
                  w-full   → start width = column width
                  max-h-full → cap height to the wrapper's allocated height
                  aspect-square → enforce 1:1; if height cap < width, height
                                  drives the size; browser picks the smaller
                                  dimension → perfectly fits without overflow
                */}
                <div
                  className="relative w-full max-h-full aspect-square select-none
                              drop-shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                              transition-transform duration-300 group-hover:scale-[1.04]"
                >
                  {/* Colour shape */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-85"
                    style={{
                      backgroundColor: member.bgColor,
                      clipPath: `url(#${member.clipPathId})`,
                    }}
                  />
                  {/* Photo */}
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover
                               mix-blend-luminosity group-hover:mix-blend-normal
                               opacity-95 group-hover:opacity-100
                               transition-all duration-300"
                    style={{ clipPath: `url(#${member.clipPathId})` }}
                  />
                </div>
              </div>

              {/* Name, role & socials — fixed height, never grows */}
              <div className="flex-shrink-0 space-y-0.5">
                <h4 className="text-sm font-bold text-neutral-900 tracking-tight font-display leading-tight">
                  {member.name}
                </h4>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 font-mono">
                  {member.role}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2 text-neutral-400 group-hover:text-neutral-500 transition-colors">
                <a href="#" aria-label={`${member.name} Twitter`} className="hover:text-neutral-900 transition-colors p-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label={`${member.name} LinkedIn`} className="hover:text-neutral-900 transition-colors p-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
