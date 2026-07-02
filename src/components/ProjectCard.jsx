import ProjectGraphic from './ProjectGraphic'

export default function ProjectCard({ project, onViewDetail, compact = false }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const tags = project.stack?.slice(0, 3) || []
  const keyMetric = project.metrics?.[0]

  return (
    <article className="group flex h-full flex-col overflow-hidden card-warm border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">

      {/* Graphic */}
      <div className="relative shrink-0 overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${compact ? 'h-32' : 'h-44'}`}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col gap-3 ${compact ? 'p-4' : 'p-5'}`}>

        <h3 className={`font-semibold leading-snug text-text ${compact ? 'text-sm' : 'text-base'}`}>
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="text-left hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {project.title}
          </button>
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.oneliner ?? project.summary}
        </p>

        {keyMetric && (
          <p className="font-mono text-xs text-teal">{keyMetric}</p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span key={tag} className="rounded border border-border/80 bg-bg px-2 py-0.5 font-mono text-[11px] text-muted-2">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-1 flex flex-wrap items-center gap-3">
          {hasDemo ? (
            <>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Demo →
              </a>
              <button
                type="button"
                onClick={() => onViewDetail(project)}
                className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
              >
                Case study →
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="btn-primary"
            >
              Case study →
            </button>
          )}
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

      </div>
    </article>
  )
}
