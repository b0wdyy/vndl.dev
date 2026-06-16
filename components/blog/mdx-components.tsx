import React from 'react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMap = Record<string, React.ComponentType<any>>

export function getMDXComponents(): ComponentMap {
  return {
    // Inline images → next/image
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <span style={{ display: 'block', position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '1.5rem' }}>
        <Image
          src={src as string}
          alt={alt ?? ''}
          fill
          style={{ objectFit: 'cover', borderRadius: '14px' }}
        />
      </span>
    ),
    // Figure with caption
    figure: ({ children }: { children?: React.ReactNode }) => <figure>{children}</figure>,
    figcaption: ({ children }: { children?: React.ReactNode }) => <figcaption>{children}</figcaption>,
    // Keep headings semantic
    h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
    // Links open in same tab by default
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
      <a href={href} className="link">{children}</a>
    ),
  }
}
