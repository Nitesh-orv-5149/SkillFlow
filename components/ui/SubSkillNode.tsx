export default function SubSkillNode({ title, icon: Icon } : { title: string, icon?: any }) {
  return (
    <div className="relative group">
      <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
      
      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-2xl shadow-blue-500/30 flex items-center justify-center border border-blue-400/30 group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-500">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
        
        <div className="relative z-10 flex items-center justify-center">
          {Icon ? (
            <Icon size={24} className="text-white drop-shadow-lg" />
          ) : (
            <span className="text-white font-bold text-xl drop-shadow-lg">{title}</span>
          )}
        </div>
      </div>
    </div>
  );
}