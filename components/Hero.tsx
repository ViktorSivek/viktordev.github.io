import { FaLocationArrow, FaEnvelope } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pb-20 pt-36">
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-[95vw] lg:max-w-[100rem] 2k:max-w-[110rem] 4k:max-w-[120rem] flex flex-col lg:flex-row items-center justify-between lg:space-x-48">
        {/* Left Side: Text and Buttons */}
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-center text-left">
          {/* Main Heading: Hello, my name is Viktor */}
          <h1 className=" text-left">
            <span className="font-roboto-mono text-[16px] md:text-2xl lg:text-4xl 2k:text-3xl 4k:text-5xl font-regular">
              Hi, I am
            </span>

            <span className="font-roboto-mono font-bold text-purple text-[56px] md:text-[64px] lg:text-[90px] 2k:text-[100px] 4k:text-[120px] ml-8 font-regular">
              Viktor
            </span>
          </h1>

          <TextGenerateEffect
            words="Transforming concepts into seamless user experiences."
            className="font-roboto-mono text-left text-[24px] md:text-2xl lg:text-3xl 2k:text-4xl 4k:text-5xl font-regular"
          />

          {/* Buttons: Stacked on Mobile, Next to Each Other on Desktop */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            {/* Show My Work Button */}
            <a href="#work" className="w-full lg:w-auto sm:w-64">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            {/* Contact Me Button */}
            <a href="#contact" className="w-full lg:w-auto sm:w-64">
              <MagicButton
                title="Contact Me"
                icon={<FaEnvelope />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Image for Desktop */}
        <div className="hidden lg:flex w-full lg:w-[40%] justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Placeholder square for future image/animation */}
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2k:w-[500px] 2k:h-[500px] 4k:w-[600px] 4k:h-[600px] bg-gray-300">
            {/* Replace this div with the future image/animation component */}
          </div>
        </div>

        {/* Image for Mobile (scroll down to see) */}
        <div className="lg:hidden mt-32">
          <div className="w-[300px] h-[300px] mx-auto bg-gray-300">
            {/* Replace with the future image/animation component */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
