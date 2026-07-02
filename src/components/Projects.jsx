import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectGraphic from './ProjectGraphic'

const FILTERS = ['All', 'AI Systems', 'Research', 'Data Engineering', 'Full-Stack']

export default function Projects({ onViewDetail }) {
  const [filter, setFilter] = useState('All')
  const sectionRef = useRef(null)
  const isFirstRender = useRef(true)

  const featuredProject = projects.find(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  const filteredRegular =
    filter === 'All'
      ? regularProjects
      : projects.filter(p => p.category?.includes(filter))

  const showFeatured = filter === 'All' && featuredProject

  // Fix: when filter changes, new fade-in elements don't get picked up by
  // App.jsx's IntersectionObserver (which only runs on mount). Manually add
  // .visible to newly rendered elements so they're not stuck at opacity 0.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!sectionRef.current) return
        sectionRef.current
          .querySelectorAll('.fade-in:not(.visible)')
          .forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 60)
          })
      })
    })
    return () => cancelAnimationFrame(raf1)
  }, [filter])

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container-content">
        <div className="fade-in mb-10 w-full">
          <h2 className="section-title mb-4">Projects</h2>
          <div className="space-y-3 text-muted leading-relaxed">
            <p>
              I build AI systems that turn messy real-world information into usable decision tools.
              My projects usually start from practical problems I run into, then grow into products
              that combine data pipelines, retrieval, agentic workflows, and clean interfaces.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="fade-in mb-8 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? 'rounded-full border border-accent bg-accent/[0.08] px-4 py-1.5 font-mono text-xs font-semibold text-accent transition-colors duration-200'
                  : 'rounded-full border border-border px-4 py-1.5 font-mono text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent'
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured project spotlight — only shown on "All" */}
        {showFeatured && (
          <div className="fade-in mb-8 group overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-md transition-all duration-300 hover:border-accent/30 hover:shadow-xl">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Left: graphic */}
              <div className="relative overflow-hidden">
                <ProjectGraphic
                  id={featuredProject.id}
                  gradient={featuredProject.gradient}
                  title={featuredProject.title}
                  className="h-full min-h-[300px] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Right: content */}
              <div className="flex flex-col gap-5 p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    {featuredProject.maturity ?? featuredProject.status}
                  </span>
                  <span className="font-mono text-xs text-muted-2">Featured</span>
                </div>

                <h3 className="text-2xl font-bold leading-snug">
                  <button
                    type="button"
                    onClick={() => onViewDetail(featuredProject)}
                    className="text-left transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {featuredProject.title}
                  </button>
                </h3>

                <p className="text-base text-muted leading-relaxed">
                  {featuredProject.summary}
                </p>

                {featuredProject.decisions?.[0] && (
                  <blockquote className="rounded-lg border-l-4 border-accent/50 bg-accent/[0.04] pl-4 pr-3 py-3 text-sm italic text-muted-2">
                    {featuredProject.decisions[0]}
                  </blockquote>
                )}

                <div className="mt-auto flex flex-wrap gap-3">
                  {featuredProject.links?.demo && featuredProject.links.demo !== '#' && (
                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo →
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onViewDetail(featuredProject)}
                    className={featuredProject.links?.demo ? 'btn-outline' : 'btn-primary'}
                  >
                    Case Study →
                  </button>
                  {featuredProject.links?.github && featuredProject.links.github !== '#' && (
                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-muted transition-colors duration-200 hover:text-text"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredRegular.map((p, i) => (
            <div
              key={p.id}
              className="fade-in"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProjectCard project={p} onViewDetail={onViewDetail} index={i} />
            </div>
          ))}
        </div>

        {filteredRegular.length === 0 && !showFeatured && (
          <p className="py-12 text-center text-muted">No projects in this category yet.</p>
        )}
      </div>
    </section>
  )
}
