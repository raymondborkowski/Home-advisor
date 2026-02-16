import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  bg?: 'white' | 'warm' | 'brand' | 'dark'
}

const bgClasses: Record<string, string> = {
  white: 'bg-white',
  warm: 'bg-warm-50',
  brand: 'bg-brand-50',
  dark: 'bg-slate-850 text-white',
}

export default function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
