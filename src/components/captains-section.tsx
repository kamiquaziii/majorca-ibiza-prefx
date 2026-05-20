"use client";

import { Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { RuleBar } from "@/components/ui/rule-bar";
import { SectionHeading } from "@/components/ui/section-heading";
import { captains } from "@/lib/content";

export function CaptainsSection() {
  return (
    <section
      id="captains"
      className="scroll-mt-20 border-t rule-line bg-cream-dark/35 py-20 text-charcoal sm:py-28"
    >
      <div className="page-container">
        <FadeIn>
          <SectionHeading title="Contact your captains" />
        </FadeIn>

        <StaggerChildren className="mt-10">
          <RuleBar className="p-0">
            <ul className="divide-y rule-line">
              {captains.map((captain) => (
                <StaggerItem key={captain.fullName}>
                  <li className="flex items-center justify-between gap-4 px-2 py-5 sm:px-3 sm:py-6">
                    <div className="min-w-0">
                      <p className="font-display text-xl font-semibold sm:text-2xl">
                        {captain.fullName}
                      </p>
                      <a
                        href={`tel:${captain.phone}`}
                        className="type-body-muted mt-1 inline-block transition-colors hover:text-slate"
                      >
                        {captain.display}
                      </a>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <a
                        href={captain.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center text-slate transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                        aria-label={`${captain.fullName} on Instagram`}
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </a>
                      <a
                        href={`tel:${captain.phone}`}
                        className="flex h-11 w-11 items-center justify-center text-slate transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                        aria-label={`Call ${captain.fullName}`}
                      >
                        <Phone className="h-5 w-5" strokeWidth={1.5} />
                      </a>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </RuleBar>
        </StaggerChildren>
      </div>
    </section>
  );
}
