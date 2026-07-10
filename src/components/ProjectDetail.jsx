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

// Plain section label for product-story pages — no icon, no per-section color.
// `accent` marks the two narrative landmarks (the journey and the payoff).
function StoryKicker({ children, accent = false }) {
  return (
    <p className={`mb-3 font-mono text-xs font-semibold uppercase tracking-widest ${accent ? 'text-teal' : 'text-muted-2'}`}>
      {children}
    </p>
  )
}

import ProjectGraphic from './ProjectGraphic'

function getMetricsGridClass(count) {
  if (count >= 3) return 'sm:grid-cols-3'
  if (count === 2) return 'sm:grid-cols-2'
  return ''
}

function getStackGroups(project) {
  if (project.stackGroups?.length) return project.stackGroups
  return [{ label: 'Stack', items: project.stack ?? [] }]
}

function getMeta(project) {
  return [
    ['Role', project.role],
    ['Status', project.maturity],
    ['Focus', project.focus],
  ].filter(([, value]) => Boolean(value))
}

// Compact "reference info" rendering of the Role/Status/Focus + Stack block,
// used for the Project Snapshot placement on product-story pages.
function ProjectSnapshot({ meta, stackGroups }) {
  return (
    <div>
      <StoryKicker>Project Snapshot</StoryKicker>
      <div className="grid gap-4 sm:grid-cols-2">
        {meta.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {meta.map(([label, value]) => (
              <p key={label} className="text-sm text-muted-2">
                <span className="font-medium text-muted">{label}:</span> {value}
              </p>
            ))}
          </div>
        )}
        {stackGroups.length > 0 && (
          <div className="grid gap-1">
            {stackGroups.map(group => (
              <p key={group.label} className="text-sm text-muted-2">
                <span className="font-medium text-muted">{group.label}:</span>{' '}
                <span className="font-mono">{group.items.join(', ')}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectDetail({ project, onBack }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const stackGroups = getStackGroups(project)
  const meta = getMeta(project)
  const isProductStory = Boolean(project.productPillars?.length)

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="container-content py-12">

        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
        >
          ← Back to Projects
        </button>

        <div className="w-full rounded-lg overflow-hidden mb-8 border border-border shadow-sm">
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="w-full h-64 md:h-80"
            variant="detail"
          />
        </div>

        <div className="flex flex-wrap items-start gap-3 mb-3">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h1>
        </div>

        {isProductStory && (
          <p className="text-xl md:text-2xl font-semibold text-accent leading-snug mb-3">
            {project.oneliner}
          </p>
        )}

        <p className="text-lg text-muted leading-relaxed mb-6">{project.summary ?? project.oneliner}</p>

        {isProductStory && (hasDemo || hasGithub) && (
          <div className="flex flex-wrap items-center gap-5 mb-10">
            {hasDemo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try Demo →
              </a>
            )}
            {hasGithub && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={hasDemo ? 'text-sm font-semibold text-muted hover:text-text transition-colors duration-200' : 'btn-primary'}
              >
                View on GitHub →
              </a>
            )}
          </div>
        )}

        {!isProductStory && (
          <div className="grid gap-4 mb-10 lg:grid-cols-[0.85fr_1.15fr]">
            {meta.length > 0 && (
              <div className="grid gap-3 rounded-lg border border-border bg-surface p-4 sm:grid-cols-3 lg:grid-cols-1">
                {meta.map(([label, value]) => (
                  <p key={label}>
                    <span className="block font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-2">
                      {label}
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-text">{value}</span>
                  </p>
                ))}
              </div>
            )}

            {stackGroups.length > 0 && (
              <div className="grid gap-2 rounded-lg border border-accent/15 bg-accent/[0.04] p-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
                  Stack
                </p>
                {stackGroups.map(group => (
                  <p key={group.label} className="text-sm leading-relaxed">
                    <span className="font-semibold text-text">{group.label}: </span>
                    <span className="font-mono text-muted">{group.items.join(', ')}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        {isProductStory ? (
          <div className="space-y-12">

            {/* PROBLEM */}
            <div>
              <StoryKicker>The Problem</StoryKicker>
              <p className="text-lg text-muted leading-relaxed max-w-2xl">{project.problem}</p>
            </div>

            {/* EDITORIAL CALLOUT */}
            {project.editorialCallout && (
              <div className="px-6 sm:px-10">
                <p className="text-2xl md:text-3xl font-semibold text-teal leading-snug mb-2">
                  {project.editorialCallout.lead}
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                  {project.editorialCallout.body}
                </p>
              </div>
            )}

            {/* WHAT I BUILT */}
            <div>
              <StoryKicker>What I Built</StoryKicker>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
                {project.technicalContribution ?? project.solution}
              </p>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                {project.productPillars.map((pillar, i) => (
                  <div key={pillar.title}>
                    <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 font-mono text-xs font-bold text-teal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mb-1.5 text-base font-bold text-text leading-snug">{pillar.title}</p>
                    <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
              {/* In-context product visual — a smaller inline figure, not a second hero */}
              <div className="max-w-2xl overflow-hidden rounded-lg border border-teal/20 shadow-sm">
                <ProjectGraphic
                  id={project.id}
                  gradient={project.gradient}
                  title={project.title}
                  className="w-full h-48 md:h-56 [&_img]:object-[80%_20%]"
                  variant="detail"
                />
              </div>
            </div>

            {/* HOW IT WORKS — the journey, marked as a narrative landmark */}
            <div>
              <StoryKicker accent>How It Works</StoryKicker>
              <ol className="relative space-y-6 pl-9 sm:pl-11">
                <div
                  aria-hidden="true"
                  className="absolute bottom-2 left-[13px] top-2 w-0.5 rounded-full bg-border sm:left-[15px]"
                />
                {project.howItWorks.map((step, i) => (
                  <li key={step} className="relative">
                    <span className="absolute -left-9 top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-bg bg-teal/10 font-mono text-xs font-bold text-teal ring-4 ring-bg sm:-left-11 sm:h-8 sm:w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="pt-0.5 text-base font-medium leading-relaxed text-text">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* PROJECT SNAPSHOT */}
            <ProjectSnapshot meta={meta} stackGroups={stackGroups} />

            {/* KEY DECISIONS */}
            <div>
              <StoryKicker>Key Decisions</StoryKicker>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.decisions.map((d, i) => (
                  <div key={i} className="rounded-lg bg-surface/60 p-4">
                    <p className="text-base text-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULTS — the payoff, marked as a narrative landmark, leads into the close */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <StoryKicker accent>Results</StoryKicker>
                {project.reliabilityNote && (
                  <p className="mb-4 text-sm text-muted-2 leading-relaxed">{project.reliabilityNote}</p>
                )}
                <div className={`grid grid-cols-1 ${getMetricsGridClass(project.metrics.length)} gap-4`}>
                  {project.metrics.map(m => (
                    <div key={m} className="rounded-lg bg-teal/[0.06] px-5 py-4 text-center">
                      <p className="font-mono text-teal font-bold text-lg leading-snug">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEXT IMPROVEMENTS — compressed to a single closing line, exact original wording */}
            {project.nextImprovements && project.nextImprovements.length > 0 && (
              <p className="text-sm text-muted-2 leading-relaxed">
                <span className="font-medium text-muted">Still ahead: </span>
                {project.nextImprovements.join(' · ')}
              </p>
            )}

          </div>
        ) : (
          <div className="space-y-6">

            {/* PROBLEM */}
            <div className="rounded-lg border border-warning/25 bg-warning/[0.05] p-6 shadow-sm">
              <SectionHeader icon={<ProblemIcon />} label="The Problem" color="orange" />
              <p className="text-base text-muted leading-relaxed">{project.problem}</p>
            </div>

            {/* WHAT I BUILT */}
            <div className="rounded-lg border border-accent/25 bg-accent/[0.04] p-6 shadow-sm">
              <SectionHeader icon={<SolutionIcon />} label="What I Built" color="violet" />
              <div className="space-y-4">
                <p className="text-base text-muted leading-relaxed">
                  {project.technicalContribution ?? project.solution}
                </p>
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="grid gap-3 md:grid-cols-2">
                    {project.highlights.map(item => (
                      <li key={item} className="flex gap-3 rounded-md bg-bg/70 p-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* ARCHITECTURE / HOW IT WORKS */}
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <SectionHeader icon={<ArchIcon />} label="How It Works" color="code" />
              <pre className="font-mono text-sm text-muted bg-bg-alt rounded-lg p-5 overflow-x-auto leading-relaxed border border-border">
                {project.pipeline}
              </pre>
            </div>

            {/* KEY DECISIONS */}
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
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
              <div className="rounded-lg border border-success/25 bg-success/[0.04] p-6 shadow-sm">
                <SectionHeader icon={<ResultsIcon />} label="Results" color="green" />
                {project.reliabilityNote && (
                  <p className="mb-4 text-sm text-muted-2 leading-relaxed">{project.reliabilityNote}</p>
                )}
                <div className={`grid grid-cols-1 ${getMetricsGridClass(project.metrics.length)} gap-4`}>
                  {project.metrics.map(m => (
                    <div key={m} className="bg-success/[0.06] border border-success/15 rounded-lg px-5 py-4 text-center">
                      <p className="font-mono text-success font-bold text-lg leading-snug">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEXT IMPROVEMENTS */}
            {project.nextImprovements && project.nextImprovements.length > 0 && (
              <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
                <SectionHeader icon={<DecisionIcon />} label="Next Improvements" color="blue" />
                <ul className="grid gap-3">
                  {project.nextImprovements.map(item => (
                    <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

        <div className={`flex items-center gap-5 pt-8 border-t ${isProductStory ? 'mt-6 border-teal/20' : 'mt-10 border-border'}`}>
          {hasDemo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try Demo →
            </a>
          )}
          {hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={hasDemo ? 'text-sm font-semibold text-muted hover:text-text transition-colors duration-200' : 'btn-primary'}
            >
              View on GitHub →
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
