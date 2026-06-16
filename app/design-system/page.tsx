import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design System · Bodhi Vandael',
  description: 'Design tokens, components, and visual language for vndl.dev.',
}

// Color tokens to display
const COLOR_TOKENS = [
  { name: '--color-bg', label: 'Background' },
  { name: '--color-bg-subtle', label: 'Background Subtle' },
  { name: '--color-surface', label: 'Surface' },
  { name: '--color-text', label: 'Text' },
  { name: '--color-text-secondary', label: 'Text Secondary' },
  { name: '--color-text-tertiary', label: 'Text Tertiary' },
  { name: '--color-border', label: 'Border' },
  { name: '--color-border-strong', label: 'Border Strong' },
  { name: '--color-accent', label: 'Accent' },
  { name: '--color-accent-strong', label: 'Accent Strong' },
  { name: '--color-accent-subtle', label: 'Accent Subtle' },
  { name: '--color-on-accent', label: 'On Accent' },
]

const SPACING_STEPS = [
  { token: '--space-1', px: '4px' },
  { token: '--space-2', px: '8px' },
  { token: '--space-3', px: '12px' },
  { token: '--space-4', px: '16px' },
  { token: '--space-5', px: '24px' },
  { token: '--space-6', px: '32px' },
  { token: '--space-7', px: '48px' },
  { token: '--space-8', px: '64px' },
  { token: '--space-9', px: '96px' },
  { token: '--space-10', px: '128px' },
]

const TYPE_SPECIMENS = [
  {
    label: 'Display / H1',
    size: 'clamp(2.5rem, 7vw, 4.25rem)',
    weight: 700,
    sample: 'Building maintainable software',
  },
  { label: 'Heading / H2', size: '2.25rem', weight: 700, sample: 'Selected work' },
  { label: 'Heading / H3', size: '1.375rem', weight: 700, sample: 'Full-Stack Developer' },
  {
    label: 'Body Large',
    size: '1.125rem',
    weight: 400,
    sample: 'Shipped across web, mobile and desktop.',
  },
  {
    label: 'Body Base',
    size: '1rem',
    weight: 400,
    sample: 'Writing clean, maintainable code at every layer.',
  },
  {
    label: 'Body Small',
    size: '0.875rem',
    weight: 400,
    sample: 'React · TypeScript · Node.js · GraphQL',
  },
  {
    label: 'Mono Label',
    size: '0.75rem',
    weight: 500,
    sample: 'FULL-STACK DEVELOPER · LOMMEL, BE',
    mono: true,
  },
]

const RADII = [
  { token: '--radius-sm', value: '4px' },
  { token: '--radius-md', value: '8px' },
  { token: '--radius-lg', value: '14px' },
  { token: '--radius-full', value: '999px' },
]

const SHADOWS = [
  { token: '--shadow-sm', label: 'Shadow SM' },
  { token: '--shadow-md', label: 'Shadow MD' },
  { token: '--shadow-lg', label: 'Shadow LG' },
]

const MOTION_SPECS = [
  {
    name: '--ease-out',
    value: 'cubic-bezier(0.16, 1, 0.3, 1)',
    use: 'Entrances, reveals, button hovers',
  },
  {
    name: 'Veil/Sweep ease',
    value: 'cubic-bezier(0.76, 0, 0.24, 1)',
    use: 'Preloader, page veil, row sweeps',
  },
  { name: '--duration-fast', value: '150ms', use: 'Hover states' },
  { name: '--duration-base', value: '300ms', use: 'Theme switch, underlines' },
  { name: '--duration-slow', value: '700ms', use: 'Entrances, scroll reveals' },
]

