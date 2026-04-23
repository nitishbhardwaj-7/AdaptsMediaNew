import AboutHero from '@/components/aboutuspage/AboutHero'
import AboutOrangeSection from '@/components/aboutuspage/AboutOrangeSection'
import BlueSection from '@/components/aboutuspage/BlueSection'
import DubaiSection from '@/components/aboutuspage/DubaiSection'
import ImpactSection from '@/components/aboutuspage/ImpactSection'
import TeamSection from '@/components/aboutuspage/TeamSection'
import BrandsSection from '@/components/homepage/BrandsSection'
import ContactCTA from '@/components/homepage/ContactCTA'
import RecognizedSection from '@/components/homepage/RecognizedSection'
import Footer from '@/components/layout/Footer'
import PerformSection from '@/components/servicespage/PerformSection'

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