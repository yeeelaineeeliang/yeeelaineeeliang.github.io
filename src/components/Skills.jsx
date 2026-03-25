import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg-alt">
      <div className="container-content">
        <h2 className="section-title fade-in">Skills</h2>

        <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(cat => (
            <div
              key={cat.category}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-200"
            >
              <p className="font-mono text-sm text-accent uppercase tracking-widest mb-3">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(s => (
                  <span
                    key={s.name}
                    className={s.tier === 'production' ? 'chip-production' : 'chip-working'}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="fade-in flex flex-wrap items-center gap-6 mt-6">
          <p className="text-sm text-muted font-mono">Key:</p>
          <div className="flex items-center gap-2">
            <span className="chip-production">production</span>
            <span className="text-sm text-muted">— shipping experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="chip-working">working</span>
            <span className="text-sm text-muted">— working knowledge</span>
          </div>
        </div>
      </div>
    </section>
  )
}
