export default function HeroBg() {
  return (
    <div className="pointer-events-none select-none" aria-hidden>
      {/* Warm terracotta wash — top right */}
      <div
        className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.18]"
        style={{ background: 'radial-gradient(circle, #D97355 0%, transparent 70%)' }}
      />
      {/* Amber wash — bottom left */}
      <div
        className="absolute bottom-[-40px] left-[-60px] w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #E8A87C 0%, transparent 70%)' }}
      />
      {/* Subtle warm center glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #F0C5A8 0%, transparent 70%)' }}
      />
    </div>
  )
}
