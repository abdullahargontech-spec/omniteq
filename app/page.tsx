'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Characters from '@/components/Characters'
import World from '@/components/World'
import Features from '@/components/Features'
import Episodes from '@/components/Episodes'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import EntryOverlay from '@/components/EntryOverlay'

export default function Home() {
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

      <main className="bg-background text-foreground">
        <Header isVisible={showNavigation} />
        <Hero hasEntered={hasEntered} />
        <Characters />
        <World />
        <Features />
        <Episodes />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
