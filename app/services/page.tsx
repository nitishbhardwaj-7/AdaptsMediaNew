import BrandsSection from "@/components/homepage/BrandsSection"
import ContactCTA from "@/components/homepage/ContactCTA"
import Footer from "@/components/layout/Footer"
import ConnectedThinkingServices from "@/components/servicespage/ConnectedThinking"
import PerformSection from "@/components/servicespage/PerformSection"
import PortfolioSection from "@/components/servicespage/PortfolioSection"
import ServicesHero from "@/components/servicespage/ServicesHero"

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