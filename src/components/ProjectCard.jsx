import ProjectGraphic from './ProjectGraphic'

function useSpotlight() {
  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    const overlay = e.currentTarget.querySelector('[data-spot]')
    if (overlay) {
      overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(154,51,36,0.10), transparent 60%)`
      overlay.style.opacity = '1'
    }
  }
  function onMouseLeave(e) {
    const overlay = e.currentTarget.querySelector('[data-spot]')
    if (overlay) overlay.style.opacity = '0'
  }
  return { onMouseMove, onMouseLeave }
}

function domainChip() {
  return 'font-mono text-[10px] font-semibold text-accent border border-accent/22 bg-accent/[0.05] px-2.5 py-0.5 rounded-full'
}

function maturityChip(maturity) {
  if (maturity === 'Shipped') {
    return 'font-mono text-[10px] font-semibold text-teal border border-teal/30 bg-teal/[0.06] px-2.5 py-0.5 rounded-full'
  }
  return 'font-mono text-[10px] font-semibold text-muted-2 border border-border px-2.5 py-0.5 rounded-full'
}

export default function ProjectCard({ project, onViewDetail, id }) {
  const { onMouseMove, onMouseLeave } = useSpotlight()
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.cardBadge ?? project.metrics?.[0]
  const domainLabel = project.domainTags?.[0] ?? project.category?.[0]

  return (
    <article
      id={id}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group scroll-mt-32 relative overflow-hidden rounded border border-border/60 bg-surface shadow-[0_10px_30px_rgba(36,28,26,0.06)] transition-all duration-300 hover:shadow-[0_22px_50px_rgba(154,51,36,0.16)] hover:-translate-y-1 hover:border-accent/28"
    >
      {/* Spotlight overlay */}
      <div
        data-spot
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-350 mix-blend-multiply"
      />

      {/* Image / illustration */}
      <div className="relative h-[190px] overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="absolute inset-0 h-full w-full transition-transform duration-600 group-hover:scale-[1.07]"
        />
      </div>

      {/* Text panel */}
      <div className="relative z-10 p-6">
        <div className="mb-3 flex gap-2 flex-wrap">
          {domainLabel && (
            <span className={domainChip()}>{domainLabel}</span>
          )}
          {project.maturity && (
            <span className={maturityChip(project.maturity)}>{project.maturity}</span>
          )}
        </div>

        <h3 className="mb-2 text-[17px] font-bold leading-snug text-text transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mb-4 text-[14px] leading-[1.65] text-muted line-clamp-2">
          {project.summary}
        </p>

        <div className="flex items-center gap-3.5">
          {keyMetric && (
            <span className="font-mono text-[12px] font-semibold text-teal border border-teal/28 bg-teal/[0.06] px-2.5 py-1 rounded-sm shrink-0">
              {keyMetric}
            </span>
          )}
          <div className="ml-auto flex items-center gap-3">
            {hasDemo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-bold text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Try Demo →
              </a>
            )}
            {!hasDemo && hasGithub && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-bold text-text/70 hover:text-text transition-colors duration-200"
              >
                GitHub →
              </a>
            )}
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="text-[13.5px] font-bold text-text/60 hover:text-accent transition-colors duration-200"
            >
              View →
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
