"use client"; // <--- Add this line at the very top

import Image from 'next/image';
import React from 'react';

const brands = [
  { name: 'OSN', logo: '/images/osn.svg' },
  { name: 'Daikin', logo: '/images/daikin.svg' },
  { name: 'Braun', logo: '/images/braun.svg' },
  { name: 'Toshiba', logo: '/images/toshiba.svg' },
  { name: 'Midea', logo: '/images/khaleej.svg' },
  { name: 'Khaleej Times', logo: '/images/khaleej.svg' },
  { name: 'Redington', logo: '/images/redington.svg' },
  { name: 'Godiva', logo: '/images/godiva.svg' },
  { name: 'Hasbro', logo: '/images/hasbro.svg' },
  { name: 'NBK', logo: '/images/nbk.png' },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-screen px-8 md:px-52 lg:px-52 mx-auto">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#003B65] uppercase">
            Clients
          </span>
          <div className="w-16 h-[1.5px] bg-[#003B65]" />
        </div>

        <h2 className="text-4xl md:text-7xl font-medium text-[#003B65] mb-16 tracking-tight">
          Brands We Work With
        </h2>

        <div className="border-t border-l border-gray-300 grid grid-cols-2 md:grid-cols-5">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="border-r border-b border-gray-300 flex items-center justify-center p-16 h-72 group hover:bg-gray-50 transition-colors"
            >

            
              <div className="relative w-full h-12"> {/* 1. Parent MUST be relative with a height */}
  <Image
    src={brand.logo}
    alt={`${brand.name} logo`}
    fill // 2. This replaces the need for width/height props
    className="object-contain grayscale opacity-60 group-hover:opacity-100 transition-all duration-300"
    sizes="(max-width: 768px) 50vw, 20vw"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;