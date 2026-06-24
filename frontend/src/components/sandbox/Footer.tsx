// src/components/sandbox/Footer.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  const isCoarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const handleMouseEnter = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCoarse) return;
    
    const innerCard = e.currentTarget.querySelector(".btn-inner");
    const svg = e.currentTarget.querySelector("svg");

    gsap.to(innerCard, {
      x: 4,
      y: 4,
      backgroundColor: "#2A2825",
      color: "#F5F4F0",
      duration: 0.1,
      ease: "power1.out"
    });

    if (svg) {
      gsap.to(svg, { stroke: "#F5F4F0", scale: 1.1, duration: 0.1 });
    }
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCoarse) return;

    const innerCard = e.currentTarget.querySelector(".btn-inner");
    const svg = e.currentTarget.querySelector("svg");

    gsap.to(innerCard, {
      x: 0,
      y: 0,
      backgroundColor: "#FFFFFF",
      color: "#2A2825",
      duration: 0.15,
      ease: "power2.inOut"
    });

    if (svg) {
      gsap.to(svg, { stroke: "#2A2825", scale: 1, duration: 0.15 });
    }
  });

  const socials = [
    { name: "GitHub", url: "https://github.com/CodeWithCata", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
    { name: "Instagram", url: "https://www.instagram.com/catalinromanasul/", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
    { name: "Facebook", url: "https://www.facebook.com/mocanu.catalin.184/", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/catalin-mocanu-535848384?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M3.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" },
    { name: "Email", url: "mailto:contact@catalindev116@gmail.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" }
  ];

  return (
    // 🛠️ Schimbat py-16 în pb-8 și adăugat container de lățime maximă controlat
    <footer className="px-4 pb-3 pt-4 relative w-full max-w-7xl mx-auto" ref={containerRef}>
      
      {/* 📐 SHADOW CONTAINER ALINIAT */}
      <div 
        className="absolute inset-x-4 inset-y-0 bg-[#2A2825] pointer-events-none translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 z-0"
        style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" }}
      />

      {/* 🚀 CONTAINER PRINCIPAL */}
      <div 
        className="border-4 border-[#2A2825] bg-[#F5F4F0] overflow-hidden relative z-10"
        style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" }}
      >
        
        {/* Partea de Sus */}
        <div className="p-5 md:p-6 grid md:grid-cols-[1fr_auto] gap-6 items-center border-b-4 border-[#2A2825]">
          
          {/* Stânga: Identitate */}
          <div>
            <div className="inline-block bg-[#FF0000] text-white px-2 py-0.5 font-mono text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_0px_rgba(42,40,37,1)] select-none">
              AUTHOR_TAG_01
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#2A2825] tracking-tighter uppercase leading-none select-none">
              @CWCata
            </h3>
            <p className="mt-2 font-mono text-xs text-[#2A2825]/80 max-w-sm leading-relaxed border-l-2 border-[#2A2825] pl-3">
              Gândit asimetric, asamblat în producție. <br />
              <span className="text-[#FF0000] font-bold">//</span> Structură stabilă.
            </p>
          </div>

          {/* Dreapta: Social Links */}
          <div className="flex flex-wrap gap-2 md:justify-end pr-4 md:pr-10">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative block select-none bg-[#2A2825] h-[38px] w-fit layout-fix"
                style={{ paddingRight: "3px", paddingBottom: "3px" }}
              >
                <div className="btn-inner bg-white border-2 border-[#2A2825] px-3 py-1.5 font-mono text-xs font-black uppercase text-[#2A2825] flex items-center gap-2 h-full w-full will-change-transform">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-[#2A2825] stroke-[2.5]"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  >
                    {social.name === "Instagram" && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                    <path d={social.icon} />
                  </svg>
                  <span>{social.name}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Bara de Jos */}
        <div className="bg-[#2A2825] text-[#F5F4F0] px-4 py-2.5 flex justify-between items-center font-mono text-[10px] md:text-xs uppercase font-black select-none">
          <div className="flex items-center gap-3">
            <div className="bg-[#00FF00] text-[#2A2825] px-1.5 py-0.5 text-[9px] font-black tracking-tighter">
              SYS_ACTIVE
            </div>
            <span className="opacity-80 hidden sm:inline">DEVELOPMENT WORKING</span>
          </div>
          <div className="opacity-60 tracking-tight">
            © {new Date().getFullYear()} // getch();
          </div>
        </div>

      </div>
    </footer>
  );
}