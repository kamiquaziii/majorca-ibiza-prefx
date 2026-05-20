"use client";

import { ExperienceCard } from "@/components/experience-card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  experienceGroups,
  experiencesForIsland,
} from "@/lib/content";

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="scroll-mt-20 border-t rule-line bg-cream-dark/35 py-20 text-charcoal sm:py-28"
    >
      <div className="page-container">
        <FadeIn>
          <SectionHeading title="What's inside" />
        </FadeIn>

        <div className="mt-10 space-y-10">
          {experienceGroups.map((group, groupIndex) => {
            const items = experiencesForIsland(group.id);

            return (
              <FadeIn key={group.id} delay={groupIndex * 0.05}>
                <div>
                  <div className="rule-line flex items-baseline justify-between gap-4 border-b pb-3">
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {group.title}
                    </h3>
                    {group.nights ? (
                      <p className="type-label shrink-0">
                        {group.nights} nights
                      </p>
                    ) : (
                      <p className="type-label shrink-0">Both Islands</p>
                    )}
                  </div>

                  <StaggerChildren className="rule-line border-b">
                    {items.map((item) => (
                      <StaggerItem
                        key={item.title}
                        className="rule-line border-b px-1 py-7 last:border-b-0 sm:py-8"
                      >
                        <ExperienceCard item={item} showTag />
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
