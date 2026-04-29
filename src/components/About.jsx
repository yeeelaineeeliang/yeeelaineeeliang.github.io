const currentFocus = [
  'RAG and retrieval systems',
  'Model explanations for high-pressure workflows',
  'Memory in human-robot interaction',
  'Data pipelines that survive real usage',
  'Automation for repetitive operational work',
]

export default function About() {
  return (
    <section id="about" className="section bg-bg-alt">
      <div className="container-content">
        <h2 className="section-title fade-in">About Me</h2>

        <div className="fade-in grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
            <p className="text-muted leading-relaxed text-base mb-8">
              I studied statistics at Berkeley, but the interesting problems kept turning out to be
              systems problems: using data to understand what is happening, then building tools
              that turn those insights into something people can use. That pulled me into software.
              Now I am interested in products that use AI, agents, and automation to make work
              easier: a fraud investigation copilot, a peer support app, and a robot rapport engine
              that retrieves context from earlier conversations.
            </p>

            <p className="font-mono text-xs text-muted-2 uppercase tracking-widest mb-4">
              Current focus
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {currentFocus.map(item => (
                <li key={item} className="flex gap-2 text-sm text-muted leading-relaxed">
                  <span className="mt-[0.65em] h-px w-4 shrink-0 bg-border" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-2 uppercase tracking-widest mb-3">
              Education
            </p>
            <div className="space-y-4 text-base">
              <div className="pl-3 border-l-2 border-accent/40">
                <p className="text-text font-semibold">M.S. Computer Science</p>
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
