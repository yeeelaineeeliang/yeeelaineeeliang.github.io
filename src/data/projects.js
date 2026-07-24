export const projects = [
  {
  id: 'cityliving-sim',
  title: 'LiveThere',
  icon: '🏙️',
  gradient: ['#315C6B', '#9A3324'],
  featured: true,

  status: 'Latest Project',
  maturity: 'In Progress',
  role: 'Solo full-stack builder',
  focus: 'Neighborhood simulation',
  category: ['Current Work', 'AI Systems', 'Full-Stack', 'Agents', 'Data Engineering'],

  summary:
    'Neighborhood tools reduce a place to a single score. LiveThere compares commute, cost, safety, transit, and everyday amenities against what matters to you, so you can see what daily life would actually look like before you move.',
  domainTags: ['Civic Data', 'Simulation', 'Grounded AI'],

  oneliner:
    'Try living there before you move there.',

  technicalContribution:
    'Built a full-stack neighborhood simulation platform powered by a PySpark civic-data pipeline, PyTorch crime forecasting, structured tool-calling, and a grounded AI advisor across a Next.js, Supabase, and FastAPI stack.',

  problem:
    'Most housing tools help people filter listings. They do not help people understand what daily life would feel like after moving in: the commute, the errands, the safety tradeoffs, the transit gaps, and the street-level context behind a neighborhood.',

  editorialCallout: {
    lead: 'A neighborhood is not one score.',
    body: 'It is a set of daily tradeoffs: what feels convenient, what feels safe, what feels far, and what the data can actually support.',
  },

  solution:
    'LiveThere turns neighborhood search into a daily-life simulation. Users enter their budget, workplace, commute preferences, and lifestyle priorities, then compare how different Chicago neighborhoods fit their routine. The product combines map exploration, Street View context, neighborhood scoring, crime trend forecasting, transit and commute signals, 311 responsiveness, housing affordability, and local amenities. A grounded AI advisor answers follow-up questions by checking structured civic tools before generating a response, so recommendations are tied to data instead of generic neighborhood stereotypes.',

  story:
    'I built LiveThere around a simple question: what if choosing a neighborhood felt less like browsing listings and more like trying on a version of your life? The technical challenge was not only collecting city data. It was turning messy civic records into practical advice someone could use before signing a lease.',

  howItWorks: ['Describe your routine', 'Compare neighborhoods', 'Ask grounded questions', 'Review tradeoffs'],

  technicalSystem: [
    {
      layer: 'Data foundation',
      description:
        'Built a PySpark ELT pipeline over 8 Chicago civic datasets, processing 22M+ records into 10 Parquet serving marts across 77 community areas.',
    },
    {
      layer: 'Forecasting',
      description:
        'Trained a PyTorch Temporal Convolutional Network on 25 years of Chicago crime records to forecast monthly crime trends by type with confidence scores.',
    },
    {
      layer: 'Grounded AI',
      description:
        'Built a tool-first advisor that checks structured crime, transit, commute, housing, 311, entertainment, and neighborhood-profile data before generating responses.',
    },
    {
      layer: 'Product experience',
      description:
        'Built the interactive product with Next.js, Supabase, Clerk, React Leaflet, and FastAPI for map exploration, user profiles, neighborhood comparison, and inference.',
    },
  ],

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
    'Parquet',
    'Groq',
  ],

  stackGroups: [
    {
      label: 'Frontend',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'React Leaflet'],
    },
    {
      label: 'Data/ML',
      items: ['PySpark', 'PyTorch TCN', 'Parquet'],
    },
    {
      label: 'Backend/AI',
      items: ['FastAPI', 'Supabase', 'Clerk', 'Groq'],
    },
  ],

  pills: ['Civic Data', 'Grounded AI', 'Full-Stack Product'],

  reliabilityNote:
    'Checks structured civic data before generating neighborhood recommendations.',

  productPillars: [
    {
      title: 'Daily-life comparison',
      description:
        'Budget, commute, safety, transit, amenities, and street-level context — the factors that actually shape daily routines, not just rent price.',
    },
    {
      title: 'Civic data foundation',
      description:
        '22M+ records from 8 Chicago civic datasets across 77 community areas, normalized into a queryable foundation for every recommendation.',
    },
    {
      title: 'Grounded AI advisor',
      description:
        'Tool-first responses that check structured civic data before generating advice, so recommendations are traceable back to real numbers.',
    },
  ],

  decisions: [
    'Framed the product around daily routines, not generic neighborhood rankings.',
    'Made the AI advisor tool-first so it checks civic data before answering.',
    'Separated neighborhood-level transit access from exact door-to-door routing to avoid overclaiming commute precision.',
    'Surfaced sparse data explicitly instead of letting AI fill gaps with unsupported assumptions.',
  ],

  metrics: [
    '22M+ records processed',
    '8 civic datasets',
    '77 Chicago community areas',
    '25 years of crime history',
    '10 Parquet serving marts',
  ],

  metricNote:
    'Every recommendation is grounded in structured neighborhood data, not open-ended AI guessing.',

  nextImprovements: [
    'Add saved comparison boards for users choosing between neighborhoods.',
    'Improve commute simulation with time-of-day and route-level modeling.',
    'Expand the data pipeline so LiveThere can support cities beyond Chicago.',
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
      'Job seekers juggle separate tools for resumes, interviews, and networking. CareerCoach routes each question to the right specialist agent, then synthesizes one coherent, goal-aware plan.',
    domainTags: ['Multi-Agent', 'LLM Orchestration'],
    oneliner:
      'Routes career questions through specialist agents, then gives one coherent plan.',
    technicalContribution:
      'Designed a routed multi-agent workflow where specialized career agents share state, persist progress, and synthesize one coherent answer.',
    problem:
      'Job seekers juggle disconnected tools for resume help, interview prep, and networking. There is no single system that understands your profile, target roles, and projects together and coaches you across all dimensions.',
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
    pills: ['Agents', 'LLM Orchestration', 'Cost Optimization'],
    reliabilityNote: 'Routes simple requests before using heavier reasoning.',
    highlights: [
      'Designed conditional routing across 9 specialized career agents using Claude Haiku 4.5 for classification and Claude Sonnet 4.5 for reasoning',
      'Built persistent memory for multi-session job-search workflows via SQLite checkpointing',
      'Integrated calendar context for planning and interview preparation',
      'Separated graph logic from Streamlit so the system can move to other interfaces',
    ],
    decisions: [
      'Used Claude Haiku 4.5 for routing and classification, and Claude Sonnet 4.5 for deep reasoning, so cheap models handle high-volume classification and heavier inference is reserved for where it matters.',
      'Extracted weak areas from interview output with regex instead of another LLM call, keeping the pipeline fast and reliable.',
      'Matched projects with a keyword scoring fallback chain first, only calling an LLM to rank results when a library exceeds 8 projects.',
      'Kept Streamlit imports out of the graph/ package entirely, so the workflow logic stays portable to other interfaces.',
      'Stripped raw sub-agent messages in the synthesis node, forcing a coherent narrative instead of verbatim pasting.',
      'Reduced unnecessary LLM calls with intent bypass, cached resume bullets, and conditional synthesis, keeping cost down without sacrificing response quality.',
    ],
    metrics: ['9 specialized agents', '6 intent-routed paths'],
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
     'Flagged transactions usually give analysts nothing to act on. This copilot explains why a transaction was flagged, surfaces similar historical fraud cases, and drafts a structured investigation brief for review.',
      domainTags: ['XGBoost', 'SHAP', 'RAG', 'Claude API'],
    oneliner:
      'Explains flagged transactions, retrieves similar fraud cases, and drafts analyst-ready investigation briefs.',
    cardBadge: 'Human-in-the-loop AI',
    technicalContribution:
      'Combined fraud scoring, SHAP explanations, FAISS vector retrieval, and LLM-generated reports into one analyst-in-the-loop investigation flow.',
    problem:
      'Fraud detection models flag suspicious transactions but give analysts nothing to work with: no explanation, no context, no suggested action. That turns every flagged case into a slow, inconsistent manual investigation.',
    solution:
      'The detection model is XGBoost with SMOTE oversampling (applied to training data only) on 550,000 transactions from a public Kaggle dataset, using a temporal train/test split and StandardScaler fit on training data only. It achieves 90% recall at a 0.6% false-positive rate. Built on top of that, the copilot takes a flagged transaction, generates a plain-English explanation using SHAP TreeExplainer, retrieves similar historical fraud patterns via FAISS vector search (384-dim sentence-transformer embeddings), and produces a structured investigation summary and recommended action via Claude Sonnet API. The analyst stays in control. The copilot advises. It never decides.',
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
    pills: ['Machine Learning', 'RAG', 'Analyst Tooling'],
    reliabilityNote: 'Recommends to analysts, never acts autonomously.',
    highlights: [
      'Built XGBoost detection model on 550,000 transactions with SMOTE (training only), achieving 90% recall at 0.6% false-positive rate',
      'Used SHAP TreeExplainer to generate per-transaction feature explanations for analyst review',
      'Used FAISS retrieval (384-dim sentence-transformer embeddings) to surface similar historical fraud patterns',
      'Generated analyst-ready investigation summaries via Claude Sonnet API while keeping final judgment human-led',
    ],
    decisions: [
      'Used FAISS instead of a hosted vector DB like Pinecone, so the system stays self-contained with no external index dependency.',
      'Chose SHAP TreeExplainer over LIME, since it gives more consistent explanations for XGBoost\'s tree structure.',
      'Applied SMOTE to training data only, avoiding any leakage of resampling information into the test set.',
      'Kept the analyst in the loop by design, so the copilot recommends and never acts autonomously.',
      'Surfaced the PCA-transformed feature privacy tradeoff directly in the UI instead of hiding it.',
    ],
    metrics: ['90% recall', '0.6% false-positive rate'],
    // Presentational-only override: combines the two metrics above into the
    // single headline stat for the case-study hero (see ProjectDetail.jsx).
    heroMetric: '90% recall at 0.6% false-positive rate',
    nextImprovements: [
      'Add side-by-side analyst feedback capture for report quality',
      'Track retrieval hit quality against confirmed fraud categories',
      'Expose confidence and uncertainty language more explicitly in reports',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/fraud-copilot.git',
      demo: 'https://fraud-copilotgit-mmsrktsf5ja4nwllax5hrt.streamlit.app',
    },
  },
  {
    id: 'hri-memory',
    title: 'Temi (HRI Research)',
    icon: '🤖',
    gradient: ['#2D6B5E', '#4A8B7A'],
    featured: false,
    category: ['Research', 'AI Systems'],
    maturity: 'In Progress',
    role: 'HRI research engineer',
    focus: 'social interaction, constrained generation, rapport',
    summary:
    'Social robots typically reset with every interaction. This rapport engine gives Temi memory of prior sessions and tests, in a live HRI study, whether that continuity changes how warm and rapport-building it feels.',
    domainTags: ['Robotics', 'HRI Research'],
    oneliner:
      'Gives a social robot memory of you, carried across sessions.',
    technicalContribution:
      'Built a Temi robot rapport engine that retrieves prior-session context using keyword extraction and Jaccard similarity, then constrains LLM responses for a human-robot interaction study.',
    problem:
      'Social robots typically have no memory of previous interactions, which makes any sense of an ongoing relationship impossible. The open research question is whether an LLM-powered memory system can make robot rapport feel meaningfully continuous.',
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
    pills: ['HRI Research', 'On Device Retrieval', 'Social Robots'],
    reliabilityNote: 'Uses Jaccard matching for on-device latency constraints.',
    highlights: [
      'Retrieved user-specific prior-session context during live robot dialogue using keyword extraction and Jaccard similarity',
      'Constrained LLM self-disclosures for research validity and reduced hallucinated responses via post-generation validation',
      'Ran the study inside a 2×2 factorial design measuring CCR rapport subscales and ROSAS warmth scores',
    ],
    decisions: [
      'Used keyword extraction with Jaccard similarity and synonym expansion instead of embedding-based retrieval, since this is an on-device system with strict latency constraints and the simpler approach is easier to audit under research conditions.',
      'Held the study design fixed instead of iterating with free-form A/B testing, since research validity required tighter constraints than a typical product context.',
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding post-generation validation before the robot speaks.',
    ],
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
    'Students in distress often don’t know who nearby can help. CalPin matches peer support requests by location and urgency across a Berkeley-only network, with safety checks enforced at the API layer.',
    domainTags: ['Community', 'Mobile'],
    oneliner:
      'Matches nearby peer support requests, with safety checks built into the flow.',
    technicalContribution:
      'Built a location-aware iOS app and Node.js/Express backend with 15+ REST endpoints, Berkeley email authentication, distance-based matching, and Claude Sonnet API content moderation.',
    problem:
      'Students in distress often do not know who around them can help, and existing campus resources are not always accessible in the moment.',
    solution:
      'A full-stack mobile app with Google OAuth restricted to the Berkeley email domain, real-time location-based request matching, an interactive map UI with draggable request cards, and Claude Sonnet API content moderation across 9 categories, backed by a Node.js API with 15+ REST endpoints. Built and evaluated as a prototype rather than published to the App Store.',
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
    pills: ['SwiftUI', 'Moderation', 'Campus Product'],
    reliabilityNote: 'Enforces moderation at the API layer.',
    highlights: [
      'Built map-based request browsing with location-aware distance sorting across 15+ REST endpoints',
      'Enforced Berkeley OAuth and self-help guardrails at the API layer',
      'Integrated Claude Sonnet API for content moderation across 9 categories',
    ],
    decisions: [
      'Enforced "cannot help your own request" at the API layer so the rule holds under any client.',
      'Used notification-based auto-refresh instead of polling, keeping map state consistent across views.',
      'Made urgency and distance the primary filters, reducing cognitive load for helpers who need to act quickly.',
    ],
    metrics: ['15+ REST endpoints', '9 moderation categories'],
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
      'Crypto price signals are noisy and highly collinear, which makes naive models overfit. This pipeline uses VIF-based feature selection and held-out evaluation to predict BTC/ETH direction, then runs live with rolling refits.',
    domainTags: ['Fintech', 'Forecasting'],
    oneliner:
      'Predicts crypto price direction with disciplined feature selection and held-out evaluation.',
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
    stack: ['Python', 'Scikit-learn', 'Binance API', 'Pandas', 'Railway', 'APScheduler', 'Supabase Realtime', 'Next.js', 'Clerk'],
    stackGroups: [
      { label: 'Data/Features', items: ['Binance API', 'Pandas', 'technical indicators'] },
      { label: 'Modeling', items: ['Scikit-learn', 'OLS regression', 'VIF'] },
      { label: 'Live System', items: ['Railway', 'APScheduler', 'Supabase Realtime', 'Next.js', 'Clerk'] },
    ],
    pills: ['Forecasting', 'Live Pipeline', 'Time Series'],
    reliabilityNote: 'Uses rolling refit and live prediction logging.',
    highlights: [
      'Engineered lagged crypto features and technical indicators from 50,000+ hourly Binance records',
      'Used VIF to iteratively remove multicollinear features (threshold ~10) before modeling',
      'Evaluated directional accuracy on held-out data: 65% on BTC/ETH direction prediction',
      'Extended into a live system on Railway with 30-second rolling refit and Supabase Realtime delivery',
    ],
    decisions: [
      'Used VIF (Variance Inflation Factor) instead of simple correlation matrices, for more principled multicollinearity detection in the OLS inputs.',
      'Chose directional accuracy as the primary metric, since absolute price prediction is unreliable but direction is actionable.',
    ],
    metrics: ['65% directional accuracy', '50,000+ hourly records'],
    nextImprovements: [
      'Benchmark against tree-based and regularized models with the same feature set',
      'Add walk-forward validation to better match trading deployment conditions',
      'Track performance degradation across changing market regimes',
    ],
    links: {
      github: 'https://github.com/yeeelaineeeliang/crypto-currency.git',
      demo: 'https://cryptosignals-gray.vercel.app/',
    },
  },
]
