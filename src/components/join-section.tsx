"use client";

import { Calendar } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { matchingWindow } from "@/lib/content";

export function JoinSection() {
  return (
    <section
      id="join"
      className="scroll-mt-20 border-t rule-line bg-cream-dark/35 py-20 text-charcoal sm:py-28"
    >
      <div className="page-container">
        <FadeIn>
          <div className="flex min-h-[min(50vh,22rem)] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[min(45vh,26rem)] sm:px-6 sm:py-12">
            <Calendar
              className="h-8 w-8 text-terracotta sm:h-10 sm:w-10"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="type-label mt-10 sm:mt-12">{matchingWindow.label}</p>
            <p className="font-display mt-6 text-4xl font-semibold leading-tight sm:mt-8 sm:text-5xl">
              Opens {matchingWindow.opens}
            </p>
            <p className="type-section-subtitle mt-5 sm:mt-6">
              Closes {matchingWindow.closes}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
