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

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 w-full px-4">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
