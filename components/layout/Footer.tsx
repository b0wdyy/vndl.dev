import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_auto] md:gap-6">
        <span className="font-mono text-xs text-text-tertiary">© 2026 Bodhi Vandael</span>
        <nav className="flex flex-wrap gap-4 md:gap-5" aria-label="Footer navigation">
          <Link
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="/#work"
          >
            Work
          </Link>
          <Link
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap gap-4 md:gap-5">
          <a
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="https://github.com/b0wdyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            className="font-mono text-xs text-text-tertiary no-underline transition-colors duration-150 hover:text-accent"
            href="https://linkedin.com/in/bodhi-vandael"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
