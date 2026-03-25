import HeroBg from './HeroBg'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center section overflow-hidden">
      <HeroBg />

      <div className="container-content relative z-10">
        <div className="fade-in grid md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left — text content */}
          <div className="max-w-xl">
            <p className="font-mono text-accent text-sm mb-3 tracking-wider">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
              Elaine Liang
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-accent to-teal" />
              <p className="font-mono text-muted text-sm tracking-wide">
                Data &amp; AI Engineer · MS Software Engineering
              </p>
            </div>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
              I build AI systems that go from raw data to real products, and I'm especially into
              designing automation workflows that make people's work easier and faster.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" download className="btn-outline">Resume ↓</a>
              <a href="#contact" className="btn-outline">Say Hi</a>
            </div>
          </div>

          {/* Right — abstract data-flow graphic */}
          <div className="hidden md:block" aria-hidden>
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background rings */}
              <circle cx="210" cy="210" r="200" stroke="#E8DDD4" strokeWidth="1" strokeDasharray="5 7" />
              <circle cx="210" cy="210" r="140" stroke="#E8DDD4" strokeWidth="1" strokeDasharray="5 7" />

              {/* Connection lines */}
              <line x1="85" y1="115" x2="178" y2="178" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="178" y1="178" x2="302" y2="148" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="178" y1="178" x2="210" y2="305" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="302" y1="148" x2="332" y2="270" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="210" y1="305" x2="332" y2="270" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />

              {/* Nodes */}
              <circle cx="85" cy="115" r="36" fill="#D97355" fillOpacity="0.08" stroke="#D97355" strokeWidth="1.5" />
              <text x="85" y="120" textAnchor="middle" fill="#D97355" fontSize="15" fontFamily="monospace" fontWeight="600">DATA</text>

              <circle cx="178" cy="178" r="42" fill="#D97355" fillOpacity="0.12" stroke="#D97355" strokeWidth="2" />
              <text x="178" y="173" textAnchor="middle" fill="#D97355" fontSize="15" fontFamily="monospace" fontWeight="600">ML</text>
              <text x="178" y="190" textAnchor="middle" fill="#D97355" fontSize="12" fontFamily="monospace">model</text>

              <circle cx="302" cy="148" r="34" fill="#E8A87C" fillOpacity="0.08" stroke="#E8A87C" strokeWidth="1.5" />
              <text x="302" y="153" textAnchor="middle" fill="#E8A87C" fontSize="15" fontFamily="monospace" fontWeight="600">RAG</text>

              <circle cx="210" cy="305" r="34" fill="#E8A87C" fillOpacity="0.08" stroke="#E8A87C" strokeWidth="1.5" />
              <text x="210" y="310" textAnchor="middle" fill="#E8A87C" fontSize="15" fontFamily="monospace" fontWeight="600">API</text>

              <circle cx="332" cy="270" r="38" fill="#4A9E7C" fillOpacity="0.08" stroke="#4A9E7C" strokeWidth="1.5" />
              <text x="332" y="265" textAnchor="middle" fill="#4A9E7C" fontSize="14" fontFamily="monospace" fontWeight="600">PROD</text>
              <text x="332" y="281" textAnchor="middle" fill="#4A9E7C" fontSize="12" fontFamily="monospace">app</text>

              {/* Small accent dots */}
              <circle cx="130" cy="250" r="7" fill="#D97355" fillOpacity="0.15" />
              <circle cx="265" cy="235" r="6" fill="#E8A87C" fillOpacity="0.15" />
              <circle cx="375" cy="195" r="8" fill="#4A9E7C" fillOpacity="0.10" />

              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D97355" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#E8A87C" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
