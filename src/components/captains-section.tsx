"use client";

import { Phone } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { captains } from "@/lib/content";

export function CaptainsSection() {
  return (
    <section
      id="captains"
      className="scroll-mt-20 bg-gradient-to-b from-ocean-900 to-ocean-950 py-20 text-sand-50 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <p className="text-xs tracking-[0.4em] text-sunset-300/80 uppercase">
            Questions? Ideas? Need a roommate match?
          </p>
          <h2 className="font-display mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            Call your captains
          </h2>
        </FadeIn>

        <StaggerChildren className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {captains.map((captain, index) => (
            <StaggerItem
              key={captain.name}
              className={index === captains.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <a
                href={`tel:${captain.phone}`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:border-sunset-400/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-300"
              >
                <div>
                  <p className="font-display text-2xl text-sand-50">
                    {captain.name}
                  </p>
                  <p className="mt-1 text-sm text-sand-300/80 group-hover:text-sunset-200">
                    {captain.display}
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sunset-300 transition-colors group-hover:bg-sunset-400/20">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                  <span className="sr-only">Call {captain.name}</span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
