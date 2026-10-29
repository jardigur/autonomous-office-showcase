'use client';

import React from 'react';
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath, type EdgeProps } from '@xyflow/react';

export function OrthogonalEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 0, // strict 90-degree orthogonal Manhattan lines
  });

  const protocol = (data as any)?.protocol || 'IPC_PIPE';

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke: '#3f3f46',
          strokeWidth: 1.5,
          ...style,
        }}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <span className="px-1.5 py-0.5 text-[8px] font-mono tracking-tighter uppercase bg-[#09090b] border border-zinc-800 text-zinc-400">
            {protocol}
          </span>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
