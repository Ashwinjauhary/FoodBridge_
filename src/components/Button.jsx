import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-bridge-900 text-sand-50 hover:bg-bridge-800',
  gold: 'bg-harvest-500 text-bridge-950 hover:bg-harvest-400',
  outline: 'bg-transparent border-2 border-bridge-900 text-bridge-900 hover:bg-bridge-900 hover:text-sand-50',
  berry: 'bg-berry-500 text-sand-50 hover:bg-berry-600',
}

export default function Button({ to, href, onClick, type = 'button', variant = 'primary', children, className = '' }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-lg font-semibold transition-colors shadow-sm ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
