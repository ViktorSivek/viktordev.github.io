import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'

const HeroText = () => {
  return (
    <>
      <h1 className="text-left">
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
    </>
  )
}

export default HeroText
