'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const chapters = [
  {
    number: '01',
    label: 'Chapter 1',
    title: 'First Contact',
    teaser:
      'The journey opens with daily life, first conversations, and the small wins that build early confidence.',
    summary:
      'Chapter 1 establishes the player\'s rhythm inside OmniTech. The tone is welcoming but active, focused on survival basics, daily routines, and the first moments of real communication.',
    bullets: [
      'Learn to move through everyday situations with less hesitation',
      'Handle greetings, simple needs, and first social exchanges',
      'Build confidence through repetition, clarity, and momentum',
      'Feel the shift from observer to active participant in the world',
    ],
    accent: 'from-amber-300/28 via-orange-500/14 to-transparent',
    glow: 'shadow-[0_24px_60px_rgba(255,138,31,0.12)]',
    chip: 'border-amber-300/35 bg-amber-500/12 text-amber-100',
  },
  {
    number: '02',
    label: 'Chapter 2',
    title: 'City Momentum',
    teaser:
      'Independence grows as the city opens up through work, transport, timing, choices, and practical problem solving.',
    summary:
      'Chapter 2 pushes the experience into real city life. The pace becomes more dynamic, with players balancing schedules, movement, and decisions while communication starts to feel more natural and useful.',
    bullets: [
      'Navigate transport, timing, and plans with more control',
      'Handle work-like situations, tasks, and changing priorities',
      'Make decisions with better awareness of context and consequences',
      'Grow from guided progress into self-directed action',
    ],
    accent: 'from-cyan-300/28 via-sky-500/14 to-transparent',
    glow: 'shadow-[0_24px_60px_rgba(2,167,221,0.14)]',
    chip: 'border-cyan-300/35 bg-cyan-500/12 text-cyan-100',
  },
  {
    number: '03',
    label: 'Chapter 3',
    title: 'Urban Mastery',
    teaser:
      'Full city living comes into focus through services, systems, money, housing, emergencies, and responsibility.',
    summary:
      'Chapter 3 is where the player feels fully embedded in urban life. The mood is sharper and more mature, centered on responsibility, systems thinking, and confident communication in higher-stakes situations.',
    bullets: [
      'Manage services, systems, and formal interactions with clarity',
      'Deal with money, housing, and everyday responsibilities',
      'Respond to urgent or unexpected situations with composure',
      'Communicate with confidence in the real world, not just the game world',
    ],
    accent: 'from-violet-300/28 via-fuchsia-500/14 to-transparent',
    glow: 'shadow-[0_24px_60px_rgba(143,97,255,0.14)]',
    chip: 'border-violet-300/35 bg-violet-500/12 text-violet-100',
  },
]

export default function Episodes() {
  const [openChapter, setOpenChapter] = useState<string>('01')

  return (
    <section
      id="episodes"
      className="defer-render relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(2,167,221,0.14),_transparent_24%),radial-gradient(circle_at_18%_18%,_rgba(255,77,184,0.08),_transparent_18%)] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/86">
            Chapter Progression
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            The Story Moves in Three Chapters
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {chapters.map((chapter, index) => {
            const isOpen = openChapter === chapter.number

            return (
              <motion.article
                key={chapter.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className={`game-panel group relative self-start overflow-hidden rounded-[2rem] p-6 sm:p-7 ${chapter.glow}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${chapter.accent} opacity-95`}
                />
                <div className="absolute inset-x-6 top-20 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent sm:inset-x-7" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-6xl font-bold tracking-[-0.08em] text-white/10">
                        {chapter.number}
                      </div>
                      <div
                        className={`mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${chapter.chip}`}
                      >
                        {chapter.label}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenChapter(isOpen ? '' : chapter.number)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`chapter-panel-${chapter.number}`}
                      className="relative inline-flex cursor-pointer items-center gap-2 rounded-[1rem] border border-cyan-300/40 bg-[linear-gradient(180deg,rgba(20,34,56,0.94)_0%,rgba(8,18,32,0.98)_100%)] px-4 py-2 text-sm font-black text-cyan-100 shadow-[inset_0_-2px_0_rgba(4,10,20,0.9),0_10px_20px_rgba(0,0,0,0.24)] transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[2px] before:h-[40%] before:rounded-[0.8rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] hover:-translate-y-0.5 hover:scale-[1.02] hover:border-cyan-200/70 hover:text-white hover:brightness-110 hover:shadow-[inset_0_-2px_0_rgba(4,10,20,0.9),0_16px_30px_rgba(2,167,221,0.26)] active:translate-y-0 active:scale-100"
                    >
                      {isOpen ? 'Hide' : 'Read more'}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    {chapter.label}
                  </div>

                  <h3 className="mb-4 text-3xl font-bold text-white">
                    {chapter.title}
                  </h3>

                  <p className="max-w-md text-sm leading-7 text-slate-200/88 sm:text-base">
                    {chapter.teaser}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`chapter-panel-${chapter.number}`}
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 border-t border-white/10 pt-5">
                          <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
                            {chapter.summary}
                          </p>

                          <ul className="space-y-2.5">
                            {chapter.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-3 text-sm leading-6 text-slate-200/86"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(255,214,89,0.45)]" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="game-panel-soft rounded-[1.5rem] px-6 py-5 text-center">
            <p className="text-gray-300">
              Three chapters. One clear progression from first contact to
              confident city living.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
