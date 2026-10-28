import { useEffect, useState } from 'react'
import { fetchMyDonations } from '../services/api.js'
import Button from '../components/Button.jsx'

const statusStyles = {
  Pending: 'bg-harvest-400/30 text-harvest-600',
  Confirmed: 'bg-bridge-900/10 text-bridge-800',
  'Picked Up': 'bg-berry-500/15 text-berry-600',
}

export default function Dashboard() {
  const [donations, setDonations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMyDonations().then((d) => {
      setDonations(d)
      setLoading(false)
    })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-semibold text-ink-900">My Donations</h1>
        <Button to="/donate" variant="berry">Give Food Now ❤️</Button>
      </div>

      {loading && <p className="mt-10 text-lg text-ink-600">Loading your donations…</p>}

      {!loading && donations.length === 0 && (
        <div className="mt-10 bg-white border border-sand-200 rounded-2xl p-10 text-center text-ink-600">
          You haven't made a donation yet.
        </div>
      )}

      {!loading && donations.length > 0 && (
        <div className="mt-10 space-y-4">
          {donations.map((d) => (
            <div key={d.id} className="bg-white border border-sand-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold text-ink-900">{d.foodType}</div>
                <div className="text-ink-600 text-sm mt-1">{d.quantity} · {d.date}</div>
              </div>
              <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${statusStyles[d.status] || 'bg-sand-200 text-ink-600'}`}>
                {d.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
