'use client'
import { useEffect } from 'react'

import { clearVeil } from '@/components/fx/Veil'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Clear the veil after navigation completes
    clearVeil()

    // Re-run reveal observer for new page's .reveal elements
    const els = document.querySelectorAll('.reveal:not(.in-view)')
    if ('IntersectionObserver' in window && els.length) {
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
    }
  }, [])

  return <>{children}</>
}
