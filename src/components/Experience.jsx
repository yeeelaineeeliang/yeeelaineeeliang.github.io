import { experience } from '../data/experience'

function OrgLink({ href, children }) {
  if (!href) return children

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-text underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  )
}

function OrganizationLine({ item }) {
  return (
    <p className="text-sm leading-relaxed text-muted sm:text-base">
      <OrgLink href={item.orgUrl}>{item.org}</OrgLink>
      {item.team && (
        <>
          <span className="mx-1.5 text-muted-2">—</span>
          <OrgLink href={item.teamUrl}>{item.team}</OrgLink>
        </>
      )}
      {item.location && <span className="ml-2 text-muted-2">· {item.location}</span>}
    </p>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <div className="fade-in mb-12 max-w-3xl">
          <h2 className="section-title mb-4">Experience</h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            My experience sits across applied ML, LLM systems, and data infrastructure,
            usually where messy real-world data needs to become something usable by a team
            or user.
          </p>
        </div>

        <ol className="fade-in relative space-y-7 pl-9 sm:pl-11">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[13px] top-4 w-0.5 rounded-full bg-border/90 sm:left-[15px]"
          />

          {experience.map(e => (
            <li key={`${e.role}-${e.org}`} className="group relative">
              <span className="absolute -left-9 top-6 flex h-7 w-7 items-center justify-center sm:-left-11 sm:h-8 sm:w-8">
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent shadow-sm ring-4 ring-bg transition-transform duration-200 group-hover:scale-110" />
              </span>

              <article className="rounded-lg border border-border/70 bg-surface/85 p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/30 group-hover:shadow-md sm:p-6">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-text sm:text-2xl">
                      {e.role}
                    </h3>
                    <OrganizationLine item={e} />
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {e.dates}
                  </span>
                </div>

                <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {e.summary}
                </p>

                <div className="mb-3 flex flex-wrap gap-2">
                  {e.metrics.map(metric => (
                    <span
                      key={metric}
                      className="rounded-full border border-accent/20 bg-accent/[0.07] px-2.5 py-1 font-mono text-xs font-semibold text-accent transition-colors duration-200 group-hover:bg-accent/[0.10]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {e.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
                      <span className="mt-0.5 shrink-0 text-muted-2">-</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
