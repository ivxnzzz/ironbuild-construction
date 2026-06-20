"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative p-6 sm:p-8 lg:p-10 bg-[#1c1917] border border-[#3d3633]/50 transition-all duration-500 hover:border-[#c9844c]/30">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-0 h-px bg-[#c9844c] transition-all duration-500 group-hover:w-full" />

        {/* Number */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 font-heading text-4xl sm:text-5xl text-[#3d3633]/50 group-hover:text-[#c9844c]/20 transition-colors duration-500">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9844c]/30 flex items-center justify-center group-hover:bg-[#c9844c]/10 transition-colors duration-500">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#c9844c]" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-heading text-lg sm:text-xl">{title}</h3>
            <p className="text-sm text-[#a8a29e] leading-relaxed">{description}</p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9844c] opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            Learn More
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
