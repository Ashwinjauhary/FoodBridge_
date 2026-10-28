import { useState } from 'react'
import { submitDonation } from '../services/api.js'
import Button from '../components/Button.jsx'

const initialForm = {
  name: '',
  restaurantName: '',
  phone: '',
  email: '',
  address: '',
  foodType: '',
  quantity: '',
  pickupTime: '',
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="block text-lg font-semibold text-ink-900 mb-2">{label}</span>
      {children}
      {hint && <span className="block mt-1 text-sm text-ink-400">{hint}</span>}
    </label>
  )
}

const inputClasses =
  'w-full rounded-xl border-2 border-sand-200 bg-white px-4 py-3 text-lg text-ink-900 placeholder:text-ink-400/70 focus:border-bridge-800 outline-none transition-colors'

export default function Donate() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | submitting | done
  const [confirmation, setConfirmation] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitDonation(form)
    setConfirmation(result)
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div className="max-w-xl mx-auto px-5 sm:px-8 py-24 text-center">
        <div className="text-6xl mb-4" aria-hidden="true">✅</div>
        <h1 className="font-display text-3xl font-semibold text-ink-900">Thank you, {form.name.split(' ')[0] || 'friend'}!</h1>
        <p className="mt-4 text-lg text-ink-600 leading-relaxed">
          Your donation has been received. We're matching you with the nearest
          NGO and will confirm pickup by email at <strong>{form.email}</strong>.
        </p>
        <div className="mt-8 bg-white border border-sand-200 rounded-2xl p-6 text-left">
          <div className="text-sm text-ink-400 mb-2">Confirmation #{confirmation.id}</div>
          <div className="text-ink-900"><strong>{form.foodType}</strong> — {form.quantity}</div>
          <div className="text-ink-600 mt-1">Pickup: {form.pickupTime || 'as arranged'}</div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/find-ngo" variant="primary">Find NGO Nearby</Button>
          <Button to="/" variant="outline">Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-16">
      <h1 className="font-display text-4xl font-semibold text-ink-900">Give Food Now ❤️</h1>
      <p className="mt-3 text-lg text-ink-600">
        Fill this in — it takes about two minutes. No account needed.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Your Name">
            <input required className={inputClasses} value={form.name} onChange={update('name')} placeholder="Rahul Sharma" />
          </Field>
          <Field label="Restaurant / Kitchen Name" hint="Leave blank if donating from home">
            <input className={inputClasses} value={form.restaurantName} onChange={update('restaurantName')} placeholder="Rahul's Kitchen" />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Phone Number">
            <input required type="tel" className={inputClasses} value={form.phone} onChange={update('phone')} placeholder="98765 43210" />
          </Field>
          <Field label="Email">
            <input required type="email" className={inputClasses} value={form.email} onChange={update('email')} placeholder="you@example.com" />
          </Field>
        </div>

        <Field label="Pickup Address">
          <textarea required rows={3} className={inputClasses} value={form.address} onChange={update('address')} placeholder="House / street, area, city" />
        </Field>

        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Food Type">
            <input required className={inputClasses} value={form.foodType} onChange={update('foodType')} placeholder="Cooked meals, packaged snacks..." />
          </Field>
          <Field label="Quantity" hint="Roughly how many people it could feed">
            <input required className={inputClasses} value={form.quantity} onChange={update('quantity')} placeholder="100 meals" />
          </Field>
        </div>

        <Field label="Best Pickup Time">
          <input required className={inputClasses} value={form.pickupTime} onChange={update('pickupTime')} placeholder="Today, 7 PM" />
        </Field>

        <div className="pt-4">
          <Button type="submit" variant="berry" className="w-full sm:w-auto" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Give Food Now ❤️'}
          </Button>
        </div>
      </form>
    </div>
  )
}
