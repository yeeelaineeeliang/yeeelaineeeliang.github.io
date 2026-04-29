const credibilityFacts = [
  ['Education', 'M.S. Computer Science, UChicago'],
  ['Foundation', 'B.A. Statistics & Data Science, Berkeley'],
  ['Research', 'HRI memory engine, Temi robot'],
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center section">
      <div className="container-content">
        <div className="fade-in grid md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left - text content */}
          <div className="max-w-xl">
            <p className="font-mono text-accent text-sm mb-3 tracking-wider">Elaine Liang</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
              I build AI systems that have to explain themselves.
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-14 bg-border" />
              <p className="font-mono text-muted text-sm tracking-wide">
                Data &amp; AI Engineer · M.S. Computer Science
              </p>
            </div>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
              I work on retrieval, model explanation, memory, and data pipelines: fraud reports
              with SHAP and FAISS, a LangGraph career coach, and a robot rapport system that keeps
              track of prior conversations.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" download className="btn-outline">Resume ↓</a>
              <a href="#contact" className="btn-outline">Say Hi</a>
            </div>
          </div>

          {/* Right - profile photo and evidence */}
          <div className="hidden md:block w-[360px]">
            <img
              src="/profile.jpg"
              alt="Elaine Liang"
              className="h-[390px] w-full rounded-xl object-cover border border-border"
              style={{ objectPosition: 'center 15%' }}
            />

            <div className="mt-4 rounded-xl border border-border bg-surface p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-3">
                Background
              </p>
              <dl className="grid grid-cols-1 gap-2">
                {credibilityFacts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[88px_1fr] gap-3 text-sm">
                    <dt className="font-mono text-xs text-muted-2">{label}</dt>
                    <dd className="text-text leading-snug">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
