'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { ReactFlow, Background, Controls, NodeMouseHandler, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from '@/data/nodesData';
import { NodeDetailDrawer } from './NodeDetailDrawer';
import { IndustrialNode } from '@/components/canvas/IndustrialNode';
import { OrthogonalEdge } from '@/components/canvas/OrthogonalEdge';

export function ArchitectureCanvas() {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const nodeTypes = useMemo(() => ({
    industrial: IndustrialNode,
  }), []);

  const edgeTypes = useMemo(() => ({
    orthogonal: OrthogonalEdge,
  }), []);

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    setSelectedNode(node.data);
  }, []);

  return (
    <div id="architecture-canvas" className="relative w-full h-[650px] bg-[#050507] border-y border-zinc-800/80">
      <div className="absolute top-4 left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            SYSTEM_TOPOLOGY // MULTI-AGENT ORCHESTRATION CONSOLE
          </span>
        </div>
      </div>

      <ReactFlow
        nodes={initialNodes as Node[]}
        edges={initialEdges as Edge[]}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={onNodeClick}
        fitView
        panOnScroll={false}
        preventScrolling={!selectedNode}
        zoomOnScroll={false}
        className="touch-none"
      >
        <Background color="#18181b" gap={24} size={1} />
        <Controls className="!bg-[#09090b] !border-zinc-800 !fill-zinc-400 !rounded-none shadow-xl" />
      </ReactFlow>

      <NodeDetailDrawer 
        data={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />
    </div>
  );
}
