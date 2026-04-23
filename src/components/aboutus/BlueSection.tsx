"use client"

import { motion, Variants } from "framer-motion"; // Added Variants import
import Image from "next/image";

// Animation Variants with explicit typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Framer Motion now recognizes this correctly
    } 
  }
};


const BlueSection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#064ED3] bg-gradient-to-br from-[#0052FF] relative to-[#0039CC] text-white flex flex-col w-full items-start justify-start md:items-center md:justify-center py-20 font-sans overflow-hidden"
    >
      <Image
              src="/images/Services_Bg.png" 
              alt=""
              fill
              className="absolute z-10 pointer-events-none object-cover" 
            />
      <div className="max-w-[1600px] z-50 w-full px-8 md:px-20">
        {/* Header Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="flex gap-4 mb-6">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase opacity-80 text-[#FAC02E]">
              Services
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-[1px] bg-yellow-500" 
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-medium mb-8 leading-tight max-w-3xl">
            Strategy First. <br/> Always.
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light mb-30 leading-relaxed">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
          <h2 className="text-6xl md:text-[82px] w-full font-medium mb-8 leading-tight">
            What does your brand stand for?
          </h2>
          <h2 className="text-6xl md:text-[82px] w-full font-medium mb-8 leading-tight">
            Where is the real opportunity?
          </h2>
          <h2 className="text-6xl md:text-[82px] w-full font-medium mb-30 leading-tight">
            What will actually move the needle?
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light mb-30 leading-relaxed">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light mb-30 leading-relaxed">
            No guesswork. No wasted effort. <br/> Just focused, effective execution.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlueSection;