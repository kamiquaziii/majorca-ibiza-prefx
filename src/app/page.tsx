import { CaptainsSection } from "@/components/captains-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { HeroSection } from "@/components/hero-section";
import { MoodboardSection } from "@/components/moodboard-section";
import { JoinSection } from "@/components/join-section";
import { PricingSection } from "@/components/pricing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <SiteHeader />
      <main>
        <HeroSection />
        <MoodboardSection />
        <ExperiencesSection />
        <PricingSection />
        <JoinSection />
        <CaptainsSection />
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
