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
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-[#09090b] border-l border-zinc-800 p-6 flex flex-col h-full shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">SUBSYSTEM_INSPECTOR</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: data.domainColor || '#06B6D4' }}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{data.role}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{data.label}</h2>
            <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans">{data.description}</p>
          </div>

          <div className="bg-[#121215] border border-zinc-800/80 p-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span>Status Telemetry</span>
              <span className="text-white font-semibold">{data.statusBadge || 'ACTIVE'}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Policy Constraint</span>
              <span className="text-zinc-300 font-semibold text-right max-w-[200px] truncate">{data.constraint || 'Standard Gateway'}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Security Perimeter</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% SANITIZED
              </span>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
              SYSTEM_TAGS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.tags?.map((t: string, i: number) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            Dismiss Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
