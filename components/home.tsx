"use client";

import React, { useRef, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Globe } from "@/components/ui/globe";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const GridItem = ({
  area,
  icon,
  title,
  description,
}: {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-[#e9e9e9] dark:bg-[#e9e9e9] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export function Home() {
  const words = ["Deduction?", "Dividend Income?", "Savings Interest?", "Crypto Trade?", "Capital Gains?", "Foreign Asset?", "Penalty?", "Late Fee?", "Notice?", "Tax Credit?"];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thirdSectionScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Calculate if div 3 is fully visible (horizontal scroll at the end)
      const maxHorizontalScroll = container.scrollWidth - container.clientWidth;
      const isDiv3FullyVisible = container.scrollLeft >= maxHorizontalScroll - 10; // 10px threshold for rounding
      
      // Check if the scroll event is within the third section's scrollable div
      const thirdSectionScroll = thirdSectionScrollRef.current;
      if (thirdSectionScroll && thirdSectionScroll.contains(e.target as Node)) {
        // Only allow vertical scrolling if div 3 is fully visible
        if (isDiv3FullyVisible) {
          // Check if we're at the top of the third section and scrolling up
          const isAtTop = thirdSectionScroll.scrollTop === 0;
          const isScrollingUp = e.deltaY < 0;
          
          // If at the top and scrolling up, convert to horizontal scroll to go back to div 2
          if (isAtTop && isScrollingUp) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
            return;
          }
          
          // Otherwise, allow normal vertical scrolling within the third section
          return;
        } else {
          // Div 3 is not fully visible yet, continue horizontal scrolling
          e.preventDefault();
          container.scrollLeft += e.deltaY;
          return;
        }
      }
      
      // Otherwise, prevent default vertical scrolling and convert to horizontal
      e.preventDefault();
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
      <div className="relative w-[300vw] h-full flex">
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
              Are you 100% sure <br />
              you didn't miss a   
                <FlipWords words={words} /><br />
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
          <div className="absolute inset-0 z-20 flex items-center justify-end pr-8">
            <div className="w-[70%] text-xl font-normal text-neutral-600 dark:text-neutral-400 text-center">
              Our Tax Code is 260,000 Words spread over 5,000 pages <br/>
              across multiple documents, with 536 Sections and 16 Schedules. <br/>
              Before you understand anything, it will change in the next Budget.
            </div>
          </div>
        </section>

        {/* Third Section */}
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

          {/* Content for third section - Fixed viewport window */}
          <div ref={thirdSectionScrollRef} className="absolute inset-0 z-20 h-screen w-full overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-col min-h-[200vh] p-4">
              {/* Grid at the top */}
              <div className="flex items-center justify-center min-h-screen py-8">
                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                  <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="The Hidden Rules"
                    description="Did you know you can't claim HRA if you live with your spouse who owns the house? Our AI knows." />
                  <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="The AIS/TIS Trap"
                    description="The government knows every UPI transaction. Our AI cross-checks your bank statement with your AIS instantly." />
                  <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="The Notice Nightmare"
                    description="Received a Section 133(6) notice? Don't panic. Upload a photo of the notice, and our AI drafts the legal reply for you." />
                  <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Save taxes like never before!"
                    description="Our AI scans your swiggy/zomato history to see if you missed meal coupon exemptions (if applicable)." />
                  <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Coming soon on Aceternity UI"
                    description="I'm writing the code as I record this, no shit." />
                </ul>
              </div>

              {/* Container Scroll Animation below the grid */}
              <div className="flex flex-col overflow-hidden min-h-screen">
                <ContainerScroll
                  titleComponent={
                    <>
                      <h1 className="text-4xl font-semibold text-black dark:text-white">
                        Unleash the power of <br />
                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                          Scroll Animations
                        </span>
                      </h1>
                    </>
                  }
                >
                  <img
                    src={`/linear.webp`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                  />
                </ContainerScroll>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Globe Layer - Positioned relative to scroll container */}
      <div className="absolute inset-0 pointer-events-none z-10 w-[300vw]">
        <Globe className="!absolute !inset-auto !bottom-0 !left-[100vw] h-[180vh] w-[180vh] !max-w-none opacity-40 -translate-x-[55%] translate-y-[25%]" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}

