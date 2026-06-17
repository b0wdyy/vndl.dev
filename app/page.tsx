import { Contact } from '@/components/portfolio/Contact'
import { Experience } from '@/components/portfolio/Experience'
import { Hero } from '@/components/portfolio/Hero'
import { Marquee } from '@/components/portfolio/Marquee'
import { Skills } from '@/components/portfolio/Skills'
import { WorkList } from '@/components/portfolio/WorkList'

export default function PortfolioPage() {
  return (
    <main id="top">
      <Hero />
      <WorkList />
      <Experience />
      <Skills />
      <Marquee />
      <Contact />
    </main>
  )
}
