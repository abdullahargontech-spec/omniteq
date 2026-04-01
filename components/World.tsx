'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const stats = [
  { label: 'Zones', value: '12+' },
  { label: 'Characters', value: '7' },
  { label: 'Quests', value: '100+' },
  { label: 'Players', value: 'Growing' },
]

export default function World() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.82, 1, 1, 0.84])
  const width = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['84%', '100%', '100%', '84%'])
  const borderRadius = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['32px', '0px', '0px', '32px'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.55, 0.2, 0.2, 0.55])
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])

  return (
    <section
      id="world"
      ref={sectionRef}
      className="relative min-h-[260vh] overflow-clip bg-background"
    >
      <div className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            A World Awaits
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            The world reveal now behaves like a cinematic scene. As the section
            enters, the map grows into a full-page moment, then contracts again as
            the scroll moves past it.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, scale, borderRadius }}
          className="relative h-screen overflow-hidden border border-cyan-400/15 bg-black shadow-[0_28px_120px_rgba(0,0,0,0.48),0_0_40px_rgba(2,167,221,0.12)]"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-pgfV43Cu67LSXeIeCg6vShBlX3A7Tn.png"
            alt="OmniTech World"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,167,221,0.22),transparent_35%),linear-gradient(180deg,rgba(4,10,22,0.76)_0%,rgba(4,10,22,0.2)_35%,rgba(4,10,22,0.62)_100%)]"
          />

          <motion.div
            style={{ y: contentY }}
            className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 sm:pb-14"
          >
            <div className="game-panel max-w-xl rounded-[1.75rem] p-6">
              <div className="mb-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Living World
              </div>
              <h3 className="mb-3 text-3xl font-bold text-white">
                Explore a map that breathes with the story
              </h3>
              <p className="text-sm leading-7 text-gray-200 sm:text-base">
                Vast biomes, hidden paths, and cinematic scale make OmniTech feel
                larger than a static showcase. The section now lets the world take
                over the viewport before handing control back to the rest of the
                page.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto -mt-28 max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="game-panel-soft rounded-2xl p-6 text-center transition-colors hover:border-cyan-300/30"
            >
              <div className="mb-2 text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
