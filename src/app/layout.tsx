import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Autonomous Multi-Agent Virtual Office | Real-World Operational Architecture',
  description: 'Technical showcase and architecture topology of an autonomous multi-agent virtual office operating physical automotive workshop transactions, telemetry, and business workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
