import { experience } from '../data/experience'

// "What this shaped" content derived from existing achievements.
// [TODO: Elaine — review each paragraph for accuracy before publishing.]
const LESSONS = {
  'Dawnrise Inc.':
    'Learned that repetitive manual work usually has a clear automation waiting inside it. Getting GPT to reliably produce structured fields — not prose — meant investing in prompt design and schema thinking, not just API calls. That distinction changed how I approach LLMs for data work.',
  'Wells Fargo':
    "Learned that the most valuable finding isn't always the one you were looking for. The segmentation uncovered a customer cluster that was underserved across every channel — that observation shifted how the team thought about budget, not just confirmed existing plans. Also learned that a process mapped across teams is far more fixable than one optimized in isolation.",
  'University of Chicago':
    'Working under research constraints is different from building a product. Every engineering decision had to be traceable and study-valid — you can\'t just ship and iterate when participants are in a longitudinal design. Clarified for me what "reliability" means beyond just "it works."',
}

// Small label shown beside each role to hint at the arc
const ROLE_THREAD = {
  'Dawnrise Inc.': 'Automation',
  'Wells Fargo': 'Data at scale',
  'University of Chicago': 'AI in research',
}

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
    <section id="experience" className="section bg-bg-alt">
      <div className="container-content">

        <div className="fade-in mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">Experience</h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            Three different environments — a startup, a large bank, a research lab — each one
            pushing the same question from a different angle: how do you turn data into something
            people can actually act on?
          </p>
        </div>

        <ol className="fade-in relative space-y-8 pl-9 sm:pl-11">
          {/* Animated vertical timeline */}
          <div
            aria-hidden="true"
            className="timeline-draw absolute bottom-4 left-[13px] top-4 w-0.5 rounded-full bg-border/90 sm:left-[15px]"
          />

          {experience.map((e) => {
            const lesson = LESSONS[e.org]
            const thread = ROLE_THREAD[e.org]

            return (
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
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="w-fit rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 font-mono text-xs font-semibold text-accent">
                        {e.dates}
                      </span>
                      {thread && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">
                          {thread}
                        </span>
                      )}
                    </div>
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
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What this shaped */}
                  {lesson && (
                    <div className="border-t border-border/40 px-5 pb-5 pt-3 sm:px-6">
                      <details className="group/lesson">
                        <summary className="flex cursor-pointer list-none items-center gap-2 rounded py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                          <span
                            className="text-[10px] text-teal/70 transition-transform duration-200 group-open/lesson:rotate-90"
                            aria-hidden="true"
                          >
                            ▶
                          </span>
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-teal/70 hover:text-teal transition-colors duration-150">
                            What this shaped
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-muted border-l-2 border-teal/30 pl-3 italic">
                          {lesson}
                        </p>
                      </details>
                    </div>
                  )}

                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
