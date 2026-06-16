import { Hero } from '@/components/portfolio/Hero'
import { WorkList } from '@/components/portfolio/WorkList'
import { Experience } from '@/components/portfolio/Experience'
import { Skills } from '@/components/portfolio/Skills'
import { Marquee } from '@/components/portfolio/Marquee'
import { Contact } from '@/components/portfolio/Contact'

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
