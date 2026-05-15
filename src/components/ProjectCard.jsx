import ProjectGraphic from './ProjectGraphic'

function getBackground(project) {
  return (project.metrics ?? []).filter(Boolean).slice(0, 3)
}

export default function ProjectCard({ project, onViewDetail }) {
  const highlights = getBackground(project)
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')

  return (
    <article
      className={`group flex flex-col sm:flex-row gap-6 overflow-hidden card-warm shadow-sm hover:shadow-md${project.featured ? ' border-t-[3px]' : ' opacity-90 border-border/50'}`}
      style={project.featured ? { borderTopColor: project.gradient[0] } : undefined}
    >
      {/* Project graphic */}
      <div className="relative sm:w-56 md:w-64 lg:w-72 shrink-0 overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="w-full h-48 sm:h-full transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute bottom-3 left-4 z-10 font-mono text-xs px-2.5 py-1 rounded-full bg-accent text-white font-semibold shadow-sm">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3.5 p-5 sm:pl-0 sm:pr-6 sm:py-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug">
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="text-left transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.title}
            </button>
          </h3>
          {project.status && (
            <span className="shrink-0 rounded-md border border-accent/20 bg-accent/[0.08] px-2 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.oneliner}</p>

        {highlights.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 border-y border-border/70 py-2">
            {highlights.map(item => (
              <span
                key={item}
                className="rounded-md bg-bg-alt px-2 py-1 text-xs font-medium text-text"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs font-semibold text-muted mr-1">Stack:</span>
          {project.stack.map(s => (
            <span
              key={s}
              className="text-xs font-mono text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-1">
          {hasDemo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
            >
              Live Demo →
            </a>
          )}

          {!hasDemo && hasGithub && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-muted hover:text-text transition-colors duration-200"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
