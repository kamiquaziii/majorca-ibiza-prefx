"use client";

import { Calendar, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { howToJoin } from "@/lib/content";

export function JoinSection() {
  return (
    <section
      id="join"
      className="scroll-mt-20 bg-sand-100 py-20 text-ocean-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-ocean-600/70 uppercase">
            {howToJoin.headline}
          </p>
          <h2 className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            Matching opens soon
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ocean-700/90">
            {howToJoin.description}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-ocean-900/8 bg-white p-7 shadow-sm">
              <Calendar
                className="h-5 w-5 text-sunset-500"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-5 text-xs tracking-[0.25em] text-ocean-500/80 uppercase">
                Matching window
              </p>
              <p className="font-display mt-3 text-2xl text-ocean-950">
                Opens {howToJoin.matching.opens}
              </p>
              <p className="mt-2 text-ocean-700/85">
                Closes{" "}
                <span className="font-medium text-ocean-950">
                  {howToJoin.matching.closes}
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex h-full flex-col rounded-2xl border border-ocean-900/8 bg-white p-7 shadow-sm sm:col-span-1 lg:col-span-2">
              <Users
                className="h-5 w-5 text-teal-600"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="mt-5 text-xs tracking-[0.25em] text-ocean-500/80 uppercase">
                Capacity
              </p>
              <p className="mt-3 text-lg leading-relaxed text-ocean-800/90">
                {howToJoin.spots}
              </p>
              <p className="mt-4 text-sm text-ocean-600/80">
                Details will land in your Sloan inbox — no forms on this site.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
