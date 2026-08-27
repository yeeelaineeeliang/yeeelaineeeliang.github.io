import { useState } from 'react'

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 translate-x-0.5 fill-current"
    >
      <path d="M8 5.2v13.6L19 12 8 5.2Z" />
    </svg>
  )
}

export default function ProjectVideo({ project, variant = 'hero', onOpen }) {
  const [reduceMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  if (!project.video?.src) return null

  if (variant === 'teaser') {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#071210]">
        <video
          aria-hidden="true"
          autoPlay={!reduceMotion}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster={project.video.poster}
          preload="metadata"
          src={project.video.src}
          tabIndex="-1"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10"
        />
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Watch the ${project.title} demo video`}
          className="group absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/90"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/45 text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-accent group-focus-visible:scale-110 group-focus-visible:bg-accent">
            <PlayIcon />
          </span>
        </button>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#071210] shadow-[0_28px_80px_rgba(22,35,31,0.28)]">
      <div aria-hidden="true" className="absolute -inset-px rounded-xl ring-1 ring-inset ring-white/10" />
      <video
        aria-label={`${project.title} product demo`}
        className="aspect-video w-full bg-[#071210] object-contain"
        controls
        playsInline
        poster={project.video.poster}
        preload="metadata"
        src={project.video.src}
      />
    </div>
  )
}
