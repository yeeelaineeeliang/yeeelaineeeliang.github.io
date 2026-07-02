import { experience } from '../data/experience'

function OrgLink({ href, children }) {
  if (!href) return children
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">

        <div className="fade-in mb-6">
          <h2 className="section-title">Experience</h2>
        </div>

        <ol className="fade-in relative space-y-8 pl-9 sm:pl-11">
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="timeline-draw absolute bottom-4 left-[13px] top-4 w-0.5 rounded-full bg-border/90 sm:left-[15px]"
          />

          {experience.map(e => (
            <li key={`${e.role}-${e.org}`} className="group relative">
              {/* Timeline dot */}
              <span className="absolute -left-9 top-6 flex h-7 w-7 items-center justify-center sm:-left-11 sm:h-8 sm:w-8">
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent shadow-sm ring-4 ring-bg transition-transform duration-200 group-hover:scale-110" />
              </span>

              <article className="rounded-lg border border-border/70 bg-surface/85 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/30 group-hover:shadow-md">

                {/* Header */}
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-text sm:text-2xl">
                      {e.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">
                      <OrgLink href={e.orgUrl}>{e.org}</OrgLink>
                      {e.team && (
                        <> — <OrgLink href={e.teamUrl}>{e.team}</OrgLink></>
                      )}
                      {e.location && (
                        <span className="text-muted-2"> · {e.location}</span>
                      )}
                    </p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {e.dates}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-5 py-3 sm:px-6">
                  {e.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/80 bg-bg px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* What I worked on */}
                <div className="border-t border-border/40 px-5 py-4 sm:px-6">
                  <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-2">
                    What I worked on
                  </p>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {e.description}
                  </p>
                </div>

                {/* What I achieved */}
                <div className="border-t border-border/40 px-5 py-4 sm:px-6">
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-2">
                    What I achieved
                  </p>
                  <ul className="space-y-2.5">
                    {e.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
