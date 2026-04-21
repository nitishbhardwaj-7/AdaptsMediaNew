"use client";

import Image from 'next/image';

const brands = [
  { name: 'OSN', logo: '/images/osn.svg' },
  { name: 'Daikin', logo: '/images/DAIKIN_logo.svg.png' },
  { name: 'Braun', logo: '/images/braun.svg' },
  { name: 'Toshiba', logo: '/images/960px-TOSHIBA_Logo.png' },
  { name: 'Khaleej Times', logo: '/images/khaleej.svg' },
  { name: 'Redington', logo: '/images/redington.svg' },
  { name: 'Godiva', logo: '/images/godiva.svg' },
  { name: 'Midea', logo: '/images/Midea.svg.png' },
  { name: 'NBK', logo: '/images/NBK.svg.png' },
  { name: 'Hasbro', logo: '/images/hasbro-new.png' },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-20 font-sans w-full flex flex-col items-center">
      

      <div className="max-w-[1600px] px-8 md:px-20 w-full">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#003B65] uppercase">
            Clients
          </span>
          <div className="w-16 h-[1.5px] bg-[#003B65]" />
        </div>

        {/* Adjusted text size logic: text-7xl can be overwhelming, 
            so we'll scale it better for the 1700px container */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#003B65] mb-10 md:mb-16 tracking-tight">
          Brands We Work With
        </h2>

        {/* GRID ADJUSTMENT:
            - Changed 1400px trigger to xl (1280px+) for 5 columns.
            - Added box-border to ensure borders don't push the grid out.
        */}
        <div className="border-t border-l border-gray-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="border-r border-b border-gray-300 flex items-center justify-center p-6 md:p-12 h-40 sm:h-56 md:h-64 lg:h-72 group hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-full h-10 sm:h-12 md:h-14"> 
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  priority={index < 5}
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