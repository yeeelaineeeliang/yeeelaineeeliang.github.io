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
    category: ['Current Work', 'AI Systems', 'Full-Stack', 'Agents', 'Data Engineering'],
    summary:
      'Choosing where to live is more than rent math. I built this to answer the question with real data: transit reliability, crime patterns, 311 response times, and Street View across 77 Chicago neighborhoods, with an AI advisor that has to check actual civic datasets before it tells you anything.',
    oneliner:
      'A neighborhood tool that pulls real Chicago data together so you can figure out where to live without just guessing.',
    technicalContribution:
      'Built a PySpark ELT pipeline over 8 civic datasets, a PyTorch Temporal Convolutional Network for crime forecasting, and a grounded AI advisor wired to structured civic tools across a full Next.js + Supabase stack.',
    problem:
      'Choosing where to live is not just a rent calculation. People need to understand commute friction, street safety, city-service responsiveness, transit reliability, and the feel of everyday routines before they sign a lease.',
    solution:
      'The data foundation is a PySpark ELT pipeline across 8 heterogeneous Chicago civic datasets, normalizing 22M+ raw records into 10 Parquet serving marts for all 77 community areas. A PyTorch Temporal Convolutional Network trained on 25 years of Chicago crime records forecasts monthly crime trends by type with confidence scores, served via a FastAPI inference endpoint. Users enter budget, workplace, commute preference, and lifestyle priorities, then compare neighborhood fit, explore a map, and ask grounded follow-up questions. The advisor queries structured civic tools before generating any response, and sparse data is surfaced explicitly rather than hidden.',
    pipeline: `8 Chicago civic datasets (ELT)
     │
[PySpark] → 22M+ raw records → 10 Parquet marts (77 community areas)
     │
[PyTorch TCN] → 25yr crime history → monthly forecasts + confidence scores
     │
[FastAPI endpoint] → crime trend inference
     │
User profile + neighborhood selection
     │
[Matching engine] → budget, commute, lifestyle fit
     │
[Question router] → structured civic tools
     │
  ├─ crime + safety        ├─ housing affordability
  ├─ CTA transit + commute ├─ 311 service responsiveness
  └─ entertainment + neighborhood profile
     │
[Grounded narrator] → practical neighborhood advice
     │
[Next.js + Supabase + Clerk] → full-stack frontend`,
    stack: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Supabase Postgres',
      'Clerk',
      'React Leaflet',
      'FastAPI',
      'PyTorch',
      'PySpark',
    ],
    stackGroups: [
      { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
      { label: 'Data/ML', items: ['PySpark', 'PyTorch TCN', 'Parquet'] },
      { label: 'Backend/AI', items: ['FastAPI', 'Supabase', 'Clerk'] },
    ],
    highlights: [
      'Built a PySpark ELT pipeline over 8 heterogeneous Chicago civic datasets, normalizing 22M+ raw records into 10 Parquet serving marts across 77 community areas',
      'Trained a PyTorch Temporal Convolutional Network on 25 years of Chicago crime records to forecast monthly crime trends by type with confidence scores',
      'Built grounded AI advisor wired to structured civic tools — queries real data before generating any response, surfaces sparse data explicitly',
      'Designed a map-first interface for exploring daily-life factors across neighborhoods',
      'Deployed full-stack app with Next.js, Supabase, Clerk, and a FastAPI inference endpoint',
    ],
    decisions: [
      'Made the advisor tool-first: the model routes to structured crime, transit, commute, housing, 311, entertainment, and profile tools before generating any response',
      'Separated neighborhood transit access from exact door-to-door routing so the product does not overclaim commute precision',
      'Added deterministic fallbacks and validation rules so the app stays useful when LLM or civic API calls are unavailable',
      'Modeled sparse data explicitly in the UI and responses instead of letting the AI fill gaps with confident-sounding fiction',
      'Used maps and Street View alongside text because neighborhood choice is spatial and experiential, not just tabular',
    ],
    metrics: ['22M+ records processed', '77 community areas', 'PyTorch TCN forecasting', 'Live demo'],
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
      'Job searching is fragmented across a dozen tools that do not talk to each other. This routes your question to the right specialist — resume rewriter, mock interviewer, gap analyzer, outreach drafter — and each one knows what the others figured out, so you are not starting from scratch every time.',
    oneliner:
      'A multi-agent career coach where each specialist shares what it learned, so downstream agents build on upstream findings instead of starting over.',
    technicalContribution:
      'Designed a routed multi-agent workflow where specialized career agents share state, persist progress, and synthesize one coherent answer.',
    problem:
      'Job seekers juggle disconnected tools for resume help, interview prep, and networking. There is no single system that understands your profile, target roles, and projects holistically and coaches you across all dimensions.',
    solution:
      'Built a LangGraph StateGraph with 9 nodes: an orchestrator classifies intent via Claude Haiku 4.5, then conditionally routes to specialized Claude Sonnet 4.5 agents for gap analysis, resume rewriting, mock interviews, study planning, and outreach. Agents share state through a typed schema so downstream nodes build on upstream findings. SQLite checkpointing enables cross-session persistence.',
    pipeline: `User message (Streamlit)
     │
[Orchestrator — Haiku 4.5] → intent classification (6 categories)
     │
[Conditional routing] → parallel/sequential agent paths
     │
  ├─ [Gap + Study agents — Sonnet 4.5]
  ├─ [ProjectMatcher — Haiku 4.5] → [Resume agent — Sonnet 4.5]
  ├─ [Interview + Study agents — Sonnet 4.5]
  ├─ [Outreach agent — Sonnet 4.5]
  └─ [Synthesizer — Sonnet 4.5]
     │
[Synthesis agent — Sonnet 4.5] → merged response
     │
[SQLite checkpointer] → cross-session persistence`,
    stack: ['Python', 'LangGraph', 'Claude Sonnet 4.5', 'Claude Haiku 4.5', 'Streamlit', 'SQLite', 'Google Calendar OAuth'],
    stackGroups: [
      { label: 'Graph/Agents', items: ['LangGraph', 'Claude Sonnet 4.5', 'Claude Haiku 4.5'] },
      { label: 'Interface', items: ['Streamlit', 'Google Calendar OAuth'] },
      { label: 'Persistence', items: ['SQLite checkpointer', 'typed graph state'] },
    ],
    highlights: [
      'Designed conditional routing across 9 specialized career agents using Claude Haiku 4.5 for classification and Claude Sonnet 4.5 for reasoning',
      'Built persistent memory for multi-session job-search workflows via SQLite checkpointing',
      'Integrated calendar context for planning and interview preparation',
      'Separated graph logic from Streamlit so the system can move to other interfaces',
    ],
    decisions: [
      'Used Claude Haiku 4.5 for routing and classification, Claude Sonnet 4.5 for deep reasoning: fast and cheap classification where it matters, heavier inference only where needed',
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
    category: ['AI Systems', 'ML', 'Data Engineering'],
    maturity: 'Shipped',
    role: 'Solo ML pipeline builder',
    focus: 'Explainable ML, retrieval, analyst reports',
    summary:
      'Fraud models flag transactions. Then what? This takes a flagged transaction and automatically builds out the full picture: what the model scored and why, what similar past cases looked like, and what an analyst should probably do next. The analyst still decides. The copilot does the legwork.',
    oneliner:
      'Takes a flagged transaction and builds the full picture automatically: model score, explanation, and historical precedents, while keeping the analyst in charge.',
    technicalContribution:
      'Combined fraud scoring, SHAP explanations, FAISS vector retrieval, and LLM-generated reports into one analyst-in-the-loop investigation flow.',
    problem:
      'Fraud detection models flag suspicious transactions but give analysts nothing to work with: no explanation, no context, no suggested action. That turns every flagged case into a slow, inconsistent manual investigation.',
    solution:
      'The detection model is XGBoost with SMOTE oversampling (applied to training data only) on 550,000 transactions from a public Kaggle dataset, using a temporal train/test split and StandardScaler fit on training data only. It achieves 90% recall at a 0.6% false-positive rate. Built on top of that, the copilot takes a flagged transaction, generates a plain-English explanation using SHAP TreeExplainer, retrieves similar historical fraud patterns via FAISS vector search (384-dim sentence-transformer embeddings), and produces a structured investigation summary and recommended action via Claude Sonnet API. The analyst stays in control; the copilot advises, never decides.',
    pipeline: `550,000 transactions (Kaggle credit card dataset)
     │
[XGBoost + SMOTE (train only)] → fraud probability score
     │                            90% recall, 0.6% false-positive rate
[SHAP TreeExplainer] → top N feature importances
     │
[FAISS RAG] → 384-dim embeddings → similar historical fraud patterns
     │
[Claude Sonnet API] → investigation summary + recommended analyst actions
     │
[Streamlit UI] → full investigation report`,
    stack: ['Python', 'XGBoost', 'SHAP', 'FAISS', 'Sentence Transformers', 'Claude Sonnet API', 'Streamlit'],
    stackGroups: [
      { label: 'ML', items: ['Python', 'XGBoost', 'SHAP TreeExplainer', 'SMOTE'] },
      { label: 'Retrieval', items: ['FAISS', 'Sentence Transformers', '384-dim embeddings'] },
      { label: 'Reports/UI', items: ['Claude Sonnet API', 'Streamlit'] },
    ],
    highlights: [
      'Built XGBoost detection model on 550,000 transactions with SMOTE (training only), achieving 90% recall at 0.6% false-positive rate',
      'Used SHAP TreeExplainer to generate per-transaction feature explanations for analyst review',
      'Used FAISS retrieval (384-dim sentence-transformer embeddings) to surface similar historical fraud patterns',
      'Generated analyst-ready investigation summaries via Claude Sonnet API while keeping final judgment human-led',
    ],
    decisions: [
      'Used FAISS over a hosted vector DB like Pinecone to keep the system self-contained with no external index dependency',
      'Chose SHAP TreeExplainer over LIME for more consistent explanations given XGBoost tree structure',
      'Applied SMOTE to training data only to avoid leaking resampling information into the test set',
      'Kept the analyst in the loop by design: the copilot recommends, never acts autonomously',
      'Surfaced the PCA-transformed feature privacy tradeoff in the UI rather than hiding it',
    ],
    metrics: ['90% recall', '0.6% false-positive rate', 'SHAP explanations', 'FAISS retrieval'],
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
    category: ['Research', 'AI Systems'],
    maturity: 'In Progress',
    role: 'HRI research engineer',
    focus: 'Robot memory, constrained generation, rapport',
    summary:
      'Gives a social robot memory so it can pick up where it left off and build interactions that feel more continuous over time.',
    oneliner:
      'Gives a social robot memory so it can pick up where it left off and build interactions that feel more continuous over time.',
    technicalContribution:
      'Built a Temi robot rapport engine that retrieves prior-session context using keyword extraction and Jaccard similarity, then constrains LLM responses for a human-robot interaction study.',
    problem:
      'Social robots typically have no memory of previous interactions, which makes any sense of ongoing relationship impossible. The research question: can an LLM-powered memory system make robot rapport feel meaningfully continuous?',
    solution:
      'Built a Kotlin/Android rapport engine for the Temi robot that retrieves user-specific context from prior sessions using keyword extraction with Jaccard similarity and synonym expansion, selects appropriate self-disclosure strategies, and generates responses via a prompted LLM under tight real-time constraints. The system runs inside a 2×2 factorial mixed-design study measuring CCR rapport subscales and ROSAS warmth scores.',
    pipeline: `Prior session data
     │
[Keyword extraction] → Jaccard similarity + synonym expansion → topic-aware context
     │
[LLM prompt] → self-disclosure + rapport strategy selection
     │
[Kotlin/Android app] → real-time response on Temi robot
     │
[Python module] → self-disclosure generation + validation`,
    stack: ['Kotlin', 'Android', 'Python', 'LLM prompting', 'Jaccard similarity retrieval'],
    stackGroups: [
      { label: 'Robot App', items: ['Kotlin', 'Android', 'Temi robot'] },
      { label: 'Memory', items: ['Python', 'keyword extraction', 'Jaccard similarity', 'synonym expansion'] },
      { label: 'LLM', items: ['prompt constraints', 'self-disclosure generation', 'post-generation validation'] },
    ],
    highlights: [
      'Retrieved user-specific prior-session context during live robot dialogue using keyword extraction and Jaccard similarity',
      'Constrained LLM self-disclosures for research validity and reduced hallucinated responses via post-generation validation',
      'System runs inside a 2×2 factorial study measuring CCR rapport subscales and ROSAS warmth scores',
    ],
    decisions: [
      'Used keyword extraction with Jaccard similarity and synonym expansion rather than embedding-based retrieval: this is an on-device system with strict latency constraints, and the simpler approach is more auditable under research conditions',
      'Research validity constrained engineering more tightly than a product context would; free-form A/B testing was not appropriate',
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding post-generation validation before the robot speaks',
    ],
    metrics: ['UChicago HRI Lab', '2×2 factorial study', 'CCR + ROSAS measures'],
    nextImprovements: [
      'Complete mixed-methods thematic analysis of participant interviews',
      'Compare rapport outcomes across memory and no-memory study conditions',
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
    maturity: 'Shipped Prototype',
    role: 'Full-stack mobile builder',
    focus: 'Campus support, location matching, safety guardrails',
    summary:
      'A mobile app that connects students who need help with nearby peers who can give it, built for the moment when campus resources feel out of reach.',
    oneliner:
      'A mobile app that connects students who need help with nearby peers who can give it, built for the moment when campus resources feel out of reach.',
    technicalContribution:
      'Built a location-aware iOS app and Node.js/Express backend with 15+ REST endpoints, Berkeley email authentication, distance-based matching, and Claude Sonnet API content moderation.',
    problem:
      'Students in distress often do not know who around them can help, and existing campus resources are not always accessible in the moment. CalPin was built to close that gap.',
    solution:
      'Full-stack mobile application with Google OAuth restricted to Berkeley email domain, real-time location-based request matching, an interactive map UI with draggable request cards, and Claude Sonnet API for content moderation across 9 categories. The backend exposes 15+ REST endpoints. Not published to the App Store; built and evaluated as a prototype.',
    pipeline: `iOS (SwiftUI + MapKit)
     │
[Google Sign-In SDK] → Berkeley email domain verification
     │
[Alamofire] → REST API calls (15+ endpoints)
     │
[Node.js / Express API] → request matching + distance-based sorting
     │
[Claude Sonnet API] → content moderation (9 categories)
     │
[PostgreSQL] → help_requests + help_offers tables
     │
[Railway] → cloud deployment`,
    stack: ['Swift', 'SwiftUI', 'Node.js', 'Express', 'PostgreSQL', 'Railway', 'Google OAuth', 'MapKit', 'Claude Sonnet API'],
    stackGroups: [
      { label: 'Mobile', items: ['Swift', 'SwiftUI', 'MapKit'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Railway'] },
      { label: 'Auth/Safety', items: ['Google OAuth', 'Claude Sonnet API', 'content moderation'] },
    ],
    highlights: [
      'Built map-based request browsing with location-aware distance sorting across 15+ REST endpoints',
      'Enforced Berkeley OAuth and self-help guardrails at the API layer',
      'Integrated Claude Sonnet API for content moderation across 9 categories',
    ],
    decisions: [
      'Enforced "cannot help your own request" at the API layer, not just the UI, so the rule holds under any client',
      'Used a notification-based auto-refresh pattern instead of polling to keep map state consistent across views',
      'Made urgency and distance the primary filters to reduce cognitive load for helpers acting quickly',
    ],
    metrics: ['15+ REST endpoints', 'Berkeley OAuth', 'Claude Sonnet moderation'],
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
      'Built a Binance data pipeline with technical indicators, VIF-based feature selection, OLS regression, and held-out directional evaluation on 50,000+ hourly records. Extended into a live deployed system on Railway.',
    problem:
      'Crypto price signals are noisy and highly collinear. Without principled feature selection, models overfit on lagged price data and look great in training but fail out of sample.',
    solution:
      'Built a full pipeline from Binance API data ingestion through VIF-based feature selection to OLS regression directional prediction on 50,000+ hourly BTC/ETH records (~5.7 years of data), with clean evaluation on held-out data achieving 65% directional accuracy. Extended into a live deployed system: a Python worker on Railway with APScheduler and 30-second rolling refit, Supabase Realtime for data delivery, and a Next.js/Clerk frontend.',
    pipeline: `Binance API → BTC/ETH hourly data (50,000+ records)
     │
[Feature engineering] → technical indicators + lagged features
     │
[VIF analysis] → iteratively remove multicollinear features (threshold ~10)
     │
[OLS regression] → directional prediction (up/down)
     │
[Evaluation] → 65% directional accuracy on held-out data
     │
[Railway worker] → APScheduler + 30-second rolling refit (live system)
     │
[Supabase Realtime + Next.js] → live frontend`,
    stack: ['Python', 'Scikit-learn', 'Binance API', 'Pandas', 'Railway', 'APScheduler', 'Supabase Realtime', 'Next.js'],
    stackGroups: [
      { label: 'Data/Features', items: ['Binance API', 'Pandas', 'technical indicators'] },
      { label: 'Modeling', items: ['Scikit-learn', 'OLS regression', 'VIF'] },
      { label: 'Live System', items: ['Railway', 'APScheduler', 'Supabase Realtime', 'Next.js'] },
    ],
    highlights: [
      'Engineered lagged crypto features and technical indicators from 50,000+ hourly Binance records',
      'Used VIF to iteratively remove multicollinear features (threshold ~10) before modeling',
      'Evaluated directional accuracy on held-out data: 65% on BTC/ETH direction prediction',
      'Extended into a live system on Railway with 30-second rolling refit and Supabase Realtime delivery',
    ],
    decisions: [
      'Used VIF (Variance Inflation Factor) rather than simple correlation matrices for more principled multicollinearity detection in OLS regression inputs',
      'Chose directional accuracy as the primary metric because absolute price prediction is unreliable, but direction is actionable',
    ],
    metrics: ['65% directional accuracy', '50,000+ hourly records', 'VIF feature selection', 'Live on Railway'],
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
