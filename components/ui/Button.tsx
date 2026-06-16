import Link from 'next/link'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'ghost'
  target?: string
  rel?: string
  children: React.ReactNode
}

export function Button({ href, variant = 'primary', target, rel, children }: ButtonProps) {
  return (
    <Link href={href} className={`btn btn-${variant}`} target={target} rel={rel}>
      {children}
    </Link>
  )
}
