import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono } from 'next/font/google'

import { Cursor } from '@/components/fx/Cursor'
import { Loader } from '@/components/fx/Loader'
import { Reveal } from '@/components/fx/Reveal'
import { SmoothScroll } from '@/components/fx/SmoothScroll'
import { Veil } from '@/components/fx/Veil'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import '../styles/base.css'
import '../styles/blog.css'
import '../styles/fx.css'
import '../styles/layout.css'
import '../styles/menu.css'
import '../styles/preview.css'
import '../styles/tokens.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-schibsted',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vndl.dev'),
  title: {
    default: 'Bodhi Vandael · Full-Stack Developer',
    template: '%s · Bodhi Vandael',
  },
  description:
    'Full-stack developer with 5+ years shipping web, mobile and desktop products. Based in Lommel, Belgium.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://vndl.dev',
    siteName: 'Bodhi Vandael',
    title: 'Bodhi Vandael · Full-Stack Developer',
    description:
      'Full-stack developer with 5+ years shipping web, mobile and desktop products. Based in Lommel, Belgium.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

// Inline pre-paint script to set data-theme before first paint (no FOUC)
const themeScript = `(function(){try{var s=localStorage.getItem('bv-theme');if(s==='dark'||s==='light'){document.documentElement.setAttribute('data-theme',s);document.documentElement.style.colorScheme=s;}else{var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',d);document.documentElement.style.colorScheme=d;}}catch(e){}})();`

// Inline script to add fx class when motion is allowed
const fxScript = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('fx');}}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: fxScript }} />
      </head>
      <body className={`${bricolage.variable} ${ibmPlexMono.variable}`}>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <Loader />
        <Cursor />
        <Veil />
        <SmoothScroll />
        <Reveal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
