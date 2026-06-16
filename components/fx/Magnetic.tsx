'use client'
import { useEffect, useRef } from 'react'

export function Magnetic({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !document.documentElement.classList.contains('fx')) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
      el.style.transition = 'transform 0.15s ease-out'
    }
    const onLeave = () => {
      el.style.transition = 'transform 0.5s var(--ease-out)'
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])

  return (
    <div ref={ref} className="magnet">
      {children}
    </div>
  )
}
