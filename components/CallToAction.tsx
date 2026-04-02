'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="defer-render relative bg-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="game-panel relative overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,167,221,0.22),transparent_38%)]" />
          <div className="relative">
            {/* Decorative Element */}
            <div className="animate-float-slow mb-6 inline-block">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/14">
                <div className="h-8 w-8 animate-pulse rounded-full bg-[linear-gradient(135deg,#02A7DD_0%,#015FBF_100%)] shadow-[0_0_30px_rgba(2,167,221,0.35)]" />
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="game-heading mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your English Journey
              <br />
              <span className="bg-[linear-gradient(135deg,#ffd659_0%,#02A7DD_54%,#015FBF_100%)] bg-clip-text text-transparent">Starts Inside the Game</span>
            </h2>

            {/* Subheading */}
            <p className="game-copy mx-auto mb-8 max-w-2xl text-lg font-medium">
              Stop learning English like it&apos;s a chore. Play your way to fluency with OmniTech where every mission teaches, every conversation connects, and every victory is real.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-8 py-6 text-base"
              >
                Enter OmniTech Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base text-cyan-100"
              >
                Join Our Community
              </Button>
            </div>

            {/* Social Proof */}
            <div className="game-copy flex flex-col items-center justify-center gap-8 text-sm sm:flex-row">
              <div>
                <span className="text-primary font-bold">10K+</span> Players Testing
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div>
                <span className="text-primary font-bold">Rated 4.8/5</span> by Testers
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div>
                <span className="text-primary font-bold">50+</span> Languages
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 h-96 w-96 animate-blob rounded-full bg-cyan-400/10 blur-3xl filter -z-10" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-blob rounded-full bg-violet-400/10 blur-3xl filter -z-10 animation-delay-2000" />
    </section>
  )
}
