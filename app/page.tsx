import ArrowButton from "@/src/components/buttons/ArrowButton";
import StatsCard from "@/src/components/cards/StatCard";
import Footer from "@/src/components/layout/Footer";
import BrandsSection from "@/src/components/homepage/BrandsSection";
import ContactCTA from "@/src/components/homepage/ContactCTA";
import InsightsSection from "@/src/components/homepage/InsightsSection";
import LocationSection from "@/src/components/homepage/LocationSection";
import PortfolioShowcase from "@/src/components/homepage/PortfolioShowcase";
import RecreateDesign from "@/src/components/homepage/RecognizedSection";
import ServicesSection from "@/src/components/homepage/ServicesSection";
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
