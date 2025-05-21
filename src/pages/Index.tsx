
import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import TrendingCountdownSection from "@/components/TrendingCountdownSection";
import Newsletter from "@/components/Newsletter";
import { categoryData } from "@/components/CategoryData";

const Index = () => {
  // Using the Eco-Friendly Gadgets as the featured category on the homepage
  const featuredCategory = categoryData.ecoGadgets;
  
  return (
    <LayoutWrapper>
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <CategorySection 
          title={featuredCategory.title}
          subtitle={featuredCategory.subtitle}
          color={featuredCategory.color}
          products={featuredCategory.products}
          categoryKey="eco-friendly"
        />
        <TrendingSection />
        <TrendingCountdownSection />
        <ReviewsCarousel />
        <WhyShopWithUs />
        <Newsletter />
      </div>
    </LayoutWrapper>
  );
};

export default Index;
