export const projects = [
  {
    id: 'cityliving-sim',
    title: 'CityLiving Sim: Chicago Neighborhood Simulator',
    icon: '🏙️',
    gradient: ['#315C6B', '#A33F2F'],
    featured: true,
    status: 'Latest Project',
    oneliner:
      'A decision support tool for choosing where to live in Chicago, grounded in real civic data instead of AI guesswork.',
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
    decisions: [
      'Made the agent tool-first: the model routes to structured crime, transit, commute, housing, 311, entertainment, and profile tools before generating advice',
      'Separated neighborhood transit access from exact door-to-door routing so the product does not overclaim commute precision',
      'Added deterministic fallbacks and validation rules so the app stays useful when LLM or civic API calls are unavailable',
      'Modeled sparse data explicitly in the UI and responses instead of letting the AI fill gaps with confident-sounding fiction',
      'Used maps and Street View alongside text because neighborhood choice is spatial and experiential, not just tabular',
    ],
    metrics: ['77 community areas', '7 grounded tools', 'Live Vercel demo'],
    links: {
      github: 'https://github.com/yeeelaineeeliang/citysim.git',
      demo: 'https://citysim-gamma.vercel.app/',
    },
  },
  {
    id: 'career-coach',
    title: 'CareerCoach: LangGraph Multi Agent System',
    icon: '🧭',
    gradient: ['#C4683A', '#D4943A'],
    featured: true,
    status: 'Shipped',
    oneliner:
      'A multi agent career coach that routes resume, interview, outreach, and gap analysis questions to specialists, then synthesizes them into one answer.',
    problem:
      'Job seekers juggle disconnected tools for resume help, interview prep, and networking. There\'s no single system that understands your profile, target roles, and projects holistically and coaches you across all dimensions.',
    solution:
      'Built a LangGraph StateGraph with 9 nodes — an orchestrator classifies intent via Haiku, then conditionally routes to specialized Opus agents (gap analysis, resume rewriting, mock interviews, study planning, outreach). Agents share state through a typed schema so downstream nodes build on upstream findings. SQLite checkpointing enables cross-session persistence.',
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
    decisions: [
      'Used Haiku for routing and ranking, Opus for deep reasoning — fast + cheap classification where it matters, heavy inference only where needed',
      'Regex-based weak area extraction from interview output avoids an extra LLM call while keeping the pipeline reliable',
      'Project matching uses a keyword scoring fallback chain — LLM ranking only triggers for large libraries (>8 projects)',
      'Zero Streamlit imports inside graph/ — clean separation enables future migration to other frameworks',
      'Synthesis node strips raw sub-agent messages to force coherent narrative instead of verbatim pasting',
    ],
    metrics: ['9 specialized agents', '6 intent routed paths', 'Remembers across sessions'],
    links: {
      demo: 'https://careerofferengine.streamlit.app',
    },
  },
  {
    id: 'fraud-copilot',
    title: 'AI Fraud Investigation Copilot',
    icon: '🛡️',
    gradient: ['#1E2D4A', '#2D4A6B'],
    featured: true,
    status: 'Shipped',
    oneliner:
      'Turns a flagged transaction into a full investigation brief with model scores, plain English explanations, and historical precedents pulled automatically.',
    problem:
      'Fraud detection models flag suspicious transactions but give analysts nothing to work with — no explanation, no context, no suggested action. That turns every flagged case into a slow, inconsistent manual investigation.',
    solution:
      'Built an end-to-end pipeline that takes a flagged transaction, generates a plain-English explanation using SHAP feature importance, retrieves similar historical fraud patterns via FAISS vector search, and produces a structured investigation summary and recommended action via Claude (Sonnet). The analyst stays in control — the copilot advises, never decides.',
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
    decisions: [
      'Used FAISS over a hosted vector DB like Pinecone to keep the system self-contained — no external dependencies, index built at startup',
      'Chose SHAP TreeExplainer over LIME for more consistent explanations given XGBoost\'s tree structure',
      'Kept the analyst in the loop by design — the copilot recommends, never acts autonomously',
      'The PCA-transformed features (V1–V28) present a real privacy-accuracy tradeoff that gets surfaced in the UI rather than hidden',
    ],
    metrics: ['95%+ precision', '0.98 AUC'],
    links: {
      github: 'https://github.com/yeeelaineeeliang/fraud-copilot.git',
    },
  },
  {
    id: 'hri-memory',
    title: 'Memory Aware Rapport Engine (HRI Research)',
    icon: '🤖',
    gradient: ['#2D6B5E', '#4A8B7A'],
    featured: true,
    status: 'UC Chicago HRI Lab',
    oneliner:
      'Gives a social robot memory so it can pick up where it left off and build something that actually feels like a relationship over time.',
    problem:
      'Social robots typically have no memory of previous interactions, which makes any sense of ongoing relationship impossible. The research question: can an LLM-powered memory system make robot rapport feel meaningfully continuous?',
    solution:
      'Built a Kotlin/Android rapport engine for the Temi robot that retrieves user-specific context from prior sessions, selects appropriate self-disclosure and reciprocal disclosure strategies, and generates responses via a prompted LLM — all under tight real-time constraints.',
    pipeline: `Prior session data
     │
[Memory retrieval] → synonym group matching → topic-aware context
     │
[LLM prompt] → self-disclosure + rapport strategy selection
     │
[Kotlin/Android app] → real-time response on Temi robot
     │
[Python module] → self-disclosure generation + validation`,
    stack: ['Kotlin', 'Android', 'Python', 'LLM prompting', 'FAISS style retrieval'],
    decisions: [
      'Synonym group coverage needed careful curation — broader matching improves recall but risks topically incoherent responses',
      'Research validity constrained engineering more tightly than a product context would — can\'t freely A/B test with randomized participants',
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding post-generation validation before the robot speaks',
    ],
    metrics: []
  },
  {
    id: 'calpin',
    title: 'CalPin: Peer Support Platform',
    icon: '📍',
    gradient: ['#4A5BA8', '#6B7EC4'],
    featured: true,
    status: 'In Progress',
    oneliner:
      'A mobile app that connects students who need help with nearby peers who can give it, built for the moment when campus resources feel out of reach.',
    problem:
      'Students in distress often don\'t know who around them can help, and existing campus resources aren\'t always accessible in the moment. CalPin was built to close that gap.',
    solution:
      'Full-stack mobile application with Google OAuth (Berkeley email verification), real-time location-based request matching, an interactive map UI with draggable request cards, and a gamified profile system to keep helpers engaged over time.',
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
    decisions: [
      'Enforced "can\'t help your own request" at the API layer, not just the UI — so it actually holds under any client',
      'Used a notification-based auto-refresh pattern instead of polling to keep map state consistent across views',
      'Made urgency and distance the primary filters to reduce cognitive load for helpers acting quickly',
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
    status: 'Shipped',
    oneliner:
      'A principled ML pipeline for crypto direction prediction, built around the insight that collinearity kills models before they ever reach production.',
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
    stack: ['Python', 'Scikit learn', 'Binance API', 'VIF', 'Pandas', 'feature engineering'],
    decisions: [
      'Used VIF (Variance Inflation Factor) rather than simple correlation matrices — more principled for detecting multicollinearity in regression inputs',
      'Chose directional accuracy as the primary metric because absolute price prediction is unreliable, but direction is actionable',
    ],
    metrics: ['68% directional accuracy on held out data', 'Clean VIF feature selection'],
    links: {
      github: 'https://github.com/yeeelaineeeliang/crypto-currency.git',
      demo: null,
    },
  },
]
