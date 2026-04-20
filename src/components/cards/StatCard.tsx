type StatsCardProps = {
  value: string;
  title: string;
};

export default function StatsCard({ value, title }: StatsCardProps) {
  return (
    
    <div className="group perspective-1000px w-full sm:w-auto">
      
    
      <div className="relative min-h-[9rem] sm:h-[10rem] w-full sm:w-[18rem] px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl rounded-tl-none text-white transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)] group-hover:shadow-[20px_20px_50px_rgba(0,0,0,0.3)]">
        
       
        <h1 className="text-5xl sm:text-6xl font-bold text-[#FAC02E] [transform:translateZ(50px)] drop-shadow-2xl">
          {value}
        </h1>

        <p className="mt-2 text-base sm:text-lg font-medium max-w-full leading-snug [transform:translateZ(30px)] opacity-90 whitespace-pre-line">
          {title}
        </p>

      
        <div className="absolute inset-0 rounded-3xl rounded-tl-none 
          shadow-[0_0_10px_rgba(255,255,255,0.4)] 
          pointer-events-none [transform:translateZ(10px)]">
        </div>
      </div>
    </div>
  );
}