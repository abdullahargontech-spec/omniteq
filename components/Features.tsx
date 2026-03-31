'use client'

import { motion } from 'framer-motion'
import { Users, Zap, BookOpen, Trophy, Gamepad2, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Multiplayer Quests',
    description:
      'Squad up for cooperative missions where communication is part of the gameplay loop, not a separate lesson.',
    tag: 'Party Play',
    accent: 'from-amber-300/25 via-orange-500/15 to-transparent',
  },
  {
    icon: BookOpen,
    title: 'Story-Driven Content',
    description:
      'Every lesson unfolds inside an evolving narrative, so learners stay pulled forward by curiosity and consequence.',
    tag: 'Narrative Arc',
    accent: 'from-cyan-300/25 via-sky-500/15 to-transparent',
  },
  {
    icon: Zap,
    title: 'Dynamic Challenges',
    description:
      'Encounters respond to player progress, raising complexity as confidence and fluency improve.',
    tag: 'Adaptive Flow',
    accent: 'from-lime-300/25 via-green-500/15 to-transparent',
  },
  {
    icon: Trophy,
    title: 'Competitive Learning',
    description:
      'Leaderboards, milestone rewards, and social wins make progress feel earned and visible.',
    tag: 'Rank Up',
    accent: 'from-fuchsia-300/25 via-pink-500/15 to-transparent',
  },
  {
    icon: Gamepad2,
    title: 'Deep Gameplay',
    description:
      'Strategy, exploration, and team coordination turn language practice into a system players want to master.',
    tag: 'Game Layer',
    accent: 'from-violet-300/25 via-indigo-500/15 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'VR Ready',
    description:
      'The world is already positioned for more immersive formats, opening a path toward fully embodied learning.',
    tag: 'Future Mode',
    accent: 'from-yellow-200/25 via-amber-400/15 to-transparent',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,199,57,0.14),_transparent_26%),linear-gradient(180deg,rgba(7,7,7,1)_0%,rgba(11,11,11,1)_100%)] px-4 py-24 sm:px-6 lg:px-8"
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
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            The section now reads more like a designed system board than a basic
            card grid, with one anchor panel and staggered feature lanes.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,199,57,0.18),_transparent_35%)]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Skill Tree
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Built like a game loop, not a lesson plan
              </h3>
              <p className="max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                OmniQuest works because the learning mechanics are embedded into the
                world systems. The player is not stopping to study. The player is
                progressing through a designed experience where fluency creates
                momentum.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Progression
                  </div>
                  <div className="text-2xl font-bold text-white">Quest-based</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Retention
                  </div>
                  <div className="text-2xl font-bold text-white">Story-led</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const tiltClass =
                index % 2 === 0
                  ? 'lg:translate-x-0 lg:-rotate-[1.2deg]'
                  : 'lg:translate-x-6 lg:rotate-[1.2deg]'

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4, rotate: 0 }}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-transform ${tiltClass}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.accent} opacity-90`}
                  />
                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-black/35 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                          {feature.tag}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                          {feature.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-7 text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-4xl font-bold tracking-[-0.04em] text-white/12 transition-colors group-hover:text-primary/25">
                      0{index + 1}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