export default function DesignSystemPage() {
  return (
    <main id="top" style={{ paddingBottom: 'var(--space-10)' }}>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="mono-label">Design System · vndl.dev</p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 4.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginTop: 'var(--space-5)',
              marginBottom: 'var(--space-5)',
              maxWidth: '17ch',
            }}
          >
            The visual language behind the site.
          </h1>
          <p className="lede">
            Tokens, components, and motion specs — all built on a single CSS custom properties
            system. Download the token files to use in Figma or your own project.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              marginTop: 'var(--space-6)',
              flexWrap: 'wrap',
            }}
          >
            <a href="/tokens.css" download className="btn btn-primary">
              Download tokens.css
            </a>
            <a href="/tokens.json" download className="btn btn-ghost">
              Download tokens.json
            </a>
          </div>
        </div>
      </section>

      {/* Color Tokens */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Color</h2>
            <span className="count">12 tokens</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {COLOR_TOKENS.map((token) => (
              <div
                key={token.name}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: 64,
                    background: `var(${token.name})`,
                    borderBottom: '1px solid var(--color-border)',
                  }}
                />
                <div style={{ padding: 'var(--space-3)' }}>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                    }}
                  >
                    {token.label}
                  </p>
                  <p className="mono-label" style={{ marginTop: 2 }}>
                    {token.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Typography</h2>
            <span className="count">Schibsted Grotesk + JetBrains Mono</span>
          </div>
          <div style={{ display: 'grid', gap: 0, borderTop: '1px solid var(--color-border)' }}>
            {TYPE_SPECIMENS.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: 'var(--space-5) 0',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 'var(--space-5)',
                  alignItems: 'baseline',
                }}
              >
                <span className="mono-label">{s.label}</span>
                <span
                  style={{
                    fontFamily: s.mono
                      ? 'var(--font-jetbrains), monospace'
                      : 'var(--font-schibsted), sans-serif',
                    fontSize: s.size,
                    fontWeight: s.weight,
                    letterSpacing: s.mono ? '0.08em' : '-0.01em',
                    textTransform: s.mono ? 'uppercase' : 'none',
                    color: 'var(--color-text)',
                  }}
                >
                  {s.sample}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Spacing</h2>
            <span className="count">4px base · 10 steps</span>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            {SPACING_STEPS.map((s) => (
              <div
                key={s.token}
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}
              >
                <span className="mono-label" style={{ minWidth: 100 }}>
                  {s.px}
                </span>
                <div
                  style={{
                    height: 24,
                    width: `var(${s.token})`,
                    background: 'var(--color-accent)',
                    borderRadius: 'var(--radius-sm)',
                    minWidth: 4,
                  }}
                />
                <span className="mono-label">{s.token}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radii + Shadows */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Radii &amp; Elevation</h2>
            <span className="count">4 radii · 3 shadows</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-5)',
              marginBottom: 'var(--space-7)',
            }}
          >
            {RADII.map((r) => (
              <div key={r.token} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: `var(${r.token})`,
                    marginBottom: 'var(--space-2)',
                  }}
                />
                <p className="mono-label">{r.value}</p>
                <p className="mono-label" style={{ marginTop: 2 }}>
                  {r.token}
                </p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)' }}>
            {SHADOWS.map((s) => (
              <div key={s.token}>
                <div
                  style={{
                    width: 120,
                    height: 80,
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: `var(${s.token})`,
                    marginBottom: 'var(--space-2)',
                  }}
                />
                <p className="mono-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Components</h2>
            <span className="count">Live specimens</span>
          </div>

          <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
            {/* Buttons */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                Buttons
              </h3>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">
                  Primary button
                </a>
                <a href="#" className="btn btn-ghost">
                  Ghost button
                </a>
              </div>
            </div>

            {/* Chips */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                Chips
              </h3>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Next.js</span>
                <span className="chip">Prisma</span>
                <span className="chip">GraphQL</span>
              </div>
            </div>

            {/* Link */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                Link
              </h3>
              <a href="#" className="link">
                Animated underline on hover
              </a>
            </div>

            {/* Mono label */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                Mono Label
              </h3>
              <span className="mono-label">Full-Stack Developer · Lommel, Belgium</span>
            </div>

            {/* Motion specs */}
            <div>
              <h3
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text)',
                }}
              >
                Motion
              </h3>
              <div style={{ borderTop: '1px solid var(--color-border)', display: 'grid', gap: 0 }}>
                {MOTION_SPECS.map((m) => (
                  <div
                    key={m.name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr auto',
                      gap: 'var(--space-5)',
                      padding: 'var(--space-4) 0',
                      borderBottom: '1px solid var(--color-border)',
                      alignItems: 'baseline',
                    }}
                  >
                    <span className="mono-label">{m.name}</span>
                    <code
                      style={{
                        fontFamily: 'var(--font-jetbrains)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {m.value}
                    </code>
                    <span
                      style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)' }}
                    >
                      {m.use}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
