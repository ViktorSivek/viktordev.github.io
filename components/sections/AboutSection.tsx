'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { technologies } from '@/data/technologies'
import { FaDownload } from 'react-icons/fa6'
import MagicButton from '@/components/ui/MagicButton'
import { TechCard } from '@/components/ui/TechCard'

const AboutSection = () => {
  return (
    <Section id="about" className="relative">
      {/* Add a subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 to-black-100/20 pointer-events-none" />
      <SectionHeader subtitle="Introduction" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl md:max-w-3xl lg:max-w-4xl 2k:max-w-5xl 4k:max-w-6xl mx-auto text-center"
      >
        <p className="text-white text-lg md:text-xl lg:text-xl 2k:text-2xl 4k:text-3xl leading-relaxed mb-6">
          I&apos;m a developer passionate about full-stack projects, data
          analytics, and AI/ML. Working primarily in Python and Typescript, I
          build robust applications, automate workflows, and create AI-driven
          solutions. As an AI enthusiast, I leverage cutting-edge technologies
          to boost productivity. I&apos;m also comfortable with Linux and cloud
          platforms. Always ready to solve problems and deliver user-friendly
          solutions. Let&apos;s team up and bring your ideas to life!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <MagicButton
            title="Download CV"
            icon={<FaDownload />}
            position="right"
            href="/cv/CV_ViktorSívek.pdf"
            download={true}
          />
        </motion.div>

        {/* Tech grid with new TechCard component */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-white mt-12 mb-6"
        >
          Technologies I Work With
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {technologies.map((technology) => (
            <TechCard 
              key={technology.name}
              icon={technology.icon}
              name={technology.name}
              className="backdrop-blur-md"
            />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default AboutSection
