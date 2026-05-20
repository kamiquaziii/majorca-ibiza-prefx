"use client";

import { Plane } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { pricing } from "@/lib/content";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-ocean-950 py-20 text-sand-50 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] text-sunset-300/80 uppercase">
              {pricing.headline}
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-2">
              <span className="font-display text-6xl text-sand-50 sm:text-7xl">
                {pricing.total}
              </span>
              <span className="mb-3 text-lg text-sand-300/70">
                {pricing.perPerson}
              </span>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand-200/80">
              {pricing.note}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xs tracking-[0.3em] text-sand-300/70 uppercase">
                Payment split
              </p>
              <ul className="mt-6 space-y-4">
                {pricing.breakdown.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sand-200/90">{row.label}</span>
                    <span className="font-display text-2xl text-sunset-300">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="mt-12">
          <div className="flex items-start gap-4 rounded-2xl border border-sunset-400/25 bg-sunset-400/10 px-6 py-5">
            <Plane
              className="mt-0.5 h-5 w-5 shrink-0 text-sunset-300"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="text-sm leading-relaxed text-sand-100/90 sm:text-base">
              <span className="font-medium text-sunset-200">
                {pricing.flightsNote}
              </span>{" "}
              — book PMI in and IBZ out on your own schedule.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
