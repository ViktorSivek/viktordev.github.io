import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
    <button
      className="relative inline-flex h-12 md:h-14 lg:h-16 2k:h-18 4k:h-20 w-full md:w-60 lg:w-72 2k:w-96 4k:w-[28rem] mt-6 md:mt-10 lg:mt-12 2k:mt-14 4k:mt-16 overflow-hidden rounded-xl p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
             bg-slate-950 px-6 md:px-7 lg:px-9 2k:px-10 4k:px-12 text-sm md:text-lg lg:text-xl 2k:text-2xl 4k:text-3xl font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton
