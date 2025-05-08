'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CopyButton } from '@/components/animate-ui/buttons/copy'
import Prism from 'prismjs'

// Import TypeScript language support
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

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
  onDone?: () => void
  onCopy?: (content: string) => void
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
  onDone,
  onCopy,
}: CodeEditorProps) => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(cursor)
  const [isDone, setIsDone] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')
  const codeRef = useRef<HTMLPreElement>(null)

  // Highlight code when text changes
  useEffect(() => {
    if (text) {
      const highlighted = Prism.highlight(
        text,
        Prism.languages[lang] || Prism.languages.typescript,
        lang
      )
      setHighlightedCode(highlighted)
    }
  }, [text, lang])

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

        // Auto-scroll to bottom as typing occurs
        codeRef.current?.scrollTo({
          top: codeRef.current?.scrollHeight,
          behavior: 'smooth',
        })
      } else {
        // Animation complete
        setShowCursor(false)
        setIsDone(true)
        onDone?.()
      }
    }

    // Start typing after initial delay
    timeout = setTimeout(() => {
      typeNextCharacter()
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [children, delay, onDone])

  return (
    <div
      className={cn(
        'font-roboto-mono rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm w-full flex flex-col shadow-lg',
        className
      )}
    >
      {/* Editor header */}
      <div className="relative flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-gray-800/75 h-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {icon}
          <span className="text-xs text-white/70">{title}</span>
        </div>

        <div>
          {copyButton && (
            <CopyButton
              content={children.toString()}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-gray-800/70"
              onCopyComplete={onCopy}
            />
          )}
        </div>
      </div>

      {/* Code content */}
      <div className="relative flex-1 h-[calc(100%-2.75rem)]">
        <pre
          ref={codeRef}
          className="p-3 px-4 text-xs md:text-sm text-white/90 overflow-auto h-full font-roboto-mono bg-gradient-to-br from-gray-900/80 to-gray-950/80"
        >
          <code
            className={`language-${lang} whitespace-pre-wrap`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          {showCursor && (
            <motion.span
              className="inline-block w-0.5 h-4 bg-white/70 ml-0.5"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
        </pre>
      </div>
    </div>
  )
}
