import ProjectGraphic from './ProjectGraphic'
import ProjectVideo from './ProjectVideo'

const ProblemIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const SolutionIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const ResultsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

// Small mono kicker used above every section — carries an optional inline icon
// and a color tone instead of the old per-section bordered-card treatment, so
// sections can vary in weight without every one of them being its own box.
function SectionKicker({ icon, children, tone = 'muted' }) {
  const toneMap = {
    muted: 'text-muted-2',
    accent: 'text-accent',
    teal: 'text-teal',
    warning: 'text-warning',
    success: 'text-success',
  }
  return (
    <p className={`mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest ${toneMap[tone]}`}>
      {icon}
      {children}
    </p>
  )
}

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

// The single most compelling quantitative fact, used as the hero hook.
// `heroMetric` is an optional data override for projects whose strongest
// proof point is really two adjacent metrics read together (see Fraud
// Copilot's "90% recall at 0.6% false-positive rate" in projects.js).
function getHeroMetric(project) {
  return project.heroMetric ?? project.metrics?.[0] ?? null
}

// Fallback hook for projects with no numeric metrics field (e.g. Temi, still
// an in-progress research project) — reuses existing copy verbatim rather
// than fabricating a stat.
function getHeroLine(project) {
  if (project.metrics?.length) return null
  return project.highlights?.[0] ?? project.reliabilityNote ?? null
}

// Highlights to render in "What I Built" — excludes whichever highlight was
// already spent as the hero line above, so a reader never sees the same
// sentence twice within a few inches of scroll (same dedupe principle as
// getRemainingMetrics below).
function getDisplayHighlights(project, heroLine) {
  const highlights = project.highlights ?? []
  if (!heroLine) return highlights
  return highlights.filter(item => item !== heroLine)
}

// Whatever metrics aren't already spent on the hero hook, shown later in
// "By The Numbers" so the same fact isn't repeated twice.
function getRemainingMetrics(project) {
  if (!project.metrics?.length) return []
  if (!project.heroMetric) return project.metrics.slice(1)
  // heroMetric may fold two+ individual metrics into one combined stat
  // (e.g. Fraud Copilot's "90% recall at 0.6% false-positive rate") — drop
  // any metric already fully represented in that combined string so it
  // isn't repeated verbatim below.
  return project.metrics.filter(m => !project.heroMetric.includes(m))
}

// The large, unmissable hook directly under the title/oneliner. Metric-driven
// projects get a big standalone number; the one project without metrics
// (Temi, in-progress research) gets a short pull-quote instead.
function HeroHighlight({ metric, line, accent = 'accent' }) {
  if (metric) {
    const border = accent === 'teal' ? 'border-teal' : 'border-accent'
    const color = accent === 'teal' ? 'text-teal' : 'text-accent'
    return (
      <div className={`mb-9 border-l-4 py-1 pl-6 ${border}`}>
        <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted-2">
          The headline result
        </p>
        <p className={`font-display text-4xl md:text-6xl font-bold leading-[1.05] ${color}`}>
          {metric}
        </p>
      </div>
    )
  }
  if (line) {
    return (
      <div className="mb-9 border-l-4 border-teal py-1 pl-6">
        <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted-2">
          Research focus
        </p>
        <p className="max-w-2xl font-display text-2xl md:text-3xl font-semibold leading-snug text-teal">
          {line}
        </p>
      </div>
    )
  }
  return null
}

// Reference info (role/status/focus, topic pills, stack, reliability note) —
// deliberately kept as one slim strip instead of two equal-weight cards, so
// it reads as secondary to the hero hook above it.
function ProjectMetaBar({ meta, stackGroups, pills = [], note }) {
  return (
    <div className="mb-10 space-y-3 border-y border-border/70 py-5">
      {(meta.length > 0 || pills.length > 0) && (
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
          {meta.map(([label, value]) => (
            <p key={label} className="flex items-baseline gap-1.5 text-sm">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-2">
                {label}
              </span>
              <span className="font-medium text-text">{value}</span>
            </p>
          ))}
          {pills.map(pill => (
            <span key={pill} className="chip-working">
              {pill}
            </span>
          ))}
        </div>
      )}
      {stackGroups.length > 0 && (
        <p className="font-mono text-xs leading-relaxed text-muted-2">
          {stackGroups.map(group => `${group.label}: ${group.items.join(', ')}`).join('   ·   ')}
        </p>
      )}
      {note && <p className="text-xs italic leading-relaxed text-muted-2">{note}</p>}
    </div>
  )
}

