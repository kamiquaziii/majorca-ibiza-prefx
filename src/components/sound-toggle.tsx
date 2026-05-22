"use client";

import { Music2, Volume2, VolumeX } from "lucide-react";
import { useSiteExperience } from "@/components/audio-provider";

export function SoundToggle() {
  const { hasEntered, isPlaying, prefersReducedMotion, toggle } =
    useSiteExperience();

  if (!hasEntered || prefersReducedMotion) {
    return null;
  }

  const label = isPlaying ? "Sound off" : "Play the vibe";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Turn sound off" : "Play background music"}
      title={label}
      className={`inline-flex shrink-0 items-center justify-center rounded-sm border transition-colors ${
        isPlaying
          ? "rule-line border-terracotta/40 bg-terracotta/8 text-terracotta"
          : "rule-line border-charcoal/15 text-charcoal hover:border-terracotta/35 hover:text-terracotta"
      } gap-2 px-3 py-2 lg:gap-0 lg:p-3`}
    >
      {isPlaying ? (
        <Volume2 className="h-5 w-5 shrink-0" aria-hidden />
      ) : (
        <>
          <Music2
            className="h-4 w-4 shrink-0 opacity-70 lg:hidden"
            aria-hidden
          />
          <VolumeX className="hidden h-5 w-5 shrink-0 lg:block" aria-hidden />
        </>
      )}
      <span className="type-kicker whitespace-nowrap lg:sr-only">{label}</span>
    </button>
  );
}
