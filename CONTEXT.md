# CONTEXT.md — Source of Truth for elaineyee.com

**Purpose:** This file exists so any AI tool (Claude Code, ChatGPT, etc.) writing or editing copy on
this site actually understands who Elaine is — not just what tools she's used. Treat this the way you'd
treat a real conversation with the person before designing their personal site: read this fully before
writing a single line of copy, and don't invent facts, numbers, or framing that aren't here.

**Rule for AI tools editing this site:** If something here conflicts with what's already written on the
site, THIS FILE WINS. If a fact isn't listed here, leave a visible `[TODO: verify with Elaine]` marker
instead of guessing. Never invent metrics, model names, tools, or outcomes.

This file is safe to commit to the public repo — no personal contacts, no unpublished strategy notes.

---

## 1. Who I am (read this first)

I'm Elaine (Yee Ling) Liang, an M.S. Computer Science student at the University of Chicago (AI
specialization), graduating June 2027. I build AI and data systems that people can actually rely on —
not demos, not one-off scripts, but things with real data underneath, explainable reasoning, and
fallbacks for when something breaks.

**What I'm drawn to:** situations where people are working around a system that should just work
better. A 40-hour manual process that obviously has automation waiting inside it. A decision that
needs data the team already has but isn't using. AI advice nobody can actually interrogate or trust.
Most of my projects start from a real gap I ran into, not a tutorial or a hackathon prompt picked at
random.

**How I actually work:** I start with the person, not the tech — what does someone actually need to
make a decision, not what they say they need. I map what data already exists before reaching for
something new, and I treat sparse or messy data as a constraint to surface honestly, not hide. I build
with fallbacks, because a tool that fails silently is worse than no tool at all — reliability matters
more to me than raw capability.

**My proudest project is CityLiving Sim.** Building agents and grounded chatbots is where I do my best
work and where I actually lose track of time — that's a meaningful signal for what kind of role I want
next, not just what I'm capable of doing.

## 2. Positioning — who I am professionally

**I am an Applied AI Engineer.** Not a generic Data Scientist, not a generic Software Engineer, not a
vague "Data & AI Engineer" label. The thread connecting all my work — data pipelines, ML models,
agentic systems — is that I build applied AI systems end to end: sourcing and cleaning the data,
training or wiring up the model, and building the product layer that makes it usable and trustworthy.

Do NOT position me as:
- "Data Scientist" (too narrow — undersells the systems-building and agent work)
- "Software Engineer" (undersells the ML/data depth)
- A generalist who "sits at the intersection of" multiple fields — I have one coherent identity, not
  three separate ones stapled together

**Voice guidance for how I want to sound:** confident but not arrogant, specific rather than buzzwordy,
willing to name real tradeoffs and honest limitations instead of oversell. Avoid "sits at the
intersection of X and Y" phrasing. Avoid "not X but Y" sentence constructions. Avoid stacking keywords
that wouldn't survive a real follow-up question in an interview — I would rather sound slightly more
modest and be fully able to back up every claim, than sound impressive and get caught overclaiming.

## 3. Education

