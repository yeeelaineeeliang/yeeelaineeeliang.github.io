import { useState, useEffect } from 'react'

const H1_WORDS = ['Hi,', "I'm"]
const TECH_META = 'Applied ML · LLMs · Data Pipelines · Agents · Reasoning Systems'

const CYCLE_ITEMS = [
  'Researching data security for AI agents',
  'Building neighborhood simulations',
  'Studying robot rapport with social robots',
  'Designing therapeutic AI dialogue',
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

  return (
    <section id="home" className="relative flex items-center bg-bg pt-[96px] pb-[110px]">
      <div className="container-content w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">

          {/* Left — text */}
          <div className="max-w-[700px]">

            {/* Mobile-only circular portrait */}
            <div className="mb-6 md:hidden">
              <img
                src="/profile.jpg"
                alt="Elaine Liang"
                className="h-20 w-20 rounded-full object-cover shadow-md ring-2 ring-border"
                style={{ objectPosition: 'center 80%' }}
              />
            </div>

            <p className="animate-in mb-[22px] font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Applied AI Engineer · Chicago
            </p>

            <h1 className="text-balance font-semibold leading-[1.04] tracking-[-0.01em] mb-7" style={{ fontSize: 'clamp(44px, 6vw, 78px)' }}>
              {H1_WORDS.map((word, i) => (
                <span
                  key={word}
                  className="word-up mr-[0.22em]"
                  style={{ animationDelay: `${i * 130}ms` }}
                >
                  {word}
                </span>
              ))}
              <span
                className="word-up font-display italic text-accent"
                style={{ animationDelay: `${H1_WORDS.length * 130}ms` }}
              >
                Elaine
              </span>
              <span
                className="word-up"
                style={{ animationDelay: `${H1_WORDS.length * 130}ms` }}
              >
                .
              </span>
            </h1>

            <div className="animate-in mb-[22px] flex flex-wrap gap-[10px]" style={{ animationDelay: '420ms' }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/[0.28] bg-accent/[0.06] px-4 py-[7px] font-mono text-[13px] font-medium text-accent transition-colors duration-200 hover:bg-accent/[0.10]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Applied AI Engineer
              </span>
              <span className="inline-flex items-center rounded-full border border-accent/[0.28] bg-accent/[0.06] px-4 py-[7px] font-mono text-[13px] font-medium text-accent transition-colors duration-200 hover:bg-accent/[0.10]">
                Data Systems
              </span>
            </div>

            {/* Cycling current focus */}
            <div className="animate-in mb-[22px]" style={{ animationDelay: '490ms' }}>
              <p className="font-mono text-[13.5px] text-muted-2">
                <span className="mr-2 text-accent/50">›</span>
                <span style={{ opacity: faded ? 0 : 1, transition: 'opacity 0.35s ease' }}>
                  {CYCLE_ITEMS[cycleIndex]}
                </span>
                <span className="ml-0.5 text-accent/60 animate-pulse">_</span>
              </p>
            </div>

            {/* Unified intro paragraph */}
            <div className="animate-in mb-[26px]" style={{ animationDelay: '570ms' }}>
              <div className="max-w-[680px] space-y-3 text-pretty text-[17px] leading-[1.72] text-muted">
                <p>I&apos;m an M.S. Computer Science student at the University of Chicago. I have worked across marketing science, automation, robotics, and AI research, with projects in healthcare, finance, and retail. The problems looked different each time, but I kept asking the same questions: can people understand how a system works, can they verify its results, can they trust it enough to use it?</p>
                <p>Right now I&apos;m focused on two challenges that keep showing up in agent systems: keeping data secure and reducing the cost of LLM reasoning.</p>
              </div>
            </div>

            {/* Compact tech metadata row */}
            <div className="animate-in mb-[34px]" style={{ animationDelay: '670ms' }}>
              <p className="font-mono text-[12.5px] font-medium tracking-[0.02em] text-muted-2">{TECH_META}</p>
            </div>

            {/* CTAs */}
            <div className="animate-in flex flex-wrap gap-3" style={{ animationDelay: '800ms' }}>
              <button type="button" onClick={() => onNavigate('projects')} className="btn-primary">
                Explore my work
              </button>
              <button type="button" onClick={() => onNavigate('contact')} className="btn-outline">
                Get in touch
              </button>
            </div>

          </div>

          {/* Right — editorial portrait (desktop only) */}
          <div className="animate-in hidden md:block md:-mt-3" style={{ animationDelay: '250ms' }}>
            <div className="relative" style={{ margin: '14px' }}>
              {/* Outer decorative border — extends 14px beyond photo */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{ inset: '-14px', border: '1px solid rgba(173,138,87,0.35)', borderRadius: '4px' }}
              />
              {/* Photo with grain overlay and rotation */}
              <div className="hero-portrait">
                <img
                  src="/profile.jpg"
                  alt="Elaine Liang"
                  className="w-full object-cover"
                  style={{ height: '460px', objectPosition: 'center 78%' }}
                />
              </div>
            </div>
            <div className="mt-[26px] space-y-2 pl-1">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-2 whitespace-nowrap shrink-0">2025—2027</span>
                <span className="text-[14.5px] text-muted">M.S. Computer Science, University of Chicago</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-2 whitespace-nowrap shrink-0">2021—2025</span>
                <span className="text-[14.5px] text-muted">B.A. Data Science &amp; B.A. Statistics, UC Berkeley</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
