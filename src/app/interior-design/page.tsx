"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "@/components/EnquiryModal";

export default function InteriorDesignPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [atelierForm, setAtelierForm] = useState({
    name: "",
    email: "",
    projectType: "Full Residential Interior Architecture",
    budget: "₹25 Cr – ₹50 Cr",
  });

  return (
    <div className="bg-[#FAF8F5] text-[#141A23] overflow-x-hidden">
      {/* =========================================================================
          TOP BREADCRUMB & METADATA BAR (Image 2)
         ========================================================================= */}
      <div className="border-b border-[#EAE6DF] bg-[#F7F5F0] pt-24 pb-3.5 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#8F8B83] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
            <span>01 / ATELIER ARCHITECTURE &amp; DESIGN • SELECTION COMMISSIONS 2020-2024</span>
          </div>
          <div>London • Geneva • Tokyo • Mumbai</div>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION (Image 2)
         ========================================================================= */}
      <section className="pt-16 pb-12 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          {/* Title (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#141A23]">
              Interiors With Purpose. <br />
              <span className="italic font-light text-[#A87A36]">Spaces With Character.</span>
            </h1>
          </div>

          {/* Description & Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base leading-relaxed text-[#63615C] font-light">
              Our atelier crafts spatial sanctuaries where proportion, soft daylight, and tactile
              finishes compose quiet monumentalism. Every project is conceived as an architectural
              monograph crafted to elevate daily existence.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const elem = document.getElementById("commissions");
                  elem?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#141A23] hover:bg-[#202836] text-white text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full font-medium transition-colors cursor-pointer"
              >
                VIEW DESIGN PORTFOLIO
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="border border-[#D9D3C7] hover:border-[#141A23] text-[#141A23] text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full font-normal transition-colors cursor-pointer"
              >
                COMMISSION ATELIER
              </button>
            </div>
          </div>
        </div>

        {/* Big Hero Image matching Image 2 */}
        <div className="rounded-2xl overflow-hidden border border-[#EAE6DF] bg-white relative">
          <div className="relative h-[420px] sm:h-[620px] w-full">
            <Image
              src="/images/travertine-living.jpg"
              alt="The Travertine Villa Interior"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          {/* Floating Caption Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-black/65 backdrop-blur-xs text-white p-5 rounded-xl border border-white/15">
            <p className="font-serif-luxury text-lg font-normal text-[#FAF8F5]">
              The Travertine Villa
            </p>
            <p className="text-xs text-[#D2CEBE] mt-1 leading-relaxed font-light">
              Architectural living pavilion with double-height volume, bespoke oak millwork, and
              monolithic travertine hearth.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ARCHITECTURAL DISCIPLINES (Image 2)
         ========================================================================= */}
      <section id="disciplines" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
              SYSTEM OF PRACTICE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23]">
              Architectural Disciplines
            </h2>
          </div>
          <p className="text-sm text-[#63615C] max-w-md leading-relaxed font-light">
            A precision system spanning bespoke spatial design, custom joinery manufacturing,
            tailored material curation, and execution governance.
          </p>
        </div>

        {/* 5 Disciplines Cards Grid matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Card 1 (Span 3 cols) */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] pb-4 mb-6 border-b border-[#EAE5DC]">
                <span>01 / ARCHITECTURE</span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[01]</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#141A23] font-normal mb-3">
                Full Residential Interior Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed mb-6 font-light">
                Holistic spatial and volumetric reconfigurations. We optimize zoning, circulation,
                indoor-outdoor flow, structural wall niches, and sightlines to transform cold shells
                into architectural sanctums.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EAE5DC]">
              {["Structural Layout Plan", "Volumetric Design", "Sightline Study"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase bg-[#FAF8F5] border border-[#EAE6DF] text-[#63615C] px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 (Span 3 cols) */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] pb-4 mb-6 border-b border-[#EAE5DC]">
                <span>02 / SPATIAL</span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[02]</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#141A23] font-normal mb-3">
                Spatial Planning &amp; Layout Optimization
              </h3>
              <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed mb-6 font-light">
                Harmonizing daily routines with natural daylight patterns and acoustics. Flow
                patterns that balance grand social gathering with acoustic privacy niches for
                quiet contemplation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EAE5DC]">
              {["Ergonomic Modeling", "Acoustic Zoning", "Daylight Calibration"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase bg-[#FAF8F5] border border-[#EAE6DF] text-[#63615C] px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 (Span 2 cols) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] pb-4 mb-5 border-b border-[#EAE5DC]">
                <span>03 / MATERIALITY</span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[03]</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-[#141A23] font-normal mb-3">
                Bespoke Materiality &amp; Finishes Curation
              </h3>
              <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">
                Sourcing stone directly from quarries, artisan lime plasters, fluted timber millwork,
                patinated bronze hardware, and hand-finished micro-cement.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-medium tracking-[0.16em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors inline-flex items-center gap-1.5 pt-4 border-t border-[#EAE5DC] cursor-pointer"
            >
              <span>Explore Material Library</span>
              <span>→</span>
            </button>
          </div>

          {/* Card 4 (Span 2 cols) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] pb-4 mb-5 border-b border-[#EAE5DC]">
                <span>04 / STYLING</span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[04]</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-[#141A23] font-normal mb-3">
                Custom Furniture &amp; Decorative Styling
              </h3>
              <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">
                Commissioning single-edition furniture pieces made by master craftsmen, bespoke
                rugs, sculptural lighting, and museum-grade art framing.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-medium tracking-[0.16em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors inline-flex items-center gap-1.5 pt-4 border-t border-[#EAE5DC] cursor-pointer"
            >
              <span>View Curated Furniture</span>
              <span>→</span>
            </button>
          </div>

          {/* Card 5 (Span 2 cols) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] pb-4 mb-5 border-b border-[#EAE5DC]">
                <span>05 / MANAGEMENT</span>
                <span className="font-serif-luxury text-[#B8893F] tracking-widest">[05]</span>
              </div>
              <h3 className="font-serif-luxury text-xl text-[#141A23] font-normal mb-3">
                Turnkey Execution &amp; Project Coordination
              </h3>
              <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">
                Strict site management, white-glove logistics, custom millwork installation
                governance, and turnkey handover protecting clients from site stress.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs font-medium tracking-[0.16em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors inline-flex items-center gap-1.5 pt-4 border-t border-[#EAE5DC] cursor-pointer"
            >
              <span>See Our Execution Method</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CURATED COMMISSIONS (Case Studies matching Image 2)
         ========================================================================= */}
      <section id="commissions" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        {/* Header with Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
              ARCHITECTURAL MONOGRAPHS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23]">
              Curated Commissions
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {["3 COMPLETED WORKS", "PRIVATE RESIDENCES"].map((f) => (
              <span
                key={f}
                className="text-[10px] tracking-[0.16em] uppercase border border-[#D9D3C7] px-4 py-2 rounded-full font-normal text-[#63615C]"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Commission Case Studies */}
        <div className="space-y-16">
          {/* Commission 1: The Travertine Villa */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image (6 cols) */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[480px]">
              <Image
                src="/images/travertine-living.jpg"
                alt="The Travertine Villa Living Room"
                fill
                className="object-cover"
              />
            </div>
            {/* Content (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block">
                RESIDENTIAL VILLA / ALBAUG COASTLINE
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#141A23]">
                The Travertine Villa
              </h3>
              <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed font-light">
                A serene coastal living project harmonizing indoor-outdoor living, muted acoustic
                finishes and monolithic stone elements. Warm illumination casts gentle shadows
                across custom ribbed millwork, curved shearling seating, patinated brass details,
                and framed garden vistas.
              </p>

              {/* Specs Table */}
              <div className="border-t border-[#EAE5DC] pt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Site Details</span>
                  <span className="font-normal text-[#141A23]">
                    Coastal Travertine Villa, Private Estate
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Project Scope</span>
                  <span className="font-normal text-[#141A23]">
                    Full Interior Architecture &amp; Furniture
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#8F8B83]">Status</span>
                  <span className="font-normal text-[#141A23]">
                    Completed &amp; Furnished, 14,800 sq ft
                  </span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors pt-2 cursor-pointer"
              >
                <span>Explore Project Case Study</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Commission 2: The Skyline Residence */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Content (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6 order-2 lg:order-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block">
                HIGH-RISE PENTHOUSE / BANDRA WEST, MUMBAI
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#141A23]">
                The Skyline Residence
              </h3>
              <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed font-light">
                A minimalist yet warm penthouse designed for elevated urban living. Featuring
                floor-to-ceiling glass, custom fluted walnut millwork, Calacatta Viola kitchen
                island, and discreet acoustic insulation creating an oasis above the city.
              </p>

              {/* Specs Table */}
              <div className="border-t border-[#EAE5DC] pt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Site Details</span>
                  <span className="font-normal text-[#141A23]">
                    Waterfront High-Rise, Bandra West
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Scope</span>
                  <span className="font-normal text-[#141A23]">
                    Interior Architecture &amp; Art Advisory
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#8F8B83]">Area</span>
                  <span className="font-normal text-[#141A23]">6,450 sq ft</span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors pt-2 cursor-pointer"
              >
                <span>Explore Project Case Study</span>
                <span>→</span>
              </button>
            </div>

            {/* Image (6 cols) */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[480px] order-1 lg:order-2">
              <Image
                src="/images/skyline-dining.jpg"
                alt="The Skyline Residence Kitchen and Dining"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Commission 3: Serene Sanctuary */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image (6 cols) */}
            <div className="lg:col-span-6 relative h-[360px] sm:h-[480px]">
              <Image
                src="/images/serene-bedroom.jpg"
                alt="Serene Sanctuary Master Suite"
                fill
                className="object-cover"
              />
            </div>
            {/* Content (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block">
                HILLSIDE RETREAT / LONAVALA HIGHLANDS
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#141A23]">
                Serene Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed font-light">
                A restful master suite and private pavilion immersed in forest views. Tactile
                limewashed walls, solid oak platforms, custom acoustic headboard, and subtle
                recessed ambient light bands foster deep recovery.
              </p>

              {/* Specs Table */}
              <div className="border-t border-[#EAE5DC] pt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Site Details</span>
                  <span className="font-normal text-[#141A23]">
                    Mountain Estate, Forest Ridge
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#EAE5DC]/60">
                  <span className="text-[#8F8B83]">Scope</span>
                  <span className="font-normal text-[#141A23]">
                    Master Bedroom Pavilion &amp; Wellness Suite
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#8F8B83]">Area</span>
                  <span className="font-normal text-[#141A23]">4,200 sq ft</span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors pt-2 cursor-pointer"
              >
                <span>Explore Project Case Study</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE ARCHITECTURAL APPROACH (Process & Stats matching Image 2)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23] mb-4">
            The Architectural Approach
          </h2>
          <p className="text-sm sm:text-base text-[#63615C] leading-relaxed font-light">
            Every project develops from well-honed intuition of space, structure, and integrity, for
            the harmony and enduring serenity of execution.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: "01",
              title: "Discovery & Materiality",
              desc: "We begin with deep contextual listening, understanding your domestic rituals, light preferences, and daily cadence. We develop a tailored materiality palette.",
              milestones: "Spatial Briefing • Sensory Moodboards • Limestone Selections",
            },
            {
              step: "02",
              title: "Spatial Geometry",
              desc: "Translating your brief into millimeter-accurate spatial schematics. We resolve ceiling datum lines, electrical layouts, air vents, and sightlines.",
              milestones: "3D Spatial Models • Lighting Environment • Full Joinery Elevation",
            },
            {
              step: "03",
              title: "Artisanal Execution",
              desc: "Our master craftspeople and project architects oversee execution on site. From slab selection at the quarry to bespoke joinery installation, we maintain quality.",
              milestones: "Quarry Supervision • White-Glove Installation • Turnkey Handover",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white p-8 rounded-2xl border border-[#EAE6DF] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-luxury text-3xl text-[#A87A36] block mb-3 font-normal">
                  {item.step}
                </span>
                <h3 className="font-serif-luxury text-2xl font-normal text-[#141A23] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#EAE5DC] text-[10px] tracking-wider uppercase text-[#8F8B83] font-light">
                {item.milestones}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#EAE6DF] text-center">
          <div>
            <p className="font-serif-luxury text-4xl text-[#141A23] font-normal">100%</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] mt-1 font-light">
              BESPOKE BLUEPRINTS
            </p>
          </div>
          <div>
            <p className="font-serif-luxury text-4xl text-[#141A23] font-normal">38</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] mt-1 font-light">
              ATELIER COMMISSIONS
            </p>
          </div>
          <div>
            <p className="font-serif-luxury text-4xl text-[#141A23] font-normal">14</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] mt-1 font-light">
              QUARRY PARTNERSHIPS
            </p>
          </div>
          <div>
            <p className="font-serif-luxury text-4xl text-[#141A23] font-normal">0</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] mt-1 font-light">
              COMPROMISED ELEMENTS
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DARK CTA (Begin the Architecture of Your Next Residence)
         ========================================================================= */}
      <section className="bg-[#121212] text-[#FAF8F5] py-24 sm:py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#C29246] block">
              • COMMISSION AN ATELIER
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl font-normal leading-[1.12]">
              Begin the Architecture <br />
              <span className="italic font-light text-[#C29246]">of Your Next Residence.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#B3AEA2] max-w-xl font-light">
              We accept a strictly limited number of private residential commissions annually to
              guarantee intensive oversight from principal partners. Schedule a confidential design
              conversation at our studio or private residence.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-white text-[#121212] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full font-medium transition-colors cursor-pointer"
              >
                SCHEDULE STUDIO VISIT
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto border border-[#444440] hover:border-white text-white text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full font-light transition-colors cursor-pointer"
              >
                ATELIER SPECIFICATION BROCHURE
              </button>
            </div>
          </div>

          {/* Right Dark Form matching Image 2 */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C1C1A] text-[#FAF8F5] rounded-2xl p-8 sm:p-10 border border-[#2E2E2A]">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <h3 className="font-serif-luxury text-2xl font-normal">Application Received</h3>
                  <p className="text-xs text-[#A69F8E] font-light leading-relaxed">
                    Our Senior Design Principal will review your spatial scope and contact you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif-luxury text-2xl font-normal mb-1">Atelier Inquiry</h3>
                  <p className="text-xs text-[#A69F8E] mb-6 font-light">
                    Direct access to design principals. Non-disclosure bilateral agreements
                    guaranteed.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-[10px] tracking-wider uppercase text-[#A69F8E] block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Arishta Mehta"
                        value={atelierForm.name}
                        onChange={(e) => setAtelierForm({ ...atelierForm, name: e.target.value })}
                        className="w-full bg-[#272724] border border-[#3A3A35] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-wider uppercase text-[#A69F8E] block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={atelierForm.email}
                        onChange={(e) => setAtelierForm({ ...atelierForm, email: e.target.value })}
                        className="w-full bg-[#272724] border border-[#3A3A35] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-wider uppercase text-[#A69F8E] block mb-1">
                        Project Scope
                      </label>
                      <select
                        value={atelierForm.projectType}
                        onChange={(e) =>
                          setAtelierForm({ ...atelierForm, projectType: e.target.value })
                        }
                        className="w-full bg-[#272724] border border-[#3A3A35] focus:border-[#C29246] px-3.5 py-2.5 rounded-lg text-xs text-white focus:outline-none"
                      >
                        <option>Full Residential Interior Architecture</option>
                        <option>Bespoke Penthouse Joinery &amp; Millwork</option>
                        <option>Turnkey Coastal Villa Transformation</option>
                        <option>Master Suite &amp; Wellness Sanctuary</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#C29246] hover:bg-[#A87A36] text-[#121212] text-xs tracking-[0.2em] uppercase py-3.5 rounded-xl font-medium transition-colors cursor-pointer"
                      >
                        APPLY FOR COMMISSION
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest="INTERIOR DESIGN"
      />
    </div>
  );
}
