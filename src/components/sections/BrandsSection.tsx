"use client";

import Image from 'next/image';

const brands = [
  { name: 'OSN', logo: '/images/osn.svg' },
  { name: 'Daikin', logo: '/images/daikin.svg' },
  { name: 'Braun', logo: '/images/braun.svg' },
  { name: 'Toshiba', logo: '/images/toshiba.svg' },
  { name: 'Khaleej Times', logo: '/images/khaleej.svg' },
  { name: 'Redington', logo: '/images/redington.svg' },
  { name: 'Godiva', logo: '/images/godiva.svg' },
  { name: 'NBK', logo: '/images/nbk.png' },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 font-sans w-full flex flex-col items-start">
      {/* 1. Default px-6 (Mobile/Tablet/iPad Pro) - Keeps logos large and stuck to left.
          2. min-[1400px]:px-52 (Desktop) - Applies the deep inset only for large screens.
      */}
      <div className="w-full px-6 min-[1400px]:px-52">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#003B65] uppercase">
            Clients
          </span>
          <div className="w-16 h-[1.5px] bg-[#003B65]" />
        </div>

        <h2 className="text-3xl md:text-5xl min-[1400px]:text-7xl font-medium text-[#003B65] mb-10 md:mb-16 tracking-tight">
          Brands We Work With
        </h2>

        {/* GRID ADJUSTMENT:
            - grid-cols-2: Mobile
            - sm:grid-cols-3: Tablets / iPad mini
            - lg:grid-cols-4: iPad Pro / Small Laptops
            - min-[1400px]:grid-cols-5: Large Desktop
        */}
        <div className="border-t border-l border-gray-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 min-[1400px]:grid-cols-5 w-full">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              /* Responsive Height & Padding:
                 - Smaller padding (p-6) on mobile/tablet to let logos grow.
                 - md:p-16 and h-72 restored for Desktop view.
              */
              className="border-r border-b border-gray-300 flex items-center justify-center p-6 md:p-16 h-40 sm:h-56 md:h-72 group hover:bg-gray-50 transition-colors"
            >
              <div className="relative w-full h-10 sm:h-12 md:h-14"> 
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:opacity-100 transition-all duration-300"
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