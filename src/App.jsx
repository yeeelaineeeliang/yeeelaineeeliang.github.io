import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

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

  function handleViewDetail(project) {
    setSelectedProject(project)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setSelectedProject(null)
    // Scroll back to projects section
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-bg text-text">
        <ProjectDetail project={selectedProject} onBack={handleBack} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects onViewDetail={handleViewDetail} />
        <Skills />
        <Experience />
        <Philosophy />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
