import { Magnetic } from '@/components/fx/Magnetic'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="pt-8 pb-9">
      <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="mono-label rise" style={{ '--i': 0 } as React.CSSProperties}>
            Full-Stack Developer · Lommel, Belgium
          </p>
          <h1
            className="rise split my-5 mb-6 max-w-[17ch] text-[clamp(2.5rem,7vw,var(--text-4xl))] font-bold leading-tight tracking-tight text-balance"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            Building maintainable software, from interface to infrastructure.
          </h1>
          <p
            className="rise mb-6 max-w-[52ch] text-md text-text-secondary text-pretty"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            I&apos;m Bodhi Vandael. For the past five years I&apos;ve shipped web, mobile and
            desktop products with Angular, React and Node.js, with a soft spot for monorepos,
            developer tooling and the kind of code other people enjoy inheriting.
          </p>
          <div
            className="rise flex flex-wrap items-center gap-3"
            style={{ '--i': 3 } as React.CSSProperties}
          >
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
          className="rise hidden lg:flex lg:justify-end"
          aria-label="Status"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <div className="grid w-full max-w-[280px] gap-5 rounded-lg border border-border bg-surface p-5 transition-[background-color,border-color] duration-300">
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="mono-label">Available for projects</span>
            </div>
            <dl className="grid gap-4">
              <div className="grid gap-1">
                <dt className="mono-label">Currently at</dt>
                <dd className="m-0 text-sm text-text-secondary">VNDL Consulting</dd>
              </div>
              <div className="grid gap-1">
                <dt className="mono-label">Building with</dt>
                <dd className="m-0 text-sm text-text-secondary">React · Angular · Node.js</dd>
                <dd className="m-0 text-sm text-text-secondary">Nx · TanStack · TypeScript</dd>
              </div>
              <div className="grid gap-1">
                <dt className="mono-label">Based in</dt>
                <dd className="m-0 text-sm text-text-secondary">Lommel, Belgium</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}
