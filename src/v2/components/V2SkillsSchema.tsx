import React from 'react';
import { FiTable } from 'react-icons/fi';

interface SchemaTable {
  tableName: string;
  headerBgClass: string;
  headerTextClass: string;
  columns: string[];
}

const tables: SchemaTable[] = [
  {
    tableName: 'databases',
    headerBgClass: 'bg-v2-accent',
    headerTextClass: 'text-v2-bg',
    columns: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Query tuning, indexing',
      'Replication & Clustering'
    ]
  },
  {
    tableName: 'data_analysis',
    headerBgClass: 'bg-v2-blue-1',
    headerTextClass: 'text-v2-bg',
    columns: [
      'Python, PySpark',
      'Pandas, NumPy',
      'Apache Superset',
      'Excel (Advanced Models)',
      'Telemetry Funnels'
    ]
  },
  {
    tableName: 'web',
    headerBgClass: 'bg-v2-blue-1',
    headerTextClass: 'text-v2-bg',
    columns: [
      'React.js, JavaScript',
      'Tailwind CSS, Bootstrap',
      'Node.js, Express',
      'GraphQL, REST APIs',
      'HTML5, CSS3, TypeScript'
    ]
  },
  {
    tableName: 'tools_and_env',
    headerBgClass: 'bg-v2-blue-1',
    headerTextClass: 'text-v2-bg',
    columns: [
      'MySQL Workbench',
      'dbForge, Redgate Compare',
      'Git, GitHub, GitLab',
      'Linux, Shell Scripting',
      'Postman, PyCharm'
    ]
  }
];

const V2SkillsSchema: React.FC = () => {
  return (
    <section id="v2-skills" className="py-20 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 flex flex-col gap-4">
        <h2 className="font-head font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-v2-text-main m-0">
          My stack, as a schema
        </h2>
        <p className="m-0 mb-6 text-v2-text-muted text-base md:text-lg">
          Each table is a part of the job. The rows are what I use for it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-mono text-sm">
          {tables.map((table, i) => (
            <div
              key={i}
              className="border border-v2-border rounded-xl overflow-hidden bg-v2-schema shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-v2-accent"
            >
              <div className={`m-0 px-4 py-3 font-semibold flex items-center gap-2 text-xs md:text-sm tracking-wide ${table.headerBgClass} ${table.headerTextClass}`}>
                <FiTable size={14} />
                <span>{table.tableName}</span>
              </div>

              {table.columns.map((col, cIdx) => (
                <div
                  key={cIdx}
                  className="m-0 px-4 py-2.5 border-t border-v2-border-light text-v2-text-main flex items-center gap-2.5 text-xs md:text-[13px] hover:bg-v2-blue-1/5 transition-colors"
                >
                  <span className="text-v2-text-muted text-xs">&bull;</span>
                  <span>{col}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2SkillsSchema;
