'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeader subtitle="Introduction" title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white/80">
          <p className="text-lg mb-4">
            Hello! I'm Viktor, a passionate developer with a love for creating beautiful, functional web experiences.
          </p>
          <p className="text-lg mb-4">
            With expertise in modern frontend technologies like React, Next.js, and Three.js, I build applications that are not only visually stunning but also performant and accessible.
          </p>
          <p className="text-lg">
            My approach combines technical excellence with creative problem-solving, ensuring that every project I work on exceeds expectations and delivers real value.
          </p>
        </div>
        <div className="text-white/80">
          <p className="text-lg mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
          <p className="text-lg mb-4">
            I believe in continuous learning and staying at the forefront of web development trends to deliver cutting-edge solutions for my clients.
          </p>
          <p className="text-lg">
            Let's work together to bring your ideas to life with clean code and exceptional user experiences!
          </p>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
