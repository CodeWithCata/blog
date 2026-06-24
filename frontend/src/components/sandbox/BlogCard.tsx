
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { PixelBug } from "./icons";
import { SoccerBallLottie } from "./lottie-icons";
import { Article } from "@/types/strapi";
import { CardGlitchCorner } from "./CardGlitchCorner";

interface BlogCardProps {
  article: Article;
  strapiUrl: string;
}

export default function BlogCard({ article, strapiUrl }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bugRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

const extractUrl = (media: any): string | null => {
  if (!media) return null;
  if (typeof media === "string" && media.trim() !== "") return media;
  if (typeof media?.url === "string" && media.url.trim() !== "") return media.url;
  if (typeof media?.attributes?.url === "string") return media.attributes.url;
  if (Array.isArray(media) && media[0]) return extractUrl(media[0]);
  if (media?.data) return extractUrl(media.data);
  return null;
};

const rawUrl = extractUrl(article.coverImage);

// FIX: Check if rawUrl already starts with http (absolute link from Strapi Cloud)
const imageUrl = rawUrl 
  ? (rawUrl.startsWith('http') ? rawUrl : `${strapiUrl}${rawUrl}`) 
  : `https://picsum.photos/seed/${article.id}/800/500`;

  const dateStamp = new Date(article.publishedAt)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toUpperCase();

  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.to(cardRef.current, {
      x: 6,
      y: 6,
      boxShadow: "2px 2px 0px 0px rgba(42,40,37,1)",
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.4,
      ease: "power1.out",
    });

    gsap.to(bugRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.25,
      ease: "back.out(1.7)",
    });

    gsap.to(titleRef.current, {
      paddingLeft: "28px",
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(ballRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(2)",
    });
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      boxShadow: "8px 8px 0px 0px rgba(42,40,37,1)",
      duration: 0.25,
      ease: "power2.inOut",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });

    gsap.to(bugRef.current, {
      opacity: 0,
      x: -10,
      duration: 0.2,
      ease: "power1.in",
    });

    gsap.to(titleRef.current, {
      paddingLeft: "0px",
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(ballRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 10,
      duration: 0.2,
      ease: "power1.in",
    });
  };

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative @container select-none block p-4 -m-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="border-4 border-[#2A2825] bg-[#F5F4F0] shadow-[8px_8px_0px_0px_rgba(42,40,37,1)] relative transition-shadow duration-150"
      >
        {/* ✨ BLUR EFFECT BACKDROP */}
        <div className="absolute top-0 right-0 w-8 h-8 @[250px]:w-[15cqw] @[250px]:h-[15cqw] max-w-[70px] min-w-[36px] bg-[#F5F4F0]/25 rounded-full blur-sm pointer-events-none z-20" />

        {/* 🧩 TOP RIGHT CORNER - PULSE/BOUNCE EFFECT ON HOVER */}
        <div className="absolute top-0 right-0 w-10 h-10 @[250px]:w-[15cqw] @[250px]:h-[15cqw] max-w-[70px] min-w-[36px] pointer-events-none z-30 group-hover:animate-bounce">
          <CardGlitchCorner />
        </div>

        {/* 🚀 DATA STAMP MUTATĂ ÎN EXTERIORUL CONTAINERULUI OVERFLOW-HIDDEN */}
        <div 
          className="absolute top-[-13px] left-[-6px] bg-[#2A2825] border border-[#F5F4F0]/20 text-[#F5F4F0] text-[9px] md:text-[10px] font-mono px-3 pr-6 py-1.5 uppercase font-black z-40 select-none shadow-[4px_4px_0px_0px_rgba(255,0,0,1)] transition-transform duration-200 group-hover:rotate-[-1deg] group-hover:scale-105 will-change-transform"
          style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }}
        >
           {dateStamp}
        </div>

        {/* IMAGE ZONE */}
        <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-[#2A2825]">
          <div ref={imageRef} className="w-full h-full relative will-change-transform">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 bg-white border-2 border-[#2A2825] px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-mono font-bold z-10 uppercase">
            JOURNAL
          </div>
        </div>

        {/* TEXT AREA */}
        <div className="p-3.5 md:p-5 relative min-h-[76px] md:min-h-[92px] flex items-center overflow-hidden">
          <div
            ref={ballRef}
            className="absolute bottom-2 right-2 opacity-0 pointer-events-none transform scale-50 translate-y-2 will-change-transform"
          >
            <SoccerBallLottie />
          </div>

          <div
            ref={bugRef}
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-3 hidden md:block pointer-events-none will-change-transform"
          >
            <PixelBug />
          </div>

          <h2
            ref={titleRef}
            className="font-black text-sm @[280px]:text-base @[400px]:text-lg uppercase leading-tight tracking-tight text-[#2A2825] will-change-[padding]"
          >
            {article.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

