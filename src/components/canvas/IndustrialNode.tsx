'use client';

import React from 'react';
import { Handle, Position } from '@xyflow/react';

interface CustomNodeProps {
  data: {
    label: string;
    role: string;
    description: string;
    tags: string[];
    constraint: string;
    statusBadge?: string;
    domainColor?: string;
    isRoot?: boolean;
    isLeader?: boolean;
  };
  selected?: boolean;
}

export function IndustrialNode({ data, selected }: CustomNodeProps) {
  const domainColor = data.domainColor || '#06B6D4';

  return (
    <div
      className={`relative w-[210px] bg-[#09090b] border text-left transition-all duration-150 ${
        selected ? 'border-cyan-400 ring-1 ring-cyan-400/30' : 'border-zinc-800 hover:border-zinc-700'
      }`}
      style={{
        boxShadow: selected ? `0 0 16px -2px ${domainColor}33` : '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Top Hairline Glow Indicator */}
      <div
        className="h-[2px] w-full"
        style={{
          backgroundColor: domainColor,
          boxShadow: `0 0 8px ${domainColor}88`,
        }}
      />

      <Handle
        type="target"
        position={Position.Top}
        className="!w-2 !h-2 !bg-zinc-700 !border-zinc-900 -top-1"
      />

      <div className="p-3">
        {/* Header telemetry & status badge */}
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className="text-[9px] font-mono tracking-wider uppercase text-zinc-500 truncate">
            {data.isRoot ? 'GATEWAY' : data.isLeader ? 'ORCHESTRATOR' : 'SUBSYSTEM'}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: domainColor }}
            />
            <span className="text-[9px] font-mono text-zinc-400">
              {data.statusBadge || 'ACTIVE'}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="font-semibold text-xs text-zinc-100 tracking-tight leading-snug mb-1">
          {data.label}
        </div>

        {/* Role */}
        <div className="text-[10px] font-mono text-zinc-400 leading-tight mb-2.5 line-clamp-1">
          {data.role}
        </div>

        {/* Telemetry Tags */}
        <div className="flex flex-wrap gap-1 pt-1.5 border-t border-zinc-900">
          {data.tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[8px] font-mono px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2 !h-2 !bg-zinc-700 !border-zinc-900 -bottom-1"
      />
    </div>
  );
}
