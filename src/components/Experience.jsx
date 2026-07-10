import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="section relative overflow-hidden bg-bg-alt"
      style={{
        background: `
          radial-gradient(circle at 82% 18%, rgba(163, 63, 47, 0.07), transparent 24%),
          radial-gradient(circle at 14% 82%, rgba(47, 143, 131, 0.08), transparent 28%),
          #EDF4F1
        `,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(94, 111, 104, 0.03) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.72))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.72))',
        }}
      />

      <div className="container-content relative z-10">

        <div className="fade-in mb-8 max-w-3xl sm:mb-10">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Experience</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            My experience spans marketing sciences, automation, and applied AI tooling. Across
            these roles, I kept returning to the same kind of work: understanding a messy
            process, finding the structure inside it, and building something clearer for people
            to use.
          </p>
        </div>

        <div className="fade-in relative">
          <div
            aria-hidden="true"
            className="timeline-draw absolute bottom-6 left-[13px] top-5 hidden w-px rounded-full bg-gradient-to-b from-accent/18 via-accent/44 to-teal/22 sm:block"
          />

          <ol className="space-y-4 sm:space-y-5">
            {experience.map((e) => {
              const lines = e.description.match(/[^.!?]+[.!?]?/g)?.map(s => s.trim()).filter(Boolean) ?? [e.description]
              const intro = lines[0]
              const details = lines.slice(1)

              return (
              <li key={`${e.role}-${e.org}`} className="group relative sm:pl-7">
                <div className="absolute left-0 top-5 hidden sm:flex sm:flex-col sm:items-center">
                  <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-bg">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent ring-[5px] ring-bg-alt transition-transform duration-200 group-hover:scale-110" />
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute left-[25px] top-[31px] hidden h-px w-4 bg-gradient-to-r from-accent/38 to-accent/8 sm:block"
                />

                <div className="grid gap-2 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-3 lg:grid-cols-[118px_minmax(0,1fr)]">
                  <div className="hidden pt-3 sm:block">
                    <p className="pr-1 text-right font-mono text-[11px] font-semibold leading-snug text-accent/88">
                      {e.dates}
                    </p>
                  </div>

                  <article className="relative border-b border-border/75 pb-4 pt-3 transition-colors duration-300 group-hover:border-accent/28 sm:pb-5 sm:pt-4">
                    <div className="flex flex-wrap items-center gap-2.5 sm:hidden">
                      <span className="w-fit rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 font-mono text-xs font-semibold text-accent">
                        {e.dates}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-bold leading-[1.12] text-text sm:text-[1.62rem]">
                        {e.role}
                      </h3>
                      <p className="mt-1.5 text-[15px] font-semibold leading-snug text-text/72 sm:text-base">
                        {e.org}
                      </p>

                      {(e.team || e.location) && (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-2">
                          {e.team && <span>{e.team}</span>}
                          {e.team && e.location && <span> · </span>}
                          {e.location && <span>{e.location}</span>}
                        </p>
                      )}

                      <div className="mt-3 space-y-2.5">
                        <p className="text-sm leading-[1.72] text-muted sm:text-base">
                          {intro}
                        </p>

                        {details.length > 0 && (
                          <div className="space-y-1.5">
                            {details.map((line, idx) => (
                              <p key={idx} className="text-sm leading-[1.65] text-muted sm:text-[15px]">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/80 bg-bg/70 px-3 py-1 font-mono text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {e.shaped && (
                        <p className="mt-3 text-sm italic leading-relaxed text-muted-2">
                          {e.shaped}
                        </p>
                      )}
                    </div>
                  </article>
                </div>
              </li>
            )})}
          </ol>
        </div>
      </div>
    </section>
  )
}
