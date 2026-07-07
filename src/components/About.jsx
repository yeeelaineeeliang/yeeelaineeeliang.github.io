const NOTICE_QUESTIONS = [
  {
    n: '01',
    question: 'What work keeps repeating?',
    answer: 'Manual steps often reveal a simpler automation path.',
  },
  {
    n: '02',
    question: 'What decision needs better evidence?',
    answer: 'Useful data can exist while the decision still runs on old assumptions.',
  },
  {
    n: '03',
    question: 'What happens when the answer is wrong?',
    answer: 'I look for evidence, fallbacks, and a way for people to check the answer.',
  },
]

const APPROACH_STEPS = [
  {
    n: '01',
    verb: 'Observe',
    label: 'Find the decision',
    body: 'Understand what someone needs to decide before choosing the tool.',
  },
  {
    n: '02',
    verb: 'Map',
    label: 'Map the evidence',
    body: 'Look at available data, missing data, and assumptions already inside the workflow.',
  },
  {
    n: '03',
    verb: 'Build',
    label: 'Build the fallback path',
    body: 'Show weak answers clearly instead of hiding them behind a confident interface.',
  },
]

const TOOLKIT_GROUPS = [
  {
    label: 'Data & ML',
    items: ['Python', 'PyTorch', 'PySpark', 'Numpy', 'FAISS'],
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
          radial-gradient(circle at 85% 15%, rgba(190, 75, 52, 0.04), transparent 32%),
          radial-gradient(circle at 10% 85%, rgba(47, 143, 131, 0.06), transparent 36%),
          #EDF4F1
        `,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(94, 111, 104, 0.02) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 0,
        }}
      />

      <div className="container-content" style={{ position: 'relative', zIndex: 1 }}>

        {/* Opening */}
        <div className="fade-in mb-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3">How I think</p>
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
            I notice{' '}
            <span className="bg-accent/10 rounded px-1">broken workflows</span>{' '}
            before they look like technical problems.
          </h2>
        </div>

        {/* Notice — question panel */}
        <div className="fade-in mb-8">
          <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted mb-3">
            What I tend to notice
          </p>
          <div className="rounded-xl border border-border bg-bg/60 p-6">
            <p className="text-base font-bold text-text mb-5">Before I build, I usually ask:</p>
            <div className="border-l border-border/50 pl-5 divide-y divide-border/25">
              {NOTICE_QUESTIONS.map(({ n, question, answer }) => (
                <div key={n} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="font-mono text-xs text-accent/40 pt-0.5 shrink-0">{n}</span>
                  <div>
                    <p className="text-base font-semibold text-text mb-1">{question}</p>
                    <p className="text-sm text-muted leading-relaxed">{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="fade-in mb-8">
          <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted mb-6">
            How I approach the build
          </p>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-center">
            <div className="relative max-w-none">
              <div aria-hidden="true" className="absolute left-[13px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-3">
                {APPROACH_STEPS.map(({ n, verb, label, body }) => (
                  <div key={label} className="flex gap-4">
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-bg-alt font-mono text-xs font-semibold text-accent">
                      {n}
                    </span>
                    <div className="pt-1">
                      <p className="font-mono text-[10px] uppercase tracking-wide text-accent mb-1">{verb}</p>
                      <p className="font-bold text-base text-text mb-1">{label}</p>
                      <p className="text-sm text-muted leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faint systems sketch, aligned to the three process rows: Observe/Map/Build as Input/Decision/Fallback */}
            <svg
              aria-hidden="true"
              className="hidden lg:block"
              width="100%"
              height="140"
              viewBox="0 0 200 140"
              fill="none"
            >
              <path
                d="M20 20 C 70 20, 30 70, 80 70 C 130 70, 90 120, 150 120"
                stroke="rgba(94,111,104,0.4)"
                strokeWidth="1.25"
                strokeDasharray="3 3"
              />
              <circle cx="20" cy="20" r="4.5" fill="rgba(163,63,47,0.6)" />
              <circle cx="80" cy="70" r="4.5" fill="rgba(163,63,47,0.6)" />
              <circle cx="150" cy="120" r="4.5" fill="rgba(163,63,47,0.6)" />
              <text x="30" y="16" className="font-mono" fontSize="9" letterSpacing="0.5" fill="rgba(94,111,104,0.85)">
                INPUT
              </text>
              <text x="90" y="66" className="font-mono" fontSize="9" letterSpacing="0.5" fill="rgba(94,111,104,0.85)">
                DECISION
              </text>
              <text x="100" y="134" className="font-mono" fontSize="9" letterSpacing="0.5" fill="rgba(94,111,104,0.85)">
                FALLBACK
              </text>
            </svg>
          </div>
        </div>

        {/* Toolkit */}
        <div className="fade-in border-t border-border/40 pt-6">
          <p className="text-sm text-muted mb-2">What I build with</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TOOLKIT_GROUPS.map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10px] font-medium uppercase tracking-wide text-muted mb-1.5">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span
                      key={item}
                      className="rounded-md border border-border/80 bg-bg px-2 py-0.5 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/40 hover:bg-accent/[0.06]"
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
