import { navItems } from '@/data'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="container w-full mx-auto px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        
        {/* About Section */}
        <Section id="about">
          <SectionHeader subtitle="Introduction" title="About Me" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Your about content goes here */}
            <div className="text-white/80">
              <p>This is where you can add your about content. The section wrapper handles the animation and consistent spacing.</p>
            </div>
          </div>
        </Section>
        
        {/* Projects Section */}
        <Section id="projects">
          <SectionHeader subtitle="My Work" title="Projects" />
          <Grid />
        </Section>
        
        {/* Example of another section */}
        <Section id="skills" className="bg-black/20 -mx-5 sm:-mx-10 px-5 sm:px-10">
          <SectionHeader subtitle="Expertise" title="Skills & Technologies" />
          <div className="text-white/80">
            <p>Add your skills content here. Each section follows the same pattern but can have custom content.</p>
          </div>
        </Section>
      </div>
    </main>
  )
}
