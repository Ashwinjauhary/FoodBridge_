// The signature visual: a literal bridge arcing from a plate (the donor)
// to a heart (the person fed) — the whole product's premise in one shape.
export default function BridgeIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 260"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a bridge connecting a plate of food to a heart"
    >
      <path
        d="M40 210 C 40 90, 560 90, 560 210"
        fill="none"
        stroke="#C48F1F"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {[80, 150, 220, 290, 360, 430, 500].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={210}
          x2={x}
          y2={210 - Math.sin(((x - 40) / 520) * Math.PI) * 118}
          stroke="#E0A72C"
          strokeWidth="4"
          opacity="0.55"
        />
      ))}
      <line x1="20" y1="212" x2="580" y2="212" stroke="#1B4332" strokeWidth="6" strokeLinecap="round" />

      <g transform="translate(20, 165)">
        <circle cx="40" cy="40" r="38" fill="#FBF9F4" stroke="#1B4332" strokeWidth="5" />
        <circle cx="40" cy="40" r="24" fill="none" stroke="#1B4332" strokeWidth="3" opacity="0.5" />
        <text x="40" y="47" textAnchor="middle" fontSize="26">🍲</text>
      </g>

      <g transform="translate(500, 160)">
        <circle cx="40" cy="45" r="40" fill="#A23E48" />
        <text x="40" y="55" textAnchor="middle" fontSize="30">❤️</text>
      </g>
    </svg>
  )
}
