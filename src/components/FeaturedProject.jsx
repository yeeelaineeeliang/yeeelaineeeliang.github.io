import ProjectGraphic from './ProjectGraphic'
import MagneticButton from './MagneticButton'

export default function FeaturedProject({ project, onViewDetail, id }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const keyMetric = project.metrics?.[0]

  return (
    <article id={id} className="fade-in relative scroll-mt-32 overflow-hidden rounded-xl border border-border/60 shadow-md aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
      <ProjectGraphic
        id={project.id}
        gradient={project.gradient}
        title={project.title}
        className="absolute inset-0 h-full w-full transition-transform duration-700 hover:scale-[1.015]"
        variant="detail"
      />

      {/* Gradient scrim — anchors the text panel without flattening the whole image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent sm:bg-gradient-to-r sm:from-black/75 sm:via-black/25 sm:to-transparent lg:w-3/4" />

      {/* Floating text panel — asymmetric, offset rather than a centered brochure split */}
      <div className="relative flex h-full max-w-lg flex-col justify-end p-6 sm:justify-center sm:p-8 lg:p-12">
        {project.domainTags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.domainTags.map(tag => (
              <span key={tag} className="chip-glass">{tag}</span>
            ))}
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white mb-2">
          {project.title}
        </h3>

        <p className="text-base text-white/85 leading-relaxed mb-4 max-w-md">
          {project.oneliner}
        </p>

        {keyMetric && (
          <span className="chip-metric-dark w-fit mb-5">{keyMetric}</span>
        )}

        <div className="flex flex-wrap gap-3">
          {hasDemo && (
            <MagneticButton>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try Demo →
              </a>
            </MagneticButton>
          )}
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className={
              hasDemo
                ? 'inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:-translate-y-px hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                : 'btn-primary'
            }
          >
            View Case Study →
          </button>
          {hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-white/85 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
