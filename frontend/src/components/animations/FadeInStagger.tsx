'use client'; // Required for GSAP, as it operates on client-side DOM objects

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FadeInStaggerProps {
  children: React.ReactNode;
}

export default function FadeInStagger({ children }: FadeInStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP handles automatic cleanup on unmount
  useGSAP(() => {
    if (!containerRef.current) return;

    // Target elements with the data-animate attribute inside this container scope
    gsap.fromTo(
      containerRef.current.querySelectorAll('[data-animate]'),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15, // Delay between each element's animation
        delay: 0.1,
      }
    );
  }, { scope: containerRef }); // Best Practice: Explicitly scope selectors to this component ref

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}