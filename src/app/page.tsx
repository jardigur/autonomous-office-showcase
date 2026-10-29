'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/showcase/HeroSection';
import { ProofOfWork } from '@/components/showcase/ProofOfWork';
import { TelemetrySection } from '@/components/showcase/TelemetrySection';

const ArchitectureCanvas = dynamic(
  () => import('@/components/showcase/ArchitectureCanvas').then((mod) => mod.ArchitectureCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[650px] bg-zinc-950 flex items-center justify-center border-y border-zinc-800">
        <span className="text-xs font-mono text-zinc-500 animate-pulse">Initializing Virtual Office Topology...</span>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <HeroSection />
      <ArchitectureCanvas />
      <ProofOfWork />
      <TelemetrySection />

      <footer className="py-8 px-6 border-t border-zinc-900 text-center">
        <p className="text-xs font-mono text-zinc-600">
          Autonomous Agentic Orchestration System • Sanitized Telemetry Snapshot • No Sensitive PII Disclosed
        </p>
      </footer>
    </main>
  );
}
