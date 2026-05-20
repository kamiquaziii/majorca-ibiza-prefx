import {
  Bus,
  Gift,
  Hotel,
  Music,
  Music2,
  Ship,
  Sparkles,
  Flame,
  Wine,
  type LucideIcon,
} from "lucide-react";
import type { experiences } from "@/lib/content";

type ExperienceIconKey = (typeof experiences)[number]["icon"];

const iconMap: Record<ExperienceIconKey, LucideIcon> = {
  hotel: Hotel,
  ship: Ship,
  wine: Wine,
  sparkles: Sparkles,
  flame: Flame,
  music: Music,
  music2: Music2,
  ferry: Ship,
  bus: Bus,
  gift: Gift,
};

export function ExperienceIcon({ name }: { name: ExperienceIconKey }) {
  const Icon = iconMap[name];
  return <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />;
}
