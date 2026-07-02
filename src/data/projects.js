export const projects = [
  {
    id: 'cityliving-sim',
    title: 'CityLiving Sim: Chicago Neighborhood Simulator',
    icon: '🏙️',
    gradient: ['#315C6B', '#A33F2F'],
    featured: true,
    status: 'Latest Project',
    maturity: 'In Progress',
    role: 'Solo full-stack builder',
    focus: 'Civic data, grounded AI, map UX',
    category: ['Current Work', 'AI Systems', 'Full-Stack', 'Agents', 'RAG', 'Data Engineering'],
    summary:
      'Choosing where to live is more than rent math. I built this to answer the question with real data: transit reliability, crime patterns, 311 response times, and Street View across 77 Chicago neighborhoods — with an AI advisor that has to check actual civic datasets before it tells you anything.',
    oneliner:
      'A neighborhood tool that pulls real Chicago data together so you can figure out where to live without just guessing.',
    technicalContribution:
      'Integrated neighborhood-level civic datasets, map layers, Street View context, and grounded AI explanations into one searchable decision interface.',
    problem:
      'Choosing where to live is not just a rent calculation. People need to understand commute friction, street safety, city-service responsiveness, transit reliability, and the feel of everyday routines before they sign a lease.',
    solution:
      'Built CityLiving Sim as an interactive Chicago decision-support product. Users enter budget, workplace, commute preference, and lifestyle priorities, then compare neighborhood fit, explore a map, move through a month-by-month simulation, and ask grounded follow-up questions. The advisor must query structured tools before narrating, and sparse data is surfaced instead of hidden.',
    pipeline: `User profile + selected neighborhood
     │
[Neighborhood matching] → budget, commute, and lifestyle fit
     │
[Simulation UI] → map, Street View, monthly state
     │
[Question router] → structured civic tools
     │
  ├─ crime + safety
  ├─ CTA transit + commute
  ├─ housing affordability
  ├─ 311 service responsiveness
  ├─ entertainment + amenities
  └─ neighborhood profile
     │
[Grounded narrator] → practical neighborhood advice
     │
[Supabase + civic datasets] → persisted data layer`,
    stack: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Supabase Postgres',
      'Clerk',
      'React Leaflet',
      'OpenStreetMap',
      'Groq',
      'PySpark',
    ],
    stackGroups: [
      { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
      { label: 'Data/Backend', items: ['Supabase', 'Postgres', 'PySpark', 'Clerk'] },
      { label: 'AI/Maps', items: ['Groq', 'React Leaflet', 'OpenStreetMap'] },
    ],
    highlights: [
      'Normalized multi-source civic datasets into community-area level schemas',
      'Built grounded AI tools for neighborhood comparison and explanation',
      'Designed a map-first interface for exploring daily-life factors',
      'Deployed an authenticated full-stack app with Supabase and Clerk',
    ],
    decisions: [
      'Made the agent tool-first: the model routes to structured crime, transit, commute, housing, 311, entertainment, and profile tools before generating advice',
      'Separated neighborhood transit access from exact door-to-door routing so the product does not overclaim commute precision',
      'Added deterministic fallbacks and validation rules so the app stays useful when LLM or civic API calls are unavailable',
      'Modeled sparse data explicitly in the UI and responses instead of letting the AI fill gaps with confident-sounding fiction',
      'Used maps and Street View alongside text because neighborhood choice is spatial and experiential, not just tabular',
    ],
    metrics: ['77 community areas', '7 grounded tools', 'Map-based advisor', 'Live demo'],
    nextImprovements: [
      'Add real usage analytics around neighborhood questions and comparison patterns',
      'Expand the ingestion pipeline so the simulator can generalize beyond Chicago',
      'Add saved comparison boards for users choosing between multiple neighborhoods',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/citysim.git',
      demo: 'https://citysim-gamma.vercel.app/',
    },
  },
  {
    id: 'career-coach',
    title: 'CareerCoach: Multi-Agent Career Coach',
    icon: '🧭',
    gradient: ['#C4683A', '#D4943A'],
    featured: false,
    category: ['AI Systems', 'Agents'],
    maturity: 'Shipped',
    role: 'Solo AI systems builder',
    focus: 'Agent routing, career workflows, persistent context',
    summary:
      'Job searching is fragmented across a dozen tools that don\'t talk to each other. This routes your question to the right specialist — resume rewriter, mock interviewer, gap analyzer, outreach drafter — and each one knows what the others figured out, so you\'re not starting from scratch every time.',
    oneliner:
      'A multi-agent career coach where each specialist shares what it learned, so downstream agents build on upstream findings instead of starting over.',
    technicalContribution:
      'Designed a routed multi-agent workflow where specialized career agents share state, persist progress, and synthesize one coherent answer.',
    problem:
      'Job seekers juggle disconnected tools for resume help, interview prep, and networking. There is no single system that understands your profile, target roles, and projects holistically and coaches you across all dimensions.',
    solution:
      'Built a LangGraph StateGraph with 9 nodes: an orchestrator classifies intent via Haiku, then conditionally routes to specialized Opus agents for gap analysis, resume rewriting, mock interviews, study planning, and outreach. Agents share state through a typed schema so downstream nodes build on upstream findings. SQLite checkpointing enables cross-session persistence.',
    pipeline: `User message (Streamlit)
     │
[Orchestrator — Haiku] → intent classification (6 categories)
     │
[Conditional routing] → parallel/sequential agent paths
     │
  ├─ [Gap + Study agents — Opus]
  ├─ [ProjectMatcher — Haiku] → [Resume agent — Opus]
  ├─ [Interview + Study agents — Opus]
  ├─ [Outreach agent — Opus]
  └─ [Synthesizer — Opus]
     │
[Synthesis agent — Opus] → merged response
     │
[SQLite checkpointer] → cross-session persistence`,
    stack: ['Python', 'LangGraph', 'Claude API', 'Streamlit', 'SQLite', 'Google Calendar OAuth'],
    stackGroups: [
      { label: 'Graph/Agents', items: ['LangGraph', 'Claude API', 'conditional routing'] },
      { label: 'Interface', items: ['Streamlit', 'Google Calendar OAuth'] },
      { label: 'Persistence', items: ['SQLite checkpointer', 'typed graph state'] },
    ],
    highlights: [
      'Designed conditional routing across specialized career agents',
      'Built persistent memory for multi-session job-search workflows',
      'Integrated calendar context for planning and interview preparation',
      'Separated graph logic from Streamlit so the system can move to other interfaces',
    ],
    decisions: [
      'Used Haiku for routing and ranking, Opus for deep reasoning: fast and cheap classification where it matters, heavy inference only where needed',
      'Regex-based weak area extraction from interview output avoids an extra LLM call while keeping the pipeline reliable',
      'Project matching uses a keyword scoring fallback chain; LLM ranking only triggers for large libraries (>8 projects)',
      'Zero Streamlit imports inside graph/ keeps the workflow portable across future interfaces',
      'Synthesis node strips raw sub-agent messages to force coherent narrative instead of verbatim pasting',
    ],
    metrics: ['9 specialized agents', '6 intent-routed paths', 'Cross-session memory', 'Shipped app'],
    nextImprovements: [
      'Add evaluator traces for routing accuracy across career-question categories',
      'Expose agent reasoning summaries so users can see which specialist handled each request',
      'Add richer profile import flows for resumes, projects, and target roles',
    ],
    links: {
      demo: 'https://careerofferengine.streamlit.app',
    },
  },
  {
    id: 'fraud-copilot',
    title: 'AI Fraud Investigation Copilot',
    icon: '🛡️',
    gradient: ['#1E2D4A', '#2D4A6B'],
    featured: false,
    category: ['AI Systems', 'ML', 'RAG', 'Data Engineering'],
    maturity: 'Shipped',
    role: 'Solo ML pipeline builder',
    focus: 'Explainable ML, retrieval, analyst reports',
    summary:
      'Fraud models flag transactions. Then what? This takes a flagged transaction and automatically builds out the full picture: what the model scored and why, what similar past cases looked like, and what an analyst should probably do next. The analyst still decides — the tool just does the legwork.',
    oneliner:
      'Takes a flagged transaction and builds out the full picture automatically — model score, explanation, historical precedents — while keeping the analyst in charge.',
    technicalContribution:
      'Combined fraud scoring, SHAP explanations, vector retrieval, and LLM-generated reports into one analyst-in-the-loop investigation flow.',
    problem:
      'Fraud detection models flag suspicious transactions but give analysts nothing to work with: no explanation, no context, no suggested action. That turns every flagged case into a slow, inconsistent manual investigation.',
    solution:
      'Built an end-to-end pipeline that takes a flagged transaction, generates a plain-English explanation using SHAP feature importance, retrieves similar historical fraud patterns via FAISS vector search, and produces a structured investigation summary and recommended action via Claude (Sonnet). The analyst stays in control; the copilot advises, never decides.',
    pipeline: `creditcard.csv
     │
[XGBoost Classifier] → fraud probability score
     │
[SHAP Explainer] → top N feature importances
     │
[FAISS RAG] → similar historical fraud pattern descriptions
     │
[Claude API] → investigation summary + recommended analyst actions
     │
[Streamlit UI] → full investigation report`,
    stack: ['Python', 'XGBoost', 'SHAP', 'FAISS', 'Sentence Transformers', 'Claude API', 'Streamlit'],
    stackGroups: [
      { label: 'ML', items: ['Python', 'XGBoost', 'SHAP'] },
      { label: 'Retrieval', items: ['FAISS', 'Sentence Transformers'] },
      { label: 'Reports/UI', items: ['Claude API', 'Streamlit'] },
    ],
    highlights: [
      'Built XGBoost scoring with SHAP-based feature explanations',
      'Used FAISS retrieval to surface similar historical fraud patterns',
      'Generated analyst-ready summaries while keeping final judgment human-led',
    ],
    decisions: [
      'Used FAISS over a hosted vector DB like Pinecone to keep the system self-contained with no external index dependency',
      'Chose SHAP TreeExplainer over LIME for more consistent explanations given XGBoost tree structure',
      'Kept the analyst in the loop by design: the copilot recommends, never acts autonomously',
      'Surfaced the PCA-transformed feature privacy tradeoff in the UI rather than hiding it',
    ],
    metrics: ['95%+ precision', '0.98 AUC', 'SHAP explanations', 'FAISS retrieval'],
    nextImprovements: [
      'Add side-by-side analyst feedback capture for report quality',
      'Track retrieval hit quality against confirmed fraud categories',
      'Expose confidence and uncertainty language more explicitly in reports',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/fraud-copilot.git',
    },
  },
  {
    id: 'hri-memory',
    title: 'Memory-Aware Rapport Engine (HRI Research)',
    icon: '🤖',
    gradient: ['#2D6B5E', '#4A8B7A'],
    featured: false,
    category: ['Research', 'AI Systems', 'RAG'],
    maturity: 'In Progress',
    role: 'HRI research engineer',
    focus: 'Robot memory, constrained generation, rapport',
    summary:
      'Gives a social robot memory so it can pick up where it left off and build interactions that feel more continuous over time.',
    oneliner:
      'Gives a social robot memory so it can pick up where it left off and build interactions that feel more continuous over time.',
    technicalContribution:
      'Built a Temi robot rapport engine that retrieves prior-session context and constrains LLM responses for a human-robot interaction study.',
    problem:
      'Social robots typically have no memory of previous interactions, which makes any sense of ongoing relationship impossible. The research question: can an LLM-powered memory system make robot rapport feel meaningfully continuous?',
    solution:
      'Built a Kotlin/Android rapport engine for the Temi robot that retrieves user-specific context from prior sessions, selects appropriate self-disclosure and reciprocal disclosure strategies, and generates responses via a prompted LLM under tight real-time constraints.',
    pipeline: `Prior session data
     │
[Memory retrieval] → synonym group matching → topic-aware context
     │
[LLM prompt] → self-disclosure + rapport strategy selection
     │
[Kotlin/Android app] → real-time response on Temi robot
     │
[Python module] → self-disclosure generation + validation`,
    stack: ['Kotlin', 'Android', 'Python', 'LLM prompting', 'FAISS-style retrieval'],
    stackGroups: [
      { label: 'Robot App', items: ['Kotlin', 'Android', 'Temi robot'] },
      { label: 'Memory', items: ['Python', 'topic retrieval', 'synonym groups'] },
      { label: 'LLM', items: ['prompt constraints', 'self-disclosure generation'] },
    ],
    highlights: [
      'Retrieved user-specific prior-session context during live robot dialogue',
      'Constrained LLM self-disclosures for research validity and safety',
      'Balanced recall coverage against topical coherence in memory matching',
    ],
    decisions: [
      'Synonym group coverage needed careful curation: broader matching improves recall but risks topically incoherent responses',
      'Research validity constrained engineering more tightly than a product context would; free-form A/B testing was not appropriate',
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding post-generation validation before the robot speaks',
    ],
    metrics: ['UC Chicago HRI Lab', 'Prior-session memory', 'Temi robot study'],
    nextImprovements: [
      'Compare rapport outcomes across memory and no-memory study conditions',
      'Add richer topic clustering for prior-session recall',
      'Instrument response latency under live robot interaction constraints',
    ],
  },
  {
    id: 'calpin',
    title: 'CalPin: Peer Support Platform',
    icon: '📍',
    gradient: ['#4A5BA8', '#6B7EC4'],
    featured: false,
    category: ['Full-Stack', 'Mobile'],
    maturity: 'SHIPPED PROTOTYPE',
    role: 'Full-stack mobile builder',
    focus: 'Campus support, location matching, safety guardrails',
    summary:
      'A mobile app that connects students who need help with nearby peers who can give it, built for the moment when campus resources feel out of reach.',
    oneliner:
      'A mobile app that connects students who need help with nearby peers who can give it, built for the moment when campus resources feel out of reach.',
    technicalContribution:
      'Built a location-aware iOS and backend system for peer-support requests, campus authentication, and distance-based matching.',
    problem:
      'Students in distress often do not know who around them can help, and existing campus resources are not always accessible in the moment. CalPin was built to close that gap.',
    solution:
      'Full-stack mobile application with Google OAuth for Berkeley email verification, real-time location-based request matching, an interactive map UI with draggable request cards, and a gamified profile system to keep helpers engaged over time.',
    pipeline: `iOS (SwiftUI + MapKit)
     │
[Google Sign-In SDK] → Berkeley email domain verification
     │
[Alamofire] → REST API calls
     │
[Node.js / Express API] → request matching + distance-based sorting
     │
[PostgreSQL] → help_requests + help_offers tables
     │
[Railway] → cloud deployment`,
    stack: ['Swift', 'SwiftUI', 'Node.js', 'Express', 'PostgreSQL', 'Railway', 'Google OAuth', 'MapKit'],
    stackGroups: [
      { label: 'Mobile', items: ['Swift', 'SwiftUI', 'MapKit'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Railway'] },
      { label: 'Auth/Matching', items: ['Google OAuth', 'distance sorting', 'request guardrails'] },
    ],
    highlights: [
      'Built map-based request browsing with location-aware distance sorting',
      'Enforced Berkeley OAuth and self-help guardrails at the API layer',
      'Designed urgency and distance filters for quick peer-support decisions',
    ],
    decisions: [
      'Enforced "cannot help your own request" at the API layer, not just the UI, so the rule holds under any client',
      'Used a notification-based auto-refresh pattern instead of polling to keep map state consistent across views',
      'Made urgency and distance the primary filters to reduce cognitive load for helpers acting quickly',
    ],
    metrics: ['Map-based matching', 'Berkeley OAuth', 'Distance sorting'],
    nextImprovements: [
      'Add clearer safety escalation paths for high-urgency requests',
      'Build moderation and reporting workflows before broader campus rollout',
      'Add notification delivery guarantees for nearby helpers',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/CalPin.git',
      demo: null,
    },
  },
  {
    id: 'crypto-pipeline',
    title: 'Crypto Trading ML Pipeline',
    icon: '📈',
    gradient: ['#2D2D2D', '#4A4A4A'],
    featured: false,
    category: ['ML', 'Data Engineering'],
    maturity: 'Shipped',
    role: 'ML pipeline builder',
    focus: 'Feature selection, held-out evaluation, directional prediction',
    summary:
      'A principled ML pipeline for crypto direction prediction, built around the insight that collinearity kills models before they ever reach production.',
    oneliner:
      'A principled ML pipeline for crypto direction prediction, built around the insight that collinearity kills models before they ever reach production.',
    technicalContribution:
      'Built a Binance data pipeline with technical indicators, VIF-based feature selection, logistic regression, and held-out directional evaluation.',
    problem:
      'Crypto price signals are noisy and highly collinear. Without principled feature selection, models overfit on lagged price data and look great in training but fail out of sample.',
    solution:
      'Built a full pipeline from Binance API data ingestion through VIF-based feature selection to logistic regression directional prediction, with clean evaluation on held-out data.',
    pipeline: `Binance API → BTC/ETH data
     │
[Feature engineering] → technical indicators + lagged features
     │
[VIF analysis] → remove multicollinear features
     │
[Logistic regression] → directional prediction (up/down)
     │
[Evaluation] → directional accuracy + confusion matrix`,
    stack: ['Python', 'Scikit-learn', 'Binance API', 'VIF', 'Pandas', 'feature engineering'],
    stackGroups: [
      { label: 'Data/Features', items: ['Binance API', 'Pandas', 'technical indicators'] },
      { label: 'Modeling', items: ['Scikit-learn', 'logistic regression', 'VIF'] },
      { label: 'Evaluation', items: ['held-out testing', 'directional accuracy', 'confusion matrix'] },
    ],
    highlights: [
      'Engineered lagged crypto features and technical indicators from Binance data',
      'Used VIF to remove multicollinear features before modeling',
      'Evaluated directional accuracy on held-out data instead of training fit',
    ],
    decisions: [
      'Used VIF (Variance Inflation Factor) rather than simple correlation matrices for more principled multicollinearity detection in regression inputs',
      'Chose directional accuracy as the primary metric because absolute price prediction is unreliable, but direction is actionable',
    ],
    metrics: ['68% directional accuracy', 'Held-out evaluation', 'VIF feature selection'],
    nextImprovements: [
      'Benchmark against tree-based and regularized models with the same feature set',
      'Add walk-forward validation to better match trading deployment conditions',
      'Track performance degradation across changing market regimes',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/crypto-currency.git',
      demo: null,
    },
  },
]
