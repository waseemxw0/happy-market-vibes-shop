
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
        
        {/* Product categories */}
        <div className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-softBlack tracking-tight">Shop By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {Object.values(categoryData).map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group"
                  style={{ borderTop: `4px solid ${category.color}` }}
                >
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <div 
                      className="w-6 h-6" 
                      style={{ backgroundColor: category.color, borderRadius: "0.5rem" }}
                    ></div>
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: category.color }}>{category.title}</h3>
                  <p className="text-xs text-softBlack/60 line-clamp-2">{category.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <TrendingSection />
        
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
        
        <ReviewsCarousel />
        
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
        
        <Newsletter />
        <FloatingCart />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
