"use client";

import { motion } from "framer-motion";
import { trustBadges } from "@/lib/constants";

export function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative border-y border-[#3d3633]/50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4"
            >
              <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#c9844c] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#d6d3d1]">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
