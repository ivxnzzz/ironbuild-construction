"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-40 relative bg-[#1c1917] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c9844c]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                Built on Trust,
                <br />
                <span className="text-[#c9844c]">Delivered with Excellence</span>
              </h2>
              <p className="text-base sm:text-lg text-[#a8a29e] leading-relaxed">
                We combine experience, quality materials, and transparent
                communication to deliver construction projects that stand the
                test of time.
              </p>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-6 sm:p-8 bg-[#131110] border border-[#3d3633]/50 hover:border-[#c9844c]/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#c9844c]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9844c]/10 transition-colors duration-500">
                      <item.icon className="h-4 w-4 text-[#c9844c]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-lg">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed pl-12 sm:pl-14">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
