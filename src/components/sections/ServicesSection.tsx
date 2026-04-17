"use client"
import React from "react";
import { motion, Variants } from "framer-motion"; // Added Variants import
import ArrowButton from "../buttons/ArrowButton";

const services = [
  {
    number: "01",
    title: "Performance Marketing",
    items: ["Affiliate Channels", "Cost Per Action", "ROI Model"],
  },
  {
    number: "02",
    title: "Social & Content",
    items: ["Content Strategy", "Leverage Influencers", "Paid Social"],
  },
  {
    number: "03",
    title: "Web & Digital Experience",
    items: ["UX/UI", "Front & Back End", "API Integration"],
  },
  {
    number: "04",
    title: "Branding & Creative",
    items: ["Affiliate Channels", "Cost Per Action", "ROI Model"],
  },
  {
    number: "05",
    title: "Public Relations & Activations",
    items: ['Strategic PR', 'Press Releases', 'Events and Activation'],
  },
  {
    number: "06",
    title: "Strategy & Consulting",
    items: ['Industry and Competitor Analysis', 'Tailor-made Growth Strategies', 'Targeted Ads and Email Campaigns'],
  },
];

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const ArrowIcon = () => (
  <motion.div
    variants={{
      initial: { x: 0, opacity: 0.7 },
      hover: { x: 5, opacity: 1 }
    }}
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#064ED3] bg-gradient-to-br from-[#0052FF] to-[#0039CC] text-white py-20 px-8 md:px-52 lg:px-52 font-sans overflow-hidden"
    >
      <div className="max-w-screen">
        {/* Header Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="flex items-center gap-4 mb-6">
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
            Services Designed to Drive Growth
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} className="flex flex-col">
              {/* Large Background Number */}
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.8, x: -32 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="text-7xl font-normal opacity-80 mb-2 leading-none text-white blur-xs inline-block"
              >
                {service.number}
              </motion.span>
              
              <h3 className="text-2xl md:text-5xl font-light mb-8 leading-snug min-h-[4rem] w-87">
                {service.title}
              </h3>

              {/* List Items */}
              <div className="flex flex-col">
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center justify-between py-3 border-t border-white/60 group cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm md:text-lg font-extralight tracking-wide opacity-90">
                      {item}
                    </span>
                    <ArrowIcon />
                  </motion.div>
                ))}
                <div className="border-t border-white/60 mb-20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div className="flex flex-wrap justify-center gap-6">
        <ArrowButton title="Explore All Services"/>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-[7px] border font-bold border-none bg-[#fac02d] text-[#064ed4] rounded-full px-5 py-2.5 text-[18px] cursor-pointer tracking-[0.02em] font-['DM_Sans'] whitespace-nowrap shadow-lg shadow-black/10"
        >
          Start a Project ↗
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;