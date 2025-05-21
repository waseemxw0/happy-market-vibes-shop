
import React from "react";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CategoryBlocks from "@/components/CategoryBlocks";
import TrendingProductsGrid from "@/components/TrendingProductsGrid";
import BundleDealsSection from "@/components/BundleDealsSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InstagramSection from "@/components/InstagramSection";
import Newsletter from "@/components/Newsletter";
import FloatingCartBar from "@/components/FloatingCartBar";
import TrustBadges from "@/components/TrustBadges";
import FlashSaleTimer from "@/components/FlashSaleTimer";

const Index = () => {
  return (
    <LayoutWrapper>
      <div className="flex flex-col gap-14 md:gap-20">
        {/* Hero Section */}
        <HeroSection 
          headline="Feel-Good Products That Spark Joy"
          ctaText="Shop Best Sellers"
        />
        
        {/* Category Blocks */}
        <CategoryBlocks />
        
        {/* Flash Sale Timer */}
        <FlashSaleTimer 
          headline="Flash Sale Ends In:"
          endTime={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} // 3 days from now
        />
        
        {/* Trending Products Grid */}
        <TrendingProductsGrid 
          title="Top Picks This Week"
          subtitle="Curated with love, just for you"
        />
        
        {/* Bundle Deals Section */}
        <BundleDealsSection 
          title="Bundle & Save"
          subtitle="Create your perfect wellness package"
        />
        
        {/* Testimonial Carousel */}
        <TestimonialCarousel 
          title="What Our Customers Say"
        />
        
        {/* Trust Badges */}
        <TrustBadges />
        
        {/* Instagram Section */}
        <InstagramSection 
          title="Follow the Vibe @HappyMarketVibes"
        />
        
        {/* Newsletter */}
        <Newsletter 
          headline="Join & Get 15% Off"
          description="Sign up for our newsletter and get 15% off your first order!"
        />
      </div>
      
      {/* Floating Cart Bar */}
      <FloatingCartBar />
    </LayoutWrapper>
  );
};

export default Index;
