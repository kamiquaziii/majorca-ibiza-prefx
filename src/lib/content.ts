export const tripMeta = {
  title: "Majorca & Ibiza Pre-F(x) 2026",
  subtitle: "MIT Sloan · A Summer on the Balearic Sea · Vol. One",
  tagline: "Six nights. Two islands. One sunset after another.",
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
  { value: "60", label: "Sloanies" },
  { value: "∞", label: "Stories" },
] as const;

export const islandSplit = [
  { island: "Majorca", nights: 4 },
  { island: "Ibiza", nights: 2 },
] as const;

export const experiences = [
  {
    title: "Hotel Europe Playa Marina — Majorca",
    description:
      "4 nights, double occupancy. Beachfront, pool views, walking distance to everything.",
    icon: "hotel" as const,
    island: "majorca" as const,
  },
  {
    title: "Hyde Hotel — Ibiza",
    description:
      "2 nights, double occupancy. Includes €75 F&B credit per person.",
    icon: "hotel" as const,
    island: "ibiza" as const,
  },
  {
    title: "7-Hour Yacht Day in Majorca",
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
    title: "Welcome BBQ & Drinks",
    description:
      "Kicking off Majorca with grill smoke, cold beer, and your new best friends.",
    icon: "flame" as const,
    island: "majorca" as const,
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
    title: "Private Transport, Both Islands",
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

export const pricing = {
  headline: "The Damage",
  total: "$2,300",
  perPerson: "/ person",
  breakdown: [
    { label: "Sloan Groups", amount: "$2,150" },
    { label: "Venmo", amount: "$150" },
  ],
  note: "All hotels, transport, events, and tickets above.",
  flightsNote: "Flights not included.",
} as const;

export const howToJoin = {
  headline: "How To Get In",
  matching: {
    opens: "late May",
    closes: "June 6",
  },
  spots: "60 spots · 12 second-years · 48 first-years.",
  description:
    "Run through a matching process. More details landing in your inbox soon.",
} as const;

export const notIncluded = {
  headline: "Not Included",
  items: [
    "Flights to Palma de Mallorca (PMI) and home from Ibiza (IBZ).",
    "Any meals or activities you organize on your own time.",
  ],
} as const;

export const headsUp = {
  headline: "Heads Up",
  items: [
    "White Party is all white.",
    "Bring a swimsuit you actually like.",
    "Sunscreen, a refillable water bottle, and stamina recommended.",
  ],
} as const;

export const captains = [
  { name: "Aditi", phone: "+18482191090", display: "+1 848-219-1090" },
  { name: "Alexis", phone: "+13373035016", display: "+1 337-303-5016" },
  { name: "Ben", phone: "+14086563612", display: "+1 408-656-3612" },
  { name: "Eric", phone: "+14086461340", display: "+1 408-646-1340" },
  { name: "Zuhayer", phone: "+15103712063", display: "+1 510-371-2063" },
] as const;

export const navLinks = [
  { href: "#experiences", label: "What's Inside" },
  { href: "#pricing", label: "Pricing" },
  { href: "#join", label: "How To Join" },
  { href: "#captains", label: "Captains" },
] as const;
