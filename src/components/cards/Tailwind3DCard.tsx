const Tailwind3DCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="[perspective:1000px] w-full">
      <div className="
        group relative aspect-[9/14] w-full cursor-pointer overflow-hidden rounded-2xl 
        bg-zinc-900 border border-white/10 
        /* The 3D Core */
        [transform-style:preserve-3d] 
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        /* Fixed tilt on hover */
        hover:[transform:rotateX(10deg)_rotateY(-10deg)]
        hover:shadow-[20px_20px_50px_rgba(0,0,0,0.3)]
        hover:border-white/20
      ">
        
        {/* LAYER 1: The Image (Pushed Back) */}
        <div 
          className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
          style={{ transform: "translateZ(-20px)" }}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* LAYER 2: Floating Shine Overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"
          style={{ transform: "translateZ(20px)" }}
        />

        {/* LAYER 3: Content (Popped Forward) */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-8 z-20 transition-all duration-700"
          style={{ transform: "translateZ(60px)" }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#f5a623] uppercase mb-3 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            Case Study
          </span>
          <h3 className="text-2xl font-['Cormorant_Garamond'] font-medium leading-tight text-white">
            {title}
          </h3>
          
          <div className="h-[2px] w-0 group-hover:w-full bg-[#f5a623] mt-4 transition-all duration-1000" />
        </div>

        {/* LAYER 4: Inner Border Highlight */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-30" />
      </div>
    </div>
  );
};

export default Tailwind3DCard;