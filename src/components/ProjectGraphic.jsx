// Pre-generate LiveThere street-map parcels (deterministic seeded layout)
const PARCEL_COLORS = [
  'rgba(154,196,181,0.8)',
  'rgba(154,196,181,0.45)',
  'rgba(255,255,255,0.18)',
  'rgba(243,198,119,0.65)',
]
const PARCEL_WEIGHTS = [0.28, 0.3, 0.32, 0.1]
function pseudo(i) { return (((i * 2654435761) >>> 0) % 1000) / 1000 }
function pickParcelColor(i) {
  const r = pseudo(i)
  let acc = 0
  for (let j = 0; j < PARCEL_WEIGHTS.length; j++) {
    acc += PARCEL_WEIGHTS[j]
    if (r <= acc) return PARCEL_COLORS[j]
  }
  return PARCEL_COLORS[0]
}
const STREETS_H = [42, 88, 132, 176, 218, 262, 300]
const STREETS_V = [38, 78, 118, 158, 198, 238, 278, 318, 358]
const ROWS_Y = [0, ...STREETS_H, 340]
const COLS_X = [0, ...STREETS_V, 400]
const MAP_PARCELS = []
let _seed = 0
for (let r = 0; r < ROWS_Y.length - 1; r++) {
  for (let c = 0; c < COLS_X.length - 1; c++) {
    _seed++
    if (pseudo(_seed + 500) < 0.3) continue
    const jitter = pseudo(_seed) * 4
    MAP_PARCELS.push({
      x: COLS_X[c] + 3 + jitter,
      y: ROWS_Y[r] + 3 + jitter,
      w: Math.max(6, (COLS_X[c + 1] - COLS_X[c]) - 6 - jitter),
      h: Math.max(6, (ROWS_Y[r + 1] - ROWS_Y[r]) - 6 - jitter),
      color: pickParcelColor(_seed),
    })
  }
}

