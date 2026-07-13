import ProjectGraphic from './ProjectGraphic'

const SIZE_CONFIG = {
  lg: {
    aspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]',
    title: 'text-xl sm:text-2xl',
    padding: 'p-5 sm:p-6',
  },
  md: {
    aspect: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/8]',
    title: 'text-lg sm:text-xl',
    padding: 'p-5 sm:p-6',
  },
  tall: {
    aspect: 'aspect-[3/4]',
    title: 'text-lg',
    padding: 'p-5',
  },
}

export default function ProjectCard({ project, onViewDetail, variant = 'overlay', size = 'lg', id }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.cardBadge ?? project.metrics?.[0]
  const isLarge = size === 'lg'
  const demoIsPrimary = isLarge && hasDemo
  const quickMeta = [project.role, project.maturity].filter(Boolean)

  let secondary = null
  if (hasDemo) {
    secondary = { label: 'Try Demo →', href: project.links.demo }
  } else if (hasGithub) {
    secondary = { label: 'GitHub →', href: project.links.github }
  }

  if (variant === 'archive') {
    return (
      <article id={id} className="group flex scroll-mt-32 overflow-hidden rounded-xl border border-border/60 bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
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

  const { aspect, title, padding } = SIZE_CONFIG[size]

  return (
    <article id={id} className={`group fade-in relative scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md ${aspect}`}>
      <ProjectGraphic
        id={project.id}
        gradient={project.gradient}
        title={project.title}
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

      <div className={`relative flex h-full flex-col justify-end ${padding}`}>
        {quickMeta.length > 0 && (
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/62">
            {quickMeta.join(' · ')}
          </p>
        )}

        {project.domainTags?.length > 0 && (
          <p className="font-mono text-[11.5px] tracking-wide text-white/60 mb-2.5">
            {project.domainTags.join(' · ')}
          </p>
        )}

        <h3 className={`font-bold leading-snug text-white mb-1 ${title}`}>
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="text-left hover:text-white/80 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {project.title}
          </button>
        </h3>

        <p className="text-sm text-white/85 leading-relaxed mb-3 max-w-md line-clamp-2">
          {project.oneliner ?? project.summary}
        </p>

        {project.technicalContribution && (
          <p className="mb-4 max-w-md text-[13px] leading-relaxed text-white/68 line-clamp-3">
            {project.technicalContribution}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {keyMetric && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_0_2px_rgba(47,143,131,0.25)]" />
              {keyMetric}
            </span>
          )}

          {demoIsPrimary ? (
            <>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try Demo →
              </a>
              <button
                type="button"
                onClick={() => onViewDetail(project)}
                className="text-sm font-semibold text-white/85 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Case Study →
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onViewDetail(project)}
                className="btn-primary"
              >
                View Case Study →
              </button>
              {secondary && (
                <a
                  href={secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/85 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondary.label}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  )
}
