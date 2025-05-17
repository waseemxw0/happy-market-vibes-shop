
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import TrendingSection from "@/components/TrendingSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import { categoryData } from "@/components/CategoryData";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <CategorySection 
          title={categoryData.ecoGadgets.title} 
          subtitle={categoryData.ecoGadgets.subtitle} 
          color={categoryData.ecoGadgets.color} 
          products={categoryData.ecoGadgets.products}
        />
        
        <CategorySection 
          title={categoryData.techStyle.title} 
          subtitle={categoryData.techStyle.subtitle} 
          color={categoryData.techStyle.color} 
          products={categoryData.techStyle.products}
        />
        
        <WhyShopWithUs />
        
        <CategorySection 
          title={categoryData.glowUp.title} 
          subtitle={categoryData.glowUp.subtitle} 
          color={categoryData.glowUp.color} 
          products={categoryData.glowUp.products}
        />
        
        <CategorySection 
          title={categoryData.petStuff.title} 
          subtitle={categoryData.petStuff.subtitle} 
          color={categoryData.petStuff.color} 
          products={categoryData.petStuff.products}
        />
        
        <TrendingSection />
        
        <CategorySection 
          title={categoryData.roomVibes.title} 
          subtitle={categoryData.roomVibes.subtitle} 
          color={categoryData.roomVibes.color} 
          products={categoryData.roomVibes.products}
        />
        
        <CategorySection 
          title={categoryData.fitKit.title} 
          subtitle={categoryData.fitKit.subtitle} 
          color={categoryData.fitKit.color} 
          products={categoryData.fitKit.products}
        />
        
        <ReviewsCarousel />
        <Newsletter />
        <FloatingCart />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
