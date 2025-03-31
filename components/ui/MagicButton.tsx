import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
  download,
}: {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
  href?: string
  download?: boolean | string
}) => {
  // If href is provided, render an anchor tag instead of a button
  const ButtonContent = (
    <>
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                     bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center 
                  rounded-xl bg-slate-950 px-6 md:px-7 lg:px-9 2k:px-10 4k:px-10 
                  text-sm md:text-lg lg:text-xl 2k:text-2xl 4k:text-3xl 
                  font-medium text-white backdrop-blur-3xl gap-2 
                  whitespace-nowrap ${otherClasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </>
  )

  // Return either a button or an anchor based on whether href is provided
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className="relative inline-flex h-16 md:h-18 lg:h-16 2k:h-18 4k:h-20 
                 min-w-[10rem] md:min-w-[15rem] lg:min-w-[18rem] 2k:min-w-[22rem] 4k:min-w-[26rem] 
                 mt-6 md:mt-10 lg:mt-12 2k:mt-14 4k:mt-16 overflow-hidden rounded-xl p-[1px] 
                 focus:outline-none"
        onClick={handleClick}
      >
        {ButtonContent}
      </a>
    )
  }

  return (
    <button
      className="relative inline-flex h-16 md:h-18 lg:h-16 2k:h-18 4k:h-20 
               min-w-[10rem] md:min-w-[15rem] lg:min-w-[18rem] 2k:min-w-[22rem] 4k:min-w-[26rem] 
               mt-6 md:mt-10 lg:mt-12 2k:mt-14 4k:mt-16 overflow-hidden rounded-xl p-[1px] 
               focus:outline-none"
      onClick={handleClick}
    >
      {ButtonContent}
    </button>
  )
}

export default MagicButton
