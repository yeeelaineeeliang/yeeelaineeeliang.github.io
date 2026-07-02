import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
)

const prompts = [
  'building agents that work on real, messy data',
  'how the CityLiving Sim grounding system works',
  'why most ML models fail before they reach production',
  'robot memory and what it\'s like to engineer for a longitudinal study',
  'cutting 40 hours of manual data collection down to 2',
]

const EMAIL = 'elaineliang0124@gmail.com'

export default function Contact() {
  const [promptIndex, setPromptIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setPromptIndex(i => (i + 1) % prompts.length)
        setFade(true)
      }, 200)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="section relative overflow-hidden bg-bg-alt">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-teal/[0.05] blur-3xl" />
      </div>

      <div className="container-content">
        <div className="fade-in max-w-xl mx-auto text-center">
          <h2 className="section-title mx-auto">Let&apos;s talk.</h2>

          <p className="text-lg text-muted leading-relaxed mt-8 mb-5">
            I&apos;m interested in applied AI, grounded agents, and data tools that help people
            navigate real-world decisions. That spans data science, data security, and the
            infrastructure that makes AI systems trustworthy enough to actually rely on. If
            you&apos;re building something in that space, want to collaborate on a project, or
            just want to trade ideas, let&apos;s connect!
          </p>

          <p className="text-sm text-muted-2 mb-10 leading-relaxed min-h-[2.5rem]">
            Or just say hi about{' '}
            <span
              className="text-accent font-medium"
              style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.2s ease', display: 'inline' }}
            >
              {prompts[promptIndex]}
            </span>
            .
          </p>

          <MagneticButton>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5"
            >
              Say hello →
            </a>
          </MagneticButton>

          <div className="flex justify-center gap-5 mt-10">
            <a
              href="https://github.com/yeeelaineeeliang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:text-accent hover:shadow-md"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yeelingliang/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:text-accent hover:shadow-md"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Copy-to-clipboard email */}
          <button
            type="button"
            onClick={copyEmail}
            className="group mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted-2 transition-colors duration-200 hover:text-accent"
          >
            {EMAIL}
            <span className={`text-xs transition-all duration-200 ${copied ? 'text-success' : 'text-muted-2/50 group-hover:text-accent/60'}`}>
              {copied ? '✓ copied' : 'copy'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
