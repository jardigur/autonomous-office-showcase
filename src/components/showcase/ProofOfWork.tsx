import React from 'react';

const cases = [
  {
    title: 'Hardware Concurrency Mutex Bridge',
    category: 'Hardware & OS Level',
    desc: 'Serial job queue locking at Electron IPC main process to prevent thermal buffer overflow and duplicate printing during peak operational hours.',
    badge: 'Production Active',
  },
  {
    title: 'Automated Lifecycle Maintenance Loop',
    category: 'Retention & CRM',
    desc: 'Scheduled service reminders triggered by real-world vehicle lifecycle patterns, protecting business margins without spam blasting.',
    badge: 'Daily Scheduled',
  },
  {
    title: 'Token Routing & Fill-First Fallback',
    category: 'Resource Efficiency',
    desc: 'Dynamic load balancing across 5 LLM compute accounts with burst-shielding and a daily burn cap of 40M tokens.',
    badge: 'Hard Cap Active',
  },
];

export function ProofOfWork() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Case Study: Real-World Automotive Workshop</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-2">Engineered for Reality, Not Just Chatbot Demos</h2>
        <p className="text-zinc-400 text-sm">Controlling physical workshop hardware and high-concurrency transactions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item, idx) => (
          <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-6 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyan-400">{item.category}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">{item.badge}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
