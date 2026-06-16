'use client'
import { useEffect, useRef } from 'react'

// Module-level ref so TransitionLink can trigger it without prop drilling
let veilEl: HTMLDivElement | null = null

export function triggerVeil(cb: () => void) {
  if (!veilEl || !document.documentElement.classList.contains('fx')) {
    cb()
    return
  }
  veilEl.classList.add('on')
  setTimeout(cb, 480)
}

export function clearVeil() {
  veilEl?.classList.remove('on')
}

export function Veil() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    veilEl = ref.current
    return () => {
      veilEl = null
    }
  }, [])

  return <div ref={ref} className="veil" aria-hidden="true" />
}
