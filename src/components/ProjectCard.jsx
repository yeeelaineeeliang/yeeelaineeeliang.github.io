import ProjectGraphic from './ProjectGraphic'

export default function ProjectCard({ project, onViewDetail }) {
  return (
    <article className="group flex flex-col sm:flex-row gap-6 card-warm overflow-hidden">
      {/* Project graphic */}
      <div className="sm:w-56 md:w-64 lg:w-72 shrink-0 overflow-hidden">
        <ProjectGraphic
          icon={project.icon}
          gradient={project.gradient}
          title={project.title}
          className="w-full h-48 sm:h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3 p-5 sm:pl-0 sm:pr-6 sm:py-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>

        <p className="text-sm text-muted leading-relaxed">{project.oneliner}</p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs font-semibold text-muted mr-1">Stack:</span>
          {project.stack.map(s => (
            <span
              key={s}
              className="text-xs font-mono px-2 py-0.5 rounded bg-accent/8 text-accent border border-accent/15"
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
