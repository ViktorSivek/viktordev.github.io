'use client'
import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const square = document.getElementById('mobile-square')
      if (!square) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.8 // Show after 80% of first screen

      if (scrollPosition > threshold) {
        square.style.opacity = '1'
      } else {
        square.style.opacity = '0'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
