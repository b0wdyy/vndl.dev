'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Clock } from '@/components/ui/Clock'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu } from '@/components/layout/Menu'
import { Magnetic } from '@/components/fx/Magnetic'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Magnetic strength={0.45}>
            <Link className="monogram" href="/" aria-label="Bodhi Vandael home">
              BV
            </Link>
          </Magnetic>
          <div className="header-right">
            <Clock />
            <Magnetic strength={0.45}>
              <ThemeToggle />
            </Magnetic>
            <Magnetic strength={0.3}>
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
            </Magnetic>
          </div>
        </div>
      </header>
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
