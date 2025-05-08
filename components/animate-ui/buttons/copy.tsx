'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'ghost'
  onCopyComplete?: (content: string) => void
}

export const CopyButton = ({
  content,
  size = 'md',
  variant = 'default',
  className,
  onCopyComplete,
  ...props
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      onCopyComplete?.(content)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center rounded-md transition-colors',
        size === 'sm' && 'h-8 px-2 text-xs',
        size === 'md' && 'h-10 px-3 text-sm',
        size === 'lg' && 'h-12 px-4 text-base',
        variant === 'default' &&
          'bg-neutral-800 text-white/70 hover:bg-neutral-700',
        variant === 'ghost' && 'text-white/70 hover:bg-neutral-800',
        className
      )}
      {...props}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
