"use client";

import React from "react";

export default function AzimuteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#211f1c] text-[#fff7ec] px-[clamp(1.25rem,6.25vw,6rem)] pt-20 sm:pt-28 pb-14 border-t border-[#3d3832]"
      aria-labelledby="footer-invitation"
    >
      {/* Invitation Title */}
      <div className="mb-14 sm:mb-20">
        <p
          id="footer-invitation"
          className="font-serif-instrument text-[clamp(3.5rem,7.5vw,9rem)] leading-[0.94] tracking-[-0.025em] text-[#fff7ec]"
        >
          A new direction <br />
          <em className="italic text-[#dfb48d] font-normal not-italic">for living.</em>
        </p>
      </div>

      {/* Contact CTA Card */}
      <div className="bg-[#2a2723] border border-[#443e37] rounded-sm p-8 sm:p-12 mb-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <span className="text-[0.7rem] font-dm-sans tracking-[0.2em] uppercase text-[#dfb48d] block mb-2">
            EXCLUSIVE CONSULTATION
          </span>
          <h4 className="font-serif-instrument text-2xl sm:text-4xl text-[#fff7ec] font-normal mb-2">
            Discover the possibilities of Azimute.
          </h4>
          <p className="font-dm-sans text-sm text-[#f1e6d599] font-light max-w-lg">
            Speak directly with ASL residential advisors to receive launch conditions, detailed
            floor plans, and private presentation appointments.
          </p>
        </div>

        <a
          href="https://wa.me/5511944485903?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20Azimute%20Residences."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#dfb48d] text-[#211f1c] font-dm-sans text-sm font-medium tracking-wide rounded-sm transition-all duration-300 hover:bg-[#ebd0b8] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          Chat with ASL via WhatsApp →
        </a>
      </div>

      {/* Footer Top Strip: Wordmark, Address, Replay */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#3d3832]">
        {/* Brand wordmark */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-9 flex-shrink-0">
            <svg viewBox="0 0 120 140" fill="none" className="w-full h-full">
              <path
                d="M15 115 60 17 105 115"
                stroke="#cbb18d"
                strokeWidth="2"
              />
              <path
                d="M44 78 73 56 68 91 61 76Z"
                fill="#cbb18d"
              />
              <path
                d="M23 116H97"
                stroke="#cbb18d"
                strokeWidth="1"
              />
              <path
                d="M35 124a50 50 0 0 0 50-87"
                stroke="#cbb18d"
                strokeWidth="0.8"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-marcellus text-xl tracking-[0.2em] text-[#fff7ec]">
              AZIMUTE
            </span>
            <span className="font-dm-sans text-[0.55rem] tracking-[0.32em] uppercase text-[#c4b6a5]">
              RESIDENCES
            </span>
          </div>
        </div>

        {/* Address & Entity */}
        <p className="font-dm-sans text-xs sm:text-sm text-[#f1e6d5aa] leading-relaxed font-light">
          Vila Vitória · Mauá / SP
          <br />
          ASL Developer and Builder
        </p>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 font-dm-sans text-xs uppercase tracking-[0.16em] text-[#dfb48d] hover:text-[#fff7ec] transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </div>

      {/* Legal Disclaimer */}
      <p className="mt-8 text-[0.7rem] leading-relaxed text-[#f1e6d566] font-dm-sans font-light max-w-4xl">
        Illustrative perspectives. Furnishings, decoration, and landscaping are artistic suggestions.
        Final features and availability must be confirmed with ASL Developer and Builder.
      </p>
    </footer>
  );
}
