export function SunsetIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={`mx-auto w-full max-w-xs sm:max-w-sm ${className}`}
      aria-hidden
    >
      {/* Sun rays */}
      {[...Array(9)].map((_, i) => {
        const angle = -80 + i * 20;
        const rad = (angle * Math.PI) / 180;
        const x2 = 160 + Math.sin(rad) * 90;
        const y2 = 95 - Math.cos(rad) * 70;
        return (
          <line
            key={i}
            x1="160"
            y1="95"
            x2={x2}
            y2={y2}
            stroke="#c05631"
            strokeWidth="0.75"
            opacity="0.55"
          />
        );
      })}
      {/* Sun */}
      <circle cx="160" cy="95" r="42" fill="none" stroke="#c05631" strokeWidth="1" />
      <circle cx="160" cy="95" r="32" fill="none" stroke="#c05631" strokeWidth="0.75" opacity="0.6" />
      <circle cx="160" cy="95" r="22" fill="none" stroke="#c05631" strokeWidth="0.5" opacity="0.4" />
      <circle cx="160" cy="95" r="12" fill="#c05631" opacity="0.15" />
      {/* Water lines */}
      {[118, 128, 138, 148, 158, 168].map((y, i) => (
        <line
          key={y}
          x1="40"
          y1={y}
          x2="280"
          y2={y}
          stroke="#3e5c76"
          strokeWidth="0.75"
          opacity={0.35 + i * 0.08}
        />
      ))}
      {/* Boat */}
      <path
        d="M148 118 L172 118 L168 124 L152 124 Z"
        fill="#3e5c76"
        opacity="0.85"
      />
      <line x1="160" y1="112" x2="160" y2="118" stroke="#3e5c76" strokeWidth="0.75" />
    </svg>
  );
}
