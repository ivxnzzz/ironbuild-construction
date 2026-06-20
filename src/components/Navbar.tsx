"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#131110]/80 backdrop-blur-2xl border-b border-[#3d3633]/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c9844c] flex items-center justify-center">
                <span className="font-heading text-base sm:text-lg font-bold text-[#131110]">
                  I
                </span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#d4a574]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg lg:text-xl tracking-tight leading-none">
                IronBuild
              </span>
              <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#a8a29e]">
                Construction
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-sm font-medium text-[#a8a29e] transition-colors hover:text-[#f5f0eb] group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9844c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#c9844c] text-[#131110] hover:bg-[#d4a574] font-semibold px-6 py-2.5 h-auto"
            >
              Get a Quote
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#a8a29e] hover:text-[#f5f0eb] transition-colors"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#131110]/98 backdrop-blur-2xl border-b border-[#3d3633]/50"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-lg font-medium text-[#a8a29e] hover:text-[#c9844c] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-[#c9844c] text-[#131110] hover:bg-[#d4a574] font-semibold mt-4"
              >
                Get a Quote
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
