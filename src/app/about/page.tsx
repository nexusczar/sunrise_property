"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "@/components/EnquiryModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF8F5] text-[#141A23] overflow-x-hidden">
      {/* =========================================================================
          TOP MONOGRAPH METADATA BAR (Image 4)
         ========================================================================= */}
      <div className="border-b border-[#EAE6DF] bg-[#F7F5F0] pt-24 pb-3.5 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#8F8B83] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
            <span>ATELIER MONOGRAPH VOL. 04 / PROFILE</span>
          </div>
          <div>EST. 2006 • ARCHITECTURAL DISCOVERY &amp; ATELIER</div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION (Image 4)
         ========================================================================= */}
      <section className="pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block">
              • THE INTERSECTION OF LIVING SPACES
            </span>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#141A23]">
              Built Around Places. <br />
              <span className="italic font-light text-[#A87A36]">Focused on People.</span>
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-[#63615C] font-light">
              Sunrise Property operates at the fertile intersection of living spaces and interior
              architecture. We curate properties who demand custody between exterior monolith and
              internal stillness.
            </p>

            <ul className="space-y-3 pt-4 text-xs tracking-wide text-[#4D4B46]">
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
                <span>Architectural Pedigree Advisory</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
                <span>Curated Interior Architecture &amp; Millwork</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
                <span>Waterfront &amp; Hillside Sanctums</span>
              </li>
            </ul>
          </div>

          {/* Right Image (6 cols) matching Image 4 */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#EAE6DF] bg-white">
              <div className="relative h-[380px] sm:h-[500px] w-full">
                <Image
                  src="/images/hero-villa.jpg"
                  alt="Private Villa 8 Reflection Lagoon"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between text-xs text-[#8F8B83]">
                <span className="font-normal text-[#141A23]">Private Villa 8, Reflection Lagoon</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PHILOSOPHY & MANIFESTO (Image 4)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block">
              CHAPTER 01 / PHILOSOPHY
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#141A23]">
              A house is not a container; it is an extension of mental clarity.
            </h2>
            <blockquote className="border-l border-[#C29246] pl-5 italic text-sm text-[#63615C] leading-relaxed font-light">
              “Without structural proportion and tactile honesty, we are merely building private
              enclosures; residential living, at its best, is an ongoing prayer to contemplation.”
            </blockquote>
            <div className="pt-2">
              <p className="text-xs font-medium tracking-wider uppercase text-[#141A23]">
                AARAV MEHTA &amp; CHANDNI SEN
              </p>
              <p className="text-[11px] text-[#8F8B83] font-light">Founding Principals, Sunrise Atelier</p>
            </div>
          </div>

          {/* Right Narrative & Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-sm sm:text-base leading-relaxed text-[#63615C] font-light">
              Founded with the conviction that luxury residential development is too often
              fractured between cold transaction and superficial decoration, Sunrise Property
              bridges the void. We are a dual-discipline atelier of gathering curators, architects,
              and artisans who view their dwellings as enduring instruments of human rest.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#63615C] font-light">
              Our dual mandate begins with spatial diagnosis: before recommending a plot or
              acquisition, we analyze light ingress, acoustic isolation, view corridors, and
              structural authenticity. Once an address is secured, our interior atelier shapes the
              living volume — installing hand-honed travertine, grain-matched oak joinery, and
              artisanal bronze accents that deepen in patina over time.
            </p>

            {/* Stats matching Image 4 */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#EAE6DF]">
              <div>
                <p className="font-serif-luxury text-3xl sm:text-4xl text-[#141A23] font-normal">
                  14
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8F8B83] mt-1 font-light">
                  YEARS OF MONOGRAPH ARCHIVE
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl sm:text-4xl text-[#141A23] font-normal">
                  $420M+
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8F8B83] mt-1 font-light">
                  VALUE OF STEWARDED ASSETS
                </p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl sm:text-4xl text-[#141A23] font-normal">
                  100%
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8F8B83] mt-1 font-light">
                  DISCRETION STANDARD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DIVERGENT PILLARS, UNIFIED DIRECTION (Image 4)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
              DUAL PILLARS / TENETS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23]">
              Divergent Pillars, Unified Direction
            </h2>
          </div>
          <p className="text-sm text-[#63615C] max-w-md leading-relaxed font-light">
            Two distinct disciplines bound together by one singular standard of performance and
            human quietude.
          </p>
        </div>

        {/* 2 Big Pillar Cards matching Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#8F8B83] font-medium">
                  01 / REAL ESTATE DISCOVERY
                </span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[01]</span>
              </div>
              <h3 className="font-serif-luxury text-3xl font-normal text-[#141A23] mb-4">
                Our Vision
              </h3>
              <p className="text-sm text-[#63615C] leading-relaxed mb-6 font-light">
                Setting a global benchmark for architectural sanctums: living &amp; working spaces that
                elevate everyday life into quiet ritual. We seek out the rare and unobtrusive to
                champion properties that illustrate provenance and enduring worth. We believe true
                luxury resides in environment harmony, daylight flow, and provenance integrity.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EAE5DC] flex items-center justify-between text-[11px] tracking-wider uppercase text-[#8F8B83] font-light">
              <span>ANALYSIS QUALITY</span>
              <span>•</span>
              <span>PROVENANCE VERIFIED</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#8F8B83] font-medium">
                  02 / DESIGN ATELIER
                </span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[02]</span>
              </div>
              <h3 className="font-serif-luxury text-3xl font-normal text-[#141A23] mb-4">
                Our Mission
              </h3>
              <p className="text-sm text-[#63615C] leading-relaxed mb-6 font-light">
                Guiding discerning clients through seamless acquisition and bespoke interior
                execution without dilution of intent. One cohesive team that handles everything
                from the legal discovery to the custom furniture commission, eliminating the
                disconnect that happens between agent, architect, and craftsman.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EAE5DC] flex items-center justify-between text-[11px] tracking-wider uppercase text-[#8F8B83] font-light">
              <span>SEAMLESS STEWARDSHIP</span>
              <span>•</span>
              <span>TURNKEY ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY DISCERNING PATRONS CHOOSE SUNRISE (Image 4)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block">
              CLIENT PROFILE &amp; VALUE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23] leading-tight">
              Why Discerning Patrons Choose Sunrise
            </h2>
            <p className="text-sm text-[#63615C] leading-relaxed font-light">
              We intentionally restrict client volume to safeguard depth. Our methodology rejects
              generic market formulas in pursuit of uncommon and curated manifestations.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors border-b border-[#141A23] pb-1 cursor-pointer"
            >
              <span>READ CLIENT EXPERIENCES</span>
              <span>→</span>
            </button>
          </div>

          {/* Right 2x2 Grid (8 cols) matching Image 4 */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                num: "01 / DESIGN CURATION",
                title: "Design-First Filter",
                desc: "Every property is evaluated through the rigorous lens of interior architecture. We look beyond surface finish to layout efficiency, daylight path, acoustic comfort, and true structural integrity.",
                badge: "Spatial Architecture",
              },
              {
                num: "02 / ATTENTION TO DETAIL",
                title: "Microscopic Precision",
                desc: "We obsess over shadow gaps, floor-to-ceiling alignment, hidden air circulation, and tactile materiality that rewards touch. No detail is too subtle for scrutiny.",
                badge: "Tactile Finish & Lighting",
              },
              {
                num: "03 / DISCRETION",
                title: "Transparent Advisory",
                desc: "No aggressive marketing hype or third-party interference. Strict client confidentiality and transparent appraisals guarantee your investment and domestic peace.",
                badge: "Bilateral NDA Standard",
              },
              {
                num: "04 / END-TO-END",
                title: "Architectural Provenance",
                desc: "Curated provenance ensuring enduring asset appreciation, seamless acquisition, and timeless bespoke finish that transcends seasonal trends.",
                badge: "Enduring Value Delivery",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block mb-2 font-medium">
                    {card.num}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-normal text-[#141A23] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">{card.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#EAE5DC]">
                  <span className="text-[10px] tracking-wider uppercase text-[#C29246] font-medium">
                    {card.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE INTERIOR CRAFT SHOWCASE (Image 4)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
              CRAFT ETHOS / MATERIALS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23]">
              The Interior Craft Showcase
            </h2>
          </div>
          <p className="text-sm text-[#63615C] max-w-md leading-relaxed font-light">
            Transforming raw volume into tailored sanctums. Each bespoke commission incorporates
            curated bespoke stone, configure-fit millwork, and warm ambient daylight.
          </p>
        </div>

        {/* Split Showcase matching Image 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Photo (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] flex flex-col justify-between">
            <div className="relative h-[360px] sm:h-[480px] w-full">
              <Image
                src="/images/travertine-living.jpg"
                alt="The Interior Craft Living Pavilion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE6DF] text-xs text-[#63615C] leading-relaxed font-light">
              <p className="font-normal text-[#141A23] font-serif-luxury text-base">
                Living Pavilion 14, Mumbai
              </p>
              <p className="mt-1">
                Hand-finished oak cabinetry, honed sand-cut travertine hearth, and warm layered cove
                illumination.
              </p>
            </div>
          </div>

          {/* Right Specifications Card (5 cols) matching Image 4 */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#8F8B83] font-medium block mb-2">
                PROJECT SPECIFICATION
              </span>
              <h3 className="font-serif-luxury text-2xl font-normal text-[#141A23] mb-6">
                Atelier Material Specifications
              </h3>

              <div className="space-y-5 text-xs text-[#63615C]">
                <div className="pb-4 border-b border-[#EAE5DC]">
                  <p className="font-medium text-[#141A23] uppercase tracking-wider mb-1">
                    01. Honed Travertine Stone
                  </p>
                  <p className="leading-relaxed font-light">
                    Sourced directly from Italian quarries, diamond-cut and book-matched with
                    unpolished organic tactile finish.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#EAE5DC]">
                  <p className="font-medium text-[#141A23] uppercase tracking-wider mb-1">
                    02. Quarter-Sawn White Oak
                  </p>
                  <p className="leading-relaxed font-light">
                    Bespoke cabinetry and wall paneling finished with natural matte oil and
                    concealed finger-pull joinery.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#EAE5DC]">
                  <p className="font-medium text-[#141A23] uppercase tracking-wider mb-1">
                    03. Patinated Bronze Ironmongery
                  </p>
                  <p className="leading-relaxed font-light">
                    Custom cast architectural hardware that develops an authentic, evolving
                    patina with daily use.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#141A23] uppercase tracking-wider mb-1">
                    04. Concealed Indirect Illumination
                  </p>
                  <p className="leading-relaxed font-light">
                    2700K warm recessed cove fixtures, custom fluted glass pendants, and
                    precision-dimmed architectural spots.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE5DC] flex items-center justify-between text-[10px] tracking-wider uppercase text-[#8F8B83] font-light">
              <span>SPECIFICATION CODE: AT-MAT-2024</span>
              <span>ARCHITECTURAL GRADE</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DARK CTA BANNER (Image 4)
         ========================================================================= */}
      <section className="bg-[#121212] text-[#FAF8F5] py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#C29246] block">
            • PRIVATE ENGAGEMENT
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal leading-tight">
            Begin the Conversation <br />
            <span className="italic font-light text-[#C29246]">with Sunrise Atelier.</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#B3AEA2] max-w-xl mx-auto font-light">
            Whether you are considering a land acquisition, a discreet property purchase, or a
            complete interior refurbishment, our senior partners are available for confidential
            consultations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-white text-[#121212] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full font-medium transition-colors cursor-pointer"
            >
              REQUEST PRIVATE CONSULTATION
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-[#444440] hover:border-white text-white text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full font-light transition-colors"
            >
              CONNECT WITH DIRECTORS
            </Link>
          </div>

          <div className="pt-12 border-t border-[#262624] flex flex-wrap items-center justify-center gap-8 text-[11px] tracking-[0.2em] uppercase text-[#7D786F] font-light">
            <span>LONDON • GENEVA • MUMBAI</span>
            <span>•</span>
            <span>STRICT BILATERAL DISCRETION</span>
            <span>•</span>
            <span>CONFIDENTIAL GUARANTEED</span>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest="BOTH DISCIPLINES"
      />
    </div>
  );
}
