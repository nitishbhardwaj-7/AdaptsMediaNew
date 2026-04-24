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




const PerformanceMarketing = () => {
  return (
    
    <motion.section 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="bg-[#064ED3] bg-gradient-to-br from-[#0052FF] to-[#0039CC] relative text-white py-20 font-sans overflow-hidden"
>
  {/* Background Image */}
  <Image
    src="/images/Services_Bg.png" 
    alt=""
    fill
    className="absolute z-0 pointer-events-none object-cover opacity-50" 
  />

  <div className="relative z-50 max-w-[1450px] w-full px-8 md:px-20 mx-auto">
    
    {/* 1. TOP SECTION: Connected Thinking */}
    <motion.div className="mb-32" variants={fadeInUp}>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#FAC02E]">
          Services
        </span>
        <div className="h-[1px] w-12 bg-yellow-500" />
      </div>
      <h2 className="text-4xl md:text-7xl font-normal mb-8 leading-tight max-w-4xl">
        Connected Thinking.<br/>Measureable Results.
      </h2>
      <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light">
        End-to-end solutions built to help brands grow...
      </p>
    </motion.div>

    {/* 2. BOTTOM SECTION: Flex Wrapper */}
    <div className="flex flex-col min-[1200px]:flex-row gap-12 md:gap-36 items-start">
      
      {/* Content Column */}
      <div className="flex-grow w-full">
        <h2 className="text-2xl md:text-6xl font-light mb-8 leading-tight">
          Performance <br/> Marketing
        </h2>
        <p className="text-lg md:text-3xl opacity-90 mb-20 font-light">
          End-to-end solutions built to help brands grow...
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
          {services && services.map((service, index) => (
            <div key={index} className="w-full">
              <ServiceList items={service.items} />
            </div>
          ))}
        </div>
      </div>

      {/* --- IMAGE COLUMN WITH STABLE ANIMATION --- */}
      <div className="flex-shrink-0 md:sticky md:top-20">
        {/* THE SENSOR: This div stays perfectly still so it doesn't jitter */}
        <motion.div
          initial="down"
          whileInView="up"
          // Starts lifting when 60% of this box is 20% into the screen
          viewport={{ once: false, amount: 0.6, margin: "-15% 0px -20% 0px" }}
          className="h-40 w-40 md:h-72 md:w-72 relative"
        >
          {/* THE MOVER: This div handles the actual vertical jump */}
          <motion.div
            variants={{
              down: { y: 0 },
              up: { y: -80 }
            }}
            transition={{ 
              duration: 1.2, 
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

    </div>
  </div>
</motion.section>
      );
    };



export default PerformanceMarketing;