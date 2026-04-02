'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type HeaderProps = {
  isVisible?: boolean
}

export default function Header({ isVisible = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20
      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Characters', href: '#characters' },
    { label: 'World', href: '#world' },
    { label: 'Features', href: '#features' },
    { label: 'Episodes', href: '#episodes' },
  ]

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-cyan-400/15 bg-[#08111dcc]/95 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-12 overflow-hidden bg-transparent transition-transform group-hover:scale-110">
            <Image
              src="/omnitech-nav-icon.png"
              alt="OmniTech icon"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="game-copy text-base font-semibold tracking-[0.03em] transition-colors hover:text-white lg:text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            className="px-6"
          >
            Enter OmniTech
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative rounded-[1rem] border border-cyan-300/45 bg-[linear-gradient(180deg,#1fc3f0_0%,#02A7DD_34%,#015FBF_100%)] p-2 text-white shadow-[inset_0_-2px_0_rgba(1,64,125,0.85),0_10px_20px_rgba(1,95,191,0.24)] transition-all duration-200 before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[2px] before:h-[40%] before:rounded-[0.8rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05))] hover:-translate-y-0.5 hover:brightness-110 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 border-b border-cyan-400/15 bg-[#08111df2] backdrop-blur-xl md:hidden">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="game-copy block py-2 text-base font-semibold tracking-[0.03em] transition-colors hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  )
}
