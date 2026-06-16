import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© 2026 Bodhi Vandael</span>
        <Link href="/design-system">Design system →</Link>
      </div>
    </footer>
  )
}
