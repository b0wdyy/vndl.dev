import { projects } from '@/lib/projects'

function WorkRow({ p }: { p: (typeof projects)[number] }) {
  const inner = (
    <>
      <span className="idx">{p.index}</span>
      <div className="work-main">
        <h3>{p.title}</h3>
        <p className="work-client-mobile mono-label accent">
          {p.client} · {p.period}
        </p>
        <p className="desc">{p.description}</p>
      </div>
      <div className="work-side">
        <span className="mono-label accent">{p.client}</span>
        <span className="mono-label">{p.period}</span>
      </div>
      <span className="arrow">↗</span>
    </>
  )

  if (p.href) {
    return (
      <a
        className="work-row"
        data-pkey={p.pkey}
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {inner}
      </a>
    )
  }

  return (
    <article className="work-row" data-pkey={p.pkey}>
      {inner}
    </article>
  )
}

export function WorkList() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head reveal">
          <h2>Selected work</h2>
          <span className="count">01–04</span>
        </div>
        <div className="work-list reveal" data-preview="">
          {projects.map((p) => (
            <WorkRow key={p.pkey} p={p} />
          ))}
        </div>
      </div>

      {/* Cursor-trailing preview — positioned fixed, driven by WorkPreview client component */}
      <figure className="work-preview" aria-hidden="true">
        <div className="work-preview-inner">
          {projects.map((p) => (
            <div key={p.pkey} className="wp-media" data-pkey={p.pkey}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--color-bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* TODO: replace with real project screenshot */}
                <span className="mono-label" style={{ opacity: 0.4 }}>
                  {p.title}
                </span>
              </div>
              <span className="wp-tag">{p.title}</span>
            </div>
          ))}
        </div>
      </figure>
    </section>
  )
}
