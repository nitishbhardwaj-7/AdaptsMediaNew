"use client";
import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

type StatsCardProps = {
  value: string;
  title: string;
  description?: string;
  direction?: "left" | "right";
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
  title
}: StatsCardProps) {
  const characters = value.split("");

  return (
    <motion.div 
      className="relative w-full sm:w-[18rem] h-[10rem]"
    >
      {/* 1. THE CARD */}
      <div className="relative z-30 h-full w-full px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl rounded-tl-none text-white transition-all duration-500 ease-out hover:bg-white/10 hover:border-[#FAC02E]/50 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="flex text-5xl sm:text-6xl font-bold text-[#FAC02E] drop-shadow-2xl overflow-hidden h-[1.1em]">
          {characters.map((char, index) => (
            <Digit key={index} digit={char} />
          ))}
        </div>
        <p className="mt-2 text-base sm:text-lg font-medium max-w-full leading-snug opacity-90 whitespace-pre-line">
          {title}
        </p>
      </div>
    </motion.div>
  );
}