// src/app/sandbox/page.tsx
import { fetchFromStrapi } from '@/services/strapi';
import { Article, StrapiResponse } from '@/types/strapi';

import Header from "@/components/sandbox/Header";
import QuestBoard from "@/components/sandbox/QuestBoard";

export default async function SandboxPage() {
  const energieDinamica = 80;

  const response: StrapiResponse<Article[]> = await fetchFromStrapi('articles?populate=*', {
    next: { revalidate: 60 },
  });

  const articles = response.data || [];
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#2A2825] relative overflow-hidden">
      
      {/* 🌫 micro noise grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(42,40,37,0.15)_1px,_transparent_0)] [background-size:24px_24px]" />
      </div>

      {/* 🧠 BIG FLOATING CHAOS BLOBS */}
      <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply">
        <div className="absolute w-[500px] h-[500px] bg-[#2A2825] rounded-full blur-[100px] top-[-180px] left-[-150px] animate-blob" />
        <div className="absolute w-[450px] h-[450px] bg-[#FF0000] rounded-full blur-[120px] bottom-[-100px] right-[-100px] animate-blob-delayed" />
        <div className="absolute w-[320px] h-[320px] bg-[#FF0000]/40 rounded-full blur-[80px] top-[25%] right-[30%] animate-blob" />
        <div className="absolute w-[380px] h-[380px] bg-[#2A2825] rounded-full blur-[100px] top-[55%] left-[15%] animate-blob-delayed" />
      </div>

      {/* ⚡ ACTIVE CRT SCANLINES */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(42,40,37,0.15)_50%,transparent_100%)] h-[200%] animate-scanline" />
      </div>

      {/* 🧩 BACKGROUND "UI OBJECTS" (MAXED OUT VERSION) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] font-mono text-[9px] font-bold select-none">
        
        {/* Fake Terminal Window 1 (Top Left) */}
        <div className="absolute top-[100px] left-[40px] w-[220px] h-[130px] border-2 border-[#2A2825] bg-[#F5F4F0]/40 rotate-[-4deg] flex flex-col backdrop-blur-sm">
          <div className="border-b-2 border-[#2A2825] px-2 py-1 flex items-center justify-between bg-[#2A2825]/5">
            <span>SYS_VIEWER_v1.0</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-[#2A2825]" />
              <div className="w-1.5 h-1.5 bg-[#FF0000]" />
            </div>
          </div>
          <div className="p-2 space-y-1 opacity-70">
            <div>&gt; INIT_SANDBOX... OK</div>
            <div>&gt; ENERGY_LEVEL: {energieDinamica}%</div>
            <div>&gt; ENTRIES_LOADED: {articles.length}</div>
            <div className="w-full bg-[#2A2825]/10 h-1.5 mt-2 relative overflow-hidden">
              <div className="bg-[#2A2825] h-full w-[80%]" />
            </div>
          </div>
        </div>

        {/* Fake Sidebar Component Bar (Left Edge Center) */}
        <div className="absolute left-[20px] top-[35%] flex flex-col gap-1 border-l-2 border-r-2 border-[#2A2825] py-3 px-1 bg-[#2A2825]/5">
          <span className="opacity-40 [writing-mode:vertical-lr] tracking-widest text-[8px] uppercase mb-2">DEBUG_BAR</span>
          <div className="w-3 h-3 bg-[#FF0000] mx-auto shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
          <div className="w-3 h-3 border border-[#2A2825] mx-auto" />
          <div className="w-3 h-3 border border-dashed border-[#2A2825] mx-auto" />
        </div>

        {/* Fake Vector Graph (Middle Left-Center) */}
        <div className="absolute top-[48%] left-[22%] w-[120px] h-[60px] border-b border-l border-[#2A2825] flex items-end opacity-60">
          <svg className="w-full h-[80%] stroke-[#2A2825] stroke-[1.5] fill-none overflow-visible">
            <path d="M 0 40 L 30 10 L 60 30 L 90 5 L 120 25" />
            <circle cx="90" cy="5" r="3" className="fill-[#FF0000] stroke-none" />
          </svg>
        </div>

        {/* Fake Wireframe Box 2 (Middle Right) */}
        <div className="absolute top-[380px] right-[80px] w-[260px] h-[140px] border-2 border-[#2A2825] rotate-[6deg] p-1">
          <div className="w-full h-full border border-dashed border-[#2A2825]/60 relative">
            <span className="absolute top-1 left-2">MATRIX_GRID_A</span>
            <span className="absolute bottom-1 right-2">[42.09 // 11.85]</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs opacity-50">+</div>
          </div>
        </div>

        {/* Fake Stat Feed (Top Right Area) */}
        <div className="absolute top-[140px] right-[15%] text-[8px] space-y-1 border border-[#2A2825]/40 p-2 bg-[#F5F4F0]/30 backdrop-blur-xs select-none">
          <div className="text-[#FF0000] font-black tracking-tighter">// SYS_STATS</div>
          <div className="opacity-70">STRAPI_API: {articles.length ? '200_OK' : 'EMPTY_OR_OFFLINE'}</div>
          <div className="opacity-70">CACHE: HIT (60s ISR)</div>
          <div className="opacity-70">LOC: sandbox/page.tsx</div>
        </div>

        {/* Fake Mini Alert Box (Bottom Left) */}
        <div className="absolute bottom-[220px] left-[10%] w-[180px] border-2 border-[#FF0000] bg-[#FF0000]/5 p-2 rotate-[3deg]">
          <div className="flex items-center gap-1.5 text-[#FF0000]">
            <div className="w-1.5 h-1.5 bg-[#FF0000] animate-ping" />
            <span className="font-black">CORE_STREAM: LIVE</span>
          </div>
          <div className="text-[8px] opacity-60 mt-1">DATA_PIPELINE: ACTIVE</div>
        </div>

        {/* Angle Bracket Corners scattered near corners */}
        <div className="absolute top-[40px] right-[40px] opacity-40 text-sm">[ ]</div>
        <div className="absolute bottom-[40px] left-[40px] opacity-40 text-sm">[ ]</div>

        {/* Tech Target Crosses rătăcite prin ecran */}
        <div className="absolute top-[8%] right-[20%] text-sm font-light opacity-40">+</div>
        <div className="absolute bottom-[40%] left-[35%] text-sm font-light opacity-40">+</div>
        <div className="absolute top-[65%] left-[5%] text-sm font-light opacity-40">+</div>
        <div className="absolute bottom-[15%] right-[25%] text-sm font-light opacity-40">+</div>

        {/* Fake Floating Dotted Arrays */}
        <div className="absolute top-[280px] right-[25%] grid grid-cols-4 gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`w-1 h-1 ${i % 3 === 0 ? "bg-[#FF0000]" : "bg-[#2A2825]"}`} />
          ))}
        </div>
      </div>

      {/* ✨ vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(42,40,37,0.12))]" />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-5 md:px-10 pb-20 relative z-10">
        <Header />
        <div className="mt-20">
          <QuestBoard articles={articles} strapiUrl={STRAPI_URL} />
        </div>
      </main>

    </div>  
  );
}