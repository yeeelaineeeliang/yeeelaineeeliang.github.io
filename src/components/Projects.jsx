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

// Tech-domain labels for the jump nav — lets recruiters scan for relevant background
// (multi-agent, RAG, robotics, etc.) rather than needing to recognize project names.
// A project can carry more than one label when it genuinely spans domains.
const JUMP_ITEMS = [
  { target: 'cityliving-sim', label: 'LLM' },
  { target: 'cityliving-sim', label: 'Machine Learning' },
  { target: 'cityliving-sim', label: 'Data Engineering' },
  { target: 'career-coach', label: 'Multi-Agent' },
  { target: 'career-coach', label: 'LLM Orchestration' },
  { target: 'fraud-copilot', label: 'XGBoost' },
  { target: 'fraud-copilot', label: 'SHAP' },
  { target: 'fraud-copilot', label: 'RAG' },
  { target: 'fraud-copilot', label: 'Claude API' },
  { target: 'hri-memory', label: 'Robotics' },
  { target: 'hri-memory', label: 'HRI Research' },
  { target: 'calpin', label: 'Community' },
  { target: 'calpin', label: 'Mobile' },
  { target: 'crypto-pipeline', label: 'Fintech' },
  { target: 'crypto-pipeline', label: 'Forecasting' },
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
    <section id="projects" className="section">
      <div className="container-content">

        {/* Section header */}
        <div className="fade-in mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Projects</h2>
        </div>

        {/* Jump nav — sticks below the main nav so visitors can pick a project without scrolling past everything */}
        <nav
          aria-label="Jump to project"
          className="fade-in sticky top-16 z-40 mb-10 w-fit max-w-full rounded-full border border-border bg-bg/90 px-2 py-2 shadow-sm backdrop-blur-md"
        >
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {JUMP_ITEMS.map(({ target, label }) => (
              <a
                key={label}
                href={`#project-${target}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/40 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {label}
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
