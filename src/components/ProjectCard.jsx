import ProjectGraphic from './ProjectGraphic'

export default function ProjectCard({ project, onViewDetail, index = 0 }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const status = project.maturity ?? project.status

  return (
    <article className="group flex h-full flex-col overflow-hidden card-warm border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Project graphic with slide-up overlay */}
      <div className="relative shrink-0 overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="h-52 w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-4">
          <p className="text-white text-sm font-medium leading-snug line-clamp-3">
            {project.oneliner ?? project.summary}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="font-mono text-xs font-bold text-muted-2/50 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="w-full text-lg font-bold leading-snug">
            <button
              type="button"
              onClick={() => onViewDetail(project)}
              className="text-left transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.title}
            </button>
          </h3>
        </div>

        <div className="relative min-h-[5rem]">
          <p className="text-sm text-muted leading-relaxed line-clamp-4 transition-opacity duration-200 group-hover:opacity-0">
            {project.summary ?? project.oneliner}
          </p>
          {project.decisions?.[0] && (
            <p className="absolute inset-0 overflow-hidden text-sm italic leading-relaxed text-muted-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 border-l-2 border-accent/40 pl-3">
              {project.decisions[0]}
            </p>
          )}
        </div>

        {status && (
          <span className="w-fit rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
            {status}
          </span>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          {hasDemo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo →
            </a>
          )}

          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className={hasDemo ? 'btn-outline' : 'btn-primary'}
          >
            Case Study →
          </button>

          {hasGithub && (
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
