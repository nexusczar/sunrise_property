"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  X,
  Play,
  RotateCcw,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [showAnimationsModal, setShowAnimationsModal] = useState(false);
  const [motionActive, setMotionActive] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [essenceTab, setEssenceTab] = useState(0);

  // 240svh scroll track: slightly slower and smoother pacing (~30% more travel)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Softened inertial scrub physics (stiffness: 60, damping: 26) for slightly slower, luxurious response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 26,
    mass: 1.1,
    restDelta: 0.0005
  });

  // ================================================================
  // EXACT GSAP SCROLLTIMELINE VALUES FROM azimuteresidencial.com.br:
  // 1. .hero__content: y: 0 -> -50px, opacity: 1 -> 0 (progress 0.15 -> 0.39)
  // 2. .hero__side, .hero__scroll: opacity 1 -> 0 (progress 0.00 -> 0.20)
  // 3. heroState.night: 0 -> 1 (progress 0.04 -> 0.43)
  // 4. heroState.presence: 1 -> 0 (progress 0.66 -> 1.00)
  // 5. .hero__reframe: opacity 0 -> 1 (progress 0.82 -> 0.99)
  // ================================================================

  const heroContentOpacity = useTransform(smoothProgress, [0.15, 0.39], [1, 0]);
  const heroContentY = useTransform(smoothProgress, [0.15, 0.39], [0, -50]);

  const heroSideOpacity = useTransform(smoothProgress, [0, 0.20], [1, 0]);
  const heroScrollOpacity = useTransform(smoothProgress, [0, 0.20], [1, 0]);

  // Day to Night image fade (0.04 to 0.43)
  const heroNightOpacity = useTransform(smoothProgress, [0.04, 0.43], [0, 1]);

  // Overall hero presence (1 to 0 at 0.66 to 1.00)
  const heroPresence = useTransform(smoothProgress, [0.66, 1.00], [1, 0]);

  // Reframe center reveal ("ASL APRESENTA AZIMUTE") at 0.82 to 0.99
  const heroReframeOpacity = useTransform(smoothProgress, [0.82, 0.99], [0, 1]);

  const antigravityPrompt = `Create the exact scroll-scrubbed cinematic hero animation from azimuteresidencial.com.br (paced slightly slower for enhanced smoothness):

1. HTML & Typography Setup:
- Fonts: 'Instrument Serif' (serif), 'Marcellus', 'DM Sans' (sans).
- Colors: background #211f1c (night) & #f3f0e9 (paper), text #f3f0e9 & #262825.
- Fixed header with brand symbol crystal SVG, AZIMUTE RESIDENCIAL lockup, nav links ("O projeto", "Perspectiva", "Essência", "Residências", "Espaços", "Contato"), and "ASL INCORPORADORA E CONSTRUTORA".

2. Hero Scroll Physics (GSAP ScrollTrigger / Framer Motion):
- Hero container: height 240svh (providing ~30% more scroll travel for a slightly slower, relaxed scrub pace), sticky inner viewport 100svh (min-height 620px).
- Scrub easing: GSAP scrub: 0.95 or Framer Motion useSpring(scrollYProgress, { stiffness: 60, damping: 26, mass: 1.1 }).
- Day image: "https://azimuteresidencial.com.br/assets/images/fachada-azimute-1920.webp"
- Night image: "https://azimuteresidencial.com.br/assets/images/fachada-azimute-noite-1920.webp" (absolute inset-0, pointer-events: none).
- Dual gradient shade overlay:
  linear-gradient(90deg, #17181768, transparent 60%), linear-gradient(0deg, #181c2299, transparent 58%, #16181436).

3. Exact Scrub Milestones:
- 0.00 - 0.20: .hero__side ("ARQUITETURA · LUZ · VIDA") and .hero__scroll ("EXPLORE") fade to opacity 0.
- 0.04 - 0.43: heroState.night smoothly animates 0 -> 1 (day building crossfades into night illuminated building).
- 0.15 - 0.39: .hero__content ("SEU PRÓXIMO horizonte.") animates y: 0 -> -50px, opacity: 1 -> 0.
- 0.66 - 1.00: heroState.presence animates 1 -> 0 (fade-out before next chapter).
- 0.82 - 0.99: .hero__reframe ("ASL APRESENTA / AZIMUTE / UMA NOVA DIREÇÃO PARA MORAR") fades in at opacity 0 -> 1.
- Next Section (.project): Slides up seamlessly ("01 / O PROJETO", "A VIDA EM boa direção.", "Ambientes que se conectam.").
- Reverse scroll: Scrubs backward smoothly with identical curves.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(antigravityPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    simulateScroll(0);
    setTimeout(() => simulateScroll(0.35), 700);
    setTimeout(() => simulateScroll(0.85), 2400);
    setTimeout(() => simulateScroll(1.1), 4500);
    setTimeout(() => simulateScroll(0), 7200);
  };

  const essenceData = [
    {
      title: 'O olhar',
      label: '01',
      caption: 'Close-up de uma mulher com olhar sereno, pele iluminada e um reflexo de luz dourada no rosto.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1280&q=80'
    },
    {
      title: 'O tempo',
      label: '02',
      caption: 'Retrato em close de um homem com expressão tranquila, junto à luz quente de uma janela.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1280&q=80'
    },
    {
      title: 'O encontro',
      label: '03',
      caption: 'Close-up de um casal sorrindo com os rostos próximos, em um momento de afeto à luz do fim da tarde.',
      img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=1280&q=80'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#211f1c] text-[#f3f0e9] selection:bg-[#c4a386] selection:text-[#211f1c]">
      
      {/* ================================================================ */}
      {/* HEADER EXATO DE azimuteresidencial.com.br                        */}
      {/* ================================================================ */}
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-[6.25vw] py-[27px] text-[#fff7ed] border-b border-transparent transition-all pointer-events-auto">
        {/* Wordmark & Crystal Brand */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); simulateScroll(0); }} 
          aria-label="Azimute, início"
          className="flex items-center gap-3 leading-none group cursor-pointer"
        >
          {/* Exact Brand Crystal Symbol */}
          <svg className="w-[43px] h-[52px]" viewBox="0 0 120 140" fill="none">
            <defs>
              <linearGradient id="nav-crystal" x1="15" y1="115" x2="105" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5e746f" />
                <stop offset=".24" stopColor="#b9b5a3" />
                <stop offset=".39" stopColor="#fff8e7" />
                <stop offset=".42" stopColor="#d7c1a0" />
                <stop offset=".48" stopColor="#445c5d" />
                <stop offset=".73" stopColor="#ac8e6d" />
                <stop offset=".84" stopColor="#f6eee0" />
                <stop offset="1" stopColor="#b8cac6" />
              </linearGradient>
            </defs>
            <path d="M15 115 60 17 105 115H92L60 42 28 115Z" fill="url(#nav-crystal)" />
            <path d="M15 115 60 17 105 115M23 116H97" stroke="#cbb18d" strokeWidth="1.2" />
            <path d="M44 78 73 56 68 91 61 76Z" fill="#cbb18d" />
            <path d="M35 124a50 50 0 0 0 50-87" stroke="#cbb18d" strokeWidth=".7" />
          </svg>

          <span className="block text-left">
            <span className="block font-marcellus text-[1.45rem] tracking-[0.18em] leading-none text-white">
              AZIMUTE
            </span>
            <span className="block text-[8px] tracking-[0.3em] text-center mt-[7px] text-[#f3f0e9]/80 font-sans uppercase">
              RESIDENCIAL
            </span>
          </span>
        </a>

        {/* Principal Navigation */}
        <nav className="hidden lg:flex items-center gap-[34px] text-[0.875rem] font-sans" aria-label="Principal">
          <a href="#projeto" onClick={(e) => { e.preventDefault(); simulateScroll(0.95); }} className="relative py-3 hover:text-white transition">O projeto</a>
          <a href="#perspectiva" onClick={(e) => { e.preventDefault(); simulateScroll(0.48); }} className="relative py-3 hover:text-white transition">Perspectiva</a>
          <a href="#essencia" onClick={(e) => { e.preventDefault(); simulateScroll(1.4); }} className="relative py-3 hover:text-white transition">Essência</a>
          <a href="#residencias" onClick={(e) => { e.preventDefault(); simulateScroll(1.1); }} className="relative py-3 hover:text-white transition">Residências</a>
          <a href="#espacos" onClick={(e) => { e.preventDefault(); simulateScroll(1.6); }} className="relative py-3 hover:text-white transition">Espaços</a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); simulateScroll(2.0); }} className="relative py-3 hover:text-white transition">Contato</a>
        </nav>

        {/* Right Section: ASL Signature & Animation Mode Toggle */}
        <div className="flex items-center gap-[25px]">
          <div className="hidden sm:flex items-center gap-[10px] text-[1.65rem] tracking-[-0.04em] font-serif-azimute">
            <span>ASL</span>
            <span className="text-[0.55rem] leading-[1.3] font-sans text-right uppercase tracking-wider text-[#dfb48d]">
              INCORPORADORA<br />E CONSTRUTORA
            </span>
          </div>

          {/* Exact Motion Toggle button as on azimuteresidencial.com.br */}
          <button 
            type="button" 
            onClick={() => setShowAnimationsModal(true)}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[#f3f0e9]/25 hover:border-[#f3f0e9] text-xs transition cursor-pointer"
            aria-label="Abrir configurações de animação e prompt"
            title="Animações & Prompt Antigravity"
          >
            <span className="text-[#dfb48d] font-mono text-xs">Ⅱ</span>
          </button>
        </div>
      </header>

      {/* ================================================================ */}
      {/* HERO SECTION EXATO (height: 240svh - slightly slower scroll)    */}
      {/* ================================================================ */}
      <section ref={containerRef} className="relative h-[240svh] bg-[#211f1c]" id="inicio" aria-labelledby="hero-title">
        <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden text-[#fff7ec] flex items-center justify-center">
          
          {/* .hero__image-frame */}
          <motion.div 
            style={{ opacity: motionActive ? heroPresence : 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* .hero__image (Dia / Sunset) */}
            <img 
              className="w-full h-full object-cover object-[58%_48%]"
              src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-1920.webp"
              alt="Perspectiva da fachada do Residencial Azimute, com varandas, jardins e entrada envidraçada ao pôr do sol."
            />

            {/* .hero__image--night (Noite com luzes acesas) */}
            <motion.img 
              style={{ opacity: motionActive ? heroNightOpacity : 0 }}
              className="absolute inset-0 w-full h-full object-cover object-[58%_48%] pointer-events-none"
              src="https://azimuteresidencial.com.br/assets/images/fachada-azimute-noite-1920.webp"
              alt=""
              aria-hidden="true"
            />

            {/* .hero__shade (Gradients exatos do CSS original) */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: 'linear-gradient(90deg, #17181768, transparent 60%), linear-gradient(0deg, #181c2299, transparent 58%, #16181436)'
              }}
            />

            {/* .hero__image-note */}
            <div className="absolute right-[6.25vw] bottom-[76px] text-[0.75rem] text-[#f4e9dc]/70">
              Perspectiva artística
            </div>
          </motion.div>

          {/* .hero__content (Texto inicial do hero) */}
          <motion.div 
            style={{ 
              opacity: motionActive ? heroContentOpacity : 1,
              y: motionActive ? heroContentY : 0
            }}
            className="absolute inset-x-[6.25vw] bottom-[13%] max-w-[1500px] z-20 pointer-events-auto"
          >
            {/* .hero__location */}
            <p className="flex items-center gap-4 text-[#f1e6d5] text-[0.75rem] tracking-[0.15em] uppercase mb-[25px]">
              <span className="w-8 h-[1px] bg-[#dfb48d] inline-block" />
              VILA VITÓRIA · MAUÁ
            </p>

            {/* #hero-title */}
            <h1 id="hero-title" className="font-serif-azimute text-[clamp(4.3rem,9.8vw,12rem)] leading-[0.94] tracking-[-0.025em] mb-[37px] text-white">
              <span className="block text-[0.67em] tracking-[0.005em]">SEU PRÓXIMO</span>
              <em className="block not-italic font-serif-azimute text-[1.3em] leading-[0.86] mt-[3px] ml-[7vw] text-[#cfbda6]">
                horizonte.
              </em>
            </h1>

            {/* .hero__bottom */}
            <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[65px] sm:items-end">
              <p className="text-[1rem] leading-[1.7] text-[#f3e6d5] font-sans">
                Uma nova direção para morar.<br />
                Um empreendimento ASL.
              </p>

              <a 
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#dfb48d] group"
                href="#projeto"
                onClick={(e) => { e.preventDefault(); simulateScroll(0.95); }}
              >
                <span className="underline underline-offset-8 decoration-white/40 group-hover:decoration-white transition">
                  Conheça o Azimute
                </span>
                <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-sm group-hover:border-white transition">
                  ↓
                </span>
              </a>
            </div>
          </motion.div>

          {/* .hero__side (Vertical lettering: ARQUITETURA · LUZ · VIDA) */}
          <motion.div 
            style={{ 
              opacity: motionActive ? heroSideOpacity : 1,
              writingMode: 'vertical-rl' 
            }}
            className="hidden lg:block absolute right-[2.7vw] top-[42%] text-[0.75rem] tracking-[0.2em] text-[#f1e6d5]/60 pointer-events-none"
            aria-hidden="true"
          >
            ARQUITETURA · LUZ · VIDA
          </motion.div>

          {/* .hero__scroll (EXPLORE indicator) */}
          <motion.div 
            style={{ opacity: motionActive ? heroScrollOpacity : 1 }}
            className="absolute bottom-6 left-[6.25vw] flex items-center gap-[18px] pointer-events-none"
            aria-hidden="true"
          >
            <span className="text-[0.625rem] tracking-[0.2em] text-[#f3f0e9]/70 uppercase">EXPLORE</span>
            <div className="h-[58px] w-[1px] bg-[#fff3df]/25 overflow-hidden relative">
              <div className="w-full h-1/2 bg-[#dfb48d] animate-pulse" />
            </div>
          </motion.div>

          {/* .hero__reframe (ASL APRESENTA / AZIMUTE / UMA NOVA DIREÇÃO PARA MORAR) */}
          <motion.div 
            style={{ opacity: motionActive ? heroReframeOpacity : 0 }}
            className="absolute inset-x-[6.25vw] bottom-[20%] text-center text-[#eee7dc] pointer-events-none z-30"
            aria-hidden="true"
          >
            <span className="block text-[#c4b6a5] tracking-[0.22em] text-[0.6875rem] uppercase mb-4">
              ASL APRESENTA
            </span>
            <p className="font-serif-azimute text-[clamp(4.5rem,13vw,14rem)] leading-[1.05] tracking-[0.08em] text-white drop-shadow-2xl">
              AZIMUTE
            </p>
            <span className="block text-[0.6875rem] tracking-[0.25em] text-[#c4b6a5] uppercase mt-4">
              UMA NOVA DIREÇÃO PARA MORAR
            </span>
          </motion.div>

        </div>
      </section>

      {/* ================================================================ */}
      {/* SEÇÃO 01 / O PROJETO (Exact HTML & Text)                         */}
      {/* ================================================================ */}
      <section className="relative bg-[#f3f0e9] text-[#262825] py-24 sm:py-32 px-[6.25vw] z-30 shadow-2xl" id="projeto" aria-labelledby="project-title">
        <div className="max-w-[1500px] mx-auto">
          {/* .chapter-label */}
          <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase text-[#68665e] border-b border-[#534d43]/20 pb-6 mb-16">
            <span className="font-medium text-[#262825]">01 / O PROJETO</span>
            <span>VILA VITÓRIA · MAUÁ / SP</span>
          </div>

          {/* .project__heading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7">
              <h2 id="project-title" className="font-serif-azimute text-[clamp(3.8rem,7.5vw,8.5rem)] leading-[0.92] tracking-[-0.025em] text-[#262825]">
                <span className="block text-[0.72em]">A VIDA EM</span>
                <em className="block font-serif-azimute not-italic text-[#87654c] text-[1.15em] ml-6">
                  boa direção.
                </em>
              </h2>
            </div>

            <div className="lg:col-span-5 text-[#68665e] space-y-6 pt-4 text-base leading-relaxed">
              <p className="text-xl text-[#262825] font-light">
                Ambientes que se conectam.<br />
                Espaço para estar, receber e viver.
              </p>
              <p>
                Na Vila Vitória, em Mauá, conheça o Azimute: apartamentos com ambientes integrados e varanda gourmet, em um projeto da ASL.
              </p>
              <span className="block text-xs font-mono tracking-widest uppercase text-[#87654c] pt-4">
                ASL INCORPORADORA E CONSTRUTORA
              </span>
            </div>
          </div>

          {/* Facts Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[#534d43]/15">
            <div>
              <span className="font-serif-azimute text-5xl sm:text-6xl text-[#262825] block">
                63 <i className="not-italic text-3xl font-light text-[#87654c]">e</i> 67 <small className="text-xl">m²</small>
              </span>
              <p className="text-xs uppercase tracking-wider text-[#68665e] mt-2">Áreas dos apartamentos</p>
            </div>

            <div>
              <span className="font-serif-azimute text-5xl sm:text-6xl text-[#262825] block">
                2 <small className="text-2xl font-light">dormitórios</small>
              </span>
              <p className="text-xs uppercase tracking-wider text-[#68665e] mt-2">Com 1 suíte</p>
            </div>

            <div>
              <span className="font-serif-azimute text-5xl sm:text-6xl text-[#262825] block">
                1 <i className="not-italic text-3xl font-light text-[#87654c]">ou</i> 2 <small className="text-2xl font-light">vagas</small>
              </span>
              <p className="text-xs uppercase tracking-wider text-[#68665e] mt-2">Conforme a unidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SEÇÃO 02 / RESIDÊNCIAS & DENTRO & FORA                           */}
      {/* ================================================================ */}
      <section className="bg-[#f3f0e9] text-[#262825] py-20 px-[6.25vw] border-t border-[#534d43]/10" id="residencias" aria-labelledby="residences-title">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#68665e] mb-4">02 / RESIDÊNCIAS</p>
          <h2 id="residences-title" className="font-serif-azimute text-[clamp(3.2rem,6vw,7rem)] leading-[0.95] text-[#262825] mb-12">
            O seu espaço.<br />
            <em className="text-[#87654c] not-italic ml-8">O seu jeito.</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-[#87654c] block mb-2 font-medium">
                DENTRO & FORA
              </span>
              <h3 className="font-serif-azimute text-4xl sm:text-5xl text-[#262825] mb-6">
                Entre a casa e o <em>horizonte.</em>
              </h3>
              <p className="text-[#68665e] leading-relaxed max-w-lg mb-8">
                Varanda gourmet com churrasqueira a carvão.<br />
                Espaço para receber e deixar os encontros acontecerem.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl aspect-16/10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
                alt="Varanda gourmet com vista"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SEÇÃO 03 / ESSÊNCIA                                              */}
      {/* ================================================================ */}
      <section className="bg-[#181c1c] text-[#eee8de] py-24 px-[6.25vw]" id="essencia" aria-labelledby="essence-title">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 border-b border-white/10 pb-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#c9b49b] mb-4">ESSÊNCIA AZIMUTE</p>
              <h2 id="essence-title" className="font-serif-azimute text-[clamp(3.5rem,6.8vw,8rem)] leading-[0.95]">
                É sobre<br />
                <em className="text-[#cfbda6] not-italic ml-6">sentir.</em>
              </h2>
            </div>

            {/* Switcher 01 / 02 / 03 */}
            <div className="flex items-center gap-4">
              {essenceData.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setEssenceTab(index)}
                  className={`px-4 py-2 rounded-full border text-xs tracking-wider transition cursor-pointer ${
                    essenceTab === index 
                      ? 'bg-[#c9b49b] text-[#181c1c] border-[#c9b49b] font-medium' 
                      : 'border-white/20 text-white/70 hover:border-white'
                  }`}
                >
                  <span className="font-mono mr-1.5">{item.label}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 rounded-xl overflow-hidden aspect-16/9 shadow-2xl">
              <img 
                src={essenceData[essenceTab].img} 
                alt={essenceData[essenceTab].caption}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            <div className="lg:col-span-4">
              <p className="text-xl font-light text-[#c4bbb0] mb-6">
                Um novo olhar para o que importa.
              </p>
              <span className="text-xs tracking-[0.25em] uppercase text-[#c9b49b] font-mono block">
                A VIDA, DE PERTO.
              </span>
              <p className="text-xs text-white/50 mt-6 leading-relaxed">
                {essenceData[essenceTab].caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOOTER EXATO                                                     */}
      {/* ================================================================ */}
      <footer className="bg-[#121414] text-[#eee8de] py-16 px-[6.25vw] border-t border-white/10" id="contato">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-marcellus text-2xl tracking-[0.2em] text-white">AZIMUTE</div>
            <div className="text-[9px] tracking-[0.3em] text-white/60 uppercase mt-1">RESIDENCIAL</div>
            <p className="text-xs text-white/50 mt-4">
              Vila Vitória · Mauá / SP — Um empreendimento ASL
            </p>
          </div>

          <div className="text-center md:text-right">
            <button 
              onClick={() => simulateScroll(0)}
              className="text-xs uppercase tracking-widest text-[#c9b49b] hover:text-white transition cursor-pointer"
            >
              Voltar ao início ↑
            </button>
            <p className="text-[10px] text-white/40 mt-3">
              © 2026 ASL Incorporadora e Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ================================================================ */}
      {/* MODAL DE ANIMAÇÃO & PROMPT ANTIGRAVITY (Acesso no ícone Ⅱ)        */}
      {/* ================================================================ */}
      {showAnimationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1a1d1d] border border-white/15 rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-slate-100 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide text-white">
                    Azimute Residencial — Scroll Engine
                  </h3>
                  <p className="text-xs text-slate-400">
                    Cópia exata de azimuteresidencial.com.br
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAnimationsModal(false)}
                className="text-slate-400 hover:text-white text-lg p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Testing Bar */}
            <div className="py-3 border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setMotionActive(!motionActive)}
                  className={`px-3 py-1 rounded text-[11px] font-medium transition cursor-pointer ${
                    motionActive ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  Animação: {motionActive ? 'Ativada (Ⅱ)' : 'Pausada (▷)'}
                </button>
              </div>

              <button
                onClick={runFullScrubDemo}
                className="px-3 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-[11px] transition flex items-center space-x-1.5 font-medium cursor-pointer"
              >
                <Play className="w-3 h-3 text-amber-400" />
                <span>Simular Rolagem Completa</span>
              </button>
            </div>

            {/* Prompt for Antigravity */}
            <div className="mt-4 flex-1 overflow-y-auto">
              <div className="text-xs font-mono text-amber-400/90 mb-2 flex items-center justify-between">
                <span>PROMPT PARA ANTIGRAVITY (PALAVRA POR PALAVRA):</span>
                <span className="text-[10px] text-slate-400">100% fiel ao código do site</span>
              </div>
              <pre className="text-xs font-mono bg-black/60 p-4 rounded-xl border border-white/10 text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
                {antigravityPrompt}
              </pre>
            </div>

            {/* Footer Actions */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-[11px] text-slate-400">
                azimuteresidencial.com.br
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowAnimationsModal(false)}
                  className="px-3 py-1.5 rounded text-xs text-slate-300 hover:bg-white/5 transition cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#cbb18d] hover:bg-[#dfb48d] text-[#211f1c] font-semibold text-xs transition shadow-md cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-950" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
