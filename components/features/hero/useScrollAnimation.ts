'use client'
import { useEffect } from 'react'

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const square = document.getElementById('mobile-square')
      if (!square) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.1 // Show after 10% scroll

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
