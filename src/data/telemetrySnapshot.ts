export interface TelemetryMetrics {
  totalTokensProcessed: string;
  totalRequests: number;
  cacheHitRatio: string;
  dailyBurnCap: string;
  uptimeRate: string;
  hardwareLatencyAvg: string;
  accountsPool: {
    id: string;
    label: string;
    remainingQuota: string;
    resetCycle: string;
    tier: string;
  }[];
  opexComparison: {
    conventionalMonthlyIdr: string;
    orchestrationMonthlyIdr: string;
    efficiencyGain: string;
  };
}

export const telemetrySnapshot: TelemetryMetrics = {
  totalTokensProcessed: '335.9M',
  totalRequests: 7891,
  cacheHitRatio: '67.1%',
  dailyBurnCap: '40.0M / day',
  uptimeRate: '99.98%',
  hardwareLatencyAvg: '142ms',
  accountsPool: [
    { id: 'node-burst-01', label: 'Primary Shield Node', remainingQuota: '69.5%', resetCycle: '24h', tier: 'High-Throughput' },
    { id: 'node-cluster-02', label: 'Compute Node Alpha', remainingQuota: '57.0%', resetCycle: '5d', tier: 'Standard Pool' },
    { id: 'node-cluster-03', label: 'Compute Node Beta', remainingQuota: '57.0%', resetCycle: '5d', tier: 'Standard Pool' },
    { id: 'node-cluster-04', label: 'Compute Node Gamma', remainingQuota: '57.0%', resetCycle: '5d', tier: 'Standard Pool' },
    { id: 'node-cluster-05', label: 'Compute Node Delta', remainingQuota: '57.0%', resetCycle: '5d', tier: 'Standard Pool' },
  ],
  opexComparison: {
    conventionalMonthlyIdr: 'Rp 28.500.000',
    orchestrationMonthlyIdr: 'Rp 1.450.000',
    efficiencyGain: '94.9%',
  },
};
