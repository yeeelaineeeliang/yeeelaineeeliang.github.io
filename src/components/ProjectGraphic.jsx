// Scene covers — full-bleed, position:absolute fills any container
const scenes = {
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

}

const projectImages = {
  'calpin': '/project-images/calpin.png',
  'career-coach': '/project-images/career-coach.png',
  'fraud-copilot': '/project-images/fraud-copilot.png',
  'crypto-pipeline': '/project-images/crypto-pipeline.png',
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
