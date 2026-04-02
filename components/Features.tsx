'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Zap,
  BookOpen,
  Trophy,
  Gamepad2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Multiplayer Quests',
    description:
      'Complete co-op missions where communication is required to win, not a side exercise.',
    highlights: ['Live teammate chat', 'Role-based mission tasks'],
    tag: 'Party Play',
    accent: 'from-amber-300/25 via-orange-500/15 to-transparent',
    iconTone: 'bg-amber-400/12 text-amber-100 border-amber-300/30',
  },
  {
    icon: BookOpen,
    title: 'Story-Driven Content',
    description:
      'Each lesson is tied to narrative momentum so learners stay engaged through curiosity and payoff.',
    highlights: ['Branching dialogue moments', 'Context-rich language practice'],
    tag: 'Narrative Arc',
    accent: 'from-cyan-300/25 via-sky-500/15 to-transparent',
    iconTone: 'bg-cyan-400/12 text-cyan-100 border-cyan-300/30',
  },
  {
    icon: Zap,
    title: 'Dynamic Challenges',
    description:
      'Challenge difficulty adapts as confidence and fluency improve, keeping flow in the learning zone.',
    highlights: ['Adaptive mission scaling', 'Performance-based prompts'],
    tag: 'Adaptive Flow',
    accent: 'from-lime-300/25 via-green-500/15 to-transparent',
    iconTone: 'bg-lime-400/12 text-lime-100 border-lime-300/30',
  },
  {
    icon: Trophy,
    title: 'Competitive Learning',
    description:
      'Rank ladders and milestone rewards make progression visible, social, and motivating.',
    highlights: ['Weekly leaderboard cycles', 'Achievement-based unlocks'],
    tag: 'Rank Up',
    accent: 'from-fuchsia-300/25 via-pink-500/15 to-transparent',
    iconTone: 'bg-fuchsia-400/12 text-fuchsia-100 border-fuchsia-300/30',
  },
  {
    icon: Gamepad2,
    title: 'Deep Gameplay',
    description:
      'Exploration, strategy, and teamwork turn language learning into a system players want to master.',
    highlights: ['Quest loops and checkpoints', 'Tactical team coordination'],
    tag: 'Game Layer',
    accent: 'from-violet-300/25 via-indigo-500/15 to-transparent',
    iconTone: 'bg-violet-400/12 text-violet-100 border-violet-300/30',
  },
  {
    icon: Sparkles,
    title: 'VR Ready',
    description:
      'Core systems are being built for immersive formats so experiences can evolve into VR-first play.',
    highlights: ['Spatial interaction roadmap', 'Immersive mission architecture'],
    tag: 'Future Mode',
    accent: 'from-yellow-200/25 via-amber-400/15 to-transparent',
    iconTone: 'bg-yellow-400/12 text-yellow-100 border-yellow-300/30',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="defer-render relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(2,167,221,0.14),_transparent_26%),radial-gradient(circle_at_92%_8%,_rgba(143,97,255,0.12),_transparent_18%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="game-kicker mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em]">
            Why OmniTech Works
          </div>
          <h2 className="game-heading mb-4 text-4xl font-bold sm:text-5xl">
            Powerful Features
          </h2>
          <p className="game-copy mx-auto max-w-2xl text-base leading-7 sm:text-lg">
            Designed for engagement and measurable language growth, with gameplay
            mechanics that naturally push communication, repetition, and progress.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="game-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(2,167,221,0.24),_transparent_35%)]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Progression Engine
              </div>
              <h3 className="game-heading mb-4 text-3xl font-bold sm:text-4xl">
                Built as a gameplay loop, not a classroom workflow
              </h3>
              <p className="game-copy max-w-lg text-sm leading-7 sm:text-base">
                Learners choose quests, solve mission objectives, and communicate
                under real gameplay pressure. Fluency improves as a natural result
                of the actions required to progress.
              </p>

              <div className="mt-8 space-y-3">
                <div className="game-panel-soft rounded-2xl p-4">
                  <div className="game-kicker mb-1 text-xs font-semibold uppercase tracking-[0.2em]">
                    1. Choose Your Route
                  </div>
                  <p className="game-copy text-sm leading-6">
                    Pick quests based on your level and goals.
                  </p>
                </div>
                <div className="game-panel-soft rounded-2xl p-4">
                  <div className="game-kicker mb-1 text-xs font-semibold uppercase tracking-[0.2em]">
                    2. Communicate To Progress
                  </div>
                  <p className="game-copy text-sm leading-6">
                    Use practical English in live mission contexts.
                  </p>
                </div>
                <div className="game-panel-soft rounded-2xl p-4">
                  <div className="game-kicker mb-1 text-xs font-semibold uppercase tracking-[0.2em]">
                    3. Unlock Higher Tiers
                  </div>
                  <p className="game-copy text-sm leading-6">
                    Advance through chapters with visible skill milestones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="game-panel-soft group relative overflow-hidden rounded-[1.75rem] p-6 transition-transform"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.accent} opacity-90`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${feature.iconTone} shadow-[0_0_20px_rgba(2,167,221,0.16)]`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-black tracking-[-0.04em] text-white/12 transition-colors group-hover:text-primary/25">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {feature.tag}
                    </div>
                    <h3 className="game-heading mb-2 text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="game-copy mb-4 text-sm leading-7">
                      {feature.description}
                    </p>

                    <ul className="mt-auto space-y-2">
                      {feature.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="game-copy-soft flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
