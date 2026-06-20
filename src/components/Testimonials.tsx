"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-40 relative bg-[#1c1917] overflow-hidden">
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
              Testimonials
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            What Our
            <br />
            <span className="text-[#c9844c]">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-6 sm:p-8 lg:p-10 bg-[#131110] border border-[#3d3633]/50 hover:border-[#c9844c]/30 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="h-6 sm:h-8 w-6 sm:w-8 text-[#c9844c]/20 mb-4 sm:mb-6" />

              {/* Quote text */}
              <blockquote className="text-sm sm:text-base text-[#d6d3d1] leading-relaxed mb-6 sm:mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#3d3633]/50">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#c9844c]/10 border border-[#c9844c]/30 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-heading font-bold text-[#c9844c]">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                  <p className="text-[10px] sm:text-xs text-[#a8a29e]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
