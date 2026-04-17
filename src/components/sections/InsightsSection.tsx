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
    <section className="relative bg-black text-white py-24 px-8 md:px-52 lg:px-52 overflow-hidden font-sans">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/30 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
<Image
        src="/images/Maskgroup.png" 
        alt="Decorative Element"
        fill
        className="absolute z-10 pointer-events-none" // Add your animation class here
      />
      <div className="max-w-screen mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                Insights
              </span>
              <div className="w-12 h-[1px] bg-[#f5a623]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight max-w-2xl">
              Ideas, Trends & Industry Insights
            </h2>
          </div>

          <ArrowButton title="Read More"/>
        </div>

        {/* --- HORIZONTAL SCROLLING GRID --- */}
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory">
          {insights.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px] snap-center">
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