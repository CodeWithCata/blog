// src/components/sandbox/Header.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const diskRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<SVGSVGElement>(null);
  const repairRef = useRef<HTMLSpanElement>(null);

  // Refs for entrance animation targets
  const topBarRef = useRef<HTMLDivElement>(null);
  const codeSymbolRef = useRef<HTMLDivElement>(null);
  const terminalPromptRef = useRef<HTMLSpanElement>(null);
  const devNameRef = useRef<HTMLSpanElement>(null);
  const h1Line1Ref = useRef<HTMLDivElement>(null);
  const h1Line2Ref = useRef<HTMLDivElement>(null);
  const docBoxRef = useRef<HTMLDivElement>(null);

  // Continuous loop rotation
  useGSAP(() => {
    gsap.to(loopRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
    });
  }, { scope: containerRef });

  // ✨ Entrance animation – safe visibility
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.7 } });

    tl.from(topBarRef.current, {
      y: -40,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.4)",
    })
      .from(
        [terminalPromptRef.current, devNameRef.current],
        {
          autoAlpha: 0,
          x: -10,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        codeSymbolRef.current,
        {
          autoAlpha: 0,
          scale: 1.2,
          y: 15,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        h1Line1Ref.current,
        {
          autoAlpha: 0,
          y: 30,
          rotationX: 10,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        h1Line2Ref.current,
        {
          autoAlpha: 0,
          y: 20,
          rotationX: 10,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      )
      // ✅ FIX: fromTo guarantees final visible state
      .fromTo(
        docBoxRef.current,
        {
          autoAlpha: 0,
          scale: 0.95,
          y: 20,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .from(
        diskRef.current,
        {
          autoAlpha: 0,
          rotateY: -90,
          scale: 0.8,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, { scope: containerRef });

  // Disk hover interactions
  const handleDiskMouseEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    gsap.killTweensOf(diskRef.current);
    const tl = gsap.timeline();
    tl.fromTo(
      diskRef.current,
      { y: -30, rotateX: 0, rotateY: 0, rotateZ: 0 },
      {
        y: 0,
        rotateX: -16,
        rotateY: 14,
        rotateZ: -4,
        scale: 1.1,
        boxShadow: "-14px 16px 0px 0px rgba(255, 0, 0, 1)",
        duration: 0.4,
        ease: "power2.in",
      }
    )
      .to(diskRef.current, {
        y: -6,
        rotateY: 6,
        rotateZ: 2,
        boxShadow: "-6px 8px 0px 0px rgba(255, 255, 0, 1)",
        duration: 0.12,
        ease: "power1.out",
      })
      .to(diskRef.current, {
        y: 0,
        rotateX: -12,
        rotateY: 12,
        rotateZ: -2,
        scale: 1.06,
        boxShadow: "-10px 12px 0px 0px rgba(42,40,37,1)",
        duration: 0.35,
        ease: "back.out(2.5)",
      });
  };

  const handleDiskMouseLeave = () => {
    gsap.killTweensOf(diskRef.current);
    gsap.to(diskRef.current, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      boxShadow: "4px 4px 0px 0px rgba(42,40,37,1)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  // Repair word hover
  const handleRepairMouseEnter = () => {
    gsap.to(repairRef.current, {
      y: -4,
      x: 2,
      skewX: -5,
      duration: 0.15,
      ease: "steps(3)",
    });
  };

  const handleRepairMouseLeave = () => {
    gsap.to(repairRef.current, {
      y: 0,
      x: 0,
      skewX: 0,
      duration: 0.15,
      ease: "steps(3)",
    });
  };

  // Loop icon hover
  const handleLoopMouseEnter = () => {
    gsap.to(loopRef.current, {
      timeScale: 4,
      duration: 0.3,
    });
  };

  const handleLoopMouseLeave = () => {
    gsap.to(loopRef.current, {
      timeScale: 1,
      duration: 0.5,
    });
  };

  return (
    <header className="pt-6 md:pt-12 select-none" ref={containerRef}>
      {/* Container Principal */}
      <div className="border-4 border-[#2A2825] bg-[#F5F4F0] shadow-[4px_4px_0px_0px_rgba(42,40,37,1)] md:shadow-[8px_8px_0px_0px_rgba(42,40,37,1)] overflow-hidden relative group/header">
        
        {/* CROSSHAIRS DECORATIVE */}
        <div className="absolute top-14 left-2 w-2 h-2 border border-[#2A2825]/20 pointer-events-none hidden md:block" />
        <div className="absolute top-14 right-2 w-2 h-2 border border-[#2A2825]/20 pointer-events-none hidden md:block" />
        
        {/* BARA DE SUS */}
        <div
          ref={topBarRef}
          className="bg-[#2A2825] text-[#F5F4F0] px-3 md:px-4 py-2.5 flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest font-black border-b-4 border-[#2A2825] select-none relative group-hover/header:bg-[#1A1917] transition-colors duration-300"
        >
          {/* TEXTURA GRID */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

          {/* PARTEA STÂNGĂ */}
          <div className="flex items-center gap-3 truncate mr-2 relative z-10 p-1 rounded-sm overflow-hidden group/title">
            <div className="absolute inset-0 -z-10 bg-[#2A2825] group-hover/header:bg-[#151413] transition-colors duration-300" />
            <div className="absolute inset-0 -z-10 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[size:100%_4px]" />
            <div className="absolute inset-0 -z-10 opacity-0 group-hover/header:opacity-100 bg-[radial-gradient(circle_at_left,rgba(0,255,0,0.08),transparent_70%)] transition-opacity duration-300 pointer-events-none" />

            <span
              ref={terminalPromptRef}
              className="text-[#00FF00] font-bold animate-[pulse_0.4s_infinite_steps(2)] group-hover/header:text-[#FFFF00]"
            >
              &gt;_
            </span>
            <span
              ref={devNameRef}
              className="truncate tracking-wider text-[#F5F4F0] group-hover/header:text-[#00FF00] transition-colors duration-200"
            >
              CATALIN_MOCANU // DEVELOPER
            </span>
          </div>

          {/* PARTEA DREAPTĂ: BUTOANE */}
          <div className="flex items-center gap-2.5 shrink-0 relative z-10 font-bold font-mono select-none [perspective:1000px]">
            
            {/* MINIMIZE */}
            <button 
              type="button"
              className="group/min w-6 h-6 flex items-center justify-center text-[#F5F4F0]/70 bg-[#2A2825] shadow-[0px_3px_0px_0px_#1A1917] hover:text-[#1A1917] hover:bg-[#E7E5DF] hover:shadow-none hover:translate-y-[3px] transition-all duration-250 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-75 cursor-pointer relative overflow-hidden border-none"
              title="Minimize"
            >
              <span className="w-2.5 h-[2px] bg-current transform group-hover/min:w-4 group-hover/min:h-[1px] group-hover/min:translate-y-[6px] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] block rounded-none relative z-10" />
              <span className="absolute bottom-0 inset-x-0 h-0 group-hover/min:h-4 bg-gradient-to-t from-current to-transparent opacity-0 group-hover/min:opacity-10 transition-all duration-300 ease-out pointer-events-none" />
            </button>
            
            {/* MAXIMIZE */}
            <button 
              type="button"
              className="group/max w-6 h-6 flex items-center justify-center text-[#F5F4F0]/70 bg-[#2A2825] shadow-[0px_3px_0px_0px_#1A1917] hover:text-[#1A1917] hover:bg-[#F5F4F0] hover:shadow-none hover:translate-y-[3px] transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] active:scale-75 cursor-pointer border-none relative overflow-hidden"
              title="Maximize"
            >
              <span className="relative w-2 h-2 border-2 border-current bg-current group-hover/max:w-3.5 group-hover/max:h-3.5 group-hover/max:bg-transparent group-hover/max:rotate-90 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] block rounded-none" />
              <span className="absolute inset-0 border border-current opacity-0 scale-50 group-hover/max:opacity-20 group-hover/max:scale-100 transition-all duration-300 ease-out pointer-events-none" />
            </button>
            
            {/* CLOSE */}
            <button 
              type="button"
              className="group/close w-6 h-6 flex items-center justify-center text-[#FF0000] bg-[#2A2825] shadow-[0px_3px_0px_0px_#1A1917] hover:text-[#F5F4F0] hover:bg-[#FF0000] hover:shadow-none hover:translate-y-[3px] transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] active:scale-90 cursor-pointer font-black border-none"
              title="Close System"
            >
              <span className="transform group-hover/close:scale-[1.25] transition-transform duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] text-xs block">
                X
              </span>
            </button>
          </div>
        </div>

        {/* Conținutul Header-ului */}
        <div className="p-4 sm:p-6 md:p-8 grid lg:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center [perspective:1200px]">
          
          {/* PARTEA STÂNGĂ */}
          <div className="relative group/left w-full">
            <div
              ref={codeSymbolRef}
              className="absolute -left-4 -top-6 text-[100px] font-black font-mono text-[#2A2825]/5 select-none pointer-events-none hidden xl:block leading-none transition-colors group-hover/left:text-[#FF0000]/10"
            >
              &lt;/&gt;
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-11 md:h-11 stroke-[#2A2825] stroke-[3] shrink-0 mt-2 hidden sm:block group-hover/left:translate-x-1 transition-transform" strokeLinecap="square">
                <path d="M4 6l6 6-6 6M12 18h8" />
              </svg>

              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-4xl md:text-[44px] font-black uppercase leading-[1.1] tracking-tighter text-[#2A2825] max-w-2xl">
                  <div ref={h1Line1Ref}>
                    Scriu,{" "}
                    <span className="relative inline-block text-[#2A2825] group/stric cursor-help whitespace-nowrap hover:scale-105 hover:-rotate-1 transition-all duration-75">
                      <span className="relative inline-block group-hover/stric:animate-[ping_0.1s_infinite_steps(2)]">stric,</span>
                      <svg className="absolute left-0 bottom-[-2px] w-full h-2 text-[#FF0000] group-hover/stric:text-[#FFFF00]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,5 L10,2 L20,8 L30,2 L40,8 L50,2 L60,8 L70,2 L80,8 L90,2 L100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
                      </svg>
                    </span>
                  </div>
                  <div ref={h1Line2Ref} className="mt-1">
                    <span
                      ref={repairRef}
                      onMouseEnter={handleRepairMouseEnter}
                      onMouseLeave={handleRepairMouseLeave}
                      className="text-white bg-[#2A2825] px-2 py-0.5 inline-block shadow-[3px_3px_0px_0px_rgba(255,255,0,1)] transform -rotate-1 cursor-pointer select-none hover:bg-[#FF0000] hover:shadow-[3px_3px_0px_0px_rgba(42,40,37,1)] transition-colors duration-150"
                    >
                      repar
                    </span>{" "}
                    și{" "}
                    <span
                      className="relative inline-flex items-center gap-1 cursor-pointer group/repet"
                      onMouseEnter={handleLoopMouseEnter}
                      onMouseLeave={handleLoopMouseLeave}
                    >
                      <span className="group-hover/repet:text-[#FF0000] transition-colors">repet.</span>
                      <svg
                        ref={loopRef}
                        className="w-4 h-4 md:w-5 md:h-5 stroke-[#FF0000] stroke-[2.5] shrink-0 group-hover/repet:stroke-[#2A2825]"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" strokeLinecap="square"/>
                      </svg>
                    </span>
                  </div>
                </h1>
                
                {/* ✅ DOCUMENT BOX – ACUM CU fromTo */}
                <div
                  ref={docBoxRef}
                  className="mt-5 max-w-xl relative p-4 border-2 border-[#2A2825] bg-white shadow-[4px_4px_0px_0px_rgba(42,40,37,1)] transition-all group-hover/left:shadow-[6px_6px_0px_0px_rgba(255,0,0,1)]"
                >
                  <div className="absolute -top-3.5 left-3 bg-[#E7E5DF] border-2 border-[#2A2825] px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-[#2A2825] group-hover/left:bg-[#FFFF00]">
                    doc_manifest.md
                  </div>
                  <p className="font-mono text-xs md:text-sm text-[#2A2825] leading-relaxed pl-2 md:pl-3 border-l-4 border-[#FF0000] group-hover/left:border-[#00FF00] transition-colors">
                    Un spațiu curat unde ideile se transformă în cod, bug-urile devin lecții scrise, iar designul brutalist dictează regulile interfeței.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PARTEA DREAPTĂ: Dischetă 3D */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-2 lg:mt-0 [perspective:2000px]">
            <div
              ref={diskRef}
              onMouseEnter={handleDiskMouseEnter}
              onMouseLeave={handleDiskMouseLeave}
              className="flex items-center justify-center border-4 border-[#2A2825] p-5 bg-[#E7E5DF] aspect-square w-36 md:w-44 shadow-[4px_4px_0px_0px_rgba(42,40,37,1)] [transform-style:preserve-3d] cursor-pointer relative group/disk origin-center will-change-transform"
            >
              {/* Marginea de Jos */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-3 bg-[#2A2825] border-x-4 border-[#2A2825] pointer-events-none" 
                style={{ transform: 'rotateX(-90deg) translateY(6px)', transformOrigin: 'bottom' }} 
              />
              {/* Marginea din Stânga */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-3 bg-[#1A1917] border-y-4 border-[#2A2825] pointer-events-none" 
                style={{ transform: 'rotateY(-90deg) translateX(-6px)', transformOrigin: 'left' }} 
              />

              {/* Notch protecție */}
              <div className="absolute top-3 right-3 w-3 h-3 bg-[#2A2825] [transform:translateZ(10px)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#FF0000] group-hover/disk:bg-transparent" />
              </div>

              {/* LED indicator */}
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-[#2A2825] border border-[#2A2825] group-hover/disk:bg-[#00FF00] group-hover/disk:animate-[pulse_0.15s_infinite_steps(2)] [transform:translateZ(20px)]" />
              
              {/* SVG Dischetă */}
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-20 h-20 md:w-24 md:h-24 stroke-[#2A2825] stroke-[4] [transform:translateZ(30px)] transition-transform duration-300 ease-out" 
                strokeLinecap="square"
              >
                <path d="M10 10 H75 L90 25 V90 H10 Z" fill="#D3D1C7" className="group-hover/disk:fill-[#E7E5DF] transition-colors duration-200" />
                <rect x="23" y="10" width="48" height="34" fill="#FFFFFF" stroke="#2A2825" strokeWidth="3" />
                <line x1="29" y1="18" x2="65" y2="18" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="29" y1="26" x2="65" y2="26" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="29" y1="34" x2="58" y2="34" strokeWidth="2" strokeDasharray="2 2" />
                <g className="group-hover/disk:translate-x-4 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <rect x="28" y="60" width="44" height="30" fill="#2A2825" />
                  <rect x="42" y="66" width="16" height="24" fill="#F5F4F0" />
                  <line x1="33" y1="68" x2="33" y2="82" stroke="#D3D1C7" strokeWidth="2" />
                  <line x1="37" y1="68" x2="37" y2="82" stroke="#D3D1C7" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}