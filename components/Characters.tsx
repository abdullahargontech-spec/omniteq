'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const characters = [
  {
    id: 1,
    name: 'Nova',
    role: 'The Explorer',
    description:
      'Brave and adventurous, Nova leads the charge into new worlds.',
    video: '/characters/nova.mp4',
    thumbnail: '/characters/nova.jpeg',
    aura: 'from-orange-400/35 via-amber-500/20 to-transparent',
    edge: 'border-orange-400/40',
  },
  {
    id: 2,
    name: 'Lilly',
    role: 'The Tech Genius',
    description:
      'Sharp-minded and tech-savvy, Lilly unlocks the secrets of OmniTech.',
    video: '/characters/lilly.mp4',
    thumbnail: '/characters/lilly.jpeg',
    aura: 'from-lime-300/35 via-green-500/20 to-transparent',
    edge: 'border-lime-400/40',
  },
  {
    id: 3,
    name: 'Emma',
    role: 'The Scholar',
    description:
      'Curious and intelligent, Emma masters knowledge and wisdom.',
    video: '/characters/emma.mp4',
    thumbnail: '/characters/emma.jpeg',
    aura: 'from-cyan-300/35 via-teal-500/20 to-transparent',
    edge: 'border-cyan-400/40',
  },
  {
    id: 4,
    name: 'James',
    role: 'The Grounded One',
    description:
      'Practical and reliable, James keeps everyone on track.',
    video: '/characters/james.mp4',
    thumbnail: '/characters/james.jpeg',
    aura: 'from-slate-300/30 via-slate-500/20 to-transparent',
    edge: 'border-slate-300/30',
  },
  {
    id: 5,
    name: 'Alex',
    role: 'The Vanguard',
    description:
      'Bold and quick to move, Alex turns momentum into advantage.',
    video: '/characters/alex.mp4',
    thumbnail: '/characters/alex.jpeg',
    aura: 'from-pink-400/35 via-fuchsia-500/20 to-transparent',
    edge: 'border-pink-400/40',
  },
  {
    id: 6,
    name: 'Henry',
    role: 'The Strategist',
    description:
      'Measured and calculating, Henry sees the path before the battle starts.',
    video: '/characters/henry.mp4',
    thumbnail: '/characters/henry.jpeg',
    aura: 'from-emerald-300/35 via-green-500/20 to-transparent',
    edge: 'border-emerald-400/40',
  },
  {
    id: 7,
    name: 'Zoe',
    role: 'The Spark',
    description:
      'Fast, expressive, and energetic, Zoe brings urgency to every encounter.',
    video: '/characters/zoe.mp4',
    thumbnail: '/characters/zoe.jpeg',
    aura: 'from-amber-300/35 via-orange-500/20 to-transparent',
    edge: 'border-amber-400/40',
  },
]

const AUTOPLAY_MS = 10000
export default function Characters() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    margin: '240px 0px 240px 0px',
  })
  const prefersReducedMotion = useReducedMotion()
  const shouldRenderVideo = isInView && !prefersReducedMotion

  useEffect(() => {
    if (!shouldRenderVideo) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % characters.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [shouldRenderVideo])

  const activeCharacter = characters[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="characters"
      className="defer-render relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(2,167,221,0.14),_transparent_28%),radial-gradient(circle_at_78%_14%,_rgba(255,138,31,0.12),_transparent_20%),linear-gradient(180deg,rgba(6,10,19,1)_0%,rgba(7,12,23,1)_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-18"
    >
      <div className="mx-auto max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:mb-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Meet the Champions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            The roster now moves like a living lineup. Each champion rotates
            into the spotlight, takes the front position, and gives the section a
            stronger sense of momentum.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-[48rem]"
          >
            <div className="absolute left-1/2 top-10 h-[20rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(2,167,221,0.18),_rgba(2,167,221,0.04)_40%,_transparent_72%)] blur-3xl" />

            <motion.div
              key={activeCharacter.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${activeCharacter.aura} opacity-95 blur-2xl`} />
              <div className="media-shell relative overflow-hidden rounded-[2.5rem]">
                <div className={`absolute inset-0 bg-gradient-to-b ${activeCharacter.aura}`} />
                <div className="relative h-[23rem] sm:h-[28rem] lg:h-[31rem]">
                  {shouldRenderVideo ? (
                    <video
                      key={activeCharacter.id}
                      src={activeCharacter.video}
                      poster={activeCharacter.thumbnail}
                      className="h-full w-full object-cover object-top"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-label={`${activeCharacter.name} character video`}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                  ) : (
                    <Image
                      key={activeCharacter.id}
                      src={activeCharacter.thumbnail}
                      alt={`${activeCharacter.name} portrait`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48rem"
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_18%,rgba(0,0,0,0)_45%)]" />
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#070c17] via-[#070c17]/72 to-transparent sm:w-28" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#070c17] via-[#070c17]/72 to-transparent sm:w-28" />
                <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-[#070c17] via-[#070c17]/86 via-38% to-transparent" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070c17]/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            key={activeCharacter.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="game-panel relative rounded-[2rem] p-6 lg:p-7"
          >
            <div
              className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${activeCharacter.aura} opacity-80`}
            />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Spotlight Character
              </div>
              <h3 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
                {activeCharacter.name}
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary/85 sm:text-sm">
                {activeCharacter.role}
              </p>
              <p className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                {activeCharacter.description}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
          className="game-panel-soft mt-6 rounded-[1.5rem] p-3 sm:mt-7 sm:p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/80">
              Character Roster
            </div>
            <div className="hidden text-xs font-medium text-slate-400 sm:block">
              Select a champion
            </div>
          </div>

          <div className="pb-2">
            <div className="grid gap-2.5 md:grid-cols-4 xl:grid-cols-7">
              {characters.map((character, index) => (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${character.name}`}
                  aria-pressed={index === activeIndex}
                  className={`group relative flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-[1.35rem] border px-3 py-2.5 text-left font-black transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[2px] before:h-[40%] before:rounded-[1.1rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05))] ${
                    index === activeIndex
                      ? 'border-lime-200/70 bg-[linear-gradient(180deg,#b6ff47_0%,#7de828_45%,#49b913_100%)] text-[#0b2204] shadow-[inset_0_-2px_0_rgba(44,106,13,0.82),0_12px_24px_rgba(73,185,19,0.24)]'
                      : 'border-cyan-300/35 bg-[linear-gradient(180deg,rgba(24,50,79,0.92)_0%,rgba(9,23,40,0.96)_100%)] text-white shadow-[inset_0_-2px_0_rgba(4,74,130,0.72),0_10px_20px_rgba(1,95,191,0.18)] hover:-translate-y-0.5 hover:border-cyan-200/55 hover:shadow-[inset_0_-2px_0_rgba(4,74,130,0.72),0_16px_28px_rgba(1,95,191,0.26)] hover:brightness-110'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-[1.35rem] bg-gradient-to-r ${character.aura} ${index === activeIndex ? 'opacity-95' : 'opacity-55'}`} />
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={character.thumbnail}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c17]/55 to-transparent" />
                  </div>
                  <div className="relative min-w-0">
                    <div className="truncate text-sm">
                      {character.name}
                    </div>
                    <div className={`truncate text-[10px] uppercase tracking-[0.16em] ${index === activeIndex ? 'text-[#214b08]' : 'text-cyan-100/78'}`}>
                      {character.role}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
