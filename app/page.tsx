import { HeroSection } from "@/components/hero-section";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Testimonials } from "@/components/testimonials";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
