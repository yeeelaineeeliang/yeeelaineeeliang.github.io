const credibilityFacts = [
  { label: 'Current', value: 'M.S. Computer Science, UChicago' },
  { label: 'Undergraduate', timeline: '2021-2025', value: 'B.A. Statistics & B.A. Data Science, UC Berkeley' }
]

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center section">
      <div className="container-content">
        <div className="fade-in grid md:grid-cols-[minmax(0,1fr)_440px] lg:grid-cols-[minmax(0,1fr)_500px] gap-10 lg:gap-12 items-center">

          {/* Left - text content */}
          <div className="max-w-xl">
            {/* <p className="font-mono text-accent text-sm mb-3 tracking-wider">Elaine Liang</p> */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
              Hi, I&apos;m Elaine!
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-14 bg-border" />
              <p className="font-mono text-muted text-sm tracking-wide">
                Data &amp; AI Engineer
              </p>
            </div>

            <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
              Hi! I&apos;m Elaine Liang, a Master&apos;s student in Computer Science at the University of
              Chicago. I build AI products end-to-end across grounded agents, retrieval systems, and
              full-stack data pipelines.  </p>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
              Right now, I&apos;m finishing CityLiving Sim, a civic-data AI
              advisor that helps people decide where to live in Chicago, with the goal of 
              expanding it to cities around the world. </p>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
              Before UChicago, I studied Statistics and Data Science at UC Berkeley. 
              I interned at Wells Fargo, where I worked on customer segmentation models for marketing campaigns, 
              and at Dawnrise, where I built an LLM-powered pipeline that automated a manual research process and significantly improved team efficiency.
            </p>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate('projects')} className="btn-primary">
                View Projects
              </button>
              <a href="https://citysim-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                CityLiving Sim
              </a>
              <button type="button" onClick={() => onNavigate('contact')} className="btn-ghost">
                Contact
              </button>
            </div>
          </div>

          {/* Right - profile photo and evidence */}
          <div className="hidden md:block w-full">
            <div className="mx-auto w-full max-w-[400px] -rotate-1 rounded-lg border border-border bg-surface p-2 shadow-[0_24px_70px_rgba(31,42,36,0.16)] transition-transform duration-300 hover:rotate-0">
              <img
                src="/profile.jpg"
                alt="Elaine Liang"
                className="h-[390px] w-full rounded-md object-cover"
                style={{ objectPosition: 'center 80%' }}
              />
            </div>

            <div className="mt-5 rounded-lg border border-border bg-surface/95 p-4 shadow-sm">
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
