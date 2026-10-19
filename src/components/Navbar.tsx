"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  if (isHome) return null;

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "REAL ESTATE", href: "/real-estate" },
    { label: "INTERIOR DESIGN", href: "/interior-design" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-2xl py-3 sm:py-3.5"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
          }}
          className="flex items-center gap-3 group py-1 px-1.5 transition-all"
        >
          <div className="relative h-9 w-32 sm:h-10 sm:w-36 md:h-11 md:w-40 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/images/logo-light.png"
              alt="Sunrise Properties & Interior Design"
              fill
              priority
              className="object-contain object-left transition-opacity duration-300 drop-shadow"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={true}
                onClick={() => {
                  if (link.href === "/" && typeof window !== "undefined") {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }
                }}
                className={`text-[11px] tracking-[0.24em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-[#c5a059] pb-0.5"
                    : "text-[#faf8f5]/75 hover:text-[#c5a059] font-normal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3.5">
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-xl font-medium transition-all duration-300 border border-[#c5a059]/40 hover:border-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] shadow-sm"
          >
            ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-lg font-medium sm:hidden bg-white/10 text-white border border-white/20"
          >
            ENQUIRE
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Right-Side Sidebar Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm lg:hidden cursor-pointer"
              aria-hidden="true"
            />

            {/* Right-Side Slide-Over Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 bottom-0 right-0 z-50 w-[85vw] max-w-[340px] sm:max-w-[380px] h-full bg-[#0c0d0e]/98 backdrop-blur-2xl border-l border-[#c5a059]/25 shadow-[-25px_0_70px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-8 lg:hidden overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {/* Header: Logo and Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="relative h-8 w-32 sm:h-9 sm:w-36">
                    <Image
                      src="/images/logo-light.png"
                      alt="Sunrise Property"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition cursor-pointer"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col py-6 space-y-1.5">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    const num = `0${idx + 1}`;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        scroll={true}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (link.href === "/" && typeof window !== "undefined") {
                            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                          }
                        }}
                        className={`group flex items-center justify-between w-full py-3.5 px-3.5 rounded-xl transition text-left cursor-pointer ${
                          isActive
                            ? "bg-[#c5a059]/15 text-[#c5a059] font-semibold border border-[#c5a059]/30"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`text-[10px] font-mono tracking-widest ${
                              isActive ? "text-[#c5a059]" : "text-white/40 group-hover:text-[#c5a059]"
                            }`}
                          >
                            {num}
                          </span>
                          <span className="text-sm tracking-wide capitalize">
                            {link.label.toLowerCase()}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive
                              ? "text-[#c5a059] translate-x-0.5"
                              : "text-white/30 group-hover:text-white group-hover:translate-x-0.5"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Footer Details & Actions */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#c5a059] text-[#0c0d0e] font-bold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 transition hover:opacity-95 active:scale-[0.99] cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="space-y-2 text-xs text-white/60">
                  <a
                    href="https://wa.me/917835971222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/75 hover:text-[#25D366] transition py-1"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp: +91 78359 71222</span>
                  </a>
                  <a
                    href="tel:+919870389489"
                    className="flex items-center gap-2.5 text-white/75 hover:text-[#c5a059] transition py-1"
                  >
                    <Phone className="w-4 h-4 text-[#c5a059]" />
                    <span>Phone: +91 98703 89489</span>
                  </a>
                  <p className="text-[11px] text-white/40 pt-1 font-light leading-relaxed">
                    Grandthum, Techzone 4, Greater Noida West
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
