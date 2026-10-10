"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AzimuteHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-decode high-resolution facade textures to GPU VRAM for zero-stutter cross-fading
  useEffect(() => {
    if (typeof window === "undefined") return;

    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
      img.decode?.().catch(() => {});
    };

    preloadImage("/assets/images/fachada-azimute-1920.webp");
    preloadImage("/assets/images/fachada-azimute-noite-1920.webp");
    preloadImage("https://azimuteresidencial.com.br/assets/images/fachada-azimute-1920.webp");
    preloadImage("https://azimuteresidencial.com.br/assets/images/fachada-azimute-noite-1920.webp");
  }, []);

  // Track scroll progress through the 185svh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // =========================================================================
  // 1. TIMELINE: 0.00 - 0.20: .hero__side and .hero__scroll fade out (1 -> 0)
  // =========================================================================
  const sideAndScrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // =========================================================================
  // 2. TIMELINE: 0.04 - 0.43: Day facade cross-fades into Night facade
  //    Pre-sampled sine.inOut curve for 120 FPS GPU-accelerated interpolation
  // =========================================================================
  const nightOpacity = useTransform(
    scrollYProgress,
    [
      0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4, 0.43, 1,
    ],
    [
      0, 0, 0.026, 0.101, 0.22, 0.372, 0.54, 0.706, 0.852, 0.954, 0.996, 1, 1,
    ]
  );

  // =========================================================================
  // 3. TIMELINE: 0.15 - 0.39: Hero copy animates y: 0 -> -50px, opacity: 1 -> 0
  // =========================================================================
  const heroCopyOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.39, 1],
    [1, 1, 0, 0]
  );
  const heroCopyY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.39, 1],
    [0, 0, -50, -50]
  );

  // =========================================================================
  // 4. TIMELINE: 0.66 - 1.00: Hero image presence fades 1 -> 0
  // =========================================================================
  const heroPresence = useTransform(scrollYProgress, [0, 0.66, 1.0], [1, 1, 0]);

  // =========================================================================
  // 5. TIMELINE: 0.82 - 0.99: Centered reframe title fades in (opacity: 0 -> 1)
  //    "ASL PRESENTS", Large serif "AZIMUTE", "A NEW DIRECTION FOR LIVING"
  // =========================================================================
  const reframeOpacity = useTransform(
    scrollYProgress,
    [0, 0.82, 0.99, 1],
    [0, 0, 1, 1]
  );
  const reframeScale = useTransform(
    scrollYProgress,
    [0, 0.82, 0.99, 1],
    [0.96, 0.96, 1, 1]
  );
  const reframeY = useTransform(
    scrollYProgress,
    [0, 0.82, 0.99, 1],
    [16, 16, 0, 0]
  );

  const scrollToProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("project");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[185svh] min-h-[185vh] bg-[#211f1c]"
      aria-labelledby="hero-title"
    >
      {/* Sticky Viewport (100svh, top: 0, pins while user scrubs the 185svh container) */}
      <div className="sticky top-0 h-[100svh] min-h-[620px] w-full overflow-hidden text-[#fff7ec] select-none [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
        {/* =====================================================================
            HERO IMAGE FRAME (Controlled by hero presence opacity 1 -> 0)
           ===================================================================== */}
        <motion.div
          className="absolute inset-0 w-full h-full will-change-[opacity] pointer-events-none [transform:translate3d(0,0,0)]"
          style={{ opacity: heroPresence }}
        >
          {/* Day facade image */}
          <picture className="w-full h-full">
            <source srcSet="/assets/images/fachada-azimute-1920.webp" type="image/webp" />
            <img
              src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-1920.webp"
              alt="Architectural perspective of Azimute facade with balconies and landscaped gardens at sunset"
              className="w-full h-full object-cover object-[58%_48%] [transform:translate3d(0,0,0)]"
              fetchPriority="high"
              decoding="sync"
              loading="eager"
            />
          </picture>

          {/* Night facade image (crossfades via sine.inOut) */}
          <motion.picture
            className="absolute inset-0 w-full h-full pointer-events-none will-change-[opacity] [transform:translate3d(0,0,0)]"
            style={{ opacity: nightOpacity }}
            aria-hidden="true"
          >
            <source srcSet="/assets/images/fachada-azimute-noite-1920.webp" type="image/webp" />
            <img
              src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-noite-1920.webp"
              alt=""
              className="w-full h-full object-cover object-[58%_48%] [transform:translate3d(0,0,0)]"
              decoding="sync"
              loading="eager"
            />
          </motion.picture>

          {/* Dual Overlay Gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #17181768, transparent 60%), linear-gradient(0deg, #181c2299, transparent 58%, #16181436)",
            }}
          />

          {/* Artistic Rendering Note */}
          <div className="absolute right-[clamp(1.25rem,6.25vw,6rem)] bottom-[76px] text-[0.75rem] text-[#f4e9dcaa] font-dm-sans pointer-events-none">
            Artistic rendering
          </div>
        </motion.div>

        {/* =====================================================================
            HERO CONTENT: Copy animates y: 0 -> -50px, opacity: 1 -> 0 (0.15 - 0.39)
           ===================================================================== */}
        <motion.div
          className="hero__content absolute bottom-[13%] left-[clamp(1.25rem,6.25vw,6rem)] right-[clamp(1.25rem,6.25vw,6rem)] max-w-[1500px] z-10 will-change-[transform,opacity] [transform:translate3d(0,0,0)]"
          style={{
            opacity: heroCopyOpacity,
            y: heroCopyY,
          }}
        >
          {/* Eyebrow & Location */}
          <p className="flex items-center gap-4 text-[#f1e6d5] text-[0.75rem] tracking-[0.16em] uppercase font-dm-sans mb-6">
            <span className="w-8 h-[1px] bg-[#dfb48d] inline-block" />
            VILA VITÓRIA · MAUÁ
          </p>

          {/* Main Hero Headline (Instrument Serif) */}
          <h1
            id="hero-title"
            className="font-serif-instrument font-normal text-[clamp(3.8rem,9.8vw,11.5rem)] leading-[0.92] tracking-[-0.025em] mb-9 text-[#fff7ec]"
          >
            <span className="block text-[0.67em] tracking-[0.005em]">YOUR NEXT</span>
            <em className="block font-normal not-italic italic text-[1.28em] leading-[0.86] ml-[clamp(1.5rem,7vw,6.5rem)] text-[#fff7ec]">
              horizon.
            </em>
          </h1>

          {/* Bottom Bar: Subtext and Explore Button */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16 pt-2">
            <p className="font-dm-sans text-[0.95rem] sm:text-[1rem] leading-[1.7] text-[#f3e6d5] max-w-sm font-light">
              A new direction for living.
              <br />
              An ASL development.
            </p>

            <a
              href="#project"
              onClick={scrollToProject}
              className="explore group inline-flex items-center gap-5 text-[0.875rem] font-dm-sans text-[#fff7ec] transition-colors"
            >
              <span className="tracking-wide">Explore Azimute</span>
              <span
                className="w-12 h-12 rounded-full border border-[#e9d7bf80] flex items-center justify-center text-[1.35rem] transition-all duration-300 group-hover:bg-[#f1e6d5] group-hover:text-[#211f1c] group-hover:border-[#f1e6d5]"
                aria-hidden="true"
              >
                ↓
              </span>
            </a>
          </div>
        </motion.div>

        {/* =====================================================================
            HERO SIDE: "ARCHITECTURE · LIGHT · LIFE" (Fades 0.00 - 0.20)
           ===================================================================== */}
        <motion.div
          className="hero__side hidden md:block absolute right-[2.7vw] top-[42%] [writing-mode:vertical-rl] tracking-[0.24em] text-[0.75rem] text-[#f1e6d599] font-dm-sans z-10 select-none will-change-[opacity]"
          style={{
            opacity: sideAndScrollOpacity,
          }}
          aria-hidden="true"
        >
          ARCHITECTURE · LIGHT · LIFE
        </motion.div>

        {/* =====================================================================
            HERO SCROLL: "EXPLORE" + Animated Vertical Cue (Fades 0.00 - 0.20)
           ===================================================================== */}
        <motion.div
          className="hero__scroll absolute bottom-7 left-[clamp(1.25rem,6.25vw,6rem)] flex items-center gap-4 text-[#fff7ec] z-10 select-none will-change-[opacity]"
          style={{
            opacity: sideAndScrollOpacity,
          }}
          aria-hidden="true"
        >
          <span className="text-[0.625rem] tracking-[0.25em] font-dm-sans opacity-85">
            EXPLORE
          </span>
          <div className="h-[52px] w-[1px] bg-[#fff3df40] relative overflow-hidden">
            <i className="block w-[1px] h-[32px] bg-[#fff3df] animate-scroll-cue" />
          </div>
        </motion.div>

        {/* =====================================================================
            CENTERED REFRAME TITLE: Fades in 0.82 - 0.99
            "ASL PRESENTS"
            Large serif "AZIMUTE"
            "A NEW DIRECTION FOR LIVING"
           ===================================================================== */}
        <motion.div
          className="hero__reframe absolute inset-x-[clamp(1.25rem,6.25vw,6rem)] top-[50%] -translate-y-1/2 flex flex-col items-center justify-center text-center text-[#eee7dc] z-20 will-change-[opacity,transform] [transform:translate3d(0,0,0)]"
          style={{
            opacity: reframeOpacity,
            scale: reframeScale,
            y: reframeY,
          }}
          aria-hidden="true"
        >
          <span className="block font-dm-sans text-[#c4b6a5] tracking-[0.26em] text-[0.7rem] sm:text-[0.75rem] uppercase mb-2">
            ASL PRESENTS
          </span>

          <p className="font-serif-instrument text-[clamp(4.5rem,14vw,14rem)] leading-[0.98] tracking-[0.08em] font-normal my-2 text-[#fff7ec] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            AZIMUTE
          </p>

          <span className="hero__reframe-index block font-dm-sans tracking-[0.22em] text-[0.75rem] sm:text-[0.825rem] text-[#dfb48d] uppercase mt-2">
            A NEW DIRECTION FOR LIVING
          </span>
        </motion.div>
      </div>
    </section>
  );
}
