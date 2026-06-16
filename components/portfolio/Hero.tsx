import { Magnetic } from '@/components/fx/Magnetic'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="mono-label rise" style={{ '--i': 0 } as React.CSSProperties}>
          Full-Stack Developer · Lommel, Belgium
        </p>
        <h1 className="rise split" style={{ '--i': 1 } as React.CSSProperties}>
          Building maintainable software, from interface to infrastructure.
        </h1>
        <p className="lede rise" style={{ '--i': 2 } as React.CSSProperties}>
          I&apos;m Bodhi Vandael. For the past five years I&apos;ve shipped web, mobile and desktop
          products with Angular, React and Node.js, with a soft spot for monorepos, developer
          tooling and the kind of code other people enjoy inheriting.
        </p>
        <div className="hero-cta rise" style={{ '--i': 3 } as React.CSSProperties}>
          <Magnetic strength={0.3}>
            <Button href="mailto:me@vndl.dev" variant="primary">
              Get in touch
            </Button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <Button
              href="https://linkedin.com/in/bodhi-vandael"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
