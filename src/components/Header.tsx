import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'What We Handle', path: '/what-we-handle' },
  { label: 'Value', path: '/value' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-semibold text-slate-850 tracking-tight">HomeOps</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === item.path
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/get-started"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-colors shadow-sm no-underline"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === item.path
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-colors no-underline"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
