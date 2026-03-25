export default function Philosophy() {
  return (
    <section className="section bg-bg-alt">
      <div className="container-content">
        <div className="fade-in max-w-2xl mx-auto text-center py-4">
          {/* Large decorative quote mark */}
          <span
            className="block text-[100px] md:text-[140px] leading-none font-serif select-none pointer-events-none bg-gradient-to-r from-accent to-teal bg-clip-text text-transparent opacity-30"
            aria-hidden
          >
            &ldquo;
          </span>

          <blockquote className="-mt-10 md:-mt-14">
            <p className="text-2xl md:text-3xl font-display font-bold leading-snug text-text">
              Benchmarks are a starting point, not a goal.
            </p>
            <p className="mt-5 text-base text-muted leading-relaxed max-w-lg mx-auto">
              A fraud detection model with 0.98 AUC is useless if analysts don't trust its
              explanations. Real production AI needs interpretability, feedback loops, and humans
              in the loop — not just a good number on a leaderboard.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
