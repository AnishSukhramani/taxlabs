"use client";

import React, { useRef, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";

export function Home() {
  const words = ["broken", "old", "obsolete"];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent default vertical scrolling
      e.preventDefault();
      
      // Convert vertical scroll to horizontal scroll
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="relative w-screen h-screen overflow-x-auto overflow-y-hidden bg-white dark:bg-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {/* Horizontal Scroll Container */}
      <div className="relative w-[200vw] h-full flex">
        {/* First Section - Hero */}
        <section className="relative w-screen h-full flex-shrink-0">
          {/* Dot Background - First Layer */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          
          {/* Radial gradient mask for faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex items-center justify-start">
            <div className="w-1/2 h-full flex flex-col justify-center items-center px-4 gap-8">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
              The Indian 
              {/* <br /> */}
              Tax Portal is  
                <FlipWords words={words} /> <br />
                We Fixed It.
              </div>
              <div className="flex justify-center">
                <NoiseBackground
                  containerClassName="w-fit p-2 rounded-full mx-auto"
                  gradientColors={[
                    "rgb(255, 100, 150)",
                    "rgb(100, 150, 255)",
                    "rgb(255, 200, 100)",
                  ]}
                >
                  <button className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                  Check My Notice Risk &rarr;
                  </button>
                </NoiseBackground>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-md">
                The Department uses AI to find discrepancies in your AIS. <br />
                We use AI to find them first.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Next Content */}
        <section className="relative w-screen h-full flex-shrink-0">
          {/* Dot Background - First Layer */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          
          {/* Radial gradient mask for faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

          {/* Placeholder content for second section */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 text-center">
              Next Section
            </div>
          </div>
        </section>
      </div>

      {/* Globe Layer - Positioned relative to scroll container */}
      <div className="absolute inset-0 pointer-events-none z-10 w-[200vw]">
        <Globe className="!absolute !inset-auto !bottom-0 !left-[100vw] h-[180vh] w-[180vh] !max-w-none opacity-40 -translate-x-[55%] translate-y-[25%]" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}

