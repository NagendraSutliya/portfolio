import React from 'react';
import { FiArrowLeft, FiCode, FiTrendingUp, FiDatabase } from 'react-icons/fi';
import type { V2View } from '../types';

interface V2CaseStudyViewProps {
  setView: (view: V2View) => void;
  onNavigateSection: (sectionId: string) => void;
}

const V2CaseStudyView: React.FC<V2CaseStudyViewProps> = ({ setView, onNavigateSection }) => {
  return (
    <div>
      
      {/* Hero & Intro */}
      <section className="py-14 md:py-16">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 flex flex-col gap-6">
          
          <button
            type="button"
            onClick={() => {
              setView('overview');
              setTimeout(() => onNavigateSection('projects'), 50);
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-v2-border bg-v2-card hover:border-v2-accent text-v2-text-main hover:text-v2-accent text-sm font-semibold transition-all cursor-pointer self-start"
          >
            <FiArrowLeft className="mr-2" />
            Back to all projects
          </button>

          <h1 className="font-head font-extrabold text-[36px] sm:text-[48px] lg:text-[70px] leading-[1.02] tracking-[-0.035em] text-v2-text-main m-0">
            datacube.ai
          </h1>

          <p className="m-0 text-lg md:text-xl leading-relaxed text-v2-text-body max-w-[34em]">
            The SQL engine behind a business-intelligence platform — where every KPI a client sees has to be fast, consistent and reconcilable.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="pb-14">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-v2-border border border-v2-border rounded-2xl overflow-hidden">
            <div className="bg-v2-bg p-5 md:p-6 flex flex-col gap-1.5">
              <span className="text-xs text-v2-text-muted font-mono uppercase tracking-wider">Company</span>
              <p className="m-0 font-semibold text-base text-v2-text-main">Sunfocus Solutions</p>
            </div>
            <div className="bg-v2-bg p-5 md:p-6 flex flex-col gap-1.5">
              <span className="text-xs text-v2-text-muted font-mono uppercase tracking-wider">Role</span>
              <p className="m-0 font-semibold text-base text-v2-text-main">Software Engineer</p>
            </div>
            <div className="bg-v2-bg p-5 md:p-6 flex flex-col gap-1.5">
              <span className="text-xs text-v2-text-muted font-mono uppercase tracking-wider">Timeline</span>
              <p className="m-0 font-semibold text-base text-v2-text-main">Feb 2026 – present</p>
            </div>
            <div className="bg-v2-bg p-5 md:p-6 flex flex-col gap-1.5">
              <span className="text-xs text-v2-text-muted font-mono uppercase tracking-wider">Tools</span>
              <p className="m-0 font-semibold text-base text-v2-text-main">MySQL, Workbench, SQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mock Dashboard */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          <div className="rounded-3xl border border-v2-border bg-v2-dark p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-2xl">
            
            <div className="col-span-full flex flex-wrap gap-3 justify-between items-center border-b border-v2-border-light pb-4">
              <div className="flex items-center gap-2">
                <FiDatabase size={16} className="text-v2-accent" />
                <span className="font-mono text-xs md:text-sm text-v2-text-main font-semibold">
                  datacube.ai / KPI Production Cluster
                </span>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-v2-card text-[#6EE7B7] border border-v2-border">
                ● Live Data Stream
              </span>
            </div>

            {/* 3 Metric Cards */}
            <div className="p-5 rounded-2xl bg-v2-panel border border-v2-border-light flex flex-col gap-2">
              <span className="text-xs text-v2-text-muted font-mono">Daily Active Ingestion</span>
              <span className="font-head text-2xl md:text-3xl font-semibold text-white">4.8M rows</span>
            </div>

            <div className="p-5 rounded-2xl bg-v2-panel border border-v2-border-light flex flex-col gap-2">
              <span className="text-xs text-v2-text-muted font-mono">Query Latency (P99)</span>
              <span className="font-head text-2xl md:text-3xl font-semibold text-v2-blue-1">18.2 ms</span>
            </div>

            <div className="p-5 rounded-2xl bg-v2-panel border border-v2-border-light flex flex-col gap-2">
              <span className="text-xs text-v2-text-muted font-mono">Audit Reconciliation</span>
              <span className="font-head text-2xl md:text-3xl font-semibold text-v2-accent">100% Match</span>
            </div>

            {/* Chart Area */}
            <div className="col-span-full rounded-2xl bg-v2-panel border border-v2-border-light flex items-end gap-3 p-6 pb-4 min-h-[200px]" aria-hidden="true">
              <span className="flex-1 bg-[#2A3678] rounded-md" style={{ height: '32%' }}></span>
              <span className="flex-1 bg-[#3B4AA6] rounded-md" style={{ height: '46%' }}></span>
              <span className="flex-1 bg-[#5262CC] rounded-md" style={{ height: '40%' }}></span>
              <span className="flex-1 bg-[#6F7FE8] rounded-md" style={{ height: '62%' }}></span>
              <span className="flex-1 bg-[#8B9CFF] rounded-md" style={{ height: '58%' }}></span>
              <span className="flex-1 bg-[#A9B6FF] rounded-md" style={{ height: '80%' }}></span>
              <span className="flex-1 bg-v2-accent rounded-md shadow-[0_0_16px_rgba(255,184,107,0.4)]" style={{ height: '94%' }}></span>
            </div>

            <p className="col-span-full m-0 text-xs text-v2-text-muted font-mono">
              Production metrics: Aggregated data pipeline performance with partitioned indexes and composite key optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge and My Part */}
      <section className="pb-20">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-3.5">
            <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
              The challenge
            </h2>
            <p className="m-0 text-v2-text-body leading-relaxed text-base">
              Organisations bring their multi-source transactional data into datacube to track KPIs in real time. New KPIs keep arriving, datasets keep growing exponentially, and a single wrong calculation or lagging stored procedure erodes trust in the whole dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
              My part
            </h2>
            <p className="m-0 text-v2-text-body leading-relaxed text-base">
              I own the database layer that produces those numbers: the KPI queries, the stored procedures, triggers and functions that compute them, and the automated reconciliation checks that prove every figure is accurate.
            </p>
          </div>
        </div>
      </section>

      {/* Data Flow Pipeline */}
      <section className="pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col gap-7">
          <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
            How data becomes a KPI
          </h2>

          <div className="overflow-x-auto pb-3">
            <div className="grid grid-cols-[1fr_32px_1fr_32px_1fr_32px_1fr] items-stretch min-w-[760px]">
              
              {/* Stage 1 */}
              <div className="p-6 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-xs text-v2-blue-1">01. source</span>
                <strong className="text-lg text-v2-text-main">Client data</strong>
                <span className="text-v2-text-muted text-sm leading-normal">Operational tables loaded into the platform</span>
              </div>

              <span className="self-center h-0.5 bg-v2-border" aria-hidden="true"></span>

              {/* Stage 2 */}
              <div className="p-6 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-xs text-v2-blue-1">02. validate</span>
                <strong className="text-lg text-v2-text-main">Reconciliation</strong>
                <span className="text-v2-text-muted text-sm leading-normal">Checks that catch discrepancies early</span>
              </div>

              <span className="self-center h-0.5 bg-v2-accent" aria-hidden="true"></span>

              {/* Stage 3 (Highlighted) */}
              <div className="p-6 rounded-2xl bg-v2-card border-2 border-v2-accent shadow-[0_0_20px_rgba(255,184,107,0.2)] flex flex-col gap-2 hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-xs text-v2-accent font-semibold">03. compute</span>
                <strong className="text-lg text-white">KPI procedures</strong>
                <span className="text-v2-text-muted text-sm leading-normal">Tuned procedures, triggers and functions</span>
              </div>

              <span className="self-center h-0.5 bg-v2-accent" aria-hidden="true"></span>

              {/* Stage 4 */}
              <div className="p-6 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 hover:-translate-y-0.5 transition-transform">
                <span className="font-mono text-xs text-v2-blue-1">04. serve</span>
                <strong className="text-lg text-v2-text-main">Dashboards</strong>
                <span className="text-v2-text-muted text-sm leading-normal">Real-time insight for decision-makers</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What I did (4 Cards) */}
      <section className="pb-24">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 flex flex-col gap-8">
          <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
            What I did
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-3 shadow-lg hover:border-v2-accent transition-colors">
              <h3 className="m-0 text-lg font-semibold text-v2-text-main">New KPIs, on demand</h3>
              <p className="m-0 text-v2-text-body leading-relaxed text-sm">Wrote and maintained SQL for custom and newly defined KPIs as business reporting needs changed.</p>
            </div>

            <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-3 shadow-lg hover:border-v2-accent transition-colors">
              <h3 className="m-0 text-lg font-semibold text-v2-text-main">Speed on large data</h3>
              <p className="m-0 text-v2-text-body leading-relaxed text-sm">Optimised complex queries and procedures, and applied composite indexing strategies to remove reporting bottlenecks.</p>
            </div>

            <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-3 shadow-lg hover:border-v2-accent transition-colors">
              <h3 className="m-0 text-lg font-semibold text-v2-text-main">Numbers you can trust</h3>
              <p className="m-0 text-v2-text-body leading-relaxed text-sm">Built validation and reconciliation routines so KPI metrics stay accurate, and traced discrepancies to their source.</p>
            </div>

            <div className="p-7 rounded-2xl border border-v2-border bg-v2-card flex flex-col gap-3 shadow-lg hover:border-v2-accent transition-colors">
              <h3 className="m-0 text-lg font-semibold text-v2-text-main">Safe releases</h3>
              <p className="m-0 text-v2-text-body leading-relaxed text-sm">Worked closely with development and QA teams on schema changes so deployments shipped with zero unplanned downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="pb-24">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <FiCode size={20} className="text-v2-accent" />
            <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
              A look at the SQL architecture
            </h2>
          </div>

          <pre className="m-0 p-7 rounded-2xl bg-v2-dark border border-v2-border font-mono text-xs md:text-sm leading-relaxed text-v2-text-body overflow-x-auto shadow-2xl">
{`-- Example: Production KPI Aggregation Procedure with Partition Pruning
DELIMITER $$

CREATE PROCEDURE sp_aggregate_platform_kpis(
  IN p_tenant_id INT,
  IN p_start_date DATE,
  IN p_end_date DATE
)
BEGIN
  -- 1. Index-accelerated cohort grouping
  SELECT 
    DATE(t.event_timestamp) AS metric_date,
    COUNT(DISTINCT t.user_id) AS active_users,
    ROUND(SUM(t.revenue_usd), 2) AS gross_revenue,
    ROUND(AVG(t.session_duration_sec), 1) AS avg_engagement_sec
  FROM tenant_telemetry_events t FORCE INDEX (idx_tenant_timestamp)
  WHERE t.tenant_id = p_tenant_id
    AND t.event_timestamp >= p_start_date
    AND t.event_timestamp < DATE_ADD(p_end_date, INTERVAL 1 DAY)
  GROUP BY DATE(t.event_timestamp)
  ORDER BY metric_date ASC;

  -- 2. Log reconciliation checksum to audit registry
  INSERT INTO kpi_audit_log (tenant_id, run_at, row_count_verified)
  VALUES (p_tenant_id, NOW(), ROW_COUNT());
END $$

DELIMITER ;`}
          </pre>
        </div>
      </section>

      {/* Results Stats */}
      <section className="pb-24">
        <div className="max-w-[1040px] mx-auto px-6 md:px-8 flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <FiTrendingUp size={20} className="text-v2-accent" />
            <h2 className="font-head font-semibold text-xl sm:text-2xl text-v2-text-main m-0">
              Results
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-7 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 shadow-lg">
              <span className="font-head text-4xl lg:text-5xl font-extrabold text-v2-accent">74%</span>
              <span className="text-v2-text-body text-sm md:text-base">faster KPI queries via indexing &amp; tuning</span>
            </div>

            <div className="p-7 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 shadow-lg">
              <span className="font-head text-4xl lg:text-5xl font-extrabold text-v2-accent">50+</span>
              <span className="text-v2-text-body text-sm md:text-base">KPI metrics built or tuned into production</span>
            </div>

            <div className="p-7 rounded-2xl bg-v2-card border border-v2-border flex flex-col gap-2 shadow-lg">
              <span className="font-head text-4xl lg:text-5xl font-extrabold text-v2-accent">100%</span>
              <span className="text-v2-text-body text-sm md:text-base">discrepancies caught via reconciliation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <section className="border-t border-v2-border py-14">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-wrap gap-5 justify-between items-center">
          <button
            type="button"
            onClick={() => {
              setView('overview');
              setTimeout(() => onNavigateSection('projects'), 50);
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-v2-border bg-v2-card hover:border-v2-accent text-v2-text-main hover:text-v2-accent text-sm font-semibold transition-all cursor-pointer"
          >
            &larr; All projects
          </button>

          <button
            type="button"
            onClick={() => {
              setView('overview');
              setTimeout(() => onNavigateSection('projects'), 50);
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-v2-accent hover:bg-v2-accent-hover text-v2-bg text-sm font-semibold transition-all cursor-pointer shadow-md"
          >
            Next: Ad Leverage &rarr;
          </button>
        </div>
      </section>

    </div>
  );
};

export default V2CaseStudyView;
