import MagneticButton from './MagneticButton'

const H1_WORDS = ['Hi,', "I'm", 'Elaine!']
const TECH_META = ['Python · TypeScript · React · LangGraph · Claude API · Supabase']

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-65px)] flex items-center section">
      <div className="container-content w-full">
        <div className="grid md:grid-cols-[minmax(0,1fr)_400px] lg:grid-cols-[minmax(0,1fr)_440px] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="max-w-lg">

            {/* Mobile-only circular portrait */}
            <div className="mb-6 md:hidden">
              <img
                src="/profile.jpg"
                alt="Elaine Liang"
                className="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-border"
                style={{ objectPosition: 'center 80%' }}
              />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
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

            <div className="animate-in mb-5" style={{ animationDelay: '420ms' }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 font-mono text-sm font-medium text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Data &amp; AI Engineer
              </span>
            </div>

            {/* Positioning statement */}
            <div className="animate-in mb-5" style={{ animationDelay: '520ms' }}>
              <p className="text-2xl sm:text-3xl font-bold leading-snug text-text">
                I build AI and data systems people can actually rely on.
              </p>
            </div>

            {/* Supporting paragraph — no technical inventory */}
            <div className="animate-in mb-5" style={{ animationDelay: '640ms' }}>
              <p className="text-base leading-relaxed text-muted">
                Most of my projects start with a problem that needed more than a model — one that also needed
                reliable data, explainable reasoning, and safeguards for when things go wrong.
                M.S. Computer Science at UChicago.
              </p>
            </div>

            {/* Compact tech metadata row */}
            <div className="animate-in mb-8" style={{ animationDelay: '720ms' }}>
              <p className="font-mono text-xs text-muted-2">{TECH_META}</p>
            </div>

            {/* CTAs */}
            <div className="animate-in flex flex-wrap gap-3" style={{ animationDelay: '800ms' }}>
              <MagneticButton>
                <button type="button" onClick={() => onNavigate('projects')} className="btn-primary">
                  See my work →
                </button>
              </MagneticButton>
              <MagneticButton>
                <button type="button" onClick={() => onNavigate('contact')} className="btn-outline">
                  Get in touch
                </button>
              </MagneticButton>
            </div>
          </div>

          {/* Right — editorial portrait (desktop only) */}
          <div className="animate-in hidden md:block" style={{ animationDelay: '250ms' }}>
            <div className="relative">
              <div className="-rotate-1 rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(31,42,36,0.16)] transition-all duration-500 hover:rotate-0 hover:shadow-[0_32px_80px_rgba(163,63,47,0.12)]">
                <img
                  src="/profile.jpg"
                  alt="Elaine Liang"
                  className="w-full object-cover"
                  style={{ height: '460px', objectPosition: 'center 80%' }}
                />
              </div>
              <div className="mt-4 space-y-1.5 pl-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-2 w-12 shrink-0">Now</span>
                  <span className="text-sm text-muted">M.S. Computer Science — UChicago</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-2 w-12 shrink-0">2021–25</span>
                  <span className="text-sm text-muted">B.A. Statistics &amp; Data Science — UC Berkeley</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => onNavigate('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-2 hover:text-accent transition-colors duration-200"
        aria-label="Scroll to learn more about Elaine"
      >
        <span className="h-px w-8 bg-border/70 hover:bg-accent/40 transition-colors duration-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        <span className="h-px w-8 bg-border/70 hover:bg-accent/40 transition-colors duration-200" />
      </button>
    </section>
  )
}
