import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const H1_WORDS = ['Hi,', "I'm", 'Elaine!']
const TECH_META = 'Applied ML · LLMs · Data Pipelines · Agents · Reasoning Systems'

const CYCLE_ITEMS = [
  'Building neighborhood simulations',
  'Studying robot rapport with social robots',
  'Designing therapeutic AI dialogue',
  'Researching data security for AI agents',
]


const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Hero({ onNavigate }) {
  const [cycleIndex, setCycleIndex] = useState(0)
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => {
      setFaded(true)
      setTimeout(() => {
        setCycleIndex(i => (i + 1) % CYCLE_ITEMS.length)
        setFaded(false)
      }, 350)
    }, 3200)
    return () => clearInterval(id)
  }, [])

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
          radial-gradient(circle at 72% 40%, rgba(246, 214, 196, 0.42), transparent 32%),
          radial-gradient(circle at 18% 24%, rgba(163, 63, 47, 0.08), transparent 26%),
          linear-gradient(135deg, #fbf7f1 0%, #f6f7f1 42%, #f6f1ea 100%)
        `,
        '--mx': '30%',
        '--my': '50%',
        '--parallax-x': '0px',
        '--parallax-y': '0px',
      }}
    >
      <div aria-hidden="true" className="ambient-layer">
        <div
          className="ambient-orb h-[18rem] w-[18rem] md:h-[24rem] md:w-[24rem]"
          style={{
            top: '8%',
            right: '-4%',
            background: 'radial-gradient(circle, rgba(226, 153, 120, 0.22), rgba(226, 153, 120, 0.02) 68%, transparent 74%)',
          }}
        />
        <div
          className="ambient-orb ambient-orb-slow h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem]"
          style={{
            bottom: '4%',
            left: '-6%',
            background: 'radial-gradient(circle, rgba(98, 142, 133, 0.12), rgba(98, 142, 133, 0.02) 70%, transparent 78%)',
          }}
        />
        <div
          className="ambient-orb-rotate hidden md:block"
          style={{
            right: '8%',
            top: '18%',
            width: '21rem',
            height: '21rem',
            borderRadius: '42% 58% 61% 39% / 38% 43% 57% 62%',
            border: '1px solid rgba(163, 63, 47, 0.12)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.02))',
          }}
        />
      </div>

      {/* Soft cursor-responsive glow — desktop only, disabled under reduced motion */}
      <div
        aria-hidden="true"
        className="hero-cursor-glow pointer-events-none absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(163, 63, 47, 0.09), rgba(236, 177, 148, 0.04) 28%, transparent 62%)',
          backgroundSize: '680px 680px',
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
          backgroundImage:
            'radial-gradient(circle, rgba(98, 142, 133, 0.05) 1px, transparent 1px), linear-gradient(120deg, rgba(163, 63, 47, 0.06), transparent 56%)',
          backgroundSize: '28px 28px, 100% 100%',
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

            {/* Cycling current focus */}
            <div className="animate-in mb-5" style={{ animationDelay: '490ms' }}>
              <p className="font-mono text-[13px] text-muted-2">
                <span className="mr-2 text-accent/50">›</span>
                <span style={{ opacity: faded ? 0 : 1, transition: 'opacity 0.35s ease' }}>
                  {CYCLE_ITEMS[cycleIndex]}
                </span>
                <span className="ml-0.5 text-accent/60 animate-pulse">_</span>
              </p>
            </div>

            {/* Unified intro paragraph */}
            <div className="animate-in mb-5" style={{ animationDelay: '570ms' }}>
              <div className="space-y-3 text-pretty text-[17px] leading-[1.65] text-muted">
                <p>I&apos;m an M.S. Computer Science student at UChicago. I have worked across marketing science, automation, robotics, and AI research, with projects in healthcare, finance, and retail. The problems have looked different in each setting, but I have often found myself asking the same questions. Can people understand how a system works? Can they verify its results? Can they trust it enough to use it?</p>
                <p>I am especially interested in AI agents and how they can help solve practical problems. Right now, I am working on two challenges that keep coming up in agent systems: ensuring data security and reducing the cost of LLM reasoning.</p>
              </div>
            </div>

            {/* Compact tech metadata row */}
            <div className="animate-in mb-8" style={{ animationDelay: '670ms' }}>
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

            {/* Local connection — location chip */}
            <div className="animate-in mt-5" style={{ animationDelay: '900ms' }}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-bg/40 px-3 py-1 font-mono text-[11px] text-muted-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                Based in Chicago
              </span>
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
