export function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="type-section-heading">{title}</h2>
      {subtitle ? (
        <p className="type-section-subtitle mt-3">{subtitle}</p>
      ) : null}
    </div>
  );
}
