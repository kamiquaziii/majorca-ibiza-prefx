"use client";

import { AlertCircle, Ban } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { headsUp, notIncluded } from "@/lib/content";

export function InfoSection() {
  return (
    <section className="bg-white py-20 text-ocean-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <div className="flex items-center gap-3">
              <Ban className="h-5 w-5 text-ocean-400" strokeWidth={1.5} />
              <p className="text-xs tracking-[0.4em] text-ocean-600/70 uppercase">
                {notIncluded.headline}
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="mt-6 space-y-4">
            {notIncluded.items.map((item) => (
              <StaggerItem key={item}>
                <p className="border-l-2 border-ocean-200 pl-5 text-base leading-relaxed text-ocean-700/90">
                  {item}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div>
          <FadeIn>
            <div className="flex items-center gap-3">
              <AlertCircle
                className="h-5 w-5 text-sunset-500"
                strokeWidth={1.5}
              />
              <p className="text-xs tracking-[0.4em] text-ocean-600/70 uppercase">
                {headsUp.headline}
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="mt-6 space-y-4">
            {headsUp.items.map((item) => (
              <StaggerItem key={item}>
                <p className="rounded-xl bg-sand-50 px-5 py-4 text-base leading-relaxed text-ocean-800/90">
                  {item}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
