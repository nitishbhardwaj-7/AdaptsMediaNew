"use client";

import { useState } from "react";
import ArrowButton from "../buttons/ArrowButton";
import ArrowIcon from "../icons/ArrowIcon";

/* ─────────────────────────────────────────────
   Note: Ensure the fonts (DM Sans & Cormorant Garamond) 
   are imported in your globals.css or layout.tsx.
───────────────────────────────────────────── */

interface Project {
  id: number;
  brand: string;
  tagline: string;
  tags: string[];
  bgImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    brand: "THE BLISS",
    tagline: "Turning Vision into Brand Reality",
    tags: ["Branding", "AI Generation", "Marketing"],
    bgImage: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=1400&q=80",
  },
  {
    id: 2,
    brand: "LUMINARY",
    tagline: "Crafting Digital Experiences That Inspire",
    tags: ["UI/UX", "Web Design", "Strategy"],
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
  },
  {
    id: 3,
    brand: "NOVA STUDIO",
    tagline: "Where Imagination Meets Execution",
    tags: ["Motion", "Branding", "Identity"],
    bgImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1400&q=80",
  },
];

// ── SVG Sub-components ──────────────────────

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);



const FlowerLogo = () => (
  <svg width="90" height="104" viewBox="0 0 52 52" fill="none">
    <circle cx="26" cy="26" r="25" stroke="white" strokeWidth="1.5" />
    <g transform="translate(26,26)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse key={i} cx="0" cy="-9" rx="4" ry="8" fill="white"
          transform={`rotate(${angle})`} opacity="0.9" />
      ))}
      <circle cx="0" cy="0" r="3.5" fill="white" />
    </g>
  </svg>
);

// ── Main Component ──────────────────────────

export default function PortfolioShowcase() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <div className="flex flex-col min-h-screen bg-[#12161c] font-['DM_Sans']">

      {/* ── SHOWCASE ── */}
      <div className="flex-1 m-16 rounded-2xl overflow-hidden relative min-h-[580px]">
        {projects.map((p, i) => {
          const active = i === current;
          return (
            <div 
              key={p.id} 
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              {/* BG */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-in-out ${active ? "scale-[1.04]" : "scale-100"}`}
                style={{ backgroundImage: `url(${p.bgImage})` }}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,12,16,0.85)_0%,rgba(10,12,16,0.3)_40%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,12,16,0.6)_0%,transparent_50%)]" />

              {/* Top bar */}
              <div className="absolute top-[48px] left-[150px] right-[48px] flex items-center gap-[14px] z-[4]">
                <span className="text-[11px] font-medium tracking-[0.18em] text-[#f5a623] uppercase">
                  Portfolio
                </span>
                <div className="flex-[0_0_60px] h-[1px] bg-[#f5a623]/50" />
               <ArrowButton title="View Portfolio"/>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-[60px] z-[4] flex flex-col gap-4">
  
  {/* Brand Section: Aligned with tagline */}
 {/* ml-[84px] aligns the center-block with the start of your tagline */}
<div className="flex flex-col items-center gap-[14px] ml-[84px] w-fit"> 
  
  {/* Logo stays perfectly centered above the text */}
  <div className="flex-shrink-0">
    <FlowerLogo />
  </div>

  {/* Brand Name */}
  <span className="font-['DM_Sans'] text-[26px] font-normal tracking-[0.22em] text-white/90 uppercase leading-none text-center">
    {p.brand}
  </span>
</div>

                {/* Divider */}
                

                {/* Footer row */}
<div className="flex items-center justify-between gap-8 flex-wrap">
  
  {/* Left Section: Arrow + Tagline Block */}
  <div className="flex items-center gap-8 flex-1">
    
    {/* LEFT ARROW */}
    <button 
      onClick={prev} 
      aria-current="step"
      className="mb-10 w-[52px] h-[52px] border border-white/40 bg-transparent rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors shrink-0"
    >
      <ArrowIcon direction="left" />
    </button>

    {/* tagline + tags block */}
    <div className="flex flex-col gap-[14px] flex-1">
      <div className="w-full h-[1px] bg-white/15" />
      
      {/* We keep the text and tags in this column, 
          but items-center on the parent now aligns the arrow 
          to the middle of this entire stack. */}
      <h2 className="font-['Cormorant_Garamond'] text-[clamp(26px,4vw,40px)] font-normal text-white leading-[1.15] tracking-[-0.01em] max-w-[640px] m-0">
        {p.tagline}
      </h2>
      
      <div className="w-full h-[1px] bg-white/15" />

      <div className="flex flex-wrap gap-2">
        {p.tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1.5 border border-white/30 text-white/75 rounded-full px-3 py-[5px] text-[12px] font-normal tracking-[0.02em] bg-white/5">
            <TagIcon /> {tag}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Right: CTA + Next Arrow */}
  {/* 2. Removed mb-10 to align with the left side */}
  <div className="flex items-center gap-3 shrink-0 mb-10">
    <ArrowButton title="Read Case Study"/>

    {/* NEXT ARROW */}
    <button 
      onClick={next} 
      className="w-[52px] h-[52px] border border-white/40 bg-transparent rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors"
    >
      <ArrowIcon direction="right" />
    </button>
  </div>
</div>
              </div>
            </div>
          );
        })}

        {/* Dot indicators */}
        <div className="flex gap-1.5 items-center justify-center absolute bottom-3 left-1/2 -translate-x-1/2 z-[5]">
          {projects.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)} 
              aria-label={`Slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${i === current ? "bg-white scale-[1.3]" : "bg-white/35 scale-100"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}