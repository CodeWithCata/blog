import Image from "next/image";

export function CardGlitchCorner() {
  return (
    <div className="w-16 h-16 opacity-70 relative">
      <Image 
        src="/corner.svg" 
        alt="Glitch Corner"
        fill
        priority
      />
    </div>
  );
}