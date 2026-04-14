"use client"; // <--- This line fixes the error

import React from 'react';
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
    title: "TechBehemoths 2025",
    awardName: "Award Winner (UAE)",
    iconColor: "bg-black"
  },
  {
    number: "02",
    title: "Clutch Top Rated",
    awardName: "Digital Marketing Company",
  },
  {
    number: "03",
    title: "Clutch Global",
    awardName: "Top Web Development Company",
  },
  {
    number: "04",
    title: "Clutch UAE",
    awardName: "Technical SEO Company",
  },
  {
    number: "05",
    title: "Adapts Media",
    awardName: "Top Agency of the Year",
    iconColor: "bg-blue-600"
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

      <section className="bg-gradient-to-br from-[#b30000] to-[#FF9000] text-white py-24 px-8 md:px-52 lg:px-52">
        <div className="max-w-screen mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-90">Awards & Recognition</span>
                <div className="w-12 h-[1.2px] bg-yellow-500" />
              </div>
              <h2 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight max-w-2xl">{pageData.awards.heading}</h2>
            </div>
            <button className="flex items-center gap-2.5 bg-white/5 border border-white/40 hover:bg-white/10 rounded-full px-7 py-3 text-sm font-medium">
              Explore More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {awardsData.map((award, index) => (
            <AwardCard 
              key={index}
              number={award.number}
              title={award.title}
              awardName={award.awardName}
              iconColor={award.iconColor} 
            />
          ))}
        </div>
        </div>

        {/* --- Proud Partnerships Section --- */}
<div className="mt-20 flex flex-col gap-8">
  <span className="text-sm font-medium tracking-[0.15em] uppercase opacity-90 text-white font-sans">
    Proud Partnerships
  </span>

  <div className="flex flex-wrap items-center gap-6">
    
    {/* 1. Sortlist Badge (Blue Ribbon) */}
    <div 
      className="relative flex items-center bg-[#002BFF] text-white px-2 py-4 h-22 min-w-[180px]"
      style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)' }}
    >
      <div className="flex items-center gap-4">
        {/* Badge Icon */}
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
           <svg className="w-6 h-6 text-[#002BFF]" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
             <path className="text-white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
           </svg>
        </div>
        
        {/* Separator Line */}
        <div className="w-[1px] h-10 bg-white/30" />

        <div className="flex flex-col">
          <span className="text-2xl font-bold leading-none tracking-tight">sortlist</span>
          <span className="text-[11px] font-medium opacity-90 uppercase tracking-wider mt-1">
            Trusted Partner
          </span>
        </div>
      </div>
    </div>

    {/* 2. Digital Agency Network Badge (White Card) */}
    <div className="bg-white rounded-xl px-2 py-2 h-22 flex items-center justify-between min-w-[180px] shadow-lg">
      <div className="flex flex-col">
        <span className="text-[#121619] font-bold text-sm leading-tight">Digital Agency<br/>Network</span>
        <div className="w-8 h-[1px] bg-gray-200 my-1" />
        <span className="text-[#121619] text-[9px] font-bold uppercase tracking-widest opacity-70">
          Verified Agency
        </span>
      </div>
      {/* Rainbow Check Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 via-yellow-400 to-red-500 p-[2px]">
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-black font-bold">
          ✓
        </div>
      </div>
    </div>

    {/* 3. Semrush Badge (Purple Card) */}
    <div className="bg-[#3D1D94] text-white rounded-xl px-2 py-4 h-22 flex flex-col justify-between max-w-[120px] relative overflow-hidden">
      <div className="flex items-center gap-1.5 opacity-90">
        <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
        <span className="text-[10px] font-black tracking-tighter uppercase">Semrush</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-[13px] font-bold leading-tight max-w-[80px]">
          Certified Agency Partner
        </span>
        {/* Diagonal Arrow Icon */}
        <div className="bg-white/20 p-1.5 rounded-lg">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </div>

  </div>
</div>
      </section>
   
  );
}