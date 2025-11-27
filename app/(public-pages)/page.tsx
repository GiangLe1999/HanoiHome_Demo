import FeaturedProperties from "@/components/public-pages/home-page/featured-properties";
import HeroSearch from "@/components/public-pages/home-page/hero-search";
import LocationCarousel from "@/components/public-pages/home-page/location-carousel";
import Process from "@/components/public-pages/home-page/process";
import { WhyChooseSection } from "@/components/public-pages/home-page/why-choose";

export default function Home() {
  return (
    <div>
      <HeroSearch />
      <FeaturedProperties />
      <LocationCarousel />
      {/* <Process /> */}
      <WhyChooseSection />
    </div>
  );
}
