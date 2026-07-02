import { useState } from 'react'

export default function Nav({
  activePage = 'home',
  links = [],
  onNavigate = () => {},
  scrollProgress = 0,
}) {
  const [open, setOpen] = useState(false)

  function go(pageId) {
    onNavigate(pageId)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 shadow-sm backdrop-blur-md">
      <nav className="container-content h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go('home')}
          className={`font-display text-lg font-bold tracking-wide transition-colors duration-200 ${
            activePage === 'home' ? 'text-accent' : 'text-text hover:text-accent'
          }`}
          aria-current={activePage === 'home' ? 'page' : undefined}
        >
          EL
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className={`relative pb-1 text-sm font-medium transition-colors duration-200 ${
                  activePage === l.id ? 'text-accent' : 'text-muted hover:text-accent'
                }`}
                aria-current={activePage === l.id ? 'page' : undefined}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300"
                  style={{ width: activePage === l.id ? '100%' : '0%' }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Chapter position dots */}
        <div className="hidden md:flex items-center gap-1.5 ml-6" aria-hidden="true">
          {links.map(l => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              aria-label={`Go to ${l.label}`}
              className={`rounded-full bg-accent transition-all duration-300 ${
                activePage === l.id
                  ? 'w-4 h-1.5 opacity-100'
                  : 'w-1.5 h-1.5 opacity-20 hover:opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-0.5 bg-text rounded transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text rounded transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text rounded transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-bg/95 backdrop-blur-md border-b border-border overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {links.map(l => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activePage === l.id ? 'text-accent' : 'text-muted hover:text-accent'
                }`}
                aria-current={activePage === l.id ? 'page' : undefined}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll progress bar */}
      <div className="h-0.5 bg-border/30" aria-hidden="true">
        <div
          className="h-full bg-accent/70 transition-[width] duration-150 ease-out"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>
    </header>
  )
}
