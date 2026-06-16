'use client'
import { useEffect } from 'react'

import Link from 'next/link'

type MenuProps = {
  isOpen: boolean
  onClose: () => void
}

const NAV_LINKS = [
  { index: '01', label: 'Work', href: '/#work' },
  { index: '02', label: 'Experience', href: '/#experience' },
  { index: '03', label: 'Skills', href: '/#skills' },
  { index: '04', label: 'Blog', href: '/blog' },
  { index: '05', label: 'Contact', href: '/#contact' },
  { index: '06', label: 'Design System', href: '/design-system' },
]

export function Menu({ isOpen, onClose }: MenuProps) {
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

  return (
    <div className="menu-overlay" id="menu-overlay" aria-hidden={!isOpen}>
      <div className="container menu-inner">
        <nav className="menu-nav">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.label}
              className="menu-link"
              href={link.href}
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => handleAnchorClick(link.href)}
            >
              <span className="menu-num">{link.index}</span>
              <span className="menu-mask">
                <span className="menu-word">{link.label}</span>
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
