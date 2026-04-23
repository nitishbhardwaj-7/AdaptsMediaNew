import AboutHero from '@/components/aboutus/AboutHero'
import AboutOrangeSection from '@/components/aboutus/AboutOrangeSection'
import BlueSection from '@/components/aboutus/BlueSection'
import DubaiSection from '@/components/aboutus/DubaiSection'
import ImpactSection from '@/components/aboutus/ImpactSection'
import TeamSection from '@/components/aboutus/TeamSection'
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