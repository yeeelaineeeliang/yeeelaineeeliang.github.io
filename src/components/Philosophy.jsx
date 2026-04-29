const stances = [
  {
    headline: 'Models need operating context.',
    body: 'The fraud copilot pairs XGBoost scores with SHAP explanations and similar historical cases because an analyst needs reasons, not just a probability.',
  },
  {
    headline: 'Memory changes the product surface.',
    body: 'The HRI system retrieves prior-session context before generating responses so the robot can continue a relationship instead of restarting every interaction.',
  },
  {
    headline: 'Pipelines should explain their own path.',
    body: 'The LangGraph coach routes through specialized agents and checkpointed state, making the system easier to inspect when a response depends on multiple steps.',
  },
]

export default function Philosophy() {
  return (
    <section className="section bg-bg-alt">
      <div className="container-content">
        <div className="fade-in grid md:grid-cols-[220px_1fr] gap-10">
          <div>
            <p className="font-mono text-xs text-muted-2 uppercase tracking-widest mb-3">
              Engineering stance
            </p>
            <h2 className="text-2xl font-bold leading-tight">
              Build the parts that make the model usable.
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {stances.map(({ headline, body }) => (
              <div key={headline} className="py-5">
                <p className="font-bold text-text leading-snug mb-2">{headline}</p>
                <p className="text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