// Scene covers — full-bleed, position:absolute fills any container
const scenes = {
  'cityliving-sim': ({ className }) => (
    <div
      className={`overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(150deg, #1F4550 0%, #2C5560 55%, #9A3324 130%)' }}
    >
      {/* Street-block map SVG */}
      <svg aria-hidden="true" viewBox="0 0 400 340" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {MAP_PARCELS.map((p, i) => (
          <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} fill={p.color} />
        ))}
        {STREETS_H.map(y => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(20,30,32,0.35)" strokeWidth="2" />
        ))}
        {STREETS_V.map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="340" stroke="rgba(20,30,32,0.35)" strokeWidth="2" />
        ))}
        <line x1="0" y1="330" x2="380" y2="10" stroke="rgba(243,198,119,0.55)" strokeWidth="2.5" />
        <line x1="30" y1="0" x2="400" y2="300" stroke="rgba(243,198,119,0.4)" strokeWidth="2" />
      </svg>

      {/* Gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(31,69,80,0.1) 0%, rgba(154,51,36,0.4) 100%)' }} />

      {/* Top label */}
      <span className="absolute left-[6%] top-4 font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/75" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
        Chicago · 77 Neighborhoods, Scored
      </span>

      {/* Legend pill */}
      <div className="absolute left-[6%] top-[16%] rounded-full px-2.5 py-1" style={{ background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.42)' }}>
        <span className="font-mono text-[9px] font-bold text-white/90">● great fit &nbsp; ○ possible &nbsp; · watch</span>
      </div>

      {/* Agent chat bubble */}
      <div className="absolute bottom-[12%] right-[7%] w-[56%] rounded-xl px-4 py-3.5" style={{ background: 'rgba(20,28,26,0.72)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(3px)', boxShadow: '0 14px 34px rgba(0,0,0,0.28)' }}>
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-display italic text-[11px] font-bold" style={{ background: 'rgba(154,196,181,0.9)', color: '#1F4550' }}>a</span>
          <span className="font-mono text-[9.5px] font-bold tracking-[0.06em] text-white/60">&ldquo;Where&apos;s safe, walkable, and under $1800?&rdquo;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#F3C677', animation: 'elPulse 1.6s ease-in-out infinite' }} />
          <span className="font-mono text-[11px] font-bold text-white">Logan Square, Avondale, Portage Park</span>
        </div>
      </div>
    </div>
  ),

  'career-coach': ({ className }) => (
    <div
      className={`overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(150deg, #C4683A 0%, #D4943A 100%)' }}
    >
      {/* Kanban pipeline */}
      <div className="absolute left-[6%] right-[6%] top-[12%] flex gap-1.5">
        {[
          { label: 'APPLIED', active: false },
          { label: 'INTERVIEW', active: true },
          { label: 'OFFER', active: false },
        ].map(({ label, active }) => (
          <div key={label} className="flex-1 rounded-md px-2 py-1.5" style={{ background: active ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.14)', border: active ? '1.5px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.32)' }}>
            <span className="mb-1.5 block font-mono text-[7px] font-bold uppercase tracking-wide" style={{ color: active ? '#fff' : 'rgba(255,255,255,0.65)' }}>{label}</span>
            <span className="mb-0.5 block h-1 rounded-sm" style={{ background: active ? '#fff' : 'rgba(255,255,255,0.35)', width: active ? '100%' : '75%' }} />
            <span className="block h-1 rounded-sm" style={{ background: active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)', width: active ? '60%' : '50%' }} />
          </div>
        ))}
      </div>

      {/* Resume doc */}
      <div className="absolute bottom-[8%] left-[6%] rounded-md px-2.5 py-2" style={{ width: '30%', height: '36%', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.32)' }}>
        <span className="mb-1.5 block h-1 rounded-sm" style={{ width: '70%', background: 'rgba(255,255,255,0.4)' }} />
        <span className="mb-1 block h-[3.5px] rounded-sm" style={{ width: '90%', background: 'rgba(255,255,255,0.24)' }} />
        <span className="mb-1 block h-[3.5px] rounded-sm" style={{ width: '80%', background: 'rgba(255,255,255,0.24)' }} />
        <span className="block h-[3.5px] rounded-sm" style={{ width: '85%', background: 'rgba(255,255,255,0.24)' }} />
      </div>

      {/* Agent chat overlay */}
      <div className="absolute bottom-[8%] right-[6%] rounded-xl px-3.5 py-3" style={{ width: '56%', background: 'rgba(30,20,14,0.65)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(3px)', boxShadow: '0 12px 28px rgba(0,0,0,0.24)' }}>
        <span className="mb-2 block font-mono text-[9px] font-semibold text-white/60">&ldquo;I got rejected again. What now?&rdquo;</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#F3C677' }} />
          <span className="font-mono text-[10.5px] font-bold text-white">Revise resume, then mock interview Thu</span>
        </div>
      </div>
    </div>
  ),

  'fraud-copilot': ({ className }) => (
    <div
      className={`overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(150deg, #16233D 0%, #2D4A6B 100%)' }}
    >
      {/* Transaction ledger */}
      <div className="absolute left-[6%] right-[6%] top-[9%] flex flex-col gap-1.5 rounded-md px-2.5 py-2" style={{ bottom: '44%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)' }}>
        {/* Normal row */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'rgba(76,177,163,0.7)' }} />
          <span className="h-1 flex-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.28)' }} />
          <span className="h-1 w-[16%] rounded-sm" style={{ background: 'rgba(255,255,255,0.2)' }} />
        </div>
        {/* Flagged row */}
        <div className="flex items-center gap-2 rounded px-1.5 py-0.5 -mx-1.5" style={{ background: 'rgba(201,88,63,0.22)' }}>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#F3C677' }} />
          <span className="h-1 flex-1 rounded-sm" style={{ background: '#C9583F' }} />
          <span className="h-1 w-[20%] rounded-sm" style={{ background: '#F3C677' }} />
        </div>
        {/* Normal row */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'rgba(76,177,163,0.7)' }} />
          <span className="h-1 flex-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.28)', width: '30%' }} />
          <span className="h-1 w-[14%] rounded-sm" style={{ background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </div>

      {/* 90% RECALL badge */}
      <span className="absolute right-[6%] top-2 rounded-full px-2.5 py-0.5 font-mono text-[8px] font-bold" style={{ background: 'rgba(243,198,119,0.22)', border: '1px solid rgba(243,198,119,0.5)', color: '#F3C677' }}>
        90% RECALL
      </span>

      {/* Analyst chat overlay */}
      <div className="absolute bottom-[8%] left-[6%] right-[6%] rounded-xl px-3.5 py-3" style={{ background: 'rgba(14,20,34,0.70)', border: '1px solid rgba(255,255,255,0.24)', backdropFilter: 'blur(3px)', boxShadow: '0 12px 28px rgba(0,0,0,0.26)' }}>
        <span className="mb-2 block font-mono text-[9px] font-semibold text-white/60">Analyst: &ldquo;Why was this transaction flagged?&rdquo;</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#F3C677' }} />
          <span className="font-mono text-[10.5px] font-bold text-white">New device + 3× avg amount + odd hour</span>
        </div>
      </div>
    </div>
  ),

  'hri-memory': ({ className }) => (
    <div
      className={`overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(150deg, #2D6B5E 0%, #4A8B7A 100%)' }}
    >
      {/* Robot figure */}
      <div className="absolute" style={{ left: '12%', top: '34%', width: '40px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.24)', border: '1.5px solid rgba(255,255,255,0.55)' }}>
        <div className="absolute rounded-full bg-white" style={{ left: '9px', top: '12px', width: '6px', height: '6px' }} />
        <div className="absolute rounded-full bg-white" style={{ right: '9px', top: '12px', width: '6px', height: '6px' }} />
        <div className="absolute" style={{ left: '50%', top: '-7px', transform: 'translateX(-50%)', width: '2px', height: '8px', background: 'rgba(255,255,255,0.6)' }} />
      </div>
      {/* Person silhouette */}
      <div className="absolute" style={{ left: '33%', top: '32%', width: '26px', height: '40px', borderRadius: '13px 13px 4px 4px', background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.45)' }} />
      <div className="absolute rounded-full" style={{ left: '39%', top: '24%', width: '14px', height: '14px', background: 'rgba(255,255,255,0.28)', border: '1.5px solid rgba(255,255,255,0.5)' }} />

      {/* Connection line */}
      <div aria-hidden="true" className="absolute" style={{ left: '18%', top: '52%', width: '22%', height: '1px', borderTop: '1px dashed rgba(255,255,255,0.5)' }} />

      {/* Rapport ring */}
      <div aria-hidden="true" className="absolute rounded-full" style={{ left: '22%', top: '36%', width: '90px', height: '90px', marginLeft: '-20px', marginTop: '-20px', border: '1.5px solid rgba(243,198,119,0.35)', animation: 'elPulse 2.4s ease-in-out infinite' }} />

      {/* RAPPORT badge */}
      <span className="absolute right-[6%] top-2 rounded-full px-2.5 py-0.5 font-mono text-[8px] font-bold" style={{ background: 'rgba(243,198,119,0.22)', border: '1px solid rgba(243,198,119,0.5)', color: '#F3C677' }}>
        RAPPORT ↑
      </span>

      {/* Dialogue overlay */}
      <div className="absolute bottom-[8%] left-[6%] right-[6%] rounded-xl px-3.5 py-3" style={{ background: 'rgba(16,40,34,0.62)', border: '1px solid rgba(255,255,255,0.26)', backdropFilter: 'blur(3px)', boxShadow: '0 12px 28px rgba(0,0,0,0.22)' }}>
        <span className="mb-2 block font-mono text-[9px] font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>Person: &ldquo;It&apos;s been a long week.&rdquo;</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#F3C677' }} />
          <span className="font-mono text-[10.5px] font-bold text-white">Robot: last time, work was heavy too &mdash; better now?</span>
        </div>
      </div>
    </div>
  ),

  'crypto-pipeline': ({ className }) => (
    <div
      className={`overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(150deg, #1A1A1A 0%, #3D3D3D 100%)' }}
    >
      {/* Candlestick chart */}
      <svg aria-hidden="true" viewBox="0 0 400 190" className="absolute inset-0 w-full" style={{ height: '64%' }}>
        <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Candles */}
        <line x1="30" y1="30" x2="30" y2="150" stroke="#C9583F" strokeWidth="3" />
        <rect x="24" y="60" width="12" height="55" fill="#C9583F" />
        <line x1="65" y1="20" x2="65" y2="120" stroke="#A7F3D0" strokeWidth="3" />
        <rect x="59" y="35" width="12" height="50" fill="#A7F3D0" />
        <line x1="100" y1="50" x2="100" y2="140" stroke="#C9583F" strokeWidth="3" />
        <rect x="94" y="70" width="12" height="45" fill="#C9583F" />
        <line x1="135" y1="15" x2="135" y2="100" stroke="#A7F3D0" strokeWidth="3" />
        <rect x="129" y="28" width="12" height="48" fill="#A7F3D0" />
        <line x1="170" y1="10" x2="170" y2="90" stroke="#A7F3D0" strokeWidth="3" />
        <rect x="164" y="20" width="12" height="42" fill="#A7F3D0" />
        <line x1="205" y1="18" x2="205" y2="80" stroke="#C9583F" strokeWidth="3" />
        <rect x="199" y="30" width="12" height="34" fill="#C9583F" />
        {/* Prediction dashed line */}
        <path d="M30,90 L65,70 L100,95 L135,55 L170,45 L205,50" fill="none" stroke="#F3C677" strokeWidth="1.6" strokeDasharray="3 4" />
      </svg>

      {/* Price labels */}
      <span className="absolute left-[2%] top-[2%] font-mono text-[8px] font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>$68.2k</span>
      <span className="absolute left-[2%] font-mono text-[8px] font-semibold" style={{ top: '44%', color: 'rgba(255,255,255,0.3)' }}>$64.9k</span>

      {/* Live signal overlay */}
      <div className="absolute bottom-[8%] left-[6%] right-[6%] flex items-center justify-between gap-3 rounded-xl px-3.5 py-3" style={{ background: 'rgba(10,10,10,0.65)', border: '1px solid rgba(255,255,255,0.24)', backdropFilter: 'blur(3px)', boxShadow: '0 12px 28px rgba(0,0,0,0.3)' }}>
        <div>
          <span className="mb-1.5 block font-mono text-[9px] font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>MODEL SIGNAL · REFIT 30s</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#A7F3D0' }} />
            <span className="font-mono text-[11px] font-bold" style={{ color: '#A7F3D0' }}>LONG ETH · conf 71%</span>
          </div>
        </div>
        <span className="font-display text-[18px] font-bold" style={{ color: '#A7F3D0' }}>↗ 65%</span>
      </div>
    </div>
  ),
}

const projectImages = {
  'calpin': '/project-images/calpin.png',
}

const detailProjectImages = {
  'calpin': '/project-images/calpin-architecture.png',
  'hri-memory': '/project-images/hri-memory.png',
  'career-coach': '/project-images/career-coach.png',
  'fraud-copilot': '/project-images/fraud-copilot.png',
  'crypto-pipeline': '/project-images/crypto-pipeline.png',
  'cityliving-sim': '/project-images/cityliving-sim.png',
}

export default function ProjectGraphic({ id, gradient, title, className = '', variant = 'card' }) {
  const positionClass = /\babsolute\b/.test(className) ? '' : 'relative'

  // Case study pages use detail images
  if (variant === 'detail') {
    const detailSrc = detailProjectImages[id]
    const [from, to] = gradient
    if (detailSrc) {
      return (
        <div
          className={`${positionClass} overflow-hidden ${className}`}
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <img
            src={detailSrc}
            alt={`${title} project visual`}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )
    }
  }

  // Scene cover
  const Scene = scenes[id]
  if (Scene) {
    return <Scene className={`${positionClass} ${className}`} />
  }

  // Image fallback (calpin in card variant)
  const imageSrc = projectImages[id]
  if (imageSrc) {
    const [from, to] = gradient
    return (
      <div
        className={`${positionClass} overflow-hidden ${className}`}
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <img
          src={imageSrc}
          alt={`${title} project visual`}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
    )
  }

  // Plain gradient fallback
  const [from, to] = gradient
  return (
    <div
      className={`${positionClass} overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    />
  )
}
