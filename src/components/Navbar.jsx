import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/donate', label: 'Donate' },
  { to: '/find-ngo', label: 'Find NGO' },
  { to: '/dashboard', label: 'My Donations' },
  { to: '/login', label: 'Log In' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [largeText, setLargeText] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('large-text', largeText)
  }, [largeText])

  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden="true">🌉</span>
          <span className="font-display text-2xl font-semibold text-bridge-900 group-hover:text-bridge-700 transition-colors">
            FoodBridge
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-lg font-medium transition-colors ${
                  isActive ? 'text-bridge-900' : 'text-ink-600 hover:text-bridge-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLargeText((v) => !v)}
            aria-pressed={largeText}
            className="text-sm font-semibold px-3 py-2 rounded-full border-2 border-bridge-900 text-bridge-900 hover:bg-bridge-900 hover:text-sand-50 transition-colors"
          >
            {largeText ? 'A− Normal Text' : 'A+ Large Text'}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-bridge-900"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="text-3xl leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-sand-50 border-t border-sand-200 px-5 py-4 flex flex-col gap-4" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-xl font-medium text-ink-900 py-2"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLargeText((v) => !v)}
            aria-pressed={largeText}
            className="text-lg font-semibold px-4 py-3 rounded-full border-2 border-bridge-900 text-bridge-900 text-left"
          >
            {largeText ? 'A− Normal Text' : 'A+ Large Text'}
          </button>
        </nav>
      )}
    </header>
  )
}
