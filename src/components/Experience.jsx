import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-content">
        <h2 className="section-title fade-in">Experience</h2>

        <ol className="fade-in relative pl-8 space-y-12">
          {/* Connecting line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-border" />

          {experience.map((e, i) => (
            <li key={i} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-8 top-2 flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-accent/15 group-hover:bg-accent/25 transition-colors duration-300" />
                <span className="relative w-3 h-3 rounded-full bg-accent ring-2 ring-bg" />
              </span>

              <div className="bg-surface border border-border rounded-2xl p-5 shadow-sm group-hover:border-accent/30 group-hover:shadow-md transition-all duration-200">
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
                      <span className="text-teal shrink-0 mt-0.5 text-sm">▸</span>
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
