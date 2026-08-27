import ProjectGraphic from './ProjectGraphic'
import ProjectVideo from './ProjectVideo'

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

export default function FeaturedProject({ project, onViewDetail, id }) {
  const { onMouseMove, onMouseLeave } = useSpotlight()
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.metrics?.[0]

  return (
    <article
      id={id}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="fade-in scroll-mt-32 relative overflow-hidden rounded border border-border/60 bg-surface shadow-[0_24px_60px_rgba(36,28,26,0.08)] grid grid-cols-1 md:grid-cols-2 transition-all duration-350 hover:shadow-[0_34px_84px_rgba(154,51,36,0.2)] hover:-translate-y-1 hover:border-accent/30"
    >
      {/* Spotlight overlay */}
      <div
        data-spot
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-350 mix-blend-multiply"
      />

      {/* Left — project graphic */}
      <div className="relative min-h-[260px] md:min-h-[360px]">
        {project.video ? (
          <ProjectVideo project={project} variant="teaser" onOpen={onViewDetail} />
        ) : (
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="absolute inset-0 h-full w-full transition-transform duration-600"
            variant="detail"
          />
        )}
      </div>

      {/* Right — text panel */}
      <div className="relative z-10 flex flex-col justify-center bg-surface p-11">

        <div className="mb-4 flex gap-2 flex-wrap">
          <span className="font-mono text-[10.5px] font-semibold text-accent border border-accent/25 bg-accent/[0.06] px-2.5 py-0.5 rounded-full">
            Featured
          </span>
          {project.maturity && (
            <span className="font-mono text-[10.5px] font-semibold text-teal border border-teal/30 bg-teal/[0.07] px-2.5 py-0.5 rounded-full">
              {project.maturity}
            </span>
          )}
        </div>

        <h3 className="mb-3.5 text-[28px] font-semibold leading-[1.12] text-text">
          {project.title}
        </h3>

        <p className="mb-5 text-[15.5px] leading-[1.7] text-muted">
          {project.summary}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          {keyMetric && (
            <span className="font-mono text-[13px] font-semibold text-teal border border-teal/30 bg-teal/[0.06] px-3.5 py-1.5 rounded-sm">
              {keyMetric}
            </span>
          )}
          <div className="ml-auto flex items-center gap-4">
            {hasDemo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Try Demo →
              </a>
            )}
            {hasGithub && !hasDemo && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-muted hover:text-text transition-colors duration-200"
              >
                GitHub →
              </a>
            )}
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="text-sm font-bold text-text/60 hover:text-accent transition-colors duration-200"
            >
              Case Study →
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
