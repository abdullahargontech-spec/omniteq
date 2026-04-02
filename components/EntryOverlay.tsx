'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

type EntryOverlayProps = {
  isOpen: boolean
  onEnter: () => void
}

export default function EntryOverlay({
  isOpen,
  onEnter,
}: EntryOverlayProps) {
  const [isActivating, setIsActivating] = useState(false)
  const [isFinaleActive, setIsFinaleActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen || !videoRef.current) return

    const video = videoRef.current
    setIsFinaleActive(false)

    let hasTriggeredFinale = false

    const activateFinale = () => {
      if (hasTriggeredFinale) return
      hasTriggeredFinale = true
      setIsFinaleActive(true)
    }

    const handleTimeUpdate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return

      if (video.currentTime >= Math.max(video.duration - 2, 0)) {
        activateFinale()
      }
    }

    const handleEnded = () => {
      activateFinale()
    }

    const playVideo = async () => {
      try {
        video.currentTime = 0
        await video.play()
      } catch {
        // Autoplay may be blocked until the browser considers the page interactive.
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    playVideo()

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const { documentElement, body } = document
    const previousHtmlOverflow = documentElement.style.overflow
    const previousBodyOverflow = body.style.overflow
    const previousBodyTouchAction = body.style.touchAction

    documentElement.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'

    return () => {
      documentElement.style.overflow = previousHtmlOverflow
      body.style.overflow = previousBodyOverflow
      body.style.touchAction = previousBodyTouchAction
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isFinaleActive) return

    const timer = window.setTimeout(() => {
      handleEnter()
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [isFinaleActive, isOpen])

  const handleEnter = () => {
    if (isActivating) return
    setIsActivating(true)
    window.setTimeout(() => {
      onEnter()
    }, 220)
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[120] overflow-hidden bg-[linear-gradient(180deg,#02A7DD_0%,#015FBF_100%)]"
        >
          <div
            className="relative h-full w-full cursor-pointer"
            onClick={handleEnter}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleEnter()
              }
            }}
            aria-label="Enter OmniTech"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              disablePictureInPicture
              disableRemotePlayback
              className="absolute inset-0 h-full w-full object-cover transition-[filter,opacity] duration-[2000ms] ease-linear"
              style={{
                filter: isFinaleActive ? 'blur(12px)' : 'blur(0px)',
                opacity: isFinaleActive ? 0.65 : 1,
              }}
            >
              <source
                src="/omnitech-loading.mp4"
                type="video/mp4"
              />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,167,221,0.12)_0%,rgba(0,0,0,0.28)_58%,rgba(0,0,0,0.62)_100%)]" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8">
              <div
                className="w-full max-w-[40rem] transition-all duration-[1800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: isFinaleActive ? 1 : 0,
                  transform: isFinaleActive ? 'scale(1)' : 'scale(0.92)',
                }}
              >
                <Image
                  src="/omnitech-logo.png"
                  alt="OmniTech logo"
                  width={1200}
                  height={600}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_22px_56px_rgba(1,95,191,0.22)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
