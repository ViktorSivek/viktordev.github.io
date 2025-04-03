'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data'

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionHeader subtitle="My Work" title="Projects" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-10 text-center max-w-3xl mx-auto mb-12"
      >
        <p className="text-gray-300 text-lg">
          Check out some of my recent projects. Each includes a live demo and access to the source code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
