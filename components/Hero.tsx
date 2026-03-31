'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Volume2, VolumeX, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

type HeroProps = {
  hasEntered?: boolean
}

export default function Hero({ hasEntered = true }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.28, 0.8, 1], [1.08, 1, 1, 0.94])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.72, 0.5, 0.54, 0.74])
  const contentY = useTransform(scrollYProgress, [0, 0.55, 1], [28, 0, -72])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.52])

  useEffect(() => {
    if (!hasEntered || !videoRef.current) return

    const playVideo = async () => {
      try {
        await videoRef.current?.play()
      } catch {
        // Autoplay can still be blocked by the browser if interaction context is lost.
      }
    }

    playVideo()
  }, [hasEntered])

  const scrollToNextSection = () => {
    document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] overflow-clip bg-background"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div
          style={{ scale }}
          className="relative h-screen w-screen origin-center"
        >
          {!videoError ? (
            <motion.video
              ref={videoRef}
              autoPlay={hasEntered}
              muted={isMuted}
              loop
              playsInline
              onError={() => setVideoError(true)}
              initial={false}
              animate={{
                scale: hasEntered ? 1 : 1.14,
                opacity: hasEntered ? 1 : 0.18,
              }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/omniquest-entry.mp4"
                type="video/mp4"
              />
            </motion.video>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-slate-950 to-black" />
          )}

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.46)_36%,rgba(0,0,0,0.76)_100%)]"
          />

          <motion.button
            initial={false}
            animate={{ opacity: hasEntered ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-20 right-4 z-20 rounded-lg border border-white/10 bg-black/40 p-3 backdrop-blur transition-all hover:border-primary/30 hover:bg-black/60 sm:top-24 sm:right-8"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-white" />
            ) : (
              <Volume2 className="h-5 w-5 text-primary" />
            )}
          </motion.button>

          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-10 flex h-full w-full items-center justify-center px-4 pt-16"
          >
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={false}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  y: hasEntered ? 0 : -24,
                }}
                transition={{ duration: 0.8, delay: hasEntered ? 0.2 : 0 }}
                className="mb-6 inline-block"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-sm font-medium text-primary">Now Playing</span>
                </div>
              </motion.div>

              <motion.h1
                initial={false}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  y: hasEntered ? 0 : 30,
                }}
                transition={{ duration: 0.95, delay: hasEntered ? 0.35 : 0 }}
                className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-7xl"
              >
                Level Up Your English
                <br />
                <span className="text-primary">in a Living Game World</span>
              </motion.h1>

              <motion.p
                initial={false}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  y: hasEntered ? 0 : 26,
                }}
                transition={{ duration: 0.8, delay: hasEntered ? 0.48 : 0 }}
                className="mx-auto mb-8 max-w-2xl text-base text-gray-300 sm:text-lg"
              >
                Level up your English, level up your life. Join OmniQuest, where
                story, gameplay, and learning merge into one immersive
                multiplayer adventure.
              </motion.p>

              <motion.div
                initial={false}
                animate={{
                  opacity: hasEntered ? 1 : 0,
                  y: hasEntered ? 0 : 24,
                }}
                transition={{ duration: 0.8, delay: hasEntered ? 0.62 : 0 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="rounded-lg bg-primary px-8 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50"
                >
                  Enter OmniQuest
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-primary/50 px-8 font-semibold text-primary hover:bg-primary/10"
                >
                  Watch Trailer
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.button
            initial={false}
            animate={{
              opacity: hasEntered ? 1 : 0,
              y: hasEntered ? 0 : -10,
            }}
            transition={{
              duration: 0.8,
              delay: hasEntered ? 1 : 0,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            onClick={scrollToNextSection}
            className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 transition-colors group-hover:text-primary">
              Scroll to explore
            </span>
            <ChevronDown className="h-5 w-5 text-primary transition-transform group-hover:translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
