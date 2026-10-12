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
  ChevronDown,
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Building2, 
  Paintbrush, 
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

interface HomeHeroSectionProps {
  setShowAnimationsModal: (show: boolean) => void;
  simulateScroll: (targetRatio: number) => void;
}

function HomeHeroSection({ setShowAnimationsModal, simulateScroll }: HomeHeroSectionProps) {
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

  // On mount, guarantee spring is reset to 0
  useEffect(() => {
    try {
      smoothProgress.jump(0);
    } catch {
      smoothProgress.set(0);
    }
  }, [smoothProgress]);

  return (
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
         

          <h1 className="font-serif-azimute mb-6 sm:mb-[34px] text-white drop-shadow-xl">
            <span className="block text-[clamp(2.35rem,3.8vw,4.5rem)] leading-[0.94] tracking-[-0.015em]">
              FIND YOUR PROPERTY.
            </span>
            <em className="block italic font-serif-azimute text-[clamp(3.35rem,5.6vw,6.5rem)] leading-[0.86] mt-1 ml-[3vw] sm:ml-[5vw] text-[#faf8f5]">
              Design Your Space.
            </em>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[50px] sm:items-end">
            <p className="text-[0.9375rem] sm:text-[1rem] leading-[1.65] text-[#e2ded7] font-sans drop-shadow max-w-[320px]">
              Live Better.<br />
              Residential &amp; Commercial Real Estate, Property Consultation &amp; Turnkey Interiors.
            </p>

            <a 
              className="inline-flex items-center gap-4 sm:gap-5 text-sm sm:text-base text-white hover:text-[#c5a059] group cursor-pointer drop-shadow transition"
              href="#intro-services"
              onClick={(e) => { e.preventDefault(); simulateScroll(0.66); }}
            >
              <span className="tracking-wide">Explore Collection</span>
              <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/50 flex items-center justify-center text-lg sm:text-xl group-hover:bg-[#c5a059] group-hover:text-[#0c0d0e] group-hover:border-[#c5a059] transition duration-300 bg-black/10">
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
            SUNRISE PROPERTY
          </span>
          
          {/* 3. MONUMENTAL SUNRISE SERIF */}
          <motion.h2 
            style={{ letterSpacing: reframeLetterSpacing }}
            className="font-serif-azimute text-[clamp(4.5rem,13vw,15rem)] leading-[0.9] text-[#faf8f5] drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
          >
            SUNRISE
          </motion.h2>
          
          {/* 4. Subtitle */}
          <span className="block text-[10px] sm:text-xs tracking-[0.25em] text-[#c5a059] uppercase font-light mt-4 drop-shadow">
            FIND YOUR PROPERTY. DESIGN YOUR SPACE. LIVE BETTER.
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
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c0d0e]/85 hover:bg-[#0c0d0e] backdrop-blur-md border border-white/20 text-[#faf8f5] text-xs tracking-wider transition shadow-2xl cursor-pointer hover:border-[#c5a059]"
            aria-label="Open timeline controls"
          >
            <span className="font-mono text-[11px] text-[#c5a059]">||</span>
            <span className="font-sans">Animations</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [homeKey, setHomeKey] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnimationsModal, setShowAnimationsModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);
  const [realEstateFilter, setRealEstateFilter] = useState<string>('ALL');
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);
  
  // Entrance Opening Animation state (plays on every reload / visit)
  const [entranceActive, setEntranceActive] = useState<boolean>(true);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Real Estate',
    message: ''
  });

  // Handle URL hash on initial load & hash changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleHashSync = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '' || hash === 'home') {
        if (typeof window !== 'undefined') {
          const html = document.documentElement;
          const prevScrollBehavior = html.style.scrollBehavior;
          html.style.scrollBehavior = 'auto';
          window.scrollTo(0, 0);
          document.body.scrollTop = 0;
          html.scrollTop = 0;
          html.style.scrollBehavior = prevScrollBehavior;
        }
        setHomeKey(prev => prev + 1);
        setCurrentPage('home');
      } else if (['about', 'real-estate', 'interior', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  // Automatically conclude opening entrance after 1.4s (reduced to half) if active
  useEffect(() => {
    if (entranceActive) {
      const timer = setTimeout(() => {
        setEntranceActive(false);
      }, 1400);
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
      const heroElem = document.getElementById('inicio');
      if (heroElem) {
        const heroHeight = heroElem.offsetHeight;
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

  // Robust navigation handler with guaranteed top scroll
  const navigateTo = (page: Page) => {
    setMobileMenuOpen(false);
    setEntranceActive(false);

    if (page === 'home') {
      const wasAlreadyHome = currentPage === 'home';
      setHomeKey(prev => prev + 1);
      setCurrentPage('home');
      
      if (typeof window !== 'undefined') {
        // Remove hash from URL without triggering fragment navigation abort
        if (window.location.hash) {
          window.history.replaceState(null, '', '/');
        }

        // Disable CSS smooth scrolling temporarily for deterministic, instantaneous reset
        const html = document.documentElement;
        const prevScrollBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        html.scrollTop = 0;
        html.style.scrollBehavior = prevScrollBehavior;

        if (wasAlreadyHome) {
          // If already on Home, smooth scroll to the very top hero
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          const inicioElem = document.getElementById('inicio');
          if (inicioElem) {
            inicioElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
      return;
    }

    // Navigating to other pages (about, real-estate, interior, contact)
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${page}`);
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      html.scrollTop = 0;
      html.style.scrollBehavior = prevScrollBehavior;
    }
  };

  // Guaranteed scroll-to-top reset on page transitions (especially returning to Home after scrolling on other pages)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const performScrollReset = () => {
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      html.scrollTop = 0;
      html.style.scrollBehavior = prevScrollBehavior;
    };

    // Execute immediately on state change
    performScrollReset();

    // Re-verify on animation frames to defeat browser scroll restoration
    const r1 = requestAnimationFrame(performScrollReset);
    const r2 = requestAnimationFrame(() => requestAnimationFrame(performScrollReset));
    const timer1 = setTimeout(performScrollReset, 20);
    const timer2 = setTimeout(performScrollReset, 80);
    const timer3 = setTimeout(performScrollReset, 200);

    return () => {
      cancelAnimationFrame(r1);
      cancelAnimationFrame(r2);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentPage]);

  const simulateScroll = (targetRatio: number) => {
    if (typeof window === 'undefined') return;
    const doScroll = () => {
      const heroElem = document.getElementById('inicio');
      if (!heroElem) return;
      const totalHeight = heroElem.scrollHeight;
      window.scrollTo({
        top: totalHeight * targetRatio,
        behavior: 'smooth'
      });
    };
    if (!document.getElementById('inicio')) {
      setTimeout(doScroll, 120);
    } else {
      doScroll();
    }
  };

  const runFullScrubDemo = () => {
    if (currentPage !== 'home') {
      setHomeKey(prev => prev + 1);
      setCurrentPage('home');
    }
    setShowAnimationsModal(false);
    setTimeout(() => simulateScroll(0), 100);
    setTimeout(() => simulateScroll(0.28), 1000);
    setTimeout(() => simulateScroll(0.66), 2800);
    setTimeout(() => simulateScroll(1.0), 5500);
    setTimeout(() => simulateScroll(0), 8500);
  };

  const replayEntranceIntro = () => {
    setShowAnimationsModal(false);
    if (currentPage !== 'home') {
      setHomeKey(prev => prev + 1);
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setEntranceActive(true);
  };

  // Top Picks specifically requested by user
  const topPickProjects = [
    {
      id: 'ashtech-presidential',
      title: 'Ashtech Presidential',
      developer: 'Ashtech',
      category: 'RESIDENTIAL',
      badge: 'TOP PICK',
      status: 'Under Construction',
      statusColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      location: 'Greater Noida, Sector 12',
      price: '₹26.1 L - ₹48.5 L',
      type: 'Residential Apartments',
      beds: '1, 2 & 3 BHK',
      area: '650 - 1,450 SQ FT',
      image: '/images/Real Estate/ashtech_presidential.avif',
      description: 'Sophisticated multi-tier residential development with Olympic-grade clubhouse, private elevators, landscaped sky balconies, and supreme sector connectivity.',
      highlights: ['Prime Sector 12 Connectivity', 'Clubhouse & Gymnasium', 'Children Play Zone', '24x7 Tier-3 Security']
    },
    {
      id: 'godrej-majesty',
      title: 'Godrej Majesty',
      developer: 'Godrej Properties',
      category: 'RESIDENTIAL',
      badge: 'TOP PICK',
      status: 'Ready to Move',
      statusColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      location: 'Greater Noida, Sector 27',
      price: '₹1.90 Cr - ₹4 Cr',
      type: '2, 3 & 4 BHK Apartments',
      beds: '2, 3 & 4 BHK',
      area: '1,950 - 3,800 SQ FT',
      image: '/images/Real Estate/godrej_majesty.avif',
      description: 'Ultra-luxury high-rise sanctuary by Godrej Properties featuring Olympic-grade amenities, infinity pool, and panoramic forest corridor vistas.',
      highlights: ['Forest Views & Clean Air', 'Immediate Possession Available', 'Olympic Length Lap Pool', 'White-Glove Concierge']
    },
    {
      id: 'grandthum',
      title: 'Grandthum by Group 108',
      developer: 'Group 108',
      category: 'COMMERCIAL',
      badge: 'TOP PICK',
      status: 'Under Construction',
      statusColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
      location: 'Techzone 4, Greater Noida West',
      price: '₹50 L - ₹3 Cr',
      type: 'Office Spaces, Studio Apartments & Retail Shops',
      beds: 'Studio, Retail & Office',
      area: '550 - 4,800 SQ FT',
      image: '/images/Real Estate/grandthum-1.webp',
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

  // Verified Property Portfolio
  const allProperties = topPickProjects;

  const filteredProperties = realEstateFilter === 'ALL' 
    ? allProperties 
    : allProperties.filter(p => p.category === realEstateFilter);

  // Interior Design Concepts & Execution Specializations
  const interiorProjects = [
    {
      id: 'living-spaces',
      title: 'Bespoke Living Architecture',
      category: 'Residential Design',
      location: 'Turnkey Living Spaces',
      image: '/images/travertine-living.jpg',
      year: 'Execution',
      description: 'Expansive living environments anchored by architectural wall treatments, grain-matched European oak joinery, and tailored atmospheric illumination.'
    },
    {
      id: 'master-suites',
      title: 'Master Bedroom Sanctuaries',
      category: 'Private Suites',
      location: 'Rest & Retreat',
      image: '/images/serene-bedroom.jpg',
      year: 'Execution',
      description: 'Acoustically balanced private quarters featuring custom paneled headboard walls, floating joinery, and soothing indirect cove lighting.'
    },
    {
      id: 'dining-spaces',
      title: 'Executive Dining Environments',
      category: 'Dining & Entertaining',
      location: 'Luxury Residences',
      image: '/images/skyline-dining.jpg',
      year: 'Execution',
      description: 'Curated dining rooms configured for effortless entertaining, framed by floor-to-ceiling volumes, premium marble surfaces, and bespoke lighting fixtures.'
    },
    {
      id: 'indoor-outdoor',
      title: 'Courtyard & Balcony Living',
      category: 'Spatial Design',
      location: 'Indoor-Outdoor Flow',
      image: '/images/courtyard-living.jpg',
      year: 'Execution',
      description: 'Harmonious integration of interior volumes with open-air leisure pockets, fluted timber screens, and water feature accents.'
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
              transition: { duration: 0.55, ease: [0.77, 0, 0.175, 1] }
            }}
            className="fixed inset-0 z-[100] bg-[#0c0d0e] flex flex-col items-center justify-center text-center text-[#faf8f5] select-none"
          >
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-radial from-[#c5a059]/15 via-transparent to-transparent pointer-events-none" />

            {/* Light Sweep Beam */}
            <motion.div 
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#faf8f5]/20 to-transparent pointer-events-none -skew-x-12"
            />

            {/* Entrance Identity Lockup */}
            <div className="relative z-10 flex flex-col items-center max-w-xl px-6">
              
              {/* Top Eyebrow */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-6"
              >
                SUNRISE PROPERTY PRESENTS
              </motion.span>

              {/* Official Sunrise Property Brand Logo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
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
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="font-serif-azimute text-5xl sm:text-7xl md:text-8xl leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                SUNRISE
              </motion.h1>

              {/* Caption */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#c5a059] font-light mt-4"
              >
                Find Your Property. Design Your Space. Live Better.
              </motion.span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* 1. EXACT FIXED NAVBAR: STRICT 5 MENU PAGES & BRAND LOGO        */}
      {/* ================================================================ */}
      <header className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-[6.25vw] transition-all duration-500 pointer-events-auto ${
        entranceActive
          ? 'opacity-0 pointer-events-none -translate-y-8 invisible'
          : 'opacity-100 translate-y-0 visible'
      } ${
        showNavbarBg 
          ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#c5a059]/25 shadow-2xl py-3 sm:py-3.5' 
          : 'bg-transparent border-transparent py-3.5 sm:py-4.5'
      }`}>
        {/* Brand Logo from public/images/logo-light.png */}
        <button 
          type="button"
          onClick={() => navigateTo('home')} 
          className="flex items-center gap-3.5 group cursor-pointer transition text-left py-1 px-1.5"
          aria-label="Sunrise Property Home"
        >
          <img 
            src="/images/logo-light.png" 
            alt="Sunrise Property - Properties & Interior Design" 
            className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain drop-shadow transition-transform duration-300 group-hover:scale-105" 
          />
        </button>

        {/* Navigation Menu: EXACTLY 5 REQUIRED PAGES */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] xl:text-[13px] tracking-[0.16em] uppercase font-sans">
          <button 
            type="button"
            onClick={() => navigateTo('home')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'home' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Home
          </button>
          <button 
            type="button"
            onClick={() => navigateTo('about')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'about' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            About Us
          </button>
          <button 
            type="button"
            onClick={() => navigateTo('real-estate')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'real-estate' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Real Estate
          </button>
          <button 
            type="button"
            onClick={() => navigateTo('interior')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'interior' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Interior Design
          </button>
          <button 
            type="button"
            onClick={() => navigateTo('contact')}
            className={`py-1.5 transition cursor-pointer drop-shadow ${currentPage === 'contact' ? 'text-white border-b-2 border-[#c5a059] font-semibold' : 'text-[#faf8f5]/75 hover:text-[#c5a059]'}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Section: Enquire CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => navigateTo('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-[#c5a059]/40 hover:border-[#c5a059] bg-[#c5a059]/10 hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-widest font-medium transition cursor-pointer shadow-sm"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button 
            type="button"
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
        {!entranceActive && mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-50 bg-[#0c0d0e]/98 backdrop-blur-xl border-b border-[#c5a059]/25 p-6 flex flex-col gap-4 text-xs uppercase tracking-widest lg:hidden shadow-2xl"
          >
            <button type="button" onClick={() => navigateTo('home')} className={`text-left py-2.5 transition cursor-pointer ${currentPage === 'home' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Home</button>
            <button type="button" onClick={() => navigateTo('about')} className={`text-left py-2.5 transition cursor-pointer ${currentPage === 'about' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>About Us</button>
            <button type="button" onClick={() => navigateTo('real-estate')} className={`text-left py-2.5 transition cursor-pointer ${currentPage === 'real-estate' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Real Estate</button>
            <button type="button" onClick={() => navigateTo('interior')} className={`text-left py-2.5 transition cursor-pointer ${currentPage === 'interior' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Interior Design</button>
            <button type="button" onClick={() => navigateTo('contact')} className={`text-left py-2.5 transition cursor-pointer ${currentPage === 'contact' ? 'text-[#c5a059] font-semibold' : 'text-white/80 hover:text-white'}`}>Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================================ */}
      {/* 2. HOME PAGE (EXACT CINEMATIC SCROLL EXPERIENCE + SUNRISE DATA) */}
      {/* ================================================================ */}
      {currentPage === 'home' && (
        <main>
          {/* HERO SECTION WITH EXTENDED TRACK (height: 380svh) */}
          <HomeHeroSection
            key={homeKey}
            setShowAnimationsModal={setShowAnimationsModal}
            simulateScroll={simulateScroll}
          />

          {/* ============================================================ */}
          {/* 3.1 HOME SECTION 01: REAL ESTATE + INTERIOR INTRODUCTION     */}
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* 3.1 HOME SECTION 01: REAL ESTATE + INTERIOR INTRODUCTION     */}
          {/* ============================================================ */}
          <section id="intro-services" className="bg-[#faf8f5] text-[#0f1115] py-24 sm:py-32 px-[6.25vw] relative z-40 shadow-[0_-35px_80px_rgba(0,0,0,0.7)]">
            <div className="max-w-[1500px] mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8a8f98] pb-4 mb-14 gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                  <span className="font-semibold text-[#0f1115]">Sunrise Property Atelier</span>
                  <span className="text-[#c5a059]">· Real Estate &amp; Interior Architecture</span>
                </div>
                <span>OFFICE A-722, GRANDTHUM · GREATER NOIDA WEST</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                <div className="lg:col-span-7">
                  <h2 className="font-serif-azimute text-[clamp(3.8rem,7.5vw,8.5rem)] leading-[0.92] tracking-[-0.025em] text-[#0f1115]">
                    <span className="block text-[0.72em]">FIND YOUR PROPERTY.</span>
                    <em className="block font-serif-azimute not-italic text-[#c5a059] text-[1.15em] ml-6">
                      design your space.
                    </em>
                  </h2>
                </div>

                <div className="lg:col-span-5 text-[#5a5f67] space-y-6 pt-4 text-base leading-relaxed">
                  <p className="text-xl text-[#0f1115] font-light">
                    Find Your Property. Design Your Space. Live Better.
                  </p>
                  <p className="text-[#454950]">
                    Sunrise Property delivers end-to-end expertise across prime real estate discovery and bespoke interior design. We help you find your ideal residential or commercial property, thoughtfully design your spaces, and execute turnkey interior solutions that elevate your lifestyle.
                  </p>
                  <span className="block text-xs font-mono tracking-widest uppercase text-[#a6833d] pt-2">
                    OFFICE A-722, GRANDTHUM, TECHZONE 4, GREATER NOIDA WEST
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
              <div className="pt-20 sm:pt-28 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-[#c5a059] font-semibold">
                      Disciplines &amp; Expertise
                    </span>
                    <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#0f1115] mt-2">
                      Our Services
                    </h3>
                  </div>
                  <p className="mt-4 md:mt-0 text-sm text-[#5a5f67] max-w-md">
                    End-to-end real estate advisory and interior craftsmanship delivered with professional guidance and turnkey accountability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">01 / REAL ESTATE</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Residential &amp; Commercial Real Estate
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Prime residential apartments, luxury villas, studio apartments, Grade-A commercial office suites, and high-footfall retail destinations across Greater Noida and prime corridors.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Residential Apartments &amp; Villas</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Commercial Offices &amp; Retail Shops</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Studio Apartments &amp; New Launches</li>
                    </ul>
                  </div>

                  {/* Service 2 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Compass className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">02 / CONSULTATION</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Property Consultation
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Professional real estate guidance, valuation analysis, developer credibility checks, legal verification, and end-to-end buying, selling, and leasing advisory.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Professional Buying &amp; Selling Guidance</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Valuation &amp; Legal Verification</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Rental &amp; Leasing Advisory</li>
                    </ul>
                  </div>

                  {/* Service 3 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Paintbrush className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">03 / INTERIOR ATELIER</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Interior Design
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Bespoke architectural interior design from concept design and ergonomic space planning to detailed 2D drawings, 3D visualization, and refined material selection.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Concept Design &amp; Space Planning</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> 2D Working Drawings &amp; Layouts</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Photorealistic 3D Visualization</li>
                    </ul>
                  </div>

                  {/* Service 4 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <SlidersHorizontal className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">04 / COMMERCIAL ATELIER</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Office Interiors
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Tailored commercial workspace transformations engineered for collaboration, brand aesthetics, executive cabins, modern conference rooms, and acoustic comfort.
                      </p>
                    </div>
                    <ul className="text-xs text-[#454950] space-y-2.5 pt-4 border-t border-[#f0ece3]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Corporate Cabins &amp; Workstations</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Conference &amp; Meeting Rooms</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Acoustic &amp; Ambient Lighting Schemes</li>
                    </ul>
                  </div>

                  {/* Service 5 */}
                  <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] flex flex-col justify-between md:col-span-2 lg:col-span-2">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#faf8f5] border border-[#e8e4dc] flex items-center justify-center text-[#c5a059] mb-6 shadow-sm">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-bold">05 / TURNKEY EXECUTION</span>
                      <h4 className="font-serif-azimute text-2xl sm:text-3xl text-[#0f1115] mt-1 mb-3">
                        Turnkey Interior Solutions
                      </h4>
                      <p className="text-sm text-[#5a5f67] leading-relaxed mb-6">
                        Single point of custody and complete peace of mind. We manage civil work, custom carpentry, false ceilings, electrical, plumbing, flooring, painting, and white-glove handover with guaranteed timelines.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#f0ece3] text-xs text-[#454950]">
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> Civil, Carpentry &amp; Electrical</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> False Ceiling, Flooring &amp; Paint</div>
                      <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#c5a059]" /> On-Time Handover &amp; Warranty</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 3.3 HOME SECTION 03: FEATURED PROPERTIES                     */}
              {/* ============================================================ */}
              <div className="pt-20 sm:pt-28">
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

              {/* ============================================================ */}
              {/* 3.4 HOME SECTION 04: WHY CHOOSE US                           */}
              {/* ============================================================ */}
              <div className="pt-24 sm:pt-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs tracking-widest uppercase text-[#c5a059] font-semibold">Our Distinctive Edge</span>
                <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#0f1115] mt-2">
                  Why Choose Sunrise Property
                </h3>
                <p className="text-sm text-[#5a5f67] mt-3 font-light">
                  Professional guidance, transparent dealings, quality design, and end-to-end support for all your property and interior needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <ShieldCheck className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Professional Guidance</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Experienced property advisors and interior architects offering expert market insights, zoning checks, and tailored spatial recommendations.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Award className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Transparent Dealings</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Complete pricing transparency, verified legal titles, clear documentation, and ethical advisory with zero hidden charges or surprises.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Paintbrush className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">Quality Design</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Bespoke architectural space planning, photorealistic 3D visualization, superior material specifications, and uncompromising craftsmanship.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(197,160,89,0.12)] group">
                  <Clock className="w-8 h-8 text-[#c5a059] mb-4 group-hover:scale-110 transition" />
                  <h4 className="font-serif-azimute text-xl mb-2 text-[#0f1115]">End-to-End Support</h4>
                  <p className="text-xs text-[#5a5f67] leading-relaxed">
                    Comprehensive single-point stewardship from property search and transaction to turnkey civil execution, interior fit-outs, and handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* ============================================================ */}
          {/* 3.5 HOME SECTION 05: ENQUIRY / CALL-TO-ACTION CARD           */}
          {/* ============================================================ */}
          <section className="py-20 sm:py-28 px-[6.25vw] bg-[#faf8f5]">
            <div className="max-w-[1500px] mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16181d] via-[#101216] to-[#0a0b0d] border border-[#c5a059]/35 hover:border-[#c5a059]/60 transition-colors duration-500 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4),0_0_60px_-15px_rgba(197,160,89,0.15)] p-8 sm:p-14 lg:p-16 text-white">
              {/* Ambient luxury lighting flares */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#c5a059]/15 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[110px] pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/35 text-[#c5a059] text-[10px] uppercase tracking-[0.22em] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                    Private Concierge Desk
                  </div>

                  <h3 className="font-serif-azimute text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-[1.15]">
                    Ready to Discuss Your Next Property or Interior Space?
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xl">
                    Direct consultation with our senior advisory desk. Confidential guidance for prime acquisitions, developer allocations, and bespoke interior architecture.
                  </p>

                  <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-white/75 font-light">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      Verified Developer Allocations
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      Bespoke Turnkey Interiors
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      Confidential Advisory
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
                  <button 
                    onClick={() => navigateTo('contact')}
                    className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#c5a059] hover:from-[#d4af37] hover:via-[#e2be5f] hover:to-[#d4af37] text-[#0c0d0e] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_-5px_rgba(197,160,89,0.35)] hover:shadow-[0_15px_40px_-5px_rgba(197,160,89,0.55)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <a 
                    href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#25D366]/50 text-white font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-3 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span>WhatsApp Concierge</span>
                  </a>
                </div>
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
              Find Your Property. Design Your Space. Live Better.
            </h1>
            <p className="text-lg text-[#5a5f67] max-w-3xl mt-4 font-light">
              Sunrise Property delivers end-to-end expertise across prime real estate discovery and bespoke interior design. We help you find your ideal residential or commercial property, thoughtfully design your spaces, and execute turnkey interior solutions that elevate your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6 text-sm text-[#5a5f67] leading-relaxed font-light">
              <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115]">
                Real Estate &amp; Interior Design in Perfect Harmony
              </h3>
              <p className="text-[#454950]">
                Sunrise Property was founded with the conviction that real estate acquisition and interior design should never be disconnected. We bridge the gap between finding the right address and crafting an inspiring space to live and work.
              </p>
              <p className="text-[#454950]">
                Whether you are searching for premium residential apartments, villas, studio apartments, commercial offices, or turnkey interior fit-outs, our team offers professional guidance, transparent dealings, quality design, and end-to-end support from discovery to handover.
              </p>
              <div className="pt-6 border-t border-[#e2ded6] grid grid-cols-3 gap-6">
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Transparent Dealings</span>
                </div>
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">5+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Core Services</span>
                </div>
                <div>
                  <span className="block font-serif-azimute text-4xl text-[#c5a059]">End-to-End</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6e737c]">Turnkey Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#e2ded6] shadow-2xl relative">
                <img 
                  src="/images/hero-villa.jpg" 
                  alt="Sunrise Property Grandthum Atelier" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0c0d0e]/85 backdrop-blur-md p-4 rounded-xl text-xs border border-white/15">
                  <span className="text-white font-medium">Office A-722, Grandthum</span>
                  <span className="text-[#c5a059] block text-[11px] mt-0.5">Techzone 4, Greater Noida West, Uttar Pradesh</span>
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
                To deliver enduring residential and commercial spaces that unite engineering precision, refined aesthetics, and seamless turnkey execution for our clients.
              </p>
            </div>
            <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Our Vision</span>
              <h4 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115]">Benchmark in Real Estate &amp; Interiors</h4>
              <p className="text-sm text-[#5a5f67] leading-relaxed font-light">
                To be the most trusted dual-discipline partner for real estate advisory and interior design, recognized for professional guidance, transparent dealings, and superior design quality.
              </p>
            </div>
          </div>

          {/* Why Sunrise Property */}
          <div className="border-t border-[#e2ded6] pt-16">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Why Choose Us</span>
              <h3 className="font-serif-azimute text-4xl text-[#0f1115] mt-1">Our Core Pillars</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">01</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Professional Guidance</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  Expert real estate and interior advisors providing verified project insights, spatial analysis, and tailored recommendations.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">02</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Transparent Dealings</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  Honest guidance, clear paperwork, transparent pricing structures, and zero hidden costs at every milestone.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">03</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">Quality Design</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  Custom space planning, photorealistic 3D visualization, premium material curation, and flawless execution.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#e8e4dc] hover:border-[#c5a059] transition shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-3">
                <span className="text-[#c5a059] font-serif-azimute text-3xl">04</span>
                <h4 className="font-serif-azimute text-2xl text-[#0f1115]">End-to-End Support</h4>
                <p className="text-xs text-[#5a5f67] leading-relaxed">
                  A seamless single window covering property search, buying, design drawings, civil execution, and final turnkey handover.
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
              From luxury residential apartments and bespoke sanctuaries to high-street commercial destinations and premium studio suites across Greater Noida, Noida, and Delhi NCR.
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
                      {idx === 4 && <Layers className="w-5 h-5" />}
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

          {/* 5.2 Featured Prime Developments & Available Portfolio */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e2ded6]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Curated Developments</span>
                <h2 className="font-serif-azimute text-3xl sm:text-4xl text-[#0f1115] mt-1">
                  Featured Prime Developments
                </h2>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-0">
                {['ALL', 'RESIDENTIAL', 'COMMERCIAL'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRealEstateFilter(tab)}
                    className={`px-4 py-2 rounded-lg text-xs uppercase tracking-widest transition cursor-pointer ${
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProperties.map((p) => (
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

          {/* 5.4 Property Enquiry Form / Enquire Now CTA */}
          <div id="real-estate-enquiry-form" className="relative overflow-hidden rounded-3xl bg-[#0c0d0e] border border-[#c5a059]/30 hover:border-[#c5a059]/60 transition-colors duration-500 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85),0_0_60px_-15px_rgba(197,160,89,0.12)] p-8 sm:p-12 lg:p-14 text-white">
            {/* Ambient luxury lighting flares */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#c5a059]/15 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Acquisitions Advisory Brief */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/35 text-[#c5a059] text-[10px] uppercase tracking-[0.22em] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                  Direct Acquisitions Desk
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-azimute text-3xl sm:text-4xl text-white font-bold tracking-tight leading-tight">
                    Private Property Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Direct consultation with our senior acquisitions desk. Whether securing priority allocations at Ashtech Presidential, Godrej Majesty, Grandthum, or private portfolio acquisitions, our partners provide confidential guidance.
                  </p>
                </div>

                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/85">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#c5a059]" />
                    </div>
                    <span>Direct builder allocations &amp; inventory access</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/85">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#c5a059]" />
                    </div>
                    <span>Complete legal title &amp; RERA verification</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/85">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#c5a059]" />
                    </div>
                    <span>Confidential transaction structuring &amp; terms</span>
                  </div>
                </div>

                {/* Direct VIP WhatsApp Concierge Touchpoint */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20real%20estate%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#25D366]/40 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white tracking-wide flex items-center gap-2">
                          Instant WhatsApp Concierge
                          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                        </div>
                        <div className="text-[11px] text-white/50 font-light">Direct line to senior acquisitions partner</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Right Column: Unified Form Surface */}
              <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10">
                {formSubmitted ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-[#c5a059]/40 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#c5a059] mx-auto" />
                    <h4 className="font-serif-azimute text-2xl text-white font-bold">Property Enquiry Received</h4>
                    <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto font-light leading-relaxed">
                      Our acquisitions director will reach out within two business hours with exhaustive brochures and scheduling details.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-3 rounded-xl bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-semibold">Confidential Allocation Request</span>
                      <span className="text-xs text-[#c5a059] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        Response within 2h
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-[0.14em] text-white/70 mb-1.5 font-medium">Your Name</label>
                        <input 
                          type="text" 
                          required 
                          value={contactForm.name} 
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} 
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-[#14161a] hover:bg-[#181a20] focus:bg-[#1a1d24] border border-white/12 hover:border-white/20 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 text-white placeholder:text-white/35 text-xs sm:text-sm outline-none transition-all duration-200" 
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-[0.14em] text-white/70 mb-1.5 font-medium">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          value={contactForm.email} 
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} 
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#14161a] hover:bg-[#181a20] focus:bg-[#1a1d24] border border-white/12 hover:border-white/20 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 text-white placeholder:text-white/35 text-xs sm:text-sm outline-none transition-all duration-200" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-[0.14em] text-white/70 mb-1.5 font-medium">Phone / WhatsApp</label>
                        <input 
                          type="tel" 
                          required 
                          value={contactForm.phone} 
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} 
                          placeholder="+91 98703 89489"
                          className="w-full px-4 py-3 rounded-xl bg-[#14161a] hover:bg-[#181a20] focus:bg-[#1a1d24] border border-white/12 hover:border-white/20 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 text-white placeholder:text-white/35 text-xs sm:text-sm outline-none transition-all duration-200" 
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-[0.14em] text-white/70 mb-1.5 font-medium">Project / Service of Interest</label>
                        <div className="relative">
                          <select 
                            value={contactForm.service}
                            onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                            className="w-full px-4 py-3 pr-10 rounded-xl bg-[#14161a] hover:bg-[#181a20] focus:bg-[#1a1d24] border border-white/12 hover:border-white/20 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 text-white text-xs sm:text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                          >
                            <option className="bg-[#14161a] text-white py-1" value="Ashtech Presidential (Sec 12, Greater Noida)">Ashtech Presidential (Greater Noida, Sector 12)</option>
                            <option className="bg-[#14161a] text-white py-1" value="Godrej Majesty (Sec 27, Greater Noida)">Godrej Majesty (Greater Noida, Sector 27)</option>
                            <option className="bg-[#14161a] text-white py-1" value="Grandthum by Group 108 (Greater Noida West)">Grandthum by Group 108 (Greater Noida West)</option>
                            <option className="bg-[#14161a] text-white py-1" value="Residential Properties">Residential Properties (Villas &amp; Penthouses)</option>
                            <option className="bg-[#14161a] text-white py-1" value="Commercial Properties">Commercial Properties (Offices &amp; Retail)</option>
                            <option className="bg-[#14161a] text-white py-1" value="Studio Apartments">Studio Apartments</option>
                            <option className="bg-[#14161a] text-white py-1" value="Rental &amp; Leasing Services">Rental &amp; Leasing Services</option>
                            <option className="bg-[#14161a] text-white py-1" value="New Projects">New Projects Launch</option>
                            <option className="bg-[#14161a] text-white py-1" value="Property Buying &amp; Selling">Property Buying &amp; Selling</option>
                            <option className="bg-[#14161a] text-white py-1" value="Property Consultation">Property Consultation &amp; Valuation</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-[#c5a059] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.14em] text-white/70 mb-1.5 font-medium">Requirements / Preferred Unit Size</label>
                      <textarea 
                        rows={3} 
                        value={contactForm.message} 
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} 
                        placeholder="Mention budget range, timeline to purchase, or preferred unit configuration..."
                        className="w-full px-4 py-3 rounded-xl bg-[#14161a] hover:bg-[#181a20] focus:bg-[#1a1d24] border border-white/12 hover:border-white/20 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 text-white placeholder:text-white/35 text-xs sm:text-sm outline-none transition-all duration-200 resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#c5a059] hover:from-[#d4af37] hover:via-[#e2be5f] hover:to-[#d4af37] text-[#0c0d0e] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_10px_30px_-5px_rgba(197,160,89,0.35)] hover:shadow-[0_15px_40px_-5px_rgba(197,160,89,0.55)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
                    >
                      <span>Enquire Now · Schedule Consultation</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 pt-2 text-xs text-white/50 font-light">
                      <span className="flex items-center gap-1.5 text-white/75"><ShieldCheck className="w-4 h-4 text-[#c5a059]" /> 100% Confidential</span>
                      <span>•</span>
                      <span>Zero Spam Guarantee</span>
                      <span>•</span>
                      <span>RERA Verified Advisory</span>
                    </div>
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

          {/* 6.2 Project Enquiry Form / Get a Consultation CTA */}
          <div id="interior-consultation-form" className="p-8 sm:p-12 rounded-3xl bg-[#07090e]/85 backdrop-blur-3xl border border-white/12 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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
                    href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Interactive Interior Form */}
              <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-serif-azimute text-xl text-white">Interior Brief Received</h4>
                    <p className="text-xs text-white/70 max-w-sm mx-auto">
                      Thank you. Our design director will review your brief and schedule an exploratory virtual or in-person design consultation.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-5 py-2.5 rounded-xl bg-[#c5a059] text-[#0c0d0e] text-xs font-semibold uppercase tracking-wider hover:bg-white transition cursor-pointer"
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
                          placeholder="+91 98703 89489"
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
              Whether acquiring a prime residential or commercial property in Greater Noida and Delhi NCR, or commissioning a bespoke interior design, our partners provide discreet, end-to-end stewardship.
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
                    <a href="tel:+919870389489" className="text-base font-serif-azimute text-[#0f1115] hover:text-[#c5a059] transition">
                      +91 98703 89489
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Concierge Desk (10:00 AM - 7:30 PM IST)</span>
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
                      href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-serif-azimute text-[#0f1115] hover:text-[#25D366] transition"
                    >
                      +91 78359 71222
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Instant coordination &amp; project brochures</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98]">Electronic Correspondence</span>
                    <a href="mailto:info@advikacreation.in" className="text-sm font-medium text-[#0f1115] hover:text-[#c5a059] transition">
                      info@advikacreation.in
                    </a>
                    <span className="block text-xs text-[#6e737c] mt-0.5">Official enquiries &amp; project briefs</span>
                  </div>
                </div>

                {/* Office Addresses */}
                <div className="flex items-start gap-4 pt-4 border-t border-[#f0ece3]">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059]/10 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8a8f98] font-semibold">Head Office &amp; Atelier</span>
                    <p className="text-sm font-semibold text-[#0f1115] font-serif-azimute leading-relaxed mt-0.5">
                      Office A-722, 7th Floor, Tower A, Grandthum
                    </p>
                    <p className="text-xs text-[#454950] leading-relaxed mt-0.5">
                      Grandthum by Group 108, Plot No. 7, Sector Techzone 4, Greater Noida West (Noida Extension), Gautam Buddha Nagar, Uttar Pradesh 201306.
                    </p>
                    <p className="text-[11px] text-[#717680] leading-relaxed mt-1">
                      <strong className="text-[#0f1115] font-medium">Landmark:</strong> Main 130m Expressway, 5 mins from Gaur Chowk (Kisan Chowk). Dedicated visitor parking &amp; concierge at Tower A.
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsive Google Map Embed with Full Colors & Interactive Accents */}
              <div className="rounded-2xl overflow-hidden border-2 border-[#e8e4dc] hover:border-[#c5a059]/50 transition-all bg-white shadow-xl flex flex-col">
                {/* Colorful Top Banner */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-white via-[#faf8f5] to-amber-50/40 border-b border-[#e8e4dc] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-rose-500/25">
                      <MapPin className="w-5 h-5 fill-white text-rose-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-700">Official Atelier &amp; Desk</span>
                      </div>
                      <h4 className="font-serif-azimute text-lg sm:text-xl text-[#0f1115] leading-tight mt-0.5">
                        Sunrise Property @ Grandthum
                      </h4>
                      <p className="text-xs text-[#5a5f67] font-light">
                        Office A-722, 7th Floor, Tower A · Techzone 4, Greater Noida West
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Grandthum+by+Group+108,+Plot+No.+7,+Techzone+4,+Greater+Noida+West" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm transition hover:scale-105 cursor-pointer"
                  >
                    <span>Open Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Map Full-Color Viewport (Pinpoint Grandthum location) */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-[#f0eee9]">
                  <iframe 
                    title="Sunrise Property Grandthum Location"
                    src="https://maps.google.com/maps?q=Grandthum+by+Group+108,+Techzone+4,+Greater+Noida+West,+Uttar+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                {/* Colorful Bottom Navigation Strip */}
                <div className="p-3.5 sm:p-4 bg-[#faf8f5] border-t border-[#e8e4dc] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs text-[#5a5f67]">
                    <span className="font-light flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      Visits: 10:00 AM - 7:30 PM
                    </span>
                    <span className="text-[#e2ded6]">|</span>
                    <span className="font-medium text-[#0f1115]">Tower A, 7th Floor</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Grandthum+by+Group+108,+Plot+No.+7,+Techzone+4,+Greater+Noida+West"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:text-[#1557b0] font-semibold text-xs flex items-center gap-1 transition hover:underline"
                  >
                    <span>Get Directions</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form & WhatsApp Concierge Section */}
            <div className="lg:col-span-7 space-y-8">
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
                      className="mt-4 px-6 py-2.5 rounded-xl bg-[#0c0d0e] text-xs text-white hover:bg-[#c5a059] hover:text-[#0c0d0e] cursor-pointer transition font-semibold"
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
                          placeholder="+91 98703 89489"
                          className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] placeholder:text-[#9aa0a6] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition" 
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs uppercase tracking-wider text-[#6e737c] font-medium">
                          Service or Project of Interest
                        </label>
                        <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-medium">
                          Real Estate &amp; Interior
                        </span>
                      </div>
                      <div className="relative">
                        <select 
                          value={contactForm.service === 'Interior' ? 'Interior' : 'Real Estate'} 
                          onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })} 
                          className="w-full px-4 py-3.5 pr-10 rounded-xl bg-[#faf8f5] border border-[#e2ded6] text-[#0f1115] text-sm focus:border-[#c5a059] focus:bg-white outline-none transition appearance-none cursor-pointer font-medium shadow-sm"
                        >
                          <option value="Real Estate">Real Estate</option>
                          <option value="Interior">Interior</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-[#8a8f98]">
                          <ChevronDown className="w-4 h-4 text-[#8a8f98]" />
                        </div>
                      </div>
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
                Find Your Property. Design Your Space. Live Better.<br />
                Residential &amp; Commercial Real Estate, Property Consultation, Interior Design, Office Interiors and Turnkey Solutions.
              </p>
              <div className="text-[11px] text-[#c5a059] tracking-wider font-mono pt-2">
                OFFICE A-722, GRANDTHUM · TECHZONE 4, GREATER NOIDA WEST
              </div>
            </div>

            {/* Quick Links: EXACT 5 PAGES */}
            <div className="md:col-span-3 space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Navigation</span>
              <ul className="text-xs text-white/70 space-y-2">
                <li><button type="button" onClick={() => navigateTo('home')} className="hover:text-[#c5a059] transition cursor-pointer">Home</button></li>
                <li><button type="button" onClick={() => navigateTo('about')} className="hover:text-[#c5a059] transition cursor-pointer">About Us</button></li>
                <li><button type="button" onClick={() => navigateTo('real-estate')} className="hover:text-[#c5a059] transition cursor-pointer">Real Estate</button></li>
                <li><button type="button" onClick={() => navigateTo('interior')} className="hover:text-[#c5a059] transition cursor-pointer">Interior Design</button></li>
                <li><button type="button" onClick={() => navigateTo('contact')} className="hover:text-[#c5a059] transition cursor-pointer">Contact Us</button></li>
              </ul>
            </div>

            {/* Contact Coordinates */}
            <div className="md:col-span-4 space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#c5a059] font-semibold">Head Office</span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Office A-722, Grandthum, Techzone 4,<br />
                Greater Noida West, Uttar Pradesh, India.<br />
                Telephone: <a href="tel:+919870389489" className="text-[#c5a059] hover:underline">+91 98703 89489</a><br />
                WhatsApp: <a href="https://wa.me/917835971222" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">+91 78359 71222</a><br />
                Email: <a href="mailto:info@advikacreation.in" className="text-[#c5a059] hover:underline">info@advikacreation.in</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/40 gap-4">
            <p>© 2026 Sunrise Property. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[11px] text-white/60">
              <a href="/privacy-policy" className="hover:text-[#c5a059] transition">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="/terms-and-conditions" className="hover:text-[#c5a059] transition">
                Terms &amp; Conditions
              </a>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-[#c5a059] hover:text-white uppercase tracking-wider text-[11px] transition cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      {!entranceActive && (
        <a
          href="https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-[#25D366]/20"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      )}

      {/* ================================================================ */}
      {/* 8.5 SELECTED PROJECT DETAILS MODAL                               */}
      {/* ================================================================ */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white/95 backdrop-blur-2xl border border-[#c5a059]/35 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] text-[#0c0d0e] flex flex-col max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#0c0d0e]/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border bg-[#c5a059]/15 text-[#9a7830] border-[#c5a059]/40 font-semibold">
                  {selectedProjectModal.badge || 'PROJECT MONOGRAPH'}
                </span>
                <span className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border font-medium ${selectedProjectModal.statusColor || 'bg-black/5 text-[#0c0d0e]'}`}>
                  {selectedProjectModal.status}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProjectModal(null)} 
                className="text-[#0c0d0e]/60 hover:text-[#0c0d0e] p-1.5 rounded-lg bg-black/5 hover:bg-black/10 transition cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-6">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#c5a059]/20 shadow-md">
                <img 
                  src={selectedProjectModal.image} 
                  alt={selectedProjectModal.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#9a7830] font-bold">
                  Developer: {selectedProjectModal.developer}
                </span>
                <h3 className="font-serif-azimute text-3xl sm:text-4xl text-[#0c0d0e] mt-1">
                  {selectedProjectModal.title}
                </h3>
                <p className="text-xs text-[#555b66] flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{selectedProjectModal.location}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-[#f8f6f0] p-4 rounded-xl border border-[#e8e2d5] text-xs shadow-inner">
                <div>
                  <span className="text-[#717680] block text-[10px] uppercase tracking-wider font-medium">Property Type</span>
                  <span className="text-[#0c0d0e] font-semibold text-sm">{selectedProjectModal.type}</span>
                </div>
                <div>
                  <span className="text-[#717680] block text-[10px] uppercase tracking-wider font-medium">Price Range</span>
                  <span className="text-[#9a7830] font-bold text-base">{selectedProjectModal.price}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#717680] font-semibold">Architectural Narrative</span>
                <p className="text-xs text-[#373b42] leading-relaxed font-normal">
                  {selectedProjectModal.description}
                </p>
              </div>

              {selectedProjectModal.highlights && (
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#9a7830] font-bold">Key Highlights &amp; Amenities</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProjectModal.highlights.map((h: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[#2d3138] font-medium bg-black/[0.02] p-2 rounded-lg border border-black/[0.04]">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#0c0d0e]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/917835971222?text=Hello%20Sunrise%20Property,%20I%20am%20interested%20in%20${encodeURIComponent(selectedProjectModal.title)}%20(${encodeURIComponent(selectedProjectModal.developer)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition cursor-pointer text-center shadow-sm"
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
                className="py-3 px-4 rounded-xl bg-[#0c0d0e] hover:bg-[#c5a059] text-white hover:text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition cursor-pointer text-center shadow-sm"
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
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
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
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') navigateTo('home'); setTimeout(() => simulateScroll(0), 100); }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/10 text-white cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 1</span>
                  <span>01. Day Hero (YOUR NEXT)</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') navigateTo('home'); setTimeout(() => simulateScroll(0.32), 100); }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-left border border-white/10 text-white cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 2</span>
                  <span>02. Night Facade Crossfade</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') navigateTo('home'); setTimeout(() => simulateScroll(0.66), 100); }}
                  className="p-2.5 rounded-lg bg-[#c5a059]/15 hover:bg-[#c5a059]/25 text-left border border-[#c5a059]/40 text-[#faf8f5] cursor-pointer"
                >
                  <span className="block text-[#c5a059] font-semibold text-[10px]">STAGE 3 (PINNED FULL-PAGE)</span>
                  <span>03. Logo &amp; Name Reveal</span>
                </button>
                <button
                  onClick={() => { setShowAnimationsModal(false); if (currentPage !== 'home') navigateTo('home'); setTimeout(() => simulateScroll(1.0), 100); }}
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
