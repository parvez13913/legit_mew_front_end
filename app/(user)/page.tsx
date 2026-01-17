import { FeaturedCreators } from "@/components/Home/FeaturedCreators";
import { HowItWorks } from "@/components/Home/HowItWorks";
import { PlatformFeatures } from "@/components/Home/PlatformFeatures";
import { StockDonationHero } from "@/components/Home/StockDonationHero";

export default function Home() {
  return (
    <main>
      <StockDonationHero />
      <FeaturedCreators />
      <HowItWorks />
      <PlatformFeatures />
    </main>
  );
}
