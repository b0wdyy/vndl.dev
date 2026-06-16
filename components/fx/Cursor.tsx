'use client'
import { useEffect, useRef } from 'react'

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!document.documentElement.classList.contains('fx')) return

    let cx = -100,
      cy = -100,
      tx = -100,
      ty = -100,
      alive = false
    let rafId: number

    const HOT = 'a, button, .work-row, .chip, .project-card'

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!alive) {
        alive = true
        cx = tx
        cy = ty
        el.classList.add('alive')
      }
    }
    const onDown = () => el.classList.add('down')
    const onUp = () => el.classList.remove('down')
    const onOver = (e: PointerEvent) => {
      if ((e.target as Element).closest?.(HOT)) el.classList.add('hot')
    }
    const onOut = (e: PointerEvent) => {
      if ((e.target as Element).closest?.(HOT)) el.classList.remove('hot')
    }

    const loop = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      el.style.left = `${cx}px`
      el.style.top = `${cy}px`
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
