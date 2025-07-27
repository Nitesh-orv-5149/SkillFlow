"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import SubSkillNode from "../ui/SubSkillNode";

export default function HeroSection() {
  const containerRef = useRef(null);

  const steps = [
    {
      id: "1",
      icon: Target,
      title: "Choose Your Path",
      description: "Discover skills tailored to your goals and interests"
    },
    {
      id: "2", 
      icon: Sparkles,
      title: "Follow the Roadmap",
      description: "Navigate through structured, progressive learning paths"
    },
    {
      id: "3",
      icon: Zap,
      title: "Master & Apply",
      description: "Build real expertise through hands-on practice"
    }
  ];

  return (
    <header className="flex w-full flex-col items-center justify-center relative min-h-screenoverflow-hidden">
      <div
        className="px-6 max-w-7xl w-full mx-auto relative z-10 flex flex-col judstify-center items-center"
        ref={containerRef}
      >
        <div className="mb-20 mt-25 text-center">
          <div className="relative inline-block mb-8">
            <h1 className="font-black text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              SKILLFLOW
            </h1>
           
          </div>
          
          <div className="relative">
            <h3 className="font-medium text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-3">
              Transform your potential into expertise with 
              <span className="text-blue-400 font-semibold"> Gamified learning paths</span>
            </h3>

            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Join thousands of learners mastering new skills through personalized roadmaps
            </p>
          </div>
        </div>

        <div className="hidden lg:flex w-full flex-row justify-center items-center gap-16 xl:gap-20">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-16 xl:gap-20">
              <div className="flex flex-col items-center gap-8 group">
                <SubSkillNode title={step.id} icon={step.icon} />
                <div className="text-center max-w-48 pointer-events-none ">
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="relative">
                  <ArrowRight
                    size={32}
                    strokeWidth={1.5}
                    className="text-blue-400/60 hover:text-blue-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 blur-sm">
                    <ArrowRight
                      size={32}
                      strokeWidth={1.5}
                      className="text-blue-400/20"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex lg:hidden w-full flex-row justify-center items-center gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-6 group">
                <SubSkillNode title={step.id} icon={step.icon} />
                <div className="text-center max-w-36 pointer-events-none">
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="relative">
                  <ArrowRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-400/60"
                  />
                  <div className="absolute inset-0 blur-sm">
                    <ArrowRight
                      size={24}
                      strokeWidth={1.5}
                      className="text-blue-400/20"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex md:hidden flex-col justify-center items-center gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-6 group">
                <SubSkillNode title={step.id} icon={step.icon} />
                <div className="text-center max-w-64 pointer-events-none">
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 ">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="relative -mt-6">
                  <ArrowRight
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-400/60 rotate-90"
                  />
                  <div className="absolute inset-0 blur-sm">
                    <ArrowRight
                      size={24}
                      strokeWidth={1.5}
                      className="text-blue-400/20 rotate-90"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}