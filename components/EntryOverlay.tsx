'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type EntryOverlayProps = {
  isOpen: boolean
  onEnter: () => void
}

export default function EntryOverlay({
  isOpen,
  onEnter,
}: EntryOverlayProps) {
  const [isActivating, setIsActivating] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen || !videoRef.current) return

    const playVideo = async () => {
      try {
        videoRef.current!.currentTime = 0
        await videoRef.current!.play()
      } catch {
        // Autoplay may be blocked until the browser considers the page interactive.
      }
    }

    playVideo()
  }, [isOpen])

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
          className="fixed inset-0 z-[120] overflow-hidden bg-black"
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
            aria-label="Enter OmniQuest"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              className="absolute inset-0 h-full w-full object-contain"
            >
              <source
                src="/nova-loading.mp4"
                type="video/mp4"
              />
            </video>

            <button
              type="button"
              tabIndex={-1}
              onClick={handleEnter}
              aria-label="Enter OmniQuest"
              className="absolute right-[6%] top-1/2 z-10 h-[42vh] w-[28vh] min-h-[220px] min-w-[140px] -translate-y-1/2 bg-transparent opacity-0"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
