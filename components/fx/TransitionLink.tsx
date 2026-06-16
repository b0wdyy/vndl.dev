'use client'
import { useRouter } from 'next/navigation'
import { triggerVeil } from './Veil'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export function TransitionLink({ href, children, className, style, onClick }: Props) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    triggerVeil(() => {
      router.push(href)
    })
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
