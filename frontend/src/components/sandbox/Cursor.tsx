"use client";

import { useEffect, useRef } from "react";
import { Crosshair } from "./icons";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const getScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth;
    };

    const clampX = (x: number) => {
      const scrollbarWidth = getScrollbarWidth();

      // prevent cursor going under scrollbar
      const maxX = window.innerWidth - scrollbarWidth - 2; // small padding
      return Math.min(x, maxX);
    };

    const move = (e: MouseEvent) => {
      mouse.current.x = clampX(e.clientX);
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animation: number;

    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.15;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0) translate(-50%, -50%)`;
      }

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      <Crosshair />
    </div>
  );
}