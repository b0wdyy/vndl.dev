import { Magnetic } from '@/components/fx/Magnetic'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="mono-label rise" style={{ '--i': 0 } as React.CSSProperties}>
            Full-Stack Developer · Lommel, Belgium
          </p>
          <h1 className="rise split" style={{ '--i': 1 } as React.CSSProperties}>
            Building maintainable software, from interface to infrastructure.
          </h1>
          <p className="lede rise" style={{ '--i': 2 } as React.CSSProperties}>
            I&apos;m Bodhi Vandael. For the past five years I&apos;ve shipped web, mobile and
            desktop products with Angular, React and Node.js, with a soft spot for monorepos,
            developer tooling and the kind of code other people enjoy inheriting.
          </p>
          <div className="hero-cta rise" style={{ '--i': 3 } as React.CSSProperties}>
            <Magnetic strength={0.3}>
              <Button href="mailto:me@vndl.dev" variant="primary">
                Get in touch
              </Button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Button
                href="https://github.com/b0wdyy"
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Magnetic>
          </div>
        </div>

        <aside
          className="hero-right rise"
          aria-label="Status"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <div className="status-card">
            <div className="status-available">
              <span className="status-dot" aria-hidden="true" />
              <span className="mono-label">Available for projects</span>
            </div>
            <dl className="status-stack">
              <div>
                <dt className="mono-label">Currently at</dt>
                <dd>VNDL Consulting</dd>
              </div>
              <div>
                <dt className="mono-label">Building with</dt>
                <dd>React · Angular · Node.js</dd>
                <dd>Nx · TanStack · TypeScript</dd>
              </div>
              <div>
                <dt className="mono-label">Based in</dt>
                <dd>Lommel, Belgium</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}
