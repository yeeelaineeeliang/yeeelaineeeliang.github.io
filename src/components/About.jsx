const NOTICE_ITEMS = [
  {
    title: 'Repeated work',
    description: 'Tasks people do again and again',
    icon: 'loop',
  },
  {
    title: 'Weak evidence',
    description: 'Decisions made with missing data',
    icon: 'document',
  },
  {
    title: 'Verification gaps',
    description: 'Answers people need a way to check',
    icon: 'check',
  },
]

const APPROACH_STEPS = [
  {
    n: '01',
    verb: 'Observe',
    label: 'Start with the decision',
    question: 'What choice does this system need to support?',
  },
  {
    n: '02',
    verb: 'Map',
    label: 'Map the evidence',
    question: 'What data supports the answer, and what is still missing?',
  },
  {
    n: '03',
    verb: 'Build',
    label: 'Build the fallback path',
    question: 'What should the system show when the answer is uncertain?',
  },
]

const TOOLKIT_GROUPS = [
  {
    label: 'Data & ML',
    items: ['Python', 'PyTorch', 'PySpark', 'NumPy', 'FAISS'],
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

function NoticeIcon({ type }) {
  const common = { width: 14, height: 14, viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true }
  if (type === 'loop') {
    return (
      <svg {...common}>
        <path
          d="M4 8a5 5 0 1 1 1.5 3.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M4 11.5V8h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'document') {
    return (
      <svg {...common}>
        <rect x="4" y="2.5" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.5 6.5h5M6.5 9h5M6.5 11.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9.2l1.8 1.8L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
        <div className="fade-in mb-5 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-wide text-accent mb-3">How I think</p>
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.15]">
            I look for{' '}
            <span className="bg-accent/[0.12] rounded-md px-1.5 py-0.5 box-decoration-clone">
              the gap
            </span>{' '}
            between how people actually work and how the system expects them to work.
          </h2>
        </div>

        {/* Notice — question panel */}
        <div className="fade-in mb-5">
          <div className="rounded-xl border border-border/80 border-t border-t-accent/25 bg-bg/60 shadow-sm p-4">
            <p className="text-lg font-bold text-text mb-3">Before I build, I usually look for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
              {NOTICE_ITEMS.map(({ title, description, icon }) => (
                <div key={title} className="pt-3 first:pt-0 sm:pt-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/[0.06] text-accent/70 mb-2">
                    <NoticeIcon type={icon} />
                  </div>
                  <p className="text-base font-semibold text-text mb-1">{title}</p>
                  <p className="text-sm text-text/70 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="fade-in mb-4">
          <p className="text-lg font-semibold text-text mb-3">
            How I approach the build
          </p>
          <div className="grid lg:grid-cols-[3fr_2fr] gap-1 items-stretch">
            <div className="relative max-w-none">
              <div aria-hidden="true" className="absolute left-[12px] top-2 bottom-2 w-px bg-border/80" />
              <div className="flex flex-col gap-1.5">
                {APPROACH_STEPS.map(({ n, verb, label, question }) => (
                  <div key={label} className="flex gap-4">
                    <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-alt font-mono text-xs font-bold text-accent">
                      {n}
                    </span>
                    <div className="pt-1">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent mb-1">{verb}</p>
                      <p className="font-bold text-base text-text mb-1">{label}</p>
                      <p className="text-sm text-text/80 leading-relaxed">{question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems sketch — directly mirrors the three steps: Observe, Map, Build */}
            <div className="relative hidden h-full items-center justify-center lg:flex">
              <svg
                aria-hidden="true"
                width="80%"
                height="80%"
                viewBox="0 0 160 160"
                fill="none"
              >
                <path
                  d="M22 22 C 75 22, 38 80, 88 80 C 138 80, 102 138, 152 138"
                  stroke="rgba(163,63,47,0.18)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx="22" cy="22" r="4.5" fill="rgba(163,63,47,0.55)" />
                <circle cx="88" cy="80" r="4.5" fill="rgba(163,63,47,0.55)" />
                <circle cx="152" cy="138" r="4.5" fill="rgba(163,63,47,0.55)" />
                <text x="31" y="18" className="font-mono font-semibold" fontSize="9" letterSpacing="0.3" fill="rgba(163,63,47,0.85)">
                  OBSERVE
                </text>
                <text x="97" y="76" className="font-mono font-semibold" fontSize="9" letterSpacing="0.3" fill="rgba(163,63,47,0.85)">
                  MAP
                </text>
                <text x="105" y="134" className="font-mono font-semibold" fontSize="9" letterSpacing="0.3" fill="rgba(163,63,47,0.85)">
                  BUILD
                </text>
              </svg>
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
                      className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text/80 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/[0.06]"
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
