'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const episodes = [
  {
    number: 1,
    title: 'The Beginning',
    description: 'Meet the characters and discover your role in OmniTech.',
    status: 'Now Available',
    statusColor: 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200',
    accent: 'from-amber-300/25 via-orange-500/15 to-transparent',
  },
  {
    number: 2,
    title: 'Rising Challenges',
    description: 'Face harder quests and unlock new abilities and regions.',
    status: 'Coming Soon',
    statusColor: 'border-sky-400/30 bg-sky-500/15 text-sky-200',
    accent: 'from-sky-300/25 via-cyan-500/15 to-transparent',
  },
  {
    number: 3,
    title: 'Ancient Secrets',
    description: 'Uncover the mysteries hidden within the world.',
    status: 'In Development',
    statusColor: 'border-violet-400/30 bg-violet-500/15 text-violet-200',
    accent: 'from-fuchsia-300/25 via-violet-500/15 to-transparent',
  },
  {
    number: 4,
    title: 'Clash of Kingdoms',
    description: 'Join massive multiplayer battles and shape the world.',
    status: 'Planned',
    statusColor: 'border-orange-400/30 bg-orange-500/15 text-orange-200',
    accent: 'from-orange-300/25 via-amber-500/15 to-transparent',
  },
  {
    number: 5,
    title: 'Final Ascension',
    description: 'Master all skills and become a legend of OmniTech.',
    status: 'Planned',
    statusColor: 'border-pink-400/30 bg-pink-500/15 text-pink-200',
    accent: 'from-pink-300/25 via-rose-500/15 to-transparent',
  },
]

export default function Episodes() {
  return (
    <section
      id="episodes"
      className="defer-render relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(2,167,221,0.14),_transparent_24%),radial-gradient(circle_at_18%_18%,_rgba(255,77,184,0.08),_transparent_18%),linear-gradient(180deg,rgba(8,12,22,1)_0%,rgba(7,10,18,1)_100%)] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            The Episode Arc
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            The roadmap now reads like a chapter rail. Users can move from one
            episode card to the next instead of scanning a standard timeline.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 hidden w-24 bg-gradient-to-r from-background to-transparent lg:block" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 hidden w-24 bg-gradient-to-l from-background to-transparent lg:block" />

        <div className="overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-[max(3rem,calc((100vw-80rem)/2+1.5rem))]">
            {episodes.map((episode, index) => (
              <motion.article
                key={episode.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="game-panel group relative min-h-[28rem] w-[88vw] max-w-[28rem] shrink-0 snap-center overflow-hidden rounded-[2rem] p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${episode.accent}`}
                />
                <div className="absolute inset-x-8 top-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="text-6xl font-bold tracking-[-0.08em] text-white/10">
                      {String(episode.number).padStart(2, '0')}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${episode.statusColor}`}
                    >
                      {episode.status}
                    </span>
                  </div>

                  <div className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Episode {String(episode.number).padStart(2, '0')}
                  </div>

                  <h3 className="mb-4 text-3xl font-bold text-white">
                    {episode.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-7 text-gray-300 sm:text-base">
                    {episode.description}
                  </p>

                  <div className="mt-auto pt-10">
                    <button className="relative inline-flex items-center gap-2 rounded-[1rem] border border-yellow-200/70 bg-[linear-gradient(180deg,#ffe578_0%,#f4c63c_42%,#d59613_100%)] px-4 py-2 text-sm font-black text-[#2f1800] shadow-[inset_0_-2px_0_rgba(140,90,5,0.78),0_12px_24px_rgba(213,150,19,0.24)] transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[2px] before:h-[40%] before:rounded-[0.8rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0.04))] hover:-translate-y-0.5 hover:brightness-105">
                      Explore chapter
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="game-panel-soft rounded-[1.5rem] px-6 py-5">
          <p className="text-gray-300">
            Swipe on mobile or scroll horizontally on desktop to move through
            the OmniTech episode roadmap one chapter at a time.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
