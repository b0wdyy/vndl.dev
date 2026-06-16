import { Chip } from '@/components/ui/Chip'
import { skills } from '@/lib/skills'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>Skills</h2>
          <span className="count">The toolbox</span>
        </div>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.group}
              className="skill-group reveal"
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="mono-label accent">{group.group}</span>
              <div className="chip-row">
                {group.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
