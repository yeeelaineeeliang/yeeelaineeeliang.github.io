const interests = [
  { icon: '⚡', label: 'AI Automation' },
  { icon: '📊', label: 'Data Engineering' },
  { icon: '🔎', label: 'RAG & Retrieval' },
  { icon: '💡', label: 'Fintech AI' },
  { icon: '🤝', label: 'Human-Centered AI' },
]

export default function About() {
  return (
    <section id="about" className="section bg-bg-alt">
      <div className="container-content">
        <h2 className="section-title fade-in">About Me</h2>

        <div className="fade-in grid md:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Bio — condensed to one paragraph */}
          <div>
            <p className="text-muted leading-relaxed text-base mb-8">
              I studied statistics and data science at UC Berkeley, then moved into software
              engineering because I kept noticing that the hardest problems weren't in the models
              themselves — they were in getting clean data, reaching real users, and building
              systems people actually trust. Now I spend my time connecting data to decisions,
              shipping AI tools for fraud investigation, peer support, and robotics research, and
              designing automation workflows that quietly handle the repetitive work so people can
              focus on what matters.
            </p>

            {/* Interest cards — visual grid replacing text list */}
            <p className="font-mono text-xs text-muted-2 uppercase tracking-widest mb-4">
              What I'm into right now
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {interests.map(i => (
                <div
                  key={i.label}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors duration-200"
                >
                  <span className="text-lg">{i.icon}</span>
                  <span className="text-sm font-medium text-text">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar — education */}
          <div>
            <p className="font-mono text-xs text-muted-2 uppercase tracking-widest mb-3">
              Education
            </p>
            <div className="space-y-4 text-base">
              <div className="pl-3 border-l-2 border-accent/40">
                <p className="text-text font-semibold">M.S. Software Engineering</p>
                <p className="text-muted text-sm mt-0.5">University of Chicago · 2025–2026</p>
              </div>
              <div className="pl-3 border-l-2 border-teal/40">
                <p className="text-text font-semibold">B.A. Statistics &amp; Data Science</p>
                <p className="text-muted text-sm mt-0.5">UC Berkeley · 2021–2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
