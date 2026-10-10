"use client";

import React, { useState } from "react";

export default function ProjectSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  const spacesGallery = [
    {
      title: "Connected Living",
      subtitle: "Living, dining, and kitchen seamlessly integrated with rich natural light",
      category: "01 / INTERIORS",
      tag: "Artistic rendering",
      img: "https://azimuteresidencial.com.br/assets/acervo/estar-integrado-horizontal-1280.webp",
    },
    {
      title: "Inside & Outside",
      subtitle: "Expansive gourmet balcony with charcoal grill and open horizons",
      category: "02 / OPEN AIR",
      tag: "Artistic rendering",
      img: "https://azimuteresidencial.com.br/assets/acervo/terraco-jardim-horizontal-sem-pessoa.webp",
    },
    {
      title: "Flavors & Gatherings",
      subtitle: "Outdoor gourmet pavilion with stone countertops and verdant gardens",
      category: "03 / GATHERINGS",
      tag: "Artistic rendering",
      img: "https://azimuteresidencial.com.br/assets/acervo/gourmet-jardim-horizontal-1280.webp",
    },
    {
      title: "A Pause on the Horizon",
      subtitle: "Curved swimming pool with timber sundeck and solarium",
      category: "04 / WELLNESS",
      tag: "Artistic rendering",
      img: "https://azimuteresidencial.com.br/assets/acervo/piscina-deck-horizontal-1280.webp",
    },
  ];

  return (
    <section
      id="project"
      className="project relative w-full bg-[#f3f0e9] text-[#262825] px-[clamp(1.25rem,6.25vw,6rem)] pt-16 sm:pt-24 pb-28 sm:pb-36 z-20"
      aria-labelledby="project-title"
    >
      {/* =====================================================================
          CHAPTER LABEL: "01 / THE PROJECT" | "VILA VITÓRIA · MAUÁ / SP"
         ===================================================================== */}
      <div className="flex items-center justify-between border-t border-[#534d432d] pt-6 text-[0.75rem] font-dm-sans tracking-[0.16em] uppercase text-[#68665e]">
        <span>01 / THE PROJECT</span>
        <span>VILA VITÓRIA · MAUÁ / SP</span>
      </div>

      {/* =====================================================================
          PROJECT HEADING GRID
         ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mt-16 sm:mt-24 mb-20 sm:mb-28">
        {/* Left Heading (Instrument Serif) */}
        <div className="lg:col-span-8">
          <h2
            id="project-title"
            className="font-serif-instrument font-normal text-[clamp(4.2rem,9.6vw,11.5rem)] leading-[0.92] tracking-[-0.02em] text-[#262825]"
          >
            <span className="block text-[0.78em] tracking-[0.005em]">LIFE IN A</span>
            <em className="block font-normal italic text-[1.08em] ml-[clamp(1.5rem,6vw,6rem)] text-[#87654c]">
              good direction.
            </em>
          </h2>
        </div>

        {/* Right Description */}
        <div className="lg:col-span-4 max-w-md pb-2 font-dm-sans text-[0.875rem] leading-[1.85] text-[#69655d]">
          <p className="text-[1.125rem] sm:text-[1.2rem] leading-[1.48] text-[#34352f] font-normal mb-5">
            Spaces that connect.
            <br />
            Room to live, gather, and belong.
          </p>
          <p className="font-light">
            In Vila Vitória, Mauá, discover Azimute: residences featuring seamlessly
            integrated spaces and private gourmet balconies, crafted by ASL.
          </p>
          <span className="block border-t border-[#534d432d] mt-7 pt-5 text-[0.625rem] tracking-[0.16em] text-[#68665e] uppercase">
            ASL DEVELOPER AND BUILDER
          </span>
        </div>
      </div>

      {/* =====================================================================
          FACTS METRICS: (63 and 67 m², 2 bedrooms, 1 or 2 parking spaces)
         ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-14 border-t border-[#534d432d]">
        {/* Metric 1 */}
        <div className="group">
          <div className="font-serif-instrument text-[clamp(2.8rem,4.8vw,4.6rem)] leading-none text-[#262825] mb-3 flex items-baseline">
            <span>63</span>
            <i className="font-serif-instrument italic text-[0.62em] text-[#87654c] mx-2">and</i>
            <span>67</span>
            <small className="font-dm-sans text-[0.45em] text-[#69655d] ml-2 tracking-normal font-light">
              m²
            </small>
          </div>
          <p className="text-[0.78rem] tracking-[0.14em] uppercase text-[#69655d] font-dm-sans">
            Apartment areas
          </p>
          <span className="text-xs text-[#87654c] font-light mt-1 block">
            Smart layouts with integrated outdoor balconies
          </span>
        </div>

        {/* Metric 2 */}
        <div className="group">
          <div className="font-serif-instrument text-[clamp(2.8rem,4.8vw,4.6rem)] leading-none text-[#262825] mb-3 flex items-baseline">
            <span>2</span>
            <small className="font-dm-sans text-[0.45em] text-[#69655d] ml-2.5 tracking-normal font-light">
              bedrooms
            </small>
          </div>
          <p className="text-[0.78rem] tracking-[0.14em] uppercase text-[#69655d] font-dm-sans">
            With 1 suite
          </p>
          <span className="text-xs text-[#87654c] font-light mt-1 block">
            Elevated comfort and privacy for the family
          </span>
        </div>

        {/* Metric 3 */}
        <div className="group">
          <div className="font-serif-instrument text-[clamp(2.8rem,4.8vw,4.6rem)] leading-none text-[#262825] mb-3 flex items-baseline">
            <span>1</span>
            <i className="font-serif-instrument italic text-[0.62em] text-[#87654c] mx-2">or</i>
            <span>2</span>
            <small className="font-dm-sans text-[0.45em] text-[#69655d] ml-2 tracking-normal font-light">
              parking
            </small>
          </div>
          <p className="text-[0.78rem] tracking-[0.14em] uppercase text-[#69655d] font-dm-sans">
            Per unit selection
          </p>
          <span className="text-xs text-[#87654c] font-light mt-1 block">
            Covered and designated spaces
          </span>
        </div>
      </div>

      {/* =====================================================================
          PHOTO JOURNEY HIGHLIGHTS (Perspectives of the Spaces)
         ===================================================================== */}
      <div className="mt-28 sm:mt-36 pt-14 border-t border-[#534d432d]" id="spaces">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[0.75rem] font-dm-sans tracking-[0.18em] uppercase text-[#87654c] block mb-2">
              ARCHITECTURAL PERSPECTIVES
            </span>
            <h3 className="font-serif-instrument text-3xl sm:text-5xl font-normal text-[#262825]">
              Environments sculpted for your well-being.
            </h3>
          </div>

          {/* Clean English Space Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-dm-sans">
            {spacesGallery.map((space, idx) => (
              <button
                key={space.title}
                type="button"
                onClick={() => setActivePhoto(idx)}
                className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                  activePhoto === idx
                    ? "bg-[#262825] text-[#f3f0e9] border-[#262825]"
                    : "border-[#534d432d] text-[#69655d] hover:border-[#262825] hover:text-[#262825]"
                }`}
              >
                {space.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Image Display */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-[#211f1c] shadow-lg group">
          <img
            src={spacesGallery[activePhoto].img}
            alt={spacesGallery[activePhoto].title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#dfb48d] font-dm-sans block mb-1">
                {spacesGallery[activePhoto].category}
              </span>
              <h4 className="font-serif-instrument text-2xl sm:text-4xl text-[#fff7ec]">
                {spacesGallery[activePhoto].title}
              </h4>
              <p className="text-xs sm:text-sm font-light text-[#f4e9dc] max-w-lg mt-1">
                {spacesGallery[activePhoto].subtitle}
              </p>
            </div>
            <div className="text-[0.7rem] text-[#f4e9dcaa] font-dm-sans">
              {spacesGallery[activePhoto].tag}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          LOCATION & ESSÊNCIA STRIP
         ===================================================================== */}
      <div className="mt-28 sm:mt-36 pt-16 border-t border-[#534d432d]" id="essence">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div>
            <span className="text-[0.75rem] font-dm-sans tracking-[0.18em] uppercase text-[#87654c] block mb-3">
              PRIME LOCATION
            </span>
            <h3 className="font-serif-instrument text-3xl sm:text-5xl font-normal text-[#262825] leading-tight mb-6">
              Vila Vitória: peaceful sanctuary with seamless connections in Mauá.
            </h3>
            <p className="font-dm-sans text-sm sm:text-base leading-relaxed text-[#69655d] font-light max-w-lg mb-8">
              Minutes away from premier retail centers, parks, transit axes, and Mauá station.
              A preserved residential neighborhood that elevates your everyday routine.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-dm-sans text-[#262825]">
              <span className="px-4 py-2 bg-[#eae5dc] rounded-lg">Near Mauá Plaza Shopping</span>
              <span className="px-4 py-2 bg-[#eae5dc] rounded-lg">Direct access to Rodoanel</span>
              <span className="px-4 py-2 bg-[#eae5dc] rounded-lg">Established tree-lined enclave</span>
            </div>
          </div>

          <div className="bg-[#e9e3d7] p-8 sm:p-12 rounded-sm border border-[#534d432d] flex flex-col justify-between">
            <span className="text-[0.6875rem] tracking-[0.24em] uppercase text-[#68665e] font-dm-sans mb-4">
              ASL DEVELOPER
            </span>
            <blockquote className="font-serif-instrument text-2xl sm:text-3xl italic text-[#262825] leading-relaxed mb-6">
              &ldquo;We design spaces where architecture, natural light, and refined convenience converge to create new horizons of living.&rdquo;
            </blockquote>
            <span className="text-xs font-dm-sans text-[#87654c] font-medium tracking-wide">
              ASL Architecture and Engineering Atelier
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
