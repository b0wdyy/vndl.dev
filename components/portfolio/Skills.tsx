import { Chip } from '@/components/ui/Chip'
import { skills } from '@/lib/skills'

export function Skills() {
  return (
    <section className="section py-9" id="skills">
      <div className="container">
        <div className="mb-7 flex items-baseline justify-between gap-4 reveal">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Skills</h2>
          <span className="font-mono text-sm text-text-tertiary">The toolbox</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {skills.map((group, i) => (
            <div
              key={group.group}
              className="grid content-start gap-4 rounded-lg border border-border bg-surface p-5 transition-[background-color,border-color] duration-300 reveal"
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
