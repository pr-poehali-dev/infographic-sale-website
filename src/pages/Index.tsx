import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/CategoryFilters";
import PortfolioSection from "@/components/FeaturedInfographics";
import ContactSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
