import Image from "next/image";


const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 px-8 md:px-52 lg:px-52">
      <Image
        src="/images/ConnectBg.png" 
        fill
        alt="Decorative Element"
        className="absolute z-10 pointer-events-none" // Add your animation class here
      />
      
      {/* Background Handshake Image - Absolute positioned to the right */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 pointer-events-none mix-blend-luminosity bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000')`,
          maskImage: 'linear-gradient(to left, black, transparent)' // Fades image into the solid red
        }}
      />

      <div className="max-w-screen mx-auto relative z-10">
        <div className="flex flex-col gap-4 max-w-4xl">
          
          {/* Top Label */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase opacity-90">
              Contact Us
            </span>
            <div className="w-12 h-[1px] bg-white opacity-40" />
          </div>

          {/* Main Content */}
          <h2 className="text-3xl md:text-7xl font-medium text-white leading-[1.2] tracking-tight">
            Ready to start your next project or still exploring ideas?{' '}
            <span className="relative inline-block cursor-pointer group">
              <span className="font-light italic border-b border-white/40 pb-1 hover:border-white transition-colors">
                Let's connect. ↗
              </span>
            </span>
          </h2>
          
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;