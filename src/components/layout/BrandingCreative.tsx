"use client"
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

const BrandingCreative = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      // once: false means the animation resets when you scroll away
      // amount: 0.2 means it triggers when 20% of the section is visible
      viewport={{ once: false, amount: 0.8 }}
      className="bg-[#064ED3] bg-gradient-to-br from-[#0052FF] relative to-[#0039CC] text-white flex flex-col w-full items-start justify-start md:items-center md:justify-center py-20 font-sans overflow-hidden"
    >
      <Image
        src="/images/Services_Bg.png"
        alt=""
        fill
        className="absolute z-10 pointer-events-none object-cover"
      />

      <div className="z-50 max-w-[1450px] w-full px-8 md:px-20">
        <div className="flex flex-col min-[1200px]:flex-row gap-12 md:gap-42 items-start">
          
         {/* 1. Left Side: Column Wrapper */}
<div className="flex-shrink-0 md:sticky md:top-20">
  
  {/* THE SENSOR: This div never moves. It is the invisible trigger. */}
  <motion.div
    initial="down"
    whileInView="up"
    // Adjust amount/margin here. Because this div never moves, there is no jitter.
    viewport={{ once: false, amount: 0.6, margin: "-15% 0px -20% 0px" }}
    className="h-40 w-40 md:h-72 md:w-72 relative"
  >
    {/* THE MOVER: This div handles the actual visual jump */}
    <motion.div
      variants={{
        down: { y: 0 },
        up: { y: -80 }
      }}
      transition={{ 
        duration: 1.2, // Smoother duration
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full h-full"
    >
      <img
        src="/images/rocket.webp"
        className="w-full h-full object-contain"
        alt="Rocket"
      />
    </motion.div>
  </motion.div>
</div>

          {/* 2. Right Side: Text & Content */}
          <div className="flex-grow w-full">
            <div>
              <h2 className="text-2xl md:text-6xl font-light mb-8 leading-tight max-w-3xl">
                Branding & <br /> Creative
              </h2>
              <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed mb-20">
                Content that connects. We build stories and experiences that engage
                your audience and keep your brand top of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-16 w-full">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col w-full"
                >
                  <ServiceList items={service.items} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default BrandingCreative;