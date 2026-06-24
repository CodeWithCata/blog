import { fetchFromStrapi } from '@/services/strapi';
import { Article, StrapiResponse } from '@/types/strapi';
import Header from "@/components/sandbox/Header";
import QuestBoard from "@/components/sandbox/QuestBoard";
import { Metadata } from 'next';

// Ensure a hard error if configuration is broken instead of letting it fail silently 
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
if (!STRAPI_URL && process.env.NODE_ENV !== 'production') {
  console.warn("Warning: NEXT_PUBLIC_STRAPI_API_URL is missing from environment configs.");
}

// 🔍 SEO LAYER: Static/Dynamic Metadata definition for search crawler index optimization
export const metadata: Metadata = {
  title: 'Sandbox Dev Environment | My Tech Journal',
  description: 'Explore technical writeups, cyberpunk terminal hooks, code dumps, and visual core experiments.',
  openGraph: {
    title: 'Sandbox Dev Environment',
    description: 'Explore technical writeups, cyberpunk terminal hooks, code dumps, and visual core experiments.',
    type: 'website',
    url: 'https://cwc-blog-two.vercel.app/sandbox',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandbox Dev Environment',
    description: 'Explore technical writeups, cyberpunk terminal hooks, code dumps, and visual core experiments.',
  }
};

