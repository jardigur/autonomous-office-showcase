import React from 'react';
import { telemetrySnapshot } from '@/data/telemetrySnapshot';

export function TelemetrySection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto border-t border-zinc-800">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Audit Ledger & Resource Efficiency</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-2">Cost Optimization & Production Metrics</h2>
        <p className="text-zinc-400 text-sm">Aggregated telemetry snapshot without proprietary leak.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl text-center">
          <div className="text-2xl md:text-3xl font-bold font-mono text-cyan-400">{telemetrySnapshot.totalTokensProcessed}</div>
          <div className="text-xs text-zinc-400 mt-1">Processed Volume</div>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl text-center">
          <div className="text-2xl md:text-3xl font-bold font-mono text-emerald-400">{telemetrySnapshot.cacheHitRatio}</div>
          <div className="text-xs text-zinc-400 mt-1">Cache Optimization</div>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl text-center">
          <div className="text-2xl md:text-3xl font-bold font-mono text-indigo-400">{telemetrySnapshot.dailyBurnCap}</div>
          <div className="text-xs text-zinc-400 mt-1">Daily Hard Ceiling</div>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl text-center">
          <div className="text-2xl md:text-3xl font-bold font-mono text-white">{telemetrySnapshot.uptimeRate}</div>
          <div className="text-xs text-zinc-400 mt-1">Daemon Availability</div>
        </div>
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-zinc-800">
          <div>
            <h3 className="text-lg font-semibold text-white">Monthly OPEX vs Traditional Staffing Model</h3>
            <p className="text-xs text-zinc-400 mt-1">Comparison of 4 dedicated human roles against autonomous multi-agent routing.</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            {telemetrySnapshot.opexComparison.efficiencyGain} Efficiency Gain
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 rounded-lg bg-zinc-950/40 border border-zinc-800">
            <span className="text-xs font-mono text-zinc-500 uppercase">Estimated Traditional Overhead</span>
            <div className="text-2xl font-bold font-mono text-zinc-400 mt-1">{telemetrySnapshot.opexComparison.conventionalMonthlyIdr}</div>
            <p className="text-xs text-zinc-500 mt-2">Accounting, QA, software development, CRM manual operators.</p>
          </div>
          <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-800/40">
            <span className="text-xs font-mono text-cyan-400 uppercase">Multi-Agent Infrastructure OPEX</span>
            <div className="text-2xl font-bold font-mono text-cyan-300 mt-1">{telemetrySnapshot.opexComparison.orchestrationMonthlyIdr}</div>
            <p className="text-xs text-zinc-400 mt-2">Cloud VM, token fills, gateway daemons, backup storage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
