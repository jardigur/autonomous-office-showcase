import React from 'react';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 px-6 max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        PRODUCTION ENVIRONMENT // MULTI-AGENT RUNTIME
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
        Autonomous AI Core Operating <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
          a Real-World Business.
        </span>
      </h1>

      <p className="max-w-3xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
        Driven by direct directives from the Lead Architect, routed through central orchestration, 
        and autonomously executed by specialized multi-agents to operate a high-volume independent automotive workshop.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a 
          href="#architecture-canvas"
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
        >
          Explore Live Architecture
        </a>
        <a 
          href="#telemetry"
          className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 text-zinc-300 font-medium text-sm transition-all"
        >
          Inspect Telemetry
        </a>
      </div>
    </section>
  );
}
