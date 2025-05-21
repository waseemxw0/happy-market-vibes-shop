
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
import FilterSection from "@/components/FilterSection";

const Index = () => {
  // Using the Eco-Friendly Gadgets as the featured category on the homepage
  const featuredCategory = categoryData.ecoGadgets;
  
  return (
    <LayoutWrapper>
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        
        {/* First category section - Eco-Friendly */}
        <CategorySection 
          title={featuredCategory.title}
          subtitle={featuredCategory.subtitle}
          color={featuredCategory.color}
          products={featuredCategory.products}
          categoryKey="eco-friendly"
        />
        
        <TrendingSection />
        
        <TrendingCountdownSection />
        
        {/* Second category section - Home Decor */}
        <CategorySection 
          title={categoryData.homeDecor.title}
          subtitle={categoryData.homeDecor.subtitle}
          color={categoryData.homeDecor.color}
          products={categoryData.homeDecor.products}
          categoryKey="home-decor"
        />
        
        <ReviewsCarousel />
        
        {/* Third category section - Beauty Tools */}
        <CategorySection 
          title={categoryData.beautyTools.title}
          subtitle={categoryData.beautyTools.subtitle}
          color={categoryData.beautyTools.color}
          products={categoryData.beautyTools.products}
          categoryKey="beauty-tools"
        />
        
        <WhyShopWithUs />
        
        {/* Fourth category section - Beach Essentials */}
        <CategorySection 
          title={categoryData.beachEssentials.title}
          subtitle={categoryData.beachEssentials.subtitle}
          color={categoryData.beachEssentials.color}
          products={categoryData.beachEssentials.products}
          categoryKey="beach-essentials"
        />
        
        <FilterSection />
        
        <Newsletter />
      </div>
    </LayoutWrapper>
  );
};

export default Index;
