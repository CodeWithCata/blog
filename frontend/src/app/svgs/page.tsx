// src/app/svgs/page.tsx
"use client";

/* ===================== IMPROVED RETRO SVG ENTITIES ===================== */

function PixelBug() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="#FF0000">
      <rect x="24" y="24" width="16" height="16" />
      <rect x="18" y="18" width="6" height="6" />
      <rect x="40" y="18" width="6" height="6" />
      <rect x="12" y="30" width="6" height="6" />
      <rect x="46" y="30" width="6" height="6" />
    </svg>
  );
}

function PixelCoffee() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="#2A2825">
      <rect x="16" y="20" width="28" height="20" />
      <rect x="44" y="24" width="6" height="12" />
      <rect x="20" y="44" width="20" height="4" />
    </svg>
  );
}

function PixelLaptop() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="#0000FF">
      <rect x="14" y="18" width="36" height="20" />
      <rect x="10" y="40" width="44" height="6" />
    </svg>
  );
}

// REDESIGNED: Minge de fotbal rotundă (folosind `<circle>`), păstrând pattern-ul retro geometric
function SoccerBall() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16 animate-[spin_12s_linear_infinite]" xmlns="http://www.w3.org/2000/svg">
      {/* Baza rotundă a mingii */}
      <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#2A2825" strokeWidth="6" />
      
      {/* Peticul central sub formă de hexagon blocky */}
      <polygon points="50,32 66,41 66,59 50,68 34,59 34,41" fill="#2A2825" />
      
      {/* Liniile de structură care pornesc din centru spre margini */}
      <line x1="50" y1="32" x2="50" y2="5" stroke="#2A2825" strokeWidth="4" />
      <line x1="66" y1="41" x2="90" y2="28" stroke="#2A2825" strokeWidth="4" />
      <line x1="66" y1="59" x2="90" y2="72" stroke="#2A2825" strokeWidth="4" />
      <line x1="50" y1="68" x2="50" y2="95" stroke="#2A2825" strokeWidth="4" />
      <line x1="34" y1="59" x2="10" y2="72" stroke="#2A2825" strokeWidth="4" />
      <line x1="34" y1="41" x2="10" y2="28" stroke="#2A2825" strokeWidth="4" />
    </svg>
  );
}

// REDESIGNED: Blocky, inverse-colored Minecraft-style crosshair
function MinecraftCrosshair() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16" fill="#2A2825">
      {/* Central pixel */}
      <rect x="28" y="28" width="8" height="8" />
      
      {/* Extension arms */}
      <rect x="28" y="12" width="8" height="16" /> {/* Top */}
      <rect x="28" y="36" width="8" height="16" /> {/* Bottom */}
      <rect x="12" y="28" width="16" height="8" /> {/* Left */}
      <rect x="36" y="28" width="16" height="8" /> {/* Right */}
    </svg>
  );
}

/* ===================== PAGE ===================== */

export default function SvgsPage() {
  const assets = [
    { id: "bug", name: "PIXEL_BUG.EXE", component: <PixelBug /> },
    { id: "coffee", name: "PIXEL_COFFEE.EXE", component: <PixelCoffee /> },
    { id: "laptop", name: "PIXEL_LAPTOP.EXE", component: <PixelLaptop /> },
    { id: "ball", name: "SOCCER_BALL_CIRCLE.EXE", component: <SoccerBall /> },
    { id: "crosshair", name: "CROSSHAIR_MC.EXE", component: <MinecraftCrosshair /> },
  ];

  return (
    <div
      className="min-h-screen bg-[#F5F4F0] text-[#2A2825] p-6 md:p-12 select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, #E7E5DF 1px, transparent 1px),
          linear-gradient(to bottom, #E7E5DF 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header-ul paginii de resurse */}
        <div className="border-4 border-[#2A2825] bg-[#2A2825] text-[#F5F4F0] p-4 mb-10 shadow-[6px_6px_0px_0px_rgba(255,0,0,1)]">
          <h1 className="font-mono text-xl font-black uppercase tracking-wider">
            ▶ ASSETS_MANIFEST / CIRCLE_UPDATE
          </h1>
          <p className="font-mono text-xs text-[#F5F4F0]/70 mt-1 uppercase">
            Elemente grafice optimizate cu forme circulare reale și țintă Minecraft.
          </p>
        </div>

        {/* Grid-ul cu SVG-uri */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div 
              key={asset.id} 
              className="border-4 border-[#2A2825] bg-[#F5F4F0] p-6 shadow-[6px_6px_0px_0px_rgba(42,40,37,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-center justify-center relative min-h-[180px]"
            >
              <div className="absolute top-0 left-0 bg-[#2A2825] text-[#F5F4F0] font-mono text-[9px] px-2 py-0.5 uppercase">
                {asset.id}
              </div>
              
              {/* Containerul SVG-ului */}
              <div className="p-4 bg-white/50 border-2 border-dashed border-[#2A2825]/30 flex items-center justify-center w-24 h-24">
                {asset.component}
              </div>

              {/* Numele componentei */}
              <span className="font-mono text-xs font-black uppercase mt-4 text-center tracking-tight">
                {asset.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer tehnic */}
        <div className="mt-12 text-center font-mono text-[11px] text-[#2A2825]/60 uppercase">
          [ sfârșitul listei de elemente actualizate • cwcata v1.2 ]
        </div>
      </div>
    </div>
  );
}