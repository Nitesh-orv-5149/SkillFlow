"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Users, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Ready to Level Up?</span>
          </div>

          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-8 leading-tight">
            Your skills journey
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">starts here</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands who've transformed their careers through 
            <span className="text-blue-400 font-semibold"> community-driven learning</span>
          </p>

          <Link href="/roadmaps" className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="px-12 py-5 border-2 bg-blue-400/30 border-blue-500/40 rounded-full font-semibold text-lg text-white hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm">
              Explore Roadmaps
            </button>
          </Link>
        </div>
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your career?
              </h3>
              <p className="text-lg text-slate-300 ">
                Join our community of learners and start building the skills that matter most in today's market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}