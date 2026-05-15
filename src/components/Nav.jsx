import { useState } from 'react'

export default function Nav({ activePage = 'home', links = [], onNavigate = () => {} }) {
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

        <ul className="hidden md:flex items-center gap-8">
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

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-text rounded transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text rounded transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text rounded transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-2">
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
      )}
    </header>
  )
}
