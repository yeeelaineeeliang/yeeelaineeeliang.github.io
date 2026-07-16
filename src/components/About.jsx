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
    items: ['Python', 'SQL', 'MySQL', 'PyTorch', 'scikit-learn', 'XGBoost', 'SHAP', 'PySpark', 'NumPy', 'FAISS'],
  },
  {
    label: 'Agents & APIs',
    items: ['LangGraph', 'Claude API', 'FastAPI', 'Streamlit'],
  },
  {
    label: 'Product',
    items: ['TypeScript', 'Next.js', 'Supabase', 'Clerk'],
  },
  {
    label: 'Infra & MLOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
]

export default function About() {
  return (
    <section id="about" className="section bg-bg-alt">
      <div className="container-content">

        <div className="fade-in mb-6 max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">How I Think</p>
          <h2 className="text-[clamp(30px,3.4vw,42px)] font-semibold leading-[1.24] max-w-[820px]">
            I look for{' '}
            <span className="bg-accent/[0.12] rounded px-2 py-0.5 box-decoration-clone">
              the gap
            </span>{' '}
            between how people actually work and how the system expects them to work.
          </h2>
        </div>

        <div className="fade-in mb-8">
          <p className="mb-3 text-[19px] font-semibold text-text">How I approach the build</p>
          <div className="rounded-[4px] border border-border border-t-2 border-t-gold bg-surface p-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
              {APPROACH_STEPS.map(({ n, verb, problem, question }) => (
                <div key={n} className="p-8 transition-colors duration-300 hover:bg-accent/[0.035]">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="font-display italic text-lg text-accent">{n}</span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">{verb}</span>
                  </div>
                  <p className="mb-2 text-[17px] font-bold text-text">{problem}</p>
                  <p className="text-sm text-muted leading-relaxed">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fade-in border-t border-border pt-14">
          <p className="mb-6 text-[19px] font-semibold text-text">What I build with</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TOOLKIT_GROUPS.map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] text-text mb-3">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(name => (
                    <span
                      key={name}
                      className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-medium text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-px"
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
