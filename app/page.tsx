import { HeroSection } from "@/components/hero-section";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { Testimonials } from "@/components/testimonials";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <section className=" flex-1">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <Testimonials />
      </section>
    </div>
  );
}
