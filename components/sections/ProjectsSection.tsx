'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import Grid from '@/components/Grid'

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionHeader subtitle="My Work" title="Projects" />
      <Grid />
    </Section>
  )
}

export default ProjectsSection
