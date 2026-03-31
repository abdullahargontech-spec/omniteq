'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const characters = [
  {
    id: 1,
    name: 'Nova',
    role: 'The Explorer',
    description:
      'Brave and adventurous, Nova leads the charge into new worlds.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20%283%29.jpg-srOLbU50j1vHrQ28M1SQWBsFo2HQvD.jpeg',
    aura: 'from-orange-400/35 via-amber-500/20 to-transparent',
    edge: 'border-orange-400/40',
  },
  {
    id: 2,
    name: 'Lilly',
    role: 'The Tech Genius',
    description:
      'Sharp-minded and tech-savvy, Lilly unlocks the secrets of OmniQuest.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lilly_PNG.jpg-fawNqozALd0PT7eSFJno425H1MI45V.jpeg',
    aura: 'from-lime-300/35 via-green-500/20 to-transparent',
    edge: 'border-lime-400/40',
  },
  {
    id: 3,
    name: 'Iris',
    role: 'The Optimist',
    description:
      'Radiating positive energy, Iris brings joy to every challenge.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20%281%29.jpg-RJ66XD9sdhC1hfsB5kVuwb8m55YfYy.jpeg',
    aura: 'from-pink-400/35 via-fuchsia-500/20 to-transparent',
    edge: 'border-pink-400/40',
  },
  {
    id: 4,
    name: 'Emma',
    role: 'The Scholar',
    description:
      'Curious and intelligent, Emma masters knowledge and wisdom.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emma01.jpg-xqvUCFnr2huRnIr8setAErldBMoDub.jpeg',
    aura: 'from-cyan-300/35 via-teal-500/20 to-transparent',
    edge: 'border-cyan-400/40',
  },
  {
    id: 5,
    name: 'Kai',
    role: 'The Strategist',
    description:
      'Composed and thoughtful, Kai plans every move carefully.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-qwcgA8czSriXVgYvpgr90dumPBJmzA.jpeg',
    aura: 'from-emerald-300/35 via-green-500/20 to-transparent',
    edge: 'border-emerald-400/40',
  },
  {
    id: 6,
    name: 'James',
    role: 'The Grounded One',
    description:
      'Practical and reliable, James keeps everyone on track.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/James_Main.jpg-yqlfDyDzje0HdImBvJDmg2qTKXr7Bw.jpeg',
    aura: 'from-slate-300/30 via-slate-500/20 to-transparent',
    edge: 'border-slate-300/30',
  },
  {
    id: 7,
    name: 'Zara',
    role: 'The Cheerleader',
    description:
      'Playful and energetic, Zara spreads enthusiasm everywhere.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20%282%29.jpg-Isszh848Fx3CzXFxnjlQHLtfEiSKPh.jpeg',
    aura: 'from-amber-300/35 via-orange-500/20 to-transparent',
    edge: 'border-amber-400/40',
  },
]

const AUTOPLAY_MS = 3200
const ORBIT_RADIUS_X = 245
const ORBIT_RADIUS_Y = 54

export default function Characters() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % characters.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  const activeCharacter = characters[activeIndex]

  const orbitCharacters = useMemo(() => {
    return characters.map((character, index) => {
      const offset = (index - activeIndex + characters.length) % characters.length
      const angle = (offset * (Math.PI * 2)) / characters.length
      const x = Math.sin(angle) * ORBIT_RADIUS_X
      const y = Math.cos(angle) * ORBIT_RADIUS_Y
      const depth = (Math.cos(angle) + 1) / 2
      const isActive = index === activeIndex

      return {
        ...character,
        index,
        isActive,
        x,
        y,
        depth,
        scale: isActive ? 1.28 : 0.7 + depth * 0.28,
        opacity: isActive ? 1 : 0.4 + depth * 0.5,
        zIndex: isActive ? 30 : 10 + Math.round(depth * 10),
      }
    })
  }, [activeIndex])

  return (
    <section
      id="characters"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(245,199,57,0.16),_transparent_28%),linear-gradient(180deg,rgba(7,7,7,1)_0%,rgba(10,10,10,1)_100%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
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

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto flex h-[28rem] w-full max-w-[42rem] items-center justify-center overflow-hidden"
          >
            <div className="absolute h-[18rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(255,214,69,0.14),_rgba(255,214,69,0.03)_34%,_transparent_68%)] blur-2xl" />

            {orbitCharacters.map((character) => (
              <motion.button
                key={character.id}
                type="button"
                animate={{
                  x: character.x,
                  y: character.y,
                  scale: character.scale,
                  opacity: character.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 18,
                  mass: 0.9,
                }}
                onClick={() => setActiveIndex(character.index)}
                className="absolute"
                style={{ zIndex: character.zIndex }}
                aria-label={`Show ${character.name}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[1.75rem] border bg-black/65 shadow-[0_18px_40px_rgba(0,0,0,0.45)] ${character.isActive ? 'h-48 w-36 md:h-56 md:w-44' : 'h-32 w-24 md:h-40 md:w-28'} ${character.edge}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${character.aura}`}
                  />
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    sizes="(max-width: 768px) 96px, 176px"
                    className="object-cover object-top"
                    priority={character.index < 3}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                    <div className="text-sm font-semibold text-white">
                      {character.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-primary/80">
                      {character.role}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeCharacter.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative rounded-[2rem] border border-primary/20 bg-white/[0.04] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div
              className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${activeCharacter.aura} opacity-80`}
            />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Spotlight Character
              </div>
              <h3 className="mb-2 text-4xl font-bold text-white">
                {activeCharacter.name}
              </h3>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary/85">
                {activeCharacter.role}
              </p>
              <p className="max-w-xl text-base leading-7 text-gray-300">
                {activeCharacter.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {characters.map((character, index) => (
                  <button
                    key={character.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      index === activeIndex
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-white/10 bg-black/30 text-gray-300 hover:border-primary/40 hover:text-white'
                    }`}
                  >
                    {character.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
