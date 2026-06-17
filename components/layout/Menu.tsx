'use client'
import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

type MenuProps = {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { index: '01', label: 'Work', href: '/#work', blurb: 'Selected projects' },
  { index: '02', label: 'Experience', href: '/#experience', blurb: 'Five years shipped' },
  { index: '03', label: 'Skills', href: '/#skills', blurb: 'The toolbox' },
  { index: '04', label: 'Blog', href: '/blog', blurb: 'Thoughts on craft' },
  { index: '05', label: 'Contact', href: '/#contact', blurb: "Let's build something" },
]

export function Menu({ isOpen, onClose }: MenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('menu-open')
    } else {
      document.documentElement.classList.remove('menu-open')
      setActiveIndex(null)
    }
    return () => document.documentElement.classList.remove('menu-open')
  }, [isOpen])

  const handleAnchorClick = (href: string) => {
    onClose()
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = overlayRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const activeNum = activeIndex !== null ? NAV_LINKS[activeIndex].index : null

  return (
    <div
      ref={overlayRef}
      className="menu-overlay"
      id="menu-overlay"
      aria-hidden={!isOpen}
      onMouseMove={handleMouseMove}
    >
      <span className={`menu-bg-num${activeNum ? ' visible' : ''}`} aria-hidden="true">
        {activeNum ?? NAV_LINKS[0].index}
      </span>
      <div className="container menu-inner">
        <nav className="menu-nav">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              className="menu-link"
              href={link.href}
              style={{ '--i': i } as React.CSSProperties}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => handleAnchorClick(link.href)}
            >
              <span className="menu-num">{link.index}</span>
              <span className="menu-mask">
                <span className="menu-word">{link.label}</span>
              </span>
              <span className="menu-blurb" aria-hidden="true">
                {link.blurb}
              </span>
            </Link>
          ))}
        </nav>
        <div className="menu-foot">
          <div>
            <span className="mono-label">Email</span>
            <a href="mailto:me@vndl.dev">me@vndl.dev</a>
          </div>
          <div>
            <span className="mono-label">LinkedIn</span>
            <a
              href="https://linkedin.com/in/bodhi-vandael"
              target="_blank"
              rel="noopener noreferrer"
            >
              bodhi-vandael
            </a>
          </div>
          <div>
            <span className="mono-label">Location</span>
            <span className="val">Lommel, Belgium</span>
          </div>
        </div>
      </div>
    </div>
  )
}
