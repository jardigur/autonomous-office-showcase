'use client';

import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, NodeMouseHandler } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges } from '@/data/nodesData';
import { NodeDetailDrawer } from './NodeDetailDrawer';

export function ArchitectureCanvas() {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    setSelectedNode(node.data);
  }, []);

  return (
    <div id="architecture-canvas" className="relative w-full h-[650px] bg-zinc-950/90 border-y border-zinc-800">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeClick={onNodeClick}
        fitView
        panOnScroll={false}
        preventScrolling={!selectedNode}
        zoomOnScroll={false}
        className="touch-none"
      >
        <Background color="#27272a" gap={20} size={1} />
        <Controls className="!bg-zinc-900 !border-zinc-800 !fill-zinc-400" />
      </ReactFlow>

      <NodeDetailDrawer 
        data={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />
    </div>
  );
}
