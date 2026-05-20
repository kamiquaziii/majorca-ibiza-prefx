import { LetterSpaced } from "@/components/ui/letter-spaced";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ocean-950 px-5 py-12 text-center text-sand-300/70 sm:px-8">
      <p className="text-[0.6rem] leading-loose tracking-[0.35em] uppercase sm:text-xs">
        <LetterSpaced text="2026 · MAJORCA + IBIZA PRE-F(X)" />
      </p>
      <p className="mt-4 font-display text-xl tracking-wide text-sunset-300/90 italic">
        See you in the sun
      </p>
      <p className="mt-6 text-[0.6rem] tracking-[0.4em] text-sand-400/50 uppercase">
        <LetterSpaced text="MIT SLOAN" />
      </p>
    </footer>
  );
}
