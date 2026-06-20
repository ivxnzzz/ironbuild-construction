"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section className="py-20 sm:py-24 lg:py-40 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3d3633] to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c9844c]">
              Process
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Our Construction
            <br />
            <span className="text-[#c9844c]">Process</span>
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="relative overflow-hidden">
          {/* Connection line - desktop only */}
          <div className="absolute top-12 left-0 right-0 h-px bg-[#3d3633]/50 hidden lg:block" />

          {/* Mobile: vertical line - centered between columns */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#3d3633]/30 lg:hidden" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#131110] border border-[#3d3633] flex items-center justify-center mx-auto lg:mx-0">
                    <span className="font-heading text-2xl sm:text-3xl text-[#c9844c]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                  <h3 className="font-heading text-lg sm:text-xl">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
