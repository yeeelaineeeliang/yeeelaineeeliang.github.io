import ProjectGraphic from './ProjectGraphic'
import MagneticButton from './MagneticButton'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const SPRING = 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s cubic-bezier(0.22,1,0.36,1), filter 0.4s cubic-bezier(0.22,1,0.36,1)'

export default function FeaturedProject({ project, onViewDetail, id, isActive = false, isDimmed = false }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.metrics?.[0]
  const metaLine = [project.role, project.maturity].filter(Boolean).join(' · ')

  const featuredStyle = prefersReducedMotion
    ? {}
    : isActive
    ? {
        transform: 'translateY(-10px) scale(1.015)',
        boxShadow: '0 0 60px -10px rgba(163,63,47,0.22), 0 24px 48px -8px rgba(163,63,47,0.16), 0 0 0 1.5px rgba(163,63,47,0.18)',
        opacity: 1,
        filter: 'none',
        transition: SPRING,
      }
    : isDimmed
    ? {
        transform: 'none',
        opacity: 0.6,
        filter: 'grayscale(0.3)',
        transition: SPRING,
      }
    : {
        transform: 'none',
        opacity: 1,
        filter: 'none',
        transition: SPRING,
      }

  return (
    <article id={id} style={featuredStyle} className="fade-in scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-[0_4px_24px_rgba(38,27,25,0.10)]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — project graphic */}
        <div className="relative min-h-[260px] md:min-h-[480px]">
          <ProjectGraphic
            id={project.id}
            gradient={project.gradient}
            title={project.title}
            className="absolute inset-0 h-full w-full"
            variant="detail"
          />
        </div>

        {/* Right — text panel */}
        <div className="flex flex-col justify-center bg-surface p-8 lg:p-12">

          {project.domainTags?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.domainTags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/25 bg-accent/[0.06] px-2.5 py-0.5 font-mono text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="mb-1 text-3xl font-bold leading-[1.12] text-text lg:text-4xl">
            {project.title}
          </h3>

          {metaLine && (
            <p className="mb-4 text-sm font-medium text-muted-2">{metaLine}</p>
          )}

          <p className="mb-4 text-lg leading-relaxed text-muted">
            {project.oneliner}
          </p>

          {project.editorialCallout && (
            <blockquote className="mb-5 border-l-2 border-accent/40 pl-4">
              <p className="text-sm font-semibold italic text-text/80">
                {project.editorialCallout.lead}
              </p>
            </blockquote>
          )}

          {keyMetric && (
            <span className="chip-metric mb-6 w-fit">{keyMetric}</span>
          )}

          <div className="flex flex-wrap gap-3">
            {hasDemo && (
              <MagneticButton>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Try Demo →
                </a>
              </MagneticButton>
            )}
            <MagneticButton>
              <button
                type="button"
                onClick={() => onViewDetail(project)}
                className={hasDemo ? 'btn-outline' : 'btn-primary'}
              >
                View Case Study →
              </button>
            </MagneticButton>
            {hasGithub && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-muted transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  )
}
