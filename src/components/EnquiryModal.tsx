"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  propertyTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  initialInterest = "BOTH DISCIPLINES",
  propertyTitle = "",
}: EnquiryModalProps) {
  const [interest, setInterest] = useState(initialInterest);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    timeline: "1 - 3 Months (Standard)",
    budget: "₹25 Cr – ₹50 Cr ($3M – $6M)",
    notes: propertyTitle ? `Inquiring about ${propertyTitle}. ` : "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#141A23] rounded-2xl border border-[#EAE6DF] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#63615C] hover:text-[#141A23] rounded-full hover:bg-[#EAE5DC]/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal tracking-wide">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#63615C] max-w-md mx-auto leading-relaxed font-light">
                Thank you, {formData.name || "Patron"}. A Senior Partner at Sunrise Property will
                review your spatial parameters under strict non-disclosure protocols and contact you
                within 24 hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#141A23] text-[#FAF8F5] text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full font-medium hover:bg-[#202836] transition-colors cursor-pointer"
                >
                  RETURN TO SANCTUARY
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#8F8B83] font-medium block mb-1">
                  CONFIDENTIAL INITIATION
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#141A23]">
                  Request a Private Consultation
                </h2>
                <p className="text-xs text-[#63615C] mt-2 font-light">
                  Please register your spatial requirements below. Every submission is treated under
                  strict bilateral non-disclosure protocols.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Interest Selector Pills */}
                <div>
                  <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-2">
                    PRIMARY AREA OF INTEREST *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["REAL ESTATE", "INTERIOR DESIGN", "BOTH DISCIPLINES"].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setInterest(item)}
                        className={`text-[10px] sm:text-[11px] tracking-[0.12em] uppercase py-2.5 px-2 rounded-lg font-medium transition-colors text-center border cursor-pointer ${
                          interest === item
                            ? "bg-[#141A23] text-[#FAF8F5] border-[#141A23]"
                            : "bg-white text-[#63615C] border-[#EAE6DF] hover:border-[#C29246]"
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
                    className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-sm text-[#141A23] focus:outline-none transition-colors"
                  />
                </div>

                {/* Contact row */}
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
                      className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-sm text-[#141A23] focus:outline-none transition-colors"
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
                      className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-sm text-[#141A23] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Horizon & Budget row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                      PROJECTED HORIZON / TIMELINE
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-3.5 py-2.5 rounded-lg text-xs text-[#141A23] focus:outline-none transition-colors"
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
                      className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-3.5 py-2.5 rounded-lg text-xs text-[#141A23] focus:outline-none transition-colors"
                    >
                      <option>₹25 Cr – ₹50 Cr ($3M – $6M)</option>
                      <option>₹50 Cr – ₹100 Cr ($6M – $12M)</option>
                      <option>₹100 Cr+ ($12M+)</option>
                      <option>Bespoke Architecture Fee</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#63615C] block mb-1">
                    DETAILED BRIEF &amp; SPATIAL SPECIFICATIONS
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Outline key preferences: desired areas/locations, square footage, architectural aesthetic (e.g., brutalist limestone, tropical modernism), structural chambers, or bespoke entertaining amenities..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-[#EAE6DF] focus:border-[#C29246] px-4 py-2.5 rounded-lg text-xs leading-relaxed text-[#141A23] focus:outline-none font-light"
                  />
                </div>

                {/* Submit button & NDA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#141A23] hover:bg-[#202836] text-[#FAF8F5] text-xs tracking-[0.24em] uppercase py-3.5 rounded-xl font-medium transition-colors cursor-pointer"
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
      </div>
    </div>
  );
}
