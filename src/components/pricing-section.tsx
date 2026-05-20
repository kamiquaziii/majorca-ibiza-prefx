"use client";

import { Plane } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { RuleBar } from "@/components/ui/rule-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricing } from "@/lib/content";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t rule-line bg-cream py-20 text-charcoal sm:py-28"
    >
      <div className="page-container">
        <FadeIn>
          <SectionHeading title={pricing.headline} />
          <div className="mt-8 flex flex-wrap items-end justify-center gap-2">
            <span className="font-display text-5xl font-bold text-terracotta sm:text-6xl">
              {pricing.total}
            </span>
            <span className="mb-1 font-serif text-lg text-charcoal-muted italic sm:text-xl">
              {pricing.perPerson}
            </span>
          </div>
          <p className="type-body-muted mx-auto mt-6 max-w-md text-center font-serif">
            {pricing.note}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10">
          <RuleBar>
            <ul className="divide-y rule-line">
              {pricing.breakdown.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="type-body-muted">{row.label}</span>
                  <span className="font-display text-2xl font-semibold sm:text-3xl">
                    {row.amount}
                  </span>
                </li>
              ))}
            </ul>
          </RuleBar>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8">
          <div className="rule-line flex items-start gap-4 border px-5 py-5 sm:px-6">
            <Plane
              className="mt-0.5 h-5 w-5 shrink-0 text-slate sm:h-6 sm:w-6"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="type-body font-serif">{pricing.flightsNote}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
