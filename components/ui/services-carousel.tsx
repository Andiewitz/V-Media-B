"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Types ─── */
export interface ServiceCard {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  badges: { name: string; logo: React.ReactNode }[];
  gradient: string;          // tailwind gradient classes for the card bg
  accentColor: string;       // hex accent for subtle glow
}

interface ServicesCarouselProps {
  cards: ServiceCard[];
}

/* ─── Main Carousel (Aceternity Apple-style) ─── */
export function ServicesCarousel({ cards }: ServicesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = window.innerWidth < 768 ? 280 : 420;
    carouselRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* ── Fade overlays ── */}
      <div
        className={cn(
          "absolute left-0 top-0 z-20 h-full w-[5%] bg-gradient-to-r from-[#1E1E1E] to-transparent pointer-events-none transition-opacity duration-300",
          canScrollLeft ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={cn(
          "absolute right-0 top-0 z-20 h-full w-[5%] bg-gradient-to-l from-[#1E1E1E] to-transparent pointer-events-none transition-opacity duration-300",
          canScrollRight ? "opacity-100" : "opacity-0"
        )}
      />

      {/* ── Scrollable track ── */}
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-auto overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* left spacer */}
        <div className="shrink-0 w-[4%] md:w-[2%]" />

        <div className="flex gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative shrink-0 w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              {/* Card background with gradient */}
              <div className={cn(
                "relative h-[380px] sm:h-[420px] md:h-[460px] p-6 sm:p-8 flex flex-col justify-between",
                card.gradient
              )}>
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 70% 20%, ${card.accentColor}, transparent 70%)`,
                  }}
                />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

                {/* Top section: category + icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/50 font-semibold">
                      {card.category}
                    </span>
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.06] backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                    >
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-black tracking-tight text-white leading-[1.15] mt-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed mt-3 max-w-[90%]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom section: platform badges */}
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4">
                  {card.badges.map((badge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 border border-white/[0.08] backdrop-blur-sm hover:bg-black/30 hover:border-white/[0.15] transition-all duration-300 group/badge"
                    >
                      <div className="w-4 h-4 shrink-0 group-hover/badge:scale-110 transition-transform duration-200">
                        {badge.logo}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-white/70 whitespace-nowrap">
                        {badge.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* right spacer */}
        <div className="shrink-0 w-[4%] md:w-[2%]" />
      </div>

      {/* ── Navigation arrows ── */}
      <div className="flex items-center justify-end gap-2 mt-4 pr-2">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-white/[0.05] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-white/[0.05] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
