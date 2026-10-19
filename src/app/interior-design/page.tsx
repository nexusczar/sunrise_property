"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  Wrench, 
  Layers, 
  Check, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight 
} from "lucide-react";

export default function InteriorDesignPage() {
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Design Services (Concept, Space Planning, 3D)",
    message: ""
  });

  const interiorDisciplines = {
    design: [
      { name: "Concept Design", desc: "Custom visual moodboards, architectural theme definitions, and spatial narratives tailored to lifestyle aspirations." },
      { name: "Space Planning", desc: "Precision layout flow, circulation zoning, natural daylight ingress analysis, and ergonomic volume optimization." },
      { name: "2D Drawings", desc: "Exhaustive civil blueprints, detailed MEP coordination layouts, electrical schematics, and elevation sections." },
      { name: "3D Visualization", desc: "Photorealistic, ray-traced 3D visual walkthroughs and lighting simulations before execution begins." },
      { name: "Material Selection", desc: "Honed travertine, Italian marble book-matching, grain-matched European hardwoods, and artisanal brass hardware." }
    ],
    execution: [
      { name: "Civil Work", desc: "Precision structural demolition, masonry alterations, waterproofing membranes, and engineering restructuring." },
      { name: "Carpentry", desc: "Bespoke architectural joinery, walk-in wardrobes, fluted wall treatments, and floating custom cabinetry." },
      { name: "Electrical", desc: "Concealed automation conduits, Lutron architectural dimming, low-glare magnetic track lights, and ambient cove lighting." },
      { name: "Plumbing", desc: "Concealed pressure-tested sanitary lines, thermostatic valves, artisanal marble sinks, and premium European fixtures." },
      { name: "False Ceiling", desc: "Minimalist shadow-reveal architectural drywall ceilings, acoustic dampening, and seamless recessed linear AC slots." },
      { name: "Flooring", desc: "Monolithic Roman travertine, Calacatta marble slab installation, herringbone engineered hardwood, and micro-cement." },
      { name: "Painting", desc: "Artisanal Italian lime washes, mineral micro-plaster, breathable textured Venetian stucco, and smooth matte finishes." }
    ],
    specialized: [
      { name: "Residential", desc: "Ultra-luxury waterfront estates, duplex penthouses, and private family sanctuaries crafted for stillness." },
      { name: "Commercial", desc: "Corporate headquarters, discreet family offices, and executive suites engineered for focus and executive prestige." },
      { name: "Retail", desc: "High-end luxury flagship boutiques, concept showrooms, and curated spatial branding environments." },
      { name: "Hospitality", desc: "Boutique eco-resorts, experiential restaurants, intimate speakeasies, and private member clubs." },
      { name: "Furniture Design", desc: "Custom bespoke furniture prototyping, sculptural stone tables, monolithic credenzas, and tailored upholstery." },
      { name: "Renovation", desc: "Full-scale structural retrofitting, heritage revitalizations, and turnkey transformational modernizations." }
    ]
  };

  const scrollToEnquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setContactForm((prev) => ({ ...prev, service: serviceTitle }));
    }
    const elem = document.getElementById("interior-consultation-form");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#0f1115] overflow-x-hidden min-h-screen">
      {/* Top Breadcrumb & Metadata Bar */}
      <div className="border-b border-[#EAE6DF] bg-[#F7F5F0] pt-24 pb-3.5 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#8F8B83] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
            <span>06 / INTERIOR ARCHITECTURE &amp; ATELIER • BESPOKE RESIDENTIAL COMMISSIONS</span>
          </div>
          <div>Turnkey Single-Point Custody • Artisanal Sourcing</div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-16 pb-12 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#e2ded6] pb-8 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
            Interior Architecture &amp; Spatial Atelier
          </span>
          <h1 className="font-serif-azimute text-4xl sm:text-6xl lg:text-7xl mt-2 text-[#0f1115]">
            Interiors With Purpose. Spaces With Character.
          </h1>
          <p className="text-base text-[#5a5f67] max-w-3xl mt-4 font-light leading-relaxed">
            End-to-end bespoke interior architecture: from conceptual 3D space planning and moodboards to structural civil works, custom joinery, specialized fit-outs, and artisanal stone finishes.
          </p>
        </div>

        {/* =========================================================================
            BEFORE & AFTER COMPARISON SLIDER
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#e2ded6] gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Turnkey Evolution</span>
              <h3 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115]">
                Spatial Transformation (Before &amp; After)
              </h3>
            </div>
            <span className="text-xs text-[#a6833d]">Drag horizontal slider handle to examine transformation</span>
          </div>
          
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#e2ded6] select-none shadow-2xl">
            {/* After image (Underneath) */}
            <img 
              src="/images/travertine-living.jpg" 
              alt="After Interior Design Finished Space" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white border border-white/20">
              After (Finished Atelier Interior)
            </div>

            {/* Before image (Clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden" 
              style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80" 
                alt="Before Interior Design Raw Space" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75" 
              />
              <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-[#c5a059] border border-[#c5a059]/30">
                Before (Raw Bare Shell)
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#c5a059] shadow-[0_0_15px_#c5a059] pointer-events-none"
              style={{ left: `${beforeAfterSlider}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#c5a059] text-[#0c0d0e] flex items-center justify-center text-xs font-bold shadow-xl">
                ↔
              </div>
            </div>

            {/* Range input */}
            <input 
              type="range" 
              min={0} 
              max={100} 
              value={beforeAfterSlider} 
              onChange={(e) => setBeforeAfterSlider(Number(e.target.value))} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
              aria-label="Before and after comparison control"
            />
          </div>
        </div>

        {/* =========================================================================
            6.1 THE 3 INTERIOR PILLARS (Design, Execution, Specialized)
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#e2ded6]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Disciplines &amp; Craft</span>
              <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                Comprehensive Interior Services
              </h2>
            </div>
            <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
              Three unified pillars of interior architecture ensuring seamless continuity from conceptual planning to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Design Services */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 01</span>
                <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                  Design Services
                </h3>
                <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                  Conceptual foundation and technical blueprints tailored to spatial volume, daylight, and client lifestyle.
                </p>
                
                <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                  {interiorDisciplines.design.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                      </div>
                      <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                <button
                  onClick={() => scrollToEnquiry("Design Services (Concept, Space Planning, 3D)")}
                  className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                >
                  Request Design Proposal
                </button>
              </div>
            </div>

            {/* Pillar 2: Execution Services */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 02</span>
                <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                  Execution Services
                </h3>
                <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                  On-site craft mastery, structural transformations, MEP engineering, and artisanal architectural finishes.
                </p>
                
                <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                  {interiorDisciplines.execution.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                      </div>
                      <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                <button
                  onClick={() => scrollToEnquiry("Execution Services (Civil, Carpentry, Electrical, False Ceiling)")}
                  className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                >
                  Request Fit-Out Quote
                </button>
              </div>
            </div>

            {/* Pillar 3: Specialized Services */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 03</span>
                <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                  Specialized Services
                </h3>
                <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                  Tailored spatial sectors spanning luxury residences, commercial office suites, retail flagships, and renovations.
                </p>
                
                <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                  {interiorDisciplines.specialized.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                      </div>
                      <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                <button
                  onClick={() => scrollToEnquiry("Specialized Services: Full Turnkey Renovation")}
                  className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                >
                  Discuss Specialized Brief
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            6.2 PROJECT ENQUIRY FORM / GET A CONSULTATION CTA
           ========================================================================= */}
        <div id="interior-consultation-form" className="p-8 sm:p-12 rounded-3xl bg-[#07090e]/85 backdrop-blur-3xl border border-white/12 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Atelier Commission Desk</span>
              <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white">
                Project Enquiry &amp; Consultation
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Our principal interior architects accept a curated number of residential, commercial, and renovation commissions each year to maintain uncompromising standards of craftsmanship and personalized custody.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Complete 3D spatial simulation prior to physical work</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Direct sourcing of Italian stone &amp; European hardwoods</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Single-point turnkey accountability with warranty</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-6">
                <a
                  href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Interactive Interior Form */}
            <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif-azimute text-xl text-white">Interior Brief Received</h4>
                  <p className="text-xs text-white/70 max-w-sm mx-auto">
                    Thank you. Our design director will review your brief and schedule an exploratory virtual or in-person design consultation.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        value={contactForm.name} 
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                        placeholder="e.g. Priya Kapur"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={contactForm.email} 
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                        placeholder="priya@design.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        required 
                        value={contactForm.phone} 
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} 
                        placeholder="+91 98703 89489"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Desired Service Category</label>
                      <select 
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d0e] border border-white/15 text-white text-xs focus:border-[#c5a059] outline-none transition"
                      >
                        <option value="Design Services (Concept, Space Planning, 3D)">Design Services (Concept, Space Planning, 3D)</option>
                        <option value="Execution Services (Civil, Carpentry, Electrical, False Ceiling)">Execution Services (Civil, Carpentry, Electrical, False Ceiling)</option>
                        <option value="Specialized Services: Residential (Villas &amp; Penthouses)">Specialized Services: Residential (Villas &amp; Penthouses)</option>
                        <option value="Specialized Services: Commercial &amp; Executive Suites">Specialized Services: Commercial &amp; Executive Suites</option>
                        <option value="Specialized Services: Retail &amp; Hospitality">Specialized Services: Retail &amp; Hospitality</option>
                        <option value="Specialized Services: Furniture Design">Specialized Services: Furniture Design</option>
                        <option value="Specialized Services: Full Turnkey Renovation">Specialized Services: Full Turnkey Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Space Dimensions &amp; Project Vision</label>
                    <textarea 
                      rows={3} 
                      value={contactForm.message} 
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                      placeholder="Detail the approximate square footage, current state (raw shell / renovation), and preferred aesthetic palette..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-[#c5a059] hover:bg-white text-[#0c0d0e] font-semibold text-xs uppercase tracking-widest transition cursor-pointer shadow-lg"
                  >
                    Get a Consultation · Initiate Brief
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
