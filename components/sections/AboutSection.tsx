'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { Section } from '@/components/ui/Section'

import { motion } from 'framer-motion'

import { BallCanvas } from './canvas'
import { technologies } from '../constants'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px] text-center"
      >
        I am an Informatics student passionate about web app development, data
        analytics and the exciting world of artificial intelligence. I really
        enjoy creating web applications, handling both the back and front ends.
        I also drawn to data analysis, data visualization, and machine learning.
        Python is my go-to programming language, and I have been using lots of
        its libraries like Pandas, Numpy, Matplotlib, Django, Selenium, and
        Scikit-learn. I can also work with web languages like HTML, CSS,
        JavaScript, and I am currently learning frameworks React and Next.js. I
        use SQL to work with data, and Tableau or Power BI for creating
        visualizations. I got some little experience with Linux and have also
        worked with Microsoft Azure. I am a fast learner and love solving
        problems, always ready for new challenges to create user-friendly
        solutions. Lets team up and make your ideas come to life!
      </motion.p>

      <motion.a
        href="/cv/CV_ViktorSívek.pdf"
        download
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-8 bg-[#e13f3f] hover:bg-[#c42525] text-white font-bold py-4 px-6 rounded-full inline-block"
      >
        Download CV
      </motion.a>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

const NamedAbout = SectionWrapper(About, 'about')
export default NamedAbout
