type StatsCardProps = {
  value: string;
  title: string;
};

export default function StatsCard({value, title}: StatsCardProps) {
  return (
        <div className="relative h-[12rem] w-[19rem] px-8 py-10 backdrop-blur-xl bg-transparent border border-white/20 rounded-3xl rounded-tl-none text-white">
          {/* Glow layer */}
      <div className="absolute inset-0 rounded-3xl rounded-tl-none 
        bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
        opacity-20 blur-2xl -z-10">
      </div>

      <div className="absolute inset-0 rounded-3xl rounded-tl-none 
        shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_10px_rgba(255,255,255,0.2)] 
        pointer-events-none">
      </div>


          <h1 className="text-6xl font-extrabold text-yellow-400">
            {value}
          </h1>

          <p className="mt-2 text-lg font-medium leading-snug">
            {title}
          </p>

        </div>
  );
}