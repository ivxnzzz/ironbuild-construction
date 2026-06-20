"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-40 relative bg-[#131110]">
      {/* Background texture */}
      <div className="absolute inset-0 diagonal-accent opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c9844c]">
                  Services
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                Comprehensive
                <br />
                Construction
                <br />
                <span className="text-[#c9844c]">Solutions</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a8a29e] leading-relaxed">
                We offer a full range of construction services tailored to meet
                the needs of residential and commercial clients.
              </p>
            </div>
          </motion.div>

          {/* Service cards */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
