export default function ProjectGraphic({ icon, gradient, title, className = '' }) {
  const [from, to] = gradient
  const gradId = `grad-${title.replace(/\s/g, '')}`

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* Decorative circles */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="320" cy="40" r="80" fill="white" fillOpacity="0.07" />
        <circle cx="60" cy="240" r="60" fill="white" fillOpacity="0.05" />
        <circle cx="200" cy="150" r="120" fill="white" fillOpacity="0.04" />
        <circle cx="350" cy="250" r="40" fill="white" fillOpacity="0.06" />
      </svg>

      {/* Dot grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={gradId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gradId})`} />
      </svg>

      {/* Icon */}
      <span className="relative text-7xl drop-shadow-sm select-none" role="img">
        {icon}
      </span>
    </div>
  )
}
