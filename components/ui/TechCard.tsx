'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TechCardProps {
  icon: string
  name: string
  className?: string
}

export const TechCard = ({ icon, name, className }: TechCardProps) => {
  return (
    <motion.div
      className={cn(
        'relative w-28 h-28 bg-black/20 backdrop-blur-sm rounded-lg border border-purple/30 flex items-center justify-center group overflow-hidden',
        className
      )}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Tech icon */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 relative mb-2">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">{name}</span>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300 group-hover:duration-200 animate-tilt"></div>
    </motion.div>
  )
}
