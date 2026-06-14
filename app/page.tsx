import HeroSection from "@/components/home/HeroSection";
import CategoryBanner from "@/components/home/CategoryBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ChitralBanner from "@/components/home/ChitralBanner";
import HealthBenefits from "@/components/home/HealthBenefits";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBanner />
      <FeaturedProducts />
      <WhyChooseUs />
      <ChitralBanner />
      <HealthBenefits />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
