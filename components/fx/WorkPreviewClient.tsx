'use client'
import { useEffect } from 'react'

export function WorkPreviewClient() {
  useEffect(() => {
    const list = document.querySelector('.work-list[data-preview]')
    const preview = document.querySelector('.work-preview') as HTMLElement | null
    if (!list || !preview) return

    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (coarse) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const medias: Record<string, Element> = {}
    preview.querySelectorAll('.wp-media').forEach((m) => {
      const key = m.getAttribute('data-pkey')
      if (key) medias[key] = m
    })

    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let cx = tx, cy = ty, lastX = tx
    let active = false
    let rafId: number

    const onMove = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const render = () => {
      const k = reduced ? 1 : 0.12
      cx += (tx - cx) * k
      cy += (ty - cy) * k
      const vel = cx - lastX
      lastX = cx
      const rot = Math.max(-10, Math.min(10, vel * 0.35))
      const w = preview.offsetWidth
      const h = preview.offsetHeight
      preview.style.transform = `translate(${cx - w / 2}px,${cy - h / 2}px) rotate(${active ? rot : 0}deg)`
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    const activate = (key: string) => {
      Object.keys(medias).forEach((k) => {
        medias[k].classList.toggle('active', k === key)
      })
      preview.classList.add('show')
      active = true
    }
    const deactivate = () => {
      preview.classList.remove('show')
      active = false
    }

    list.querySelectorAll('.work-row').forEach((row) => {
      const key = row.getAttribute('data-pkey')
      if (key) row.addEventListener('pointerenter', () => activate(key))
    })
    list.addEventListener('pointerleave', deactivate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return null
}
