"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppConcierge() {
  const phoneNumber = "917835971222";

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Sunrise Property Desk, I would like to inquire regarding your architectural portfolio."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 px-4.5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider shadow-2xl shadow-[#25D366]/30 transition hover:scale-105 ring-4 ring-[#25D366]/20 cursor-pointer"
        aria-label="Direct WhatsApp Concierge"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>WhatsApp Concierge</span>
      </button>
    </div>
  );
}
