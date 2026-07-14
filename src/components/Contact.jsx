import { useState } from 'react'

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45zM22.23 0H1.77C.79 0 .77 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
  </svg>
)

const EMAIL = 'elaineliang0124@gmail.com'

const TOPICS = [
  { id: 'agents', label: 'AI & agents', subject: 'AI agent collaboration' },
  { id: 'data', label: 'Data systems', subject: 'Data / software collaboration' },
  { id: 'collab', label: 'Working together', subject: 'Collaboration opportunity' },
  { id: 'hi', label: 'Just saying hi', subject: 'Saying hi' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function toggleTopic(id) {
    setSelectedTopic(prev => (prev === id ? null : id))
  }

  const topic = TOPICS.find(t => t.id === selectedTopic)
  const mailtoHref = `mailto:${EMAIL}${topic ? `?subject=${encodeURIComponent(topic.subject)}` : ''}`

  return (
    <section id="contact" className="section bg-bg-alt relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '36rem', height: '36rem', background: 'radial-gradient(circle, rgba(173,138,87,0.14), transparent 70%)' }}
      />

      <div className="container-content relative z-10">
        <div className="fade-in mx-auto max-w-[640px] text-center">

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Let&apos;s Talk
          </p>

          <h2 className="font-semibold leading-[1.28] mb-10" style={{ fontSize: 'clamp(28px,3.4vw,38px)' }}>
            If you&apos;re also interested in applied AI and data systems, let&apos;s connect.
          </h2>

          {/* Topic selector */}
          <div className="mb-3">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted-2 mb-3.5">
              What&apos;s on your mind?{' '}
              <span className="normal-case font-normal opacity-70">(optional)</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Email topic selector">
              {TOPICS.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => toggleTopic(t.id)}
                  aria-pressed={selectedTopic === t.id}
                  className={`rounded-full border px-4 py-2 font-mono text-[12.5px] font-medium transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    selectedTopic === t.id
                      ? 'border-accent bg-accent/[0.09] text-accent'
                      : 'border-border bg-surface text-muted hover:border-accent hover:text-accent'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-5 mb-5">
            {topic && (
              <p className="text-sm text-muted">
                Your email will open with:{' '}
                <span className="font-bold text-accent">{topic.subject}</span>
              </p>
            )}
          </div>

          {/* Primary CTA */}
          <div className="mb-12">
            <a
              href={mailtoHref}
              className="inline-block text-[15px] font-bold text-white bg-accent px-9 py-4 rounded-sm shadow-[0_12px_26px_rgba(154,51,36,0.22)] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(154,51,36,0.3)]"
            >
              {topic ? `Talk about ${topic.label} →` : 'Say hello →'}
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-9">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-2">or find me at</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          {/* Social + email */}
          <div className="flex items-center justify-center gap-3.5 flex-wrap">
            <a
              href="https://github.com/yeeelaineeeliang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center justify-center w-11 h-11 border border-border bg-surface rounded-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yeelingliang/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center justify-center w-11 h-11 border border-border bg-surface rounded-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <LinkedInIcon />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center gap-2 font-mono text-[13.5px] text-muted-2 bg-none border-none cursor-pointer transition-colors duration-200 hover:text-accent"
            >
              {EMAIL}
              <span className={`text-[11px] transition-all duration-200 ${copied ? 'text-gold' : 'text-gold/60 group-hover:text-gold'}`}>
                {copied ? '✓ copied' : 'copy'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
