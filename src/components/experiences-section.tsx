"use client";

import { ExperienceIcon } from "@/components/experience-icon";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { experiences, islandSplit } from "@/lib/content";

const islandBadge: Record<string, string> = {
  majorca: "Majorca",
  ibiza: "Ibiza",
  both: "Both Islands",
};

const islandColors: Record<string, string> = {
  majorca: "bg-teal-500/15 text-teal-200 border-teal-400/20",
  ibiza: "bg-violet-500/15 text-violet-200 border-violet-400/20",
  both: "bg-sunset-400/15 text-sunset-200 border-sunset-400/20",
};

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="scroll-mt-20 bg-sand-50 py-20 text-ocean-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <p className="text-xs tracking-[0.4em] text-ocean-600/70 uppercase">
            What&apos;s inside
          </p>
          <h2 className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            The full itinerary
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex justify-center gap-6 sm:gap-12">
          {islandSplit.map((item) => (
            <div key={item.island} className="text-center">
              <p className="text-[0.65rem] tracking-[0.35em] text-ocean-500/80 uppercase">
                {item.island}
              </p>
              <p className="font-display mt-1 text-3xl text-ocean-900">
                {item.nights}{" "}
                <span className="text-lg text-ocean-500/80">nights</span>
              </p>
            </div>
          ))}
        </FadeIn>

        <StaggerChildren className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {experiences.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-ocean-900/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean-950 text-sunset-300">
                    <ExperienceIcon name={item.icon} />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.15em] uppercase ${islandColors[item.island]}`}
                  >
                    {islandBadge[item.island]}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-snug text-ocean-950">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ocean-700/85">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
