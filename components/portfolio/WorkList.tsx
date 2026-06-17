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
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {inner}
      </a>
    )
  }

  return <article className="work-row">{inner}</article>
}

export function WorkList() {
  return (
    <section className="section py-9" id="work">
      <div className="container">
        <div className="mb-7 flex items-baseline justify-between gap-4 reveal">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Selected work</h2>
          <span className="font-mono text-sm text-text-tertiary">01–04</span>
        </div>
        <div className="work-list reveal">
          {projects.map((p) => (
            <WorkRow key={p.pkey} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
