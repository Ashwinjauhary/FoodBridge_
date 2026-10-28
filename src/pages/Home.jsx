import Button from '../components/Button.jsx'
import BridgeIllustration from '../components/BridgeIllustration.jsx'

const stats = [
  { value: '12,400+', label: 'Meals bridged' },
  { value: '86', label: 'Partner NGOs' },
  { value: '340', label: 'Restaurants donating' },
]

const featuredNGOs = [
  { name: 'Helping Hands NGO', area: 'Civil Lines, Kanpur', meals: '2,100 meals delivered' },
  { name: 'Food For Life', area: 'Swaroop Nagar, Kanpur', meals: '1,830 meals delivered' },
  { name: 'Hope Foundation', area: 'Kakadeo, Kanpur', meals: '1,540 meals delivered' },
]

const testimonials = [
  { quote: 'I used to throw away trays of food every night. Now it feeds a shelter down the road.', name: 'Rahul, Restaurant Owner' },
  { quote: 'The pickup request took less than a minute. My mother could do it too.', name: 'Sunita, Home Cook' },
  { quote: 'We get a notification the moment food is ready. It changed how we plan our week.', name: 'Amit, NGO Coordinator' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-sm font-semibold tracking-wide uppercase text-berry-500 mb-4">
            Don't waste it — bridge it
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-900 leading-tight">
            Don't waste food.
            <br />
            Share it with someone who needs it.
          </h1>
          <p className="mt-5 text-lg text-ink-600 max-w-md leading-relaxed">
            FoodBridge connects restaurants and home cooks with the nearest
            verified NGO in a few taps — no complicated forms, no waiting.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/donate" variant="berry">Give Food Now ❤️</Button>
            <Button to="/find-ngo" variant="outline">Find NGO Nearby</Button>
          </div>
          <p className="mt-6 text-sm text-ink-400">
            Takes under 2 minutes · No account required to start
          </p>
        </div>
        <BridgeIllustration className="w-full max-w-lg mx-auto" />
      </section>

      {/* Stats */}
      <section className="bg-bridge-900 text-sand-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold text-harvest-400">{s.value}</div>
              <div className="mt-2 text-sand-100/85">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink-900 text-center">How it works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { step: 'Tell us what you have', body: 'A short form — food type, quantity, and when it\u2019s ready for pickup.' },
            { step: 'We find the nearest NGO', body: 'FoodBridge matches you with a verified NGO close to your location.' },
            { step: 'They pick it up', body: 'You get a confirmation the moment your donation is on its way.' },
          ].map((item, i) => (
            <div key={item.step} className="bg-white rounded-2xl border border-sand-200 p-7">
              <div className="w-11 h-11 rounded-full bg-harvest-400/30 text-harvest-600 font-display font-semibold flex items-center justify-center text-lg">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{item.step}</h3>
              <p className="mt-2 text-ink-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured NGOs */}
      <section className="bg-sand-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <h2 className="font-display text-3xl font-semibold text-ink-900 text-center">Featured NGOs</h2>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {featuredNGOs.map((n) => (
              <div key={n.name} className="bg-white rounded-2xl p-6 border border-sand-200">
                <h3 className="font-display text-lg font-semibold text-ink-900">{n.name}</h3>
                <p className="text-ink-400 text-sm mt-1">{n.area}</p>
                <p className="mt-4 text-sm font-semibold text-bridge-800">{n.meals}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink-900 text-center">What people say</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-white rounded-2xl border border-sand-200 p-7">
              <p className="text-ink-700 leading-relaxed italic">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-ink-400">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="bg-harvest-400 rounded-3xl px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-semibold text-bridge-950">
            Got food to give? Someone nearby needs it tonight.
          </h2>
          <div className="mt-7">
            <Button to="/donate" variant="primary">Give Food Now ❤️</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
