

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
    image: "https://images.unsplash.com/photo-1675557009875-436f09789900?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "4 Simple Steps to Optimize Your Dubai Business for Web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
];

const InsightsSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-8 md:px-52 lg:px-52 overflow-hidden font-sans">
      
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/30 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

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

          <button className="flex items-center gap-2 border border-white/40 hover:bg-white/10 rounded-full px-8 py-3 text-sm font-medium transition-all self-start md:mb-4">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-light leading-snug text-gray-200 group-hover:text-white transition-colors line-clamp-3">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;