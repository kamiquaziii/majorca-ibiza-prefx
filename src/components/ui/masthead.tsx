import { CornerStar } from "@/components/ui/corner-star";

export function Masthead() {
  return (
    <div className="relative w-full">
      <div className="relative rule-line border-t">
        <CornerStar className="absolute top-0 left-0 -translate-y-1/2" />
        <CornerStar className="absolute top-0 right-0 -translate-y-1/2" />
        <p className="type-kicker px-2 py-3.5 text-center sm:py-4">
          MIT Sloan: A Summer on the Balearic Sea
        </p>
      </div>
      <div className="rule-line border-b" aria-hidden />
    </div>
  );
}
