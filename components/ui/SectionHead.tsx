export function SectionHead({ title, count }: { title: string; count: string }) {
  return (
    <div className="section-head reveal">
      <h2>{title}</h2>
      <span className="count">{count}</span>
    </div>
  )
}
