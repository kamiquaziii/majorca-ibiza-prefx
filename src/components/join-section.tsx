"use client";

import { Calendar } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { matchingWindow } from "@/lib/content";

export function JoinSection() {
  return (
    <section
      id="join"
      className="scroll-mt-20 border-t rule-line bg-cream-dark/35 py-12 text-charcoal sm:py-16"
    >
      <div className="page-container">
        <FadeIn>
          <div className="flex flex-col items-center px-4 py-2 text-center sm:px-6">
            <Calendar
              className="h-7 w-7 text-terracotta sm:h-8 sm:w-8"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="type-label mt-5">{matchingWindow.label}</p>
            <p className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Opens {matchingWindow.opens}
            </p>
            <p className="type-section-subtitle mt-3">
              Closes {matchingWindow.closes}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
