import { posts } from '../data/blog'

export default function Blog() {
  return (
    <section id="writing" className="section">
      <div className="container-content">
        <h2 className="section-title fade-in">Writing</h2>
        <p className="fade-in text-sm text-muted mb-8 max-w-lg">
          Technical essays on AI systems, engineering decisions, and things I learned the hard way.
          Coming soon.
        </p>

        <div className="fade-in grid sm:grid-cols-2 gap-4">
          {posts.map(post => (
            <div
              key={post.slug}
              className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug text-text">{post.title}</h3>
                <span className="shrink-0 font-mono text-xs px-2 py-0.5 rounded-full border border-border text-muted">
                  Draft
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{post.description}</p>
              <p className="text-xs font-mono text-muted/50 mt-auto">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
