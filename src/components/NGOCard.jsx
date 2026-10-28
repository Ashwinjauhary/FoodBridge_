export default function NGOCard({ ngo, onRequestPickup }) {
  return (
    <div className="bg-white rounded-2xl border border-sand-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">{ngo.name}</h3>
          <p className="text-ink-400 text-sm mt-1">{ngo.address}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold bg-harvest-400/30 text-harvest-600 px-3 py-1 rounded-full">
          {ngo.distance} km away
        </span>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
        <span>📞 {ngo.contact}</span>
        <span>🕒 {ngo.availability}</span>
      </div>

      <button
        onClick={() => onRequestPickup(ngo)}
        className="mt-1 w-full rounded-full bg-bridge-900 text-sand-50 py-3 text-base font-semibold hover:bg-bridge-800 transition-colors"
      >
        Request Pickup
      </button>
    </div>
  )
}
