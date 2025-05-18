
import React, { useEffect, useState } from "react";
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
import FilterSection from "@/components/FilterSection";
import TrendingCountdownSection from "@/components/TrendingCountdownSection";
import CommunitySection from "@/components/CommunitySection";
import MobileNav from "@/components/MobileNav";
import GiftFinder from "@/components/GiftFinder";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [showDiscount, setShowDiscount] = useState(false);
  
  useEffect(() => {
    // Show discount popup after 5 seconds
    const timer = setTimeout(() => {
      setShowDiscount(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleCloseDiscount = () => {
    setShowDiscount(false);
  };
  
  const handleClaimDiscount = () => {
    setShowDiscount(false);
    toast({
      title: "Discount Applied!",
      description: "10% off your first order",
      className: "bg-gradient-to-r from-orange to-orange/90 text-white"
    });
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 md:pb-0">
        <HeroSection />
        
        <FilterSection />
        
        {/* Product categories */}
        <div className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-softBlack tracking-tight">Shop By Category</h2>
            <p className="text-softBlack/70 text-center mb-10 max-w-xl mx-auto">Find exactly what you're looking for with our curated collections</p>
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
        
        <TrendingCountdownSection />
        
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
        
        <CommunitySection />
        
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
        <GiftFinder />
      </main>
      <Footer />
      <MobileNav />
      
      {/* Discount Popup */}
      {showDiscount && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
            <button 
              className="absolute top-4 right-4 text-softBlack/50 hover:text-softBlack"
              onClick={handleCloseDiscount}
            >
              ✕
            </button>
            
            <div className="bg-orange/20 text-orange font-semibold text-sm px-3 py-1 rounded-full w-fit mx-auto mb-4">
              New Visitor Offer
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2">WAIT! Get 10% OFF</h3>
            <p className="text-center text-softBlack/70 mb-6">
              Join thousands of TikTok shoppers and get a special discount on your first order!
            </p>
            
            <div className="bg-gradient-to-r from-orange/20 to-mint/20 p-6 rounded-xl text-center mb-6">
              <span className="text-4xl font-bold text-orange">10% OFF</span>
              <p className="text-sm text-softBlack/70 mt-2">Use code: TIKTOK10</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button 
                className="bg-orange text-white py-3 rounded-xl font-medium hover:bg-orange/90 transition-colors"
                onClick={handleClaimDiscount}
              >
                Claim My Discount
              </button>
              
              <button 
                className="text-softBlack/70 py-2 text-sm"
                onClick={handleCloseDiscount}
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
