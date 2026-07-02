import ProjectGraphic from './ProjectGraphic'
import MagneticButton from './MagneticButton'

// Capability labels per project — short descriptors for the reader, not tag clouds.
const CAPABILITIES = {
  'cityliving-sim': ['Grounded retrieval', 'Civic data', 'Full-stack'],
}

export default function FeaturedProject({ project, onViewDetail }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const capabilities = CAPABILITIES[project.id] || []
  const keyMetric = project.metrics?.[0]

  return (
    <article className="fade-in overflow-hidden rounded-2xl border border-border/50 bg-surface shadow-md">

      {/* Graphic */}
      <div className="relative overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="h-64 sm:h-72 lg:h-[380px] w-full transition-transform duration-700 hover:scale-[1.015]"
          variant="detail"
        />
        {project.maturity && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {project.maturity}
            </span>
          </div>
        )}
        {hasDemo && (
          <div className="absolute bottom-4 right-4">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/35 backdrop-blur-sm px-3 py-1.5 font-mono text-xs font-semibold text-white hover:bg-black/55 transition-colors duration-200"
            >
              Live demo →
            </a>
          </div>
        )}
      </div>

      {/* Content — one consistent vertical reading flow */}
      <div className="p-6 sm:p-8 lg:p-10">

        <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
          {project.title}
        </h3>

        <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl">
          {project.oneliner}
        </p>

        {/* Key metric + capability labels */}
        <div className="flex flex-wrap items-center gap-2 mb-7">
          {keyMetric && (
            <span className="rounded-lg border border-teal/30 bg-teal/[0.06] px-3 py-1.5 font-mono text-sm font-semibold text-teal">
              {keyMetric}
            </span>
          )}
          {capabilities.map(cap => (
            <span key={cap} className="rounded-lg border border-border/80 px-3 py-1.5 text-sm text-muted">
              {cap}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-7">
          {hasDemo && (
            <MagneticButton>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live Demo →
              </a>
            </MagneticButton>
          )}
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className={hasDemo ? 'btn-outline' : 'btn-primary'}
          >
            Full Case Study →
          </button>
          {hasGithub && !hasDemo && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
            >
              GitHub →
            </a>
          )}
        </div>

        {/* Technical details — optional disclosure */}
        <details className="group border-t border-border pt-5">
          <summary className="flex cursor-pointer list-none items-center gap-2 w-fit text-sm text-muted-2 hover:text-muted transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
            <span className="text-xs transition-transform duration-200 group-open:rotate-90" aria-hidden="true">▶</span>
            <span className="group-open:hidden">Technical details</span>
            <span className="hidden group-open:inline">Hide details</span>
          </summary>

          <div className="mt-5 space-y-5">
            <div>
              <p className="text-xs font-mono text-teal uppercase tracking-wide mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack?.map(s => (
                  <span key={s} className="rounded-md border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-muted">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-teal uppercase tracking-wide mb-2">How it works</p>
              <pre className="overflow-x-auto rounded-lg border border-border bg-bg-alt p-4 font-mono text-xs leading-relaxed text-muted">
                {project.pipeline}
              </pre>
            </div>
            {project.decisions?.length > 0 && (
              <div>
                <p className="text-xs font-mono text-teal uppercase tracking-wide mb-2">Key decisions</p>
                <ol className="space-y-2">
                  {project.decisions.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="shrink-0 font-mono text-xs text-muted-2 mt-0.5">{i + 1}.</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </details>

      </div>
    </article>
  )
}
