import ArrowButton from "@/src/components/buttons/ArrowButton";
import StatsCard from "@/src/components/cards/StatCard";
import BrandsSection from "@/src/components/sections/BrandsSection";
import ContactCTA from "@/src/components/sections/ContactCTA";
import InsightsSection from "@/src/components/sections/InsightsSection";
import LocationSection from "@/src/components/sections/LocationSection";
import PortfolioShowcase from "@/src/components/sections/PortfolioShowcase";
import RecreateDesign from "@/src/components/sections/RecognizedSection";
import ServicesSection from "@/src/components/sections/ServicesSection";
import HeroVideo from "@/src/components/videos/HeroVideo";
import OrangeVideo from "@/src/components/videos/OrangeVideo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroVideo/>
      <OrangeVideo>

        <div className="flex w-full justify-between gap-20">
<div className="flex flex-col">
<h1 className="text-5xl md:text-7xl font-extralight mb-12 tracking-wider leading-snug">
          A New-Age Agency <br /> Built for Today's Brands
        </h1>
        <div className="max-w-[44rem]">
<h2 className="text-lg md:text-3xl mb-8 text-gray-200 font-light">
          We combine strategy, creativity and <strong>technology</strong> to define marketing that performs not just looks good.
        </h2>
        <p className="text-xl mb-6 opacity-70">In todays fast-moving digital landscape, visibility alone is not enough. Brands need clarity, consistency, performance at every touch point</p>
        <p className="text-xl mb-10 opacity-50">We are a new-generation agency Built to bridge that gap - bringing together strategic thinking, creative excellence, and data-driven execution under one roof. Every solution we design is rooted in understanding your business, your audience, and your growth ambitions.</p>
        <h2 className="text-lg md:text-4xl mb-8 bg-gradient-to-r from-[#fffdf7] to-[#fcd87c] bg-clip-text text-transparent font-medium">We dont just build campaigns. <br /> We build momentum.</h2>

        <div className="flex justify-start gap-6 items-center">
  
  <ArrowButton title="Read More"/>

  {/* Existing "Start a Project" Button */}
  <button className="flex items-center gap-[7px] border font-bold border-none bg-[#fac02d] text-[#c42a27] rounded-full px-5 py-2.5 text-[18px] cursor-pointer tracking-[0.02em] font-['DM_Sans'] whitespace-nowrap">
    Start a Project ↗
  </button>
</div>
        </div>
        
        </div>
        <div className="flex mt-42 gap-10">
          <div className="flex flex-col gap-10">
         <StatsCard value="100+" title={`Brands Scaled\n Across Industries`}/>
          <StatsCard value="3X" title={`Average Campaign Performance Uplift`}/>
        </div>

        <div className="flex flex-col gap-10 mt-15">
          <StatsCard value="100+" title={`Brands Scaled\n Across Industries`}/>
          <StatsCard value="100+" title={`Brands Scaled\n Across Industries`}/>
        </div>
        </div>
        </div>
  
      </OrangeVideo>

      <PortfolioShowcase/>

      <ServicesSection/>

      <BrandsSection/>

      <RecreateDesign/>

      <InsightsSection/>

      <ContactCTA/>

      <LocationSection/>
    </main>
  );
}
