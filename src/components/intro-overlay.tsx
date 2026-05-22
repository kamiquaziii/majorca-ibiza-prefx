"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { useSiteExperience } from "@/components/audio-provider";
import { SunsetIllustration } from "@/components/sunset-illustration";
import { tripMeta } from "@/lib/content";

export function IntroOverlay() {
  const { hasEntered, prefersReducedMotion, enter } = useSiteExperience();

  return (
    <AnimatePresence>
      {!hasEntered && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-cream px-5 text-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="intro-title"
        >
          <div className="page-container flex max-w-lg flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SunsetIllustration className="max-w-[220px] sm:max-w-xs" />
            </motion.div>

            <motion.p
              className="type-kicker mt-8 font-display tracking-[0.35em] text-charcoal/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {tripMeta.subtitle}
            </motion.p>

            <motion.h1
              id="intro-title"
              className="font-display mt-6 text-[clamp(2.25rem,9vw,3.5rem)] leading-[0.95] font-black tracking-tight uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Majorca{" "}
              <span className="font-accent text-[1.12em] font-normal normal-case text-terracotta">
                &
              </span>{" "}
              Ibiza
            </motion.h1>

            <motion.p
              className="font-serif mt-3 text-2xl text-slate italic sm:text-[1.65rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Pre-F(x)
            </motion.p>

            <motion.p
              className="mt-6 max-w-sm font-serif text-lg leading-relaxed text-charcoal/80 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.5 }}
            >
              {tripMeta.taglineLead}{" "}
              <span className="text-terracotta not-italic">
                {tripMeta.taglineAccent}
              </span>
            </motion.p>

            <motion.div
              className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:max-w-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
            >
              {prefersReducedMotion ? (
                <button
                  type="button"
                  onClick={() => enter(false)}
                  className="type-kicker w-full rounded-sm border border-charcoal/20 bg-charcoal px-6 py-4 text-cream transition-colors hover:bg-charcoal/90"
                >
                  Continue
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => enter(true)}
                    className="type-kicker inline-flex w-full items-center justify-center gap-2 rounded-sm border border-terracotta bg-terracotta px-6 py-4 text-cream transition-colors hover:bg-terracotta-light"
                  >
                    <Music2 className="h-4 w-4" aria-hidden />
                    Play the vibe & enter
                  </button>
                  <button
                    type="button"
                    onClick={() => enter(false)}
                    className="font-serif text-base text-charcoal/65 underline-offset-4 transition-colors hover:text-terracotta hover:underline"
                  >
                    Enter without sound
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
