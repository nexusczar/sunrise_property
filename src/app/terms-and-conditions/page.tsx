"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#0f1115] pt-32 pb-24 px-[6.25vw]">
      <div className="max-w-[960px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#0f1115] font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        <div className="border-b border-[#e2ded6] pb-8 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
            Legal Monograph
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-[#0f1115] mt-2 mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-[#5a5f67] font-light">
            Effective Date: January 1, 2026 · Sunrise Property (sunriseproperty.in)
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-[#2d3139]">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing the Sunrise Property website or engaging our real estate consultation and interior design services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion of these terms, please refrain from using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              2. Nature of Real Estate Information
            </h2>
            <p>
              Information published on this website regarding real estate developments (including Ashtech Presidential, Godrej Majesty, Grandthum, and other curated listings) is provided for informational and preliminary advisory purposes only:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#454950]">
              <li>Renderings, photographic representations, floor plans, and amenities are subject to developer modifications and statutory approvals.</li>
              <li>Price ranges, inventory availability, and payment plans are indicative and must be confirmed via official developer allotment contracts and registered RERA filings.</li>
              <li>Sunrise Property operates as an independent advisory firm and does not warrant absolute completeness of developer documentation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              3. Interior Design &amp; Turnkey Execution
            </h2>
            <p>
              All interior design commissions, space planning engagements, 3D visualizations, and turnkey execution contracts are governed by bilateral project agreements detailing exact scope, material schedules, bill of quantities (BOQ), payment milestones, and handover schedules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              4. Intellectual Property
            </h2>
            <p>
              All branding marks, logos, typography, visual layouts, curated project narratives, and graphic assets on this website are protected intellectual property of Sunrise Property or their respective developers and licensors. Reproduction or redistribution without written authorization is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and any disputes arising in connection with our services shall be governed by the laws of India, under the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar, Uttar Pradesh.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              6. Advisory Desk Contact
            </h2>
            <div className="p-6 rounded-xl bg-white border border-[#e8e4dc] space-y-2 mt-4 text-xs">
              <p className="flex items-center gap-2 font-medium text-[#0f1115]">
                <MapPin className="w-4 h-4 text-[#c5a059]" />
                Office A-722, Grandthum, Techzone 4, Greater Noida West, Uttar Pradesh, India
              </p>
              <p className="flex items-center gap-2 text-[#454950]">
                <Phone className="w-4 h-4 text-[#c5a059]" />
                +91 98703 89489 / WhatsApp: +91 78359 71222
              </p>
              <p className="flex items-center gap-2 text-[#454950]">
                <Mail className="w-4 h-4 text-[#c5a059]" />
                info@advikacreation.in
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
