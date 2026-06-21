"use client";

import { ArrowUp } from "lucide-react";
import { navLinks } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#131110] border-t border-[#3d3633]/50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#c9844c] flex items-center justify-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#131110]">
                    I
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#d4a574]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl tracking-tight leading-none">
                  IronBuild
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#a8a29e]">
                  Construction
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed max-w-xs">
              Professional construction company specializing in residential and
              commercial building projects across Australia.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#d6d3d1]">
              Navigation
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xs sm:text-sm text-[#a8a29e] hover:text-[#c9844c] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#d6d3d1]">
              Services
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Renovations",
                "Extensions",
                "Interior Fit-outs",
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-xs sm:text-sm text-[#a8a29e] hover:text-[#c9844c] transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#d6d3d1]">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+61255556789"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#a8a29e] hover:text-[#c9844c] transition-colors"
              >
                <span>(02) 5555 6789</span>
              </a>
              <a
                href="mailto:hello@ironbuildconstruction.com"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#a8a29e] hover:text-[#c9844c] transition-colors break-all"
              >
                <span>hello@ironbuildconstruction.com</span>
              </a>
              <div className="text-xs sm:text-sm text-[#a8a29e]">Sydney, Australia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3d3633]/50">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] sm:text-xs text-[#a8a29e] text-center sm:text-left">
              &copy; {new Date().getFullYear()} IronBuild Construction Group. All
              rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="h-9 w-9 sm:h-10 sm:w-10 border border-[#3d3633] flex items-center justify-center hover:bg-[#c9844c] hover:border-[#c9844c] group transition-all duration-300"
            >
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#a8a29e] group-hover:text-[#131110] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
