'use client'

import { useEffect, useState } from 'react'
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
      'Sharp-minded and tech-savvy, Lilly unlocks the secrets of OmniTech.',
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
export default function Characters() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % characters.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  const activeCharacter = characters[activeIndex]

  return (
    <section
      id="characters"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(2,167,221,0.14),_transparent_28%),radial-gradient(circle_at_78%_14%,_rgba(255,138,31,0.12),_transparent_20%),linear-gradient(180deg,rgba(6,10,19,1)_0%,rgba(7,12,23,1)_100%)] px-4 py-24 sm:px-6 lg:px-8"
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
            className="relative mx-auto w-full max-w-[48rem]"
          >
            <div className="absolute left-1/2 top-14 h-[26rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(2,167,221,0.18),_rgba(2,167,221,0.04)_40%,_transparent_72%)] blur-3xl" />

            <motion.div
              key={activeCharacter.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${activeCharacter.aura} opacity-95 blur-2xl`} />
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <div className={`absolute inset-0 bg-gradient-to-b ${activeCharacter.aura}`} />
                <div className="relative h-[34rem] sm:h-[40rem] lg:h-[44rem]">
                  <Image
                    src={activeCharacter.image}
                    alt={activeCharacter.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_18%,rgba(0,0,0,0)_45%)]" />
                <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#070c17] via-[#070c17]/72 to-transparent sm:w-36" />
                <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#070c17] via-[#070c17]/72 to-transparent sm:w-36" />
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#070c17] via-[#070c17]/86 via-38% to-transparent" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#070c17]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 inline-flex rounded-full border border-cyan-300/25 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-100">
                    Featured Champion
                  </div>
                  <h3 className="text-4xl font-bold text-white sm:text-5xl">
                    {activeCharacter.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary/90">
                    {activeCharacter.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            key={activeCharacter.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="game-panel relative rounded-[2rem] p-8"
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
          className="game-panel-soft mt-10 rounded-[1.75rem] p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/80">
              Character Roster
            </div>
            <div className="hidden text-xs font-medium text-slate-400 sm:block">
              Select a champion
            </div>
          </div>

          <div className="overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-3">
              {characters.map((character, index) => (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${character.name}`}
                  className={`group relative flex min-w-[12rem] items-center gap-3 overflow-hidden rounded-[1.25rem] border px-3 py-3 text-left transition-all duration-300 ${
                    index === activeIndex
                      ? 'border-cyan-300/40 bg-[linear-gradient(135deg,rgba(2,167,221,0.18)_0%,rgba(1,95,191,0.26)_100%)] shadow-[0_12px_36px_rgba(1,95,191,0.25)]'
                      : 'border-white/10 bg-slate-950/38 hover:border-cyan-300/25 hover:bg-slate-950/60'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${character.aura} ${index === activeIndex ? 'opacity-95' : 'opacity-55'}`} />
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c17]/55 to-transparent" />
                  </div>
                  <div className="relative min-w-0">
                    <div className="truncate text-sm font-semibold text-white">
                      {character.name}
                    </div>
                    <div className="truncate text-[11px] uppercase tracking-[0.18em] text-cyan-100/78">
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
