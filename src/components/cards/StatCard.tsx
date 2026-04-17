type StatsCardProps = {

  value: string;

  title: string;

};

export default function StatsCard({ value, title }: StatsCardProps) {
  return (
    /* 1. Perspective Wrapper */
    <div className="group [perspective:1000px]">
      
      {/* 2. Card Body with preserve-3d */}
      <div className="relative h-[12rem] w-[19rem] px-6 py-8 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl rounded-tl-none text-white transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(10deg)_rotateY(-10deg)] group-hover:shadow-[20px_20px_50px_rgba(0,0,0,0.3)]">
        
        {/* Glow layer (remains behind) */}
        

        {/* Shine/Reflection overlay */}
       

        {/* Value (Popped forward significantly) */}
        <h1 className="text-6xl font-bold text-[#FAC02E] [transform:translateZ(50px)] drop-shadow-2xl">
          {value}
        </h1>

        {/* Title (Popped forward slightly) */}
        <p className="mt-2 text-lg font-medium w-60 leading-snug [transform:translateZ(30px)] opacity-90">
          {title}
        </p>

        {/* Border Glow Ring */}
        <div className="absolute inset-0 rounded-3xl rounded-tl-none 
          shadow-[0_0_10px_rgba(255,255,255,0.4)] 
          pointer-events-none [transform:translateZ(10px)]">
        </div>
      </div>
    </div>
  );
}