'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/data'
import { cn } from '@/lib/utils'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 p-5 rounded-2xl w-full h-[580px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/20">
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{project.name}</h3>
          <p className="mt-2 text-gray-300 text-base">{project.description}</p>
          
          {project.user && project.user !== "-" && (
            <div className="mt-4 space-y-1">
              <p className="text-gray-300 text-base">Demo user: <span className="text-gray-100">{project.user}</span></p>
              {project.password && project.password !== "-" && (
                <p className="text-gray-300 text-base">Demo password: <span className="text-gray-100">{project.password}</span></p>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className={cn("text-sm px-3 py-1 rounded-full bg-black/30", tag.color)}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-8 px-8">
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
          >
            <FaExternalLinkAlt size={16} />
            <span>Demo</span>
          </a>
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black/50 border border-white/20 text-white py-3 px-8 rounded-md hover:bg-black/70 transition-colors"
          >
            <FaCode size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
