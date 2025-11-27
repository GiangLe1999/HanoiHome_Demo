import FeaturedProperties from "@/components/public-pages/home-page/featured-properties";
import HeroSearch from "@/components/public-pages/home-page/hero-search";
import { LocationCarousel } from "@/components/public-pages/home-page/location-carousel";

export default function Home() {
  return (
    <div>
      <HeroSearch />
      <FeaturedProperties />
      <LocationCarousel />
    </div>
  );
}
