import { skills } from '../data/skills'

function splitSkills(items) {
  return {
    production: items.filter(s => s.tier === 'production').map(s => s.name),
    working: items.filter(s => s.tier !== 'production').map(s => s.name),
  }
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg-alt">
      <div className="container-content">
        <h2 className="section-title fade-in">Skills</h2>

        <div className="fade-in divide-y divide-border border-y border-border">
          {skills.map(cat => {
            const grouped = splitSkills(cat.skills)

            return (
              <div key={cat.category} className="grid md:grid-cols-[180px_1fr] gap-4 py-5">
                <p className="font-mono text-sm text-accent uppercase tracking-widest">
                  {cat.category}
                </p>
                <div className="space-y-2 text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-text">Production: </span>
                    <span className="text-muted">{grouped.production.join(', ')}</span>
                  </p>
                  {grouped.working.length > 0 && (
                    <p>
                      <span className="font-semibold text-text">Working: </span>
                      <span className="text-muted">{grouped.working.join(', ')}</span>
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
