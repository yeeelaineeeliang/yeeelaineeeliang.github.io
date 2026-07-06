import MagneticButton from './MagneticButton'

const H1_WORDS = ['Hi,', "I'm", 'Elaine!']
const TECH_META = 'Applied ML · LLMs · Data Pipelines · Agents · Reasoning Systems'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero({ onNavigate }) {
  function handlePointerMove(e) {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    const el = e.currentTarget
    el.style.setProperty('--mx', `${relX * 100}%`)
    el.style.setProperty('--my', `${relY * 100}%`)
    el.style.setProperty('--parallax-x', `${(relX - 0.5) * 16}px`)
    el.style.setProperty('--parallax-y', `${(relY - 0.5) * 16}px`)
  }

  function handlePointerLeave(e) {
    if (prefersReducedMotion) return
    const el = e.currentTarget
    el.style.setProperty('--mx', '30%')
    el.style.setProperty('--my', '50%')
    el.style.setProperty('--parallax-x', '0px')
    el.style.setProperty('--parallax-y', '0px')
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(92vh-65px)] flex items-center section"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      style={{
        background: `
          radial-gradient(circle at 72% 42%, rgba(180, 201, 188, 0.18), transparent 34%),
          radial-gradient(circle at 22% 48%, rgba(190, 75, 52, 0.06), transparent 30%),
          #F7F8F5
        `,
        '--mx': '30%',
        '--my': '50%',
        '--parallax-x': '0px',
        '--parallax-y': '0px',
      }}
    >
      {/* Soft cursor-responsive glow — desktop only, disabled under reduced motion */}
      <div
        aria-hidden="true"
        className="hero-cursor-glow pointer-events-none absolute inset-0 hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(163, 63, 47, 0.06), transparent 60%)',
          backgroundSize: '620px 620px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'var(--mx) var(--my)',
          transition: 'background-position 0.6s ease-out',
          zIndex: 0,
        }}
      />

      {/* Faint dot grid — sits behind the left text column only, slight parallax on cursor move */}
      <div
        aria-hidden="true"
        className="hero-dot-grid pointer-events-none absolute inset-y-0 left-0"
        style={{
          width: '60%',
          backgroundImage: 'radial-gradient(circle, rgba(94, 111, 104, 0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 100%)',
          transform: 'translate(var(--parallax-x), var(--parallax-y))',
          transition: 'transform 0.6s ease-out',
          zIndex: 0,
        }}
      />

      <div className="container-content w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-[minmax(0,1fr)_400px] lg:grid-cols-[minmax(0,1fr)_440px] gap-16 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="max-w-xl">

            {/* Mobile-only circular portrait */}
            <div className="mb-6 md:hidden">
              <img
                src="/profile.jpg"
                alt="Elaine Liang"
                className="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-border"
                style={{ objectPosition: 'center 80%' }}
              />
            </div>

            <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
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

            <div className="animate-in mb-5 flex flex-wrap gap-2" style={{ animationDelay: '420ms' }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 font-mono text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/[0.12]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Applied AI Engineer
              </span>
              <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 font-mono text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/[0.12]">
                Data Scientist
              </span>
            </div>

            {/* Positioning statement */}
            <div className="animate-in mb-5" style={{ animationDelay: '520ms' }}>
              <p className="text-2xl sm:text-3xl font-bold leading-snug text-text">
                I build AI and data systems people can actually rely on.
              </p>
            </div>

            {/* Supporting paragraph */}
            <div className="animate-in mb-5" style={{ animationDelay: '640ms' }}>
              <p className="text-pretty text-[17px] leading-[1.65] text-muted">
                Most of my projects start from a gap I ran into: messy data, manual work, or AI output without enough structure to trust. I work across machine learning, LLMs, data pipelines, and applied AI systems. Right now, my focus is on reducing reasoning cost in LLM systems.
              </p>
            </div>

            {/* Compact tech metadata row */}
            <div className="animate-in mb-8" style={{ animationDelay: '720ms' }}>
              <p className="font-mono text-xs font-medium tracking-wide text-muted">{TECH_META}</p>
            </div>

            {/* CTAs */}
            <div className="animate-in flex flex-wrap gap-3" style={{ animationDelay: '800ms' }}>
              <MagneticButton>
                <button type="button" onClick={() => onNavigate('projects')} className="btn-primary">
                  Explore my work
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
          <div className="animate-in hidden md:block md:-mt-3" style={{ animationDelay: '250ms' }}>
            <div className="relative">
              {/* Offset accent shape behind portrait */}
              <div
                aria-hidden="true"
                className="absolute -z-10 rounded-2xl bg-teal/[0.12] ring-1 ring-accent/10"
                style={{ inset: '-10px' }}
              />

              <div className="-rotate-1 rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(31,42,36,0.16)] transition-all duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_32px_80px_rgba(163,63,47,0.12)]">
                <img
                  src="/profile.jpg"
                  alt="Elaine Liang"
                  className="w-full object-cover"
                  style={{ height: '460px', objectPosition: 'center 80%' }}
                />
              </div>
            </div>
            <div className="mt-5 space-y-1.5 pl-1">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-2 whitespace-nowrap shrink-0">2025 to 2027</span>
                <span className="text-sm text-muted">M.S. Computer Science, University of Chicago</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-2 whitespace-nowrap shrink-0">2021 to 2025</span>
                <span className="text-sm text-muted">B.A. Data Science, B.A. Statistics, UC Berkeley</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => onNavigate('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-2 hover:text-accent transition-colors duration-200"
        aria-label="Scroll to learn more about Elaine"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}
