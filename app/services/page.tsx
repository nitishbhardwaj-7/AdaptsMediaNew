import BrandsSection from "@/src/components/HomePage/BrandsSection"
import ContactCTA from "@/src/components/HomePage/ContactCTA"
import Footer from "@/src/components/layout/Footer"
import ConnectedThinkingServices from "@/src/components/ServicesPage/ConnectedThinking"
import PerformSection from "@/src/components/ServicesPage/PerformSection"
import PortfolioSection from "@/src/components/ServicesPage/PortfolioSection"
import ServicesHero from "../../src/components/ServicesPage/ServicesHero"

const page = () => {
  return (
    <div>
      <ServicesHero/>
    <ConnectedThinkingServices/>
    <PortfolioSection/>
    <BrandsSection/>
    <PerformSection/>
    <ContactCTA/>
    <Footer/>
    </div>
  )
}

export default page