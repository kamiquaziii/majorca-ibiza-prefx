"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { LetterSpaced } from "@/components/ui/letter-spaced";
import { stats, tripMeta } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ocean-950 text-sand-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,165,116,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[70vmin] w-[70vmin] rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-15%] top-[20%] h-[50vmin] w-[50vmin] rounded-full bg-sunset-400/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pt-28 pb-12 sm:px-8 sm:pt-32">
        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <p className="text-[0.65rem] leading-relaxed tracking-[0.45em] text-sand-200/70 uppercase sm:text-xs">
              <LetterSpaced text="MIT SLOAN" /> ·{" "}
              <span className="text-sunset-300/90">
                A Summer on the Balearic Sea
              </span>{" "}
              · Vol. One
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display max-w-4xl text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.95] font-light tracking-tight text-sand-50">
              <span className="block">Majorca</span>
              <span className="block text-sunset-300">& Ibiza</span>
            </h1>
            <p className="mt-3 font-display text-2xl tracking-[0.12em] text-sand-200/90 italic sm:text-3xl">
              Pre-F(x)
            </p>
          </FadeIn>

          <FadeIn delay={0.35} className="max-w-xl space-y-3">
            <p className="text-lg leading-relaxed text-sand-100/90 sm:text-xl">
              {tripMeta.tagline}
            </p>
            <p className="text-sm leading-relaxed text-sand-300/80 sm:text-base">
              {tripMeta.subTagline}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 space-y-10">
          <FadeIn delay={0.45}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-ocean-900/40 px-4 py-6 text-center backdrop-blur-sm sm:py-8"
                >
                  <span className="font-display text-4xl text-sunset-300 sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[0.65rem] tracking-[0.35em] text-sand-300/80 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-center text-[0.65rem] tracking-[0.28em] text-sand-200/90 uppercase backdrop-blur-sm sm:gap-4 sm:text-xs">
              <span className="text-sunset-300">{tripMeta.dates.start}</span>
              {tripMeta.dates.route.map((stop) => (
                <span key={stop} className="flex items-center gap-3">
                  <span className="text-white/25" aria-hidden>
                    ·
                  </span>
                  <span>{stop}</span>
                </span>
              ))}
              <span className="text-white/25" aria-hidden>
                ·
              </span>
              <span className="text-sunset-300">{tripMeta.dates.end}</span>
            </div>
            <p className="mt-4 text-center font-display text-sm tracking-[0.55em] text-sand-400/70">
              {tripMeta.dates.year.split("").join(" · ")}
            </p>
          </FadeIn>

          <FadeIn delay={0.65} className="flex justify-center">
            <Link
              href="#experiences"
              className="group inline-flex flex-col items-center gap-2 text-xs tracking-[0.25em] text-sand-300/70 uppercase transition-colors hover:text-sunset-300"
            >
              <span>Explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
