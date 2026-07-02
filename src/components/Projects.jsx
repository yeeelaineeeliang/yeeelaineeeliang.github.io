import { useState } from 'react'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

const FEATURED_ID = 'cityliving-sim'
const SUPPORTING_IDS = ['career-coach', 'fraud-copilot', 'hri-memory']
const EXPERIMENT_IDS = ['calpin', 'crypto-pipeline']

// Editorial category assignment — three high-level domains.
const DOMAIN_MAP = {
  'career-coach': 'agents',
  'hri-memory': 'agents',
  'fraud-copilot': 'data',
  'crypto-pipeline': 'data',
  'calpin': 'product',
}

const DOMAINS = [
  { id: null, label: 'All' },
  { id: 'agents', label: 'AI & Agents' },
  { id: 'data', label: 'Data & ML' },
  { id: 'product', label: 'Product' },
]

function byId(id) {
  return projects.find(p => p.id === id)
}

const featuredProject = byId(FEATURED_ID)
const allSupporting = SUPPORTING_IDS.map(byId).filter(Boolean)
const allExperiments = EXPERIMENT_IDS.map(byId).filter(Boolean)

export default function Projects({ onViewDetail }) {
  const [domain, setDomain] = useState(null)

  const supportingProjects = domain
    ? allSupporting.filter(p => DOMAIN_MAP[p.id] === domain)
    : allSupporting

  const experimentProjects = domain
    ? allExperiments.filter(p => DOMAIN_MAP[p.id] === domain)
    : allExperiments

  return (
    <section id="projects" className="section">
      <div className="container-content">

        {/* Section header */}
        <div className="fade-in mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">Projects</h2>
          <p className="text-base text-muted leading-relaxed max-w-xl">
            AI systems and data tools built from real problems — with reliability and explainability
            as design constraints, not afterthoughts.
          </p>
        </div>

        {/* Domain filter */}
        <div
          className="fade-in flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by domain"
        >
          {DOMAINS.map(d => (
            <button
              key={String(d.id)}
              type="button"
              onClick={() => setDomain(d.id)}
              aria-pressed={domain === d.id}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                domain === d.id
                  ? 'border-accent bg-accent/[0.08] text-accent'
                  : 'border-border text-muted hover:border-accent/40 hover:text-text'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Featured — always shown */}
        {featuredProject && (
          <div className="mb-14">
            <FeaturedProject project={featuredProject} onViewDetail={onViewDetail} />
          </div>
        )}

        {/* Supporting */}
        {supportingProjects.length > 0 && (
          <div className="mb-12">
            <div className="fade-in flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-muted-2 uppercase tracking-wide">Also shipped</span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {supportingProjects.map((p, i) => (
                <div key={p.id} className="fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                  <ProjectCard project={p} onViewDetail={onViewDetail} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experiments */}
        {experimentProjects.length > 0 && (
          <div>
            <div className="fade-in flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-muted-2 uppercase tracking-wide">Also built</span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {experimentProjects.map((p, i) => (
                <div key={p.id} className="fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                  <ProjectCard project={p} onViewDetail={onViewDetail} index={i} compact />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
