import { useState } from 'react'

const GALLERY_ITEMS = [
  {
    id: 'health',
    title: 'Health',
    subtitle: 'Running',
    description:
      'My pleasure to introduce my lovely running buddies by Lake Michigan at 8am every day!',
    imageSrc: '/running-buddies.jpg',
    imageAlt: 'Running buddies by Lake Michigan in Chicago',
    objectPosition: 'center bottom',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'IMU board',
    description:
      'I spend time supporting IMU through operations and outreach because community-building work matters to me.',
    placeholder: 'IMU / community photo',
  },
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'City walks',
    description:
      'City walks and architecture keep me observant. They make me notice patterns, structure, and atmosphere.',
    imageSrc: '/citywalk.jpeg',
    imageAlt: 'City walk photo',
    objectFit: 'contain',
  },
]

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 4.5L6.5 9l4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4.5L11.5 9 7 13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PlaceholderImage({ label }) {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-end rounded-[24px] border border-border/80 bg-[linear-gradient(180deg,#F5F6F2_0%,#E9EFEA_100%)] p-5 sm:min-h-[420px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[24px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 20%, rgba(163,63,47,0.12), transparent 24%), radial-gradient(circle at 82% 24%, rgba(47,143,131,0.12), transparent 26%), linear-gradient(135deg, rgba(255,255,255,0.2), transparent 46%), radial-gradient(circle, rgba(94,111,104,0.05) 1px, transparent 1px)',
          backgroundSize: 'auto, auto, 100% 100%, 24px 24px',
        }}
      />
      <div className="relative z-10 rounded-2xl border border-text/10 bg-white/88 px-4 py-3 shadow-sm">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-2">
          Placeholder
        </p>
        <p className="mt-2 text-sm text-muted">{label}</p>
      </div>
    </div>
  )
}

function GalleryImage({ item }) {
  if (item.imageSrc) {
    const imgStyle = {
      maxHeight: 'calc(100svh - 460px)',
      objectFit: item.objectFit ?? 'cover',
      ...(item.objectPosition && { objectPosition: item.objectPosition }),
      ...(item.scale && { transform: `scale(${item.scale})` }),
    }
    return (
      <div className="overflow-hidden rounded-[24px] border border-border/80 bg-bg-alt">
        <img
          src={item.imageSrc}
          alt={item.imageAlt ?? item.title}
          className="block h-auto w-full"
          style={imgStyle}
        />
      </div>
    )
  }

  return <PlaceholderImage label={item.placeholder} />
}

export default function OutsideWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = GALLERY_ITEMS[activeIndex]

  function goPrev() {
    setActiveIndex(current => (current === 0 ? GALLERY_ITEMS.length - 1 : current - 1))
  }

  function goNext() {
    setActiveIndex(current => (current === GALLERY_ITEMS.length - 1 ? 0 : current + 1))
  }

  return (
    <section
      id="outside-work"
      className="section relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 12%, rgba(222, 152, 118, 0.16), transparent 28%),
          radial-gradient(circle at 82% 82%, rgba(98, 142, 133, 0.1), transparent 30%),
          linear-gradient(180deg, #f8f5ef 0%, #f2f5ef 100%)
        `,
      }}
    >
      <div aria-hidden="true" className="ambient-layer">
        <div
          className="ambient-orb ambient-orb-rotate h-[18rem] w-[18rem] md:h-[24rem] md:w-[24rem]"
          style={{
            top: '-2rem',
            left: '-5rem',
            background: 'radial-gradient(circle, rgba(163, 63, 47, 0.12), rgba(163, 63, 47, 0.02) 68%, transparent 75%)',
          }}
        />
        <div
          className="ambient-orb ambient-orb-slow h-[16rem] w-[16rem] md:h-[20rem] md:w-[20rem]"
          style={{
            right: '-3rem',
            bottom: '0%',
            background: 'radial-gradient(circle, rgba(236, 181, 149, 0.22), rgba(236, 181, 149, 0.03) 70%, transparent 76%)',
          }}
        />
        <div className="ambient-waves opacity-80" />
      </div>

      <div className="container-content relative z-10">
        <div className="fade-in mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Beyond Work
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Three things I care about: health, community, and curiosity.
          </h2>
        </div>

        <div className="fade-in">
          <div className="grid items-center gap-5 md:grid-cols-[64px_minmax(0,1fr)_64px]">
            <div className="hidden justify-center md:flex">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-200 hover:border-accent/35 hover:text-accent"
                aria-label="Show previous image"
              >
                <ArrowLeft />
              </button>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-border/80 bg-surface p-4 shadow-sm sm:p-5">
              <div className="relative">
                <GalleryImage item={activeItem} />
              </div>

              <div className="pt-5 text-center">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-2">
                  {activeItem.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-text">{activeItem.title}</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {activeItem.description}
                </p>
              </div>
            </div>

            <div className="hidden justify-center md:flex">
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-200 hover:border-accent/35 hover:text-accent"
                aria-label="Show next image"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-200 hover:border-accent/35 hover:text-accent"
              aria-label="Show previous image"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-200 hover:border-accent/35 hover:text-accent"
              aria-label="Show next image"
            >
              <ArrowRight />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                  index === activeIndex ? 'bg-accent' : 'bg-border hover:bg-accent/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
