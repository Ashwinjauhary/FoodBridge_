import axios from 'axios'

// Point this at your Express backend once it exists, e.g. import.meta.env.VITE_API_URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 8000,
})

// --- Mock data used until the backend is wired up ---
const MOCK_NGOS = [
  { id: 1, name: 'Helping Hands NGO', address: 'Civil Lines, Kanpur', contact: '+91 90000 00001', availability: '9 AM – 9 PM', distance: 2, lat: 26.469, lng: 80.331 },
  { id: 2, name: 'Food For Life', address: 'Swaroop Nagar, Kanpur', contact: '+91 90000 00002', availability: '10 AM – 8 PM', distance: 4, lat: 26.481, lng: 80.318 },
  { id: 3, name: 'Hope Foundation', address: 'Kakadeo, Kanpur', contact: '+91 90000 00003', availability: '24 hours', distance: 5, lat: 26.459, lng: 80.339 },
]

export async function submitDonation(payload) {
  try {
    const { data } = await api.post('/donations', payload)
    return data
  } catch {
    // Fallback so the UI works before the backend exists
    await new Promise((r) => setTimeout(r, 600))
    return { id: Math.floor(Math.random() * 100000), status: 'pending', ...payload }
  }
}

export async function fetchNearbyNGOs(coords) {
  try {
    const { data } = await api.get('/ngos/nearby', { params: coords })
    return data
  } catch {
    await new Promise((r) => setTimeout(r, 400))
    return MOCK_NGOS
  }
}

export async function requestPickup(ngoId, donationDetails) {
  try {
    const { data } = await api.post(`/ngos/${ngoId}/pickup-request`, donationDetails)
    return data
  } catch {
    await new Promise((r) => setTimeout(r, 400))
    return { success: true, ngoId }
  }
}

export async function fetchMyDonations() {
  try {
    const { data } = await api.get('/donations/mine')
    return data
  } catch {
    return [
      { id: 1021, foodType: 'Cooked Meals', quantity: '100 servings', status: 'Picked Up', date: '2026-07-14' },
      { id: 1032, foodType: 'Packaged Snacks', quantity: '40 packs', status: 'Confirmed', date: '2026-07-18' },
      { id: 1041, foodType: 'Fresh Produce', quantity: '15 kg', status: 'Pending', date: '2026-07-20' },
    ]
  }
}

export default api
