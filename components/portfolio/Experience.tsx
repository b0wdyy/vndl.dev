import { experience } from '@/lib/experience'
import { Chip } from '@/components/ui/Chip'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <h2>Experience</h2>
          <span className="count">2020–now</span>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="when">
                <span className="mono-label">{e.period}</span>
              </div>
              <div>
                <h3>{e.role}</h3>
                <p className="org">{e.org}</p>
                <ul>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="chip-row">
                  {e.chips.map((c) => <Chip key={c}>{c}</Chip>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
