import { ExperienceIcon } from "@/components/experience-icon";
import { IslandTag } from "@/components/ui/island-tag";
import type { experiences } from "@/lib/content";

type Experience = (typeof experiences)[number];

export function ExperienceCard({
  item,
  showTag = false,
}: {
  item: Experience;
  showTag?: boolean;
}) {
  return (
    <article className="flex gap-4 sm:gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-terracotta sm:h-11 sm:w-11">
        <ExperienceIcon name={item.icon} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="type-experience-title">{item.title}</h3>
          {showTag ? <IslandTag island={item.island} /> : null}
        </div>
        <p className="type-body-muted mt-2">{item.description}</p>
      </div>
    </article>
  );
}
