'use client'
import { FaLocationArrow, FaEnvelope } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
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
              <span className="font-roboto-mono font-bold text-[20px] md:text-[24px] md:text-2xl lg:text-3xl 2k:text-4xl 4k:text-5xl font-regular mt-4 ">
                Hi, I am
              </span>
              <span className="font-roboto-mono font-bold text-purple text-[45px] sm:text-[50] md:text-[64px] lg:text-[90px] 2k:text-[100px] 4k:text-[120px] ml-6 md:ml-8 font-regular">
                Viktor
              </span>
            </h1>

            <TextGenerateEffect
              words="I’m the one, who gets it done"
              className="font-roboto-mono text-[24px] md:text-2xl lg:text-3xl 2k:text-4xl 4k:text-5xl font-regular mt-4 mb-12 md:mb-24 lg:mb-0 landscape:mb-0"
            />

            {/* Buttons */}
            <div className="flex flex-col w-full lg:flex-row gap-4 max-w-xl pd lg:w-auto sm:mt-24 md:mt-24 lg:mt-0 landscape:mt-0 landscape:mb-8">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
              <MagicButton
                title="Contact Me"
                icon={<FaEnvelope />}
                position="right"
              />
            </div>
          </div>

          {/* Right Side: White Square (Desktop only) */}
          <div className="hidden lg:flex w-1/2 justify-center items-center">
            <div className="w-[400px] h-[400px] 2k:w-[500px] 2k:h-[500px] 4k:w-[600px] 4k:h-[600px] bg-white rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Mobile-only White Square AFTER the hero section (so it appears when you scroll) */}
      <div className="lg:hidden w-full flex justify-center py-10 landscape:mt-20">
        <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-lg"></div>
      </div>
    </>
  )
}

export default Hero
