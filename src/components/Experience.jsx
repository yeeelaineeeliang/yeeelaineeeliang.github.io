import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <h2 className="section-title fade-in">Experience</h2>

        <ol className="fade-in relative pl-8 space-y-10">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />

          {experience.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-8 top-2 flex items-center justify-center">
                <span className="relative w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg" />
              </span>

              <div className="border-b border-border pb-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-bold text-xl">{e.role}</h3>
                  <span className="font-mono text-sm text-accent">{e.dates}</span>
                </div>
                <p className="text-base text-muted mb-4">
                  {e.org}
                  {e.location && <span className="ml-2 text-muted-2">· {e.location}</span>}
                </p>
                <ul className="space-y-2">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-base text-muted leading-relaxed">
                      <span className="text-muted-2 shrink-0 mt-0.5">-</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
