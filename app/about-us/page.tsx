import AboutHero from '@/src/components/AboutUsPage/AboutHero'
import AboutOrangeSection from '@/src/components/AboutUsPage/AboutOrangeSection'
import BlueSection from '@/src/components/AboutUsPage/BlueSection'
import DubaiSection from '@/src/components/AboutUsPage/DubaiSection'
import ImpactSection from '@/src/components/AboutUsPage/ImpactSection'
import TeamSection from '@/src/components/AboutUsPage/TeamSection'
import BrandsSection from '@/src/components/HomePage/BrandsSection'
import ContactCTA from '@/src/components/HomePage/ContactCTA'
import RecognizedSection from '@/src/components/HomePage/RecognizedSection'
import Footer from '@/src/components/layout/Footer'
import PerformSection from '@/src/components/ServicesPage/PerformSection'

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