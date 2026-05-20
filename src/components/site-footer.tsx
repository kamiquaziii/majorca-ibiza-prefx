import { LetterSpaced } from "@/components/ui/letter-spaced";
import { CornerStar } from "@/components/ui/corner-star";
import { RuleBar } from "@/components/ui/rule-bar";

export function SiteFooter() {
  return (
    <footer className="relative bg-cream px-5 pt-4 pb-16 text-center text-charcoal sm:px-8">
      <div className="page-container relative">
        <CornerStar className="absolute top-6 left-0" />
        <CornerStar className="absolute top-6 right-0" />
        <RuleBar>
          <p className="type-label leading-loose">
            <LetterSpaced text="2026 · MAJORCA + IBIZA PRE-F(X)" />
          </p>
        </RuleBar>
        <p className="mt-10 font-serif text-3xl text-slate italic sm:text-4xl">
          See you in the sun
        </p>
        <p className="type-label mt-8">
          <LetterSpaced text="MIT SLOAN" />
        </p>
      </div>
    </footer>
  );
}
