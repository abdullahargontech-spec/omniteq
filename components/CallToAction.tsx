'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative Element */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mb-6 inline-block"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary/40 animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your English Journey
            <br />
            <span className="text-primary">Starts Inside the Game</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop learning English like it&apos;s a chore. Play your way to fluency with OmniTech where every mission teaches, every conversation connects, and every victory is real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all group"
            >
              Enter OmniTech Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 rounded-lg font-semibold text-base"
            >
              Join Our Community
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-400">
            <div>
              <span className="text-primary font-bold">10K+</span> Players Testing
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>
              <span className="text-primary font-bold">Rated 4.8/5</span> by Testers
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div>
              <span className="text-primary font-bold">50+</span> Languages
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl -z-10 animate-blob animation-delay-2000" />
    </section>
  )
}
