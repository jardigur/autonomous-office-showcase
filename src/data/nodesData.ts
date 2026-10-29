export interface NodeData {
  [key: string]: unknown;
  label: string;
  role: string;
  description: string;
  tags: string[];
  constraint: string;
  statusBadge?: string;
  domainColor?: string;
  isRoot?: boolean;
  isLeader?: boolean;
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
    type: 'industrial',
    position: { x: 375, y: 30 },
    data: {
      label: 'Business Principal & Owner',
      role: 'Strategic Origin & Final Gatekeeper',
      description: 'High-level business directives, turnkey approvals, and capital governance.',
      tags: ['Executive Core', 'Policy Origin', 'Strategic Gate'],
      constraint: 'Strict turnkey solutions / Final executive sign-off',
      statusBadge: 'SYS_AUTH',
      domainColor: '#94A3B8',
      isRoot: true,
    },
  },
  {
    id: 'leader-overseer',
    type: 'industrial',
    position: { x: 375, y: 170 },
    data: {
      label: 'Central Orchestration Core',
      role: 'Autonomous Execution & Routing Plane',
      description: 'Central task routing, policy enforcement, latency load-balancing, zero error tolerance.',
      tags: ['Control Plane', 'Multi-Agent Router', 'Task Dispatch'],
      constraint: 'Strict to the point / Real-time failover monitoring',
      statusBadge: 'ONLINE [LOW_LAT]',
      domainColor: '#06B6D4',
      isLeader: true,
    },
  },
  {
    id: 'agent-core-dev',
    type: 'industrial',
    position: { x: 30, y: 340 },
    data: {
      label: 'Hardware Bridge & POS Engine',
      role: 'Hardware Mutex & IPC Architecture',
      description: 'Hardware concurrency mutex, POS serial execution, and clean architectural schemas.',
      tags: ['Electron IPC', 'Mutex Serial', 'Zod Guard'],
      constraint: 'Deterministic execution / Verifiable artifacts only',
      statusBadge: 'MUTEX_SYNC',
      domainColor: '#F59E0B',
    },
  },
  {
    id: 'agent-integrity-qa',
    type: 'industrial',
    position: { x: 260, y: 340 },
    data: {
      label: 'Runtime Integrity & Sanitizer',
      role: 'Secret Sanitization & Boundary Testing',
      description: 'Automated fuzzing boundaries, race condition simulation, and strict PII linter rules.',
      tags: ['Entropy Test', 'PII Linter', 'Boundary QA'],
      constraint: 'Automated assertions / Zero credential bypass',
      statusBadge: 'ZERO_LEAK_PASS',
      domainColor: '#F43F5E',
    },
  },
  {
    id: 'agent-token-finance',
    type: 'industrial',
    position: { x: 490, y: 340 },
    data: {
      label: 'Token Ledger & OPEX Controller',
      role: 'Burn Rate Cap & Margin Protection',
      description: 'Real-time burn rate caps, LLM pool cost optimization, and unit economics validation.',
      tags: ['OPEX Audit', 'Hard Cap 40M', 'Margin Guard'],
      constraint: 'Hard cap 40M tokens/day / Zero margin leak',
      statusBadge: 'CAP_ACTIVE [40M]',
      domainColor: '#8B5CF6',
    },
  },
  {
    id: 'agent-crm-retention',
    type: 'industrial',
    position: { x: 720, y: 340 },
    data: {
      label: 'Customer Lifecycle & Retention',
      role: 'Automated Servicing Triggers & Funnel',
      description: 'Automated customer retention loops, service maintenance triggers, and frictionless UX.',
      tags: ['Lifecycle Engine', 'Automated Loop', 'Value Copy'],
      constraint: 'Zero spam blasting / High retention conversion',
      statusBadge: 'DISPATCH_READY',
      domainColor: '#10B981',
    },
  },
];

export const initialEdges = [
  {
    id: 'e-root-leader',
    source: 'root-authority',
    target: 'leader-overseer',
    type: 'orthogonal',
    data: { protocol: 'POLICY_DIRECTIVE' },
  },
  {
    id: 'e-leader-dev',
    source: 'leader-overseer',
    target: 'agent-core-dev',
    type: 'orthogonal',
    data: { protocol: 'MUTEX_IPC' },
  },
  {
    id: 'e-leader-qa',
    source: 'leader-overseer',
    target: 'agent-integrity-qa',
    type: 'orthogonal',
    data: { protocol: 'AUDIT_LINTER' },
  },
  {
    id: 'e-leader-finance',
    source: 'leader-overseer',
    target: 'agent-token-finance',
    type: 'orthogonal',
    data: { protocol: 'TOKEN_LEDGER' },
  },
  {
    id: 'e-leader-crm',
    source: 'leader-overseer',
    target: 'agent-crm-retention',
    type: 'orthogonal',
    data: { protocol: 'EVENT_STREAM' },
  },
];
