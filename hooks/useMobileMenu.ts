'use client'

import { useState, useEffect, useCallback } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const close  = useCallback(() => setIsOpen(false), [])

  // Close on Escape — keyboard accessibility
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close])

  return { isOpen, toggle, close }
}
