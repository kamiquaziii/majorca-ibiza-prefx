"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSiteExperience } from "@/components/audio-provider";
import { IntroOverlay } from "@/components/intro-overlay";

export function SiteShell({ children }: { children: ReactNode }) {
  const { hasEntered, prefersReducedMotion } = useSiteExperience();

  return (
    <>
      <IntroOverlay />
      <motion.div
        initial={false}
        animate={
          hasEntered
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: prefersReducedMotion ? 0 : 28 }
        }
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={hasEntered ? undefined : "pointer-events-none"}
      >
        {children}
      </motion.div>
    </>
  );
}
