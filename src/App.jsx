import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import OutsideWork from './components/OutsideWork'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'outside-work', label: 'Beyond Work' },
  { id: 'contact', label: 'Contact' },
]

// All scrollable section IDs in order
const ALL_SECTIONS = ['home', 'projects', 'experience', 'outside-work', 'contact']

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const galleryScrollRef = useRef(0)

  // Active section: last section whose top is within 64px (nav) + 100px buffer
  useEffect(() => {
    if (selectedProject) return
    function updateActive() {
      const offset = 64 + 100
      let current = 'home'
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id
        }
      }
      setActivePage(current)
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [selectedProject])

  // Sync URL hash with active section — leaves project/case-study anchors alone
  // while still inside the projects section, so it doesn't fight the jump nav
  // or the case-study deep link hash.
  useEffect(() => {
    if (selectedProject) return
    const currentHash = window.location.hash
    if (activePage === 'projects' && /^#(project|case)-/.test(currentHash)) return
    const hash = activePage === 'home' ? '' : `#${activePage}`
    window.history.replaceState(null, '', `/AboutMe${hash}`)
  }, [activePage, selectedProject])

  // Restore scroll position (or open a case study directly) from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash.startsWith('case-')) {
      const project = projects.find(p => p.id === hash.slice('case-'.length))
      if (project) {
        setSelectedProject(project)
        return
      }
    }
    if (hash && ALL_SECTIONS.includes(hash) && hash !== 'home') {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView()
      }, 120)
      return () => clearTimeout(timer)
    }
  }, [])

  // Browser back/forward: re-derive selected project from the hash
  useEffect(() => {
    function onPopState() {
      const hash = window.location.hash.replace('#', '')
      if (hash.startsWith('case-')) {
        const project = projects.find(p => p.id === hash.slice('case-'.length))
        if (project) {
          setSelectedProject(project)
          window.scrollTo({ top: 0 })
          return
        }
      }
      setSelectedProject(null)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Fade-in on scroll — re-observe whenever project detail closes
  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [selectedProject])

  // Navigate scrolls to a section or nav page ID. If a project detail page is
  // open, its sections aren't in the DOM, so close it first and scroll once
  // the home page has rendered.
  function handleNavigate(id) {
    if (selectedProject) {
      setSelectedProject(null)
      window.history.pushState(null, '', '/AboutMe')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }), 60)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }

  function handleViewDetail(project) {
    galleryScrollRef.current = window.scrollY
    setSelectedProject(project)
    window.history.pushState(null, '', `/AboutMe#case-${project.id}`)
    window.scrollTo({ top: 0 })
  }

  function handleBack() {
    setSelectedProject(null)
    window.history.pushState(null, '', '/AboutMe#projects')
    setTimeout(() => window.scrollTo({ top: galleryScrollRef.current }), 60)
  }

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-bg text-text">
        <Nav
          activePage="projects"
          links={NAV_LINKS}
          onNavigate={handleNavigate}
        />
        <main>
          <ProjectDetail project={selectedProject} onBack={handleBack} />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav
        activePage={activePage}
        links={NAV_LINKS}
        onNavigate={handleNavigate}
      />
      <main>
        <Hero onNavigate={handleNavigate} />
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-3.5 px-8"
        >
          <span className="h-px w-16 bg-border" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-16 bg-border" />
        </div>
        <Projects onViewDetail={handleViewDetail} />
        <Experience />
        <OutsideWork />
        <Contact />
      </main>
    </div>
  )
}
