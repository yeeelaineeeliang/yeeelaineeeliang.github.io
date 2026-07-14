import { useState, useEffect } from 'react'

export default function Nav({
  activePage = 'home',
  links = [],
  onNavigate = () => {},
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function go(pageId) {
    onNavigate(pageId)
    setOpen(false)
  }

  const sectionLinks = links.filter(l => l.id !== 'home' && l.id !== 'contact')
  const contactLink = links.find(l => l.id === 'contact')

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md transition-shadow duration-300">
      <nav
        className="container-content flex items-center justify-between transition-[height] duration-250 ease-out"
        style={{ height: scrolled ? '46px' : '78px' }}
      >
        <button
          type="button"
          onClick={() => go('home')}
          className="font-display italic font-semibold text-text transition-all duration-250 ease-out hover:text-accent"
          style={{ fontSize: scrolled ? '17px' : '26px' }}
          aria-label="Go to top"
        >
          Elaine&nbsp;Liang
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {sectionLinks.map(l => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => go(l.id)}
                className="font-mono font-semibold uppercase tracking-[0.06em] transition-all duration-200 hover:text-accent"
                style={{
                  fontSize: scrolled ? '11.5px' : '13px',
                  color: activePage === l.id ? '#A33F2F' : '#6F5A52',
                }}
                aria-current={activePage === l.id ? 'page' : undefined}
              >
                {l.label}
              </button>
            </li>
          ))}
          {contactLink && (
            <li>
              <button
                type="button"
                onClick={() => go(contactLink.id)}
                className="font-mono font-bold uppercase tracking-[0.05em] bg-accent text-white rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{ fontSize: scrolled ? '11.5px' : '13px', padding: scrolled ? '6px 15px' : '9px 20px' }}
              >
                Contact
              </button>
            </li>
          )}
        </ul>

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
    </header>
  )
}
