import ProjectGraphic from './ProjectGraphic'

function maturityChip(maturity) {
  if (maturity === 'Shipped') {
    return 'rounded-full border border-teal/30 bg-teal/[0.06] px-2 py-0.5 font-mono text-[10px] font-medium text-teal'
  }
  if (maturity === 'In Progress') {
    return 'rounded-full border border-accent/25 bg-accent/[0.06] px-2 py-0.5 font-mono text-[10px] font-medium text-accent'
  }
  return 'rounded-full border border-border/80 bg-bg px-2 py-0.5 font-mono text-[10px] font-medium text-muted-2'
}

export default function ProjectCard({ project, onViewDetail, variant = 'overlay', size = 'gallery', id }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.cardBadge ?? project.metrics?.[0]
  const isWide = size === 'wide'

  if (variant === 'archive') {
    const quickMeta = [project.role, project.maturity].filter(Boolean)
    return (
      <article id={id} className="group flex scroll-mt-32 overflow-hidden rounded-xl border border-border/60 bg-surface shadow-[0_2px_12px_rgba(38,27,25,0.06)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(38,27,25,0.11)]">
        <div className="relative w-28 shrink-0 overflow-hidden sm:w-40">
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-2 p-4 sm:p-5">
          <div className="min-w-[160px] flex-1">
            {quickMeta.length > 0 && (
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-wide text-muted-2">
                {quickMeta.join(' · ')}
              </span>
            )}
            {project.domainTags?.length > 0 && (
              <span className="block font-mono text-[11px] uppercase tracking-wide text-muted-2 mb-1">
                {project.domainTags.join(' · ')}
              </span>
            )}
            <h3 className="font-semibold text-text mb-1">
              <button
                type="button"
                onClick={() => onViewDetail(project)}
                className="text-left hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {project.title}
              </button>
            </h3>
            <p className="text-sm text-muted leading-relaxed line-clamp-1">
              {project.oneliner ?? project.summary}
            </p>
          </div>

          {keyMetric && <span className="chip-metric shrink-0">{keyMetric}</span>}

          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="btn-primary shrink-0"
          >
            View Case Study →
          </button>
        </div>
      </article>
    )
  }

  const textPanel = (
    <div className={`flex flex-col justify-center bg-surface p-4 sm:p-5 ${isWide ? 'lg:p-6 lg:flex-1' : ''}`}>
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        {project.domainTags?.map(tag => (
          <span
            key={tag}
            className="rounded-full border border-accent/25 bg-accent/[0.06] px-2 py-0.5 font-mono text-[10px] font-medium text-accent"
          >
            {tag}
          </span>
        ))}
        {project.maturity && (
          <span className={maturityChip(project.maturity)}>{project.maturity}</span>
        )}
      </div>

      <h3 className="mb-1 font-bold text-base leading-snug text-text">
        <button
          type="button"
          onClick={() => onViewDetail(project)}
          className="text-left hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {project.title}
        </button>
      </h3>

      <p className="mb-3 text-sm text-muted leading-relaxed line-clamp-2">
        {project.oneliner ?? project.summary}
      </p>

      <div className="flex items-center gap-3">
        {keyMetric && (
          <span className="inline-flex items-center rounded-md border border-teal/30 bg-teal/[0.06] px-2 py-0.5 font-mono text-xs font-semibold text-teal shrink-0">
            {keyMetric}
          </span>
        )}
        <div className="ml-auto flex items-center gap-3">
          {hasDemo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Try Demo →
            </a>
          )}
          {!hasDemo && hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              GitHub →
            </a>
          )}
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="text-sm font-semibold text-text/70 hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View →
          </button>
        </div>
      </div>
    </div>
  )

  if (isWide) {
    return (
      <article id={id} className="group scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-[0_2px_12px_rgba(38,27,25,0.06)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(38,27,25,0.11)] lg:flex">
        <div className="relative h-[200px] overflow-hidden lg:h-auto lg:w-[45%] lg:shrink-0">
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        {textPanel}
      </article>
    )
  }

  return (
    <article id={id} className="group scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-[0_2px_12px_rgba(38,27,25,0.06)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(38,27,25,0.11)]">
      <div className="relative h-[200px] overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      {textPanel}
    </article>
  )
}
