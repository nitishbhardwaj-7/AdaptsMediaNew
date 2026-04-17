"use client"; // <--- This line fixes the error


import Image from 'next/image';
import ArrowButton from '../buttons/ArrowButton';
import AwardCard from '../cards/AwardCard';

// --- Sub-component for Service List Items ---
const ServiceItem = ({ text }: { text: string }) => (
  <div className="flex items-center justify-between py-4 border-t border-white/20 hover:bg-white/5 cursor-pointer group transition-colors">
    <span className="text-sm tracking-wide text-white/90 font-light group-hover:text-white">
      {text}
    </span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </div>
);

const awardsData = [
  {
    number: "01",
    
    awardName: "TechBehemoths 2025 Award Winner (UAE)",
    imagePath: "/images/techbehemoths.png"
  },
  {
    number: "02",
    
    awardName: "Top Digital Marketing Company",
    imagePath: "/images/digitalmarketing.png"
  },
  {
    number: "03",
   
    awardName: "Top Web Development Company",
    imagePath: "/images/webdevelopment.png"
  },
  {
    number: "04",

    awardName: "Top Technical SEO Company",
    imagePath: "/images/technicalseo.png"
  },
  {
    number: "05",
   
    awardName: "Top Agency of the Year",
    imagePath: "/images/topagency.png"
  }
];
// --- Sub-component for Award Cards ---


const pageData = {
  services: {
    heading: 'Services Designed to Drive Growth',
    description: 'End-to-end solutions built to help brands grow, connect, and perform across every touchpoint.',
    columns: [
      { number: '01', title: 'Performance Marketing', items: ['Affiliate Channels', 'Cost Per Action', 'ROI Model'] },
      { number: '02', title: 'Social & Content', items: ['Content Strategy', 'Leverage Influencers', 'Paid Social'] },
      { number: '03', title: 'Web & Digital Experience', items: ['UX/UI', 'Front & Back End', 'API Integration'] },
      { number: '04', title: 'Branding & Creative', items: ['Affiliate Channels', 'Cost Per Action', 'ROI Model'] },
      { number: '05', title: 'Public Relations & Activations', items: ['Strategic PR', 'Press Releases', 'Events and Activation'] },
      { number: '06', title: 'Strategy & Consulting', items: ['Industry and Competitor Analysis Tailor-made Growth Strategies Targeted Ads and Email Campaigns', 'Tailor-made Growth Strategies', 'Targeted Ads and Email Campaigns'] },
    ],
  },
  clients: {
    heading: 'Brands We Work With',
    logos: [
      { name: 'OSN', url: 'https://logo.clearbit.com/osn.com' },
      { name: 'Daikin', url: 'https://logo.clearbit.com/daikin.com' },
      { name: 'Braun', url: 'https://logo.clearbit.com/braun.com' },
      { name: 'Toshiba', url: 'https://logo.clearbit.com/toshiba.com' },
      { name: 'Midea', url: 'https://logo.clearbit.com/midea.com' },
      { name: 'Khaleej Times', url: 'https://logo.clearbit.com/khaleejtimes.com' },
      { name: 'Redington', url: 'https://logo.clearbit.com/redingtongroup.com' },
      { name: 'Godiva', url: 'https://logo.clearbit.com/godiva.com' },
      { name: 'Hasbro', url: 'https://logo.clearbit.com/hasbro.com' },
      { name: 'NBK', url: 'https://logo.clearbit.com/nbk.com' },
    ],
  },
  awards: {
    heading: 'Recognized for Excellence',
    list: [
      { number: '01', title: 'TechBehemoths 2025 Award Winner (UAE)', awardName: 'AWARDS', iconColor: 'bg-black' },
      { number: '02', title: 'Top Digital Marketing Company', awardName: 'Clutch' },
      { number: '03', title: 'Top Web Development Company', awardName: 'Clutch' },
      { number: '04', title: 'Top Technical SEO Company', awardName: 'Clutch' },
      { number: '05', title: 'Top Agency of the Year', awardName: '2023', iconColor: 'bg-white' },
    ],
    partners: [
      { name: 'sortlist', color: 'bg-blue-600', text: 'Trusted Partner' },
      { name: 'Digital Agency Network', color: 'bg-white', text: 'VERIFIED AGENCY', textColor: 'text-black' },
      { name: 'Agency Partner', color: 'bg-indigo-700', text: 'Certified Partner' },
    ],
  },
};

export default function RecognizedSection() {
  return (

      <section className="relative text-white py-24 px-8 md:px-52 lg:px-52">
        <Image
        src="/images/Awards_Bg.png" // Path from public folder
        alt="Background Description"
        fill                          // Tells image to fill the relative parent
        priority                      // High priority (good for sections at top of page)
        className="object-cover z-0"  // object-cover behaves like 'background-size: cover'
        sizes="100vw"                 // Helps Next.js optimize for the screen width
      />
        <div className="relative z-10 max-w-screen mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[10px] text-[#FAC02E] font-bold tracking-[0.2em] uppercase opacity-90">Awards & Recognition</span>
                <div className="w-12 h-[0.6px] bg-[#FAC02E] translate-y-[3px]" />
              </div>
              <h2 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight max-w-2xl">{pageData.awards.heading}</h2>
            </div>
            <ArrowButton title='Explore More'/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {awardsData.map((award, index) => (
            <AwardCard 
              key={index}
              awardName={award.awardName}
              imagePath={award.imagePath} 
            />
          ))}
        </div>
        </div>

        {/* --- Proud Partnerships Section --- */}

<div className="mt-20 flex flex-col gap-6">
  {/* Optional Label */}
  <span className="text-sm font-light tracking-[0.15em] opacity-90 text-white font-sans">
    Proud Partnerships
  </span>

  <div className="flex flex-wrap items-center gap-12">
    
      <div className="relative w-50 h-20">
        <Image 
          src="/images/sortlist.png" 
          alt="Sortlist"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

    {/* 2. Digital Agency Network (White Card) */}
   
      <div className="relative w-40 h-24">
        <Image 
          src="/images/digitalagencynetwork.png" 
          alt="Digital Agency Network"
          width={170}
          height={170}
          className="object-contain"
        />
      </div>
   

    {/* 3. Semrush Badge (Purple Card) */}

      <div className="relative w-40 h-24">
        <Image 
          src="/images/semrush.png" 
          alt="Semrush"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

  </div>
</div>
      </section>
   
  );
}