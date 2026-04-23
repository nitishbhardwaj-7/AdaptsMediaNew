import BrandsSection from "@/components/homepage/BrandsSection"
import ContactCTA from "@/components/homepage/ContactCTA"
import Footer from "@/components/layout/Footer"
import ConnectedThinkingServices from "@/components/ServicesPage/ConnectedThinking"
import PerformSection from "@/components/ServicesPage/PerformSection"
import PortfolioSection from "@/components/ServicesPage/PortfolioSection"
import ServicesHero from "@/components/ServicesPage/ServicesHero"

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