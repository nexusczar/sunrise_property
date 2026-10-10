"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function AzimuteHeader() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeSolid = window.scrollY > window.innerHeight * 0.92;
          setIsSolid((prev) => (prev !== shouldBeSolid ? shouldBeSolid : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Project", href: "#project" },
    { label: "Perspective", href: "#perspective" },
    { label: "Essence", href: "#essence" },
    { label: "Residences", href: "#residences" },
    { label: "Spaces", href: "#spaces" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-500 select-none ${
          isSolid
            ? "bg-[#f3f0e9]/95 backdrop-blur-md py-4 text-[#262825] border-b border-[#534d432d] shadow-[0_4px_24px_rgba(33,31,28,0.06)]"
            : "bg-transparent py-6 sm:py-7 text-[#fff7ed] border-b border-transparent"
        } px-[clamp(1.25rem,6.25vw,6rem)]`}
      >
        {/* Brand Lockup (Crystal Logo SVG + AZIMUTE RESIDENCIAL) */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="group flex items-center gap-3.5 sm:gap-4 transition-opacity hover:opacity-90"
          aria-label="Azimute Residences, Home"
        >
          {/* Crystal Logo SVG */}
          <div className="relative w-8 h-9 sm:w-9 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              viewBox="0 0 120 140"
              fill="none"
              className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <defs>
                <linearGradient
                  id="az-crystal-header"
                  x1="12"
                  y1="128"
                  x2="106"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ad8d70" />
                  <stop offset="0.24" stopColor="#d4c2a9" />
                  <stop offset="0.37" stopColor="#f8f2e7" />
                  <stop offset="0.405" stopColor="#fffbf4" />
                  <stop offset="0.435" stopColor="#c6ad8f" />
                  <stop offset="0.69" stopColor="#b69575" />
                  <stop offset="0.82" stopColor="#eee6d7" />
                  <stop offset="1" stopColor="#c4a786" />
                </linearGradient>
                <linearGradient
                  id="az-crystal-bearing"
                  x1="44"
                  y1="91"
                  x2="73"
                  y2="56"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#a98869" />
                  <stop offset="0.43" stopColor="#c8b090" />
                  <stop offset="0.48" stopColor="#f7f0e4" />
                  <stop offset="0.51" stopColor="#e0ceaf" />
                  <stop offset="1" stopColor="#faf6ec" />
                </linearGradient>
              </defs>
              <path
                d="M15 115 60 17 105 115"
                stroke="url(#az-crystal-header)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 78 73 56 68 91 61 76Z"
                fill="url(#az-crystal-bearing)"
              />
              <path
                d="M23 116H97M60 8V17M8 116H15M105 116H112"
                stroke="url(#az-crystal-header)"
                strokeWidth="1.2"
              />
              <path
                d="M35 124a50 50 0 0 0 50-87"
                stroke="url(#az-crystal-header)"
                strokeWidth="0.8"
                opacity="0.75"
              />
            </svg>
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col tracking-wider">
            <span className="font-marcellus text-[1.35rem] sm:text-[1.65rem] tracking-[0.2em] leading-tight font-normal">
              AZIMUTE
            </span>
            <span className="font-dm-sans text-[0.55rem] sm:text-[0.625rem] tracking-[0.32em] text-center uppercase opacity-80 mt-0.5 font-medium">
              RESIDENCES
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation in English */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[0.875rem] font-dm-sans"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative py-2.5 transition-colors hover:text-[#dfb48d] group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right Section: ASL Signature & Mobile Hamburger */}
        <div className="flex items-center gap-5 sm:gap-7">
          <div className="flex items-center gap-2.5 sm:gap-3 text-right">
            <span className="font-marcellus text-[1.4rem] sm:text-[1.65rem] tracking-tight leading-none">
              ASL
            </span>
            <span className="font-dm-sans text-[0.5rem] sm:text-[0.55rem] leading-[1.35] tracking-[0.14em] uppercase text-left opacity-75 font-normal">
              DEVELOPER
              <br />& BUILDER
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb48d] rounded-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-x-0 top-[72px] sm:top-[84px] z-40 bg-[#f3f0e9] text-[#262825] border-b border-[#534d432d] shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } px-[clamp(1.25rem,6.25vw,6rem)] py-8`}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="font-serif-instrument text-2xl sm:text-3xl text-[#262825] hover:text-[#87654c] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-[#534d432d] flex items-center justify-between text-xs font-dm-sans text-[#68665e]">
            <span>VILA VITÓRIA · MAUÁ / SP</span>
            <span>ASL DEVELOPMENTS</span>
          </div>
        </nav>
      </div>
    </>
  );
}
