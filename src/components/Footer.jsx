import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bridge-950 text-sand-100 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-semibold text-white mb-3">FoodBridge</div>
          <p className="text-sand-200/80 text-sm leading-relaxed max-w-xs">
            Connecting restaurants, home cooks, and NGOs so good food reaches
            people, not landfills.
          </p>
        </div>

        <div>
          <div className="font-semibold text-harvest-400 mb-3 text-sm tracking-wide uppercase">Get Around</div>
          <ul className="space-y-2 text-sand-200/90">
            <li><Link to="/donate" className="hover:text-white">Donate Food</Link></li>
            <li><Link to="/find-ngo" className="hover:text-white">Find an NGO</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">My Donations</Link></li>
            <li><Link to="/login" className="hover:text-white">Log In</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-harvest-400 mb-3 text-sm tracking-wide uppercase">Contact</div>
          <ul className="space-y-2 text-sand-200/90 text-sm">
            <li>Kanpur, Uttar Pradesh, India</li>
            <li>hello@foodbridge.example</li>
            <li>+91 00000 00000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-sand-200/60">
        © {new Date().getFullYear()} FoodBridge. Built to feed people, not egos.
      </div>
    </footer>
  )
}
