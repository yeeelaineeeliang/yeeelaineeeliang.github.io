const currentFocus = [
  'RAG and retrieval systems',
  'Civic-data simulation products',
  'Model explanations for high-pressure workflows',
  'Memory in human-robot interaction',
  'Data pipelines that survive real usage',
]

export default function About() {
  return (
    <section id="about" className="section bg-bg-alt">
      <div className="container-content">
        <h2 className="section-title fade-in">About Me</h2>

        <div className="fade-in grid md:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
            <p className="text-muted leading-relaxed text-base mb-8">
              A lot of my projects start from a practical gap I ran into and wanted to make
              usable. Most recently, I built CityLiving Sim, a Chicago neighborhood simulator that
              combines civic datasets, maps, Street View, and a grounded AI advisor to help people
              understand what daily life could feel like before choosing where to live. That work
              pushed me deeper into data quality, schema normalization, and product interfaces that
              translate raw civic data into decisions.
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
                <p className="text-text font-semibold">B.A. Statistics &amp; B.A. Data Science</p>
                <p className="text-muted text-sm mt-0.5">UC Berkeley · 2021–2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
