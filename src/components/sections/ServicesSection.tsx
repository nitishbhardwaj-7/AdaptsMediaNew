"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
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
        initial: { x: 0, opacity: 0.8 },
        hover: { x: 5, opacity: 1 }
      }}
      className="flex items-center justify-center"
    >
      <svg
        className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white/40 p-1.5 duration-300 ease-linear group-hover:border-none group-hover:bg-white group-hover:rotate-90 text-white group-hover:text-black relative z-10 rotate-45"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
);

const ServicesSection = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // Responsive padding: px-8 for mobile, md:px-52 for desktop
     className="bg-[#064ED3] bg-gradient-to-br from-[#0052FF] to-[#0039CC] text-white py-20 px-8 min-[1400px]:px-52 font-sans overflow-hidden flex flex-col items-start"
    >
      <div className="w-full text-left">
        {/* Header Section */}
        <motion.div className="mb-12 md:mb-20" variants={fadeInUp}>
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
          {/* Responsive Text: 4xl for mobile, md:7xl for desktop */}
          <h2 className="text-4xl md:text-7xl font-medium mb-8 leading-tight max-w-3xl">
            Services Designed to Drive Growth
          </h2>
          {/* Responsive Text: lg for mobile, md:3xl for desktop */}
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
        </motion.div>

        {/* Services Grid */}
        {/* Services Grid */}
<motion.div 
  variants={staggerContainer}
  // Changed md:grid-cols-3 to min-[1400px]:grid-cols-3
  className="grid grid-cols-1 min-[1400px]:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16"
>
  {services.map((service, index) => (
    <motion.div key={index} className="flex flex-col">
      {/* ... rest of your service card code ... */}
      
      {/* Important: Also update your title width for consistency */}
      <h3 className="text-2xl md:text-5xl font-light mb-8 leading-snug min-[1400px]:min-h-[4rem] min-[1400px]:w-87">
        {service.title}
      </h3>

              {/* List Items */}
              <div className="flex flex-col">
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center justify-between py-3 px-2 border-t border-white/60 group cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm md:text-lg font-extralight tracking-wide opacity-90 pr-4">
                      {item}
                    </span>
                    <ArrowIcon />
                  </motion.div>
                ))}
                {/* Responsive spacing for bottom border: mb-12 for mobile, md:mb-20 for desktop */}
                <div className="border-t border-white/60 mb-12 md:mb-20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Buttons: flex-col for mobile, sm:flex-row for desktop */}
      <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <ArrowButton title="Explore All Services"/>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          // Added w-full on mobile via sm:w-auto
          className="w-full sm:w-auto flex items-center justify-center gap-[7px] border font-bold border-none bg-[#fac02d] text-[#064ed4] rounded-full px-5 py-2.5 text-[18px] cursor-pointer tracking-[0.02em] font-['DM_Sans'] whitespace-nowrap shadow-lg shadow-black/10"
        >
          Start a Project ↗
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;