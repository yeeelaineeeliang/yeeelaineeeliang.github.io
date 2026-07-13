import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const FEATURED_ID = 'cityliving-sim'

// Editorial gallery order + sizing — an asymmetric rhythm, not a repeated grid.
// Category labels live inside each card now, so no section headers are needed here.
const GALLERY_CARDS = [
  { id: 'career-coach',    size: 'gallery', span: 'lg:col-span-1' },
  { id: 'fraud-copilot',   size: 'gallery', span: 'lg:col-span-1' },
  { id: 'hri-memory',      size: 'gallery', span: 'lg:col-span-1' },
  { id: 'calpin',          size: 'gallery', span: 'lg:col-span-1' },
  { id: 'crypto-pipeline', size: 'wide',    span: 'lg:col-span-2' },
]

const JUMP_ITEMS = [
  { target: 'cityliving-sim', label: 'LiveThere', meta: 'Civic AI product' },
  { target: 'career-coach', label: 'CareerCoach', meta: 'Multi-agent workflow' },
  { target: 'fraud-copilot', label: 'Fraud Copilot', meta: 'Explainable ML' },
  { target: 'hri-memory', label: 'HRI Memory', meta: 'Robot rapport research' },
  { target: 'calpin', label: 'CalPin', meta: 'Peer support app' },
  { target: 'crypto-pipeline', label: 'Crypto Pipeline', meta: 'Forecasting system' },
]

function byId(id) {
  return projects.find(p => p.id === id)
}

const featuredProject = byId(FEATURED_ID)
const galleryItems = GALLERY_CARDS
  .map(cfg => ({ ...cfg, project: byId(cfg.id) }))
  .filter(g => g.project)

export default function Projects({ onViewDetail }) {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
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
          className="fade-in sticky top-16 z-40 -mx-6 mb-8 border-y border-border/60 bg-surface/70 px-6 backdrop-blur-md"
        >
          <div className="flex gap-1.5 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {JUMP_ITEMS.map(({ target, label, meta }) => (
              <a
                key={label}
                href={`#project-${target}`}
                className="shrink-0 rounded-lg border border-border/60 bg-bg/70 px-3 py-2 text-left transition-all duration-200 hover:border-accent/40 hover:bg-accent/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="block text-sm font-semibold text-text">{label}</span>
                <span className="block font-mono text-[10px] uppercase tracking-wide text-muted-2">
                  {meta}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Featured — always shown */}
        {featuredProject && (
          <div className="mb-10">
            <FeaturedProject
              project={featuredProject}
              onViewDetail={onViewDetail}
              id={`project-${featuredProject.id}`}
            />
          </div>
        )}

        {/* Gallery — asymmetric editorial layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {galleryItems.map(({ project, size, span }, i) => (
            <div key={project.id} className={`fade-in ${span}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard
                project={project}
                onViewDetail={onViewDetail}
                variant={size === 'archive' ? 'archive' : 'overlay'}
                size={size}
                id={`project-${project.id}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
