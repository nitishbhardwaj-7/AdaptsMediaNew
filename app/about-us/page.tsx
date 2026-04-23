import AboutHero from '@/components/AboutUsPage/AboutHero'
import AboutOrangeSection from '@/components/AboutUsPage/AboutOrangeSection'
import BlueSection from '@/components/AboutUsPage/BlueSection'
import DubaiSection from '@/components/AboutUsPage/DubaiSection'
import ImpactSection from '@/components/AboutUsPage/ImpactSection'
import TeamSection from '@/components/AboutUsPage/TeamSection'
import BrandsSection from '@/components/HomePage/BrandsSection'
import ContactCTA from '@/components/HomePage/ContactCTA'
import RecognizedSection from '@/components/HomePage/RecognizedSection'
import Footer from '@/components/layout/Footer'
import PerformSection from '@/components/ServicesPage/PerformSection'

const page = () => {
  return (
    <div>
    <AboutHero/>
    <DubaiSection/>
    <AboutOrangeSection/>
    <BlueSection/>
    <PerformSection/>
    <ImpactSection/>
    <TeamSection/>
    <BrandsSection/>
    <RecognizedSection/>
    <ContactCTA/>
    <Footer/>
    </div>
  )
}

export default page