import type { ExperienceIsland } from "@/lib/content";
import { experienceGroups } from "@/lib/content";

const tagByIsland = Object.fromEntries(
  experienceGroups.map((g) => [g.id, g.tag]),
) as Record<ExperienceIsland, string>;

const tagStyles: Record<ExperienceIsland, string> = {
  majorca: "border-slate/30 text-slate bg-slate/8",
  ibiza: "border-terracotta/30 text-terracotta bg-terracotta/8",
  both: "border-charcoal/20 text-charcoal-muted bg-charcoal/5",
};

export function IslandTag({ island }: { island: ExperienceIsland }) {
  return (
    <span
      className={`shrink-0 border px-2 py-0.5 text-[0.7rem] tracking-[0.12em] uppercase ${tagStyles[island]}`}
    >
      {tagByIsland[island]}
    </span>
  );
}
