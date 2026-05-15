import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ onViewDetail }) {
  return (
    <section id="projects" className="section">
      <div className="container-content">
        <div className="fade-in mb-10 w-full">
          <h2 className="section-title mb-4">Projects</h2>
          <div className="space-y-3 text-muted leading-relaxed">
            <p>
              I build AI systems that turn messy real-world information into usable decision tools.
              My projects usually start from practical problems I run into, then grow into products
              that combine data pipelines, retrieval, agentic workflows, and clean interfaces.
            </p>
            <p>
              Most recently, I built CityLiving Sim, a Chicago neighborhood simulator that brings
              together civic datasets, maps, Street View, and a grounded AI advisor to help people
              understand what daily life could feel like before choosing where to live.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={p} onViewDetail={onViewDetail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
