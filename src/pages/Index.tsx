import HeroSection from "@/components/HeroSection";
import CategoryFilters from "@/components/CategoryFilters";
import FeaturedInfographics from "@/components/FeaturedInfographics";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryFilters />
      <FeaturedInfographics />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
