'use client'
import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Brussels',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="header-clock mono-label" suppressHydrationWarning>
      <span className="clock-time" suppressHydrationWarning>{time}</span>
      &nbsp;· Lommel, BE
    </span>
  )
}
