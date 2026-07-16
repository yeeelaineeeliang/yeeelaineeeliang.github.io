import { experience } from '../data/experience'

export default function Experience() {
  function LinkedLabel({ href, children }) {
    if (!href) return children
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 decoration-accent/40 decoration-[1.5px] transition-all duration-200 hover:text-accent hover:decoration-accent"
      >
        {children}
      </a>
    )
  }

  return (
    <section id="experience" className="section bg-bg-alt">
      <div className="container-content">

        <div className="fade-in mb-10 max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Background</p>
          <h2 className="text-[clamp(30px,3.4vw,42px)] font-semibold leading-tight">Experience</h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-[27px] top-2 w-px bg-border"
          />

          <ol className="fade-in fade-in-stagger flex flex-col gap-11">
            {experience.map((e) => (
              <li key={`${e.role}-${e.org}`} className="group relative pl-[74px]">
                <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-surface border border-border overflow-hidden transition-all duration-250 group-hover:scale-105 group-hover:shadow-[0_6px_16px_rgba(154,51,36,0.18)]">
                  {e.logo ? (
                    <div
                      role="img"
                      aria-label={e.org}
                      style={{
                        backgroundImage: `url(${e.logo})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        margin: '8px',
                        width: 'calc(100% - 16px)',
                        height: 'calc(100% - 16px)',
                      }}
                    />
                  ) : (
                    <span className="font-display text-sm font-bold italic text-muted">{e.initials}</span>
                  )}
                </div>

                <article className="border-b border-border/80 pb-5 pt-1 transition-colors duration-300 group-hover:border-accent/30">
                  <h3 className="text-xl font-bold leading-[1.16] text-text sm:text-[1.4rem]">
                    {e.headline}
                  </h3>

                  <p className="mt-1.5 text-[15px] font-semibold leading-snug text-muted">
                    {e.role} · <LinkedLabel href={e.orgLink}>{e.org}</LinkedLabel>
                    {e.team && (
                      <> · <LinkedLabel href={e.teamLink}>{e.team}</LinkedLabel></>
                    )}
                    {' · '}
                    <span className="font-mono text-[12.5px] text-accent">{e.dates}</span>
                  </p>

                  {e.location && (
                    <p className="mt-1 text-sm text-muted-2">{e.location}</p>
                  )}

                  <p className="mt-3 text-sm leading-[1.72] text-text/85 sm:text-base max-w-[680px]">
                    {e.summary}
                  </p>

                  {e.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-xs text-muted transition-colors duration-200 group-hover:border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
