# Portfolio Site — Session Rules

@CONTEXT.md

`CONTEXT.md` is the authoritative source for Elaine's identity, experience, project facts,
metrics, positioning, and writing style. Read it in full before writing or editing any copy.
If existing website content conflicts with CONTEXT.md, CONTEXT.md wins.
Never invent or infer metrics, model names, tools, responsibilities, or outcomes.
If a fact is not in CONTEXT.md, write `[TODO: verify with Elaine]` instead of guessing.
Do not modify CONTEXT.md unless Elaine explicitly asks. Before finishing any copy task,
audit every factual claim against it.

## Workflow protocol (mandatory for every edit session)

Every set of changes follows three phases in order. Do not skip phases or combine them.

### Phase 1 — Audit
- Read all files relevant to the requested change.
- Analyze the current implementation against the feedback.
- List findings ranked by impact.
- Post an audit report and **stop**. Do not touch any file yet.
- Wait for explicit confirmation from Elaine before proceeding.

### Phase 2 — Implementation
- Only begin after Elaine confirms the audit findings and says to proceed.
- Implement changes systematically, one component at a time.
- Post a brief update when each file is done.

### Phase 3 — QA
- Run `npx eslint src/ --ext .js,.jsx` and `npm run build`.
- Check interactions, edge cases, and accessibility in code.
- Post a QA report covering what changed and what was verified.

---

## Architecture constraints

The Storyteller vertical scroll structure is approved and must not be redesigned.

- Do not reintroduce horizontal carousel navigation.
- Do not restructure the page order (Hero → About → Projects → Experience → Contact).
- Do not add new top-level nav destinations without discussion.
- Do not remove `<details>/<summary>` progressive disclosure — it is the accessibility pattern for expandable content on this site.

---

## Design constraints

- Do not redesign sections that were not mentioned in the current request.
- Do not add features, abstractions, or cleanup beyond what the task requires.
- Do not use hover-only interactions for content that must be keyboard and touch accessible.
- Confirm with Elaine before making changes to copy — especially hero positioning, About voice, and Experience "What this shaped" paragraphs (marked [TODO]).

---

## Elements that are working well — do not remove or break

- Word-by-word H1 animation (`word-up` / `animate-in`) and staggered timing
- Hero photo editorial treatment (slight rotation, hover-to-straight, caption annotations)
- Grain texture overlay (body::before in index.css)
- Magnetic button interactions (MagneticButton component)
- Scroll progress bar in Nav
- `<details>/<summary>` disclosure pattern with `focus-visible` and `[&::-webkit-details-marker]:hidden`
- IntersectionObserver fade-in system (`fade-in` / `fade-in.visible`)
- Timeline draw animation in Experience (`timeline-draw`)
- Copy-to-clipboard email with `✓ copied` feedback
- `prefers-reduced-motion` coverage (comprehensive — all animations, details transitions)
- CityLiving Sim live link with pulse indicator in About
- URL hash sync via `window.history.replaceState`
- Domain filter in Projects (3 categories: AI & Agents, Data & ML, Product)
- Hero positioning: "I build AI and data systems people can actually rely on."
