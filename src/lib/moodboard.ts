export type MoodboardLayout = "hero" | "feature" | "wide" | "default";

function altFromCaption(caption: string): string {
  return `${caption} — Majorca & Ibiza Pre-F(x) 2026`;
}

const moodboardFiles = [
  {
    file: "ibiza_hotel.webp",
    caption: "Ibiza Mornings",
    layout: "hero" as const,
  },
  {
    file: "destino_sunset.webp",
    caption: "Destino Sunset Sets",
    layout: "feature" as const,
  },
  {
    file: "majorca_yacht.jpg",
    caption: "Yacht Vibes",
    layout: "default" as const,
  },
  {
    file: "majorca_yacht_swim.jpg",
    caption: "Dive into the Balearic Sea",
    layout: "default" as const,
  },
  {
    file: "majorca_winery.png",
    caption: "Wine in the hills",
    layout: "default" as const,
  },
  {
    file: "majorca_dinner_view.webp",
    caption: "Meals with a view",
    layout: "wide" as const,
  },
  {
    file: "majorca_beach.jpg",
    caption: "Majorca Beaches",
    layout: "wide" as const,
  },
] as const;

export const moodboardImages = moodboardFiles.map(
  ({ file, caption, layout }) => ({
    src: `/moodboard/${file}`,
    caption,
    alt: altFromCaption(caption),
    layout,
  }),
);
