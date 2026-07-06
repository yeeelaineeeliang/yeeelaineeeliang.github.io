const OBSERVATIONS = [
  {
    n: '01',
    headline: 'Manual processes that persist because no one has rebuilt them',
    body: 'Sometimes it is a 40-hour research workflow with an obvious automation waiting inside it.',
  },
  {
    n: '02',
    headline: 'Decisions disconnected from the data that could inform them',
    body: 'And where the data already exists somewhere, just not connected to the decision.',
  },
  {
    n: '03',
    headline: 'AI recommendations people cannot inspect',
    body: 'A recommendation without a reason cannot be trusted. A lot changes when the reason is visible.',
  },
]

const APPROACH_STEPS = [
  {
    label: 'Start with the person',
    body: 'Understand the decision they are trying to make, not only the feature they first request.',
  },
  {
    label: 'Map what already exists',
    body: 'Sparse data is a constraint to surface, not hide. Gaps in the data are part of the answer.',
  },
  {
    label: 'Build with fallbacks',
    body: 'A tool that fails silently is worse than no tool. Reliability matters more than capability.',
  },
]

const TOOLKIT_GROUPS = [
  {
    label: 'Data & ML',
    items: ['Python', 'PyTorch', 'PySpark', 'FAISS'],
  },
  {
    label: 'Agents & APIs',
    items: ['LangGraph', 'Claude API', 'FastAPI'],
  },
  {
    label: 'Product',
    items: ['TypeScript', 'Next.js', 'Supabase'],
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-bg-alt">
      <div className="container-content">

        {/* Opening */}
        <div className="fade-in mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">How I think</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
            I&apos;m drawn to situations where people are working around systems that should work better.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Most of my projects start with a gap I encountered firsthand. I look at what data already
            exists, what the person actually needs, and what system could connect the two.
          </p>
        </div>

        {/* Observations — three cards */}
        <div className="fade-in mb-14">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-6">
            What I tend to notice
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OBSERVATIONS.map(({ n, headline, body }) => (
              <div key={n} className="rounded-xl border border-border bg-bg p-5">
                <span className="font-mono text-xs text-muted-2/50 block mb-3 select-none">{n}</span>
                <p className="text-base font-semibold text-text leading-snug mb-2">{headline}</p>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="fade-in mb-14 border-t border-border pt-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-6">
            How I approach new problems
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {APPROACH_STEPS.map(({ label, body }) => (
              <div key={label}>
                <p className="font-semibold text-base text-text mb-2">{label}</p>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently + Curious */}
        <div className="fade-in grid md:grid-cols-2 gap-8 border-t border-border pt-10 mb-10">
          <div className="rounded-xl border border-accent/15 bg-accent/[0.05] p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
              Currently
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-1.5">
                  Building
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="font-semibold text-text">CityLiving Sim</strong>, a grounded AI
                  advisor that helps people compare Chicago neighborhoods using civic data.
                </p>
                <a
                  href="https://citysim-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline transition-colors duration-200 mt-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  CityLiving Sim — live
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-1.5">
                  Researching
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  How memory and self-disclosure affect rapport with a Temi social robot at
                  UChicago&apos;s HRI Lab.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-3">
              Curious about
            </p>
            <ul className="space-y-2.5">
              <li className="text-sm leading-relaxed text-muted">
                How AI systems stay useful when their data is sparse, outdated, or wrong
              </li>
              <li className="text-sm leading-relaxed text-muted">
                What makes people trust or distrust an automated recommendation
              </li>
              <li className="text-sm leading-relaxed text-muted">
                When grounding changes model behavior rather than only its presentation
              </li>
            </ul>
          </div>
        </div>

        {/* Toolkit */}
        <div className="fade-in border-t border-border pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-3">
            How I work
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            I work across the full path from data to product. That usually means Python for pipelines
            and models, TypeScript for the product layer, and APIs that make the system usable outside
            a notebook.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TOOLKIT_GROUPS.map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-2">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span
                      key={item}
                      className="rounded-md border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
