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
      className={cn("mb-10", className)}
    >
      <p className="text-sm text-white/80 uppercase tracking-wider mb-2">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
    </motion.div>
  )
}
