"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E7E2D8] text-[#141A23] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#E7E2D8]">
          {/* Brand & Manifesto Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <div className="mb-5">
                <div className="relative h-16 w-56">
                  <Image
                    src="/images/logo-light.png"
                    alt="Sunrise Properties & Interior Design"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#646A74] max-w-md font-sans font-light">
                Curating high-arch architectural residences and bespoke interior pavilions. Where
                classical proportion and modern stillness converge for discerning patrons
                worldwide.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE5DC]/80 flex flex-wrap items-center gap-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#8F8B83] font-light">
                sunriseproperty.in • Edition 2024
              </span>
            </div>
          </div>

          {/* Real Estate Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#141A23] mb-5">
              REAL ESTATE
            </h4>
            <ul className="space-y-3 text-xs tracking-[0.08em] text-[#646A74] font-light">
              <li>
                <Link href="/real-estate?type=prime" className="hover:text-[#141A23] transition-colors">
                  Prime Estates
                </Link>
              </li>
              <li>
                <Link href="/real-estate?type=residences" className="hover:text-[#141A23] transition-colors">
                  Private Residences
                </Link>
              </li>
              <li>
                <Link href="/real-estate?type=waterfront" className="hover:text-[#141A23] transition-colors">
                  Waterfront Villas
                </Link>
              </li>
              <li>
                <Link href="/real-estate?type=monoliths" className="hover:text-[#141A23] transition-colors">
                  Architectural Monoliths
                </Link>
              </li>
            </ul>
          </div>

          {/* Interior Design Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#141A23] mb-5">
              INTERIOR DESIGN
            </h4>
            <ul className="space-y-3 text-xs tracking-[0.08em] text-[#646A74] font-light">
              <li>
                <Link href="/interior-design#disciplines" className="hover:text-[#141A23] transition-colors">
                  Bespoke Interiors
                </Link>
              </li>
              <li>
                <Link href="/interior-design#disciplines" className="hover:text-[#141A23] transition-colors">
                  Material Consultation
                </Link>
              </li>
              <li>
                <Link href="/interior-design#disciplines" className="hover:text-[#141A23] transition-colors">
                  Spatial Architecture
                </Link>
              </li>
              <li>
                <Link href="/interior-design#commissions" className="hover:text-[#141A23] transition-colors">
                  Custom Millwork
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Salon Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#141A23] mb-5">
              STUDIO &amp; SALON
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-[#646A74] font-light">
              <p>
                Pavilion Suite 37, Horizon Promenade,
                <br />
                BKC Waterfront, Mumbai, 400051
              </p>
              <p>
                <a
                  href="mailto:hello@sunriseproperty.in"
                  className="hover:text-[#141A23] transition-colors block"
                >
                  hello@sunriseproperty.in
                </a>
                <a
                  href="tel:+9102284920100"
                  className="hover:text-[#141A23] transition-colors block mt-0.5"
                >
                  +91 (022) 8492-0100
                </a>
              </p>
              <div className="pt-2 flex items-center gap-4 text-[10px] tracking-wider uppercase text-[#8F8B83]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141A23] transition-colors"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141A23] transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://wa.me/919820001234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#141A23] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8F8B83] tracking-[0.08em] font-light">
          <div>
            © 2024 Sunrise Property (sunriseproperty.in). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#141A23] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#141A23] transition-colors">
              Terms of Atelier
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#141A23] transition-colors">
              Spatial Index
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
