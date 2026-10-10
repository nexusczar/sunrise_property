"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-2xl py-3.5 sm:py-4"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-14 w-48 sm:h-16 sm:w-56 transition-opacity group-hover:opacity-90">
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
            className="text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-full font-medium transition-all duration-300 border border-[#c5a059]/40 hover:border-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] shadow-sm"
          >
            ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="text-[10px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full font-medium sm:hidden bg-white/10 text-white border border-white/20"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0d0e]/98 backdrop-blur-xl border-b border-[#c5a059]/25 py-6 px-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs tracking-[0.2em] uppercase py-2.5 border-b border-white/10 ${
                    isActive ? "text-[#c5a059] font-semibold" : "text-white/75"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block bg-[#c5a059] text-[#0c0d0e] text-xs tracking-[0.2em] uppercase py-3 rounded-full text-center font-semibold shadow-md"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
