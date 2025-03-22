'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { TechBall } from '@/components/ui/TechBall'
import { technologies } from '@/data/technologies'
import { FaDownload } from 'react-icons/fa6'
import MagicButton from '@/components/ui/MagicButton'

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionHeader subtitle="Introduction" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl md:max-w-3xl lg:max-w-4xl 2k:max-w-5xl 4k:max-w-6xl mx-auto text-center"
      >
        <p className="text-white text-lg md:text-xl lg:text-xl 2k:text-2xl 4k:text-3xl leading-relaxed mb-6">
          I'm a developer passionate about full-stack projects, data analytics,
          and AI/ML. Working primarily in Python and JavaScript, I build robust
          applications, automate workflows, and create AI-driven solutions. As
          an AI enthusiast, I leverage cutting-edge technologies to boost
          productivity. I'm also comfortable with Linux and cloud platforms.
          Always ready to solve problems and deliver user-friendly solutions.
          Let's team up and bring your ideas to life!
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

        <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
          {technologies.map((technology) => (
            <div className="w-24 h-24" key={technology.name}>
              <TechBall icon={technology.icon} />
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

export default AboutSection
