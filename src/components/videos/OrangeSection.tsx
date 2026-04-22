import StatsCard from '../cards/StatCard';
import ArrowButton from '../buttons/ArrowButton';
import YellowButton from '../buttons/YellowButton';

const OrangeSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden flex items-center justify-center bg-[#c42a27] text-white py-20">
      
      {/* LAYER 0: The Background Image */}
      <img 
        src="/images/About_Us_Bg.png" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* LAYER 20: The Content Layer */}
      <div className="relative z-20 max-w-[1600px] px-8 md:px-20">

        <h1 className="text-[clamp(1.6rem,4.5vw,4.5rem)] font-extralight mb-8 md:mb-12 tracking-wider leading-tight">
              A New-Age Agency <br /> Built for Today's Brands
            </h1>
       <div className="flex flex-col min-[1200px]:flex-row justify-between gap-10">

          
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full">
            
            <div className="w-full">
              <h2 className="text-[clamp(1rem,2vw,1.875rem)] mb-6 md:mb-8 text-gray-200 font-thin">
                We combine <strong>strategy</strong>, <strong>creativity</strong> and <strong>technology</strong> to define marketing that performs not just looks good.
              </h2>
              
              <p className="text-[clamp(0.9rem,1.5vw,1.25rem)] mb-6 opacity-70 font-thin">
                In today's fast-moving digital <strong>landscape</strong>, visibility alone is not enough. Brands need <strong>clarity</strong>, <strong>consistency</strong> and <strong>performance</strong> at every touch point.
              </p>
              
              <p className="text-[clamp(0.9rem,1.5vw,1.25rem)] mb-8 md:mb-10 opacity-50 font-thin">
                We are a new-generation agency built to bridge that gap — bringing together strategic thinking, creative excellence, and data-driven execution under one roof. Every solution we design is rooted in understanding your business, your audience, and your growth ambitions.
              </p>
              
              
              <h2 className="text-[clamp(1rem,2.5vw,2.25rem)] mb-6 md:mb-8 bg-gradient-to-r from-[#fffdf7] to-[#fcd87c] bg-clip-text text-transparent font-medium">
                We don't just build campaigns. <br /> We build momentum.
              </h2>

              <div className="flex flex-wrap justify-start gap-3 sm:gap-6 items-center">
                <ArrowButton width='md' title="Read More"/>
                <YellowButton title='Start a Project' variant='red'/>
              </div>
            </div>
          </div>

         
         <div className="hidden md:flex gap-6 xl:gap-10 mt-6 w-auto lg:w-auto lg:flex-shrink lg:justify-start">
            
          
            <div className="flex flex-col gap-3 sm:gap-6 lg:flex-none">
              <StatsCard 
                value="100+" 
                title={`Brands Scaled\n Across Industries`}
              />
              <StatsCard 
                value="500+" 
                title={`Successfully Executed Campaigns`}
              />
            </div>

         
            <div className="flex flex-col gap-3 sm:gap-6 mt-8 md:mt-10 flex-1 lg:flex-none">
              <StatsCard 
                value="3X" 
                title={`Average Campaign Performance Uplift`}
              />
              <StatsCard 
                value="5+" 
                title={`Key Market Presence`}
              />
            </div>

          </div>

        </div>
      </div>
      
    </section>
  );
};

export default OrangeSection;