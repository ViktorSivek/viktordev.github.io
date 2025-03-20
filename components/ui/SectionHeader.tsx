"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  subtitle: string
  title: string
  className?: string
}

export const SectionHeader = ({ subtitle, title, className }: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className={cn("mb-16 text-center", className)}
    >
      <p className="font-roboto-mono text-white uppercase tracking-wider mb-3 text-base md:text-lg">{subtitle}</p>
      <h2 className="font-roboto-mono text-5xl md:text-6xl lg:text-7xl font-bold text-purple">{title}</h2>
    </motion.div>
  )
}
