import { CaptainsSection } from "@/components/captains-section";
import { ExperiencesSection } from "@/components/experiences-section";
import { HeroSection } from "@/components/hero-section";
import { JoinSection } from "@/components/join-section";
import { PricingSection } from "@/components/pricing-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <PricingSection />
        <JoinSection />
        <CaptainsSection />
      </main>
      <SiteFooter />
    </>
  );
}
