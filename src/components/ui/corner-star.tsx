export function CornerStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-2.5 w-2.5 text-charcoal/35 ${className}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z"
      />
    </svg>
  );
}
