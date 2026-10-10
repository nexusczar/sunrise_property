"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#5a5f67] font-light">
            Effective Date: January 1, 2026 · Sunrise Property (sunriseproperty.in)
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-[#2d3139]">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              1. Commitment to Client Confidentiality
            </h2>
            <p>
              Sunrise Property (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates a premier real estate advisory and turnkey interior design atelier based in Greater Noida West, India. We honor the utmost discretion in collecting, safeguarding, and processing your personal and spatial requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide when you enquire about residential or commercial properties, request project monographs, or commission interior design services:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#454950]">
              <li>Contact details: Full name, telephone number, WhatsApp contact, and email address.</li>
              <li>Spatial &amp; Acquisition Parameters: Property preferences, unit types, budget ranges, and site location preferences.</li>
              <li>Interior Design Briefs: Architectural blueprints, floor areas, stylistic preferences, and material specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              3. Purpose of Processing
            </h2>
            <p>
              The information you entrust to us is used strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#454950]">
              <li>Transmit verified project brochures, floor plans, and pricing updates for featured developments.</li>
              <li>Coordinate private site inspections and virtual architectural walkthroughs.</li>
              <li>Prepare bespoke interior concept designs, 2D layouts, 3D visualizations, and turnkey estimates.</li>
              <li>Communicate directly through our authorized desk via telephone, email, or WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              4. Data Protection &amp; Non-Disclosure
            </h2>
            <p>
              We enforce strict confidentiality standards. We do not sell, rent, monetize, or publicly distribute your personal information to third-party marketing networks or automated telemarketers. Information is shared only with verified real estate developers or certified contractors to the extent required to execute your requested transaction or fit-out.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-[#0f1115]">
              5. Official Contact Coordinates
            </h2>
            <p>
              For inquiries regarding your personal data or to request amendment or removal of your details, please contact our administrative desk:
            </p>
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
