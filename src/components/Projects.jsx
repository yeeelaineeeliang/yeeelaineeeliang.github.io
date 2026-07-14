import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const FEATURED_ID = 'cityliving-sim'

const GALLERY_CARDS = [
  { id: 'career-coach',    span: 'lg:col-span-1' },
  { id: 'fraud-copilot',   span: 'lg:col-span-1' },
  { id: 'hri-memory',      span: 'lg:col-span-1' },
  { id: 'calpin',          span: 'lg:col-span-1' },
  { id: 'crypto-pipeline', span: 'lg:col-span-2' },
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

        <div className="fade-in mb-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Projects</h2>
        </div>

        {featuredProject && (
          <div className="mb-7">
            <FeaturedProject
              project={featuredProject}
              onViewDetail={onViewDetail}
              id={`project-${featuredProject.id}`}
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {galleryItems.map(({ project, span }, i) => (
            <div key={project.id} className={`fade-in ${span}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard
                project={project}
                onViewDetail={onViewDetail}
                id={`project-${project.id}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
