import Link from 'next/link'
import Image from 'next/image'
import { Mail, Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Characters', href: '#characters' },
      { label: 'Episodes', href: '#episodes' },
      { label: 'World', href: '#world' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@omnitech.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-cyan-400/12 bg-[linear-gradient(180deg,rgba(7,12,23,0.88)_0%,rgba(5,9,18,1)_100%)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-cyan-400/18 bg-slate-950/60 p-1 transition-transform group-hover:scale-110">
                <Image
                  src="/omnitech-logo.png"
                  alt="OmniTech logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-[-0.03em] text-white">OmniTech</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Level up your English in a living game world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="rounded-xl border border-cyan-400/12 bg-slate-950/55 p-2 text-gray-400 transition-all hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold uppercase tracking-[0.16em] text-cyan-100">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-cyan-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            &copy; {currentYear} OmniTech. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
