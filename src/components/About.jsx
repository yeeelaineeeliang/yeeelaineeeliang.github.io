const APPROACH_STEPS = [
  {
    n: '01',
    verb: 'Observe',
    problem: 'Repeated work',
    question: 'What choice does this system need to support?',
  },
  {
    n: '02',
    verb: 'Map',
    problem: 'Weak evidence',
    question: 'What data supports the answer, and what is still missing?',
  },
  {
    n: '03',
    verb: 'Build',
    problem: 'Verification gaps',
    question: 'What should the system show when the answer is uncertain?',
  },
]

const TOOLKIT_GROUPS = [
  {
    label: 'Data & ML',
    items: ['Python', 'SQL', 'PyTorch', 'PySpark', 'NumPy', 'FAISS'],
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
    <section
      id="about"
      className="section relative pt-14 bg-bg-alt"
      style={{
        background: `
          radial-gradient(circle at 84% 16%, rgba(222, 152, 118, 0.16), transparent 30%),
          radial-gradient(circle at 8% 86%, rgba(98, 142, 133, 0.1), transparent 34%),
          linear-gradient(180deg, #eff5f0 0%, #f4f2eb 100%)
        `,
      }}
    >
      <div aria-hidden="true" className="ambient-layer">
        <div
          className="ambient-orb ambient-orb-slow h-[14rem] w-[14rem] md:h-[18rem] md:w-[18rem]"
          style={{
            right: '6%',
            top: '4%',
            background: 'radial-gradient(circle, rgba(210, 139, 108, 0.16), rgba(210, 139, 108, 0.02) 68%, transparent 74%)',
          }}
        />
        <div className="ambient-contour opacity-80" />
        <div
          className="ambient-grid"
          style={{
            inset: '0 0 0 auto',
            width: '58%',
            maskImage: 'linear-gradient(to left, black 56%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 56%, transparent 100%)',
            opacity: 0.55,
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(163, 63, 47, 0.05), transparent 34%), radial-gradient(circle, rgba(94, 111, 104, 0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 28px 28px',
          zIndex: 0,
        }}
      />

      <div className="container-content" style={{ position: 'relative', zIndex: 1 }}>

        {/* Opening */}
        <div className="fade-in mb-6 max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">How I think</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-[1.15]">
            I look for{' '}
            <span className="bg-accent/[0.12] rounded-md px-1.5 py-0.5 box-decoration-clone">
              the gap
            </span>{' '}
            between how people actually work and how the system expects them to work.
          </h2>
        </div>

        {/* How I work — merged problem + approach */}
        <div className="fade-in mb-8">
          <p className="text-lg font-semibold text-text mb-3">How I approach the build</p>
          <div className="rounded-xl border border-border/80 border-t border-t-accent/25 bg-bg/60 shadow-sm p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
              {APPROACH_STEPS.map(({ n, verb, problem, question }) => (
                <div key={n} className="pt-4 first:pt-0 sm:pt-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-alt font-mono text-xs font-bold text-accent">
                      {n}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent/80">{verb}</span>
                  </div>
                  <p className="text-base font-semibold text-text mb-1">{problem}</p>
                  <p className="text-sm text-text/70 leading-relaxed">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toolkit */}
        <div className="fade-in border-t border-border/60 pt-6">
          <p className="text-lg font-semibold text-text mb-3">What I build with</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TOOLKIT_GROUPS.map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-text/85 mb-2">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(name => (
                    <span
                      key={name}
                      className="rounded-full border border-border/70 bg-bg/70 px-2.5 py-0.5 font-mono text-xs font-medium text-muted transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                    >
                      {name}
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
