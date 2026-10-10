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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  if (isHome) return null;
  const isDarkHero = isHome && !scrolled;

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "REAL ESTATE", href: "/real-estate" },
    { label: "INTERIOR DESIGN", href: "/interior-design" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkHero
          ? "bg-transparent py-5 border-b border-white/10"
          : scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md py-3.5 shadow-[0_1px_0_0_rgba(231,226,216,0.8)]"
          : "bg-[#FAF8F5] py-4 border-b border-[#EAE6DF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-11 w-36 sm:h-12 sm:w-44 transition-opacity group-hover:opacity-90">
            <Image
              src={isDarkHero ? "/images/logo-light.png" : "/images/logo-transparent.png"}
              alt="Sunrise Properties & Interior Design"
              fill
              priority
              className="object-contain object-left transition-opacity duration-300"
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
                  isDarkHero
                    ? isActive
                      ? "text-white font-semibold border-b border-white pb-0.5"
                      : "text-white/80 hover:text-white font-light"
                    : isActive
                    ? "text-[#141A23] font-semibold border-b border-[#141A23] pb-0.5"
                    : "text-[#646A74] hover:text-[#141A23] font-normal"
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
            className={`text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              isDarkHero
                ? "bg-white/15 hover:bg-white text-white hover:text-[#141A23] border border-white/30 backdrop-blur-xs"
                : "bg-[#141A23] hover:bg-[#202836] text-[#FAF8F5]"
            }`}
          >
            ENQUIRE NOW
          </Link>

          {/* Profile silhouette icon */}
          <Link
            href="/contact"
            aria-label="Private Client Profile"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isDarkHero
                ? "border border-white/30 text-white/90 hover:border-white hover:text-white"
                : "border border-[#D9D3C7] text-[#141A23] hover:border-[#141A23]"
            }`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className={`text-[10px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full font-medium sm:hidden ${
              isDarkHero
                ? "bg-white/20 text-white border border-white/40"
                : "bg-[#141A23] text-[#FAF8F5]"
            }`}
          >
            ENQUIRE
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${isDarkHero ? "text-white" : "text-[#141A23]"}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF8F5] border-b border-[#E7E2D8] py-6 px-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs tracking-[0.2em] uppercase py-2.5 border-b border-[#EAE5DC]/60 ${
                    isActive ? "text-[#141A23] font-semibold" : "text-[#646A74]"
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
                className="w-full block bg-[#141A23] text-[#FAF8F5] text-xs tracking-[0.2em] uppercase py-3 rounded-full text-center font-medium"
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
