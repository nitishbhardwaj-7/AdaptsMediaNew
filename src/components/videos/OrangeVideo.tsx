import { ReactNode } from 'react';

interface OrangeWithProps {
  children: ReactNode;
}

const OrangeVideo = ({ children }: OrangeWithProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* LAYER 0: The Background Image */}
      <img 
        src="/images/About_Us_Bg.png" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* LAYER 10: The Animated Element */}
      {/* I added 'pointer-events-none' so it doesn't block clicks to your content */}
      {/* <img 
        src="/images/newelement.png" 
        alt="Decorative Element"
        className="absolute z-10 pointer-events-none" // Add your animation class here
      /> */}

      {/* LAYER 20: The Content Layer */}
      <div className="relative z-20 container mx-auto px-4">
        {children}
      </div>
      
    </section>
  );
};

export default OrangeVideo;