- **M.S. Computer Science, AI Specialization** — University of Chicago, expected **June 2027**
  (do not write December 2026 — that's from an outdated resume draft)
- **B.A. Data Science (Business/Industrial Analysis), B.A. Statistics** — UC Berkeley, May 2025

## 4. Career direction

Targeting Applied AI Engineer roles at established tech and fintech companies. Actively in the job
market across the Fall 2026 internship cycle, Spring 2027 internships, and full-time offers. Interested
broadly in applied AI, grounded agents, and data tools that help people navigate real decisions —
that's the throughline across the projects on this site, and it's fine for the copy to say this
directly.

## 5. What I'm currently curious about / growth edges

It's fine — good, even — for the site to be honest that I'm still growing in some areas, framed as
active curiosity rather than a deficiency list:

- How AI systems stay useful when their underlying data is sparse, outdated, or wrong
- What actually makes people trust — or distrust — an automated recommendation
- Where "grounding" a model in real data changes its actual behavior versus just changing how
  confident it sounds
- Fine-tuning and adapting smaller models for specific tasks (actively working on this through the
  Studio Bahia TinyLlama project)
- Production-grade evaluation of RAG systems, beyond "it looks right to me"

Do not phrase these as weaknesses or gaps on the public site — phrase them as active, ongoing
interests. (A more clinical/private version of this list, useful for interview prep only, lives outside
this file.)

---

## 6. Verified project facts — do not alter numbers, tools, or model names

### CareerCoach / CareerOS — AI job-search multi-agent system
- LangGraph `StateGraph`, **9 nodes**
- Models: **Claude Sonnet 4.5** for reasoning agents (resume rewriting, gap analysis, interview
  coaching, outreach, synthesis) and **Claude Haiku 4.5** for cheap classification/routing/project
  ranking — **never Opus, never GPT-4o**
- Persistence: **SQLite** (`SqliteSaver` checkpointer) — not MongoDB, not MongoDB Atlas
- 6 intent-routing categories: direct, skills_gap, execution, interview_prep, strategy, outreach
- Cost optimizations: keyword-based intent bypass (skips a Haiku call for obvious intents), 10-message
  sliding window, resume-bullet caching keyed by job_id + JD hash, conditional synthesis skip when only
  one agent runs
- UI: Streamlit; deployed at careerofferengine.streamlit.app

### AI Fraud Investigation Copilot
Two distinct angles on one underlying project — do not mix numbers between them:
- **Fraud v1 (detection model):** XGBoost + SMOTE (applied to training set only) on **550,000
  transactions** (public Kaggle credit card dataset), **90% recall at 0.6% false-positive rate**,
  temporal train/test split, StandardScaler fit on train data only
- **Fraud Copilot (RAG layer on top of v1):** SHAP (TreeExplainer) for per-transaction feature
  explanations, FAISS vector retrieval over historical fraud patterns (384-dim sentence-transformer
  embeddings), Claude API (Sonnet) generating investigation summaries and recommended analyst actions
- Do NOT use "95%+ precision" or "0.98 AUC" anywhere — not sourced from any real evaluation I ran. The
  one number I can defend under questioning is 90% recall at 0.6% FPR.
- The analyst stays in control at every step — the copilot recommends, it never acts autonomously.

### Bitcoin-Ethereum Crypto Model
- Model type: **OLS regression** — NOT logistic regression
- Feature selection: **VIF** (Variance Inflation Factor), iteratively removing features above ~10
- Result: **65% directional accuracy** (not 68%) on **50,000+ hourly records** (~5.7 years of data)
- Framed honestly as a directional trading signal for research purposes — explicitly not claimed as
  production-ready for live trading
- Extended into a live deployed system: Python worker on Railway (APScheduler, 30-second rolling
  refit), Supabase Realtime, Next.js/Vercel frontend, Clerk JWT auth

### CityLiving Sim (my proudest project — give this real weight on the site)
- PySpark **ELT** pipeline (not ETL) — 8 heterogeneous Chicago civic datasets, 22M+ raw records,
  normalized into 10 Parquet serving marts across 77 Chicago community areas
- PyTorch Temporal Convolutional Network trained on 25 years of Chicago crime records, forecasts
  monthly crime trends by type with confidence scores
- FastAPI inference endpoint; Next.js + Supabase (Postgres) + Clerk full-stack frontend
- LLM provider: **Groq** (confirmed correct — do not flag as unverified)
- Live demo: citysim-gamma.vercel.app

### HRI Lab / Temi Robot — Memory-Aware Rapport Engine
- On-device RAG variant: keyword extraction + **Jaccard similarity** + synonym expansion — this is
  intentionally NOT standard embedding/FAISS RAG (that architecture belongs to the Fraud Copilot
  project, not this one — don't merge the two)
- 2×2 factorial mixed-design user study; factors: self-disclosure and empathy; metrics: CCR rapport
  subscales, ROSAS warmth scores
- Kotlin/Android app running on a physical Temi robot; Python module handles self-disclosure generation
  and validation
- Mixed-methods thematic analysis of participant interviews is in progress — once finished, this adds a
  genuine research-methods credential worth surfacing for research-adjacent roles

### CalPin — Peer Support Platform
- iOS (SwiftUI + MapKit) + Node.js/Express/PostgreSQL backend, 15+ REST endpoints
- Google OAuth restricted to Berkeley email domain
- Claude Sonnet API used for content moderation, ~90% accuracy across 9 categories
- **Never published to the App Store — there are no real user metrics.** Frame this project around its
  technical architecture and design decisions, not adoption or impact numbers I don't actually have.

### Wells Fargo — CSBB Marketing Sciences, Summer 2024, Charlotte NC
- ETL pipeline: Python + SQL, Teradata source, **40,000+ customer records**, 5 acquisition channels
- KMeans clustering (K=5, chosen via elbow method + silhouette score) with **PCA applied after
  clustering**, for 2D visualization only — not used for dimensionality reduction before clustering.
  StandardScaler was applied before clustering.
- Presented findings to **4 cross-functional teams**: project manager, marketing analytics, A/B
  testing, strategy insights
- Also redesigned the mobile transaction interface with those same 4 teams — **57% reduction** in
  customer transaction/access time
- The "30% lift in campaign response" figure is a **projected benchmark estimate**, not a measured
  result — if it appears anywhere on the site, it needs that caveat attached, not stated as fact

### Dawnrise Inc. — Summer 2023, Diamond Bar CA
- Built an async Python + Selenium scraping pipeline with GPT-based structured parsing
- **40 hours → 2 hours** per research cycle (measured, ~95% reduction), covering 10,000+ SKU specs from
  e-commerce sources
- Designed the PostgreSQL schema and prompt templates; built and handed off the full system in 2 weeks

---

## 7. Writing style rules for any AI-generated copy on this site

- No em-dashes used as clause connectors (the "tack-on" pattern) — standard hyphenated compounds like
  "cross-functional" and "full-stack" are fine and expected
- No semicolons in prose
- Avoid generic AI-sounding phrasing and filler transitions
- Prefer flowing prose over over-subtitled, over-bulleted sections — the current About page is the
  right model to follow: specific, voice-driven, not a buzzword list
- Never invent metrics, model names, or tools not listed in Section 6. If uncertain, leave a visible
  `[TODO: verify with Elaine]` marker and call it out in the commit message rather than guessing
  silently
- State limitations and unfinished work honestly rather than implying more than what's true (see
  CalPin, see the Wells Fargo "projected" caveat) — this reads as more credible, not less impressive

---

## 8. How to use this file

Before any Claude Code session that touches copy on this site, say: *"Read CONTEXT.md fully before
writing or editing anything."* Point it here for facts, positioning, and voice — don't let it infer
identity from the existing (possibly still-wrong) site text.

Update this file whenever a real fact changes: new project metrics, a project moving from "In Progress"
to "Shipped," a new degree date, etc. This file should always be truer than the live site, not the
other way around.
