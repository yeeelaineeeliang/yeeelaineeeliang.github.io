const ProblemIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const SolutionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const ArchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const DecisionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)

const ResultsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

function SectionHeader({ icon, label, color }) {
  const colorMap = {
    orange: 'text-warning',
    violet: 'text-accent',
    code: 'text-teal',
    blue: 'text-accent',
    green: 'text-success',
  }
  return (
    <div className={`flex items-center gap-2.5 mb-5 ${colorMap[color]}`}>
      <span className="shrink-0">{icon}</span>
      <span className="font-mono text-sm font-bold uppercase tracking-widest">{label}</span>
    </div>
  )
}

import ProjectGraphic from './ProjectGraphic'

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="container-content py-12">

        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
        >
          ← Back to Projects
        </button>

        <div className="w-full rounded-2xl overflow-hidden mb-8 border border-border shadow-sm">
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="w-full h-64 md:h-80"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{project.title}</h1>

        <p className="text-lg text-muted leading-relaxed mb-6">{project.oneliner}</p>

        <div className="flex flex-wrap gap-2 items-center mb-10">
          <span className="text-xs font-mono font-semibold text-muted-2 uppercase tracking-widest mr-1">Stack</span>
          {project.stack.map(s => (
            <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/8 text-accent border border-accent/15">
              {s}
            </span>
          ))}
        </div>

        <div className="space-y-6">

          {/* PROBLEM */}
          <div className="rounded-2xl border border-warning/25 bg-warning/[0.05] p-6 shadow-sm">
            <SectionHeader icon={<ProblemIcon />} label="The Problem" color="orange" />
            <p className="text-base text-muted leading-relaxed">{project.problem}</p>
          </div>

          {/* SOLUTION */}
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6 shadow-sm">
            <SectionHeader icon={<SolutionIcon />} label="The Solution" color="violet" />
            <p className="text-base text-muted leading-relaxed">{project.solution}</p>
          </div>

          {/* ARCHITECTURE */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <SectionHeader icon={<ArchIcon />} label="How It Works" color="code" />
            <pre className="font-mono text-sm text-muted bg-bg-alt rounded-xl p-5 overflow-x-auto leading-relaxed border border-border">
              {project.pipeline}
            </pre>
          </div>

          {/* KEY DECISIONS */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <SectionHeader icon={<DecisionIcon />} label="Key Decisions" color="blue" />
            <ol className="space-y-4">
              {project.decisions.map((d, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold font-mono flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-base text-muted leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* RESULTS */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="rounded-2xl border border-success/25 bg-success/[0.04] p-6 shadow-sm">
              <SectionHeader icon={<ResultsIcon />} label="Results" color="green" />
              <div className={`grid grid-cols-1 ${project.metrics.length > 1 ? 'sm:grid-cols-' + Math.min(project.metrics.length, 3) : ''} gap-4`}>
                {project.metrics.map(m => (
                  <div key={m} className="bg-success/[0.06] border border-success/15 rounded-xl px-5 py-4 text-center">
                    <p className="font-mono text-success font-bold text-lg leading-snug">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        <div className="flex items-center gap-5 mt-10 pt-8 border-t border-border">
          {project.links && project.links.github && project.links.github !== '#' && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View on GitHub →
            </a>
          )}
          {project.links && project.links.demo && project.links.demo !== '#' && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200">
              Live Demo →
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
