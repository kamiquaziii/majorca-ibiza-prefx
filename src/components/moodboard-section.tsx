"use client";

import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { moodboardImages, type MoodboardLayout } from "@/lib/moodboard";

const spanClass: Record<MoodboardLayout, string> = {
  hero: "md:col-span-7 md:row-span-2",
  feature: "md:col-span-5 md:row-span-2",
  default: "md:col-span-4",
  wide: "md:col-span-6",
};

/** Full-width stack below md; mosaic only on desktop */
const aspectClass: Record<MoodboardLayout, string> = {
  hero: "aspect-[4/3] md:aspect-auto",
  feature: "aspect-[4/3] md:aspect-auto",
  default: "aspect-[4/3] md:aspect-auto",
  wide: "aspect-[16/9] md:aspect-auto",
};

export function MoodboardSection() {
  return (
    <section
      id="moodboard"
      className="scroll-mt-20 border-t rule-line bg-cream py-16 text-charcoal sm:py-24"
    >
      <div className="page-container">
        <FadeIn>
          <SectionHeading
            title="The vibe"
            subtitle="Six nights of sun, sea, and Sloanies"
          />
        </FadeIn>

        <StaggerChildren className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[minmax(180px,1fr)] md:gap-3 lg:auto-rows-[210px]">
          {moodboardImages.map((image, index) => (
            <StaggerItem
              key={image.src}
              className={`group relative overflow-hidden rounded-sm md:min-h-0 md:h-full ${spanClass[image.layout]}`}
            >
              <div
                className={`relative w-full md:absolute md:inset-0 md:h-full ${aspectClass[image.layout]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    image.layout === "hero"
                      ? "(max-width: 768px) 100vw, 58vw"
                      : image.layout === "wide"
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority={index < 2}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-0 left-0 right-0 px-3 py-3 font-serif text-sm tracking-wide text-cream md:px-4 md:text-base">
                  {image.caption}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
