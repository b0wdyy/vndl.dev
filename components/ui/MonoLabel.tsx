export function MonoLabel({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return <span className={`mono-label${accent ? ' accent' : ''}`}>{children}</span>
}
