import { navItems } from '@/data'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Experiences from '@/components/features/experiences'
import Projects from '@/components/features/projects'
import Contact from '@/components/features/contact'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="container w-full mx-auto px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
