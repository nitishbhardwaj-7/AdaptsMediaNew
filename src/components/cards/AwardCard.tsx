export default function AwardCard({ number, title, awardName, iconColor }: AwardCardProps) {
  return (
    /* 1. Perspective Wrapper */
    <div className="group [perspective:1000px] h-[16rem] w-[18rem]">
      
      {/* 2. Main Card Body with 3D Styles */}
      <div className="relative h-full w-full flex flex-col items-center justify-center p-6 backdrop-blur-xl bg-transparent border border-white/20 rounded-3xl rounded-tl-none text-white transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(12deg)_rotateY(-12deg)] group-hover:shadow-[25px_25px_50px_rgba(0,0,0,0.4)]">
        
        {/* 3. External Glow Layer (Pushed to the very back) */}
        {/* <div className="absolute inset-0 rounded-3xl rounded-tl-none 
          bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
          opacity-0 blur-2xl -z-10 [transform:translateZ(-40px)]">
        </div> */}

        {/* 4. Red Inner Glass Layer (The "Floor") */}
        <div className="absolute inset-[1px] rounded-3xl rounded-tl-none bg-[#cc3333] z-0 opacity-40 group-hover:opacity-60 transition-opacity [transform:translateZ(0px)]" />

        {/* 5. Centered Icon/Logo (Popped forward significantly) */}
        <div className={`w-16 h-16 rounded-full ${iconColor || 'bg-white'} mb-3 flex items-center justify-center relative z-20 shadow-2xl [transform:translateZ(60px)]`}>
          <span className="text-xl font-bold text-[#b30000]">{awardName.slice(0, 1)}</span>
        </div>

        {/* 6. Text Content (Popped forward moderately) */}
        <div className="text-center relative z-20 transform-[translateZ(40px)]">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-1 drop-shadow-md">
            {title}
          </h3>
          <p className="text-xs font-light text-white/80">
            {awardName}
          </p>
        </div>

        {/* 7. Shine/Reflection Overlay (Top layer) */}
        <div className="absolute inset-0 rounded-3xl rounded-tl-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 [transform:translateZ(10px)] pointer-events-none" />

        {/* 8. Border Glow Ring */}
        <div className="absolute inset-0 rounded-3xl rounded-tl-none 
          shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none z-30 [transform:translateZ(20px)]">
        </div>
        
      </div>
    </div>
  );
}