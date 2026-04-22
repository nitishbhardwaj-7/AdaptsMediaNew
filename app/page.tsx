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


export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(`https://adaptsmedia.com/wp-json/yoast/v1/get_head?url=https://adaptsmedia.com/`);
  const data = await res.json();
  const yoast = data.json;

  return {
    title: yoast.title,
    description: yoast.description,
    alternates: {
      canonical: "https://adaptsmedia.com/",
    },
    openGraph: {
      title: yoast.og_title,
      description: yoast.og_description,
      images: [yoast.og_image?.[0]?.url],
    }
  };
}

export default async function Home() {
  // To get the Homepage SCHEMA, you fetch the head data again or create a helper
  const res = await fetch(`https://adaptsmedia.com/wp-json/yoast/v1/get_head?url=https://adaptsmedia.com/`);
  const data = await res.json();
  return (
    <>
      {/* Homepage specific Schema (Organization, WebSite, etc.) */}
      {data.json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.json.schema) }}
        />
      )}
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
    </>
  );
}
