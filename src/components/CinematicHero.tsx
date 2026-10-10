"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play, Pause, RotateCcw } from "lucide-react";

export default function CinematicHero() {
  const [isCinematic, setIsCinematic] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play timer for cinematic transition
  useEffect(() => {
    if (!autoPlay) return;

    const intervalTime = 100; // update progress every 100ms
    const totalDuration = 7000; // 7 seconds before triggering cinematic transition

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsCinematic(true);
          setAutoPlay(false);
          return 100;
        }
        return prev + (intervalTime / totalDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const toggleCinematic = () => {
    setIsCinematic((prev) => !prev);
    setAutoPlay(false);
  };

  const resetToHero = () => {
    setIsCinematic(false);
    setProgress(0);
    setAutoPlay(true);
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById("philosophy-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-[#0A0E14] text-white select-none">
      {/* =========================================================================
          BACKGROUND PHOTOGRAPHY (Deep architectural sunset & Ken Burns motion)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`relative w-full h-full transition-all duration-1000 ease-out ${
            isCinematic
              ? "scale-105 opacity-25 filter blur-[2px]"
              : "scale-100 opacity-90 animate-ken-burns"
          }`}
        >
          <Image
            src="/images/hero-villa.jpg"
            alt="Spaces That Inspire - The Travertine Villa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Gradient Overlays */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isCinematic
              ? "bg-[#080C12]/92 backdrop-blur-xs"
              : "bg-gradient-to-t from-[#0B0F15]/95 via-[#0B0F15]/40 to-[#0B0F15]/55"
          }`}
        />

        {/* Subtle moving ambient atmospheric glow for title screen */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
            isCinematic ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#C29246]/10 rounded-full blur-[140px] animate-ambient-drift" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1E293B]/25 rounded-full blur-[120px]" />
        </div>
      </div>

      {/* =========================================================================
          STATE 1: HERO VIEW (Left-aligned headline matching screenshot/video)
         ========================================================================= */}
      <div
        className={`relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-between pt-32 pb-16 transition-all duration-700 ${
          isCinematic
            ? "opacity-0 pointer-events-none -translate-y-8"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* Top spacer */}
        <div className="hidden sm:block" />

        {/* Left-Aligned Headline Block */}
        <div className="max-w-3xl my-auto text-left">
          {/* Subtle Tag with gold marker */}
          <div className="inline-flex items-center gap-2 mb-6 border border-white/20 px-4 py-1.5 rounded-lg bg-black/25 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C29246]"></span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#E5E0D4] font-light">
              01/03 • REAL ESTATE &amp; BESPOKE INTERIOR DESIGN
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-white mb-6">
            Spaces That Inspire.{" "}
            <span className="italic block mt-1 font-light text-[#F3EFE8]">
              Properties That Belong.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#D2CEBE] font-sans font-light mb-10">
            Discover thoughtfully selected properties and tailored bespoke spaces designed around
            harmony and form. Where classical proportion meets modern stillness.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link
              href="/real-estate"
              className="w-full sm:w-auto bg-[#FAF8F5] text-[#141A23] hover:bg-white text-xs tracking-[0.22em] uppercase px-8 py-4 rounded-xl font-medium transition-all duration-300 text-center"
            >
              EXPLORE PROPERTIES
            </Link>
            <Link
              href="/interior-design"
              className="w-full sm:w-auto border border-white/50 hover:border-white text-white hover:bg-white/10 text-xs tracking-[0.22em] uppercase px-8 py-4 rounded-xl font-light transition-all duration-300 backdrop-blur-xs text-center"
            >
              EXPERIENCE STUDIO
            </Link>
          </div>
        </div>

        {/* Bottom Ticker & Scroll Indicator */}
        <div className="border-t border-white/15 pt-5 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-[#D2CEBE]">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Active Portfolio:</span>
            <span className="text-[#A69F8E] hidden sm:inline font-light">
              2024 Collection • Alibaug Coastline • Mumbai Skyline
            </span>
          </div>
          <button
            onClick={scrollToContent}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll Down</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          STATE 2: CINEMATIC TITLE SCREEN EXPERIENCE (Centered Fullscreen Revelation)
         ========================================================================= */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ease-out ${
          isCinematic
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto space-y-8 animate-cinematic-in">
          {/* Introductory Label */}
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#C29246]/60"></span>
            <span className="text-[10px] sm:text-xs tracking-[0.34em] uppercase text-[#C29246] font-medium">
              EST. 2006 • ARCHITECTURAL DISCOVERY &amp; ATELIER
            </span>
            <span className="w-6 h-[1px] bg-[#C29246]/60"></span>
          </div>

          {/* Large Centered Title */}
          <h2 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[1.03] tracking-tight text-[#FAF8F5]">
            Spaces That Inspire. <br />
            <span className="italic block font-light text-[#D5B07A] mt-2 sm:mt-4">
              Properties That Belong.
            </span>
          </h2>

          {/* Understated Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-[#C8C4B8] font-light leading-relaxed tracking-wide pt-2">
            Where classical proportion meets modern stillness. Curating architectural residences
            and tailored interior sanctuaries across India and beyond.
          </p>

          {/* Action CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={scrollToContent}
              className="bg-[#FAF8F5] hover:bg-white text-[#141A23] text-xs tracking-[0.24em] uppercase px-9 py-4 rounded-xl font-medium transition-all shadow-xl cursor-pointer"
            >
              ENTER MONOGRAPH
            </button>
            <button
              onClick={resetToHero}
              className="border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs tracking-[0.24em] uppercase px-8 py-4 rounded-xl font-light transition-all cursor-pointer backdrop-blur-xs flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RETURN TO HERO VIEW</span>
            </button>
          </div>

          {/* Territory indicator */}
          <div className="pt-10 flex items-center justify-center gap-6 text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-[#7E8592] font-light">
            <span>Alibaug Coast</span>
            <span>•</span>
            <span>Mumbai Skyline</span>
            <span>•</span>
            <span>Lonavala Ridge</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ANIMATION & CINEMATIC CONTROLS (Bottom-Right Corner matching reference)
         ========================================================================= */}
      <div className="absolute bottom-6 right-22 sm:right-24 z-30 flex items-center gap-3">
        {/* Toggle Button */}
        <button
          onClick={toggleCinematic}
          className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/55 hover:bg-black/80 border border-white/20 hover:border-[#C29246] text-white text-[10px] tracking-[0.2em] uppercase backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg"
          title={isCinematic ? "Switch to Hero View" : "Experience Cinematic Title Screen"}
          aria-label="Toggle Cinematic Experience"
        >
          {/* Circular progress bar indicator for auto-play */}
          <span className="relative flex items-center justify-center w-3 h-3">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isCinematic ? "bg-[#C29246]" : "bg-white/80 group-hover:bg-[#C29246]"
              }`}
            />
          </span>
          <span className="font-light text-white/90 group-hover:text-white">
            {isCinematic ? "HERO VIEW" : "CINEMATIC TITLE"}
          </span>
        </button>
      </div>
    </section>
  );
}
