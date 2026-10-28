import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function Login() {
  const [role, setRole] = useState('donor')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to POST /api/auth/login once backend exists
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto px-5 sm:px-8 py-20">
      <h1 className="font-display text-4xl font-semibold text-ink-900 text-center">Log In</h1>

      <div className="mt-8 flex rounded-full border-2 border-sand-200 p-1 bg-white">
        {['donor', 'ngo'].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`flex-1 py-2.5 rounded-full text-base font-semibold capitalize transition-colors ${
              role === r ? 'bg-bridge-900 text-sand-50' : 'text-ink-600'
            }`}
          >
            {r === 'ngo' ? 'NGO' : 'Donor'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block">
          <span className="block text-lg font-semibold text-ink-900 mb-2">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-2 border-sand-200 bg-white px-4 py-3 text-lg focus:border-bridge-800 outline-none"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="block text-lg font-semibold text-ink-900 mb-2">Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border-2 border-sand-200 bg-white px-4 py-3 text-lg focus:border-bridge-800 outline-none"
            placeholder="••••••••"
          />
        </label>
        <Button type="submit" variant="primary" className="w-full">Log In as {role === 'ngo' ? 'NGO' : 'Donor'}</Button>
      </form>

      <p className="mt-6 text-center text-ink-400 text-sm">
        New here? Donating doesn't require an account — just{' '}
        <a href="/donate" className="text-bridge-800 font-semibold">give food now</a>.
      </p>
    </div>
  )
}
