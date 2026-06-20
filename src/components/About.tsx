"use client";

import { motion } from "framer-motion";
import { Building2, Target, Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-40 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3d3633] to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-h-[500px] lg:max-h-none overflow-visible">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="Construction team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/60 to-transparent" />
              </div>

              {/* Border overlay */}
              <div className="absolute inset-0 border border-[#3d3633]" />

              {/* Decorative corner */}
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full border border-[#c9844c]/20 -z-10" />

              {/* Stats overlay */}
              <div className="absolute -bottom-5 sm:-bottom-8 -right-5 sm:-right-8 bg-[#c9844c] p-4 sm:p-6">
                <div className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl text-[#131110] font-bold">
                    15+
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#131110]/70">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 space-y-8 lg:space-y-10"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c9844c]">
                  About Us
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight">
                Delivering Excellence
                <br />
                Since <span className="text-[#c9844c]">2010</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-[#a8a29e] leading-relaxed">
              <p className="text-base sm:text-lg">
                IronBuild Construction Group provides high-quality construction
                solutions with a focus on craftsmanship, reliability, and client
                satisfaction. Based in Sydney, we serve residential and
                commercial clients across Australia.
              </p>
              <p className="text-sm sm:text-base">
                Our team of experienced professionals brings over 15 years of
                industry knowledge to every project. We pride ourselves on
                transparent communication, quality workmanship, and delivering
                projects on time and within budget.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4">
              {[
                { icon: Building2, label: "Established", value: "2010" },
                { icon: Users, label: "Team Size", value: "50+" },
                { icon: Target, label: "Projects", value: "250+" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2 sm:space-y-3">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#c9844c]" />
                  <div>
                    <div className="font-heading text-xl sm:text-2xl text-[#c9844c]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#a8a29e]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 sm:gap-3 text-sm font-semibold text-[#c9844c] hover:text-[#d4a574] transition-colors group"
            >
              Our Services
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
