import { experience } from '../data/experience'

const THREAD_STYLES = {
  'Applied AI': {
    badge: 'from-accent to-accent/70',
  },
  'AI in research': {
    badge: 'from-teal to-teal/70',
  },
  'Data at scale': {
    badge: 'from-muted to-text',
  },
  Automation: {
    badge: 'from-accent/80 to-teal/70',
  },
}
const DEFAULT_THREAD_STYLE = THREAD_STYLES['Data at scale']

export default function Experience() {
  function LinkedLabel({ href, children }) {
    if (!href) return children
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-accent"
      >
        {children}
      </a>
    )
  }

  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 80% 18%, rgba(222, 152, 118, 0.13), transparent 24%),
          radial-gradient(circle at 18% 84%, rgba(98, 142, 133, 0.08), transparent 30%),
          linear-gradient(180deg, #eef3ee 0%, #f4f2eb 100%)
        `,
      }}
    >
      <div aria-hidden="true" className="ambient-layer">
        <div className="ambient-threads opacity-30" />
        <div
          className="ambient-orb ambient-orb-slow h-[12rem] w-[12rem] md:h-[15rem] md:w-[15rem]"
          style={{
            top: '6%',
            right: '4%',
            background: 'radial-gradient(circle, rgba(163, 63, 47, 0.08), rgba(163, 63, 47, 0.01) 70%, transparent 76%)',
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(94, 111, 104, 0.028) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.22), transparent 32%)',
          backgroundSize: '26px 26px, 100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.72))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.72))',
        }}
      />

      <div className="container-content relative z-10">

        <div className="fade-in mb-5 max-w-4xl sm:mb-6">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Experience</h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="timeline-draw pointer-events-none absolute bottom-6 left-[22px] top-5 w-[3px] rounded-full bg-accent/65"
          />

          <ol className="fade-in fade-in-stagger space-y-5 sm:space-y-6">
            {experience.map((e) => {
              const style = THREAD_STYLES[e.thread] ?? DEFAULT_THREAD_STYLE

              return (
                <li key={`${e.role}-${e.org}`} className="group relative pl-16">
                  <div className="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bg">
                    {e.logo ? (
                      <img
                        src={e.logo}
                        alt=""
                        className="h-11 w-11 rounded-2xl object-contain bg-white shadow-sm transition-transform duration-200 group-hover:scale-105"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${style.badge} font-mono text-sm font-bold tracking-tight text-white shadow-sm transition-transform duration-200 group-hover:scale-105`}
                      >
                        {e.initials}
                      </span>
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-12 top-[39px] h-px w-4 bg-gradient-to-r from-accent/38 to-accent/8"
                  />

                  <article className="relative border-b border-border/80 pb-4 pt-3 transition-colors duration-300 group-hover:border-accent/30 sm:pb-5 sm:pt-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold leading-[1.16] text-text sm:text-[1.62rem]">
                        {e.headline}
                      </h3>

                      <p className="mt-1.5 text-[15px] font-semibold leading-snug text-text/60 sm:text-base">
                        {e.role} · <LinkedLabel href={e.orgLink}>{e.org}</LinkedLabel> ·{' '}
                        <span className="font-mono text-[12.5px] font-semibold text-accent/80">{e.dates}</span>
                      </p>

                      {(e.team || e.location) && (
                        <p className="mt-1 text-sm leading-relaxed text-muted-2">
                          {e.team && <LinkedLabel href={e.teamLink}>{e.team}</LinkedLabel>}
                          {e.team && e.location && <span> · </span>}
                          {e.location && <span>{e.location}</span>}
                        </p>
                      )}

                      <p className="mt-3 text-sm leading-[1.72] text-text/85 sm:text-base">
                        {e.summary}
                      </p>

                      {e.tags?.length > 0 && (
                        <div className="mt-3">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-2/80">
                            Focus Areas
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {e.tags.map(tag => (
                              <span
                                key={tag}
                                className="rounded-full border border-border bg-bg/70 px-3 py-1 text-[11px] font-medium text-muted shadow-[0_1px_0_rgba(255,255,255,0.35)] transition-colors duration-200 group-hover:border-accent/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
