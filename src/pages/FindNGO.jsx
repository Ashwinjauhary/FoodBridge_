import { useState } from 'react'
import { fetchNearbyNGOs, requestPickup } from '../services/api.js'
import NGOCard from '../components/NGOCard.jsx'
import Button from '../components/Button.jsx'

export default function FindNGO() {
  const [status, setStatus] = useState('idle') // idle | locating | loaded | error
  const [ngos, setNgos] = useState([])
  const [requested, setRequested] = useState(null)

  function handleLocate() {
    setStatus('locating')
    if (!navigator.geolocation) {
      loadWithFallback()
      return
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const list = await fetchNearbyNGOs({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setNgos(list)
        setStatus('loaded')
      },
      () => loadWithFallback(),
      { timeout: 6000 },
    )
  }

  async function loadWithFallback() {
    const list = await fetchNearbyNGOs({})
    setNgos(list)
    setStatus('loaded')
  }

  async function handleRequestPickup(ngo) {
    await requestPickup(ngo.id, {})
    setRequested(ngo)
  }

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl font-semibold text-ink-900">Find an NGO Nearby</h1>
      <p className="mt-3 text-lg text-ink-600">
        Share your location and we'll show verified NGOs closest to you.
      </p>

      {status === 'idle' && (
        <div className="mt-10 bg-white border border-sand-200 rounded-2xl p-10 text-center">
          <div className="text-5xl mb-4" aria-hidden="true">📍</div>
          <p className="text-lg text-ink-600 mb-6">We only use your location to find nearby NGOs.</p>
          <Button onClick={handleLocate} variant="primary">Share My Location</Button>
        </div>
      )}

      {status === 'locating' && (
        <div className="mt-10 text-center text-lg text-ink-600 py-16">Finding NGOs near you…</div>
      )}

      {requested && (
        <div className="mt-8 bg-bridge-900 text-sand-50 rounded-2xl p-6 text-center">
          Pickup requested with <strong>{requested.name}</strong>. They'll confirm by phone or email shortly.
        </div>
      )}

      {status === 'loaded' && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ngos.map((ngo) => (
            <NGOCard key={ngo.id} ngo={ngo} onRequestPickup={handleRequestPickup} />
          ))}
        </div>
      )}
    </div>
  )
}
