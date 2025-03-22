'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'
import { TechBall } from '@/components/ui/TechBall'
import { technologies } from '@/data/technologies'
import { cn } from '@/lib/utils'
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
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-white text-lg leading-relaxed mb-6">
          I am an Informatics student passionate about web app development, data
          analytics and the exciting world of artificial intelligence. I really
          enjoy creating web applications, handling both the back and front
          ends. I also drawn to data analysis, data visualization, and machine
          learning. Python is my go-to programming language, and I have been
          using lots of its libraries like Pandas, Numpy, Matplotlib, Django,
          Selenium, and Scikit-learn. I can also work with web languages like
          HTML, CSS, JavaScript, and I am currently learning frameworks React
          and Next.js. I use SQL to work with data, and Tableau or Power BI for
          creating visualizations. I got some little experience with Linux and
          have also worked with Microsoft Azure. I am a fast learner and love
          solving problems, always ready for new challenges to create
          user-friendly solutions. Lets team up and make your ideas come to
          life!
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
