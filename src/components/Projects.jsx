import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ onViewDetail }) {
  return (
    <section id="projects" className="section">
      <div className="container-content">
        <div className="fade-in mb-10 max-w-2xl">
          <h2 className="section-title mb-4">Projects</h2>
          <p className="text-muted leading-relaxed">
            A lot of my projects start from a practical gap I ran into and wanted to make usable.
            Most recently, I built CityLiving Sim, a Chicago neighborhood simulator that combines
            civic datasets, maps, Street View, and a grounded AI advisor to help people understand
            what daily life could feel like before choosing where to live. That work pushed me
            deeper into data quality, schema normalization, and product interfaces that translate
            raw civic data into decisions.
          </p>
        </div>

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
