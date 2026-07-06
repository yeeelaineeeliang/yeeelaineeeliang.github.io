import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

const NAV_LINKS = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// All scrollable section IDs in order
const ALL_SECTIONS = ['home', 'about', 'projects', 'experience', 'contact']

// 'about' lives visually inside the 'home' nav entry
const SECTION_TO_NAV = {
  home: 'home',
  about: 'home',
  projects: 'projects',
  experience: 'experience',
  contact: 'contact',
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Chapter progress bar (0–1)
  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section: last section whose top is within 64px (nav) + 100px buffer
  useEffect(() => {
    if (selectedProject) return
    function updateActive() {
      const offset = 64 + 100
      let current = 'home'
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = SECTION_TO_NAV[id]
        }
      }
      setActivePage(current)
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [selectedProject])

  // Sync URL hash with active section
  useEffect(() => {
    if (selectedProject) return
    const hash = activePage === 'home' ? '' : `#${activePage}`
    window.history.replaceState(null, '', `/AboutMe${hash}`)
  }, [activePage, selectedProject])

  // Restore scroll position from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ALL_SECTIONS.includes(hash) && hash !== 'home') {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView()
      }, 120)
      return () => clearTimeout(timer)
    }
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

  // Navigate scrolls to a section or nav page ID
  function handleNavigate(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleViewDetail(project) {
    setSelectedProject(project)
    window.scrollTo({ top: 0 })
  }

  function handleBack() {
    setSelectedProject(null)
    setTimeout(() => document.getElementById('projects')?.scrollIntoView(), 60)
  }

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-bg text-text">
        <Nav
          activePage="projects"
          links={NAV_LINKS}
          onNavigate={handleNavigate}
          scrollProgress={1}
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
        scrollProgress={scrollProgress}
      />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Projects onViewDetail={handleViewDetail} />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
