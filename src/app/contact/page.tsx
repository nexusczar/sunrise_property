"use client";

import React, { useState } from "react";
import Image from "next/image";
import EnquiryModal from "@/components/EnquiryModal";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeInterest, setActiveInterest] = useState("REAL ESTATE");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openPhase, setOpenPhase] = useState<number | null>(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    timeline: "1 - 3 Months (Standard)",
    budget: "₹25 Cr – ₹50 Cr ($3M – $6M)",
    brief: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const togglePhase = (phaseNumber: number) => {
    setOpenPhase(openPhase === phaseNumber ? null : phaseNumber);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Sunrise Property Desk, I would like to arrange confidential coordination regarding your real estate and interior services."
    );
    window.open(`https://wa.me/917835971222?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-[#FAF8F5] text-[#141A23] overflow-x-hidden">
      {/* =========================================================================
          HERO SECTION (Image 3)
         ========================================================================= */}
      <section className="pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="max-w-4xl space-y-4">
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block">
            PRIVATE ATELIER &amp; ADVISORY
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal text-[#141A23] leading-[1.08]">
            Let’s Talk About <br />
            <span className="italic font-light text-[#A87A36]">Your Next Space.</span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[#63615C] max-w-2xl pt-2 font-light">
            Find Your Property. Design Your Space. Live Better. Whether acquiring an architectural residence or commissioning turnkey interiors, our advisors provide end-to-end guidance.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & CONSULTATION GRID (Image 3)
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Inquiries Card */}
            <div className="bg-white p-8 rounded-2xl border border-[#EAE6DF] space-y-7">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#8F8B83] font-medium">
                  DIRECT INQUIRIES
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#C29246] font-normal">
                  Confidential Desk
                </span>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block font-medium">
                  TELEPHONE ADVISORY
                </span>
                <a
                  href="tel:+919870389489"
                  className="font-serif-luxury text-xl font-normal text-[#141A23] hover:text-[#A87A36] transition-colors block"
                >
                  +91 98703 89489
                </a>
                <p className="text-xs text-[#8F8B83] font-light">
                  Direct advisory line for real estate &amp; interior consultations
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1 pt-4 border-t border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block font-medium">
                  ELECTRONIC CORRESPONDENCE
                </span>
                <a
                  href="mailto:info@advikacreation.in"
                  className="font-serif-luxury text-xl font-normal text-[#141A23] hover:text-[#A87A36] transition-colors block"
                >
                  info@advikacreation.in
                </a>
                <p className="text-xs text-[#8F8B83] font-light">
                  Official correspondence &amp; project submissions
                </p>
              </div>

              {/* Address */}
              <div className="space-y-1 pt-4 border-t border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block font-medium">
                  HEAD OFFICE &amp; ATELIER
                </span>
                <p className="text-xs text-[#141A23] leading-relaxed font-semibold">
                  Office A-722, Grandthum
                </p>
                <p className="text-xs text-[#63615C] leading-relaxed font-normal">
                  Techzone 4, Greater Noida West, Uttar Pradesh, India.
                </p>
                <p className="text-xs text-[#8F8B83] font-light">Visitor parking and concierge at Tower A</p>
              </div>

              {/* Hours */}
              <div className="space-y-1 pt-4 border-t border-[#EAE5DC]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8F8B83] block font-medium">
                  STUDIO OPERATING HOURS
                </span>
                <p className="text-xs text-[#141A23] font-normal">
                  Monday – Saturday: 10:00 AM – 7:00 PM IST
                </p>
                <p className="text-xs text-[#8F8B83] font-light">
                  Sunday site visits &amp; consultations by appointment
                </p>
              </div>
            </div>

            {/* Responsive Google Map Section with Full Colors & Accents */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#EAE6DF] shadow-md flex flex-col">
              {/* Colorful Top Banner */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-white via-[#FAF8F5] to-amber-50/40 border-b border-[#EAE6DF] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-rose-500/25">
                    <span className="text-base font-bold">📍</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-700">Official Atelier &amp; Desk</span>
                    </div>
                    <h4 className="font-serif-luxury text-lg sm:text-xl text-[#141A23] leading-tight mt-0.5">
                      Sunrise Property @ Grandthum
                    </h4>
                    <p className="text-xs text-[#8F8B83] font-light">
                      Office A-722, Techzone 4, Greater Noida West
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Grandthum+by+Group+108+Techzone+4+Greater+Noida+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-[11px] font-semibold tracking-wide flex items-center gap-1 shadow-sm transition hover:scale-105 cursor-pointer"
                >
                  <span>Open Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Native Full-Color Google Map (No grayscale) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F0EEEA]">
                <iframe
                  title="Sunrise Property Grandthum Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7383236961474!2d77.44747757620242!3d28.577626986716035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6f04cbb451%3A0xc391cb44eb89e6eb!2sGrandthum%20by%20Group%20108!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Colorful Bottom Navigation Strip */}
              <div className="p-3.5 sm:p-4 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between text-xs">
                <span className="text-[#8F8B83] font-light flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <span>🕒</span>
                  Visiting Hours: 10:00 AM – 7:30 PM IST
                </span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Grandthum+by+Group+108+Techzone+4+Greater+Noida+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:text-[#1557b0] font-semibold text-xs flex items-center gap-1 transition hover:underline"
                >
                  <span>Get Directions →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Request Consultation Form & WhatsApp Section (Bottom Right) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#EAE6DF]">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <h3 className="font-serif-luxury text-3xl font-normal tracking-wide">
                    Consultation Request Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63615C] max-w-md mx-auto leading-relaxed font-light">
                    Thank you, {formData.name || "Patron"}. Your spatial parameters are under strict
                    non-disclosure review. Our Senior Partner will initiate contact within 24 hours.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#141A23] text-[#FAF8F5] text-xs tracking-[0.2em] uppercase px-8 py-3 rounded-full font-medium"
                    >
                      SUBMIT ANOTHER PARAMETER
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <span className="text-[10px] tracking-[0.24em] uppercase text-[#C29246] font-medium block mb-1">
                      • FORMAL REGISTRATION
                    </span>
                    <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#141A23]">
                      Request a Private Consultation
                    </h2>
                    <p className="text-xs text-[#63615C] mt-2 leading-relaxed font-light">
                      Please register your spatial requirements below. Every submission is treated
                      under strict bilateral non-disclosure protocols.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Primary Area of Interest Pills matching Image 3 */}
                    <div>
                      <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-2">
                        PRIMARY AREA OF INTEREST *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["REAL ESTATE", "INTERIOR DESIGN", "BOTH DISCIPLINES"].map((item) => (
                          <button
                            type="button"
                            key={item}
                            onClick={() => setActiveInterest(item)}
                            className={`text-[10px] sm:text-[11px] tracking-[0.14em] uppercase py-3 px-2 rounded-lg font-medium transition-all text-center border cursor-pointer ${
                              activeInterest === item
                                ? "bg-[#141A23] text-[#FAF8F5] border-[#141A23]"
                                : "bg-[#FAF8F5] text-[#63615C] border-[#EAE6DF] hover:border-[#C29246]"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lord Alistair Vance / Dr. Arishta Mehta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-4 py-3 rounded-lg text-xs sm:text-sm text-[#141A23] focus:outline-none"
                      />
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98703 89489"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-4 py-3 rounded-lg text-xs sm:text-sm text-[#141A23] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                          DIRECT EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="info@advikacreation.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-4 py-3 rounded-lg text-xs sm:text-sm text-[#141A23] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Timeline and Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                          PROJECTED HORIZON / TIMELINE
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-3.5 py-3 rounded-lg text-xs text-[#141A23] focus:outline-none"
                        >
                          <option>1 - 3 Months (Standard)</option>
                          <option>Immediate (&lt; 30 Days)</option>
                          <option>3 - 6 Months</option>
                          <option>Long-term Advisory (&gt; 6 Months)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                          BUDGETARY SCOPE / ALLOCATION
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-3.5 py-3 rounded-lg text-xs text-[#141A23] focus:outline-none"
                        >
                          <option>₹25 Cr – ₹50 Cr ($3M – $6M)</option>
                          <option>₹50 Cr – ₹100 Cr ($6M – $12M)</option>
                          <option>₹100 Cr+ ($12M+)</option>
                          <option>Bespoke Architecture Fee</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief */}
                    <div>
                      <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                        DETAILED BRIEF &amp; SPATIAL SPECIFICATIONS
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Outline key preferences: desired areas/locations, square footage, architectural aesthetic (e.g., brutalist limestone, tropical modernism), structural chambers, or bespoke entertaining amenities..."
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#EAE6DF] focus:border-[#C29246] px-4 py-3 rounded-lg text-xs sm:text-sm leading-relaxed text-[#141A23] focus:outline-none font-light"
                      />
                    </div>

                    {/* Submit and NDA */}
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#141A23] hover:bg-[#202836] text-[#FAF8F5] text-xs tracking-[0.24em] uppercase py-4 rounded-xl font-medium transition-colors cursor-pointer"
                      >
                        SUBMIT INQUIRY →
                      </button>
                      <div className="mt-3 text-center text-[11px] text-[#8F8B83] font-light">
                        Strict bilateral non-disclosure protocols apply
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Dedicated WhatsApp Concierge Section - Bottom Right */}
            <div className="bg-[#0c0d0e] text-white p-7 sm:p-9 rounded-2xl border-2 border-[#25D366]/40 shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#25D366] font-semibold">
                    DIRECT CHAT AVAILABLE · ACTIVE NOW
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-[#c5a059] font-medium">Under 15 Mins Response</span>
              </div>
              <h3 className="relative z-10 font-serif-luxury text-2xl sm:text-3xl font-normal text-white">WhatsApp Concierge Desk</h3>
              <p className="relative z-10 text-xs leading-relaxed text-[#C8C4B8] font-light">
                Prefer direct WhatsApp coordination? Connect directly at <strong className="text-white font-medium">+91 78359 71222</strong> for project brochures, floor plans, and rapid consultations.
              </p>
              <button
                onClick={handleWhatsApp}
                className="relative z-10 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs tracking-[0.2em] uppercase py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <span>INITIATE WHATSAPP CHAT (+91 78359 71222)</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROTOCOL & CLARITY (Phased Accordion matching Image 3)
         ========================================================================= */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
            PROTOCOL &amp; CLARITY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#141A23] mb-4">
            What Transpires After <br />
            <span className="italic font-light text-[#A87A36]">Your Submission.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#63615C] leading-relaxed font-light">
            We maintain an unhurried, rigorous curation standard. Every project journey is
            structured in three consecutive phases.
          </p>
        </div>

        {/* 3 Interactive Accordion Phases matching Image 3 */}
        <div className="space-y-4 max-w-5xl">
          {/* Phase 01 */}
          <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
            <button
              onClick={() => togglePhase(1)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F8B83]">
                  PHASE 01
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#141A23]">
                  Discreet Preliminary Discovery Call
                </h3>
              </div>
              <span className="text-sm text-[#8F8B83]">{openPhase === 1 ? "—" : "+"}</span>
            </button>

            {openPhase === 1 && (
              <div className="px-8 pb-8 pt-2 text-[#63615C] text-xs sm:text-sm leading-relaxed border-t border-[#EAE5DC]/60 font-light">
                <p className="mb-4">
                  Within 24 hours of registering, a designated Sunrise Property partner conducts a
                  strictly private 20-minute telephonic discovery. We clarify your qualitative
                  search and design requirements, verify location criteria, access confidential
                  off-market estates, and confirm design scope without third-party solicitation.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-wider uppercase text-[#8F8B83] pt-2">
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    TIMEFRAME: WITHIN 24 HOURS
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    BILATERAL NDA EXECUTED
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    DIRECT PRINCIPAL CONTACT
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Phase 02 */}
          <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
            <button
              onClick={() => togglePhase(2)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F8B83]">
                  PHASE 02
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#141A23]">
                  Private In-Person or Digital Dossier Review
                </h3>
              </div>
              <span className="text-sm text-[#8F8B83]">{openPhase === 2 ? "—" : "+"}</span>
            </button>

            {openPhase === 2 && (
              <div className="px-8 pb-8 pt-2 text-[#63615C] text-xs sm:text-sm leading-relaxed border-t border-[#EAE5DC]/60 font-light">
                <p className="mb-4">
                  We present a customized dossier containing verified architectural assessments,
                  confidential off-market listings, and initial spatial zoning studies tailored to
                  your aesthetic criteria.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-wider uppercase text-[#8F8B83] pt-2">
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    TIMEFRAME: 3-5 BUSINESS DAYS
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    CUSTOM OFF-MARKET DOSSIER
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    SPATIAL ANALYSIS
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Phase 03 */}
          <div className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden">
            <button
              onClick={() => togglePhase(3)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8F8B83]">
                  PHASE 03
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-[#141A23]">
                  Tailored Acquisition or Architectural Blueprint Proposal
                </h3>
              </div>
              <span className="text-sm text-[#8F8B83]">{openPhase === 3 ? "—" : "+"}</span>
            </button>

            {openPhase === 3 && (
              <div className="px-8 pb-8 pt-2 text-[#63615C] text-xs sm:text-sm leading-relaxed border-t border-[#EAE5DC]/60 font-light">
                <p className="mb-4">
                  Formal engagement begins with dedicated site viewings, complete due diligence,
                  architectural feasibility studies, and bespoke milestone planning.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-wider uppercase text-[#8F8B83] pt-2">
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    TIMEFRAME: UPON DOSSIER ALIGNMENT
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    WHITE-GLOVE CONCIERGE
                  </span>
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EAE6DF]">
                    TURNKEY STEWARDSHIP
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRIVATE SITE VIEWINGS AVAILABLE (Image 3)
         ========================================================================= */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EAE6DF]">
        <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative h-[340px] sm:h-[440px]">
            <Image
              src="/images/amber-villa.jpg"
              alt="The Amber Reflection Villa Alibaug Coast"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/65 backdrop-blur-xs text-white px-4 py-2.5 rounded-lg text-xs">
              <span className="text-[10px] tracking-widest uppercase text-[#C29246] block font-light">
                SIGNATURE RESIDENCE
              </span>
              <span className="font-serif-luxury text-base font-normal">
                The Amber Reflection Villa • Alibaug Coast
              </span>
            </div>
          </div>

          {/* Text & Action */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#8F8B83] font-medium block">
              IMMEDIATE ARCHITECTURAL OPPORTUNITY
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#141A23]">
              Private Site Viewings Available
            </h3>
            <p className="text-xs sm:text-sm text-[#63615C] leading-relaxed font-light">
              Experience the convergence of travertine masonry and quiet reflective water
              first-hand. Private site helicopter transfers or luxury yacht shuttles arranged
              directly through our desk.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#141A23] hover:text-[#A87A36] transition-colors border-b border-[#141A23] pb-1 cursor-pointer"
              >
                <span>REQUEST VIEWING SCHEDULE</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest="REAL ESTATE"
      />
    </div>
  );
}
