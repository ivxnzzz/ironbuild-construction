"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-40 relative overflow-hidden">
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
              Get In Touch
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#c9844c]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Start Your
            <br />
            <span className="text-[#c9844c]">Project Today</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 sm:space-y-8"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(02) 5555 6789",
                  href: "tel:+61255556789",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@ironbuildconstruction.com",
                  href: "mailto:hello@ironbuildconstruction.com",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Sydney, Australia",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon-Fri 7:30am - 5:00pm",
                  href: "#",
                },
              ].map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#1c1917] border border-[#3d3633]/50 hover:border-[#c9844c]/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#c9844c]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9844c]/10 transition-colors">
                    <info.icon className="h-4 w-4 text-[#c9844c]" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#a8a29e] mb-0.5 sm:mb-1">
                      {info.label}
                    </p>
                    <p className="text-xs sm:text-sm font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Office image */}
            <div className="aspect-[4/3] relative overflow-hidden border border-[#3d3633]/50">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Sydney office location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#131110]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#131110]/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 border border-[#c9844c]/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#c9844c]" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold">Sydney, Australia</p>
                      <p className="text-[10px] sm:text-xs text-[#a8a29e]">Head Office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-8"
          >
            <div className="p-6 sm:p-8 lg:p-10 bg-[#1c1917] border border-[#3d3633]/50">
              <h3 className="font-heading text-xl sm:text-2xl mb-6 sm:mb-8">
                Request A Consultation
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
