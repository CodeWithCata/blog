// src/app/blog/[slug]/page.tsx
import { fetchArticleBySlug } from '@/services/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CardGlitchCorner } from '@/components/sandbox/CardGlitchCorner';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await fetchArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const imageUrl = article.coverImage?.url 
    ? `${STRAPI_URL}${article.coverImage.url}` 
    : null;

  const dateStamp = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative min-h-screen bg-[#F5F4F0] text-[#2A2825] overflow-x-hidden antialiased selection:bg-[#2A2825] selection:text-[#F5F4F0]">
      
      {/* CSS animations & keyframes */}
      <style>{`
        @keyframes grow-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .scroll-progress-bar {
          animation: grow-progress linear both;
          animation-timeline: scroll();
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.05); }
        }
        .animate-float {
          animation: float-slow 10s ease-in-out infinite;
        }
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.1; }
        }
        .animate-gentle-pulse {
          animation: gentle-pulse 4s ease-in-out infinite;
        }
        .hover-trigger .hover-show {
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-trigger:hover .hover-show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Progress Bar – now with glow */}
      <div className="scroll-progress-bar fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-[#2A2825] origin-left z-50 shadow-[0_0_12px_rgba(251,191,36,0.5)]" />

      {/* Ambient Background – refined floating blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/10 to-orange-300/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-400/5 to-cyan-300/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-orange-300/10 to-amber-200/5 rounded-full blur-[80px] animate-gentle-pulse" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(42,40,37,0.04)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      <article className="relative max-w-3xl mx-auto px-6 py-20 z-10">
        
        {/* Back Button – smoother, with icon animation */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#2A2825]/70 hover:text-[#2A2825] bg-white/60 backdrop-blur-md border border-[#2A2825]/10 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg 
              className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-1.5 text-orange-500" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg> 
            <span>Inapoi la Blog</span>
          </Link>
        </div>

        {/* Header Section – refined badge interactions */}
        <header className="mb-14 relative group">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#2A2825]/60 uppercase tracking-widest mb-6">
            <span className="bg-[#2A2825] text-[#F5F4F0] px-3 py-1 rounded-md font-bold transition-all duration-300 group-hover:rotate-[-2deg] group-hover:shadow-[4px_4px_0px_0px_rgba(255,0,0,1)] inline-block">
              {article.title || 'Uncategorized'}
            </span>
            <span className="w-1 h-1 bg-[#2A2825]/20 rounded-full" />
            <span className="font-semibold tracking-wide group-hover:text-[#2A2825] transition-colors duration-300">{dateStamp}</span>
            <span className="w-1 h-1 bg-[#2A2825]/20 rounded-full" />
            
           
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#2A2825] leading-[1.18] transition-all duration-500 group-hover:translate-x-1">
            {article.title}
          </h1>
        </header>

   {/* Hero Image Frame – with decoupled elastic floating and balanced depth */}
{imageUrl && (
  <div className="relative aspect-[16/9] w-full mb-16 rounded-3xl p-[1px] bg-gradient-to-b from-[#2A2825]/15 via-transparent to-[#2A2825]/20 shadow-[0_20px_50px_-20px_rgba(42,40,37,0.12)] group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:shadow-[0_35px_70px_-20px_rgba(42,40,37,0.18)]">
    <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-white animate-float" style={{ animationDuration: '14s' }}>
      
      {/* Target Image with enhanced parallax scale layer */}
      <Image
        src={imageUrl}
        alt={article.title}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-[1.035] filter saturate-[0.98] group-hover:saturate-100"
        priority
      />
      
      {/* Multi-layered dynamic lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A2825]/15 via-transparent to-white/5 opacity-100 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />

      {/* Glitch corner decoration - Elastic spring response */}
      <div className="absolute top-0 right-0 w-14 h-14 pointer-events-none z-20">
        <div className="absolute inset-0 bg-white/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        <div className="relative w-full h-full opacity-40 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-90 group-hover:scale-105">
          <CardGlitchCorner />
        </div>
      </div>

      {/* Playful Floating Interactive Label */}
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#2A2825] bg-white/95 backdrop-blur-md border border-[#2A2825]/5 px-3 py-1.5 rounded-xl opacity-0 translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_4px_12px_rgba(42,40,37,0.08)] font-bold tracking-wide">
        ✨ VISUAL // DEPTH_RENDER_OK
      </div>
  
    </div>
  </div>
)}

        {/* Article Body Content – refined prose styles */}
        <div className="prose max-w-none 
          prose-headings:text-[#2A2825] prose-headings:font-black prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-black prose-h2:relative
          prose-h2:before:content-['//'] prose-h2:before:text-orange-500 prose-h2:before:mr-2 prose-h2:before:font-mono prose-h2:before:text-sm
          prose-p:text-[#2A2825]/85 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-[17px] prose-p:mb-6 prose-p:font-medium
          prose-strong:text-[#2A2825] prose-strong:font-black
          prose-a:text-orange-600 prose-a:no-underline prose-a:font-bold prose-a:border-b-2 prose-a:border-orange-500/20 hover:prose-a:border-orange-500 hover:prose-a:text-orange-500 prose-a:transition-all prose-a:duration-300 inline-block hover:-translate-y-0.5 active:translate-y-0
          prose-code:bg-[#2A2825]/5 prose-code:text-[#2A2825] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg prose-code:font-mono prose-code:text-[13px] prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-white prose-pre:border prose-pre:border-[#2A2825]/10 prose-pre:text-[#2A2825] prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-[0_12px_30px_-10px_rgba(42,40,37,0.06)] prose-pre:font-mono prose-pre:text-sm
          prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-amber-500/[0.03] prose-blockquote:to-transparent prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:text-[#2A2825]/80 prose-blockquote:not-italic prose-blockquote:rounded-r-2xl prose-blockquote:shadow-sm
          prose-li:marker:text-orange-500 prose-li:marker:font-bold">
          <BlocksRenderer content={article.content} />
        </div>

        {/* Footer – now with interactive system status */}
    
      </article>

      {/* Subtle floating decorative element */}
      <div className="fixed bottom-6 right-6 z-50 opacity-20 hover:opacity-100 transition-opacity duration-500">
        <div className="w-12 h-12 border border-[#2A2825]/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/30 shadow-lg">
          <span className="text-[10px] font-mono font-bold text-[#2A2825]">TOP</span>
        </div>
      </div>
    </div>
  );
}