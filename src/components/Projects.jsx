import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const FEATURED_ID = 'cityliving-sim'

const GALLERY_CARDS = [
  { id: 'career-coach',    size: 'gallery', span: 'lg:col-span-1' },
  { id: 'fraud-copilot',   size: 'gallery', span: 'lg:col-span-1' },
  { id: 'hri-memory',      size: 'gallery', span: 'lg:col-span-1' },
  { id: 'calpin',          size: 'gallery', span: 'lg:col-span-1' },
  { id: 'crypto-pipeline', size: 'wide',    span: 'lg:col-span-2' },
]

const JUMP_ITEMS = [
  { target: 'cityliving-sim', label: 'LiveThere' },
  { target: 'career-coach',   label: 'CareerCoach' },
  { target: 'fraud-copilot',  label: 'Fraud Copilot' },
  { target: 'hri-memory',     label: 'Temi Robot' },
  { target: 'calpin',         label: 'CalPin' },
  { target: 'crypto-pipeline',label: 'Crypto Trading' },
]

const PROJECT_IDS = [FEATURED_ID, ...GALLERY_CARDS.map(c => c.id)]

function byId(id) {
  return projects.find(p => p.id === id)
}

const featuredProject = byId(FEATURED_ID)
const galleryItems = GALLERY_CARDS
  .map(cfg => ({ ...cfg, project: byId(cfg.id) }))
  .filter(g => g.project)

export default function Projects({ onViewDetail }) {
  const [activeId, setActiveId] = useState(null)
  const clickedRef = useRef(false)
  const clickTimerRef = useRef(null)

  function handleJumpClick(target) {
    setActiveId(target)
    clickedRef.current = true
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    clickTimerRef.current = setTimeout(() => { clickedRef.current = false }, 800)
  }

  useEffect(() => {
    const intersecting = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-project-id')
          if (entry.isIntersecting) intersecting.add(id)
          else intersecting.delete(id)
        })
        if (!clickedRef.current) {
          const active = PROJECT_IDS.find(id => intersecting.has(id))
          if (active) setActiveId(active)
        }
      },
      { rootMargin: '-10% 0px -55% 0px', threshold: 0 }
    )
    PROJECT_IDS.forEach(id => {
      const el = document.getElementById(`project-${id}`)
      if (el) {
        el.setAttribute('data-project-id', id)
        observer.observe(el)
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="section relative"
      style={{
        background:
          'linear-gradient(180deg, rgba(251,248,243,0.98) 0%, rgba(246,247,242,0.98) 100%)',
      }}
    >
      <div aria-hidden="true" className="ambient-layer">
        <div
          className="ambient-orb ambient-orb-slow h-[12rem] w-[12rem] md:h-[18rem] md:w-[18rem]"
          style={{
            left: '-4%',
            top: '10%',
            background: 'radial-gradient(circle, rgba(163, 63, 47, 0.09), rgba(163, 63, 47, 0.01) 70%, transparent 76%)',
          }}
        />
        <div
          className="ambient-orb h-[12rem] w-[12rem] md:h-[16rem] md:w-[16rem]"
          style={{
            right: '-3%',
            bottom: '12%',
            background: 'radial-gradient(circle, rgba(98, 142, 133, 0.08), rgba(98, 142, 133, 0.01) 70%, transparent 76%)',
          }}
        />
        <div className="ambient-threads opacity-35" />
      </div>

      <div className="container-content relative z-10">

        {/* Section header */}
        <div className="fade-in mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Projects</h2>
        </div>

        {/* Jump nav */}
        <nav
          aria-label="Jump to project"
          className="fade-in sticky top-16 z-40 -mx-6 mb-8 border-b border-border/60 bg-bg/90 px-6 backdrop-blur-md"
        >
          <div className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {JUMP_ITEMS.map(({ target, label }) => {
              const isActive   = activeId === target
              const isFeatured = target === FEATURED_ID && !isActive

              if (isActive) {
                return (
                  <a
                    key={label}
                    href={`#project-${target}`}
                    onClick={() => handleJumpClick(target)}
                    className="shrink-0 rounded-lg bg-accent px-3 py-2 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="block text-sm font-bold text-white">{label}</span>
                  </a>
                )
              }

              if (isFeatured) {
                return (
                  <a
                    key={label}
                    href={`#project-${target}`}
                    onClick={() => handleJumpClick(target)}
                    className="shrink-0 rounded-lg border border-accent/20 bg-accent/[0.08] px-3 py-2 text-left transition-all duration-200 hover:bg-accent/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="block text-sm font-bold text-accent">{label}</span>
                  </a>
                )
              }

              return (
                <a
                  key={label}
                  href={`#project-${target}`}
                  onClick={() => handleJumpClick(target)}
                  className="group shrink-0 rounded-lg px-3 py-2 text-left transition-all duration-200 hover:bg-accent/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="block text-sm font-semibold text-text transition-colors duration-200 group-hover:text-accent">{label}</span>
                </a>
              )
            })}
          </div>
        </nav>

        {/* Featured — always shown */}
        {featuredProject && (
          <div className="mb-10">
            <FeaturedProject
              project={featuredProject}
              onViewDetail={onViewDetail}
              id={`project-${featuredProject.id}`}
              isActive={activeId === FEATURED_ID}
              isDimmed={activeId !== null && activeId !== FEATURED_ID}
            />
          </div>
        )}

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {galleryItems.map(({ project, size, span }, i) => (
            <div key={project.id} className={`fade-in ${span}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard
                project={project}
                onViewDetail={onViewDetail}
                variant={size === 'archive' ? 'archive' : 'overlay'}
                size={size}
                id={`project-${project.id}`}
                isActive={activeId === project.id}
                isDimmed={activeId !== null && activeId !== project.id}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
