"use client"
import React from "react";
import { motion, Variants } from "framer-motion"; 
import Image from "next/image";
import ServiceList from "../layout/ServicesList";

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



const ServicesSection = () => {
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
          <h2 className="text-4xl md:text-7xl font-normal mb-8 leading-tight max-w-3xl">
            Connected Thinking.<br/>Measureable Results.
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed mb-20">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
          <h2 className="text-2xl md:text-6xl font-light mb-8 leading-tight max-w-3xl">
            Performance <br/> Marketing
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed mb-20">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 min-[1300px]:grid-cols-3 gap-x-12 gap-y-6 md:gap-y-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} className="flex flex-col">
             <ServiceList items={service.items} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;