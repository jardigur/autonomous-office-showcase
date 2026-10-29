'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, Cpu } from 'lucide-react';

interface NodeDetailDrawerProps {
  data: any;
  onClose: () => void;
}

export function NodeDetailDrawer({ data, onClose }: NodeDetailDrawerProps) {
  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [data]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-zinc-900 border-l border-zinc-800 p-6 flex flex-col h-full shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Node Telemetry</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 flex-1 space-y-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase">{data.role}</span>
            <h2 className="text-xl font-bold text-white mt-1">{data.label}</h2>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{data.description}</p>
          </div>

          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span>Model Routing</span>
              <span className="text-white font-semibold">{data.model || 'Dynamic LLM Cascade'}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Execution Domain</span>
              <span className="text-cyan-400 font-semibold">{data.domain || 'Isolated Runtime'}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Security Guard</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Sanitized
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
