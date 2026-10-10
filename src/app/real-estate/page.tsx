"use client";

import React, { useState } from "react";
import Image from "next/image";
import EnquiryModal from "@/components/EnquiryModal";

export default function RealEstatePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const [activeTab, setActiveTab] = useState("ALL");

  const properties = [
    {
      id: "travertine-villa",
      title: "The Travertine Villa",
      type: "COASTAL",
      badge: "COASTAL RESIDENCE",
      status: "ON REQUEST",
      location: "Alibaug Coastline, Maharashtra",
      image: "/images/hero-villa.jpg",
      beds: "5 Bed",
      area: "14,800 SQ FT",
      plot: "2.4 AC",
      price: "Private Tender",
      desc: "A striking coastal sanctuary featuring expansive floor-to-ceiling glazing, private infinity pool, and seamless indoor-outdoor living.",
    },
    {
      id: "skyline-residence",
      title: "The Skyline Residence",
      type: "PENTHOUSE",
      badge: "PENTHOUSE RESIDENCE",
      status: "PRIVATE LISTING",
      location: "Bandra West, Mumbai",
      image: "/images/skyline-dining.jpg",
      beds: "4 Bed",
      area: "6,450 SQ FT",
      plot: "34th Floor",
      price: "₹68 Cr ($8.2M)",
      desc: "Panoramic Arabian Sea views, private lift foyer, double-height volumes, and bespoke Italian marble finishes throughout.",
    },
    {
      id: "greenfield-terraces",
      title: "Greenfield Terraces",
      type: "ESTATE",
      badge: "ESTATE VILLA",
      status: "AVAILABLE",
      location: "Lonavala Highlands",
      image: "/images/serene-bedroom.jpg",
      beds: "6 Bed",
      area: "11,200 SQ FT",
      plot: "1.8 AC",
      price: "₹42 Cr ($5.1M)",
      desc: "Nestled into lush hillside topography with cantilevered decks, private spa courtyard, and natural stone fireplaces.",
    },
    {
      id: "amber-villa",
      title: "The Amber Reflection Villa",
      type: "COASTAL",
      badge: "WATERFRONT SANCTUARY",
      status: "OFF-MARKET",
      location: "Awas Beach, Alibaug",
      image: "/images/amber-villa.jpg",
      beds: "6 Bed",
      area: "16,500 SQ FT",
      plot: "3.2 AC",
      price: "On Confidential Request",
      desc: "Direct private shoreline access, reflection lagoon, subterranean wine cellar, and standalone guest pavilion.",
    },
    {
      id: "coastal-pavilion",
      title: "Monolith Horizon Pavilion",
      type: "ESTATE",
      badge: "ARCHITECTURAL MONOLITH",
      status: "NEW RELEASE",
      location: "Mandwa Jetty Enclave",
      image: "/images/coastal-pavilion.jpg",
      beds: "5 Bed",
      area: "13,400 SQ FT",
      plot: "2.1 AC",
      price: "₹55 Cr ($6.6M)",
      desc: "Constructed with board-formed concrete and warm teak wood, featuring 180-degree ocean vistas and private helipad access.",
    },
    {
      id: "lagoon-residence",
      title: "Lagoon Reflection Estate",
      type: "COASTAL",
      badge: "LAGOON RESIDENCE",
      status: "EXCLUSIVE",
      location: "Kashid Coast, Maharashtra",
      image: "/images/villa-lagoon.jpg",
      beds: "7 Bed",
      area: "18,200 SQ FT",
      plot: "4.5 AC",
      price: "Private Tender",
      desc: "An ultra-private compound bordered by pristine coconut groves, private natural water lagoon, and private wellness spa.",
    },
  ];

  const filteredProperties = properties.filter((prop) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "COASTAL") return prop.type === "COASTAL";
    if (activeTab === "PENTHOUSE") return prop.type === "PENTHOUSE";
    if (activeTab === "ESTATE") return prop.type === "ESTATE";
    if (activeTab === "OFF-MARKET") return prop.status.includes("OFF-MARKET") || prop.status.includes("PRIVATE");
    return true;
  });

  const handleInquire = (title: string) => {
    setSelectedProperty(title);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#141A23] overflow-x-hidden">
      {/* Top Bar */}
      <div className="border-b border-[#EAE6DF] bg-[#F7F5F0] pt-24 pb-3.5 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#8F8B83] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C29246]"></span>
            <span>REAL ESTATE DISCOVERY • CURATED ACTIVE PORTFOLIO 2024</span>
          </div>
          <div>Strict Bilateral NDA • Verified Provenance</div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto border-b border-[#EAE6DF]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8F8B83] block mb-2">
              CURATED PROPERTY COLLECTION
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl font-normal text-[#141A23]">
              Architectural Sanctums <br />
              <span className="italic font-light text-[#A87A36]">Across Prime Terrains.</span>
            </h1>
          </div>
          <p className="text-sm text-[#63615C] max-w-md leading-relaxed font-light">
            Every property in our portfolio is vetted through structural diagnostics, light ingress
            studies, and long-term provenance value before representation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-10">
          {[
            { id: "ALL", label: "ALL LISTINGS" },
            { id: "COASTAL", label: "COASTAL VILLAS" },
            { id: "PENTHOUSE", label: "URBAN PENTHOUSES" },
            { id: "ESTATE", label: "ESTATE SANCTUARIES" },
            { id: "OFF-MARKET", label: "DISCREET & OFF-MARKET" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[10px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full font-medium transition-colors cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-[#141A23] text-[#FAF8F5] border-[#141A23]"
                  : "bg-white text-[#63615C] border-[#EAE6DF] hover:border-[#C29246]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#141A23]/80 text-[#FAF8F5] text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-light">
                      {prop.badge}
                    </span>
                    <span className="bg-white/95 text-[#141A23] text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium">
                      {prop.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.16em] uppercase text-[#8F8B83] mb-1 font-light">
                    {prop.location}
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-normal text-[#141A23] mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-[#63615C] leading-relaxed mb-6 font-light">{prop.desc}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#EAE5DC] text-center mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8F8B83] block">
                        Bedrooms
                      </span>
                      <span className="text-xs font-medium text-[#141A23]">{prop.beds}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8F8B83] block">
                        Built-up
                      </span>
                      <span className="text-xs font-medium text-[#141A23]">{prop.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8F8B83] block">
                        Terrain
                      </span>
                      <span className="text-xs font-medium text-[#141A23]">{prop.plot}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[#8F8B83] uppercase tracking-wider text-[10px] font-light">
                      Guidance Value
                    </span>
                    <span className="font-medium text-[#141A23] font-serif-luxury text-base">
                      {prop.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleInquire(prop.title)}
                  className="w-full bg-[#141A23] hover:bg-[#202836] text-[#FAF8F5] text-[10px] tracking-[0.22em] uppercase py-3.5 rounded-xl font-medium transition-colors cursor-pointer"
                >
                  ENQUIRE ABOUT THIS PROPERTY
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discreet Acquisition Advisory */}
      <section className="bg-[#121212] text-white py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#C29246] block">
            • PRIVATE PORTFOLIO ACCESS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal">
            Seeking an Unlisted Off-Market Estate?
          </h2>
          <p className="text-sm leading-relaxed text-[#B3AEA2] max-w-xl mx-auto font-light">
            Over 60% of our architectural acquisitions occur privately without public marketing.
            Contact our Senior Director to register your acquisition criteria under bilateral NDA.
          </p>
          <div className="pt-4">
            <button
              onClick={() => handleInquire("Confidential Off-Market Search")}
              className="bg-[#C29246] hover:bg-[#A87A36] text-[#121212] text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full font-medium transition-colors cursor-pointer"
            >
              REQUEST CONFIDENTIAL ACCESS
            </button>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propertyTitle={selectedProperty}
        initialInterest="REAL ESTATE"
      />
    </div>
  );
}
