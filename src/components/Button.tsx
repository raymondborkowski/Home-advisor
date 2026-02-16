import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface ButtonProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variants: Record<string, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm',
  secondary: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm',
  outline: 'bg-transparent text-brand-700 hover:bg-brand-50 border border-brand-200',
}

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({ to, children, variant = 'primary', size = 'md', className = '' }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 no-underline ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  )
}
