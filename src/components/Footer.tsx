import { Link } from 'react-router-dom'

const links = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'What We Handle', path: '/what-we-handle' },
  { label: 'Value', path: '/value' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
  { label: 'Get Started', path: '/get-started' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-850 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">HomeOps</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Home maintenance, handled.</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white text-sm transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-4">hello@homeops.com</p>
            <div className="flex gap-4 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors no-underline">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors no-underline">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} HomeOps. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
