'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EntryOverlay from '@/components/EntryOverlay'

export default function EntryExperience() {
  const [hasEntered, setHasEntered] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    if (!hasEntered) {
      setShowNavigation(false)
      return
    }

    const timer = window.setTimeout(() => {
      setShowNavigation(true)
    }, 1100)

    return () => window.clearTimeout(timer)
  }, [hasEntered])

  return (
    <>
      <EntryOverlay isOpen={!hasEntered} onEnter={() => setHasEntered(true)} />
      <Header isVisible={showNavigation} />
      <Hero hasEntered={hasEntered} />
    </>
  )
}
