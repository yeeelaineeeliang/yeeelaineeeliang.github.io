import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

const homePath = '/AboutMe'
const pageOrder = ['home', 'projects', 'experience', 'contact']
const pageLabels = {
  home: 'AboutMe',
  projects: 'Projects',
  experience: 'Experience',
  contact: 'Contact',
}
const navLinks = pageOrder.map(id => ({ id, label: pageLabels[id] }))

function getInitialPage() {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash.replace('#', '')
  if (hash === 'skills') return 'projects'
  return pageOrder.includes(hash) ? hash : 'home'
}

function getUrlForPage(pageId) {
  if (pageId === 'home') return homePath
  return `${homePath}#${pageId}`
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage)
  const [selectedProject, setSelectedProject] = useState(null)
  const pageRefs = useRef({})
  const activeIndex = pageOrder.indexOf(activePage)

  function handleNavigate(pageId) {
    if (!pageOrder.includes(pageId)) return

    setSelectedProject(null)
    setActivePage(pageId)

    window.history.pushState(null, '', getUrlForPage(pageId))
  }

  useEffect(() => {
    function syncFromHash() {
      const next = getInitialPage()
      setSelectedProject(null)
      setActivePage(next)
    }

    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('popstate', syncFromHash)
    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('popstate', syncFromHash)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname !== homePath || window.location.hash === '#skills') {
      window.history.replaceState(null, '', getUrlForPage(activePage))
    }
  }, [activePage])

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [selectedProject])

  useEffect(() => {
    pageRefs.current[activePage]?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  function handleViewDetail(project) {
    setActivePage('projects')
    setSelectedProject(project)
    window.history.replaceState(null, '', getUrlForPage('projects'))
  }

  function handleBack() {
    setSelectedProject(null)
    setActivePage('projects')
    window.history.replaceState(null, '', getUrlForPage('projects'))
  }

  const pages = [
    {
      id: 'home',
      content: <Hero onNavigate={handleNavigate} />,
    },
    {
      id: 'projects',
      content: (
        <>
          <Projects onViewDetail={handleViewDetail} />
          <Skills />
        </>
      ),
    },
    {
      id: 'experience',
      content: <Experience />,
    },
    {
      id: 'contact',
      content: (
        <>
          <Contact />
          <Footer />
        </>
      ),
    },
  ]

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-bg text-text">
        <Nav
          activePage={activePage}
          links={navLinks}
          onNavigate={handleNavigate}
        />
        <main className="h-[calc(100vh-64px)] overflow-y-auto">
          <ProjectDetail project={selectedProject} onBack={handleBack} />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav
        activePage={activePage}
        links={navLinks}
        onNavigate={handleNavigate}
      />
      <main className="h-[calc(100vh-64px)] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {pages.map(page => (
            <div
              key={page.id}
              ref={node => {
                if (node) pageRefs.current[page.id] = node
              }}
              className="h-full w-full shrink-0 overflow-y-auto"
              aria-hidden={activePage !== page.id}
            >
              {page.content}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
