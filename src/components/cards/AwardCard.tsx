type AwardCardProps = {
  number: string;
  title: string;
  awardName: string;
  iconColor?: string;
};

export default function AwardCard({ number, title, awardName, iconColor }: AwardCardProps) {
  return (
    <div className="relative h-[16rem] w-[18rem] flex flex-col items-center justify-center p-6 backdrop-blur-xl bg-transparent border border-white/20 rounded-3xl rounded-tl-none text-white overflow-hidden group transition-all">
      
      {/* 1. External Glow Layer (From StatsCard) */}
      <div className="absolute inset-0 rounded-3xl rounded-tl-none 
        bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
        opacity-20 blur-2xl -z-10">
      </div>

      {/* 2. Red Inner Glass Layer (From AwardCard) */}
      <div className="absolute inset-[1px] rounded-3xl rounded-tl-none bg-[#cc3333] z-0 opacity-40 group-hover:opacity-60 transition-opacity" />
      

      {/* 4. Centered Icon/Logo Area */}
      <div className={`w-16 h-16 rounded-full ${iconColor || 'bg-white'} mb-3 flex items-center justify-center relative z-20 shadow-lg`}>
        <span className="text-xl font-bold text-[#b30000]">{awardName.slice(0, 1)}</span>
      </div>

      {/* 5. Text Content */}
      <div className="text-center relative z-20">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-1">
          {title}
        </h3>
        <p className="text-xs font-light text-white/80">
          {awardName}
        </p>
      </div>

      {/* 6. Border Glow Ring */}
      <div className="absolute inset-0 rounded-3xl rounded-tl-none 
        shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none z-30">
      </div>
    </div>
  );
}