const DEEP_DIVE_TONE = {
  accent: { text: 'text-accent', ring: 'bg-accent/10' },
  teal: { text: 'text-teal', ring: 'bg-teal/10' },
}

// Progressive disclosure for the technical weeds — pipeline diagram / system
// design cards + the full list of key decisions. Collapsed by default so the
// primary read-through stays fast; opt-in for anyone who wants the depth.
function TechnicalDeepDive({ pipeline, technicalSystem, decisions, accent = 'accent' }) {
  const tone = DEEP_DIVE_TONE[accent] ?? DEEP_DIVE_TONE.accent
  const hasPipeline = Boolean(pipeline)
  const hasSystem = Boolean(technicalSystem?.length)
  const hasDecisions = Boolean(decisions?.length)
  if (!hasPipeline && !hasSystem && !hasDecisions) return null

  return (
    <details className="group mb-12 overflow-hidden rounded-xl border border-border/80 bg-surface/60">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 select-none">
        <span className="flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest text-muted-2">
          <ArchIcon />
          Technical deep dive
          <span className="hidden font-normal normal-case tracking-normal text-muted-2/80 sm:inline">
            — architecture &amp; decisions
          </span>
        </span>
        <span className="shrink-0 text-base leading-none text-muted-2 transition-transform duration-200 group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <div className="space-y-8 border-t border-border/70 px-6 py-6">
        {hasPipeline && (
          <div>
            <p className={`mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${tone.text}`}>
              System Architecture
            </p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-bg-alt p-5 font-mono text-sm leading-relaxed text-muted">
              {pipeline}
            </pre>
          </div>
        )}

        {hasSystem && (
          <div>
            <p className={`mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${tone.text}`}>
              System Design
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {technicalSystem.map(({ layer, description }) => (
                <div key={layer} className="rounded-xl border border-border/75 bg-surface/80 p-5">
                  <p className={`mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${tone.text}`}>
                    {layer}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasDecisions && (
          <div>
            <p className={`mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${tone.text}`}>
              Key Decisions
            </p>
            <ol className="space-y-4">
              {decisions.map((d, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${tone.ring} ${tone.text}`}>
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </details>
  )
}

export default function ProjectDetail({ project, onBack }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const stackGroups = getStackGroups(project)
  const meta = getMeta(project)
  const isProductStory = Boolean(project.productPillars?.length)
  const heroAccent = isProductStory ? 'teal' : 'accent'
  const heroMetric = getHeroMetric(project)
  const heroLine = getHeroLine(project)
  const displayHighlights = getDisplayHighlights(project, heroLine)
  const remainingMetrics = getRemainingMetrics(project)

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="container-content py-12">

        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
        >
          ← Back to Projects
        </button>

        <div className="mb-10 w-full">
          {project.video ? (
            <ProjectVideo project={project} />
          ) : (
            <div className="overflow-hidden rounded-lg border border-border shadow-sm">
              <ProjectGraphic
                id={project.id}
                gradient={project.gradient}
                title={project.title}
                className="w-full h-64 md:h-80"
                variant="detail"
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-start gap-3 mb-3">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h1>
        </div>

        <p className="text-xl md:text-2xl font-semibold text-accent leading-snug mb-3">
          {project.oneliner}
        </p>

        <p className="text-lg text-muted leading-relaxed mb-8 max-w-3xl">
          {project.summary ?? project.oneliner}
        </p>

        <HeroHighlight metric={heroMetric} line={heroLine} accent={heroAccent} />

        <ProjectMetaBar
          meta={meta}
          stackGroups={stackGroups}
          pills={project.pills}
          note={project.reliabilityNote}
        />

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

        {isProductStory ? (
          <div className="space-y-12">

            <div className="max-w-2xl">
              <SectionKicker icon={<ProblemIcon />} tone="warning">The Problem</SectionKicker>
              <p className="font-display text-xl md:text-2xl leading-snug text-text">{project.problem}</p>
            </div>

            {project.editorialCallout && (
              <div className="rounded-2xl border border-teal/18 bg-teal/[0.05] px-6 py-7 sm:px-10">
                <p className="text-2xl md:text-3xl font-semibold text-teal leading-snug mb-2">
                  {project.editorialCallout.lead}
                </p>
                <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                  {project.editorialCallout.body}
                </p>
              </div>
            )}

            <div>
              <SectionKicker icon={<SolutionIcon />} tone="accent">What I Built</SectionKicker>
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                {project.productPillars.map((pillar, i) => (
                  <div key={pillar.title} className="rounded-xl border border-border/70 bg-surface/75 p-5">
                    <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 font-mono text-xs font-bold text-teal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mb-1.5 text-base font-bold text-text leading-snug">{pillar.title}</p>
                    <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-muted-2 mb-6">
                {project.technicalContribution ?? project.solution}
              </p>
              <div className="max-w-3xl overflow-hidden rounded-lg border border-teal/20 shadow-sm">
                <ProjectGraphic
                  id={project.id}
                  gradient={project.gradient}
                  title={project.title}
                  className="w-full h-48 md:h-56 [&_img]:object-[80%_20%]"
                  variant="detail"
                />
              </div>
            </div>

            <div>
              <SectionKicker tone="teal">How It Works</SectionKicker>
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

            <TechnicalDeepDive
              technicalSystem={project.technicalSystem}
              decisions={project.decisions}
              accent="teal"
            />

            {remainingMetrics.length >= 2 && (
              <div>
                <SectionKicker icon={<ResultsIcon />} tone="success">By The Numbers</SectionKicker>
                {project.metricNote && (
                  <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-2">{project.metricNote}</p>
                )}
                <div className={`grid grid-cols-1 ${getMetricsGridClass(remainingMetrics.length)} gap-4`}>
                  {remainingMetrics.map(m => (
                    <div key={m} className="rounded-lg bg-teal/[0.06] px-5 py-6 text-center">
                      <p className="font-mono text-teal font-bold text-xl md:text-2xl leading-snug">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.nextImprovements && project.nextImprovements.length > 0 && (
              <p className="text-sm text-muted-2 leading-relaxed">
                <span className="font-medium text-muted">Still ahead: </span>
                {project.nextImprovements.join(' · ')}
              </p>
            )}

          </div>
        ) : (
          <div className="space-y-12">

            <div className="max-w-2xl">
              <SectionKicker icon={<ProblemIcon />} tone="warning">The Problem</SectionKicker>
              <p className="font-display text-xl md:text-2xl leading-snug text-text">{project.problem}</p>
            </div>

            <div>
              <SectionKicker icon={<SolutionIcon />} tone="accent">What I Built</SectionKicker>
              {displayHighlights.length > 0 && (
                <ul className="mb-5 grid gap-3 md:grid-cols-2">
                  {displayHighlights.map(item => (
                    <li key={item} className="flex gap-3 rounded-md bg-accent/[0.03] p-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="max-w-2xl text-base leading-relaxed text-muted-2">
                {project.technicalContribution ?? project.solution}
              </p>
            </div>

            <TechnicalDeepDive
              pipeline={project.pipeline}
              decisions={project.decisions}
              accent="accent"
            />

            {remainingMetrics.length >= 2 && (
              <div>
                <SectionKicker icon={<ResultsIcon />} tone="success">By The Numbers</SectionKicker>
                {project.metricNote && (
                  <p className="mb-4 text-sm text-muted-2 leading-relaxed">{project.metricNote}</p>
                )}
                <div className={`grid grid-cols-1 ${getMetricsGridClass(remainingMetrics.length)} gap-4`}>
                  {remainingMetrics.map(m => (
                    <div key={m} className="bg-success/[0.06] border border-success/15 rounded-lg px-5 py-6 text-center">
                      <p className="font-mono text-success font-bold text-xl md:text-2xl leading-snug">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.nextImprovements && project.nextImprovements.length > 0 && (
              <p className="text-sm text-muted-2 leading-relaxed">
                <span className="font-medium text-muted">Still ahead: </span>
                {project.nextImprovements.join(' · ')}
              </p>
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
