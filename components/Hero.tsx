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

      {/* Main Content with Text on Left and Image/Animation on Right */}
      <div className="relative z-10 container mx-auto max-w-[89vw] lg:max-w-7xl flex flex-col lg:flex-row items-center justify-between lg:space-x-28">
        {/* Left Side: Text and Buttons */}
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center text-left">
          {/* Main Heading: Hello, my name is Viktor */}
          <h1 className="font-poppins text-left text-[36px] md:text-5xl lg:text-6xl 2k:text-7xl 4k:text-8xl">
            Hello, my name is{' '}
            <span className="font-bold text-purple-500 text-[42px] md:text-[56px] lg:text-[64px] 2k:text-[72px] 4k:text-[80px]">
              Viktor
            </span>
            .
          </h1>

          {/* Animated Phrase with Roboto Mono using TextGenerateEffect */}
          <TextGenerateEffect
            words="Transforming concepts into seamless user experiences."
            className="font-roboto-mono text-left text-[24px] md:text-2xl lg:text-3xl 2k:text-4xl 4k:text-5xl font-regular mt-4"
          />

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {/* Show My Work Button */}
            <a href="#work">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            {/* Contact Me Button */}
            <a href="#contact">
              <MagicButton
                title="Contact Me"
                icon={<FaEnvelope />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Right Side: Placeholder for Future Picture/Animation */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Placeholder square for future image/animation */}
          <div className="w-[300px] h-[300px] bg-gray-300 lg:w-[400px] lg:h-[400px]">
            {/* Replace this div with the future image/animation component */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
