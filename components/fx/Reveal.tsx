'use client'
import { useEffect } from 'react'

export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              io.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    } else {
      els.forEach((el) => el.classList.add('in-view'))
    }
  }, [])

  return null
}
