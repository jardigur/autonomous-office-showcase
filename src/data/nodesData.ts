export interface NodeData {
  [key: string]: unknown;
  label: string;
  role: string;
  description: string;
  tags: string[];
  constraint: string;
}

export interface NodeItem {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: NodeData;
}

export const initialNodes: NodeItem[] = [
  {
    id: 'root-authority',
    type: 'root',
    position: { x: 380, y: 30 },
    data: {
      label: 'Lead Architect / Human Commander',
      role: 'System Authority & Strategic Origin',
      description: 'Governance, resource allocation, and core policy decisions.',
      tags: ['Authority', 'Decision Core', 'Governance'],
      constraint: 'Strict turnkey solutions / Absolute final gatekeeper',
    },
  },
  {
    id: 'leader-overseer',
    type: 'leader',
    position: { x: 380, y: 160 },
    data: {
      label: 'System Overseer & Orchestrator',
      role: 'Execution Policy & Agent Router',
      description: 'Central task routing, policy enforcement, latency balancing, zero error tolerance.',
      tags: ['Overseer', 'Dynamic Router', 'Zero Tolerance'],
      constraint: 'Strict to the point / Strict failover supervision',
    },
  },
  {
    id: 'agent-core-dev',
    type: 'agent',
    position: { x: 80, y: 320 },
    data: {
      label: 'Core Systems & Hardware Bridge',
      role: 'Software Architecture & POS Queue Guard',
      description: 'Hardware concurrency mutex, POS serial execution, and clean architectural schemas.',
      tags: ['Electron IPC', 'Mutex Serial', 'Zod Guard'],
      constraint: 'Pure Blueprint Planner / Verifiable artifacts only',
    },
  },
  {
    id: 'agent-integrity-qa',
    type: 'agent',
    position: { x: 280, y: 320 },
    data: {
      label: 'Integrity & Resilience Guard',
      role: 'Boundary Testing & Secret Sanitization',
      description: 'Automated fuzzing boundaries, race condition simulation, and strict PII linter rules.',
      tags: ['Entropy Test', 'PII Linter', 'Boundary QA'],
      constraint: 'Automated assertions / Zero credential bypass',
    },
  },
  {
    id: 'agent-token-finance',
    type: 'agent',
    position: { x: 480, y: 320 },
    data: {
      label: 'Token Economy & OPEX Controller',
      role: 'Resource Accounting & Margin Protection',
      description: 'Real-time burn rate caps, LLM pool cost optimization, and unit economics validation.',
      tags: ['OPEX Audit', 'Hard Cap 40M', 'Margin Guard'],
      constraint: 'Hard cap 40M tokens/day / Zero margin leak',
    },
  },
  {
    id: 'agent-crm-retention',
    type: 'agent',
    position: { x: 680, y: 320 },
    data: {
      label: 'Retention Engine & Lifecycle Funnel',
      role: 'Maintenance Automation & User Experience',
      description: 'Automated customer retention loops, service maintenance triggers, and frictionless UX.',
      tags: ['Lifecycle Engine', 'Automated Loop', 'Value Copy'],
      constraint: 'Zero spam blasting / High retention conversion',
    },
  },
];

export const initialEdges = [
  { id: 'e-root-leader', source: 'root-authority', target: 'leader-overseer', type: 'pulse' },
  { id: 'e-leader-dev', source: 'leader-overseer', target: 'agent-core-dev', type: 'pulse' },
  { id: 'e-leader-qa', source: 'leader-overseer', target: 'agent-integrity-qa', type: 'pulse' },
  { id: 'e-leader-finance', source: 'leader-overseer', target: 'agent-token-finance', type: 'pulse' },
  { id: 'e-leader-crm', source: 'leader-overseer', target: 'agent-crm-retention', type: 'pulse' },
];
