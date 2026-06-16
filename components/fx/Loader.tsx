'use client'
import { useEffect, useRef } from 'react'

const NAME = ['B', 'o', 'd', 'h', 'i', ' ', 'V', 'a', 'n', 'd', 'a', 'e', 'l']

export function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const hasFx = root.classList.contains('fx')

    // Split h1.split into word masks (only when fx is active)
    if (hasFx) {
      document.querySelectorAll('.split').forEach((el) => {
        el.classList.remove('rise')
        const words = (el.textContent ?? '').trim().split(/\s+/)
        el.textContent = ''
        words.forEach((word, i) => {
          const w = document.createElement('span')
          w.className = 'w'
          const wi = document.createElement('span')
          wi.className = 'wi'
          wi.style.setProperty('--i', String(i))
          wi.textContent = word
          w.appendChild(wi)
          el.appendChild(w)
          if (i < words.length - 1) el.appendChild(document.createTextNode(' '))
        })
      })
    }

    function addReady() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => root.classList.add('ready'))
      })
    }

    let seen = false
    try {
      seen = sessionStorage.getItem('bv-loader-seen') === '1'
    } catch {
      /* ignore */
    }

    const loader = loaderRef.current
    if (!hasFx || seen || !loader) {
      loader?.remove()
      root.classList.remove('locked')
      addReady()
      return
    }

    root.classList.add('locked')
    const countEl = countRef.current
    let start: number | null = null
    const DURATION = 1300

    function tick(ts: number) {
      if (!start) start = ts
      const p = Math.min((ts - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      if (countEl) countEl.textContent = String(Math.round(eased * 100)).padStart(2, '0')
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        loader!.classList.add('done')
        root.classList.remove('locked')
        setTimeout(addReady, 250)
        setTimeout(() => loader!.remove(), 800)
        try {
          sessionStorage.setItem('bv-loader-seen', '1')
        } catch {
          /* ignore */
        }
      }
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <div ref={loaderRef} className="loader" aria-hidden="true">
      <div className="loader-name">
        {NAME.map((char, i) => (
          <span key={i} className="ln" style={{ '--i': i } as React.CSSProperties}>
            {char}
          </span>
        ))}
      </div>
      <span ref={countRef} className="loader-count">
        00
      </span>
    </div>
  )
}
