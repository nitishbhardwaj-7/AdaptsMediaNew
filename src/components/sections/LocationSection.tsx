import React from 'react';

const locations = [
  {
    city: "London",
    address: "Surbiton KT5, London, UK",
    contact: "Email: Info@adaptsmedia.com"
  },
  {
    city: "United States",
    address: "2807 Allen St Dallas, Texas 75204 United States",
    contact: "Contact Number: (256) 286-1817\nEmail: Info@adaptsmedia.com"
  },
  {
    city: "India",
    sub: "Office 01",
    address: "Gurugram: Plot no 23, Sector 18 Gurugram, Haryana 122015",
    contact: "Contact Number: +91 9818706696\nEmail: Info@adaptsmedia.com"
  },
  {
    city: "India",
    sub: "Office 02",
    address: "Bilaspur: G-9, G-10, Commercial Complex, Phase III, Ramalife City, Sakri Road, Bilaspur, Chhattisgarh",
    contact: "Contact Number: +91 9818706696\nEmail: Ankita@adaptsmedia.com"
  },
  {
    city: "Philippines",
    address: "Julia Vargas Avenue, Ortigas Pasig City, Philippines",
    contact: "Contact Number: +639 95 308 2820\nEmail: Info@adaptsmedia.com"
  }
];

const LocationSection = () => {
  return (
    <section className="bg-[#001B3D] bg-gradient-to-tr from-[#053f9c] to-[#022c57] text-white py-24 px-8 md:px-52 lg:px-52 font-sans overflow-hidden">
      <div className="max-w-screen mx-auto">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          
          {/* Left: Dubai Info */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                Locations
              </span>
              <div className="w-12 h-[1px] bg-[#f5a623]" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-medium mb-16 leading-tight tracking-tight">
              Exactly Where <br /> You Need Us <span className="text-3xl align-top ml-2">↗</span>
            </h2>

            <div className="space-y-6">
              <h3 className="text-3xl font-light">Dubai</h3>
              <p className="text-sm opacity-70 leading-relaxed max-w-xs font-light">
                702, Warsan Tower, Near Media Rotana, <br />
                Tecom, Barsha Heights, Dubai, <br />
                United Arab Emirates
              </p>
              <div className="text-sm opacity-70 space-y-1 font-light">
                <p>Contact Number: +971 58 560 1701</p>
                <p>Landline: +971 043257279</p>
                <p>Email: Info@adaptsmedia.com</p>
              </div>
            </div>
          </div>

          {/* Right: Dotted World Map */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] flex items-center justify-center">
            {/* Dotted Map Placeholder (Using an SVG pattern or Image) */}
            <div className="opacity-40 w-full h-full scale-125 lg:translate-x-12">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dot_Fill_World_Map.svg/1200px-Dot_Fill_World_Map.svg.png" 
                 alt="World Map"
                 className="w-full h-auto object-contain invert opacity-50"
               />
               {/* Location Pin */}
               <div className="absolute top-[42%] right-[32%] w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-[0_0_10px_red]" />
            </div>
          </div>
        </div>

        {/* Branch Offices Section */}
        <div className="mt-12">
          <span className="text-[14px] font-medium tracking-[0.1em] opacity-100 mb-6 block">
            Branch Offices
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pt-8">
            {locations.map((loc, index) => (
              <div key={index} className="flex flex-col justify-between h-full group">
                <div>
                  <h4 className="text-2xl font-light mb-4 flex items-center gap-2">
                    {loc.city} {loc.sub && <span className="text-[14px] opacity-90 tracking-widest mt-2">— {loc.sub}</span>}
                  </h4>
                  <p className="text-[16px] opacity-60 leading-relaxed min-h-[60px] font-light">
                    {loc.address}
                  </p>
                </div>
                
                {/* Footer details - Bottom aligned */}
                <div className="text-[15px] h-14 flex flex-col justify-center opacity-60 mt-2 border-t border-b border-white/80 transition-colors whitespace-pre-line font-light leading-normal">
                  {loc.contact}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;