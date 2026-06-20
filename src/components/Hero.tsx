"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/constants";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-x-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#131110]/85" />
      </div>

      {/* Architectural grid overlay */}
      <div className="absolute inset-0 arch-grid" />

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-[#c9844c]/5 rounded-full blur-[80px] lg:blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-[#c9844c]/3 rounded-full blur-[60px] lg:blur-[100px]" />

      {/* Architectural accent lines - desktop only */}
      <div className="absolute top-32 left-12 w-px h-32 bg-gradient-to-b from-[#c9844c]/40 to-transparent hidden lg:block" />
      <div className="absolute top-32 left-12 w-16 h-px bg-gradient-to-r from-[#c9844c]/40 to-transparent hidden lg:block" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-28 sm:py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c9844c]">
                Est. 2010 — Sydney, Australia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-heading text-[2.75rem] sm:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
            >
              Building
              <br />
              <span className="text-[#c9844c]">Exceptional</span>
              <br />
              Spaces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg text-[#a8a29e] max-w-lg leading-relaxed"
            >
              From residential developments to commercial projects, we deliver
              reliable construction solutions with uncompromising quality and
              craftsmanship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                onClick={() => scrollTo("#contact")}
                size="lg"
                className="bg-[#c9844c] text-[#131110] hover:bg-[#d4a574] font-semibold px-6 sm:px-8 py-3 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                Request Consultation
                <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                onClick={() => scrollTo("#projects")}
                size="lg"
                variant="ghost"
                className="text-[#f5f0eb] hover:bg-[#292524]/50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right image panel - desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-[4/5]">
              {/* Main image frame */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Construction project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#131110]/30" />
              </div>

              {/* Border overlay */}
              <div className="absolute inset-0 border border-[#c9844c]/30" />

              {/* Inner border */}
              <div className="absolute inset-4 border border-[#f5f0eb]/10" />

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#c9844c]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#c9844c]" />

              {/* Floating label */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#c9844c] px-3 py-1.5 -rotate-90 origin-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#131110]">
                  Since 2010
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 border-t border-[#3d3633]/50 bg-[#131110]/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-[#3d3633]/50">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="py-5 sm:py-8 px-3 sm:px-6 text-center"
              >
                <div className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#c9844c]">
                  {stat.value}
                </div>
                <div className="mt-1 sm:mt-2 text-[9px] sm:text-xs uppercase tracking-wider text-[#a8a29e]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#a8a29e]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-[#c9844c]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
