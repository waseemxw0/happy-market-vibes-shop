
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

const Index = () => {
  return (
    <LayoutWrapper>
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <CategorySection />
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
