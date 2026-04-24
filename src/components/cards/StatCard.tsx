"use client";
import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

type StatsCardProps = {
  value: string;
  title: string;
  description?: string;
};


function Digit({ digit }: { digit: string }) {
  const isNumber = !isNaN(parseInt(digit));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 30, damping: 15, mass: 1 });

  useEffect(() => {
    if (isInView && isNumber) spring.set(parseInt(digit));
  }, [isInView, isNumber, digit, spring]);

  const y = useTransform(spring, (latest) => `${latest * -1}em`);
  if (!isNumber) return <span className="inline-block">{digit}</span>;

  return (
    <span ref={ref} className="relative inline-block h-[1em] overflow-hidden leading-none">
      <motion.span style={{ y }} className="flex flex-col">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1em] flex items-center justify-center">{n}</span>
        ))}
      </motion.span>
    </span>
  );
}

export default function StatsCard({ 
  value, 
  title, 
  description = "Detailed analytics and performance breakdown. Our strategy ensures high-impact growth and consistent results." 
}: StatsCardProps) {
  const characters = value.split("");

  const wireVariants = {
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };

  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className="group relative w-full sm:w-[18rem] h-[10rem]"
    >
      {/* 1. THE CARD */}
      <div className="relative z-30 h-full w-full px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl rounded-tl-none text-white transition-all duration-500 ease-out group-hover:bg-white/10 group-hover:border-[#FAC02E]/50 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex text-5xl sm:text-6xl font-bold text-[#FAC02E] drop-shadow-2xl overflow-hidden h-[1.1em]">
          {characters.map((char, index) => (
            <Digit key={index} digit={char} />
          ))}
        </div>
        <p className="mt-2 text-base sm:text-lg font-medium max-w-full leading-snug opacity-90 whitespace-pre-line">
          {title}
        </p>
      </div>

      {/* 2. THE WIRE (SVG) - Hardcoded for LEFT expansion */}
      <svg 
        className="absolute top-1/2 right-[92%] -translate-y-1/2 w-24 h-24 pointer-events-none z-20"
        viewBox="0 0 100 100"
        fill="none"
        style={{ transform: 'scaleX(-1) translateY(-50%)' }} 
      >
        <motion.path
  d="M0 50 C 40 50, 60 20, 100 20" 
  stroke="#FAC02E"
  strokeWidth="2"
  strokeLinecap="round"
  initial={{ pathLength: 0, opacity: 0 }}
  variants={{
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: 1, 
      opacity: 1,
    }
  }}
  // Move the transition here - this handles the typing automatically
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
/>
      </svg>

      {/* 3. THE BIG INFO BOX - Hardcoded for LEFT expansion */}
      <div className="absolute right-[calc(100%+60px)] top-[-40px] w-[22rem] md:w-[28rem] opacity-0 scale-95 translate-x-[20px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto z-40">
        <div className="relative p-8 backdrop-blur-3xl bg-gradient-to-br from-white/10 via-transparent to-black/30 border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FAC02E] shadow-[0_0_8px_#FAC02E] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FAC02E]">
                Extended Data
              </span>
            </div>
            
            <h4 className="text-2xl font-semibold text-white mb-4">{title}</h4>
            <p className="text-base text-gray-200 font-light leading-relaxed">
              {description}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center opacity-50">
               <div className="text-[9px] text-white font-mono uppercase tracking-tighter">System: Verified</div>
               <div className="text-[9px] text-[#FAC02E] font-mono uppercase">Encryption: Active</div>
            </div>
          </div>

          {/* Inner Highlight Edge for Glassmorphism */}
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}