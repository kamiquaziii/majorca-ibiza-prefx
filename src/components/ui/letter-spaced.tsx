export function LetterSpaced({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text.replace(/\s/g, "")}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} className="inline-block w-[0.35em]" />
        ) : (
          <span key={i} className="inline-block">
            {char}
          </span>
        ),
      )}
    </span>
  );
}