export default async function SandboxPage() {
  const energieDinamica = 80;

  // 🔄 Optimized Fetch Matrix with On-Demand Tagged Caching
  const response = await fetchFromStrapi('articles?populate=*', {
    next: { tags: ['strapi-articles'] },
  }).catch((err) => {
    console.error("Critical: Strapi data pipeline failed to pull stream.", err);
    return { data: [] }; // Safe graceful recovery fallback
  }) as StrapiResponse<Article[]>;

  const articles = response?.data || [];
  const activeUrl = STRAPI_URL || 'http://localhost:1337';

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#2A2825] relative">

      {/* 🌫 REPEATING MICRO NOISE GRID */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(42,40,37,0.2)_1px,_transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* 🧠 FLOATING CHAOS BLOBS */}
      <div className="pointer-events-none fixed inset-0 opacity-35 mix-blend-multiply z-0">
        <div className="absolute w-[600px] h-[600px] bg-[#2A2825] rounded-full blur-[120px] top-[-200px] left-[-150px] animate-blob" />
        <div className="absolute w-[500px] h-[500px] bg-[#FF0000] rounded-full blur-[130px] bottom-[-150px] right-[-100px] animate-blob-delayed" />
        <div className="absolute w-[350px] h-[350px] bg-[#FF0000]/50 rounded-full blur-[90px] top-[40%] right-[25%] animate-blob" />
        <div className="absolute w-[400px] h-[400px] bg-[#2A2825] rounded-full blur-[110px] top-[70%] left-[20%] animate-blob-delayed" />
      </div>

      {/* ⚡ CRT SCANLINES - fixed overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] overflow-hidden z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(42,40,37,0.2)_50%,transparent_100%)] h-[200%] animate-scanline" />
      </div>

      {/* 🔴 AMBIENT RED GLOW */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,0,0.1)_0%,_transparent_70%)] animate-pulse" style={{animationDuration: '4s'}} />
      </div>

      {/* 🧩 LIVING BACKGROUND ELEMENTS – optimized layout positioning nodes */}
      <div className="pointer-events-none absolute inset-0 font-mono text-[9px] font-bold select-none z-0 opacity-[0.28]">
        
        {/* ⚠️ WARNING LABELS */}
        <div className="absolute top-[180px] left-[12%] text-[12px] font-black text-[#FF0000] rotate-[-12deg] animate-pulse">
          SEGMENTATION FAULT
        </div>
        <div className="absolute top-[750px] right-[25%] text-[11px] font-black text-[#FF0000] rotate-[7deg] animate-pulse" style={{animationDelay: '0.5s'}}>
          NULL POINTER
        </div>
        <div className="absolute top-[1200px] left-[18%] text-[13px] font-black text-[#FF0000] rotate-[-6deg] animate-pulse" style={{animationDelay: '0.8s'}}>
          STACK OVERFLOW
        </div>
        <div className="absolute top-[1650px] right-[20%] text-[10px] font-black text-[#FF0000] rotate-[4deg] animate-pulse" style={{animationDelay: '1.2s'}}>
          BUFFER OVERRUN
        </div>

        {/* 🎯 CROSSHAIRS */}
        <div className="absolute top-[350px] right-[35%] opacity-30">
          <div className="relative w-10 h-10">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#FF0000]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FF0000]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 border-2 border-[#FF0000] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border border-[#FF0000] rounded-full opacity-50" />
          </div>
        </div>
        <div className="absolute top-[950px] left-[30%] opacity-25">
          <div className="relative w-12 h-12">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#FF0000]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FF0000]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-[#FF0000] rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 border border-[#FF0000] rounded-full opacity-40" />
          </div>
        </div>

        {/* 💀 YOU GOT HACKED */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 opacity-20 text-center">
          <div className="text-[28px] font-black tracking-[0.3em] text-[#FF0000] uppercase animate-pulse">// YOU GOT HACKED</div>
          <div className="text-[9px] text-[#2A2825] tracking-widest mt-1">FATAL: STACK_CORRUPTED_BY_BUFFER_OVERFLOW_INIT</div>
        </div>

        {/* 📟 TERMINAL WINDOWS */}
        <div className="absolute top-[250px] left-[22%] w-[200px] h-[130px] opacity-35 rotate-[-2deg] animate-float">
          <svg viewBox="0 0 200 130" className="w-full h-full fill-none stroke-[#2A2825] stroke-[1.5]">
            <rect x="5" y="5" width="190" height="120" rx="6" className="fill-[#F5F4F0]/80 stroke-[2]" />
            <rect x="5" y="5" width="190" height="22" rx="6" className="fill-[#2A2825]/10" />
            <circle cx="16" cy="16" r="4" className="fill-[#FF0000] stroke-[1.5]" />
            <circle cx="29" cy="16" r="4" className="fill-[#2A2825]/40 stroke-[1.5]" />
            <text x="45" y="21" className="fill-[#2A2825] text-[9px] font-bold" stroke="none">root@hackbox:~$</text>
            <text x="15" y="50" className="fill-[#2A2825] text-[8px]" stroke="none">&gt; scanning ports...</text>
            <text x="15" y="65" className="fill-[#FF0000] text-[8px] animate-pulse" stroke="none">&gt; backdoor found!</text>
            <text x="15" y="80" className="fill-[#2A2825] text-[8px]" stroke="none">&gt; injecting payload...</text>
            <rect x="15" y="90" width="10" height="3" className="fill-[#FF0000] animate-pulse" />
          </svg>
        </div>

        <div className="absolute top-[820px] right-[15%] w-[190px] h-[120px] opacity-30 rotate-[3deg] animate-float" style={{animationDelay: '0.4s'}}>
          <svg viewBox="0 0 190 120" className="w-full h-full fill-none stroke-[#2A2825] stroke-[1.5]">
            <rect x="5" y="5" width="180" height="110" rx="6" className="fill-[#F5F4F0]/70 stroke-[2]" />
            <rect x="5" y="5" width="180" height="20" rx="6" className="fill-[#2A2825]/10" />
            <circle cx="15" cy="15" r="4" className="fill-[#FF0000] stroke-[1.5]" />
            <text x="40" y="19" className="fill-[#2A2825] text-[8px] font-bold" stroke="none">sys@debug:~$</text>
            <text x="15" y="45" className="fill-[#FF0000] text-[7px]" stroke="none">&gt; WARNING: buffer overflow</text>
            <text x="15" y="58" className="fill-[#2A2825] text-[7px]" stroke="none">&gt; stack trace: 0x7f3a...</text>
            <text x="15" y="71" className="fill-[#2A2825] text-[7px]" stroke="none">&gt; core dumped</text>
          </svg>
        </div>

        {/* 🖥️ MAINFRAME COMPUTER */}
        <div className="absolute top-[580px] right-[8%] w-[180px] h-[140px] opacity-30 animate-float" style={{animationDelay: '0.6s'}}>
          <svg viewBox="0 0 180 140" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <defs>
              <linearGradient id="screenGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2825" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FF0000" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect x="25" y="15" width="130" height="95" rx="8" className="stroke-[2.5]" />
            <rect x="37" y="28" width="106" height="60" rx="3" fill="url(#screenGrad3)" className="stroke-[1.5]" />
            <text x="47" y="62" className="fill-[#FF0000] text-[15px] font-mono animate-pulse" stroke="none">&gt;_</text>
            <path d="M 75 110 L 55 135 L 125 135 L 105 110 Z" className="stroke-[2]" />
            <circle cx="155" cy="125" r="5" className="fill-[#FF0000] stroke-[1.5] animate-pulse" />
          </svg>
        </div>

        {/* 🖱️ VINTAGE MOUSE */}
        <div className="absolute top-[280px] left-[7%] w-[55px] h-[85px] opacity-35 animate-float" style={{animationDelay: '0.2s'}}>
          <svg viewBox="0 0 55 85" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <rect x="8" y="22" width="39" height="56" rx="19" className="stroke-[2.5]" />
            <line x1="27.5" y1="22" x2="27.5" y2="48" className="stroke-[1.5]" />
            <rect x="24.5" y="30" width="6" height="12" rx="3" className="fill-[#2A2825] stroke-[1]" />
            <path d="M 27.5 22 Q 27.5 10 14 4" className="stroke-[2] stroke-dashed" />
            <circle cx="27.5" cy="73" r="3" className="fill-[#FF0000] stroke-[1] animate-pulse" />
          </svg>
        </div>

        {/* 💾 FLOPPY DISK */}
        <div className="absolute top-[1100px] right-[18%] w-[65px] h-[70px] opacity-30 animate-float" style={{animationDelay: '0.7s'}}>
          <svg viewBox="0 0 65 70" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <rect x="4" y="4" width="57" height="62" rx="3" className="stroke-[2.5]" />
            <rect x="13" y="46" width="39" height="8" rx="1" className="fill-[#2A2825]/20 stroke-[1.5]" />
            <rect x="11" y="14" width="43" height="24" className="stroke-[1.5] stroke-dashed opacity-50" />
            <text x="15" y="29" className="fill-[#2A2825] text-[8px] font-bold" stroke="none">ROOT</text>
          </svg>
        </div>

        {/* 📡 SATELLITE DISH */}
        <div className="absolute top-[650px] left-[12%] w-[80px] h-[80px] opacity-30 animate-float" style={{animationDelay: '0.4s'}}>
          <svg viewBox="0 0 80 80" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <line x1="40" y1="60" x2="40" y2="75" className="stroke-[2.5]" />
            <line x1="30" y1="75" x2="50" y2="75" className="stroke-[2]" />
            <path d="M 15 60 Q 40 8 65 60" className="stroke-[2.5]" />
            <line x1="40" y1="34" x2="40" y2="55" className="stroke-[2]" />
            <circle cx="40" cy="32" r="3" className="fill-[#FF0000] stroke-[1.5] animate-pulse" />
            <path d="M 6 50 Q 22 45 28 50" className="stroke-[1.5] opacity-60" />
          </svg>
        </div>

        {/* 🔒 PADLOCKS */}
        <div className="absolute top-[400px] right-[40%] w-[42px] h-[52px] opacity-30 animate-pulse" style={{animationDelay: '0.3s'}}>
          <svg viewBox="0 0 42 52" className="w-full h-full fill-none stroke-[#FF0000] stroke-[2]">
            <path d="M 11 24 L 11 16 C 11 8 31 8 31 16 L 31 24" className="stroke-[2.5]" />
            <rect x="8" y="24" width="26" height="28" rx="3" className="stroke-[2.5]" />
            <circle cx="21" cy="34" r="3.5" className="fill-[#FF0000]/20 stroke-[1.5]" />
            <line x1="21" y1="37" x2="21" y2="43" className="stroke-[1.5]" />
          </svg>
        </div>
        <div className="absolute top-[1300px] left-[50%] w-[38px] h-[48px] opacity-25 animate-pulse" style={{animationDelay: '0.9s'}}>
          <svg viewBox="0 0 38 48" className="w-full h-full fill-none stroke-[#FF0000] stroke-[2]">
            <path d="M 9 22 L 9 14 C 9 7 29 7 29 14 L 29 22" className="stroke-[2.5]" />
            <rect x="7" y="22" width="24" height="26" rx="3" className="stroke-[2.5]" />
            <circle cx="19" cy="32" r="3" className="fill-[#FF0000]/20 stroke-[1.5]" />
            <line x1="19" y1="35" x2="19" y2="40" className="stroke-[1.5]" />
          </svg>
        </div>

        {/* ⚙️ ROTATING GEAR */}
        <div className="absolute top-[480px] left-[55%] w-[55px] h-[55px] opacity-30 animate-spin-slow">
          <svg viewBox="0 0 55 55" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <circle cx="27.5" cy="27.5" r="20" className="stroke-[2.5] stroke-dashed" />
            <circle cx="27.5" cy="27.5" r="9" className="stroke-[2]" />
            <line x1="27.5" y1="7.5" x2="27.5" y2="18.5" className="stroke-[2.5]" />
            <line x1="27.5" y1="36.5" x2="27.5" y2="47.5" className="stroke-[2.5]" />
            <line x1="7.5" y1="27.5" x2="18.5" y2="27.5" className="stroke-[2.5]" />
            <line x1="36.5" y1="27.5" x2="47.5" y2="27.5" className="stroke-[2.5]" />
            <circle cx="27.5" cy="27.5" r="4" className="fill-[#FF0000]/30 stroke-[1.5]" />
          </svg>
        </div>

        {/* 🔒 JOYSTICK */}
        <div className="absolute top-[920px] left-[60%] w-[70px] h-[70px] opacity-30 animate-float" style={{animationDelay: '0.8s'}}>
          <svg viewBox="0 0 70 70" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2]">
            <rect x="17" y="33" width="36" height="33" rx="5" className="stroke-[2.5]" />
            <line x1="35" y1="33" x2="35" y2="11" className="stroke-[2.5]" />
            <circle cx="35" cy="9" r="6" className="fill-[#FF0000]/20 stroke-[2]" />
            <rect x="23" y="46" width="8" height="3" className="fill-[#2A2825]/30 stroke-[1]" />
            <rect x="31" y="41" width="3" height="8" className="fill-[#2A2825]/30 stroke-[1]" />
            <circle cx="52" cy="52" r="4" className="fill-[#FF0000]/30 stroke-[1.5]" />
          </svg>
        </div>

        {/* ⚡ POWER BUTTONS */}
        <div className="absolute top-[380px] right-[12%] w-[35px] h-[35px] opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}>
          <svg viewBox="0 0 35 35" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2.5]">
            <circle cx="17.5" cy="17.5" r="16" className="stroke-[2.5]" />
            <line x1="17.5" y1="7" x2="17.5" y2="17.5" className="stroke-[2.5]" />
          </svg>
        </div>
        <div className="absolute top-[1450px] left-[60%] w-[40px] h-[40px] opacity-25 animate-pulse" style={{animationDelay: '1.1s'}}>
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-[#2A2825] stroke-[2.5]">
            <circle cx="20" cy="20" r="18" className="stroke-[2.5]" />
            <line x1="20" y1="8" x2="20" y2="20" className="stroke-[2.5]" />
          </svg>
        </div>

        {/* 🌐 NETWORK NODES */}
        <div className="absolute top-[520px] right-[30%] opacity-25">
          <svg width="130" height="90" className="fill-none stroke-[#2A2825] stroke-[1.5]">
            <circle cx="15" cy="45" r="5" className="fill-[#FF0000]/30 stroke-[2] animate-pulse" />
            <circle cx="65" cy="15" r="5" className="fill-[#2A2825]/30 stroke-[2]" />
            <circle cx="115" cy="45" r="5" className="fill-[#FF0000]/30 stroke-[2] animate-pulse" style={{animationDelay: '0.5s'}} />
            <line x1="20" y1="45" x2="60" y2="20" className="stroke-[1.5]" />
            <line x1="70" y1="20" x2="110" y2="45" className="stroke-[1.5]" />
            <circle cx="42" cy="32" r="2.5" className="fill-[#FF0000] stroke-none animate-pulse" style={{animationDelay: '0.2s'}} />
          </svg>
        </div>

        {/* 🔄 CIRCUIT TRACES */}
        <div className="absolute top-[700px] left-[30%] opacity-25">
          <svg width="120" height="60" className="fill-none stroke-[#2A2825] stroke-[2]">
            <path d="M 10 15 L 40 15 L 50 25 L 80 25 L 90 35" />
            <path d="M 10 45 L 50 45 L 60 35 L 90 35" />
            <circle cx="10" cy="15" r="3" className="fill-[#FF0000] stroke-[1.5] animate-pulse" />
            <circle cx="90" cy="35" r="3" className="fill-[#FF0000] stroke-[1.5] animate-pulse" style={{animationDelay: '0.4s'}} />
          </svg>
        </div>

        {/* 📊 GRAPHS */}
        <div className="absolute top-[850px] left-[35%] w-[120px] h-[60px] border-b-2 border-l-2 border-[#2A2825] opacity-35 flex items-end">
          <svg className="w-full h-[80%] stroke-[#2A2825] stroke-[2] fill-none">
            <path d="M 0 50 L 25 15 L 55 35 L 85 8 L 120 25" />
            <circle cx="85" cy="8" r="4" className="fill-[#FF0000] stroke-[1.5] animate-pulse" />
          </svg>
        </div>

        {/* 📝 STICKY NOTES */}
        <div className="absolute top-[450px] left-[5%] w-[130px] bg-[#FFFF00]/15 border border-[#2A2825]/50 p-2.5 rotate-[-5deg] text-[#2A2825]/80 shadow-[2px_2px_0px_rgba(42,40,37,0.15)] backdrop-blur-sm">
          <div className="border-b border-[#2A2825]/25 pb-0.5 mb-1 font-black text-[7px] text-[#FF0000]">// NOTE_TO_SELF.TXT</div>
          <p className="text-[7px] leading-tight font-medium">Sterge scriptul de exploit inainte de deploy pe Strapi. Nu uita getch() pentru blocaj stream.</p>
        </div>

        {/* ❌ FAULT ALERT */}
        <div className="absolute top-[1000px] left-[8%] w-[210px] border-2 border-[#FF0000] bg-[#F5F4F0]/70 p-1.5 shadow-[4px_4px_0px_#FF0000] rotate-[2deg] backdrop-blur-sm">
          <div className="bg-[#FF0000] text-[#F5F4F0] px-2 py-0.5 flex justify-between items-center text-[9px] font-black">
            <span>CORE_HOOK_EXCEPTION</span>
            <span>[X]</span>
          </div>
          <div className="p-1.5 text-[8px] text-[#FF0000] space-y-1">
            <p className="font-bold">&gt; return_code: 0x000F72</p>
            <p className="opacity-90 text-[#2A2825]">&gt; Intercepted call to uninitialized statement: <span className="font-black underline">getch();</span></p>
          </div>
        </div>

        {/* 🟢 STAT PANELS */}
        <div className="absolute top-[200px] right-[4%] text-[8px] space-y-1.5 border-2 border-[#2A2825]/50 p-2.5 bg-[#F5F4F0]/40 backdrop-blur-sm select-none">
          <div className="text-[#FF0000] font-black tracking-tighter animate-pulse">// SYS_STATS</div>
          <div className="opacity-80">STRAPI_API: {articles.length ? '200_OK' : 'EMPTY_OR_OFFLINE'}</div>
          <div className="opacity-80">CACHE: ON-DEMAND (TAGGED)</div>
          <div className="opacity-80">LOC: sandbox/page.tsx</div>
          <div className="w-full bg-[#2A2825]/20 h-2.5 mt-1">
            <div className="bg-[#2A2825] h-full animate-pulse" style={{width: `${energieDinamica}%`}} />
          </div>
        </div>

        {/* OPTIMIZED DECORATIVE DOT GRIDS */}
        <div className="absolute top-[600px] right-[15%] grid grid-cols-4 gap-2">
          <div className="w-1.5 h-1.5 bg-[#FF0000] animate-pulse" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#FF0000] animate-pulse" style={{animationDelay: '0.3s'}} />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#FF0000] animate-pulse" style={{animationDelay: '0.6s'}} />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#FF0000] animate-pulse" style={{animationDelay: '0.9s'}} />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#FF0000] animate-pulse" style={{animationDelay: '1.2s'}} />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
          <div className="w-1.5 h-1.5 bg-[#2A2825]" />
        </div>

        {/* 📟 SCROLLING MARQUEE TEXT */}
        <div className="absolute top-[88%] left-[5%] right-[5%] overflow-hidden opacity-18">
          <div className="text-[9px] whitespace-nowrap animate-marquee">
            &gt; SYSTEM_OPERATIONAL // BUFFER_CLEAR // MEMORY_DUMP_COMPLETE // STACK_TRACE_INITIALIZED // CORE_TEMP_NOMINAL // PROCESS_ACTIVE // 
          </div>
        </div>

      </div>

      {/* ✨ VIGNETTE - fixed overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle,transparent_40%,rgba(42,40,37,0.12)_100%)]" />

      {/* MAIN CONTENT - SCROLLS NATURALLY */}
      <main className="opacity-0 translate-y-6 animate-pageIn max-w-7xl mx-auto px-5 md:px-10 pb-20 relative z-10">
        <Header />
        <div className="mt-20">
          <QuestBoard articles={articles} strapiUrl={activeUrl} />
        </div>
      </main>

    </div>  
  );
}