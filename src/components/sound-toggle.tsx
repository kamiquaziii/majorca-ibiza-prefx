"use client";

import { Music2, Volume2 } from "lucide-react";
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
      className={`type-kicker inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border px-3 py-2 transition-colors ${
        isPlaying
          ? "rule-line border-terracotta/40 bg-terracotta/8 text-terracotta"
          : "rule-line border-charcoal/15 text-charcoal hover:border-terracotta/35 hover:text-terracotta"
      }`}
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4 shrink-0" aria-hidden />
      ) : (
        <Music2 className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
      )}
      <span>{label}</span>
    </button>
  );
}
