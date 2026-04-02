import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "relative isolate inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[1.05rem] border text-center text-sm font-black tracking-[0.01em] text-white transition-all duration-200 ease-out outline-none before:pointer-events-none before:absolute before:inset-x-[2px] before:top-[2px] before:h-[42%] before:rounded-[0.9rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.06))] before:opacity-90 disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-4 focus-visible:ring-cyan-300/35 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          'border-[#fffda3]/85 bg-[linear-gradient(180deg,#fffda3_0%,#FFFC11_52%,#d6cb00_100%)] text-[#1a1700] shadow-[inset_0_-3px_0_rgba(102,96,0,0.78),0_14px_28px_rgba(255,252,17,0.3)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_-3px_0_rgba(102,96,0,0.78),0_18px_32px_rgba(255,252,17,0.38),0_0_24px_rgba(255,252,17,0.2)]',
        secondary:
          'border-cyan-300/35 bg-[linear-gradient(180deg,rgba(25,39,61,0.96)_0%,rgba(12,22,38,0.98)_100%)] text-cyan-100 shadow-[inset_0_-3px_0_rgba(4,10,20,0.9),0_12px_24px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-[linear-gradient(180deg,rgba(30,50,78,0.96)_0%,rgba(12,22,38,0.98)_100%)] hover:text-white',
        success:
          'border-lime-200/70 bg-[linear-gradient(180deg,#b6ff47_0%,#7de828_45%,#49b913_100%)] text-[#0b2204] shadow-[inset_0_-3px_0_rgba(44,106,13,0.8),0_14px_28px_rgba(73,185,19,0.26)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_-3px_0_rgba(44,106,13,0.8),0_18px_32px_rgba(73,185,19,0.32)]',
        featured:
          'border-yellow-200/70 bg-[linear-gradient(180deg,#ffe578_0%,#f4c63c_42%,#d59613_100%)] text-[#2f1800] shadow-[inset_0_-3px_0_rgba(140,90,5,0.78),0_14px_30px_rgba(213,150,19,0.28)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_-3px_0_rgba(140,90,5,0.78),0_18px_34px_rgba(213,150,19,0.34)]',
        special:
          'border-orange-200/70 bg-[linear-gradient(180deg,#ffcb72_0%,#f39d2d_42%,#d36c0f_100%)] text-[#2b1404] shadow-[inset_0_-3px_0_rgba(122,57,3,0.82),0_14px_30px_rgba(211,108,15,0.28)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[inset_0_-3px_0_rgba(122,57,3,0.82),0_18px_34px_rgba(211,108,15,0.34)]',
        destructive:
          'border-red-200/60 bg-[linear-gradient(180deg,#ff8f8f_0%,#ef5350_40%,#c62828_100%)] text-white shadow-[inset_0_-3px_0_rgba(115,19,19,0.8),0_14px_28px_rgba(198,40,40,0.28)] hover:-translate-y-0.5',
        outline:
          'border-cyan-300/35 bg-[linear-gradient(180deg,rgba(15,28,46,0.95)_0%,rgba(8,18,31,0.98)_100%)] text-cyan-100 shadow-[inset_0_-3px_0_rgba(4,10,20,0.9),0_12px_24px_rgba(0,0,0,0.24)] hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-[linear-gradient(180deg,rgba(18,38,64,0.95)_0%,rgba(8,18,31,0.98)_100%)] hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost:
          'border-transparent bg-transparent text-cyan-100/85 shadow-none before:hidden after:hidden hover:text-white',
        link: 'border-transparent bg-transparent text-primary underline-offset-4 shadow-none before:hidden after:hidden hover:underline',
        tag:
          'rounded-[0.9rem] border-cyan-300/55 bg-[linear-gradient(180deg,#14b5e6_0%,#0c92d1_45%,#0a6fb8_100%)] text-white shadow-[inset_0_-2px_0_rgba(4,74,130,0.82),0_10px_20px_rgba(1,95,191,0.26)] hover:-translate-y-0.5 hover:brightness-110',
      },
      size: {
        default: 'h-11 px-5 py-2.5 has-[>svg]:px-4',
        sm: 'h-9 gap-1.5 px-3.5 text-[0.82rem] has-[>svg]:px-3',
        lg: 'h-13 px-7 text-base has-[>svg]:px-5',
        icon: 'size-11 rounded-[1rem] px-0',
        'icon-sm': 'size-9 rounded-[0.9rem] px-0',
        'icon-lg': 'size-13 rounded-[1.1rem] px-0',
        tag: 'h-8 px-3 text-[0.78rem] has-[>svg]:px-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
