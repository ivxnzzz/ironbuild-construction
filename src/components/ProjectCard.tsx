"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
  index: number;
}

export function ProjectCard({
  title,
  location,
  type,
  description,
  image,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1917] border border-[#3d3633]/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/90 via-[#131110]/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <Badge
            variant="secondary"
            className="bg-[#131110]/80 text-[#c9844c] border-[#c9844c]/30 backdrop-blur-sm font-semibold text-[10px] sm:text-xs"
          >
            {type}
          </Badge>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <div className="h-8 w-8 sm:h-10 sm:w-10 bg-[#c9844c] flex items-center justify-center">
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#131110]" />
          </div>
        </div>

        {/* Bottom content on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#d6d3d1] mb-1.5 sm:mb-2">
            <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c9844c]" />
            {location}
          </div>
          <h3 className="font-heading text-base sm:text-lg lg:text-xl text-white group-hover:text-[#c9844c] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Description below */}
      <div className="mt-3 sm:mt-4 px-1">
        <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
