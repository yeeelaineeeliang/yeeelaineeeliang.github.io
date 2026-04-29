import ProjectGraphic from './ProjectGraphic'

function getBackground(project) {
  return [project.status, ...(project.metrics ?? [])].filter(Boolean).slice(0, 3)
}

export default function ProjectCard({ project, onViewDetail }) {
  const background = getBackground(project)

  return (
    <article
      className={`group flex flex-col sm:flex-row gap-6 overflow-hidden card-warm${project.featured ? ' border-t-[3px]' : ' opacity-90 border-border/50'}`}
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
      <div className="flex flex-col justify-center gap-3 p-5 sm:pl-0 sm:pr-6 sm:py-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.oneliner}</p>

        {background.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-border/70 py-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-2">
              Background
            </span>
            {background.map(item => (
              <span key={item} className="text-xs font-medium text-text">
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

        <button
          onClick={() => onViewDetail(project)}
          className="self-start text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200 mt-1"
        >
          View Case Study →
        </button>
      </div>
    </article>
  )
}
