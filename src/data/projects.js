export const projects = [
  {
    id: 'career-coach',
    title: 'CareerCoach — LangGraph Multi-Agent System',
    icon: '🧭',
    gradient: ['#D97355', '#D4943A'],
    featured: true,
    status: 'Shipped',
    oneliner:
      'A multi-agent career coaching app that routes job seeker queries through specialized Claude-based agents — gap analysis, resume rewriting, mock interviews, and outreach — all orchestrated by a LangGraph state graph.',
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
    metrics: ['9 specialized agents', '6 intent-routed paths', 'Cross-session persistence'],
    links: {
      github: '#',
      demo: 'https://careerofferengine.streamlit.app',
    },
  },
  {
    id: 'fraud-copilot',
    title: 'AI Fraud Investigation Copilot',
    icon: '🛡️',
    gradient: ['#D97355', '#E8A87C'],
    featured: true,
    status: 'Shipped',
    oneliner:
      'Built for fraud analysts who spend hours manually reviewing flagged transactions — this copilot explains why a transaction was flagged, surfaces similar historical cases, and recommends next steps, all in one report.',
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
    stack: ['Python', 'XGBoost', 'SHAP', 'FAISS', 'sentence-transformers', 'Claude API', 'Streamlit'],
    decisions: [
      'Used FAISS over a hosted vector DB like Pinecone to keep the system self-contained — no external dependencies, index built at startup',
      'Chose SHAP TreeExplainer over LIME for more consistent explanations given XGBoost\'s tree structure',
      'Kept the analyst in the loop by design — the copilot recommends, never acts autonomously',
      'The PCA-transformed features (V1–V28) present a real privacy-accuracy tradeoff that gets surfaced in the UI rather than hidden',
    ],
    metrics: ['95%+ precision', '0.98 AUC'],
    links: {
      github: 'https://github.com/yeeelaineeeliang/fraud-copilot.git',
      demo: '#',
    },
  },
  {
    id: 'hri-memory',
    title: 'Memory-Aware Rapport Engine (HRI Research)',
    icon: '🤖',
    gradient: ['#C4603F', '#D97355'],
    featured: false,
    status: 'Research',
    oneliner:
      'Exploring whether a social robot can actually remember you. Built the memory and conversation system that lets the Temi robot pick up where it left off — then studied whether that continuity changes how people relate to it.',
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
    stack: ['Kotlin', 'Android', 'Python', 'LLM prompting', 'FAISS-style retrieval'],
    decisions: [
      'Synonym group coverage needed careful curation — broader matching improves recall but risks topically incoherent responses',
      'Research validity constrained engineering more tightly than a product context would — can\'t freely A/B test with randomized participants',
      'Reduced hallucinated self-disclosures by tightening prompt constraints and adding post-generation validation before the robot speaks',
    ],
    metrics: ['UC Chicago HRI Lab']
  },
  {
    id: 'calpin',
    title: 'CalPin — Peer Support Platform',
    icon: '📍',
    gradient: ['#E8A87C', '#F0C5A8'],
    featured: true,
    status: 'In Progress',
    oneliner:
      'A full-stack iOS app that makes peer support on campus as easy as opening a map — connect with someone nearby who can help, right when you need it.',
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
    gradient: ['#D4943A', '#E8A87C'],
    featured: false,
    status: 'Shipped',
    oneliner:
      'End-to-end ML pipeline for BTC/ETH price direction prediction — built from raw Binance data to feature selection to evaluation, with a focus on preventing the model from fooling itself on noisy, collinear signals.',
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
    stack: ['Python', 'scikit-learn', 'Binance API', 'VIF', 'Pandas', 'feature engineering'],
    decisions: [
      'Used VIF (Variance Inflation Factor) rather than simple correlation matrices — more principled for detecting multicollinearity in regression inputs',
      'Chose directional accuracy as the primary metric because absolute price prediction is unreliable, but direction is actionable',
    ],
    metrics: ['~68% directional accuracy', 'Clean VIF-based feature selection'],
    links: {
      github: 'https://github.com/yeeelaineeeliang/crypto-currency.git',
      demo: null,
    },
  },
]
