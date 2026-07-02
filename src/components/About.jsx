// Content sourced from existing project decisions, experience achievements, and portfolio voice.
// Lines near [TODO] are editorial inferences — Elaine should verify before publishing.

const OBSERVATIONS = [
  {
    n: '01',
    headline: 'Processes that exist only because nobody replaced them',
    body: 'Usually a 40-hour manual workflow with an obvious automation waiting inside it.',
  },
  {
    n: '02',
    headline: 'Decisions that need data they don\'t have',
    body: 'And where the data already exists somewhere — just not connected to the decision.',
  },
  {
    n: '03',
    headline: 'AI advice people can\'t interrogate',
    body: 'A recommendation without a reason can\'t be trusted. A lot changes when the reason is visible.',
  },
]

const APPROACH_STEPS = [
  {
    label: 'Start with the person',
    color: 'text-accent',
    body: 'What do they actually need to make a decision — not what they say they need.',
  },
  {
    label: 'Map what already exists',
    color: 'text-teal',
    body: 'Sparse data is a constraint to surface, not hide. Gaps in the data are part of the answer.',
  },
  {
    label: 'Build with fallbacks',
    color: 'text-muted',
    body: 'A tool that fails silently is worse than no tool. Reliability matters more than capability.',
  },
]

const TOOLKIT = [
  'Python', 'TypeScript', 'React / Next.js',
  'LangGraph', 'Claude API', 'FAISS & embeddings',
  'Supabase', 'Swift', 'Kotlin',
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
            Most of my projects start from a gap I ran into — then I figure out what data already
            exists, what&apos;s actually needed, and what connects the two.
          </p>
        </div>

        {/* Numbered observations */}
        <div className="fade-in mb-14">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-8">
            What I tend to notice
          </p>
          <div className="space-y-8">
            {OBSERVATIONS.map(({ n, headline, body }) => (
              <div
                key={n}
                className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 items-baseline"
              >
                <span className="font-mono text-xs text-muted-2/50 select-none pt-1">{n}</span>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-text leading-snug mb-1">
                    {headline}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach — three horizontal steps */}
        <div className="fade-in mb-14 border-t border-border pt-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-6">
            How I approach new problems
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {APPROACH_STEPS.map(({ label, color, body }) => (
              <div key={label}>
                <p className={`font-semibold text-base mb-2 ${color}`}>{label}</p>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently + Curious */}
        <div className="fade-in grid md:grid-cols-2 gap-10 border-t border-border pt-10 mb-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-3">
              Currently
            </p>
            <p className="text-sm leading-relaxed text-muted mb-4">
              Finishing{' '}
              <strong className="font-semibold text-text">CityLiving Sim</strong> — a grounded AI
              advisor for choosing where to live in Chicago, built on real civic datasets: transit
              reliability, crime patterns, 311 response times, housing. Also doing HRI research at
              UChicago — engineering memory and rapport for a Temi robot in a longitudinal study.
            </p>
            <a
              href="https://citysim-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline transition-colors duration-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              CityLiving Sim — live
            </a>
          </div>
          <div>
            {/* [TODO: Elaine should review/expand the "Curious about" paragraph] */}
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-3">
              Curious about
            </p>
            <p className="text-sm leading-relaxed text-muted">
              How AI systems stay useful when their data is sparse or wrong. What makes people
              trust — or not trust — an automated recommendation. Where grounding actually changes
              behavior versus where it&apos;s just presentation.
            </p>
          </div>
        </div>

        {/* Toolkit */}
        <div className="fade-in border-t border-border pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-2 mb-3">
            How I work
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
            I reach for the tool that fits the problem. Most of what I ship is Python and TypeScript,
            though I&apos;ve also built mobile apps in Swift and Kotlin.
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLKIT.map(skill => (
              <span
                key={skill}
                className="rounded-md border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
