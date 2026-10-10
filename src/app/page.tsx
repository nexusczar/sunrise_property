"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Building2, 
  Paintbrush, 
  Sparkles, 
  Check, 
  Copy, 
  X, 
  Play, 
  Compass,
  Bed,
  Bath,
  Maximize,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Menu,
  Send,
  CheckCircle2,
  SlidersHorizontal,
  Layers,
  Wrench,
  Home,
  RotateCcw
} from 'lucide-react';

type Page = 'home' | 'about' | 'real-estate' | 'interior' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnimationsModal, setShowAnimationsModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);
  const [realEstateFilter, setRealEstateFilter] = useState<string>('ALL');
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);
  
  // Entrance Opening Animation state
  const [entranceActive, setEntranceActive] = useState<boolean>(true);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Advisory & Acquisition',
    message: ''
  });

  // Handle URL hash on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'real-estate', 'interior', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    }
  }, []);

  // Automatically conclude opening entrance after 2.8s
  useEffect(() => {
    if (entranceActive) {
      const timer = setTimeout(() => {
        setEntranceActive(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [entranceActive]);

  // Scroll detection: activates navbar background color from the second page / section onward
  const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') {
        setIsScrolledPastHero(true);
        return;
      }
      if (containerRef.current) {
        const heroHeight = containerRef.current.offsetHeight;
        // Section 01 (the second page/section) slides up when scroll reaches ~78% of the hero track
        const threshold = heroHeight - window.innerHeight * 0.9;
        setIsScrolledPastHero(window.scrollY >= threshold);
      } else {
        setIsScrolledPastHero(window.scrollY > 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const showNavbarBg = currentPage !== 'home' || isScrolledPastHero;

  // Scroll tracking for Home hero animation
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Inertial smooth spring (tuned for cinematic natural scrub)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 26,
    mass: 1.1,
    restDelta: 0.0005
  });

  // ================================================================
  // GSAP-CALIBRATED SCROLL TIMELINE (azimuteresidencial.com.br)
  // Height: 380svh (Extended runway for full-page logo & name showcase)
  // ================================================================

  // 1. Initial Morning Hero Copy Fade Out
  const heroContentOpacity = useTransform(smoothProgress, [0.06, 0.22], [1, 0]);
  const heroContentY = useTransform(smoothProgress, [0.06, 0.22], [0, -50]);
  const heroSideOpacity = useTransform(smoothProgress, [0.04, 0.18], [1, 0]);

  // 2. Day to Night Facade Crossfade
  const heroNightOpacity = useTransform(smoothProgress, [0.08, 0.38], [0, 1]);

  // 3. Facade fades out as the Crystal Universe background emerges
  const heroBuildingPresence = useTransform(smoothProgress, [0.42, 0.54], [1, 0]);

  // 4. Crystal Universe Atmospheric Background Reveal
  const crystalAtmosphereOpacity = useTransform(smoothProgress, [0.38, 0.52], [0, 1]);
  const crystalAtmosphereScale = useTransform(smoothProgress, [0.38, 0.95], [1.02, 1.10]);

  // 5. EXTENDED FULL-PAGE LOGO & NAME SHOWCASE
  // Reaches full 100% opacity by 0.52 and STAYS FULLY VISIBLE & PINNED until 0.82!
  const reframeOpacity = useTransform(smoothProgress, [0.44, 0.54, 0.82, 0.90], [0, 1, 1, 0]);
  const reframeScale = useTransform(smoothProgress, [0.46, 0.82], [0.95, 1.03]);
  const reframeLetterSpacing = useTransform(smoothProgress, [0.46, 0.82], ['0.06em', '0.12em']);
  const reframeY = useTransform(smoothProgress, [0.46, 0.82], [24, -8]);
  const reframeSymbolScale = useTransform(smoothProgress, [0.46, 0.62, 0.82], [0.9, 1.05, 1.0]);

  // 6. Section 01 Closing Handoff (1st page ending animation curtain)
  const endClosingDarkness = useTransform(smoothProgress, [0.78, 0.96], [0, 0.72]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const simulateScroll = (targetRatio: number) => {
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.scrollHeight;
    window.scrollTo({
      top: totalHeight * targetRatio,
      behavior: 'smooth'
    });
  };

  const runFullScrubDemo = () => {
    if (currentPage !== 'home') setCurrentPage('home');
    setShowAnimationsModal(false);
    setTimeout(() => simulateScroll(0), 100);
    setTimeout(() => simulateScroll(0.28), 1000);
    setTimeout(() => simulateScroll(0.66), 2800);
    setTimeout(() => simulateScroll(1.0), 5500);
    setTimeout(() => simulateScroll(0), 8500);
  };

  const replayEntranceIntro = () => {
    setShowAnimationsModal(false);
    if (currentPage !== 'home') setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setEntranceActive(true);
  };

  // Top Picks specifically requested by user
  const topPickProjects = [
    {
      id: 'ashtech-presidential',
      title: 'Ashtech Presidential',
      developer: 'Ashtech',
      category: 'GREATER NOIDA',
      badge: 'TOP PICK',
      status: 'Under Construction',
      statusColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      location: 'Greater Noida, Sector 12',
      price: '₹26.1 L – ₹48.5 L',
      type: 'Residential Apartments',
      beds: '1, 2 & 3 BHK',
      area: '650 – 1,450 SQ FT',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: 'Sophisticated multi-tier residential development with Olympic-grade clubhouse, private elevators, landscaped sky balconies, and supreme sector connectivity.',
      highlights: ['Prime Sector 12 Connectivity', 'Clubhouse & Gymnasium', 'Children Play Zone', '24x7 Tier-3 Security']
    },
    {
      id: 'godrej-majesty',
      title: 'Godrej Majesty',
      developer: 'Godrej Properties',
      category: 'GREATER NOIDA',
      badge: 'TOP PICK',
      status: 'Ready to Move',
      statusColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      location: 'Greater Noida, Sector 27',
      price: '₹1.90 Cr – ₹4 Cr',
      type: '2, 3 & 4 BHK Apartments',
      beds: '2, 3 & 4 BHK',
      area: '1,950 – 3,800 SQ FT',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Ultra-luxury high-rise sanctuary by Godrej Properties featuring Olympic-grade amenities, infinity pool, and panoramic forest corridor vistas.',
      highlights: ['Forest Views & Clean Air', 'Immediate Possession Available', 'Olympic Length Lap Pool', 'White-Glove Concierge']
    },
    {
      id: 'grandthum',
      title: 'Grandthum by Group 108',
      developer: 'Group 108',
      category: 'GREATER NOIDA',
      badge: 'TOP PICK',
      status: 'Under Construction',
      statusColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      location: 'Techzone 4, Greater Noida West',
      price: '₹50 L – ₹3 Cr',
      type: 'Office Spaces, Studio Apartments & Retail Shops',
      beds: 'Studio, Retail & Office',
      area: '550 – 4,800 SQ FT',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Iconic twin-tower commercial and mixed-use landmark featuring an artificial water canal boulevard, dining decks, and retail high street.',
      highlights: ['Iconic Twin-Tower Landmark', 'Canal Dining Boulevard', 'High-Footfall Retail Street', 'Grade-A Corporate Offices']
    }
  ];

  // 7 Core Real Estate Services
  const realEstateServices = [
    {
      title: 'Residential Properties',
      tag: 'Villas & Penthouses',
      desc: 'Prime luxury residences, bespoke villas, waterfront bungalows, and penthouses curated for discerning homeowners.'
    },
    {
      title: 'Commercial Properties',
      tag: 'Offices & High-Street',
      desc: 'Strategic high-street retail, Grade-A office suites, and mixed-use commercial destinations with superior footfall and capital appreciation.'
    },
    {
      title: 'Studio Apartments',
      tag: 'High-Yield Assets',
      desc: 'Smart, efficient, and beautifully finished modern studio suites ideal for urban living and high rental yields.'
    },
    {
      title: 'Rental & Leasing Services',
      tag: 'Asset Management',
      desc: 'End-to-end leasing management, verified corporate tenancy onboarding, and hassle-free white-glove property upkeep.'
    },
    {
      title: 'New Projects',
      tag: 'Verified Launches',
      desc: 'Early pre-launch access and construction-linked payment plans with India’s leading trusted real estate developers.'
    },
    {
      title: 'Property Buying & Selling',
      tag: 'Confidential Broking',
      desc: 'Discreet buyer-seller representation, seamless title vetting, transparent deal structuring, and prompt conveyance execution.'
    },
    {
      title: 'Property Consultation',
      tag: 'Strategic Advisory',
      desc: 'Institutional-grade valuation, market forecasting, legal due diligence, and bespoke portfolio structuring.'
    }
  ];

  // Interior Design Detailed Disciplines
  const interiorDisciplines = {
    design: [
      { name: 'Concept Design', desc: 'Custom visual moodboards, architectural theme definitions, and spatial narratives tailored to lifestyle aspirations.' },
      { name: 'Space Planning', desc: 'Precision layout flow, circulation zoning, natural daylight ingress analysis, and ergonomic volume optimization.' },
      { name: '2D Drawings', desc: 'Exhaustive civil blueprints, detailed MEP coordination layouts, electrical schematics, and elevation sections.' },
      { name: '3D Visualization', desc: 'Photorealistic, ray-traced 3D visual walkthroughs and lighting simulations before execution begins.' },
      { name: 'Material Selection', desc: 'Honed travertine, Italian marble book-matching, grain-matched European hardwoods, and artisanal brass hardware.' }
    ],
    execution: [
      { name: 'Civil Work', desc: 'Precision structural demolition, masonry alterations, waterproofing membranes, and engineering restructuring.' },
      { name: 'Carpentry', desc: 'Bespoke architectural joinery, walk-in wardrobes, fluted wall treatments, and floating custom cabinetry.' },
      { name: 'Electrical', desc: 'Concealed automation conduits, Lutron architectural dimming, low-glare magnetic track lights, and ambient cove lighting.' },
      { name: 'Plumbing', desc: 'Concealed pressure-tested sanitary lines, thermostatic valves, artisanal marble sinks, and premium European fixtures.' },
      { name: 'False Ceiling', desc: 'Minimalist shadow-reveal architectural drywall ceilings, acoustic dampening, and seamless recessed linear AC slots.' },
      { name: 'Flooring', desc: 'Monolithic Roman travertine, Calacatta marble slab installation, herringbone engineered hardwood, and micro-cement.' },
      { name: 'Painting', desc: 'Artisanal Italian lime washes, mineral micro-plaster, breathable textured Venetian stucco, and smooth matte finishes.' }
    ],
    specialized: [
      { name: 'Residential', desc: 'Ultra-luxury waterfront estates, duplex penthouses, and private family sanctuaries crafted for stillness.' },
      { name: 'Commercial', desc: 'Corporate headquarters, discreet family offices, and executive suites engineered for focus and executive prestige.' },
      { name: 'Retail', desc: 'High-end luxury flagship boutiques, concept showrooms, and curated spatial branding environments.' },
      { name: 'Hospitality', desc: 'Boutique eco-resorts, experiential restaurants, intimate speakeasies, and private member clubs.' },
      { name: 'Furniture Design', desc: 'Custom bespoke furniture prototyping, sculptural stone tables, monolithic credenzas, and tailored upholstery.' },
      { name: 'Renovation', desc: 'Full-scale structural retrofitting, heritage revitalizations, and turnkey transformational modernizations.' }
    ]
  };

  // Comprehensive Property Catalog
  const allProperties = [
    ...topPickProjects,
    {
      id: 'travertine-villa',
      title: 'The Travertine Villa',
      developer: 'Sunrise Atelier Private Estates',
      category: 'COASTAL',
      badge: 'COASTAL RESIDENCE',
      status: 'Ready for Possession',
      statusColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      location: 'Alibaug Coastline, Maharashtra',
      price: 'Private Tender',
      type: 'Luxury Villa',
      beds: '5 Bed',
      area: '14,800 SQ FT',
      image: '/images/hero-villa.jpg',
      description: 'A striking coastal sanctuary featuring expansive floor-to-ceiling glazing, private infinity pool, and seamless indoor-outdoor living.',
      highlights: ['Direct Shoreline Access', 'Infinity Edge Pool', 'Monolithic Hearth', 'Subterranean Cellar']
    },
    {
      id: 'skyline-residence',
      title: 'The Skyline Residence',
      developer: 'Sunrise Atelier Penthouses',
      category: 'PENTHOUSE',
      badge: 'PENTHOUSE RESIDENCE',
      status: 'Ready for Possession',
      statusColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      location: 'Bandra West, Mumbai',
      price: '₹68 Cr ($8.2M)',
      type: 'Penthouse Residence',
      beds: '4 Bed',
      area: '6,450 SQ FT',
      image: '/images/skyline-dining.jpg',
      description: 'Panoramic Arabian Sea views, private elevator foyer, double-height volumes, and bespoke Italian marble finishes throughout.',
      highlights: ['Arabian Sea Vistas', 'Private Lift Foyer', 'Double-Height Living', 'Automated Shading']
    },
    {
      id: 'greenfield-terraces',
      title: 'Greenfield Terraces',
      developer: 'Highland Living Group',
      category: 'ESTATE',
      badge: 'ESTATE VILLA',
      status: 'Ready for Possession',
      statusColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      location: 'Lonavala Highlands',
      price: '₹42 Cr ($5.1M)',
      type: 'Hillside Villa',
      beds: '6 Bed',
      area: '11,200 SQ FT',
      image: '/images/serene-bedroom.jpg',
      description: 'Nestled into lush hillside topography with cantilevered decks, private spa courtyard, and natural stone fireplaces.',
      highlights: ['Hillside Sanctuary', 'Cantilevered Decks', 'Spa Courtyard', 'Stone Fireplace']
    },
    {
      id: 'amber-villa',
      title: 'The Amber Reflection Villa',
      developer: 'Sunrise Atelier Private Estates',
      category: 'COASTAL',
      badge: 'OFF-MARKET',
      status: 'Off-Market Tender',
      statusColor: 'bg-[#c5a059]/15 text-[#a6833d] border-[#c5a059]/30',
      location: 'Awas Beach, Alibaug',
      price: 'On Confidential Request',
      type: 'Waterfront Estate',
      beds: '6 Bed',
      area: '16,500 SQ FT',
      image: '/images/amber-villa.jpg',
      description: 'Direct private shoreline access, reflection lagoon, subterranean wine cellar, and standalone guest pavilion.',
      highlights: ['Reflection Lagoon', 'Wine Cellar', 'Guest Pavilion', 'Private Heliport']
    },
    {
      id: 'coastal-pavilion',
      title: 'Monolith Horizon Pavilion',
      developer: 'Sunrise Architecture Atelier',
      category: 'ESTATE',
      badge: 'ARCHITECTURAL MONOLITH',
      status: 'New Release',
      statusColor: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
      location: 'Mandwa Jetty Enclave',
      price: '₹55 Cr ($6.6M)',
      type: 'Architectural Monolith',
      beds: '5 Bed',
      area: '13,400 SQ FT',
      image: '/images/coastal-pavilion.jpg',
      description: 'Constructed with board-formed concrete and warm teak wood, featuring 180-degree ocean vistas and private helipad access.',
      highlights: ['Board-Formed Concrete', '180° Ocean Vistas', 'Teak Wood Joinery', 'Helipad Access']
    }
  ];

  const filteredProperties = realEstateFilter === 'ALL' 
    ? allProperties 
    : allProperties.filter(p => p.category === realEstateFilter);

  // Interior Portfolio Monographs
  const interiorProjects = [
    {
      id: 'travertine-living',
      title: 'The Travertine Living Pavilion',
      category: 'Residential Architecture',
      location: 'Alibaug Coast',
      image: '/images/travertine-living.jpg',
      year: '2024',
      description: 'Double-height volume anchored by a hand-carved Roman travertine monolith, grain-matched European oak millwork, and museum-grade art illumination.'
    },
    {
      id: 'serene-suite',
      title: 'Serene Master Suite',
      category: 'Interior Architecture',
      location: 'Lonavala Highlands',
      image: '/images/serene-bedroom.jpg',
      year: '2024',
      description: 'Acoustically isolated private retreat featuring bespoke linen-paneled walls, floating walnut headboard, and soft atmospheric cove lighting.'
    },
    {
      id: 'skyline-dining',
      title: 'The Skyline Dining Room',
      category: 'Penthouse Interior',
      location: 'Bandra West, Mumbai',
      image: '/images/skyline-dining.jpg',
      year: '2023',
      description: 'Curated 12-seat Calacatta marble dining table framed by floor-to-ceiling panoramic glass, hand-cast bronze lighting, and private sommelier bar.'
    },
    {
      id: 'courtyard-living',
      title: 'Courtyard Living & Water Garden',
      category: 'Sanctuary Interior',
      location: 'Kashid Coast',
      image: '/images/courtyard-living.jpg',
      year: '2024',
      description: 'Seamless transition between internal living volume and external reflection pool with fluted timber screens and weathered bronze accents.'
    }
  ];

  const antigravityPrompt = `Create the exact scroll-scrubbed cinematic hero animation for Sunrise Property:

1. Viewport & Scroll Pinning:
- 380vh scroll track with a pinned 100vh full-bleed sticky viewport.
- Smooth bidirectional inertial scroll scrubbing (Framer Motion useScroll/useSpring or GSAP ScrollTrigger with scrub: 0.65, pin: true).

2. Architectural Lighting & Solar Cycle:
- 0% - 20%: DAY PERSPECTIVE (Bright morning sunlight on the facade, Sunrise Property headline, side typography "ARCHITECTURE · LIGHT · LIVING", explore indicator).
- 10% - 38%: DAY TO NIGHT CROSSFADE (Smooth dissolve to illuminated night facade with lit windows, glowing balcony railings, and dusk sky).
- 42% - 54%: FACADE DISSOLVE (Building fades away as the atmospheric crystalline cosmos emerges).

3. EXTENDED FULL-PAGE LOGO & NAME REVEAL (Stage 4):
- 50% - 85% Scroll: The logo and name animation occupies the ENTIRE viewport and remains 100% VISIBLE across this broad scroll range.
- Elements:
  * Animated geometric crystal emblem SVG (viewBox="0 0 120 140") with crystal gradient fill, golden border strokes, bearing pointer, and orbit arc.
  * "ATELIER MONOGRAPH" in letter-spacing: 0.3em.
  * Monumental serif "SUNRISE" in clamp(4.5rem, 13vw, 15rem) with metallic luxury gradient text fill.
  * "PROPERTIES & BESPOKE INTERIOR ATELIER" in letter-spacing: 0.28em.
  * Subtle floating scroll indicator: "SCROLL TO EXPLORE PORTFOLIO ↓".

4. 1st PAGE CLOSING ANIMATION (Stage 5):
- 80% - 100%: Sticky viewport darkens into deep obsidian shade as Section 01 slides up and rolls over the sticky frame like an architectural curtain.

5. ENTRANCE INTRO ANIMATION:
- Fullscreen opening curtain where golden strokes of the crystal emblem draw in, followed by light beam gleam, text reveal, and upward curtain wipe into the daylight hero.`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(antigravityPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d0e] text-[#faf8f5] selection:bg-[#c5a059] selection:text-[#0c0d0e] font-sans antialiased overflow-x-clip">
      
      {/* ================================================================ */}
      {/* 0. FULLSCREEN OPENING ENTRANCE ANIMATION                         */}
      {/* ================================================================ */}
      <AnimatePresence>
        {entranceActive && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
              clipPath: 'inset(0% 0% 100% 0%)',
              transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] }
            }}
            className="fixed inset-0 z-50 bg-[#0c0d0e] flex flex-col items-center justify-center text-center text-[#faf8f5] select-none"
          >
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-radial from-[#c5a059]/15 via-transparent to-transparent pointer-events-none" />

            {/* Light Sweep Beam */}
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 0.7, 0] }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#faf8f5]/20 to-transparent pointer-events-none -skew-x-12"
            />

            {/* Entrance Identity Lockup */}
            <div className="relative z-10 flex flex-col items-center max-w-xl px-6">
              
              {/* Top Eyebrow */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-6"
              >
                SUNRISE PROPERTY PRESENTS
              </motion.span>

              {/* Official Sunrise Property Brand Logo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
                className="mb-8 relative"
              >
                <div className="absolute inset-0 bg-[#c5a059]/20 blur-3xl rounded-full scale-125 pointer-events-none" />
                <img 
                  src="/images/logo-light.png" 
                  alt="Sunrise Property - Properties & Interior Design" 
                  className="w-44 sm:w-56 md:w-64 h-auto object-contain mx-auto drop-shadow-[0_0_40px_rgba(197,160,89,0.4)] relative z-10" 
                />
              </motion.div>

              {/* SUNRISE Name with Reveal */}
              <motion.h1 
                initial={{ opacity: 0, y: 15, letterSpacing: '0.04em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.12em' }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                className="font-serif-azimute text-5xl sm:text-7xl md:text-8xl leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                SUNRISE
              </motion.h1>

              {/* Caption */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mt-4"
              >
                PROPERTIES &amp; BESPOKE INTERIOR ATELIER
              </motion.span>
            </div>

            {/* Skip Button */}
            <button
              onClick={() => setEntranceActive(false)}
              className="absolute top-8 right-8 text-xs tracking-wider uppercase text-white/70 hover:text-white flex items-center gap-1.5 transition cursor-pointer px-4 py-2 rounded-full border border-white/15 hover:border-[#c5a059]/50"
            >
              <span>Skip Intro</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* 1. EXACT FIXED NAVBAR: STRICT 5 MENU PAGES & BRAND LOGO        */}
      {/* ================================================================ */}
      <header className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between px-[6.25vw] transition-all duration-300 pointer-events-auto ${
        showNavbarBg 
          ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-2xl py-3.5 sm:py-4' 
          : 'bg-transparent border-transparent py-4 sm:py-5'
      }`}>
        {/* Brand Logo from public/images/logo-light.png */}
        <button 
          onClick={() => navigateTo('home')} 
          className="flex items-center gap-3.5 group cursor-pointer transition text-left"
          aria-label="Sunrise Property Home"
        >
          <img 
            src="/images/logo-light.png" 
            alt="Sunrise Property - Properties & Interior Design" 
            className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow transition-transform duration-300 group-hover:scale-105" 
          />
        </button>

        {/* Navigation Menu: EXACTLY 5 REQUIRED PAGES */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] xl:text-[13px] tracking-[0.16em] uppercase font-sans">
          <button 
            onClick={() => navigateTo('home')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'home' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('about')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'about' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            About Us
          </button>
          <button 
            onClick={() => navigateTo('real-estate')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'real-estate' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Real Estate
          </button>
          <button 
            onClick={() => navigateTo('interior')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'interior' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Interior Design
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'contact' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Section: Enquire CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c5a059]/40 hover:border-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-widest font-medium transition cursor-pointer shadow-sm"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer: EXACTLY 5 REQUIRED PAGES */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-35 bg-[#0c0d0e]/98 backdrop-blur-xl border-b border-[#c5a059]/25 p-6 flex flex-col gap-4 text-xs uppercase tracking-widest lg:hidden shadow-2xl"
          >
            <button onClick={() => navigateTo('home')} className={`text-left py-2.5 transition ${currentPage === 'home' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`text-left py-2.5 transition ${currentPage === 'about' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>About Us</button>
            <button onClick={() => navigateTo('real-estate')} className={`text-left py-2.5 transition ${currentPage === 'real-estate' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Real Estate</button>
            <button onClick={() => navigateTo('interior')} className={`text-left py-2.5 transition ${currentPage === 'interior' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Interior Design</button>
            <button onClick={() => navigateTo('contact')} className={`text-left py-2.5 transition ${currentPage === 'contact' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* 2. HOME PAGE (EXACT CINEMATIC SCROLL EXPERIENCE + SUNRISE DATA) */}
      {/* ================================================================ */}
      {currentPage === 'home' && (
        <main>
          {/* HERO SECTION WITH EXTENDED TRACK (height: 380svh) */}
          <section ref={containerRef} className="relative h-[380svh] bg-[#0c0d0e]" id="inicio">
            <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden text-[#faf8f5]">
              
              {/* -------------------------------------------------------- */}
              {/* STAGE A: BUILDING ARCHITECTURAL RENDER (Day & Night)    */}
              {/* -------------------------------------------------------- */}
              <motion.div 
                style={{ opacity: heroBuildingPresence }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Day Facade */}
                <img 
                  className="w-full h-full object-cover object-[58%_48%]"
                  src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-1920.webp"
                  alt="Sunrise Property Architecture - Day"
                />

                {/* Night Facade */}
                <motion.img 
                  style={{ opacity: heroNightOpacity }}
                  className="absolute inset-0 w-full h-full object-cover object-[58%_48%] pointer-events-none"
                  src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-noite-1920.webp"
                  alt="Sunrise Property Architecture - Night"
                  aria-hidden="true"
                />

                {/* Dual Ambient Shade */}
                <div 
                  className="absolute inset-0 pointer-events-none" 
                  style={{
                    background: 'linear-gradient(90deg, rgba(12,13,14,0.45), transparent 60%), linear-gradient(0deg, rgba(12,13,14,0.7), transparent 58%, rgba(12,13,14,0.25))'
                  }}
                />

                <div className="absolute right-[6.25vw] bottom-[76px] text-[0.75rem] text-[#faf8f5]/70 pointer-events-none">
                  Architectural Rendering
                </div>
              </motion.div>

              {/* Side text: ARCHITECTURE · LIGHT · LIVING (Vertical) */}
              <motion.div 
                style={{ opacity: heroSideOpacity }}
                className="hidden md:block absolute right-[2.7vw] top-[42%] text-[0.75rem] tracking-[0.2em] text-[#faf8f5]/60 pointer-events-none [writing-mode:vertical-rl]"
              >
                ARCHITECTURE · LIGHT · LIVING
              </motion.div>

              {/* Bottom scroll indicator: EXPLORE */}
              <motion.div 
                style={{ opacity: heroSideOpacity }}
                className="absolute bottom-6 left-[6.25vw] flex items-center gap-[18px] pointer-events-none"
                aria-hidden="true"
              >
                <span className="text-[0.625rem] tracking-[0.2em] text-[#faf8f5]/75 uppercase">EXPLORE</span>
                <div className="h-[58px] w-[1px] bg-white/25 overflow-hidden relative">
                  <div className="w-full h-8 bg-[#c5a059] animate-scroll-cue" />
                </div>
              </motion.div>

              {/* Initial Left Hero Content (Calibrated size & position from reference image) */}
              <motion.div 
                style={{ 
                  opacity: heroContentOpacity,
                  y: heroContentY 
                }}
                className="absolute left-[6.25vw] bottom-[15%] max-w-[580px] z-20 pointer-events-auto"
              >
                <p className="flex items-center gap-4 text-[#c5a059] text-[0.75rem] tracking-[0.15em] uppercase mb-5 sm:mb-[25px]">
                  <span className="w-8 h-[1px] bg-[#c5a059] inline-block" />
                  SUNRISE PROPERTY • ARCHITECTURAL DISCOVERY
                </p>

                <h1 className="font-serif-azimute mb-6 sm:mb-[34px] text-white drop-shadow-xl">
                  <span className="block text-[clamp(2.35rem,3.8vw,4.5rem)] leading-[0.94] tracking-[-0.015em]">
                    YOUR NEXT
                  </span>
                  <em className="block italic font-serif-azimute text-[clamp(3.35rem,5.6vw,6.5rem)] leading-[0.86] mt-1 ml-[4vw] sm:ml-[6.5vw] text-[#faf8f5]">
                    horizon.
                  </em>
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-[50px] sm:items-end">
                  <p className="text-[0.9375rem] sm:text-[1rem] leading-[1.65] text-[#e2ded7] font-sans drop-shadow max-w-[280px]">
                    A bespoke direction for living.<br />
                    Real Estate &amp; Interior Atelier.
                  </p>

                  <a 
                    className="inline-flex items-center gap-4 sm:gap-5 text-sm sm:text-base text-white hover:text-[#c5a059] group cursor-pointer drop-shadow transition"
                    href="#intro-services"
                    onClick={(e) => { e.preventDefault(); simulateScroll(0.66); }}
                  >
                    <span className="tracking-wide">Explore Collection</span>
                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/50 flex items-center justify-center text-lg sm:text-xl group-hover:bg-[#c5a059] group-hover:text-[#0c0d0e] group-hover:border-[#c5a059] transition duration-300 bg-black/10">
                      ↓
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* STAGE B: 3D CRYSTAL UNIVERSE ATMOSPHERE                  */}
              {/* -------------------------------------------------------- */}
              <motion.div 
                style={{ 
                  opacity: crystalAtmosphereOpacity,
                  scale: crystalAtmosphereScale 
                }}
                className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-hidden"
              >
                {/* Background asset */}
                <div 
                  className="absolute inset-[-10%] bg-cover bg-center brightness-[0.72] contrast-[1.15]"
                  style={{
                    backgroundImage: `url('https://azimuteresidencial.com.br/assets/crystal/azimute-crystal-universe.webp')`,
                    backgroundPosition: '52% 48%'
                  }}
                />

                {/* Veils of liquid crystal light & organic reflection */}
                <div 
                  className="absolute inset-[-15%] pointer-events-none"
                  style={{
                    background: 'linear-gradient(117deg, rgba(12,13,14,.65) 5%, transparent 38%, rgba(197,160,89,.18) 57%, rgba(12,13,14,.55) 86%)',
                    mixBlendMode: 'screen',
                    opacity: 0.65
                  }}
                />

                <div 
                  className="absolute inset-[-20%] pointer-events-none"
                  style={{
                    background: 'linear-gradient(109deg, transparent 18%, rgba(197,160,89,0) 35%, rgba(197,160,89,.22) 48%, rgba(180,185,190,.09) 61%, transparent 77%)',
                    opacity: 0.5
                  }}
                />
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* STAGE C: FULL-PAGE LOGO & NAME PRESENTATION (KEY STAGE)   */}
              {/* Stays pinned at 100% opacity from 0.54 to 0.82!          */}
              {/* -------------------------------------------------------- */}
              <motion.div 
                style={{ 
                  opacity: reframeOpacity,
                  scale: reframeScale,
                  y: reframeY
                }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#faf8f5] pointer-events-none z-30 px-6"
                aria-hidden="true"
              >
                {/* 1. Centered Official Sunrise Property Brand Logo */}
                <motion.div 
                  style={{ scale: reframeSymbolScale }}
                  className="mb-6 sm:mb-8 relative"
                >
                  <div className="absolute inset-0 bg-[#c5a059]/20 blur-3xl rounded-full scale-125 pointer-events-none" />
                  <img 
                    src="/images/logo-light.png" 
                    alt="Sunrise Property - Properties & Interior Design" 
                    className="w-48 sm:w-64 md:w-80 h-auto object-contain mx-auto drop-shadow-[0_0_50px_rgba(197,160,89,0.45)] relative z-10" 
                  />
                </motion.div>

                {/* 2. Top Eyebrow */}
                <span className="block text-[#c5a059] tracking-[0.3em] text-[11px] sm:text-xs uppercase font-light mb-3 drop-shadow">
                  ATELIER MONOGRAPH
                </span>
                
                {/* 3. MONUMENTAL SUNRISE SERIF */}
                <motion.h2 
                  style={{ letterSpacing: reframeLetterSpacing }}
                  className="font-serif-azimute text-[clamp(4.5rem,13vw,15rem)] leading-[0.9] text-[#faf8f5] drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                >
                  SUNRISE
                </motion.h2>
                
                {/* 4. Subtitle */}
                <span className="block text-[10px] sm:text-xs tracking-[0.3em] text-[#c5a059] uppercase font-light mt-4 drop-shadow">
                  PROPERTIES &amp; BESPOKE INTERIOR ATELIER
                </span>

                {/* 5. Scroll invitation prompt */}
                <div className="mt-8 flex flex-col items-center text-[#c5a059]/80 text-[10px] tracking-widest uppercase">
                  <span>Scroll to explore portfolio</span>
                  <span className="text-xs animate-bounce mt-1 text-[#c5a059]">↓</span>
                </div>
              </motion.div>

              {/* -------------------------------------------------------- */}
              {/* STAGE D: 1st PAGE CLOSING CURTAIN OVERLAY                */}
              {/* -------------------------------------------------------- */}
              <motion.div 
                style={{ opacity: endClosingDarkness }}
                className="absolute inset-0 bg-[#0c0d0e] pointer-events-none z-35"
              />

              {/* Exact "|| Animations" Button */}
              <div className="absolute right-[6.25vw] bottom-6 z-40 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setShowAnimationsModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c0d0e]/85 hover:bg-[#0c0d0e] backdrop-blur-md border border-white/20 text-[#faf8f5] text-xs tracking-wider transition shadow-2xl cursor-pointer hover:border-[#c5a059]"
                  aria-label="Open timeline controls"
                >
                  <span className="font-mono text-[11px] text-[#c5a059]">||</span>
                  <span className="font-sans">Animations</span>
                </button>
              </div>

            </div>
          </section>

          {/* ============================================================ */}
          {/* 3.1 HOME SECTION 01: REAL ESTATE + INTERIOR INTRODUCTION     */}
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* 3.1 HOME SECTION 01: REAL ESTATE + INTERIOR INTRODUCTION     */}
          {/* ============================================================ */}
          <section id="intro-services" className="bg-[#faf8f5] text-[#0f1115] py-24 sm:py-32 px-[6.25vw] relative z-40 shadow-[0_-35px_80px_rgba(0,0,0,0.7)]">
            <div className="max-w-[1500px] mx-auto">
              <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#6e737c] border-b border-[#e2ded6] pb-5 mb-14">
                <span className="font-semibold text-[#0f1115]">01 / THE ATELIER</span>
                <span>MUMBAI · ALIBAUG · GREATER NOIDA</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                <div className="lg:col-span-7">
                  <h2 className="font-serif-azimute text-[clamp(3.8rem,7.5vw,8.5rem)] leading-[0.92] tracking-[-0.025em] text-[#0f1115]">
                    <span className="block text-[0.72em]">LIVING IN</span>
                    <em className="block font-serif-azimute not-italic text-[#c5a059] text-[1.15em] ml-6">
                      fine direction.
                    </em>
                  </h2>
                </div>

                <div className="lg:col-span-5 text-[#5a5f67] space-y-6 pt-4 text-base leading-relaxed">
                  <p className="text-xl text-[#0f1115] font-light">
                    Spaces that connect.<br />
                    Volumes to gather, repose, and reside.
                  </p>
                  <p className="text-[#454950]">
                    Sunrise Property operates at the fertile intersection of prime real estate discovery and bespoke interior architecture. We curate architectural properties for discerning patrons who demand harmony between exterior monolith and internal stillness.
                  </p>
                  <span className="block text-xs font-mono tracking-widest uppercase text-[#a6833d] pt-2">
                    EST. 2006 · ARCHITECTURAL ADVISORY &amp; INTERIOR ATELIER
                  </span>
                </div>
              </div>

              {/* Editorial architectural dual photo bands */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <div className="group overflow-hidden rounded-2xl bg-[#0c0d0e] relative aspect-[4/3] shadow-xl border border-[#e2ded6]">
                  <img 
                    src="/images/hero-villa.jpg" 
                    alt="The Travertine Villa Living Pavilion"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 text-white">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#c5a059]">Private Coastal Estate</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl mt-1">Living Pavilion &amp; Reflection Lagoon</h4>
                    </div>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-2xl bg-[#0c0d0e] relative aspect-[4/3] shadow-xl border border-[#e2ded6]">
                  <img 
                    src="/images/travertine-living.jpg" 
                    alt="The Travertine Lounge & Bespoke Joinery" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 text-white">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#c5a059]">Bespoke Interior Atelier</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl mt-1">Honed Travertine Hearth &amp; Oak Millwork</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 3.2 HOME SECTION 02: OUR SERVICES                            */}
              {/* ============================================================ */}
              <div className="border-t border-[#e2ded6] pt-20 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-[#c5a059] font-semibold">
                      Disciplines
                    </span>
                    <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#0f1115] mt-2">
                      Our Core Services
                    </h3>
                  </div>
                  <p className="mt-4 md:mt-0 text-sm text-[#5a5f67] max-w-md">
                    End-to-end custody spanning private property acquisition, architectural interior design, and turnkey handover.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">01 / ADVISORY</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Real Estate Advisory
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Private acquisition, off-market coastal estates, penthouses, and strategic developments in Greater Noida with rigorous spatial and legal due diligence.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Prime Residential Estates</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> High-Rise Penthouses &amp; Studios</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Confidential Off-Market Advisory</li>
                    </ul>
                  </div>

                  {/* Service 2 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Paintbrush className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">02 / ATELIER</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Bespoke Interior Design
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Space planning, moodboards, 3D photorealistic renderings, material specification, and bespoke cabinetry crafted to elevate residential living.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> 3D Spatial Modeling &amp; Renders</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Marble &amp; Hardwood Curations</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Architectural Lighting Schemes</li>
                    </ul>
                  </div>

                  {/* Service 3 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">03 / EXECUTION</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Turnkey Fit-Out &amp; Execution
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Single point of accountability from civil modifications, custom carpentry and home automation to final white-glove furnishing handover.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Civil &amp; Structural Modifications</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Custom Architectural Millwork</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> White-Glove Handover &amp; Warranty</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 3.3 HOME SECTION 03: FEATURED PROPERTIES                     */}
              {/* ============================================================ */}
              <div className="border-t border-[#e2ded6] pt-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-[#c5a059] font-semibold">
                      Exclusive Portfolio
                    </span>
                    <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#0f1115] mt-2">
                      Featured Properties · Top Picks
                    </h3>
                  </div>
                  <button 
                    onClick={() => navigateTo('real-estate')}
                    className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] hover:text-[#0f1115] font-semibold cursor-pointer transition"
                  >
                    <span>View Complete Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {topPickProjects.map((p) => (
                    <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e8e4dc] hover:border-[#c5a059]/60 hover:shadow-2xl transition duration-500 group flex flex-col justify-between">
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img 
                            src={p.image} 
                            alt={p.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                          />
                          <div className="absolute top-4 left-4 flex items-center gap-2">
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
                          <h4 className="font-serif-azimute text-2xl text-[#0f1115] mb-2">
                            {p.title}
                          </h4>
                          <p className="text-xs text-[#6e737c] flex items-center gap-1.5 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                            <span>{p.location}</span>
                          </p>
                          <div className="bg-[#faf8f5] px-3.5 py-2 rounded-xl border border-[#e8e4dc] mb-4 text-xs">
                            <span className="text-[#8a8f98] block text-[10px] uppercase tracking-wider">Property Type</span>
                            <span className="text-[#0f1115] font-medium">{p.type}</span>
                          </div>
                          <p className="text-xs text-[#5a5f67] line-clamp-2 mb-4 leading-relaxed font-light">
                            {p.description}
                          </p>
                          <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-xs">
                            <span className="text-[#8a8f98]">Price Range</span>
                            <span className="font-semibold text-sm text-[#0f1115]">{p.price}</span>
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
                          onClick={() => {
                            setContactForm({ ...contactForm, service: `Enquiry: ${p.title} (${p.developer})` });
                            navigateTo('contact');
                          }}
                          className="w-full py-3 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-wider transition cursor-pointer font-semibold shadow-sm text-center"
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ============================================================ */}
          {/* 3.4 HOME SECTION 04: INTERIOR PROJECTS / PORTFOLIO           */}
          {/* ============================================================ */}
          <section className="bg-[#0c0d0e] py-24 sm:py-32 px-[6.25vw] text-white border-t border-white/10">
            <div className="max-w-[1500px] mx-auto">
              
              {/* Header and Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs tracking-widest uppercase text-[#c5a059]">
                    Bespoke Interior Architecture
                  </span>
                  <h3 className="font-serif-azimute text-4xl sm:text-6xl leading-tight">
                    Interior Projects &amp; Portfolio
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-2xl">
                    Every project is conceived as an architectural monograph crafted to elevate daily existence. From tactile stone hearths to integrated fluted woodwork and museum-grade lighting.
                  </p>
                </div>
                <div className="lg:col-span-5 flex lg:justify-end">
                  <button 
                    onClick={() => navigateTo('interior')}
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#c5a059] hover:bg-white text-[#0c0d0e] font-medium text-xs uppercase tracking-wider transition cursor-pointer shadow-lg"
                  >
                    <span>View All Interior Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interactive Before & After Comparison Slider */}
              <div className="mb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c5a059]" />
                    <h4 className="font-serif-azimute text-2xl text-white">Spatial Transformation (Before &amp; After)</h4>
                  </div>
                  <span className="text-xs text-[#c5a059]">← Drag the center handle to compare →</span>
                </div>
                
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/15 select-none shadow-2xl">
                  {/* After image (Underneath) */}
                  <img 
                    src="/images/travertine-living.jpg" 
                    alt="Finished Luxury Travertine Interior" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white border border-white/20">
                    After (Turnkey Finished)
                  </div>

                  {/* Before image (Clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden" 
                    style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80" 
                      alt="Raw Masonry Before Interior Design" 
                      className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75" 
                    />
                    <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-[#c5a059] border border-[#c5a059]/30">
                      Before (Raw Shell Structure)
                    </div>
                  </div>

                  {/* Slider Divider Bar */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-[#c5a059] shadow-[0_0_15px_#c5a059] pointer-events-none"
                    style={{ left: `${beforeAfterSlider}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#c5a059] text-[#0c0d0e] flex items-center justify-center text-xs font-bold shadow-xl">
                      ↔
                    </div>
                  </div>

                  {/* Range input */}
                  <input 
                    type="range" 
                    min={0} 
                    max={100} 
                    value={beforeAfterSlider} 
                    onChange={(e) => setBeforeAfterSlider(Number(e.target.value))} 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
                    aria-label="Before and after slider"
                  />
                </div>
              </div>

              {/* Interior Portfolio 4-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {interiorProjects.map((p) => (
                  <div key={p.id} className="group overflow-hidden rounded-2xl bg-[#131518] border border-white/10 hover:border-[#c5a059]/40 transition duration-500 shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider uppercase text-[#c5a059] border border-[#c5a059]/30">
                        {p.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-white/80 border border-white/10">
                        {p.year}
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif-azimute text-2xl sm:text-3xl text-white">{p.title}</h4>
                        <span className="text-xs text-[#c5a059]">{p.location}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ============================================================ */}
          {/* 3.5 HOME SECTION 05: WHY CHOOSE US                           */}
          {/* ============================================================ */}
          <section className="bg-[#faf8f5] py-24 sm:py-32 px-[6.25vw] text-[#0f1115] border-t border-[#e2ded6]">
            <div className="max-w-[1500px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs tracking-widest uppercase text-[#c5a059] font-semibold">Our Distinctive Edge</span>
                <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#0f1115] mt-2">
                  Why Discerning Patrons Choose Sunrise Property
                </h3>
                <p className="text-sm text-[#5a5f67] mt-3 font-light">
                  Decades of curated curation, architectural rigor, and unwavering commitment to spatial excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <ShieldCheck className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Architectural Pedigree</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Over 18 years of curated discovery, safeguarding architectural integrity and long-term asset value.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Award className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Dual-Discipline Custody</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Seamless synthesis bridging property acquisition with bespoke interior design and turnkey civil execution.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Users className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Confidential Advisory</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    100% discretion standard for high-net-worth acquisitions, private tenders, and off-market sanctuaries.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Clock className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Guaranteed Delivery</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Strict adherence to engineering timelines, transparent milestone auditing, and white-glove turnkey handover.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* 3.6 HOME SECTION 06: ENQUIRY / CALL-TO-ACTION BANNER         */}
          {/* ============================================================ */}
          <section className="bg-[#0c0d0e] py-20 px-[6.25vw] text-white border-t border-b border-[#c5a059]/20">
            <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs tracking-widest uppercase text-[#c5a059]">Private Concierge Desk</span>
                <h3 className="font-serif-azimute text-3xl sm:text-5xl mt-2 text-white">
                  Ready to Discuss Your Next Sanctuary?
                </h3>
                <p className="text-sm text-white/70 mt-2 font-light">
                  Speak directly with our architectural advisors regarding private property viewings or custom interior commissions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Concierge</span>
                </a>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="px-8 py-4 rounded-full bg-transparent hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] border border-[#c5a059]/50 hover:border-[#c5a059] text-xs uppercase tracking-widest font-medium transition cursor-pointer shadow-sm"
                >
                  Contact Form
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ================================================================ */}
      {/* 4. ABOUT US PAGE                                                 */}
      {/* ================================================================ */}
      {currentPage === 'about' && (
        <main className="min-h-screen bg-[#faf8f5] text-[#0f1115] pt-32 pb-24 px-[6.25vw] max-w-[1500px] mx-auto">
          <div className="border-b border-[#e2ded6] pb-8 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Atelier Monograph · Profile</span>
            <h1 className="font-serif-azimute text-5xl sm:text-7xl mt-2 text-[#0f1115]">
              Built Around Places. Focused on People.
            </h1>
            <p className="text-lg text-[#5a5f67] max-w-3xl mt-4 font-light">
              Sunrise Property operates at the fertile intersection of living spaces and interior architecture. We curate properties for patrons who demand custody between exterior monolith and internal stillness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6 text-sm text-[#5a5f67] leading-relaxed font-light">
              <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115]">
                The Intersection of Living Spaces
              </h3>
              <p className="text-[#454950]">
                Founded in 2006 with the conviction that luxury residential development is too often fractured between cold transaction and superficial decoration, Sunrise Property bridges the void. We are a dual-discipline atelier of curators, architects, and artisans who view living spaces as enduring instruments of human rest.
              </p>
              <p className="text-[#454950]">
                Our dual mandate begins with spatial diagnosis: before recommending a plot or acquisition, we analyze natural light ingress, acoustic isolation, view corridors, and structural authenticity. Once an address is secured, our interior atelier shapes the living volume — installing hand-honed travertine, grain-matched oak joinery, and artisanal bronze accents that deepen in patina over time.
              </p>
              <div className="pt-6 border-t border-[#e2ded6] grid grid-cols-3 gap-6">
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">18+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Years Monograph Archive</span>
                </div>
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">$420M+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Stewarded Assets</span>
                </div>
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Discretion Standard</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#e2ded6] shadow-2xl relative">
                <img 
                  src="/images/hero-villa.jpg" 
                  alt="Sunrise Property Coastal Sanctuary" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c0d0e]/85 backdrop-blur-md p-4 rounded-xl text-xs border border-white/15">
                  <span className="text-white font-medium">Private Villa 8, Reflection Lagoon</span>
                  <span className="text-[#c5a059] block text-[11px] mt-0.5">Alibaug Coastline · Completed 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Our Mission</span>
              <h4 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115]">Develop Spaces That Transform</h4>
              <p className="text-sm text-[#5a5f67] leading-relaxed font-light">
                To deliver enduring residential sanctums that unite engineering perfection, sculptural aesthetics, and lifelong asset preservation for our clients and future generations.
              </p>
            </div>
            <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Our Vision</span>
              <h4 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115]">Benchmark in Life &amp; Architecture</h4>
              <p className="text-sm text-[#5a5f67] leading-relaxed font-light">
                To be India’s premier dual-discipline atelier for architectural property discovery and bespoke interior design, recognized for timeless restraint, craft integrity, and unwavering discretion.
              </p>
            </div>
          </div>

          {/* Why Sunrise Property */}
          <div className="border-t border-[#e2ded6] pt-16">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Atelier Principles</span>
              <h3 className="font-serif-azimute text-4xl text-[#0f1115] mt-1">Why Sunrise Property</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">01</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Spatial Diagnosis</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  Every acquisition is analyzed for solar geometry, cross-ventilation, acoustic privacy, and surrounding green buffers prior to client presentation.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">02</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Material Honesty</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  We reject synthetic veneers in favor of tactile stone, solid European hardwood, architectural bronze, and breathable natural lime washes.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">03</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Turnkey Accountability</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  We eliminate coordination friction between brokers, contractors, and designers by providing a single point of custody from purchase to keys.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ================================================================ */}
      {/* 5. REAL ESTATE PAGE                                              */}
      {/* ================================================================ */}
      {currentPage === 'real-estate' && (
        <main className="min-h-screen bg-[#faf8f5] text-[#0f1115] pt-32 pb-24 px-[6.25vw] max-w-[1500px] mx-auto">
          {/* Page Header */}
          <div className="border-b border-[#e2ded6] pb-8 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Section 05 · Real Estate Advisory &amp; Portfolio</span>
            <h1 className="font-serif-azimute text-5xl sm:text-7xl mt-2 text-[#0f1115]">
              Curated Estates &amp; Prime Developments
            </h1>
            <p className="text-base text-[#5a5f67] max-w-3xl mt-4 font-light leading-relaxed">
              From private residential sanctuaries and bespoke villas to high-street commercial destinations and high-yield studio apartments across Greater Noida, Mumbai, and premier coastal enclaves.
            </p>
          </div>

          {/* 5.1 Real Estate Services (7 Core Disciplines) */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Comprehensive Advisory</span>
                <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">Our Real Estate Services</h2>
              </div>
              <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
                End-to-end custody spanning private acquisitions, commercial leasing, new developer launches, and portfolio advisory.
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
                      {idx === 4 && <Sparkles className="w-5 h-5" />}
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
                    onClick={() => {
                      setContactForm({ ...contactForm, service: `Enquiry: ${service.title}` });
                      const formElem = document.getElementById('real-estate-enquiry-form');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-5 pt-3 border-t border-[#f0ece3] text-[11px] uppercase tracking-wider font-semibold text-[#c5a059] hover:text-[#0f1115] flex items-center gap-1.5 transition text-left cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 5.2 Featured Projects / Our Top Picks */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Curated Developments</span>
                <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                  Featured Projects / Our Top Picks
                </h2>
              </div>
              <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
                Premier verified developments evaluated for superior construction standards, capital appreciation, and prime location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topPickProjects.map((p) => (
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
                      onClick={() => {
                        setContactForm({ ...contactForm, service: `Enquiry: ${p.title} (${p.developer})` });
                        const formElem = document.getElementById('real-estate-enquiry-form');
                        if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-wider transition cursor-pointer font-semibold shadow-sm text-center"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5.3 Featured / Available Properties Catalog */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Available Portfolio</span>
                <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                  Featured / Available Properties
                </h2>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
                {['ALL', 'GREATER NOIDA', 'COASTAL', 'PENTHOUSE', 'ESTATE'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRealEstateFilter(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest transition cursor-pointer ${
                      realEstateFilter === tab 
                        ? 'bg-[#0c0d0e] text-white font-semibold shadow-sm' 
                        : 'bg-white border border-[#e8e4dc] text-[#5a5f67] hover:text-[#0f1115] hover:border-[#c5a059]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProperties.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] hover:border-[#c5a059]/60 transition group flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-2xl duration-500">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md bg-[#0c0d0e]/80 text-[#c5a059] border-[#c5a059]/30">
                        {p.badge}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="text-[11px] uppercase tracking-widest text-[#c5a059] font-semibold">
                        {p.category}
                      </div>
                      <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#6e737c] flex items-center gap-1.5 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                        {p.location}
                      </p>
                      <p className="text-xs text-[#5a5f67] leading-relaxed mb-4">
                        {p.description}
                      </p>
                      <div className="pt-3 border-t border-[#f0ece3] flex items-center justify-between text-xs">
                        <span className="text-[#8a8f98]">Configuration</span>
                        <span className="text-[#0f1115] font-medium">{p.beds} · {p.area}</span>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-xs">
                        <span className="text-[#8a8f98]">Guide Price</span>
                        <span className="font-semibold text-sm text-[#0f1115]">{p.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button 
                      onClick={() => {
                        setContactForm({ ...contactForm, service: `Property Enquiry: ${p.title}` });
                        const formElem = document.getElementById('real-estate-enquiry-form');
                        if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-widest transition cursor-pointer font-semibold shadow-sm"
                    >
                      Enquire Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5.4 Property Enquiry Form / Enquire Now CTA */}
          <div id="real-estate-enquiry-form" className="p-8 sm:p-12 rounded-3xl bg-[#0c0d0e] border border-[#c5a059]/30 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Priority Booking &amp; Due Diligence</span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white">
                  Property Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  Direct consultation with our senior acquisitions desk. Whether enquiring about Ashtech Presidential, Godrej Majesty, Grandthum, or private portfolio acquisitions, our partners provide confidential guidance.
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
                    href="https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20real%20estate%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition shadow-lg cursor-pointer"
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
                      className="mt-3 px-5 py-2 rounded-full bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
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
                          placeholder="+91 98200 00000"
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
        </main>
      )}

      {/* ================================================================ */}
      {/* 6. INTERIOR DESIGN PAGE                                          */}
      {/* ================================================================ */}
      {currentPage === 'interior' && (
        <main className="min-h-screen bg-[#faf8f5] text-[#0f1115] pt-32 pb-24 px-[6.25vw] max-w-[1500px] mx-auto">
          <div className="border-b border-[#e2ded6] pb-8 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Interior Architecture &amp; Atelier</span>
            <h1 className="font-serif-azimute text-5xl sm:text-7xl mt-2 text-[#0f1115]">
              Interiors With Purpose. Spaces With Character.
            </h1>
            <p className="text-base text-[#5a5f67] max-w-3xl mt-4 font-light">
              End-to-end bespoke interior architecture: from conceptual 3D space planning and moodboards to structural civil works, custom joinery, and artisanal stone finishing.
            </p>
          </div>

          {/* Interactive Before & After Comparison Slider */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#e2ded6] gap-2">
              <h3 className="font-serif-azimute text-2xl text-[#0f1115]">
                Transforming Space into Stillness (Before &amp; After)
              </h3>
              <span className="text-xs text-[#a6833d]">Drag horizontal slider to examine transformation</span>
            </div>
            
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#e2ded6] select-none shadow-2xl">
              {/* After image (Underneath) */}
              <img 
                src="/images/travertine-living.jpg" 
                alt="After Interior Design Finished Space" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white border border-white/20">
                After (Finished Atelier Interior)
              </div>

              {/* Before image (Clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden" 
                style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80" 
                  alt="Before Interior Design Raw Space" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75" 
                />
                <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-[#c5a059] border border-[#c5a059]/30">
                  Before (Raw Bare Shell)
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#c5a059] shadow-[0_0_15px_#c5a059] pointer-events-none"
                style={{ left: `${beforeAfterSlider}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#c5a059] text-[#0c0d0e] flex items-center justify-center text-xs font-bold shadow-xl">
                  ↔
                </div>
              </div>

              {/* Range input */}
              <input 
                type="range" 
                min={0} 
                max={100} 
                value={beforeAfterSlider} 
                onChange={(e) => setBeforeAfterSlider(Number(e.target.value))} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
                aria-label="Before and after comparison control"
              />
            </div>
          </div>

          {/* 6.1 The 3 Interior Pillars (Design, Execution, Specialized) */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Disciplines &amp; Craft</span>
                <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                  Comprehensive Interior Services
                </h2>
              </div>
              <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
                Three unified pillars of interior architecture ensuring flawless continuity from initial sketch to final turnkey handover.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pillar 1: Design Services */}
              <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 01</span>
                  <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                    Design Services
                  </h3>
                  <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                    Conceptual foundation and technical blueprints tailored to spatial volume, daylight, and client lifestyle.
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                    {interiorDisciplines.design.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                          <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                        </div>
                        <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                  <button
                    onClick={() => {
                      setContactForm({ ...contactForm, service: 'Interior Design Services (Concept & 3D)' });
                      const formElem = document.getElementById('interior-consultation-form');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                  >
                    Request Design Proposal
                  </button>
                </div>
              </div>

              {/* Pillar 2: Execution Services */}
              <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 02</span>
                  <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                    Execution Services
                  </h3>
                  <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                    On-site craft mastery, structural transformations, MEP engineering, and artisanal architectural finishes.
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                    {interiorDisciplines.execution.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                          <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                        </div>
                        <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                  <button
                    onClick={() => {
                      setContactForm({ ...contactForm, service: 'Interior Execution Services (Turnkey Fit-Out)' });
                      const formElem = document.getElementById('interior-consultation-form');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                  >
                    Request Fit-Out Quote
                  </button>
                </div>
              </div>

              {/* Pillar 3: Specialized Services */}
              <div className="bg-white rounded-2xl p-8 border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#a6833d] font-semibold">PILLAR 03</span>
                  <h3 className="font-serif-azimute text-2xl text-[#0f1115] mt-1 mb-4">
                    Specialized Services
                  </h3>
                  <p className="text-xs text-[#5a5f67] leading-relaxed mb-6 font-light">
                    Tailored spatial sectors spanning luxury residences, commercial office suites, retail flagships, and renovations.
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-[#f0ece3]">
                    {interiorDisciplines.specialized.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                          <h4 className="text-xs font-semibold text-[#0f1115]">{item.name}</h4>
                        </div>
                        <p className="text-[11px] text-[#6e737c] pl-5 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f0ece3]">
                  <button
                    onClick={() => {
                      setContactForm({ ...contactForm, service: 'Specialized Interior Architecture & Renovation' });
                      const formElem = document.getElementById('interior-consultation-form');
                      if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl border border-[#0c0d0e]/20 hover:border-[#0c0d0e] hover:bg-[#faf8f5] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
                  >
                    Discuss Specialized Brief
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 6.2 High-Quality Project Images Gallery */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Monograph Archive</span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">High-Quality Project Gallery</h3>
              </div>
              <p className="text-xs text-[#6e737c] mt-2 sm:mt-0 max-w-md">
                Selected completed interior commissions reflecting material honesty, spatial balance, and quiet refinement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interiorProjects.map((p) => (
                <div key={p.id} className="group overflow-hidden rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059]/50 transition duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-2xl flex flex-col justify-between">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] tracking-wider uppercase text-[#c5a059] border border-[#c5a059]/30 font-semibold">
                      {p.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-white border border-white/10">
                      {p.year}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-azimute text-2xl text-[#0f1115]">{p.title}</h4>
                      <span className="text-xs text-[#c5a059] font-medium">{p.location}</span>
                    </div>
                    <p className="text-xs text-[#5a5f67] leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6.3 Project Enquiry Form / Get a Consultation CTA */}
          <div id="interior-consultation-form" className="p-8 sm:p-12 rounded-3xl bg-[#0c0d0e] border border-[#c5a059]/30 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Atelier Commission Desk</span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white">
                  Project Enquiry &amp; Consultation
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  Our principal interior architects accept a curated number of residential, commercial, and renovation commissions each year to maintain uncompromising standards of craftsmanship and personalized custody.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-white/80">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Complete 3D spatial simulation prior to physical work</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/80">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Direct sourcing of Italian stone &amp; European hardwoods</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/80">
                    <Check className="w-4 h-4 text-[#c5a059]" />
                    <span>Single-point turnkey accountability with warranty</span>
                  </div>
                </div>

                {/* Direct WhatsApp CTA */}
                <div className="pt-6">
                  <a
                    href="https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Interactive Interior Form */}
              <div className="lg:col-span-7 bg-[#131518] p-6 sm:p-8 rounded-2xl border border-white/10">
                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-serif-azimute text-xl text-white">Interior Brief Received</h4>
                    <p className="text-xs text-white/70 max-w-sm mx-auto">
                      Thank you. Our design director will review your brief and schedule an exploratory virtual or in-person design consultation.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-5 py-2 rounded-full bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
                    >
                      Submit Another Brief
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
                          placeholder="e.g. Priya Kapur"
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
                          placeholder="priya@design.com"
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
                          placeholder="+91 98200 00000"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Desired Service Category</label>
                        <select 
                          value={contactForm.service}
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0c0d0e] border border-white/15 text-white text-xs focus:border-[#c5a059] outline-none transition"
                        >
                          <option value="Design Services (Concept, Space Planning, 3D)">Design Services (Concept, Space Planning, 3D)</option>
                          <option value="Execution Services (Civil, Carpentry, Electrical, False Ceiling)">Execution Services (Civil, Carpentry, Electrical, False Ceiling)</option>
                          <option value="Specialized Services: Residential (Villas &amp; Penthouses)">Specialized Services: Residential (Villas &amp; Penthouses)</option>
                          <option value="Specialized Services: Commercial &amp; Executive Suites">Specialized Services: Commercial &amp; Executive Suites</option>
                          <option value="Specialized Services: Retail &amp; Hospitality">Specialized Services: Retail &amp; Hospitality</option>
                          <option value="Specialized Services: Furniture Design">Specialized Services: Furniture Design</option>
                          <option value="Specialized Services: Full Turnkey Renovation">Specialized Services: Full Turnkey Renovation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1.5 font-medium">Space Dimensions &amp; Project Vision</label>
                      <textarea 
                        rows={3} 
                        value={contactForm.message} 
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                        placeholder="Detail the approximate square footage, current state (raw shell / renovation), and preferred aesthetic palette..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs focus:border-[#c5a059] outline-none transition" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-[#c5a059] hover:bg-white text-[#0c0d0e] font-semibold text-xs uppercase tracking-widest transition cursor-pointer shadow-lg"
                    >
                      Get a Consultation · Initiate Brief
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ================================================================ */}
      {/* 7. CONTACT US PAGE                                               */}
      {/* ================================================================ */}
      {currentPage === 'contact' && (
        <main className="min-h-screen bg-[#faf8f5] text-[#0f1115] pt-32 pb-24 px-[6.25vw] max-w-[1500px] mx-auto">
          <div className="border-b border-[#e2ded6] pb-8 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Private Advisory &amp; Inquiries</span>
            <h1 className="font-serif-azimute text-5xl sm:text-7xl mt-2 text-[#0f1115]">
              Let’s Talk About Your Next Space
            </h1>
            <p className="text-base text-[#5a5f67] max-w-3xl mt-4 font-light">
              Whether acquiring an architectural sanctuary in Mumbai, Alibaug, or Greater Noida, or commissioning a bespoke interior pavilion, our partners provide discreet, end-to-end stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Channels & Google Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] shadow-md space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#e2ded6]">
                  <h3 className="font-serif-azimute text-2xl text-[#0f1115]">Direct Advisory Channels</h3>
                  <span className="text-[10px] tracking-wider uppercase text-[#c5a059] font-semibold">Confidential Desk</span>
                </div>
                
                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98]">Telephone Advisory</span>
                    <a href="tel:+9102284920100" className="text-base font-serif-azimute text-[#0f1115] hover:text-[#c5a059] transition">
                      +91 (022) 8492-0100
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Concierge Desk (10:00 AM – 7:30 PM IST)</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98]">WhatsApp Concierge</span>
                    <a 
                      href="https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20portfolio." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-serif-azimute text-[#0f1115] hover:text-[#25D366] transition"
                    >
                      +91 98200 01234
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Instant coordination &amp; brochures</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98]">Electronic Correspondence</span>
                    <a href="mailto:hello@sunriseproperty.in" className="text-sm font-medium text-[#0f1115] hover:text-[#c5a059] transition">
                      hello@sunriseproperty.in
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Official monographs &amp; tender submissions</span>
                  </div>
                </div>

                {/* Office Addresses */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#f0ece3]">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98] font-medium">Headquarters (Mumbai)</span>
                      <p className="text-xs text-[#454950] leading-relaxed mt-0.5">
                        Pavilion Suite 37, BKC Waterfront, Bandra Kurla Complex, Mumbai 400051, Maharashtra.
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98] font-medium">NCR Representative Office</span>
                      <p className="text-xs text-[#454950] leading-relaxed mt-0.5">
                        Sector 12, Greater Noida, Uttar Pradesh 201306.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Google Map Embed */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-[#e8e4dc] relative bg-white shadow-md">
                <iframe 
                  title="Sunrise Property Headquarters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.793739763784!2d72.8687317760927!3d19.072828652077976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e312642a8b%3A0x6b8ef27419137452!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale contrast-125 brightness-95"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#e8e4dc] shadow-xl">
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mb-2">
                  Initiate a Confidential Inquiry
                </h3>
                <p className="text-xs text-[#5a5f67] mb-8 leading-relaxed">
                  Complete your details below and a partner will respond discreetly within four business hours.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Inquiry Received with Distinction</h4>
                    <p className="text-xs text-[#5a5f67] leading-relaxed max-w-md mx-auto">
                      Thank you for contacting Sunrise Property. One of our dedicated architectural partners has received your brief and will coordinate directly.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-[#0c0d0e] text-xs text-white hover:bg-[#c5a059] hover:text-[#0c0d0e] cursor-pointer transition font-medium"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#6e737c] mb-2 font-medium">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={contactForm.name} 
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                        placeholder="e.g. Vikramaditya Singhania"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#6e737c] mb-2 font-medium">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          value={contactForm.email} 
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                          placeholder="client@sanctum.in"
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#6e737c] mb-2 font-medium">Phone / WhatsApp</label>
                        <input 
                          type="tel" 
                          required 
                          value={contactForm.phone} 
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} 
                          placeholder="+91 98200 00000"
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#6e737c] mb-2 font-medium">Service or Project of Interest</label>
                      <input 
                        type="text" 
                        value={contactForm.service} 
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })} 
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#6e737c] mb-2 font-medium">Project Brief or Particular Requirements</label>
                      <textarea 
                        rows={4} 
                        value={contactForm.message} 
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                        placeholder="Brief details regarding your timeline, spatial requirements, or confidential acquisition parameters..."
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] font-semibold text-xs uppercase tracking-widest transition cursor-pointer shadow-lg"
                    >
                      Submit Confidential Brief
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ================================================================ */}
      {/* 8. GLOBAL FOOTER                                                 */}
      {/* ================================================================ */}
      <footer className="bg-[#0c0d0e] text-[#faf8f5] py-16 px-[6.25vw] border-t border-white/10">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            {/* Brand Logo & Bio */}
            <div className="md:col-span-5 space-y-4">
              <img 
                src="/images/logo-light.png" 
                alt="Sunrise Property - Properties & Interior Design" 
                className="h-16 sm:h-20 w-auto object-contain drop-shadow" 
              />
              <p className="text-xs text-white/60 leading-relaxed max-w-sm font-light">
                Curating high-arch architectural residences and bespoke interior pavilions. Where classical proportion and modern stillness converge for discerning patrons.
              </p>
              <div className="text-[11px] text-[#c5a059] tracking-wider font-mono pt-2">
                EST. 2006 · MUMBAI · GREATER NOIDA
              </div>
            </div>

            {/* Quick Links: EXACT 5 PAGES */}
            <div className="md:col-span-3 space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Navigation</span>
              <ul className="text-xs text-white/70 space-y-2">
                <li><button onClick={() => navigateTo('home')} className="hover:text-[#c5a059] transition cursor-pointer">Home</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-[#c5a059] transition cursor-pointer">About Us</button></li>
                <li><button onClick={() => navigateTo('real-estate')} className="hover:text-[#c5a059] transition cursor-pointer">Real Estate</button></li>
                <li><button onClick={() => navigateTo('interior')} className="hover:text-[#c5a059] transition cursor-pointer">Interior Design</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-[#c5a059] transition cursor-pointer">Contact Us</button></li>
              </ul>
            </div>

            {/* Contact Coordinates */}
            <div className="md:col-span-4 space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Headquarters</span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Pavilion Suite 37, BKC Waterfront, Bandra Kurla Complex, Mumbai 400051<br />
                Telephone: +91 (022) 8492-0100<br />
                WhatsApp: +91 98200 01234<br />
                Email: hello@sunriseproperty.in
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/40 gap-4">
            <p>© 2026 Sunrise Property. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-[#c5a059] hover:text-white uppercase tracking-wider text-[11px] transition cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button on Sub-pages */}
      {currentPage !== 'home' && (
        <a
          href="https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Concierge"
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider shadow-2xl transition hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Concierge</span>
        </a>
      )}

      {/* ================================================================ */}
      {/* 8.5 SELECTED PROJECT DETAILS MODAL                               */}
      {/* ================================================================ */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0c0d0e] border border-[#c5a059]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-slate-100 flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border bg-[#c5a059]/15 text-[#c5a059] border-[#c5a059]/40 font-semibold">
                  {selectedProjectModal.badge || 'PROJECT MONOGRAPH'}
                </span>
                <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border font-medium ${selectedProjectModal.statusColor || 'bg-white/10 text-white'}`}>
                  {selectedProjectModal.status}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProjectModal(null)} 
                className="text-white/60 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={selectedProjectModal.image} 
                  alt={selectedProjectModal.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#c5a059] font-semibold">
                  Developer: {selectedProjectModal.developer}
                </span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-white/70 flex items-center gap-1.5 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{selectedProjectModal.location}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-[#131518] p-4 rounded-xl border border-white/10 text-xs">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Property Type</span>
                  <span className="text-white font-medium">{selectedProjectModal.type}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Price Range</span>
                  <span className="text-[#c5a059] font-bold text-sm">{selectedProjectModal.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-white/50 font-medium">Architectural Narrative</span>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {selectedProjectModal.description}
                </p>
              </div>

              {selectedProjectModal.highlights && (
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">Key Highlights &amp; Amenities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProjectModal.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/919820001234?text=Hello%20Sunrise%20Property,%20I%20am%20interested%20in%20${encodeURIComponent(selectedProjectModal.title)}%20(${encodeURIComponent(selectedProjectModal.developer)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Brochure</span>
              </a>
              <button
                onClick={() => {
                  setContactForm({ ...contactForm, service: `Enquiry: ${selectedProjectModal.title} (${selectedProjectModal.developer})` });
                  setSelectedProjectModal(null);
                  navigateTo('contact');
                }}
                className="py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-white text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center"
              >
                Contact Advisory Desk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* 9. ANIMATIONS & TIMELINE CONTROLS MODAL                          */}
      {/* ================================================================ */}
      {showAnimationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0c0d0e] border border-[#c5a059]/30 rounded-2xl max-w-xl w-full p-6 shadow-2xl text-slate-100 flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[#c5a059] font-mono text-sm">||</span>
                <h3 className="font-semibold text-sm tracking-wide text-white">
                  Timeline &amp; Animation Controls
                </h3>
              </div>
              <button onClick={() => setShowAnimationsModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Demo Controls */}
            <div className="py-4 border-b border-white/10 space-y-3">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                Milestone Quick Jump:
              </span>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => simulateScroll(0), 100); }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/10 text-white cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 1</span>
                  <span>01. Day Hero (YOUR NEXT)</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => simulateScroll(0.32), 100); }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/10 text-white cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 2</span>
                  <span>02. Night Facade Crossfade</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => simulateScroll(0.66), 100); }}
                  className="p-2.5 rounded-lg bg-[#c5a059]/15 hover:bg-[#c5a059]/25 text-left border border-[#c5a059]/40 text-[#faf8f5] cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 3 (PINNED FULL-PAGE)</span>
                  <span>03. Logo &amp; Name Reveal</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') setCurrentPage('home'); setTimeout(() => simulateScroll(1.0), 100); }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/10 text-white cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 4</span>
                  <span>04. Section 01 Handoff</span>
                </button>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={runFullScrubDemo}
                  className="flex-1 py-2.5 rounded-lg bg-[#c5a059] hover:bg-white text-[#0c0d0e] text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Auto Scrub Demo</span>
                </button>
                <button
                  onClick={replayEntranceIntro}
                  className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Replay Opening</span>
                </button>
              </div>
            </div>

            {/* Prompt */}
            <div className="py-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Antigravity Implementation Prompt:
                </span>
                <button
                  onClick={copyPrompt}
                  className="px-2.5 py-1 rounded bg-[#c5a059]/20 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0c0d0e] text-[11px] font-medium flex items-center gap-1 transition cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-black/60 border border-white/10 text-[10px] text-slate-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                {antigravityPrompt}
              </pre>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button onClick={() => setShowAnimationsModal(false)} className="px-4 py-2 rounded-lg text-xs bg-white/10 hover:bg-white/20 text-white cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
