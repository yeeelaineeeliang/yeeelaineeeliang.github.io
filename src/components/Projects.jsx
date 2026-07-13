import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const FEATURED_ID = 'cityliving-sim'

// Editorial gallery order + sizing — an asymmetric rhythm, not a repeated grid.
// Category labels live inside each card now, so no section headers are needed here.
const GALLERY_CARDS = [
  { id: 'career-coach', size: 'lg', span: 'lg:col-span-2' },
  { id: 'fraud-copilot', size: 'md', span: 'lg:col-span-2' },
  { id: 'hri-memory', size: 'tall', span: 'lg:col-span-1' },
  { id: 'calpin', size: 'tall', span: 'lg:col-span-1' },
  { id: 'crypto-pipeline', size: 'archive', span: 'lg:col-span-2' },
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
        <div className="fade-in mb-8 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Projects</h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            This is the core of my site. Some of these are polished product builds, some are
            research-driven systems, and some are just fun problems I cared enough to make real.
            I care most about the decisions behind them: what the product needed to do, what the
            system had to prove, and what I chose to optimize for.
          </p>
        </div>

        {/* Jump nav — project-first rather than tag-first so visitors can orient quickly */}
        <nav
          aria-label="Jump to project"
          className="fade-in sticky top-16 z-40 mb-10 max-w-full rounded-2xl border border-border/80 bg-bg/92 p-2 shadow-sm backdrop-blur-md"
        >
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {JUMP_ITEMS.map(({ target, label, meta }) => (
              <a
                key={label}
                href={`#project-${target}`}
                className="shrink-0 rounded-xl border border-border/90 px-3 py-2 text-left transition-all duration-200 hover:border-accent/40 hover:bg-accent/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
