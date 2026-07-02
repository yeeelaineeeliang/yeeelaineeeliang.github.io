import MagneticButton from './MagneticButton'

const credibilityFacts = [
  { label: 'Current', value: 'M.S. Computer Science, UChicago' },
  { label: 'Undergraduate', timeline: '2021-2025', value: 'B.A. Statistics & B.A. Data Science, UC Berkeley' }
]

const H1_WORDS = ["Hi,", "I'm", "Elaine!"]

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center section">
      <div className="container-content">
        <div className="grid md:grid-cols-[minmax(0,1fr)_440px] lg:grid-cols-[minmax(0,1fr)_500px] gap-10 lg:gap-12 items-center">

          {/* Left - text content */}
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
              {H1_WORDS.map((word, i) => (
                <span
                  key={word}
                  className="word-up mr-[0.22em] last:mr-0"
                  style={{ animationDelay: `${i * 130}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <div className="animate-in mb-6" style={{ animationDelay: '420ms' }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 font-mono text-sm font-medium text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Data &amp; AI Engineer
              </span>
            </div>

            <div className="animate-in" style={{ animationDelay: '540ms' }}>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
                I&apos;m a Master&apos;s student in Computer Science at the University of Chicago. I build AI
                products end-to-end across grounded agents, retrieval systems, and full-stack data pipelines.
              </p>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
                Right now, I&apos;m finishing CityLiving Sim, a civic-data AI advisor that helps people
                decide where to live in Chicago, with the goal of expanding it to cities around the world.
              </p>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
                Before UChicago, I studied Statistics and Data Science at UC Berkeley. I interned at Wells
                Fargo building customer segmentation models for acquisition campaigns, and at Dawnrise where
                I replaced a 40-hour weekly research process with a Python + GPT pipeline that ran in 2.
              </p>
            </div>

            <div className="animate-in flex flex-wrap gap-3" style={{ animationDelay: '700ms' }}>
              <MagneticButton>
                <button type="button" onClick={() => onNavigate('projects')} className="btn-primary">
                  View Projects
                </button>
              </MagneticButton>
              <MagneticButton>
                <a href="https://citysim-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  CityLiving Sim
                </a>
              </MagneticButton>
              <button type="button" onClick={() => onNavigate('contact')} className="btn-ghost">
                Contact
              </button>
            </div>
          </div>

          {/* Right - profile photo and education */}
          <div className="animate-in hidden md:block w-full" style={{ animationDelay: '250ms' }}>
            <div className="mx-auto w-full max-w-[400px] -rotate-1 rounded-xl border border-border bg-surface p-2 shadow-[0_32px_80px_rgba(31,42,36,0.18)] transition-all duration-500 hover:rotate-0 hover:shadow-[0_40px_100px_rgba(163,63,47,0.12)]">
              <img
                src="/profile.jpg"
                alt="Elaine Liang"
                className="h-[400px] w-full rounded-lg object-cover"
                style={{ objectPosition: 'center 80%' }}
              />
            </div>

            <div className="mt-5 rounded-xl border border-border bg-surface/95 p-4 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-3">
                Education
              </p>
              <dl className="grid grid-cols-1 gap-2">
                {credibilityFacts.map(({ label, value, timeline }) => (
                  <div key={`${label}-${value}`} className="grid gap-1 text-xs xl:text-sm">
                    <dt className="font-mono text-xs text-muted-2">
                      {label}
                      {timeline && <span className="ml-2"> {timeline}</span>}
                    </dt>
                    <dd className="text-text leading-snug whitespace-nowrap">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex" aria-hidden="true">
        <span className="h-px w-10 bg-border" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        <span className="h-px w-10 bg-border" />
      </div>
    </section>
  )
}
