import type { Metadata } from 'next'
import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Loader } from '@/components/fx/Loader'
import { Cursor } from '@/components/fx/Cursor'
import { Veil } from '@/components/fx/Veil'
import { SmoothScroll } from '@/components/fx/SmoothScroll'
import { Reveal } from '@/components/fx/Reveal'
import { WorkPreviewClient } from '@/components/fx/WorkPreviewClient'
import '../styles/tokens.css'
import '../styles/base.css'
import '../styles/layout.css'
import '../styles/fx.css'
import '../styles/menu.css'
import '../styles/preview.css'
import '../styles/blog.css'

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-schibsted',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bodhi Vandael · Full-Stack Developer',
  description: 'Full-stack developer with 5+ years shipping web, mobile and desktop products. Based in Lommel, Belgium.',
}

// Inline pre-paint script to set data-theme before first paint (no FOUC)
const themeScript = `(function(){try{var s=localStorage.getItem('bv-theme');if(s==='dark'||s==='light'){document.documentElement.setAttribute('data-theme',s);document.documentElement.style.colorScheme=s;}else{var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',d);document.documentElement.style.colorScheme=d;}}catch(e){}})();`

// Inline script to add fx class when motion is allowed
const fxScript = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('fx');}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: fxScript }} />
      </head>
      <body className={`${schibsted.variable} ${jetbrains.variable}`}>
        <Loader />
        <Cursor />
        <Veil />
        <SmoothScroll />
        <Reveal />
        <WorkPreviewClient />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
