'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CodeEditorProps {
  children: string
  className?: string
  lang?: string
  title?: string
  icon?: React.ReactNode
  cursor?: boolean
  duration?: number
  delay?: number
  copyButton?: boolean
}

export const CodeEditor = ({
  children,
  className,
  lang = 'tsx',
  title = 'component.tsx',
  icon,
  cursor = true,
  duration = 15,
  delay = 0.5,
  copyButton = false,
}: CodeEditorProps) => {
  const [copied, setCopied] = useState(false)
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(cursor)
  const codeRef = useRef<HTMLPreElement>(null)

  // Animation effect to type out the code
  useEffect(() => {
    if (!children) return

    let timeout: NodeJS.Timeout
    let currentIndex = 0
    const codeString = children.toString()

    const typeNextCharacter = () => {
      if (currentIndex < codeString.length) {
        setText(codeString.substring(0, currentIndex + 1))
        currentIndex++

        // Random typing speed for realistic effect
        const randomDelay = Math.random() * 50 + 10
        timeout = setTimeout(typeNextCharacter, randomDelay)
      } else {
        // Animation complete
        setShowCursor(false)
      }
    }

    // Start typing after initial delay
    timeout = setTimeout(() => {
      typeNextCharacter()
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [children, delay])

  // Copy to clipboard function
  const copyToClipboard = () => {
    if (!children) return

    navigator.clipboard.writeText(children.toString())
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div
      className={cn(
        'font-roboto-mono rounded-lg overflow-hidden border border-neutral-800 bg-black-100',
        className
      )}
    >
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-2 bg-black-200 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          {icon && <div className="w-4 h-4">{icon}</div>}
          <span className="text-sm text-white/70">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre
          ref={codeRef}
          className="p-4 text-sm text-white/90 overflow-auto"
          style={{ fontFamily: 'Roboto Mono, monospace' }}
        >
          <code>{text}</code>
          {showCursor && (
            <motion.span
              className="inline-block w-0.5 h-4 bg-white/70 ml-0.5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
        </pre>

        {/* Copy button */}
        {copyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 px-2 py-1 text-xs rounded bg-neutral-800 text-white/70 hover:bg-neutral-700 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  )
}
