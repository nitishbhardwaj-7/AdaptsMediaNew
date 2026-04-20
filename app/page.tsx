import ArrowButton from "@/src/components/buttons/ArrowButton";
import StatsCard from "@/src/components/cards/StatCard";
import Footer from "@/src/components/layout/Footer";
import BrandsSection from "@/src/components/sections/BrandsSection";
import ContactCTA from "@/src/components/sections/ContactCTA";
import InsightsSection from "@/src/components/sections/InsightsSection";
import LocationSection from "@/src/components/sections/LocationSection";
import PortfolioShowcase from "@/src/components/sections/PortfolioShowcase";
import RecreateDesign from "@/src/components/sections/RecognizedSection";
import ServicesSection from "@/src/components/sections/ServicesSection";
import HeroVideo from "@/src/components/videos/HeroVideo";
import OrangeSection from "@/src/components/videos/OrangeSection";


export default function Home() {
  return (
    <main>
      <HeroVideo/>
       
      <OrangeSection/>

      <PortfolioShowcase/>

      <ServicesSection/>

      <BrandsSection/>

      <RecreateDesign/>

      <InsightsSection/>

      <ContactCTA/>

      <LocationSection/>

      <Footer/>
    </main>
  );
}
