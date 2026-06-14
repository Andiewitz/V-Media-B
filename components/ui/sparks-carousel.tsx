// components/ui/sparks-carousel.tsx
"use client";
import * as React from "react";
import { motion, useAnimation } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for a single item in the carousel
export interface SparkItem {
  id: string | number;
  imageSrc: string;
  title: string;
  count: number;
  countLabel: string;
}

// Define the props for the main component
export interface SparksCarouselProps {
  title: string;
  subtitle: string;
  items: SparkItem[];
}

export const SparksCarousel = React.forwardRef<
  HTMLDivElement,
  SparksCarouselProps
>(({ title, subtitle, items }, ref) => {
  const controls = useAnimation();
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  // Function to scroll the carousel
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  // Effect to check scroll position and update button states
  React.useEffect(() => {
    const checkScrollPosition = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      }
    };

    const currentRef = carouselRef.current;
    if (currentRef) {
      checkScrollPosition();
      currentRef.addEventListener("scroll", checkScrollPosition);
    }

    window.addEventListener("resize", checkScrollPosition);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [items]);

  return (
    <section ref={ref} className="w-full py-8" aria-labelledby="sparks-title">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="group inline-flex items-center">
              <h2
                id="sparks-title"
                className="text-2xl md:text-3xl font-bold tracking-tight text-white"
              >
                {title}
              </h2>
              <ChevronRight className="ml-2 h-6 w-6 text-neutral-400 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-1 text-neutral-400 text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex w-full space-x-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="group w-[280px] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#252525] text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:border-neutral-700">
                  <img
                    alt={item.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height="160"
                    src={item.imageSrc}
                    width="280"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-xl font-bold text-white">
                        {item.count}
                      </p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                        {item.countLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {!isAtStart && (
            <button
              onClick={() => scroll("left")}
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#1E1E1E]/80 backdrop-blur-sm border border-neutral-700 text-white shadow-md transition-opacity hover:bg-[#2a2a2a]"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          {!isAtEnd && (
            <button
              onClick={() => scroll("right")}
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#1E1E1E]/80 backdrop-blur-sm border border-neutral-700 text-white shadow-md transition-opacity hover:bg-[#2a2a2a]"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

SparksCarousel.displayName = "SparksCarousel";
