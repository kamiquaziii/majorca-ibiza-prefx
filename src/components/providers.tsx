"use client";

import { AudioProvider } from "@/components/audio-provider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>;
}
