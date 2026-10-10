"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  Home, 
  Maximize, 
  Clock, 
  Layers, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Check, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight, 
  X 
} from "lucide-react";

export default function RealEstatePage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Ashtech Presidential (Sec 12, Greater Noida)",
    message: ""
  });

  // Top Picks specifically requested by user
  const topPickProjects = [
    {
      id: "ashtech-presidential",
      title: "Ashtech Presidential",
      developer: "Ashtech",
      category: "RESIDENTIAL",
      badge: "TOP PICK",
      status: "Under Construction",
      statusColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      location: "Greater Noida, Sector 12",
      price: "₹26.1 L - ₹48.5 L",
      type: "Residential Apartments",
      beds: "1, 2 & 3 BHK",
      area: "650 - 1,450 SQ FT",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      description: "Sophisticated multi-tier residential development with Olympic-grade clubhouse, private elevators, landscaped sky balconies, and supreme sector connectivity.",
      highlights: ["Prime Sector 12 Connectivity", "Clubhouse & Gymnasium", "Children Play Zone", "24x7 Tier-3 Security"]
    },
    {
      id: "godrej-majesty",
      title: "Godrej Majesty",
      developer: "Godrej Properties",
      category: "RESIDENTIAL",
      badge: "TOP PICK",
      status: "Ready to Move",
      statusColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
      location: "Greater Noida, Sector 27",
      price: "₹1.90 Cr - ₹4 Cr",
      type: "2, 3 & 4 BHK Apartments",
      beds: "2, 3 & 4 BHK",
      area: "1,950 - 3,800 SQ FT",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description: "Ultra-luxury high-rise sanctuary by Godrej Properties featuring Olympic-grade amenities, infinity pool, and panoramic forest corridor vistas.",
      highlights: ["Forest Views & Clean Air", "Immediate Possession Available", "Olympic Length Lap Pool", "White-Glove Concierge"]
    },
    {
      id: "grandthum",
      title: "Grandthum by Group 108",
      developer: "Group 108",
      category: "COMMERCIAL",
      badge: "TOP PICK",
      status: "Under Construction",
      statusColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      location: "Techzone 4, Greater Noida West",
      price: "₹50 L - ₹3 Cr",
      type: "Office Spaces, Studio Apartments & Retail Shops",
      beds: "Studio, Retail & Office",
      area: "550 - 4,800 SQ FT",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      description: "Iconic twin-tower commercial and mixed-use landmark featuring an artificial water canal boulevard, dining decks, and retail high street.",
      highlights: ["Iconic Twin-Tower Landmark", "Canal Dining Boulevard", "High-Footfall Retail Street", "Grade-A Corporate Offices"]
    }
  ];

  // 7 Core Real Estate Services requested by user
  const realEstateServices = [
    {
      title: "Residential Properties",
      tag: "Villas & Penthouses",
      desc: "Prime luxury residences, bespoke villas, waterfront bungalows, and penthouses curated for discerning homeowners."
    },
    {
      title: "Commercial Properties",
      tag: "Offices & High-Street",
      desc: "Strategic high-street retail, Grade-A office suites, and mixed-use commercial destinations with superior footfall and capital appreciation."
    },
    {
      title: "Studio Apartments",
      tag: "High-Yield Assets",
      desc: "Smart, efficient, and beautifully finished modern studio suites ideal for urban living and high rental yields."
    },
    {
      title: "Rental & Leasing Services",
      tag: "Asset Management",
      desc: "End-to-end leasing management, verified corporate tenancy onboarding, and hassle-free white-glove property upkeep."
    },
    {
      title: "New Projects",
      tag: "Verified Launches",
      desc: "Early pre-launch access and construction-linked payment plans with India’s leading trusted real estate developers."
    },
    {
      title: "Property Buying & Selling",
      tag: "Confidential Broking",
      desc: "Discreet buyer-seller representation, seamless title vetting, transparent deal structuring, and prompt conveyance execution."
    },
    {
      title: "Property Consultation",
      tag: "Strategic Advisory",
      desc: "Institutional-grade valuation, market forecasting, legal due diligence, and bespoke portfolio structuring."
    }
  ];

  // Verified Property Portfolio
  const allProperties = topPickProjects;

  const filteredProperties = allProperties.filter((p) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "RESIDENTIAL") return p.category === "RESIDENTIAL";
    if (activeTab === "COMMERCIAL") return p.category === "COMMERCIAL";
    return true;
  });

  const scrollToEnquiry = (projectName?: string) => {
    if (projectName) {
      setContactForm((prev) => ({ ...prev, service: projectName }));
    }
    const elem = document.getElementById("property-enquiry-form");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#0f1115] overflow-x-hidden min-h-screen">
      {/* Top Breadcrumb & Metadata Bar */}
      <div className="border-b border-[#EAE6DF] bg-[#F7F5F0] pt-24 pb-3.5 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#8F8B83] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
            <span>05 / REAL ESTATE ADVISORY • GREATER NOIDA & NCR</span>
          </div>
          <div>Strict Bilateral Due Diligence • Verified Title Deeds</div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-16 pb-12 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#e2ded6] pb-8 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
            Property Portfolio &amp; Strategic Advisory
          </span>
          <h1 className="font-serif-azimute text-4xl sm:text-6xl lg:text-7xl mt-2 text-[#0f1115]">
            Curated Estates &amp; Prime Developments
          </h1>
          <p className="text-base text-[#5a5f67] max-w-3xl mt-4 font-light leading-relaxed">
            From premier residential apartments and bespoke sanctuaries to high-street commercial destinations and premium studio suites across Greater Noida, Noida, and NCR.
          </p>
        </div>

        {/* =========================================================================
            5.1 REAL ESTATE SERVICES (7 Core Disciplines)
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Comprehensive Advisory</span>
              <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">Our Real Estate Services</h2>
            </div>
            <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
              End-to-end custody spanning private acquisitions, commercial destinations, studio apartments, and portfolio advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realEstateServices.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(197,160,89,0.12)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-4 group-hover:scale-105 transition">
                    {idx === 0 && <Home className="w-5 h-5" />}
                    {idx === 1 && <Building2 className="w-5 h-5" />}
                    {idx === 2 && <Maximize className="w-5 h-5" />}
                    {idx === 3 && <Clock className="w-5 h-5" />}
                    {idx === 4 && <Layers className="w-5 h-5" />}
                    {idx === 5 && <Award className="w-5 h-5" />}
                    {idx === 6 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">{service.tag}</span>
                  <h3 className="font-serif-azimute text-xl text-[#0f1115] mt-1 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5a5f67] leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                <button
                  onClick={() => scrollToEnquiry(`Enquiry: ${service.title}`)}
                  className="mt-5 pt-3 border-t border-[#f0ece3] text-[11px] uppercase tracking-wider font-semibold text-[#c5a059] hover:text-[#0f1115] flex items-center gap-1.5 transition text-left cursor-pointer"
                >
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5.2 FEATURED PRIME DEVELOPMENTS & AVAILABLE PORTFOLIO
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Curated Developments</span>
              <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                Featured Prime Developments
              </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
              {["ALL", "RESIDENTIAL", "COMMERCIAL"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest transition cursor-pointer ${
                    activeTab === tab 
                      ? "bg-[#0c0d0e] text-white font-semibold shadow-sm" 
                      : "bg-white border border-[#e8e4dc] text-[#5a5f67] hover:text-[#0f1115] hover:border-[#c5a059]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <div 
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] hover:border-[#c5a059] transition duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md bg-[#0c0d0e]/85 text-[#c5a059] border-[#c5a059]/30 font-semibold">
                        {p.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md font-medium ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-wider text-[#a6833d] font-semibold mb-1">
                      Developer: {p.developer}
                    </div>
                    <h3 className="font-serif-azimute text-2xl text-[#0f1115] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#6e737c] flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                      <span>{p.location}</span>
                    </p>
                    <div className="bg-[#faf8f5] px-3.5 py-2 rounded-xl border border-[#e8e4dc] mb-3 text-xs">
                      <span className="text-[#8a8f98] block text-[10px] uppercase tracking-wider">Property Type</span>
                      <span className="text-[#0f1115] font-medium">{p.type}</span>
                    </div>
                    <p className="text-xs text-[#5a5f67] line-clamp-2 mb-4 leading-relaxed font-light">
                      {p.description}
                    </p>
                    <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-xs">
                      <span className="text-[#8a8f98]">Price Range</span>
                      <span className="font-semibold text-base text-[#0f1115]">{p.price}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
                  <button 
                    onClick={() => setSelectedProjectModal(p)}
                    className="w-full py-3 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider transition cursor-pointer font-medium text-center"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => scrollToEnquiry(`Enquiry: ${p.title} (${p.developer})`)}
                    className="w-full py-3 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-wider transition cursor-pointer font-semibold shadow-sm text-center"
                  >
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            5.4 PROPERTY ENQUIRY FORM / ENQUIRE NOW CTA
           ========================================================================= */}
        <div id="property-enquiry-form" className="p-8 sm:p-12 rounded-3xl bg-[#0c0d0e] border border-[#c5a059]/30 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Priority Booking &amp; Due Diligence</span>
              <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white">
                Property Enquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Direct consultation with our senior acquisitions desk. Whether enquiring about Ashtech Presidential, Godrej Majesty, Grandthum by Group 108, or private portfolio acquisitions, our partners provide confidential guidance.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Direct builder allocations &amp; inventory access</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Complete legal title &amp; RERA verification</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Check className="w-4 h-4 text-[#c5a059]" />
                  <span>Confidential transaction structuring</span>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-6">
                <a
                  href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20real%20estate%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#131518] p-6 sm:p-8 rounded-2xl border border-white/10">
              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif-azimute text-xl text-white">Property Enquiry Received</h4>
                  <p className="text-xs text-white/70 max-w-sm mx-auto">
                    Our acquisitions director will reach out within two business hours with exhaustive brochures and scheduling details.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-xl bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
                  >
                    Send Another Enquiry
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
                        placeholder="e.g. Rahul Sharma"
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
                        placeholder="name@company.com"
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
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Project / Service of Interest</label>
                      <select 
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d0e] border border-white/15 text-white text-xs focus:border-[#c5a059] outline-none transition"
                      >
                        <option value="Ashtech Presidential (Sec 12, Greater Noida)">Ashtech Presidential (Greater Noida, Sector 12)</option>
                        <option value="Godrej Majesty (Sec 27, Greater Noida)">Godrej Majesty (Greater Noida, Sector 27)</option>
                        <option value="Grandthum by Group 108 (Greater Noida West)">Grandthum by Group 108 (Greater Noida West)</option>
                        <option value="Residential Properties">Residential Properties (Villas &amp; Penthouses)</option>
                        <option value="Commercial Properties">Commercial Properties (Offices &amp; Retail)</option>
                        <option value="Studio Apartments">Studio Apartments</option>
                        <option value="Rental &amp; Leasing Services">Rental &amp; Leasing Services</option>
                        <option value="New Projects">New Projects Launch</option>
                        <option value="Property Buying &amp; Selling">Property Buying &amp; Selling</option>
                        <option value="Property Consultation">Property Consultation &amp; Valuation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Requirements / Preferred Unit Size</label>
                    <textarea 
                      rows={3} 
                      value={contactForm.message} 
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                      placeholder="Mention budget range, timeline to purchase, or preferred unit configuration..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-[#c5a059] hover:bg-white text-[#0c0d0e] font-semibold text-xs uppercase tracking-widest transition cursor-pointer shadow-lg"
                  >
                    Enquire Now · Schedule Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-2xl border border-[#c5a059]/35 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] text-[#0c0d0e] flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#0c0d0e]/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border bg-[#c5a059]/15 text-[#9a7830] border-[#c5a059]/40 font-semibold">
                  {selectedProjectModal.badge}
                </span>
                <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border font-medium ${selectedProjectModal.statusColor || 'bg-black/5 text-[#0c0d0e]'}`}>
                  {selectedProjectModal.status}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProjectModal(null)} 
                className="text-[#0c0d0e]/60 hover:text-[#0c0d0e] p-1.5 rounded-lg bg-black/5 hover:bg-black/10 transition cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#c5a059]/20 shadow-md">
                <img 
                  src={selectedProjectModal.image} 
                  alt={selectedProjectModal.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#9a7830] font-bold">
                  Developer: {selectedProjectModal.developer}
                </span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0c0d0e] mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-[#555b66] flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{selectedProjectModal.location}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-[#f8f6f0] p-4 rounded-xl border border-[#e8e2d5] text-xs shadow-inner">
                <div>
                  <span className="text-[#717680] block text-[10px] uppercase tracking-wider font-medium">Property Type</span>
                  <span className="text-[#0c0d0e] font-semibold text-sm">{selectedProjectModal.type}</span>
                </div>
                <div>
                  <span className="text-[#717680] block text-[10px] uppercase tracking-wider font-medium">Price Range</span>
                  <span className="text-[#9a7830] font-bold text-base">{selectedProjectModal.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#717680] font-semibold">Architectural Narrative</span>
                <p className="text-xs text-[#373b42] leading-relaxed font-normal">
                  {selectedProjectModal.description}
                </p>
              </div>

              {selectedProjectModal.highlights && (
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#9a7830] font-bold">Key Highlights &amp; Amenities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProjectModal.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[#2d3138] font-medium bg-black/[0.02] p-2 rounded-lg border border-black/[0.04]">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#0c0d0e]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20am%20interested%20in%20${encodeURIComponent(selectedProjectModal.title)}%20(${encodeURIComponent(selectedProjectModal.developer)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition cursor-pointer text-center shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Brochure</span>
              </a>
              <button
                onClick={() => {
                  setSelectedProjectModal(null);
                  scrollToEnquiry(`Enquiry: ${selectedProjectModal.title} (${selectedProjectModal.developer})`);
                }}
                className="py-3 px-4 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center shadow-sm"
              >
                Contact Advisory Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
