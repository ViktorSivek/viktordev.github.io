import { navItems } from '@/data'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="container w-full mx-auto px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
