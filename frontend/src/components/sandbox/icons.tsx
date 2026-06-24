// src/components/sandbox/icons.tsx

export function PixelBug() {
  return (
    <svg viewBox="0 0 64 64" className="w-6 h-6" fill="#FF0000">
      <rect x="24" y="24" width="16" height="16" />
      <rect x="18" y="18" width="6" height="6" />
      <rect x="40" y="18" width="6" height="6" />
    </svg>
  );
}

export function PixelCoffee() {
  return (
    <svg viewBox="0 0 64 64" className="w-6 h-6" fill="#2A2825">
      <rect x="16" y="20" width="28" height="20" />
      <rect x="44" y="24" width="6" height="12" />
      <rect x="20" y="44" width="20" height="4" />
    </svg>
  );
}

export function PixelLaptop() {
  return (
    <svg viewBox="0 0 64 64" className="w-6 h-6" fill="#0000FF">
      <rect x="14" y="18" width="36" height="20" />
      <rect x="10" y="40" width="44" height="6" />
    </svg>
  );
}

export function SoccerBall() {
  return (
    <svg viewBox="0 0 100 100" className="w-14 h-14 animate-[spin_12s_linear_infinite]" fill="none">
      <rect x="4" y="4" width="92" height="92" fill="#fff" stroke="#2A2825" strokeWidth="6" />
      <rect x="38" y="38" width="24" height="24" fill="#2A2825" />
      <rect x="46" y="10" width="8" height="28" fill="#2A2825" />
      <rect x="46" y="62" width="8" height="28" fill="#2A2825" />
      <rect x="10" y="46" width="28" height="8" fill="#2A2825" />
      <rect x="62" y="46" width="28" height="8" fill="#2A2825" />
      <rect x="10" y="10" width="14" height="14" fill="#2A2825" />
      <rect x="76" y="10" width="14" height="14" fill="#2A2825" />
      <rect x="10" y="76" width="14" height="14" fill="#2A2825" />
      <rect x="76" y="76" width="14" height="14" fill="#2A2825" />
    </svg>
  );
}
export function Crosshair() {
  const SvgDefs = () => (
    <defs>
      {/* 🌊 Premium Gradient (Ice blue highlight down to rich deep navy) */}
      <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" />   {/* Ice Blue Tip */}
        <stop offset="40%" stopColor="#3B82F6" />  {/* Core Blue */}
        <stop offset="100%" stopColor="#1E3A8A" /> {/* Deep Navy Base */}
      </linearGradient>

      {/* ✨ Matte Texture & Dual-Layer Depth Shadow */}
      <filter id="premiumTexture" x="-20%" y="-20%" width="140%" height="140%">
        {/* Layer 1: Tight Drop Shadow for crisp positioning depth */}
        <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.4" floodColor="#0F172A" result="shadow1" />
        
        {/* Layer 2: Ambient Blue Glow */}
        <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.25" floodColor="#3B82F6" result="shadow2" />
        
        <feMerge result="shadows">
            <feMergeNode in="shadow2"/>
            <feMergeNode in="shadow1"/>
          </feMerge>

        {/* Layer 3: High-End Frosted Grain Texture */}
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" in="noise" result="coloredNoise" />
        <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="texture" />
        <feBlend mode="multiply" in="texture" in2="SourceGraphic" result="texturedGraphic" />
        
        <feMerge>
          <feMergeNode in="shadows"/>
          <feMergeNode in="texturedGraphic"/>
        </feMerge>
      </filter>
    </defs>
  );

  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <SvgDefs />
      {/* 💎 Glassmorphic Rim Highlight added via stroke below */}
      <path
        /* 🖱️ OG GEOMETRY OVERHAUL (Smooth, asymmetric classic pointer layout) */
        d="M 4 3 
           C 4 8, 3 13, 5 17 
           C 6 15, 8 14, 10 14 
           C 12 14, 15 16, 17 13 
           C 14 9, 9 5, 4 3 Z"
        fill="url(#cursorGrad)"
        filter="url(#premiumTexture)"
        stroke="rgba(255, 255, 255, 0.65)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}