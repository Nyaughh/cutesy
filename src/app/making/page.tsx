'use client'

import { useEffect, useRef } from 'react'
import CutesyButton from '@/components/cutesy/cutesy-button'

export default function Making() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.cursor = 'none'

    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const growCursor = () => {
      cursor.firstElementChild?.classList.add('scale-150', 'transition-transform', 'duration-300')
    }

    const shrinkCursor = () => {
      cursor.firstElementChild?.classList.remove('scale-150')
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', growCursor)
    document.addEventListener('mouseup', shrinkCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', growCursor)
      document.removeEventListener('mouseup', shrinkCursor)
      document.body.style.cursor = 'default'
    }
  }, [])

  return (
    <div className="min-h-screen bg-pink-100">
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 text-pink-500"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
          <path d="m8 16 1.5-1.5" />
          <path d="M14.5 9.5 16 8" />
          <path d="m8 8 1.5 1.5" />
          <path d="M14.5 14.5 16 16" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-center py-8 text-pink-600">Making Page</h1>
      {/* Your existing content */}
    </div>
  )
}