import Image from "next/image";
import ArrowButton from "../buttons/ArrowButton";
import Tailwind3DCard from "../cards/Tailwind3DCard";

const insights = [
  {
    title: "Social Media Marketing: Facts You Need to Know This Year",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Types of Web Development That Businesses Must Know",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Top AI Tools Digital Marketers Should Be Using Today!",
    image: "https://images.unsplash.com/photo-1698628472751-b65c74f247a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "4 Simple Steps to Optimize Your Dubai Business for Web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Social Media Marketing: Facts You Need to Know This Year",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Types of Web Development That Businesses Must Know",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Top AI Tools Digital Marketers Should Be Using Today!",
    image: "https://images.unsplash.com/photo-1698628472751-b65c74f247a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "4 Simple Steps to Optimize Your Dubai Business for Web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  }
  // Adding more cards here will now automatically enable horizontal scrolling
];

const InsightsSection = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden font-sans flex flex-col items-start justify-start md:items-center md:justify-center">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/30 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      
      <Image
        src="/images/Maskgroup.png" 
        alt="Decorative Element"
        fill
        className="absolute z-10 pointer-events-none object-cover" 
      />

      {/* Removed 'mx-auto' and 'max-w-screen' to pin content to the left.
        Changed to w-full to allow scroll to span the width.
      */}
      <div className="relative z-20 max-w-[1600px] px-8 md:px-20 w-full">
        
        {/* Header Section: flex-col below 1400px to keep button left-aligned */}
        <div className="flex flex-col min-[1400px]:flex-row min-[1400px]:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                Insights
              </span>
              <div className="w-12 h-[1px] bg-[#f5a623]" />
            </div>
            <h2 className="text-3xl md:text-6xl min-[1400px]:text-7xl tracking-wide font-medium leading-[1.1] tracking-tight md:max-w-full lg:max-w-full">
              Ideas, Trends & <br/> Industry Insights
            </h2>
          </div>

          <div className="flex justify-start">
            <ArrowButton title="Read More"/>
          </div>
        </div>

        {/* --- HORIZONTAL SCROLLING GRID --- */}
        {/* Added '-mx-8' and 'px-8' on mobile/tablet range so the scroll 
            goes edge-to-edge but content aligns with the text.
        */}
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide px-8 min-[1400px]:mx-0 min-[1400px]:px-0">
          {insights.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-start">
              <Tailwind3DCard 
                title={item.title} 
                image={item.image} 
              />
            </div>
          ))}
        </div>
        {/* ---------------------------------- */}

      </div>
    </section>
  );
};

export default InsightsSection;