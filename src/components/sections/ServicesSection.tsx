import React from "react";

const services = [
  {
    number: "01",
    title: "Performance Marketing",
    items: ["Affiliate Channels", "Cost Per Action", "ROI Model"],
  },
  {
    number: "02",
    title: "Social & Content",
    items: ["Content Strategy", "Leverage Influencers", "Paid Social"],
  },
  {
    number: "03",
    title: "Web & Digital Experience",
    items: ["UX/UI", "Front & Back End", "API Integration"],
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="opacity-70"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ServicesSection = () => {
  return (
    <section className="bg-[#0047FF] bg-gradient-to-br from-[#0052FF] to-[#0039CC] text-white py-20 px-8 md:px-52 lg:px-52 font-sans">
      <div className="max-w-screen">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase opacity-80">
              Services
            </span>
            <div className="w-12 h-[1px] bg-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-7xl font-medium mb-8 leading-tight max-w-3xl">
            Services Designed to Drive Growth
          </h2>
          <p className="text-lg md:text-3xl opacity-90 max-w-3xl font-light leading-relaxed">
            End-to-end solutions built to help brands grow, connect, and perform
            across every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              {/* Large Background Number */}
              <span className="text-7xl font-normal opacity-80 mb-2 leading-none text-white blur-xs">
                {service.number}
              </span>
              
              <h3 className="text-2xl md:text-5xl font-light mb-8 pl-10 leading-snug min-h-[4rem] w-82">
                {service.title}
              </h3>

              {/* List Items */}
              <div className="flex flex-col pl-10">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between py-2 border-t border-white/60 group cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm md:text-lg font-extralight tracking-wide opacity-90">
                      {item}
                    </span>
                    <ArrowIcon />
                  </div>
                ))}
                {/* Final bottom border for the last item */}
                <div className="border-t border-white/60 mb-20" />
              </div>

              
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6">

         <button className="flex items-center gap-[7px] border border-white/50 bg-white/5 text-white rounded-full px-5 py-2.5 text-[18px] font-normal cursor-pointer tracking-[0.02em] font-['DM_Sans'] whitespace-nowrap">
                      Explore All Services ↗
                    </button>

                    <button className="flex items-center gap-[7px] border font-bold border-white/50 bg-[#fac02d] text-[#064ed4] rounded-full px-5 py-2.5 text-[18px] cursor-pointer tracking-[0.02em] font-['DM_Sans'] whitespace-nowrap">
                      Start a Project ↗
                    </button>

      </div>
    </section>
  );
};

export default ServicesSection;