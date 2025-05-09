'use client'
import { FaLocationArrow, FaEnvelope } from 'react-icons/fa6'
import MagicButton from '../ui/MagicButton'
import { Spotlight } from '../ui/Spotlight'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'
import ModelViewer from '../ui/ModelViewer'
import { scrollToSection } from '@/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <>
      {/* Full-screen hero section */}
      <div className="relative h-screen flex items-center justify-center landscape:items-start landscape:pt-4">
        {/* Spotlight effects */}
        <div className="absolute inset-0">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Background */}
        <div
          className="absolute inset-0 w-full h-screen dark:bg-black-100 bg-white
          dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        {/* Main Content (text, buttons, big square for desktop) */}
        <div className="relative z-10 container mx-auto max-w-[95vw] lg:max-w-[100rem] 2k:max-w-[110rem] 4k:max-w-[120rem] flex flex-col lg:flex-row items-center justify-center h-full mt-2 md:mt-24 lg:mt-0 landscape:mt-0 landscape:justify-start">
          {/* Left Side: Text and Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-12 md:mt-24 lg:mt-0">
            {/* Main Heading */}
            <h1 className="text-left landscape:mt-0">
              <span className="font-roboto-mono font-bold text-[22px] sm:text-[22px] md:text-[35px] md:text-5xl lg:text-6xl 2k:text-7xl 4k:text-8xl font-regular mt-4 ">
                Hi, I am
              </span>
              <span className="font-roboto-mono font-bold text-purple text-[35px] sm:text-[40px] md:text-[64px] lg:text-[90px] 2k:text-[100px] 4k:text-[120px] ml-6 md:ml-8 font-regular">
                Viktor
              </span>
            </h1>

            <TextGenerateEffect
              words="I'm the one, who gets it done"
              className="font-roboto-mono text-[20px] sm:text-[24px] md:text-2xl lg:text-3xl 2k:text-4xl 4k:text-5xl font-regular mt-4 mb-6 md:mb-8 lg:mb-6"
            />

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-5">
              <motion.a
                href="https://github.com/ViktorSivek"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white text-2xl md:text-3xl"
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/viktor-sivek/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-2xl md:text-3xl"
                />
              </motion.a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-full lg:flex-row lg:gap-4 max-w-xl pd lg:w-auto landscape:mb-8">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                handleClick={() => scrollToSection('projects')}
              />
              <MagicButton
                title="Contact Me"
                icon={<FaEnvelope />}
                position="right"
                handleClick={() => scrollToSection('contact')}
              />
            </div>
          </div>

          {/* Right Side: 3D Model (Desktop only) */}
          <div className="hidden lg:flex w-1/2 justify-center items-center">
            <div className="w-[700px] h-[700px] 2k:w-[800px] 2k:h-[800px] 4k:w-[900px] 4k:h-[900px]">
              <ModelViewer
                modelPath="/models/model.glb"
                autoRotate={false}
                backgroundColor="transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only 3D Model AFTER the hero section (so it appears when you scroll) */}
      <div className="lg:hidden w-full flex justify-center py-10 landscape:mt-20">
        <div className="w-[500px] h-[500px]">
          <ModelViewer
            modelPath="/models/model.glb"
            autoRotate={false}
            backgroundColor="transparent"
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection
