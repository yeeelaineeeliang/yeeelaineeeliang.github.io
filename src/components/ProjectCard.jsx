import ProjectGraphic from './ProjectGraphic'

export default function ProjectCard({ project, onViewDetail }) {
  const hasDemo = Boolean(project.links?.demo && project.links.demo !== '#')
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#')
  const status = project.maturity ?? project.status

  return (
    <article className="group flex h-full flex-col overflow-hidden card-warm border-border/60 shadow-sm hover:shadow-md">
      {/* Project graphic */}
      <div className="relative shrink-0 overflow-hidden">
        <ProjectGraphic
          id={project.id}
          gradient={project.gradient}
          title={project.title}
          className="h-48 w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
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
        </div>

        <p className="text-sm text-muted leading-relaxed line-clamp-4">
          {project.summary ?? project.oneliner}
        </p>

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
