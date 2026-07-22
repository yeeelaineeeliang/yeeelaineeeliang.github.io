import { useState } from 'react'

const GALLERY_ITEMS = [
  {
    id: 'health',
    title: 'Health',
    subtitle: 'Running',
    description:
      'My very consistent running buddies by Lake Michigan. They show up every morning at 8am.',
    imageSrc: '/running-buddies.jpg',
    imageAlt: 'Running buddies by Lake Michigan in Chicago',
    bgPosition: 'center bottom',
    bgSize: 'cover',
  },
  {
    id: 'community',
    title: 'Community',
    subtitle: 'IMU board',
    description:
      "This is my third year serving on IMU’s advisory board. Having experienced what it means to enter a new community, I notice the small gestures that help people feel welcome. I support the organization through fundraising, financial recordkeeping, and its online presence, helping create more space for immigrant youth to connect and grow.",
    imageSrc: '/imu.png',
    imageAlt: 'Elaine at IMU Peace Club, UC Berkeley',
    bgPosition: 'center top',
    bgSize: 'cover',
    subtitleLink: 'https://www.imuproject.org',
  },
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'City walks',
    description:
      '“what she loved was this, here, now, in front of her;” — Virginia Woolf, Mrs. Dalloway',
    imageSrc: '/citywalk.jpeg',
    imageAlt: 'City walk photo',
    bgPosition: 'center',
    bgSize: 'contain',
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
    <section id="outside-work" className="section">
      <div className="container-content">
        <div className="fade-in mb-14 max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-5">Beyond Work</p>
          <h2 className="font-semibold" style={{ fontSize: 'clamp(28px,3.2vw,38px)', lineHeight: 1.28 }}>
            Three things I care about: health, community, and curiosity.
          </h2>
        </div>

        <div className="fade-in">
          <div className="grid items-center gap-5" style={{ gridTemplateColumns: '64px minmax(0,1fr) 64px' }}>
            {/* Prev arrow — desktop */}
            <div className="hidden justify-center md:flex">
              <button
                type="button"
                onClick={goPrev}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-surface text-text transition-all duration-200 hover:border-accent hover:text-accent hover:scale-105"
                aria-label="Show previous image"
              >
                <ArrowLeft />
              </button>
            </div>

            {/* Card */}
            <div className="rounded-[4px] border border-border bg-surface p-5 shadow-[0_14px_34px_rgba(36,28,26,0.06)]">
              {/* Image */}
              <div
                className="rounded border border-border overflow-hidden bg-bg-alt"
                style={{ height: '360px' }}
              >
                <div
                  role="img"
                  aria-label={activeItem.imageAlt ?? activeItem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${activeItem.imageSrc})`,
                    backgroundSize: activeItem.bgSize,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: activeItem.bgPosition,
                  }}
                />
              </div>

              {/* Text */}
              <div className="pt-5 text-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-2">
                  {activeItem.subtitleLink ? (
                    <a
                      href={activeItem.subtitleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-accent/40 decoration-[1.5px] transition-all duration-200 hover:text-accent hover:decoration-accent"
                    >
                      {activeItem.subtitle}
                    </a>
                  ) : activeItem.subtitle}
                </p>
                <h3 className="text-[22px] font-bold text-text mb-2.5">{activeItem.title}</h3>
                <p className="mx-auto max-w-[560px] text-[15px] leading-[1.7] text-muted">
                  {activeItem.description}
                </p>
              </div>
            </div>

            {/* Next arrow — desktop */}
            <div className="hidden justify-center md:flex">
              <button
                type="button"
                onClick={goNext}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-surface text-text transition-all duration-200 hover:border-accent hover:text-accent hover:scale-105"
                aria-label="Show next image"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Mobile nav arrows */}
          <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface text-text transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Show previous image"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface text-text transition-all duration-200 hover:border-accent hover:text-accent"
              aria-label="Show next image"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                className="w-[9px] h-[9px] rounded-full border-none p-0 transition-colors duration-200"
                style={{ background: index === activeIndex ? '#9A3324' : 'rgba(36,28,26,0.18)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
