"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppConcierge() {
  const pathname = usePathname();
  if (!pathname || pathname === "/" || pathname === "") return null;

  const [hovered, setHovered] = useState(false);
  const phoneNumber = "917835971222";

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Sunrise Property Desk, I would like to inquire regarding your architectural portfolio."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Discreet hover tooltip */}
      <div
        className={`hidden sm:block bg-[#181716] text-[#FAF8F5] text-[11px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full border border-[#333330] shadow-md transition-all duration-300 pointer-events-none ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat with Concierge
      </div>

      {/* Floating Button matching screenshot */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Direct WhatsApp Concierge"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.802.82 2.796.82 3.183 0 5.769-2.587 5.77-5.767 0-3.181-2.588-5.767-5.77-5.767zm7.643 5.766c0 4.22-3.434 7.653-7.643 7.653-1.332 0-2.607-.348-3.719-.997l-4.148 1.088 1.107-4.041c-.722-1.157-1.106-2.5-1.106-3.882 0-4.221 3.434-7.653 7.643-7.653 4.221 0 7.654 3.432 7.654 7.653z" />
        </svg>
      </button>
    </div>
  );
}
