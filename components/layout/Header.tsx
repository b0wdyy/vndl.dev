'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Clock } from '@/components/ui/Clock'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu } from '@/components/layout/Menu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link className="monogram" href="/" aria-label="Bodhi Vandael home">
            BV
          </Link>
          <div className="header-right">
            <Clock />
            <ThemeToggle />
            <button
              className="menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu-overlay"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className="menu-label">{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
