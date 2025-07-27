"use client"

import { useState } from "react";
import { 
  MapPin, 
  Users, 
  Trophy,
  Share2,
  Sparkles,
  Zap
} from "lucide-react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: MapPin,
      title: "Curated Roadmaps",
      description: "Expert-built learning paths that actually work. No fluff, just the skills that matter.",
      gradient: "from-blue-500 to-cyan-400",
      position: "left"
    },
    {
      id: 2,
      icon: Users,
      title: "Community Resources",
      description: "Real experts share the best tutorials, courses, and tools for every skill and sub-skill.",
      gradient: "from-cyan-500 to-blue-400",
      position: "right"
    },
    {
      id: 3,
      icon: Trophy,
      title: "Level Up System",
      description: "Turn learning into a game. Earn XP, unlock achievements, and climb the leaderboards.",
      gradient: "from-blue-600 to-cyan-500",
      position: "left"
    },
    {
      id: 4,
      icon: Share2,
      title: "Best Resource Sharing",
      description: "Discover gold-standard content voted by the community. Skip the mediocre stuff.",
      gradient: "from-cyan-400 to-blue-500",
      position: "right"
    }
  ];

  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Zap size={16} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Core Features</span>
          </div>
          
          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-8 leading-tight">
            Learn smarter
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Community-driven learning with gamified progression
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                feature.position === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex-1">
                <div className="relative group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl shadow-blue-500/25 mb-6 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-500`}>
                    <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                    <feature.icon size={28} className="text-white relative z-10" />
                  </div>
                  
                  <h3 className="font-bold text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 hidden lg:flex justify-center">
                <div className="relative group">
                  <div className={`w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-all duration-700`}></div>
                  
                  <div className="absolute inset-0 rounded-3xl border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl shadow-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-500`}>
                      <feature.icon size={40} className="text-white" />
                    </div>
                  </div>
                  
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}