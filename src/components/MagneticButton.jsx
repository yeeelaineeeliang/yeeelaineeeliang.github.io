import { useRef } from 'react'

export default function MagneticButton({ children, strength = 0.25, ...props }) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const dx = (e.clientX - (left + width / 2)) * strength
    const dy = (e.clientY - (top + height / 2)) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function onMouseLeave() {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-block', transition: 'transform 0.2s ease' }}
      {...props}
    >
      {children}
    </div>
  )
}
