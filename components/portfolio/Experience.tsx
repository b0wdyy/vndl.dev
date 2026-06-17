import { Chip } from '@/components/ui/Chip'
import { experience } from '@/lib/experience'

export function Experience() {
  return (
    <section className="section py-9" id="experience">
      <div className="container">
        <div className="mb-7 flex items-baseline justify-between gap-4 reveal">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Experience</h2>
          <span className="font-mono text-sm text-text-tertiary">2020–now</span>
        </div>
        <div className="grid">
          {experience.map((e, i) => (
            <div
              key={i}
              className="timeline-item relative grid grid-cols-1 gap-3 border-b border-border py-6 reveal md:grid-cols-[180px_1fr] md:gap-6"
            >
              <div className="pt-[3px]">
                <span className="mono-label">{e.period}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-snug tracking-tight">{e.role}</h3>
                <p className="mb-3 text-sm font-medium text-accent">{e.org}</p>
                <ul className="mb-4 grid list-none gap-2">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="relative pl-4 text-sm text-text-secondary text-pretty">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="chip-row">
                  {e.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
