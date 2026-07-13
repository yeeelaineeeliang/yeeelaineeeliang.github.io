import ProjectGraphic from './ProjectGraphic'
import MagneticButton from './MagneticButton'

export default function FeaturedProject({ project, onViewDetail, id }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.metrics?.[0]
  const metaLine = [project.role, project.maturity].filter(Boolean).join(' · ')

  return (
    <article id={id} className="fade-in scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-[0_4px_24px_rgba(38,27,25,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(38,27,25,0.14)]">
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
