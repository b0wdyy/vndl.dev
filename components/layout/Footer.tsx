import Link from 'next/link'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-copy">© 2026 Bodhi Vandael</span>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="footer-social">
          <a
            href="https://github.com/b0wdyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bodhi-vandael"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <Link href="/design-system">Design system</Link>
        </div>
      </div>
    </footer>
  )
}
