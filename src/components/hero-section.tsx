"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { SunsetIllustration } from "@/components/sunset-illustration";
import { FadeIn } from "@/components/ui/fade-in";
import { CornerStar } from "@/components/ui/corner-star";
import { Masthead } from "@/components/ui/masthead";
import { RuleBar } from "@/components/ui/rule-bar";
import { stats, tripMeta } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] bg-cream text-charcoal"
    >
      <div className="page-container relative flex min-h-[100svh] flex-col pt-24 pb-10 sm:pt-28">
        <FadeIn className="mt-4">
          <Masthead />
        </FadeIn>

        <div className="flex flex-1 flex-col items-center justify-center py-8 sm:py-12">
          <FadeIn delay={0.1}>
            <SunsetIllustration className="max-w-md" />
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10 w-full text-center">
            <p className="type-kicker font-display tracking-[0.45em]">
              {tripMeta.dates.year.split("").join(" · ")}
            </p>
            <h1 className="font-display mt-6 text-[clamp(2.75rem,11vw,4.75rem)] leading-[0.92] font-black tracking-tight uppercase">
              Majorca{" "}
              <span className="font-accent text-[1.15em] font-normal normal-case text-terracotta">
                &
              </span>{" "}
              Ibiza
            </h1>
            <p className="font-serif mt-4 text-[1.75rem] text-slate italic sm:text-[2rem]">
              Pre-F(x)
            </p>
          </FadeIn>

          <FadeIn delay={0.35} className="mt-10 max-w-lg text-center">
            <p className="font-serif text-xl leading-relaxed italic text-charcoal sm:text-2xl">
              {tripMeta.taglineLead}{" "}
              <span className="text-terracotta not-italic">
                {tripMeta.taglineAccent}
              </span>
            </p>
            <p className="type-body-muted mt-5 font-serif">
              {tripMeta.subTagline}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <div className="rule-line grid grid-cols-3 border">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-4 py-7 text-center sm:py-9 ${
                  i < stats.length - 1 ? "border-r rule-line" : ""
                }`}
              >
                <span className="font-display text-5xl font-bold text-charcoal sm:text-6xl">
                  {stat.value}
                </span>
                <span className="type-label mt-3">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <RuleBar>
            <div
              className="flex items-center justify-center gap-5 py-3 sm:gap-10 sm:py-4"
              aria-label={`Trip dates ${tripMeta.dates.start} through ${tripMeta.dates.end}`}
            >
              <span className="font-display text-2xl font-bold tracking-wide text-terracotta sm:text-3xl">
                {tripMeta.dates.start}
              </span>
              <span
                className="font-serif text-lg text-charcoal/35 sm:text-xl"
                aria-hidden
              >
                —
              </span>
              <span className="font-display text-2xl font-bold tracking-wide text-terracotta sm:text-3xl">
                {tripMeta.dates.end}
              </span>
            </div>
          </RuleBar>
          <div className="relative">
            <CornerStar className="absolute bottom-0 left-0" />
            <CornerStar className="absolute right-0 bottom-0" />
          </div>
        </FadeIn>

        <FadeIn delay={0.65} className="mt-10 flex justify-center">
          <Link
            href="#experiences"
            className="type-kicker inline-flex flex-col items-center gap-2 transition-colors hover:text-terracotta"
          >
            <span>What&apos;s inside</span>
            <ArrowDown className="h-5 w-5" aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
