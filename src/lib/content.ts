export const tripMeta = {
  title: "Majorca & Ibiza Pre-F(x) 2026",
  subtitle: "MIT Sloan: A Summer on the Balearic Sea",
  taglineLead: "Six nights. Two islands.",
  taglineAccent: "One sunset after another.",
  subTagline: "Pack light. Bring the energy. Leave with the people.",
  dates: {
    start: "Aug 23",
    route: ["Palma", "Majorca", "Ibiza"],
    end: "Aug 29",
    year: "2026",
  },
} as const;

export const stats = [
  { value: "6", label: "Nights" },
  { value: "2", label: "Islands" },
  { value: "∞", label: "Stories" },
] as const;

export const experienceGroups = [
  {
    id: "majorca" as const,
    title: "Majorca",
    nights: 4,
    tag: "Majorca",
  },
  {
    id: "ibiza" as const,
    title: "Ibiza",
    nights: 2,
    tag: "Ibiza",
  },
  {
    id: "both" as const,
    title: "Both Islands",
    nights: null,
    tag: "Both Islands",
  },
] as const;

export type ExperienceIsland = (typeof experienceGroups)[number]["id"];

export const experiences = [
  {
    title: "Hotel Europe Playa Marina",
    description:
      "4 nights, double occupancy. Beachfront, pool views, walking distance to everything.",
    icon: "hotel" as const,
    island: "majorca" as const,
  },
  {
    title: "Welcome BBQ & Drinks",
    description:
      "Kicking off Majorca with grill smoke, cold beer, and your new best friends.",
    icon: "flame" as const,
    island: "majorca" as const,
  },
  {
    title: "7-Hour Yacht Day",
    description:
      "Food, swim stop in turquoise water, beer & wine flowing.",
    icon: "ship" as const,
    island: "majorca" as const,
  },
  {
    title: "Majorcan Vineyard Tasting",
    description: "Wine flights and light bites in the hills.",
    icon: "wine" as const,
    island: "majorca" as const,
  },
  {
    title: "Rooftop White Party",
    description:
      "Dress code: all-white, obviously. Cocktails and small plates with a view.",
    icon: "sparkles" as const,
    island: "majorca" as const,
  },
  {
    title: "Hyde Hotel",
    description:
      "2 nights, double occupancy. Includes €75 F&B credit per person.",
    icon: "hotel" as const,
    island: "ibiza" as const,
  },
  {
    title: "Solomun — Sunset Set at Destino",
    description:
      "GA tickets. The deep-house pilgrimage. Ibiza, golden hour.",
    icon: "music" as const,
    island: "ibiza" as const,
  },
  {
    title: "Calvin Harris — Sunset Set at Ushuaïa",
    description: "GA tickets. Yes, that Calvin Harris. Yes, outdoors at Ushuaïa.",
    icon: "music2" as const,
    island: "ibiza" as const,
  },
  {
    title: "Ferry — Majorca to Ibiza",
    description: "Aug 27, with the whole crew. Bring sunglasses.",
    icon: "ferry" as const,
    island: "both" as const,
  },
  {
    title: "Private Transport",
    description:
      "Buses for Majorca events. Door-to-door rides to the Ibiza sets.",
    icon: "bus" as const,
    island: "both" as const,
  },
  {
    title: "Welcome Gifts",
    description: "A little something to set the tone. You'll see.",
    icon: "gift" as const,
    island: "both" as const,
  },
] as const;

export { moodboardImages, type MoodboardLayout } from "@/lib/moodboard";

export const pricing = {
  headline: "The Cost",
  total: "$2,300",
  perPerson: "/ person",
  breakdown: [
    { label: "Sloan Groups", amount: "$2,150" },
    { label: "Venmo", amount: "$150" },
  ],
  note: "All hotels, transport, events, and tickets above.",
  flightsNote:
    "Flights not included — fly into PMI on 8/23 and out of IBZ on 8/29.",
} as const;

export const matchingWindow = {
  label: "Matching window",
  opens: "late May",
  closes: "June 6",
} as const;

export const captains = [
  {
    fullName: "Aditi Singh",
    phone: "+18482191090",
    display: "+1 848-219-1090",
    instagram: "https://www.instagram.com/aditiiisingh/",
  },
  {
    fullName: "Alexis Sabbaghian",
    phone: "+13373035016",
    display: "+1 337-303-5016",
    instagram: "https://www.instagram.com/alexsabb/",
  },
  {
    fullName: "Ben Noymer",
    phone: "+14086563612",
    display: "+1 408-656-3612",
    instagram: "https://www.instagram.com/bennoymer/",
  },
  {
    fullName: "Eric Hong",
    phone: "+14086461340",
    display: "+1 408-646-1340",
    instagram: "https://www.instagram.com/ericlhong/",
  },
  {
    fullName: "Zuhayer Quazi",
    phone: "+15103712063",
    display: "+1 510-371-2063",
    instagram: "https://www.instagram.com/kamiquaziii/",
  },
] as const;

export const navLinks = [
  { href: "#moodboard", label: "Vibe" },
  { href: "#experiences", label: "What's Inside" },
  { href: "#pricing", label: "Pricing" },
  { href: "#join", label: "Matching" },
  { href: "#captains", label: "Leads" },
] as const;

export function experiencesForIsland(island: ExperienceIsland) {
  return experiences.filter((item) => item.island === island);
}
