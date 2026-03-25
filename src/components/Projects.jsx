import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ onViewDetail }) {
  return (
    <section id="projects" className="section">
      <div className="container-content">
        <h2 className="section-title fade-in">Projects</h2>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <div key={p.id} className="fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
              <ProjectCard project={p} onViewDetail={onViewDetail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
