import FeaturedProperties from "@/components/public-pages/home-page/featured-properties";
import HeroSearch from "@/components/public-pages/home-page/hero-search";
import LocationCarousel from "@/components/public-pages/home-page/location-carousel";
// import Process from "@/components/public-pages/home-page/process";
import WhyChooseSection from "@/components/public-pages/home-page/why-choose";
import TopProperties from "@/components/public-pages/home-page/top-properties";
import Testimonials from "@/components/public-pages/home-page/testimonials";
import AgentsCarousel from "@/components/public-pages/home-page/agents-carousel";

export default function Home() {
  return (
    <div>
      <HeroSearch />
      <FeaturedProperties />
      <LocationCarousel />
      {/* <Process /> */}
      <WhyChooseSection />
      <TopProperties />
      <Testimonials />
      <AgentsCarousel />
    </div>
  );
}
