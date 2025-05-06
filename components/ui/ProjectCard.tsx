'use client'

import Image from 'next/image'
import { Project } from '@/data'
import { cn } from '@/lib/utils'
import { FaCode, FaExternalLinkAlt, FaCopy } from 'react-icons/fa' // Added FaCopy
import { useState } from 'react' // Added useState

interface ProjectCardProps {
  project: Project
  index: number
}

// Add this helper function above the return statement
const getTagClasses = (color: string): string => {
  switch (color) {
    case 'text-blue-500':
      return 'bg-blue-950/60 text-blue-400 hover:bg-blue-900/70'
    case 'text-green-500':
      return 'bg-green-950/60 text-green-400 hover:bg-green-900/70'
    case 'text-pink-500': // Assuming pink corresponds to rose in the example
      return 'bg-rose-950/60 text-rose-400 hover:bg-rose-900/70'
    default: // Default or other colors
      return 'bg-gray-900/60 text-gray-400 hover:bg-gray-800/70'
  }
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: 'user' | 'password') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000) // Reset after 2 seconds
    })
  }

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl w-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-700 h-full">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        {' '}
        {/* Changed aspect ratio here */}
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex flex-col flex-grow">
        {' '}
        {/* Removed h-full here */}
        <h3 className="text-white font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {project.name}
        </h3>
        <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>
        <div className="flex-grow" /> {/* Spacer to push content below down */}
        {/* Credentials block with minimum height and new styling */}
        <div className="mt-4 min-h-[4.5rem]">
          {project.user && project.user !== '-' && (
            <div className="space-y-2 bg-gray-800/70 p-3 rounded-md">
              <div className="flex justify-between items-center">
                <p className="text-gray-200 text-sm md:text-base font-medium">
                  Demo user:{' '}
                  <span className="text-white font-semibold">
                    {project.user}
                  </span>
                </p>
                <button
                  onClick={() => handleCopy(project.user as string, 'user')}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Copy username"
                >
                  {copied === 'user' ? (
                    <span className="text-xs">Copied!</span>
                  ) : (
                    <FaCopy />
                  )}
                </button>
              </div>
              {project.password && project.password !== '-' && (
                <div className="flex justify-between items-center">
                  <p className="text-gray-200 text-sm md:text-base font-medium">
                    Demo password:{' '}
                    <span className="text-white font-semibold">
                      {project.password}
                    </span>
                  </p>
                  <button
                    onClick={() =>
                      handleCopy(project.password as string, 'password')
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Copy password"
                  >
                    {copied === 'password' ? (
                      <span className="text-xs">Copied!</span>
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className={cn(
                'text-sm px-3 py-1 rounded-full transition-colors',
                getTagClasses(tag.color) // Use the helper function
              )}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="pt-4 flex flex-col sm:flex-row justify-between gap-3">
          {' '}
          {/* Removed mt-auto */}
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
          >
            <FaExternalLinkAlt size={16} />
            <span>Demo</span>
          </a>
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
          >
            <FaCode size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  )
}
